import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "../src/app/sitemap";

const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");
const routes = [
  "subnautica-2-map-biomes",
  "subnautica-2-blueprints-crafting-recipes",
  "subnautica-2-walkthrough-progression",
];

describe("evidence-bound inner guide routes", () => {
  it("has a bilingual page, brief, and quarantine robots contract for every route", () => {
    for (const slug of routes) {
      const page = read(`src/app/guides/${slug}/page.tsx`);
      const brief = read(`docs/content-briefs/${slug}.md`);
      expect(page).toContain("SOURCE_REVIEW_ROBOTS");
      expect(page).toContain("getAlternates");
      expect(page).toContain("getLocale");
      expect(brief).toContain("Under source review");
      expect(brief).toContain("2026-08-20");
    }
  });

  it("keeps the new inner pages out of the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const slug of routes) {
      expect(urls).not.toContain(`https://subnautica2guide.wiki/guides/${slug}/`);
      expect(urls).not.toContain(`https://subnautica2guide.wiki/zh-cn/guides/${slug}/`);
    }
  });

  it("does not copy unsupported gameplay promises into the shared page", () => {
    const source = read("src/components/EvidenceBoundGuidePage.tsx");
    expect(source).toContain("not confirmed");
    expect(source).toContain("Early Access");
    expect(source).not.toContain("93 species");
    expect(source).not.toContain("coordinates are");
  });
});
