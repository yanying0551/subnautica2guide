import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "Subnautica 2 Beginner Guide — First Hour Survival Tips",
      "深海迷航2 新手入门指南——第一个小时生存技巧",
      locale,
    ),
    description: pick(
      "New to Subnautica 2? Start here. First-hour survival guide: what to do first, essential resources, how to build your first base, and how to survive the depths of Luca.",
      "深海迷航2 新手？从这里开始。第一个小时生存指南：先做什么、关键资源、如何建造第一个基地，以及如何在路卡星球的深海中生存。",
      locale,
    ),
    alternates: getAlternates("/guides/beginner-guide", locale),
  };
}

export default async function BeginnerGuide() {
  const locale = await getLocale();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/guides", locale)} className="hover:text-deep-400 transition-colors">{pick("Guides", "教程", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("Beginner Guide", "新手入门指南", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Subnautica 2 Beginner Guide — Your First Hour on Luca", "深海迷航2 新手入门指南——在路卡星球的第一小时", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("What You Need to Know", "核心要点", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Your first hour is about survival basics: gather Titanium, Copper, and Quartz for essential tools. Build a Fabricator, craft the Survival Knife and Scanner, then cure your Digestive Incompatibility. After that, find a base spot in the Sparse Plains and start building.",
            "你的第一个小时聚焦生存基础：采集钛、铜和石英制作关键工具。建造制造器，制作生存刀和扫描器，然后治愈消化系统不兼容。之后在稀疏平原找基地点开始建造。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Your First 5 Minutes", "前 5 分钟", locale)}</h2>
      <p className="text-deep-200 mb-4">
        {pick("You wake up in the CICADA escape pod. Your immediate priorities:", "你在 CICADA 逃生舱中醒来。当务之急：", locale)}
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Swim to the surface", "游到水面", locale)}</strong> — {pick("get your bearings, look for the Sparse Plains biome (sandy floor, sparse vegetation).", "辨认方向，寻找稀疏平原生态域（沙质海底、植被稀疏）。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Gather Titanium and Copper", "采集钛和铜", locale)}</strong> — {pick("break Limestone Outcrops (round, gray rocks on the seafloor). You need at least 5 Titanium and 3 Copper.", "破坏石灰岩矿脉（海底圆形灰色岩石）。至少需要 5 钛和 3 铜。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Find Quartz", "寻找石英", locale)}</strong> — {pick("look for glowing white crystals on the seafloor.", "在海底寻找发光的白色水晶。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Catch a Bladder Fish", "抓气囊鱼", locale)}</strong> — {pick("these small fish are easy to catch by hand and provide water.", "这种小鱼徒手即可抓到，可制作水。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Return to the pod", "回到逃生舱", locale)}</strong> — {pick("use the Fabricator to craft your first tools.", "用制造器制作首批工具。", locale)}</li>
      </ol>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Essential Early Crafting", "早期关键合成", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Item", "物品", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Materials", "材料", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Priority", "优先级", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Survival Knife", "生存刀", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">2 {pick("Titanium", "钛", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-400 font-medium">{pick("Critical", "关键", locale)}</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Scanner", "扫描器", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">2 {pick("Titanium", "钛", locale)}, 1 {pick("Copper", "铜", locale)}, 1 {pick("Quartz", "石英", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-400 font-medium">{pick("Critical", "关键", locale)}</td></tr>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Fabricator", "制造器", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">2 {pick("Titanium", "钛", locale)}, 1 {pick("Copper", "铜", locale)}, 1 {pick("Quartz", "石英", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-400 font-medium">{pick("Critical", "关键", locale)}</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Standard O₂ Tank", "标准氧气瓶", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">2 {pick("Titanium", "钛", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-300">{pick("High", "高", locale)}</td></tr>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Repair Tool", "修复工具", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">2 {pick("Titanium", "钛", locale)}, 1 {pick("Copper", "铜", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-300">{pick("High", "高", locale)}</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Cure Digestive Incompatibility", "治愈消化系统不兼容", locale)}</h2>
      <p className="text-deep-200 mb-2">
        {pick(
          "The green icon in your status panel means you have Digestive Incompatibility — a common early-game condition that drains your health slowly.",
          "状态面板上的绿色图标表示你患上了消化系统不兼容——一种常见的早期症状，会缓慢消耗你的生命值。",
          locale,
        )}
      </p>
      <p className="text-deep-200 mb-4">{pick("To cure it:", "治疗方法：", locale)}</p>
      <ol className="list-decimal pl-6 space-y-2 text-deep-200 mb-6">
        <li>{pick("Find a <strong>Bulbo Tree</strong> in the Plateaus biome (~50m depth) and harvest a sample.", "在<strong>高原</strong>生态域（约 50m 深度）找到<strong>球茎树</strong>并采集样本。", locale)}</li>
        <li>{pick("Find <strong>Creepvine Seed Clusters</strong> in the Sparse Plains (~30m depth).", "在<strong>稀疏平原</strong>（约 30m 深度）找到<strong>藤蔓种子簇</strong>。", locale)}</li>
        <li>{pick("Craft the cure at the Fabricator and consume it.", "在制造器制作解药并服用。", locale)}</li>
      </ol>
      <Link href={l("/guides/digestive-incompatibility", locale)} className="text-deep-400 underline underline-offset-2 decoration-deep-400/50 hover:text-deep-300 transition-colors">
        {pick("Full Digestive Incompatibility guide →", "完整消化系统不兼容指南 →", locale)}
      </Link>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Building Your First Base", "建造第一个基地", locale)}</h2>
      <p className="text-deep-200 mb-2">{pick("Your first base should be simple and functional:", "第一个基地应简单实用：", locale)}</p>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-4">
        <li><strong className="text-deep-100">{pick("Location", "位置", locale)}</strong>: {pick("Sparse Plains edge near the Plateaus transition — shallow, safe, and close to resources.", "稀疏平原与高原交界边缘——浅水、安全、靠近资源。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Essential modules", "核心模块", locale)}</strong>: {pick("1 Compartment (2 Titanium), 1 Solar Panel (2 Titanium, 1 Copper, 1 Quartz), 1 Fabricator (already built, place inside).", "1 个舱室（2 钛），1 个太阳能板（2 钛、1 铜、1 石英），1 个制造器（已建好，放进去）。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Power", "能源", locale)}</strong>: {pick("Solar is sufficient in shallow biomes. Add a second panel if your base has multiple modules.", "浅水生态域用太阳能足够。如果基地有多个模块可加第二块板。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Staying Alive", "维持生存", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Food", "食物", locale)}</strong>: {pick("Catch fish with your hands or use the Survival Knife. Cook in the Fabricator.", "徒手或用生存刀抓鱼。在制造器烹饪。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Water", "水", locale)}</strong>: {pick("Bladder Fish give the most water early on. Salt + Coral Tube = Bleach (2 large waters).", "气囊鱼前期提供最多水。盐 + 珊瑚管 = 漂白剂（2 大瓶水）。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Oxygen", "氧气", locale)}</strong>: {pick("Stay close to the surface until you craft a better O₂ tank. The pod has unlimited oxygen inside.", "制作更好的氧气瓶前贴近水面。逃生舱内有无限氧气。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Common Early Mistakes to Avoid", "常见新手误区", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Going too deep too fast", "过早下潜", locale)}</strong> — {pick("without a reinforced suit and depth modules, deeper biomes will crush you or cook you.", "没有强化潜水服和深度模块，深海生态域会把你压碎或烤熟。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Ignoring the Scanner", "忽视扫描器", locale)}</strong> — {pick("scanning fragments unlocks new blueprints. Scan everything.", "扫描碎片可解锁新配方。扫描一切。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Not storing extra resources", "不囤积资源", locale)}</strong> — {pick("build a wall locker early and stockpile Titanium and Copper.", "尽早建墙上储物柜，囤积钛和铜。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Exploring at night without a light source", "夜间无光源探索", locale)}</strong> — {pick("craft the Flashlight (2 Battery, 1 Quartz) or use a Flare.", "制作手电筒（2 电池、1 石英）或使用信号弹。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("What should I scan first?", "先扫描什么？", locale)}</summary>
        <div className="faq-answer">{pick("Prioritize scanning fragments in the safe shallows and Sparse Plains: Fabricator (if you missed it), Survival Knife, Scanner, and Base Compartment fragments. These give you the core survival tools.", "优先扫描浅水安全区和稀疏平原的碎片：制造器（如错过）、生存刀、扫描器、基地舱室碎片。这些给你核心生存工具。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("How do I get more inventory space?", "如何扩充背包？", locale)}</summary>
        <div className="faq-answer">{pick("Craft the Standard Storage Module (2 Titanium). It adds 4 extra slots. You can equip it from your PDA equipment screen.", "制作标准储物模块（2 钛）。增加 4 个槽位。可在 PDA 装备界面装备。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Which biome is safest for a first base?", "哪个生态域最适合建第一个基地？", locale)}</summary>
        <div className="faq-answer">{pick("The Sparse Plains is your safest bet. Shallow water (0-80m), abundant Limestone Outcrops, close to the pod, and few aggressive creatures.", "稀疏平原最安全。浅水（0-80m）、石灰岩矿脉丰富、靠近逃生舱、攻击性生物少。", locale)}</div>
      </details>

      <div className="mt-10 pt-6 border-t border-deep-400/20">
        <div className="flex flex-wrap gap-2">
          <Link href={l("/guides/digestive-incompatibility", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Digestive Incompatibility →", "消化系统不兼容 →", locale)}</Link>
          <Link href={l("/resources/copper", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Copper Location →", "铜矿位置 →", locale)}</Link>
          <Link href={l("/resources/titanium", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Titanium Location →", "钛矿位置 →", locale)}</Link>
          <Link href={l("/guides/multiplayer", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Co-op Guide →", "联机教程 →", locale)}</Link>
        </div>
      </div>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — game mechanics may change with updates. Last updated: June 2026.", "抢先体验版本信息——游戏机制可能随更新而变化。最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
