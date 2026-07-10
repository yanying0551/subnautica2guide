import type { Metadata } from "next";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Cookie Policy", "Cookie 政策", locale),
    description: pick(
      "How Subnautica 2 Guide uses cookies and how you can control them.",
      "深海迷航2 指南如何使用 Cookie 以及你如何控制它们。",
      locale,
    ),
    alternates: getAlternates("/cookie-policy", locale),
  };
}

export default async function CookiePolicy() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 page-content">
      <h1 className="text-3xl font-bold text-deep-100 mb-2">{pick("Cookie Policy", "Cookie 政策", locale)}</h1>
      <p className="text-sm text-deep-400/50 mb-8">{pick("Last updated: June 29, 2026", "最后更新：2026年6月29日", locale)}</p>

      <h2>{pick("1. What Are Cookies?", "1. 什么是 Cookie？", locale)}</h2>
      <p>{pick(
        "Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information to site owners.",
        "Cookie 是你访问网站时存储在设备上的小型文本文件。它们帮助网站正常运行并向站点所有者提供信息。",
        locale,
      )}</p>

      <h2>{pick("2. Cookies We Use", "2. 我们使用的 Cookie", locale)}</h2>
      <p>{pick(
        "Subnautica 2 Guide uses minimal cookies, primarily for analytics. We do <strong>not</strong> use advertising cookies or social media tracking cookies.",
        "深海迷航2 指南使用最少的 Cookie，主要用于分析。我们<strong>不</strong>使用广告 Cookie 或社交媒体追踪 Cookie。",
        locale,
      )}</p>

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
            <td>_ga</td>
            <td>Google Analytics</td>
            <td>{pick("Distinguishes unique users", "区分唯一用户", locale)}</td>
            <td>{pick("2 years", "2 年", locale)}</td>
          </tr>
          <tr>
            <td>_ga_&lt;id&gt;</td>
            <td>Google Analytics</td>
            <td>{pick("Persists session state", "保持会话状态", locale)}</td>
            <td>{pick("2 years", "2 年", locale)}</td>
          </tr>
          <tr>
            <td>_clck</td>
            <td>Microsoft Clarity</td>
            <td>{pick("User ID and preferences", "用户 ID 和偏好", locale)}</td>
            <td>{pick("1 year", "1 年", locale)}</td>
          </tr>
          <tr>
            <td>_clsk</td>
            <td>Microsoft Clarity</td>
            <td>{pick("Session connection", "会话连接", locale)}</td>
            <td>{pick("1 day", "1 天", locale)}</td>
          </tr>
          <tr>
            <td>cf_clearance</td>
            <td>Cloudflare</td>
            <td>{pick("Security check marker", "安全检查标记", locale)}</td>
            <td>{pick("1 hour", "1 小时", locale)}</td>
          </tr>
        </tbody>
      </table>

      <h2>{pick("3. How to Control Cookies", "3. 如何控制 Cookie", locale)}</h2>
      <p>{pick("Most browsers allow you to control cookies through their settings. You can block all cookies, delete existing cookies, or set site-specific preferences.", "大多数浏览器允许你通过设置控制 Cookie。你可以阻止所有 Cookie、删除现有 Cookie 或设置特定站点的偏好。", locale)}</p>
      <p>{pick("When you first visit our site, a cookie consent banner will appear where you can accept or reject non-essential cookies.", "首次访问本站时会显示 Cookie 同意横幅，你可以接受或拒绝非必要 Cookie。", locale)}</p>

      <h2>{pick("4. Contact", "4. 联系方式", locale)}</h2>
      <p>{pick("Email: <strong>privacy@subnautica2guide.wiki</strong>", "邮箱：<strong>privacy@subnautica2guide.wiki</strong>", locale)}</p>
    </div>
  );
}
