import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Creatures — Complete Creature Guide", "深海迷航2 生物——完整生物图鉴", locale),
    description: pick(
      "Complete creature guide for Subnautica 2 Early Access. 93 documented species across 4 confirmed biomes.",
      "深海迷航2 抢先体验版完整生物图鉴，收录分布于 4 个已确认生态区的 93 个物种。",
      locale,
    ),
    alternates: getAlternates("/creatures", locale),
  };
}

export default async function CreaturesPage() {
  const locale = await getLocale();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-deep-100 mb-2">
        {pick("Subnautica 2 Creatures", "深海迷航2 生物图鉴", locale)}
      </h1>
      <p className="text-deep-300 mb-8">
        {pick(
          "Complete creature guide for Subnautica 2 Early Access. 93 documented species across 4 confirmed biomes.",
          "深海迷航2 抢先体验完整生物指南。已收录 93 种生物，分布在 4 个已确认的生物群系中。",
          locale,
        )}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glow-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-deep-100 mb-3">
            {pick("Leviathan-Class", "利维坦级", locale)}
          </h2>
          <p className="text-sm text-deep-300 mb-4">
            {pick("Massive, highly aggressive creatures. The apex predators of Luca.", "巨大的、极具攻击性的生物。路卡星球的顶级掠食者。", locale)}
          </p>
          <Link href={l("/guides/beginner-guide#leviathan-tips", locale)} className="text-sm text-deep-400 hover:text-deep-300 underline underline-offset-2 transition-colors">
            {pick("Leviathan survival tips →", "利维坦生存技巧 →", locale)}
          </Link>
        </div>

        <div className="glow-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-deep-100 mb-3">
            {pick("Carnivores", "肉食生物", locale)}
          </h2>
          <p className="text-sm text-deep-300 mb-4">
            {pick("Aggressive fauna that will attack the player on sight.", "会主动攻击玩家的攻击性生物。", locale)}
          </p>
          <p className="text-xs text-deep-400/50">
            {pick("Individual creature pages coming in next update.", "单个生物详情页将在下次更新中添加。", locale)}
          </p>
        </div>

        <div className="glow-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-deep-100 mb-3">
            {pick("Herbivores & Passive Fauna", "草食与被动生物", locale)}
          </h2>
          <p className="text-sm text-deep-300 mb-4">
            {pick("Non-aggressive creatures that can be found across all biomes. Safe to approach.", "分布于所有生物群系的非攻击性生物。可安全接近。", locale)}
          </p>
          <p className="text-xs text-deep-400/50">
            {pick("Individual creature pages coming in next update.", "单个生物详情页将在下次更新中添加。", locale)}
          </p>
        </div>

        <div className="glow-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-deep-100 mb-3">
            {pick("Biome-Based Index", "按生物群系索引", locale)}
          </h2>
          <p className="text-sm text-deep-300 mb-4">
            {pick("Browse creatures by their home biome.", "按生物群系浏览生物——稀疏平原、高原、墓地、热刺峰。", locale)}
          </p>
          <Link href={l("/resources", locale)} className="text-sm text-deep-400 hover:text-deep-300 underline underline-offset-2 transition-colors">
            {pick("Browse resources by biome →", "按生物群系浏览资源 →", locale)}
          </Link>
        </div>
      </div>

      <div className="mt-10 glow-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-deep-100 mb-2">
          {pick("Creature Database Status", "生物数据库状态", locale)}
        </h2>
        <p className="text-sm text-deep-300 mb-3">
          {pick(
            "We're building out individual pages for all 93 documented creatures. Priority goes to high-traffic searches — Leviathan-class and aggressive creatures first.",
            "我们正在逐步建立所有 93 种生物的详情页面。优先处理搜索量高的内容——首先是利维坦级和攻击性生物。",
            locale,
          )}
        </p>
        <div className="flex gap-2">
          <span className="text-xs bg-deep-800/50 text-deep-300 border border-deep-400/20 px-2 py-0.5 rounded-full">
            {pick("93 species documented", "已记录 93 种", locale)}
          </span>
          <span className="text-xs bg-deep-800/50 text-deep-300 border border-deep-400/20 px-2 py-0.5 rounded-full">
            {pick("4 confirmed biomes", "4 个已确认群系", locale)}
          </span>
          <span className="text-xs bg-deep-800/50 text-deep-300 border border-deep-400/20 px-2 py-0.5 rounded-full">
            {pick("2+ Leviathan-class", "2+ 利维坦级", locale)}
          </span>
        </div>
      </div>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — creature data may change with updates. Last updated June 2026.", "抢先体验版本信息——生物数据可能随更新而变化。最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
