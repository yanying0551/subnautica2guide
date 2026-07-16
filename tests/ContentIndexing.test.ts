import { describe, expect, it } from "vitest";
import {
  buildInternalRequest,
  classifyRequestPath,
  needsSourceReview,
  normalizeContentPath,
} from "../content-indexing.mjs";

describe("content indexing quarantine", () => {
  it.each([
    "/guides/multiplayer",
    "/guides/multiplayer/",
    "/zh-cn/guides/multiplayer",
    "/zh-cn/guides/multiplayer/",
  ])("keeps the verified multiplayer route indexable: %s", (pathname) => {
    expect(classifyRequestPath(pathname).needsSourceReview).toBe(false);
  });

  it.each([
    "/guides/",
    "/guides/getting-started/",
    "/zh-cn/resources/titanium/",
    "/updates/roadmap/",
  ])("keeps unverified route families quarantined: %s", (pathname) => {
    expect(classifyRequestPath(pathname).needsSourceReview).toBe(true);
  });

  it.each([
    "/guides%2Fmultiplayer",
    "/%67uides/multiplayer",
    "/guides\\multiplayer",
    "/guides//multiplayer",
    "/zh-cn/zh-cn/guides/multiplayer",
  ])("fails closed for ambiguous request paths: %s", (pathname) => {
    expect(classifyRequestPath(pathname).needsSourceReview).toBe(true);
  });

  it("strips the locale exactly once and preserves the forwarded path", () => {
    expect(classifyRequestPath("/zh-cn/guides/multiplayer/")).toMatchObject({
      locale: "zh",
      internalPath: "/guides/multiplayer/",
      needsSourceReview: false,
    });
  });

  it("preserves request semantics while changing only URL and headers", async () => {
    const controller = new AbortController();
    const original = new Request("https://subnautica2guide.wiki/zh-cn/api/check", {
      method: "POST",
      body: "payload",
      credentials: "include",
      redirect: "manual",
      signal: controller.signal,
    });
    const headers = new Headers(original.headers);
    headers.set("x-locale", "zh");

    const forwarded = buildInternalRequest(
      original,
      new URL("https://subnautica2guide.wiki/api/check"),
      headers,
    );

    expect(forwarded.url).toBe("https://subnautica2guide.wiki/api/check");
    expect(forwarded.method).toBe("POST");
    expect(forwarded.credentials).toBe("include");
    expect(forwarded.redirect).toBe("manual");
    expect(forwarded.headers.get("x-locale")).toBe("zh");
    expect(await forwarded.text()).toBe("payload");
    controller.abort();
    expect(forwarded.signal.aborted).toBe(true);
  });

  it("normalizes trailing slashes only for policy matching", () => {
    expect(normalizeContentPath("/guides/multiplayer/")).toBe(
      "/guides/multiplayer",
    );
    expect(normalizeContentPath("/")).toBe("/");
    expect(needsSourceReview("/guides/multiplayer/")).toBe(false);
  });
});
