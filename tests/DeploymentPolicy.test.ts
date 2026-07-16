import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { applySecurityHeaders } from "../response-policy.mjs";

const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

describe("deployment policy", () => {
  it("routes every asset request through the response-policy worker", () => {
    expect(read("wrangler.jsonc")).toMatch(/run_worker_first["']?\s*:\s*true/);
  });

  it("defers script CSP while retaining frame protection", () => {
    const headers = applySecurityHeaders(new Headers(), true);
    expect(headers.has("Content-Security-Policy")).toBe(false);
    expect(headers.get("X-Frame-Options")).toBe("DENY");
    expect(read("cloudflare-worker.mjs")).not.toContain("nonce");
    expect(read("src/app/layout.tsx")).not.toContain("nonce");
  });

  it("publishes canonical entries for both locale routes", () => {
    const homeEntries = sitemap().filter((entry) =>
      [
        "https://subnautica2guide.wiki/",
        "https://subnautica2guide.wiki/zh-cn/",
      ].includes(entry.url),
    );
    expect(homeEntries).toHaveLength(2);
    expect(homeEntries.map((entry) => entry.url).sort()).toEqual([
      "https://subnautica2guide.wiki/",
      "https://subnautica2guide.wiki/zh-cn/",
    ]);
  });
});
