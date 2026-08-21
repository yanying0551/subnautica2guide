import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { l } from "@/lib/server-locale";
import { guideRegistry } from "@/lib/guide-registry";

describe("bilingual guide registry", () => {
  it("contains the reference statuses and complete bilingual fields", () => {
    expect(guideRegistry.find((entry) => entry.path === "/info/system-requirements")?.status).toBe("verified");
    expect(guideRegistry.find((entry) => entry.path === "/guides/multiplayer")?.status).toBe("limited");
    expect(guideRegistry.find((entry) => entry.path === "/updates/roadmap")?.status).toBe("verified");
    for (const entry of guideRegistry) {
      expect(entry.slug).toBeTruthy();
      expect(entry.title.en).toBeTruthy();
      expect(entry.title.zh).toBeTruthy();
      expect(entry.description.en).toBeTruthy();
      expect(entry.description.zh).toBeTruthy();
      expect(["verified", "limited", "review"]).toContain(entry.status);
    }
  });

  it("localizes registry paths without changing English paths", () => {
    expect(l("/guides/multiplayer", "en")).toBe("/guides/multiplayer");
    expect(l("/guides/multiplayer", "zh")).toBe("/zh-cn/guides/multiplayer");
  });

  it("excludes the hub and review routes from the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).not.toContain("https://subnautica2guide.wiki/guides/");
    for (const entry of guideRegistry.filter((item) => item.status === "review")) {
      expect(urls).not.toContain(`https://subnautica2guide.wiki${entry.path}/`);
      expect(urls).not.toContain(`https://subnautica2guide.wiki/zh-cn${entry.path}/`);
    }
  });
});