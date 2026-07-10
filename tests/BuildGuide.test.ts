import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("BUILD.md", () => {
  it("documents the OpenNext Cloudflare Worker deployment used by this app", () => {
    const buildGuide = readFileSync(resolve(process.cwd(), "BUILD.md"), "utf8");

    expect(buildGuide).toContain("OpenNext");
    expect(buildGuide).toContain("Cloudflare Worker");
    expect(buildGuide).toContain("npm run deploy");
    expect(buildGuide).not.toContain("output directory: `out`");
    expect(buildGuide).not.toContain("pure static");
  });
});
