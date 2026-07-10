import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Privacy Policy", "隐私政策", locale),
    description: pick(
      "Subnautica 2 Guide privacy policy. How we handle your data, cookies, and analytics.",
      "深海迷航2 指南隐私政策。我们如何处理你的数据、Cookie 和分析。",
      locale,
    ),
    alternates: getAlternates("/privacy", locale),
  };
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 page-content">
      <h1 className="text-3xl font-bold text-deep-100 mb-2">{pick("Privacy Policy", "隐私政策", locale)}</h1>
      <p className="text-sm text-deep-400/50 mb-8">{pick("Last updated: June 29, 2026", "最后更新：2026年6月29日", locale)}</p>

      <h2>{pick("1. Introduction", "1. 简介", locale)}</h2>
      <p>{pick(
        "Subnautica 2 Guide (accessible at <strong>subnautica2guide.wiki</strong>) is a fan-made, unofficial guide and wiki website for the game Subnautica 2 (developed by Unknown Worlds Entertainment).",
        "深海迷航2 指南（网址：<strong>subnautica2guide.wiki</strong>）是一个粉丝制作的非官方攻略和维基网站，内容关于 Unknown Worlds Entertainment 开发的游戏《深海迷航2》。",
        locale,
      )}</p>
      <p>{pick("This Privacy Policy explains how we collect, use, and protect your information when you visit our site.", "本隐私政策说明我们在你访问本站时如何收集、使用和保护你的信息。", locale)}</p>

      <h2>{pick("2. Information We Collect", "2. 我们收集的信息", locale)}</h2>
      <h3>{pick("2.1 Automatically Collected Information", "2.1 自动收集的信息", locale)}</h3>
      <p>{pick("When you visit Subnautica 2 Guide, certain information is automatically collected by third-party analytics services:", "当你访问深海迷航2 指南时，第三方分析服务会自动收集某些信息：", locale)}</p>
      <ul>
        <li>{pick("<strong>Google Analytics 4 (GA4)</strong>: Page views, session duration, approximate geographic location (city-level), browser type, device type", "<strong>Google Analytics 4 (GA4)</strong>：页面浏览量、会话时长、大致地理位置（城市级）、浏览器类型、设备类型", locale)}</li>
        <li>{pick("<strong>Microsoft Clarity</strong>: Click patterns, scroll behavior, mouse movements, and session recordings (anonymized)", "<strong>Microsoft Clarity</strong>：点击模式、滚动行为、鼠标移动和会话录像（已匿名化）", locale)}</li>
        <li>{pick("<strong>Cloudflare</strong>: IP address (temporary, for CDN routing and security)", "<strong>Cloudflare</strong>：IP 地址（临时，用于 CDN 路由和安全）", locale)}</li>
      </ul>

      <h3>{pick("2.2 Information You Voluntarily Provide", "2.2 你自愿提供的信息", locale)}</h3>
      <p>{pick("We do <strong>not</strong> require registration, login, or account creation. We do not collect names, email addresses, or any personally identifiable information through forms or comments.", "我们<strong>不</strong>要求注册、登录或创建账户。我们不通过表单或评论收集姓名、邮箱或任何个人身份信息。", locale)}</p>

      <h3>{pick("2.3 No Personal Account Data", "2.3 无个人账户数据", locale)}</h3>
      <p>{pick("Subnautica 2 Guide has no user registration system, no comments section, no forums, and no membership features.", "深海迷航2 指南没有用户注册系统、评论区、论坛或会员功能。", locale)}</p>

      <h2>{pick("3. How We Use Your Information", "3. 我们如何使用你的信息", locale)}</h2>
      <ul>
        <li>{pick("<strong>Improving content</strong>: Understanding which guides are most helpful", "<strong>改进内容</strong>：了解哪些指南最有帮助", locale)}</li>
        <li>{pick("<strong>Site optimization</strong>: Identifying performance issues", "<strong>站点优化</strong>：识别性能问题", locale)}</li>
        <li>{pick("<strong>Security</strong>: Protecting our site from malicious traffic via Cloudflare", "<strong>安全</strong>：通过 Cloudflare 保护站点免受恶意流量", locale)}</li>
        <li>{pick("<strong>Analytics</strong>: Measuring traffic patterns to prioritize content creation", "<strong>分析</strong>：测量流量模式以优先内容创作", locale)}</li>
      </ul>
      <p>{pick("We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.", "我们<strong>不</strong>出售、出租或与第三方共享你的个人信息用于营销。", locale)}</p>

      <h2>{pick("4. Cookies", "4. Cookie", locale)}</h2>
      <p>
        {pick("Our site uses minimal cookies, primarily for analytics purposes. See our ", "本站使用最少的 Cookie，主要用于分析。详情请见我们的", locale)}
        <Link href={l("/cookie-policy", locale)}>{pick("Cookie Policy", "Cookie 政策", locale)}</Link>
        {pick(" for details.", "。", locale)}
      </p>

      <h2>{pick("5. Children's Privacy (COPPA)", "5. 儿童隐私（COPPA）", locale)}</h2>
      <p>{pick("We do not knowingly collect personal information from children under 13. Our site does not require registration or have interactive features that collect personal data.", "我们不会故意收集 13 岁以下儿童的个人信息。本站不要求注册，也没有收集个人数据的互动功能。", locale)}</p>

      <h2>{pick("6. Your Rights (GDPR / CCPA)", "6. 你的权利（GDPR / CCPA）", locale)}</h2>
      <p>{pick("<strong>GDPR (EU visitors)</strong>: You have the right to access, rectify, erase, and export your data.", "<strong>GDPR（欧盟访客）</strong>：你有权访问、更正、删除和导出你的数据。", locale)}</p>
      <p>{pick("<strong>CCPA (California residents)</strong>: You have the right to know what data is collected, request deletion, and opt out of data sales (we do not sell data).", "<strong>CCPA（加州居民）</strong>：你有权了解收集了哪些数据、要求删除、选择退出数据出售（我们不出售数据）。", locale)}</p>
      <p>{pick("To exercise your rights, contact: <strong>privacy@subnautica2guide.wiki</strong>", "如需行使权利，请联系：<strong>privacy@subnautica2guide.wiki</strong>", locale)}</p>

      <h2>{pick("7. Contact", "7. 联系方式", locale)}</h2>
      <p>{pick("Email: <strong>privacy@subnautica2guide.wiki</strong>", "邮箱：<strong>privacy@subnautica2guide.wiki</strong>", locale)}</p>
      <p className="text-sm text-deep-400/50 mt-4">{pick("This is a fan-made site and is not affiliated with Unknown Worlds Entertainment or Krafton Inc.", "本站为粉丝制作，与 Unknown Worlds Entertainment 或 Krafton Inc. 无关。", locale)}</p>
    </div>
  );
}
