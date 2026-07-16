import { describe, expect, it } from "vitest";
import {
  applyResponsePolicy,
  applySecurityHeaders,
  buildHttpsRedirect,
  getHttpsRedirectUrl,
  localizeRedirectLocation,
} from "../response-policy.mjs";

describe("worker response policy", () => {
  it("redirects plaintext requests to the same HTTPS URL", () => {
    expect(getHttpsRedirectUrl("http://subnautica2guide.wiki/zh-cn/privacy/?from=test")).toBe(
      "https://subnautica2guide.wiki/zh-cn/privacy/?from=test",
    );
    expect(buildHttpsRedirect(new Request("https://subnautica2guide.wiki/privacy/"))).toBeNull();
  });

  it("adds low-risk browser security headers without a script CSP", () => {
    const headers = applySecurityHeaders(new Headers(), true);
    expect(headers.get("Strict-Transport-Security")).toContain("max-age=31536000");
    expect(headers.has("Content-Security-Policy")).toBe(false);
    expect(headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(headers.get("X-Frame-Options")).toBe("DENY");
    expect(headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(headers.get("Permissions-Policy")).toContain("camera=()");
  });


  it("keeps Chinese redirects on the Chinese public route", async () => {
    const response = applyResponsePolicy(
      new Response(null, { status: 308, headers: { Location: "/privacy/" } }),
      { locale: "zh", needsSourceReview: false, publicRequestUrl: "https://subnautica2guide.wiki/zh-cn/guides/current/", isHttps: true },
    );
    expect(response.headers.get("Location")).toBe("/zh-cn/privacy/");
  });

  it("preserves external redirects and applies noindex only to review routes", () => {
    expect(localizeRedirectLocation("https://example.com/path", "zh-cn", "https://subnautica2guide.wiki/zh-cn/source/")).toBe("https://example.com/path");
    const response = applyResponsePolicy(new Response("review"), {
      locale: "en",
      needsSourceReview: true,
      publicRequestUrl: "https://subnautica2guide.wiki/guides/current/",
      isHttps: true,
    });
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, follow");
  });
});
