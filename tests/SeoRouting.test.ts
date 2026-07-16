import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { getAlternates } from "@/lib/seo-metadata";
import { localizeRedirectLocation } from "../content-indexing.mjs";

describe("public SEO routing", () => {

  it("retains the declared homepage sitemap priority", () => {
    const homepage = sitemap().find(
      (entry) => entry.url === "https://subnautica2guide.wiki/",
    );
    expect(homepage?.priority).toBe(1);
    expect(homepage?.changeFrequency).toBe("weekly");
  });

  it("uses final trailing-slash URLs in canonical and hreflang metadata", () => {
    const english = getAlternates("/privacy", "en")!;
    const chinese = getAlternates("/privacy", "zh")!;

    expect(english?.canonical).toBe("https://subnautica2guide.wiki/privacy/");
    expect(chinese?.canonical).toBe("https://subnautica2guide.wiki/zh-cn/privacy/");
    expect(english?.languages?.en).toBe("https://subnautica2guide.wiki/privacy/");
    expect(english?.languages?.["zh-CN"]).toBe("https://subnautica2guide.wiki/zh-cn/privacy/");
    expect(getAlternates("/", "en")?.canonical).toBe("https://subnautica2guide.wiki/");
    expect(getAlternates("/", "zh")?.canonical).toBe("https://subnautica2guide.wiki/zh-cn/");
  });

  it("publishes only final trailing-slash URLs in the sitemap", () => {
    for (const entry of sitemap()) {
      expect(new URL(entry.url).pathname, entry.url).toMatch(/\/$/);
    }
  });

  it.each([
    ["/privacy/", "/zh-cn/privacy/"],
    ["/info/system-requirements/?ref=sitemap", "/zh-cn/info/system-requirements/?ref=sitemap"],
    ["/", "/zh-cn/"],
  ])("restores the Chinese prefix on internal redirects: %s", (location, expected) => {
    expect(localizeRedirectLocation(location, "zh", "https://subnautica2guide.wiki/zh-cn/source/")).toBe(expected);
  });

  it("leaves English and external redirect locations unchanged", () => {
    expect(localizeRedirectLocation("/privacy/", "en", "https://subnautica2guide.wiki/privacy/")).toBe("/privacy/");
    expect(localizeRedirectLocation("https://store.steampowered.com/app/1962700/", "zh", "https://subnautica2guide.wiki/zh-cn/source/")).toBe("https://store.steampowered.com/app/1962700/");
    expect(localizeRedirectLocation("//example.com/path", "zh", "https://subnautica2guide.wiki/zh-cn/source/")).toBe("//example.com/path");
  });

  it("rewrites same-origin absolute redirects and preserves their URL form", () => {
    expect(
      localizeRedirectLocation(
        "https://subnautica2guide.wiki/privacy/?from=worker#top",
        "zh",
        "https://subnautica2guide.wiki/zh-cn/source/",
      ),
    ).toBe("https://subnautica2guide.wiki/zh-cn/privacy/?from=worker#top");
  });

  it("does not duplicate an existing Chinese prefix or normalize malformed locations", () => {
    expect(localizeRedirectLocation("/zh-cn/privacy/", "zh", "https://subnautica2guide.wiki/zh-cn/source/")).toBe("/zh-cn/privacy/");
    expect(localizeRedirectLocation("%%%", "zh", "https://subnautica2guide.wiki/zh-cn/source/")).toBe("%%%");
  });

  it("resolves path-, query-, and fragment-relative redirects against the upstream request", () => {
    const publicRequestUrl = "https://subnautica2guide.wiki/zh-cn/guides/current/";
    expect(localizeRedirectLocation("child", "zh", publicRequestUrl)).toBe(
      "/zh-cn/guides/current/child",
    );
    expect(localizeRedirectLocation("../sibling", "zh", publicRequestUrl)).toBe(
      "/zh-cn/guides/sibling",
    );
    expect(localizeRedirectLocation("?next=1", "zh", publicRequestUrl)).toBe(
      "/zh-cn/guides/current/?next=1",
    );
    expect(localizeRedirectLocation("#fragment", "zh", publicRequestUrl)).toBe(
      "/zh-cn/guides/current/#fragment",
    );
  });
});
