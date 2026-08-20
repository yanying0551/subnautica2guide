import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
   return { title: pick("Angel Comb Guide — Subnautica 2", "深海迷航2 天使梳指南", locale), description: pick("A version-safe Angel Comb reference for Subnautica 2 Early Access.", "深海迷航2 抢先体验版天使梳的版本安全参考。", locale), alternates: getAlternates("/guides/angel-comb", locale), robots: SOURCE_REVIEW_ROBOTS };
}

export default async function Page() {
  const locale = await getLocale();
  return <article className="max-w-3xl mx-auto px-4 py-10 page-content">
    <nav className="text-sm text-deep-300 mb-6"><Link href={l("/", locale)}>{pick("Home", "首页", locale)}</Link><span className="mx-2">/</span><Link href={l("/guides", locale)}>{pick("Guides", "攻略", locale)}</Link></nav>
    <h1>{pick("Angel Comb Guide — Subnautica 2", "深海迷航2 天使梳指南", locale)}</h1>
    <div className="tldr-box mb-8"><strong className="block text-deep-300 mb-1">{pick("Quick answer", "快速答案", locale)}</strong><p>{pick("The current public sources used by this site do not confirm an Angel Comb location, harvesting method, crafting use, or depth. Treat community location claims as unverified until checked against the current build.", "本站目前使用的公开来源尚未确认天使梳的位置、采集方式、合成用途或深度。在当前版本核验前，社区位置说法均应视为未核验。", locale)}</p></div>
    <h2>{pick("How to verify an item location", "如何核验物品位置", locale)}</h2><ol><li>{pick("Record the exact in-game item name.", "记录游戏内显示的准确物品名称。", locale)}</li><li>{pick("Capture the biome or landmark and build/platform.", "记录生态域或地标，以及游戏版本和平台。", locale)}</li><li>{pick("Confirm whether it is harvested, scanned, crafted, or received as a drop.", "确认它是采集、扫描、制作还是掉落获得。", locale)}</li></ol>
    <h2>{pick("Unconfirmed claims", "尚未确认的主张", locale)}</h2><p>{pick("Angel Vine, Graveyard, 100–200 m, knife harvesting, and Feedback Resonator crafting requirements are not confirmed on this page. They should not be presented as fixed facts without current attributable evidence.", "Angel Vine、Graveyard、100–200米、用刀采集以及反馈谐振器制作要求尚未在本页确认。没有当前可追溯证据时，不应将其当作固定事实。", locale)}</p>
    <h2>{pick("Related references", "相关参考", locale)}</h2><ul><li><Link href={l("/resources", locale)}>{pick("Resource guide", "资源指南", locale)}</Link></li><li><Link href={l("/guides/feedback-resonator", locale)}>{pick("Feedback Resonator guide", "反馈谐振器指南", locale)}</Link></li><li><Link href={l("/updates/roadmap", locale)}>{pick("Update roadmap", "更新路线图", locale)}</Link></li></ul>
  </article>;
}
