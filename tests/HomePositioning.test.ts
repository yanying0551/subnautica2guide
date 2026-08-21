import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = path.resolve(__dirname, "..");
const read = (file: string) => fs.readFileSync(path.join(ROOT, file), "utf8");

describe("Subnautica 2 site positioning", () => {
  it("makes the homepage a database, guides, trackers, and tools entry point", () => {
    const home = read("src/components/HomePage.tsx");
    expect(home).toContain("Subnautica 2 Guide & Wiki");
    expect(home).toContain("Database");
    expect(home).toContain("Guides");
    expect(home).toContain("Trackers");
    expect(home).toContain("Tools");
  });

  it("uses Subnautica 2 as the primary SEO product phrase", () => {
    const layout = read("src/app/layout.tsx");
    expect(layout).toContain("Subnautica 2 Database — Guides, Wiki, Trackers & Official Updates");
    expect(layout).toContain("independent Subnautica 2 database");
    expect(layout).toContain("Subnautica 2");
  });

  it("does not present unverified gameplay as confirmed homepage content", () => {
    const home = read("src/components/HomePage.tsx");
    expect(home).toContain("source review");
    expect(home).toContain("Independent fan project");
    expect(home).not.toContain("93 documented species");
    expect(home).not.toContain("EA 1.0 + Hotfix 3");
  });
});
