import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

const steamUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Digestive Incompatibility Guide — Subnautica 2", "深海迷航2 消化不相容指南", locale),
    description: pick("A version-safe reference for the Digestive Incompatibility status in Subnautica 2 Early Access.", "深海迷航2 抢先体验版消化不相容状态的版本安全参考。", locale),
    alternates: getAlternates("/guides/digestive-incompatibility", locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function Page() {
  const locale = await getLocale();
  return <article className="max-w-3xl mx-auto px-4 py-10 page-content">
    <nav className="text-sm text-deep-300 mb-6"><Link href={l("/", locale)}>{pick("Home", "首页", locale)}</Link><span className="mx-2">/</span><Link href={l("/guides", locale)}>{pick("Guides", "攻略", locale)}</Link></nav>
    <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3">{pick("Status-effect reference", "状态效果参考", locale)}</p>
    <h1>{pick("How to Handle Digestive Incompatibility in Subnautica 2", "如何处理深海迷航2的消化不相容", locale)}</h1>
    <div className="tldr-box mb-8"><strong className="block text-deep-300 mb-1">{pick("Quick answer", "快速答案", locale)}</strong><p>{pick("The exact cure item, ingredients, and crafting step are not confirmed by the current attributable sources used here. Check the in-game status description and current build before following a recipe.", "目前使用的可追溯来源尚未确认具体治疗物品、材料和制作步骤。请以游戏内状态说明和当前版本为准，不要直接照搬未经核验的配方。", locale)}</p></div>
    <h2>{pick("What to record in your current build", "在当前版本记录什么", locale)}</h2>
    <ul><li>{pick("Copy the status name and description exactly as displayed.", "准确记录游戏中显示的状态名称和说明。", locale)}</li><li>{pick("Note when it appeared, what action preceded it, and whether reloading changes it.", "记录状态出现时间、之前进行的操作，以及重新载入是否会改变状态。", locale)}</li><li>{pick("Record the item or station name only after confirming it in the current build.", "只有在当前版本中确认后，才记录物品或制作台名称。", locale)}</li></ul>
    <h2>{pick("What this page does not confirm", "本页不确认的内容", locale)}</h2>
    <p>{pick("This page does not confirm Bulbo Tree Samples, Creepvine Seed Clusters, coordinates, symptoms, food restrictions, recipe ingredients, or a guaranteed cure sequence. Those claims require versioned evidence from the current Early Access build.", "本页不确认 Bulbo Tree Sample、Creepvine Seed Cluster、坐标、症状、食物限制、配方材料或固定治疗流程。上述主张需要当前抢先体验版本的带版本证据。", locale)}</p>
    <h2>{pick("Related references", "相关参考", locale)}</h2>
    <ul><li><Link href={l("/resources", locale)}>{pick("Resource guide", "资源指南", locale)}</Link></li><li><Link href={l("/guides/beginner-guide", locale)}>{pick("Beginner guide", "新手指南", locale)}</Link></li><li><Link href={l("/updates/roadmap", locale)}>{pick("Update roadmap", "更新路线图", locale)}</Link></li></ul>
    <h2>{pick("Source and scope", "来源与范围", locale)}</h2><p>{pick("Source: ", "来源：", locale)}<a href={steamUrl} target="_blank" rel="noreferrer">Steam: Subnautica 2</a>{pick(". Checked August 20, 2026. Mechanics can change during Early Access.", "。核验日期：2026年8月20日。抢先体验期间机制可能变化。", locale)}</p>
  </article>;
}
