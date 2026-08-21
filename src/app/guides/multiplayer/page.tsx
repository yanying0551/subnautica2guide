import type { Metadata } from "next";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";
import { Breadcrumb, PageHero, SourceBlock } from "@/components/GuideUI";

const sourceUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";
const buddySystemUrl = "https://store.steampowered.com/news/app/1962700/view/710032085365033529";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: pick("Subnautica 2 Co-op and Multiplayer Status", "深海迷航2 合作与多人模式状态", locale), description: pick("Official Steam-listed multiplayer features for Subnautica 2, checked August 20, 2026.", "来自官方 Steam 页面、核验于2026年8月20日的深海迷航2 多人模式信息。", locale), alternates: getAlternates("/guides/multiplayer", locale) };
}

export default async function Multiplayer() {
  const locale = await getLocale();
  const features = [pick("Single-player", "单人游戏", locale), pick("Online Co-op", "在线合作", locale), pick("Cross-Platform Multiplayer", "跨平台多人游戏", locale), pick("4-player co-op", "4 人合作模式", locale)];
  return <main>
    <PageHero locale={locale} status="limited" eyebrow={pick("Official multiplayer status", "官方多人模式状态", locale)} title={pick("Subnautica 2 Co-op and Multiplayer Status", "深海迷航2 合作与多人模式状态", locale)} intro={pick("A limited-scope reference based on the features currently named by official listings and announcements.", "基于官方页面与公告当前列出功能的有限范围参考。", locale)} />
    <article className="max-w-4xl mx-auto px-4 py-10 page-content">
      <Breadcrumb locale={locale} items={[{ href: "/", en: "Home", zh: "首页" }, { href: "/guides", en: "Guides", zh: "攻略" }, { en: "Multiplayer", zh: "多人模式" }]} />
      <div className="tldr-box mb-8"><strong className="block text-deep-300 mb-1">{pick("Verified status", "已核验状态", locale)}</strong><p>{pick("The official Steam listing says Subnautica 2 can be played alone or with friends in 4-player co-op. It lists Single-player, Online Co-op, and Cross-Platform Multiplayer as features.", "官方 Steam 页面说明，深海迷航2 可以单人游玩，也可以与好友进行4人合作；页面列出的功能包括单人游戏、在线合作和跨平台多人游戏。", locale)}</p></div>
      <h2>{pick("Officially listed features", "官方列出的功能", locale)}</h2><div className="grid gap-3 sm:grid-cols-2">{features.map((feature) => <div className="rounded-lg border border-deep-400/15 bg-surface-card p-4 text-deep-200" key={feature}><span className="text-deep-400 mr-2">◈</span>{feature}</div>)}</div>
      <h2>{pick("Current co-op update note", "当前合作模式更新说明", locale)}</h2><p>{pick("The Early Access 1.2 Buddy System announcement dated August 19, 2026 names proximity chat, player revives, emotes, and player trading. This page does not infer broader save, session, or progression rules from those notes.", "2026年8月19日的抢先体验1.2 Buddy System 公告提到距离语音、玩家救援、表情和玩家交易。本页不根据这些更新说明推断更广泛的存档、会话或进度规则。", locale)}</p>
      <h2>{pick("What this page does not confirm", "本页不确认的内容", locale)}</h2><p>{pick("The sources used here do not specify platform combinations beyond the listed feature, invite steps, session settings, save behavior, resource sharing, servers, local split-screen, or troubleshooting.", "本页使用的来源未说明除页面功能标签之外的平台组合、邀请步骤、会话设置、存档行为、资源共享、服务器、本地分屏或故障排查。", locale)}</p>
      <SourceBlock locale={locale} checked="August 20, 2026" scope={pick("Officially listed features only", "仅限官方列出的功能", locale)} sources={[{ href: sourceUrl, en: "Subnautica 2 on Steam", zh: "Steam：Subnautica 2" }, { href: buddySystemUrl, en: "Buddy System update", zh: "Buddy System 更新公告" }]} />
    </article>
  </main>;
}
