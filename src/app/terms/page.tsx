import type { Metadata } from "next";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Terms of Service", "服务条款", locale),
    description: pick(
      "Subnautica 2 Guide terms of service. By using this site, you agree to these terms.",
      "深海迷航2 指南服务条款。使用本站即表示你同意这些条款。",
      locale,
    ),
    alternates: getAlternates("/terms", locale),
  };
}

export default async function TermsPage() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 page-content">
      <h1 className="text-3xl font-bold text-deep-100 mb-2">{pick("Terms of Service", "服务条款", locale)}</h1>
      <p className="text-sm text-deep-400/50 mb-8">{pick("Last updated: July 16, 2026", "最后更新：2026年7月16日", locale)}</p>

      <h2>{pick("1. Acceptance", "1. 接受条款", locale)}</h2>
      <p>{pick("By accessing Subnautica 2 Guide, you agree to these terms. If you do not agree, please do not use the site.", "访问深海迷航2 指南即表示你同意这些条款。如不同意，请不要使用本站。", locale)}</p>

      <h2>{pick("2. Fan-Made Status", "2. 粉丝制作声明", locale)}</h2>
      <p>{pick(
        "<strong>Subnautica 2 Guide is a fan-made, unofficial website.</strong> It is not affiliated with, endorsed by, or sponsored by Unknown Worlds Entertainment, Krafton Inc., or any of their subsidiaries. All game-related content and trademarks are the property of their respective owners.",
        "<strong>深海迷航2 指南是一个粉丝制作的非官方网站。</strong>与 Unknown Worlds Entertainment、Krafton Inc. 或其子公司无关，也未获其认可或赞助。所有游戏相关内容和商标均为各自所有者的财产。",
        locale,
      )}</p>

      <h2>{pick("3. Content Accuracy", "3. 内容准确性", locale)}</h2>
      <p>{pick(
        "This site covers Subnautica 2 during Early Access. Game mechanics, item locations, and creature behavior may change during Early Access and with later updates. We strive to keep content updated but cannot guarantee completeness or accuracy at all times.",
        "本站提供《深海迷航2》抢先体验期间的相关指南。游戏机制、物品位置和生物行为可能在抢先体验期间发生变化，也可能随后续更新调整。我们努力保持内容更新，但无法保证始终完整或准确。",
        locale,
      )}</p>

      <h2>{pick("4. Intellectual Property", "4. 知识产权", locale)}</h2>
      <p>{pick(
        "Our original written content is licensed under <strong>Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)</strong>. Game names, logos, screenshots, and designs are the property of Unknown Worlds Entertainment.",
        "我们的原创文字内容采用<strong>知识共享署名-非商业性使用 4.0 国际许可（CC BY-NC 4.0）</strong>。游戏名称、标志、截图和设计均为 Unknown Worlds Entertainment 的财产。",
        locale,
      )}</p>

      <h2>{pick("5. External Links", "5. 外部链接", locale)}</h2>
      <p>{pick("The site may contain links to external websites. We are not responsible for the content or privacy practices of external sites.", "本站可能包含外部网站链接。我们对外部网站的内容或隐私做法不承担责任。", locale)}</p>

      <h2>{pick("6. Limitation of Liability", "6. 责任限制", locale)}</h2>
      <p>{pick("This site is provided &quot;as is&quot; without any warranties. We are not liable for damages arising from the use of this site or reliance on its content.", "本站按&quot;原样&quot;提供，不附任何保证。对于因使用本站或依赖其内容而产生的损害，我们不承担责任。", locale)}</p>

      <h2>{pick("7. Contact", "7. 联系方式", locale)}</h2>
      <p>{pick("Email: <strong>legal@subnautica2guide.wiki</strong>", "邮箱：<strong>legal@subnautica2guide.wiki</strong>", locale)}</p>
    </div>
  );
}
