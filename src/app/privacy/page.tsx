import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Privacy Policy", "隐私政策", locale),
    description: pick(
      "How Subnautica 2 Guide handles analytics, security data, and your locale preference.",
      "深海迷航2 指南如何处理分析、安全数据和语言偏好。",
      locale,
    ),
    alternates: getAlternates("/privacy", locale),
  };
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  return (
    <div className="page-content mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-deep-100">{pick("Privacy Policy", "隐私政策", locale)}</h1>
      <p className="mb-8 text-sm text-deep-400/70">{pick("Last updated: July 16, 2026", "最后更新：2026年7月16日", locale)}</p>

      <h2>{pick("1. Scope", "1. 适用范围", locale)}</h2>
      <p>{pick(
        "This policy applies to subnautica2guide.wiki, an independent, fan-made Subnautica 2 guide. The public site has no accounts, comments, forums, payments, uploads, or membership features.",
        "本政策适用于 subnautica2guide.wiki，这是一个独立的粉丝制作《深海迷航2》指南站。公开站点没有账户、评论、论坛、付款、上传或会员功能。",
        locale,
      )}</p>

      <h2>{pick("2. Current data processing", "2. 当前数据处理", locale)}</h2>
      <h3>{pick("2.1 Plausible Analytics", "2.1 Plausible Analytics", locale)}</h3>
      <p>{pick(
        "We use Plausible Analytics to measure aggregate traffic such as page views, referral sources, approximate country, device type, and browser. The site does not use Google Analytics or Microsoft Clarity. GA4 and Microsoft Clarity are not loaded by the current layout.",
        "我们使用 Plausible Analytics 统计页面浏览量、来源网站、大致国家或地区、设备类型和浏览器等汇总流量。本站目前未使用 Google Analytics 或 Microsoft Clarity；当前页面布局不会加载 GA4 或 Microsoft Clarity。",
        locale,
      )}</p>

      <h3>{pick("2.2 Cloudflare", "2.2 Cloudflare", locale)}</h3>
      <p>{pick(
        "Cloudflare processes network information, including IP addresses and request metadata, to deliver the site, prevent abuse, and provide security. Cloudflare may set a security cookie when a visitor is presented with a challenge.",
        "Cloudflare 会处理 IP 地址和请求元数据等网络信息，用于提供站点、阻止滥用并保障安全。当访客遇到安全验证时，Cloudflare 可能设置安全 Cookie。",
        locale,
      )}</p>

      <h3>{pick("2.3 Language preference", "2.3 语言偏好", locale)}</h3>
      <p>{pick(
        "The site stores a locale preference cookie so English and Chinese routes render consistently. It is functional, not advertising or cross-site tracking.",
        "本站保存 locale 语言偏好 Cookie，以确保英文和中文路由稳定显示。它属于功能性 Cookie，不用于广告或跨站追踪。",
        locale,
      )}</p>

      <h2>{pick("3. Information you provide", "3. 你主动提供的信息", locale)}</h2>
      <p>{pick(
        "If you email us, the message and address are processed only to respond to your request and maintain necessary correspondence records.",
        "如果你通过电子邮件联系我们，邮件内容和地址仅用于回复请求并保存必要的通信记录。",
        locale,
      )}</p>

      <h2>{pick("4. Purposes and sharing", "4. 使用目的与共享", locale)}</h2>
      <ul>
        <li>{pick("Operate, secure, and troubleshoot the site.", "运行、保护和排查站点问题。", locale)}</li>
        <li>{pick("Understand aggregate traffic and prioritize content improvements.", "了解汇总流量并确定内容改进优先级。", locale)}</li>
        <li>{pick("Comply with legal obligations and respond to valid requests.", "履行法律义务并回应有效请求。", locale)}</li>
      </ul>
      <p>{pick(
        "We do not sell personal information. Data is shared only with service providers needed to operate the site, such as Cloudflare and Plausible, or when legally required.",
        "我们不出售个人信息。数据仅会与运行本站所需的服务商（如 Cloudflare 和 Plausible）共享，或在法律要求时提供。",
        locale,
      )}</p>

      <h2>{pick("5. Cookies", "5. Cookie", locale)}</h2>
      <p>
        {pick("See the current ", "请查看当前的", locale)}
        <Link href={l("/cookie-policy", locale)}>{pick("Cookie Policy", "Cookie 政策", locale)}</Link>
        {pick(" for the functional and security cookies used by the site.", "，了解本站使用的功能性和安全 Cookie。", locale)}
      </p>

      <h2>{pick("6. Your choices and rights", "6. 你的选择和权利", locale)}</h2>
      <p>{pick(
        "Depending on your location, you may have rights to request access, correction, deletion, restriction, or a copy of personal data associated with you. You can also clear or block cookies in your browser, although blocking functional or security cookies may affect site behavior.",
        "根据你所在地区，你可能有权请求访问、更正、删除、限制处理或获取与你有关的个人数据副本。你也可以在浏览器中清除或阻止 Cookie，但阻止功能性或安全 Cookie 可能影响站点使用。",
        locale,
      )}</p>

      <h2>{pick("7. Children", "7. 儿童隐私", locale)}</h2>
      <p>{pick(
        "The site is not designed to collect personal information from children and has no account or interactive submission features.",
        "本站不以收集儿童个人信息为目的，也没有账户或互动提交功能。",
        locale,
      )}</p>

      <h2>{pick("8. Contact", "8. 联系方式", locale)}</h2>
      <p>{pick("Privacy requests: privacy@subnautica2guide.wiki", "隐私请求：privacy@subnautica2guide.wiki", locale)}</p>
      <p className="mt-4 text-sm text-deep-400/70">{pick(
        "This fan site is not affiliated with Unknown Worlds Entertainment or Krafton Inc.",
        "本站为粉丝制作，与 Unknown Worlds Entertainment 或 Krafton Inc. 无关。",
        locale,
      )}</p>
    </div>
  );
}
