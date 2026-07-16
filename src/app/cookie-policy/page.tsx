import type { Metadata } from "next";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Cookie Policy", "Cookie 政策", locale),
    description: pick(
      "The functional and security cookies currently used by Subnautica 2 Guide.",
      "深海迷航2 指南当前使用的功能性和安全 Cookie。",
      locale,
    ),
    alternates: getAlternates("/cookie-policy", locale),
  };
}

export default async function CookiePolicy() {
  const locale = await getLocale();
  return (
    <div className="page-content mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-deep-100">{pick("Cookie Policy", "Cookie 政策", locale)}</h1>
      <p className="mb-8 text-sm text-deep-400/70">{pick("Last updated: July 16, 2026", "最后更新：2026年7月16日", locale)}</p>

      <h2>{pick("1. Current setup", "1. 当前配置", locale)}</h2>
      <p>{pick(
        "The current production site uses a functional language-preference cookie and may use a Cloudflare security cookie. Plausible Analytics is used for aggregate traffic measurement and is not configured to set analytics cookies. The current deployment does not load Google Analytics or Microsoft Clarity.",
        "当前生产站使用功能性语言偏好 Cookie，并可能使用 Cloudflare 安全 Cookie。Plausible Analytics 用于汇总流量统计，当前未配置分析 Cookie。当前部署未加载 Google Analytics 或 Microsoft Clarity。",
        locale,
      )}</p>

      <h2>{pick("2. Cookies that may be set", "2. 可能设置的 Cookie", locale)}</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>{pick("Cookie", "Cookie", locale)}</th>
              <th>{pick("Provider", "提供方", locale)}</th>
              <th>{pick("Purpose", "用途", locale)}</th>
              <th>{pick("Duration", "时长", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>locale</td>
              <td>{pick("This site", "本站", locale)}</td>
              <td>{pick("Keeps English or Chinese route preference consistent.", "保持英文或中文路由偏好一致。", locale)}</td>
              <td>{pick("Up to 1 year; SameSite=Lax and Secure on HTTPS.", "最长 1 年；SameSite=Lax，并在 HTTPS 上设置 Secure。", locale)}</td>
            </tr>
            <tr>
              <td>cf_clearance</td>
              <td>Cloudflare</td>
              <td>{pick("May be set after a security challenge to recognize a verified browser.", "可能在完成安全验证后设置，用于识别已验证的浏览器。", locale)}</td>
              <td>{pick("Set by Cloudflare according to its security configuration.", "由 Cloudflare 根据安全配置确定。", locale)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{pick("3. Plausible Analytics", "3. Plausible Analytics", locale)}</h2>
      <p>{pick(
        "Plausible Analytics measures aggregate usage without the Google Analytics or Microsoft Clarity cookies previously described on this page. It is not used for cross-site advertising tracking.",
        "Plausible Analytics 在不使用本页旧版本所述 Google Analytics 或 Microsoft Clarity Cookie 的情况下统计汇总使用情况，且不用于跨站广告追踪。",
        locale,
      )}</p>

      <h2>{pick("4. Your controls", "4. 你的控制方式", locale)}</h2>
      <p>{pick(
        "You can clear or block cookies through your browser settings. Blocking the locale cookie may reset the language preference; blocking a Cloudflare security cookie may cause a security challenge to appear again.",
        "你可以通过浏览器设置清除或阻止 Cookie。阻止 locale Cookie 可能重置语言偏好；阻止 Cloudflare 安全 Cookie 可能导致安全验证再次出现。",
        locale,
      )}</p>
      <p>{pick(
        "Because the current analytics configuration is cookieless and the listed cookies are functional or security-related, the site does not currently display a non-essential-cookie consent banner. If non-essential analytics or advertising cookies are enabled later, this policy and the consent mechanism must be updated before activation where required.",
        "由于当前分析配置不使用 Cookie，所列 Cookie 均属于功能性或安全用途，本站目前不显示非必要 Cookie 同意横幅。如果未来启用非必要分析或广告 Cookie，将在适用地区启用前同步更新本政策和同意机制。",
        locale,
      )}</p>

      <h2>{pick("5. Contact", "5. 联系方式", locale)}</h2>
      <p>{pick("Cookie and privacy questions: privacy@subnautica2guide.wiki", "Cookie 与隐私问题：privacy@subnautica2guide.wiki", locale)}</p>
    </div>
  );
}
