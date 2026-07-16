import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = path.resolve(__dirname, "..");
const read = (relativePath: string) =>
  fs.readFileSync(path.join(ROOT, relativePath), "utf8");

describe("production-accurate legal disclosures", () => {
  it("describes the analytics and locale cookie that production actually uses", () => {
    const privacy = read("src/app/privacy/page.tsx");
    const cookies = read("src/app/cookie-policy/page.tsx");

    expect(privacy).toContain("Plausible");
    expect(privacy).toContain("locale");
    expect(cookies).toContain("Plausible");
    expect(cookies).toContain("locale");
    expect(cookies).toContain("SameSite=Lax");
    expect(cookies).toContain("Secure on HTTPS");
  });

  it("does not present optional GA4 or Clarity integrations as currently active", () => {
    const privacy = read("src/app/privacy/page.tsx");
    const cookies = read("src/app/cookie-policy/page.tsx");

    expect(privacy).toContain("does not use Google Analytics or Microsoft Clarity");
    expect(privacy).toContain("未使用 Google Analytics 或 Microsoft Clarity");
    expect(privacy).toContain("GA4 and Microsoft Clarity are not loaded");
    expect(privacy).toContain("不会加载 GA4 或 Microsoft Clarity");
    expect(privacy).not.toContain("optional services");
    expect(privacy).not.toContain("可选服务");
    expect(cookies).not.toContain("<td>_ga</td>");
    expect(cookies).not.toContain("<td>_clck</td>");
    expect(cookies).not.toContain("<td>_clsk</td>");
  });

  it("cannot enable GA4 or Clarity by environment variable without a consent gate", () => {
    const layout = read("src/app/layout.tsx");

    expect(layout).not.toContain("NEXT_PUBLIC_GA_ID");
    expect(layout).not.toContain("NEXT_PUBLIC_CLARITY_ID");
    expect(layout).not.toContain("googletagmanager.com");
    expect(layout).not.toContain("clarity.ms");
  });

  it("does not promise a consent banner that is not implemented", () => {
    const cookies = read("src/app/cookie-policy/page.tsx");

    expect(cookies).not.toContain("a cookie consent banner will appear");
    expect(cookies).not.toContain("会显示 Cookie 同意横幅");
  });

  it("sets the locale preference as a Secure cookie on HTTPS requests", () => {
    const middleware = read("src/middleware.ts");
    const localeContext = read("src/contexts/LocaleContext.tsx");

    expect(middleware).toContain('secure: request.nextUrl.protocol === "https:"');
    expect(localeContext).toContain('window.location.protocol === "https:"');
    expect(localeContext).toContain('secureSuffix');
    expect(middleware).toContain('sameSite: "lax"');
    expect(middleware).toContain("maxAge:");
  });

  it("does not publish an unsupported Early Access release date in Terms", () => {
    const terms = read("src/app/terms/page.tsx");

    expect(terms).not.toContain("released May 14, 2026");
    expect(terms).not.toContain("2026年5月14日发布");
    expect(terms).toContain("may change during Early Access");
    expect(terms).toContain("可能在抢先体验期间发生变化");
  });
});
