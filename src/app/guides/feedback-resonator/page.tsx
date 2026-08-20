import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
   return { title: pick("Feedback Resonator Guide — Subnautica 2", "深海迷航2 反馈谐振器指南", locale), description: pick("A version-safe reference for tracking the Feedback Resonator in Subnautica 2 Early Access.", "深海迷航2 抢先体验版反馈谐振器的版本安全参考。", locale), alternates: getAlternates("/guides/feedback-resonator", locale), robots: SOURCE_REVIEW_ROBOTS };
}

export default async function Page() {
  const locale = await getLocale();
  return <article className="max-w-3xl mx-auto px-4 py-10 page-content">
    <nav className="text-sm text-deep-300 mb-6"><Link href={l("/", locale)}>{pick("Home", "首页", locale)}</Link><span className="mx-2">/</span><Link href={l("/guides", locale)}>{pick("Guides", "攻略", locale)}</Link></nav>
    <h1>{pick("Feedback Resonator Guide — Subnautica 2", "深海迷航2 反馈谐振器指南", locale)}</h1>
    <div className="tldr-box mb-8"><strong className="block text-deep-300 mb-1">{pick("Quick answer", "快速答案", locale)}</strong><p>{pick("The current sources used here do not confirm the Resonator's fragment location, unlock condition, recipe, or creature effect. Verify the item description and recipe in your current Early Access build.", "本站目前使用的来源尚未确认谐振器碎片位置、解锁条件、配方或对生物的效果。请在当前抢先体验版本中核对物品说明和配方。", locale)}</p></div>
    <h2>{pick("What to verify", "需要核验什么", locale)}</h2><ul><li>{pick("Exact item and fragment names.", "准确的物品和碎片名称。", locale)}</li><li>{pick("Blueprint source, station, and material cost.", "蓝图来源、制作台和材料成本。", locale)}</li><li>{pick("Whether the tool repels, damages, stuns, or otherwise affects creatures.", "该工具究竟是驱赶、伤害、眩晕还是以其他方式影响生物。", locale)}</li></ul>
    <h2>{pick("Unconfirmed claims", "尚未确认的主张", locale)}</h2><p>{pick("Thermal Spires, Computer Chip, Battery, Angel Comb, and a sonic-pulse effect are retained as research leads only, not confirmed gameplay facts.", "Thermal Spires、Computer Chip、Battery、Angel Comb以及声波脉冲效果目前仅作为研究线索保留，不是已确认的玩法事实。", locale)}</p>
    <h2>{pick("Related references", "相关参考", locale)}</h2><ul><li><Link href={l("/guides/angel-comb", locale)}>{pick("Angel Comb guide", "天使梳指南", locale)}</Link></li><li><Link href={l("/guides/multiplayer", locale)}>{pick("Co-op status", "合作模式状态", locale)}</Link></li><li><Link href={l("/updates/roadmap", locale)}>{pick("Update roadmap", "更新路线图", locale)}</Link></li></ul>
  </article>;
}
