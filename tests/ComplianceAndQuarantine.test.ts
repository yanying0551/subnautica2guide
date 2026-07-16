// @vitest-environment node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const readSource = (path: string) =>
  readFileSync(resolve(process.cwd(), path), "utf8");

describe("production-truthful compliance disclosures", () => {
  it("documents the analytics that production actually loads", () => {
    const privacy = readSource("src/app/privacy/page.tsx");
    const layout = readSource("src/app/layout.tsx");

    expect(layout).toContain("plausible.shipsolo.io");
    expect(privacy).toContain("Plausible Analytics");
    expect(privacy).not.toContain("session recordings");
    expect(privacy).not.toContain("Google Analytics 4 (GA4)");
  });

  it("documents the real locale cookie without promising a missing banner", () => {
    const cookiePolicy = readSource("src/app/cookie-policy/page.tsx");

    expect(cookiePolicy).toContain("locale");
    expect(cookiePolicy).toContain("Plausible Analytics");
    expect(cookiePolicy).not.toContain("_ga");
    expect(cookiePolicy).not.toContain("_clck");
    expect(cookiePolicy).not.toContain("consent banner will appear");
  });
});

describe("reader-facing content quarantine", () => {
  const underReviewRoutes = [
    "src/app/guides/page.tsx",
    "src/app/guides/beginner-guide/page.tsx",
    "src/app/guides/digestive-incompatibility/page.tsx",
    "src/app/guides/angel-comb/page.tsx",
    "src/app/guides/feedback-resonator/page.tsx",
    "src/app/resources/page.tsx",
    "src/app/resources/[slug]/page.tsx",
    "src/app/creatures/page.tsx",
    "src/app/base-building/page.tsx",
    "src/app/biomods/page.tsx",
    "src/app/updates/roadmap/page.tsx",
  ];

  it.each(underReviewRoutes)("shows a visible source-review state: %s", (path) => {
    const source = readSource(path);
    expect(source).toContain("SourceReviewPage");
    expect(source).toContain("SOURCE_REVIEW_ROBOTS");
  });

  it("uses the existing layout landmark instead of nesting another main element", () => {
    const sourceReview = readSource("src/components/SourceReviewPage.tsx");

    expect(sourceReview).not.toContain("<main");
    expect(sourceReview).toContain("<section");
  });

  it("keeps resource-detail routing and canonical metadata valid while quarantined", () => {
    const resourcePage = readSource("src/app/resources/[slug]/page.tsx");

    expect(resourcePage).toContain("generateStaticParams");
    expect(resourcePage).toContain("notFound()");
    expect(resourcePage).toContain("getAlternates(`/resources/${slug}`");
  });

  it("removes representative unsupported promises", () => {
    const sources = underReviewRoutes.map(readSource).join("\n");

    expect(sources).not.toContain("93 documented species");
    expect(sources).not.toContain("4 confirmed biomes");
    expect(sources).not.toContain("Complete resource location guide");
    expect(sources).not.toContain("EA 1.1");
    expect(sources).not.toContain("EA 1.2");
  });
});
