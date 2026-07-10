import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "Angel Comb Guide — Subnautica 2 Location and Uses",
      "天使梳指南——深海迷航2 位置与用途",
      locale,
    ),
    description: pick(
      "Where to find the Angel Comb in Subnautica 2. Learn the exact location, how to harvest it, and what it's used for in crafting and progression.",
      "在深海迷航2 中哪里能找到天使梳。了解确切位置、采集方法，以及在合成和剧情推进中的用途。",
      locale,
    ),
    alternates: getAlternates("/guides/angel-comb", locale),
  };
}

export default async function AngelComb() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/guides", locale)} className="hover:text-deep-400 transition-colors">{pick("Guides", "教程", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("Angel Comb", "天使梳", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Angel Comb Guide — Subnautica 2", "天使梳指南——深海迷航2", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("Quick Answer", "快速答案", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "The Angel Comb is found attached to <strong>Angel Vine</strong> structures in the <strong>Graveyard biome</strong>, depth ~100-200m. Use your knife to harvest. Required to craft the <strong>Feedback Resonator</strong>.",
            "天使梳附在<strong>墓地生态域</strong>的<strong>天使藤</strong>结构上，深度约 100-200m。用刀采集。用于制作<strong>反馈谐振器</strong>。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("What Is the Angel Comb?", "什么是天使梳？", locale)}</h2>
      <p className="text-deep-200 mb-6">
        {pick(
          "The Angel Comb is a rare organic material harvested from Angel Vines — tall, bioluminescent plant structures found in deeper biomes. It has a distinctive comb-like shape with glowing ridges. Beyond its use in the Feedback Resonator, it may be used in future updates for other crafting recipes.",
          "天使梳是从天使藤上采集的稀有有机材料——天使藤是深海生态域中高大的生物荧光植物结构。它有独特的梳状外形和发光的脊纹。除了用于反馈谐振器外，未来更新中可能用于其他合成配方。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Where to Find Angel Combs", "去哪里找天使梳", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Biome", "生态域", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Depth", "深度", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Notes", "说明", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Graveyard", "墓地", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">100-200m</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Primary location. Look for glowing vertical vines.", "主要位置。寻找发光的垂直藤蔓。", locale)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("How to Harvest", "如何采集", locale)}</h2>
      <ol className="list-decimal pl-6 space-y-2 text-deep-200 mb-6">
        <li>{pick("Locate an Angel Vine (glowing vertical structure, pale green/blue light).", "找到天使藤（发光的垂直结构，淡绿/蓝色光）。", locale)}</li>
        <li>{pick("Swim close to the vine and look for the comb-shaped growth on the stalk.", "游近藤蔓，在茎干上寻找梳状生长物。", locale)}</li>
        <li>{pick("Use your <strong>Survival Knife</strong> to cut the Angel Comb free.", "用<strong>生存刀</strong>将天使梳割下。", locale)}</li>
        <li>{pick("Collect it — it will go directly into your inventory.", "拾取——直接进入背包。", locale)}</li>
      </ol>

      <div className="warning-box">
        <strong className="block text-amber-300 mb-1">⚠️ {pick("Safety Note", "安全提示", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "The Graveyard biome at 100-200m depth has aggressive creatures. Bring a Seaglide for mobility and be ready to retreat. A Reinforced Dive Suit is recommended but not essential at 200m.",
            "墓地生态域 100-200m 深度有攻击性生物。携带海滑翔器以便移动，随时准备撤退。建议穿强化潜水服，但 200m 深度并非必需。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Crafting Uses", "合成用途", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Feedback Resonator", "反馈谐振器", locale)}</strong> — {pick("primary use. Repels aggressive creatures with sonic pulses.", "主要用途。用声波脉冲驱退攻击性生物。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("Do Angel Combs respawn?", "天使梳会刷新吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes, Angel Vines regenerate their combs over time. You can revisit the Graveyard biome after a few in-game days to find new growths.", "会，天使藤会随时间重新长出梳子。过几个游戏日再回墓地生态域可发现新长出的。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Can I grow Angel Vines in my base?", "能在基地种植天使藤吗？", locale)}</summary>
        <div className="faq-answer">{pick("Not in the current Early Access build. This feature may be added in a future update.", "当前抢先体验版本不支持。此功能可能在后续更新中加入。", locale)}</div>
      </details>

      <div className="mt-10 pt-6 border-t border-deep-400/20">
        <div className="flex flex-wrap gap-2">
          <Link href={l("/guides/feedback-resonator", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Feedback Resonator Guide →", "反馈谐振器指南 →", locale)}</Link>
        </div>
      </div>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — last updated June 2026.", "抢先体验版本信息——最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
