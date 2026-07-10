import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "Feedback Resonator Guide — Subnautica 2 Unlock and Uses",
      "反馈谐振器指南——深海迷航2 解锁与用途",
      locale,
    ),
    description: pick(
      "The Feedback Resonator is a critical tool in Subnautica 2. Learn how to unlock it, required materials, and how to use it against aggressive creatures.",
      "反馈谐振器是深海迷航2 的关键工具。了解如何解锁、所需材料，以及如何用它对付攻击性生物。",
      locale,
    ),
    alternates: getAlternates("/guides/feedback-resonator", locale),
  };
}

export default async function FeedbackResonator() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/guides", locale)} className="hover:text-deep-400 transition-colors">{pick("Guides", "教程", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("Feedback Resonator", "反馈谐振器", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Feedback Resonator Guide — Subnautica 2", "反馈谐振器指南——深海迷航2", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("Quick Answer", "快速答案", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Scan <strong>Feedback Resonator fragments</strong> in the <strong>Thermal Spires</strong> biome. Craft with: Computer Chip + Battery + Angel Comb. Emits a sonic pulse that repels aggressive creatures.",
            "在<strong>热液尖塔</strong>生态域扫描<strong>反馈谐振器碎片</strong>。制作材料：电脑芯片 + 电池 + 天使梳。发射可驱退攻击性生物的声波脉冲。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("What Is the Feedback Resonator?", "什么是反馈谐振器？", locale)}</h2>
      <p className="text-deep-200 mb-6">
        {pick(
          "The Feedback Resonator is a handheld tool that emits a powerful sonic pulse, temporarily stunning or repelling aggressive creatures. It's essential for exploring dangerous biomes and dealing with Leviathan-class threats.",
          "反馈谐振器是一种手持工具，发射强力声波脉冲，可暂时击晕或驱退攻击性生物。探索危险生态域和应对利维坦级威胁时必备。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("How to Unlock the Blueprint", "如何解锁配方", locale)}</h2>
      <ol className="list-decimal pl-6 space-y-2 text-deep-200 mb-6">
        <li>{pick("<strong>Locate fragments</strong> — Feedback Resonator fragments are found in the <strong>Thermal Spires</strong> biome, typically around wreckage and debris fields at 100-200m depth.", "<strong>寻找碎片</strong>——反馈谐振器碎片见于<strong>热液尖塔</strong>生态域，通常在残骸和碎屑场附近，深度 100-200m。", locale)}</li>
        <li>{pick("<strong>Scan fragments</strong> — Use your Scanner to scan 3 fragments. The blueprint will unlock automatically.", "<strong>扫描碎片</strong>——用扫描器扫描 3 个碎片。配方将自动解锁。", locale)}</li>
        <li>{pick("<strong>Check your PDA</strong> — The blueprint appears in the Tools tab of your Fabricator.", "<strong>查看 PDA</strong>——配方出现在制造器的工具标签中。", locale)}</li>
      </ol>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Required Materials", "所需材料", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Material", "材料", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Source", "来源", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Computer Chip", "电脑芯片", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Crafted at Fabricator (Copper + Gold + Quartz)", "在制造器制作（铜 + 金 + 石英）", locale)}</td>
            </tr>
            <tr className="bg-deep-900/10">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Battery", "电池", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Crafted at Fabricator (Copper + Acid Mushroom)", "在制造器制作（铜 + 酸性蘑菇）", locale)}</td>
            </tr>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Angel Comb", "天使梳", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Harvested from Angel Vines in Graveyard biome", "从墓地生态域的天使藤采集", locale)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("How to Use", "使用方法", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li>{pick("Equip the Feedback Resonator from your toolbar.", "从工具栏装备反馈谐振器。", locale)}</li>
        <li>{pick("When an aggressive creature approaches, hold the fire button to charge the pulse.", "攻击性生物靠近时，按住开火键充能脉冲。", locale)}</li>
        <li>{pick("Release to emit the sonic wave — creatures within range will be stunned or repelled for 5-10 seconds.", "松开释放声波——范围内的生物将被击晕或驱退 5-10 秒。", locale)}</li>
        <li>{pick("The Resonator has limited charges before needing a recharge at a Fabricator or Base Power Cell Charger.", "谐振器充能次数有限，需在制造器或基地电池充电站充电。", locale)}</li>
      </ul>

      <Link href={l("/guides/angel-comb", locale)} className="text-deep-400 underline underline-offset-2 decoration-deep-400/50 hover:text-deep-300 transition-colors">
        {pick("How to get Angel Comb →", "如何获取天使梳 →", locale)}
      </Link>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — last updated June 2026.", "抢先体验版本信息——最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
