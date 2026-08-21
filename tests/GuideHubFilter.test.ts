import { describe, expect, it } from "vitest";
import { filterGuideEntries } from "@/components/GuideHub";
import { guideRegistry } from "@/lib/guide-registry";

describe("Guide Hub filtering", () => {
  it("returns all entries for an empty query", () => {
    expect(filterGuideEntries(guideRegistry, "", "all")).toHaveLength(guideRegistry.length);
  });

  it("matches bilingual titles and descriptions", () => {
    expect(filterGuideEntries(guideRegistry, "多人", "all").map((entry) => entry.slug)).toContain("multiplayer");
    expect(filterGuideEntries(guideRegistry, "blueprint", "all").map((entry) => entry.slug)).toContain("blueprints");
  });

  it("filters by editorial status without exposing unrelated entries", () => {
    const verified = filterGuideEntries(guideRegistry, "", "verified");
    expect(verified.length).toBeGreaterThan(0);
    expect(verified.every((entry) => entry.status === "verified")).toBe(true);
  });
});
