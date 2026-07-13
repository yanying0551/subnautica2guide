import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

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

  it("keeps unverified guide sections out of search results until review is complete", () => {
    const worker = readSource("cloudflare-worker.mjs");
    const sitemap = readSource("src/app/sitemap.ts");

    expect(worker).toContain("X-Robots-Tag");
    expect(worker).toContain("noindex, follow");
    expect(worker).toContain("/guides");
    expect(worker).toContain("/resources");
    expect(sitemap).not.toContain('"/guides"');
    expect(sitemap).not.toContain('"/resources"');
  });
});
