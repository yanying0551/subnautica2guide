import type { Metadata } from "next";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Disclaimer", "免责声明", locale),
    description: pick(
      "Disclaimer for Subnautica 2 Guide, a fan-made, unofficial website.",
      "深海迷航2 指南免责声明——粉丝制作的非官方网站。",
      locale,
    ),
    alternates: getAlternates("/disclaimer", locale),
  };
}

export default async function DisclaimerPage() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 page-content">
      <h1 className="text-3xl font-bold text-deep-100 mb-2">{pick("Disclaimer", "免责声明", locale)}</h1>
      <p className="text-sm text-deep-400/50 mb-8">{pick("Last updated: June 29, 2026", "最后更新：2026年6月29日", locale)}</p>

      <h2>{pick("1. Fan-Made Website", "1. 粉丝制作网站", locale)}</h2>
      <p>{pick(
        "<strong>Subnautica 2 Guide</strong> (subnautica2guide.wiki) is an <strong>independent, fan-made website</strong>. It is not affiliated with, authorized by, endorsed by, or officially connected with Unknown Worlds Entertainment, Krafton Inc., or any of their subsidiaries.",
        "<strong>深海迷航2 指南</strong>（subnautica2guide.wiki）是一个<strong>独立的粉丝制作网站</strong>。与 Unknown Worlds Entertainment、Krafton Inc. 或其子公司无关，也未获其授权、认可或官方合作。",
        locale,
      )}</p>

      <h2>{pick("2. Copyright and Trademarks", "2. 版权和商标", locale)}</h2>
      <p>{pick(
        "All game names, titles, logos, characters, artwork, screenshots, and related materials are the property of <strong>Unknown Worlds Entertainment</strong>. &quot;Subnautica&quot; is a registered trademark of Unknown Worlds Entertainment. All screenshots and gameplay images are used under fair use for commentary and education.",
        "所有游戏名称、标题、标志、角色、美术、截图和相关材料均为<strong>Unknown Worlds Entertainment</strong>的财产。&quot;Subnautica&quot; 是 Unknown Worlds Entertainment 的注册商标。所有截图和游戏画面基于合理使用原则用于评论和教育。",
        locale,
      )}</p>

      <h2>{pick("3. Content Accuracy", "3. 内容准确性", locale)}</h2>
      <p>{pick(
        "Information on this site is provided for general informational purposes. Subnautica 2 is in Early Access — game content may change with updates. We make no warranties about completeness, accuracy, or reliability of any content.",
        "本站信息仅供一般参考。深海迷航2 处于抢先体验阶段——游戏内容可能随更新而变化。我们对任何内容的完整性、准确性或可靠性不作任何保证。",
        locale,
      )}</p>

      <h2>{pick("4. External Links", "4. 外部链接", locale)}</h2>
      <p>{pick("This site contains links to external websites. We have no control over the content, privacy practices, or availability of these sites.", "本站包含外部网站链接。我们无法控制这些网站的内容、隐私做法或可用性。", locale)}</p>

      <h2>{pick("5. Limitation of Liability", "5. 责任限制", locale)}</h2>
      <p>{pick("The operators of Subnautica 2 Guide are not liable for any loss or damage arising from the use of or reliance on this website or its content.", "深海迷航2 指南的运营者对因使用或依赖本网站或其内容而产生的任何损失或损害不承担责任。", locale)}</p>

      <h2>{pick("6. Contact", "6. 联系方式", locale)}</h2>
      <p>{pick("Email: <strong>legal@subnautica2guide.wiki</strong>", "邮箱：<strong>legal@subnautica2guide.wiki</strong>", locale)}</p>
    </div>
  );
}
