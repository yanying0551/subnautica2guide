import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "../src/app/sitemap";

const readSource = (path: string) =>
  readFileSync(resolve(process.cwd(), path), "utf8");

describe("content verification guardrails", () => {
  it("keeps unsupported release and build claims out of the homepage", () => {
    const home = readSource("src/components/HomePage.tsx");
    const layout = readSource("src/app/layout.tsx");

    expect(home).toContain("source review");
    expect(layout).toContain("under source review");
    expect(home).not.toContain("source-reviewed");
    expect(layout).not.toContain("source-reviewed");
    expect(home).not.toContain("EA 1.0");
    expect(home).not.toContain("Hotfix 3");
    expect(home).not.toContain("May 14, 2026");
    expect(home).not.toContain("$29.99 USD");
    expect(home).not.toContain("Luca");
    expect(layout).not.toContain("EA update tracker");
  });

  it("emits final trailing-slash URLs so localized sitemap entries do not redirect", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain("https://subnautica2guide.wiki/zh-cn/privacy/");
    expect(urls).toContain("https://subnautica2guide.wiki/zh-cn/guides/multiplayer/");
    expect(urls).not.toContain("https://subnautica2guide.wiki/zh-cn/privacy");
  });

  it("wires HTTPS redirects and response policy into the production Worker", () => {
    const worker = readSource("cloudflare-worker.mjs");
    const wrangler = readSource("wrangler.jsonc");

    expect(worker).toContain("buildHttpsRedirect");
    expect(worker).toContain("applyResponsePolicy");
    expect(worker).toContain("publicRequestUrl");
    expect(wrangler).toContain('"run_worker_first": true');
  });

  it("keeps unverified guide sections out of search results until review is complete", () => {
    const worker = readSource("cloudflare-worker.mjs");
    const responsePolicy = readSource("response-policy.mjs");
    const indexing = readSource("content-indexing.mjs");
    const sitemap = readSource("src/app/sitemap.ts");

    expect(worker).toContain("applyResponsePolicy");
    expect(responsePolicy).toContain("X-Robots-Tag");
    expect(responsePolicy).toContain("noindex, follow");
    expect(indexing).toContain("/guides");
    expect(indexing).toContain("/resources");
    expect(indexing).not.toContain('"/info"');
    expect(sitemap).not.toContain('"/guides"');
    expect(sitemap).not.toContain('"/resources"');
    expect(sitemap).toContain('"/info/system-requirements"');
  });

  it("documents only analytics and cookies that the application actually uses", () => {
    const layout = readSource("src/app/layout.tsx");
    const privacy = readSource("src/app/privacy/page.tsx");
    const cookies = readSource("src/app/cookie-policy/page.tsx");

    expect(layout).toContain("plausible.shipsolo.io");
    expect(privacy).toContain("Plausible");
    expect(cookies).toContain("Plausible");
    expect(cookies).toContain("locale");
    expect(cookies).not.toContain("a cookie consent banner will appear");
    expect(privacy).toContain("not loaded by the current layout");
  });

  it("does not present quarantined route summaries as complete or confirmed", () => {
    const quarantinedSources = [
      "src/app/creatures/page.tsx",
      "src/app/resources/page.tsx",
      "src/app/base-building/page.tsx",
      "src/app/biomods/page.tsx",
      "src/app/updates/roadmap/page.tsx",
    ].map(readSource).join("\n");

    expect(quarantinedSources).not.toMatch(/Complete (?:guide|creature|resource)/i);
    expect(quarantinedSources).not.toMatch(/confirmed biomes/i);
    expect(quarantinedSources).not.toContain("EA 1.1 and EA 1.2 plans");
    expect(quarantinedSources).toContain("source review");
  });
});
