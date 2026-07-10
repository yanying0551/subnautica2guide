import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Base Building Guide", "深海迷航2 基地建造指南", locale),
    description: pick(
      "Complete Subnautica 2 base building guide. Where to build, power options, essential modules, and tips for the best base locations on Luca.",
      "深海迷航2 完整基地建造指南。涵盖建造地点、供电方案、必备模块，以及路卡星球最佳基地位置技巧。",
      locale,
    ),
    alternates: getAlternates("/base-building", locale),
  };
}

export default async function BaseBuildingPage() {
  const locale = await getLocale();

  const nav = (
    <nav className="text-sm text-deep-300 mb-6">
      <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
      <span className="mx-2 text-deep-400">/</span>
      <span className="text-deep-400 font-medium">{pick("Base Building", "基地建造", locale)}</span>
    </nav>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {nav}

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Subnautica 2 Base Building Guide", "深海迷航2 基地建造指南", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("TL;DR — Quick Answer", "摘要 — 快速答案", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Start with a single Compartment + Solar Panel in the <strong>Sparse Plains</strong> (shallow, safe, resource-rich). Expand with more compartments as you gather materials. Key early modules: Fabricator, Storage, and Scanner Room.",
            "在<strong>稀疏平原</strong>（浅水、安全、资源丰富）用一个舱室 + 太阳能板起步。随着材料积累逐步扩展。早期关键模块：制造器、储物柜、扫描室。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Best Base Locations", "最佳基地选址", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Stage", "阶段", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Location", "位置", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Advantages", "优势", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Early", "早期", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Sparse Plains (edge near Plateaus)", "稀疏平原（高原边缘）", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Shallow (safe), abundant resources, close to pod", "浅水（安全）、资源丰富、靠近逃生舱", locale)}</td>
            </tr>
            <tr className="bg-deep-900/10">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Mid", "中期", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Plateaus / Thermal Spires transition", "高原 / 热液尖塔过渡带", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Access to deeper biomes, thermal power option", "可达更深生态域，可用地热能", locale)}</td>
            </tr>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Late", "后期", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Deep Thermal Spires", "深海热液尖塔", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Near all advanced resources, geothermal power", "靠近所有高级资源，地热能源", locale)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Power Options", "能源选项", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Solar Panel", "太阳能板", locale)}</strong> — {pick("Best for shallow bases (0-100m). Free, renewable, easy to craft.", "最适合浅水基地（0-100m）。免费、可再生、易制作。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Bioreactor", "生物反应堆", locale)}</strong> — {pick("Burns organic material. Good for medium-depth bases.", "燃烧有机物。适合中等深度基地。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Thermal Plant", "热能发电厂", locale)}</strong> — {pick("Requires proximity to heat sources. Most stable for deep bases.", "需要靠近热源。深海基地最稳定的选择。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Nuclear Reactor", "核反应堆", locale)}</strong> — {pick("End-game power. High output but expensive materials.", "后期能源。输出高但材料昂贵。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Essential Modules", "核心模块", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Fabricator", "制造器", locale)}</strong> — {pick("Crafting station. Place in every base.", "合成站。每个基地必备。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Storage Lockers", "储物柜", locale)}</strong> — {pick("Wall-mounted storage. Build several early.", "墙上储物。早期多建几个。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Scanner Room", "扫描室", locale)}</strong> — {pick("Locates resources in the surrounding area. Game-changer for farming.", "定位周围资源。刷矿神器。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Moonpool", "月球港", locale)}</strong> — {pick("Vehicle docking and charging station.", "载具停靠和充电站。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Water Filtration Machine", "水过滤机", locale)}</strong> — {pick("Unlimited clean water.", "无限清洁水。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Plant Pot / Indoor Growbed", "种植盆 / 室内种植床", locale)}</strong> — {pick("Grow food indoors.", "室内种植食物。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Base Building Tips", "建造技巧", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li>{pick("Always build on <strong>flat terrain</strong> — slopes make module alignment difficult.", "总是在<strong>平坦地形</strong>上建造——斜坡会导致模块对齐困难。", locale)}</li>
        <li>{pick("<strong>Reinforce</strong> your base with Bulkheads and Reinforced Walls when building deeper than 200m.", "深度超过 200m 时用舱壁和强化墙<strong>加固</strong>基地。", locale)}</li>
        <li>{pick("<strong>Leave room to expand</strong> — position your first compartment so you can add corridors in multiple directions.", "<strong>留出扩展空间</strong>——首个舱室的位置应便于多方向添加走廊。", locale)}</li>
        <li>{pick("<strong>Windows are cosmetic</strong> — they don't affect structural integrity in the current build.", "<strong>窗户只是装饰</strong>——当前版本不影响结构完整性。", locale)}</li>
      </ul>

      <div className="info-box">
        <strong className="block text-deep-300 mb-1">💡 {pick("Sculptural Base Building (EA Feature)", "雕塑式建造（EA 新功能）", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Subnautica 2 introduces a new sculptural base building system that allows more organic, free-form construction. Experiment with the new tools in creative mode before committing to a major build in survival mode.",
            "深海迷航2 引入了全新的雕塑式建造系统，支持更自由的有机构造。在创意模式中先试验新工具，再在生存模式中大干一场。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("Can bases be destroyed?", "基地会被摧毁吗？", locale)}</summary>
        <div className="faq-answer">{pick("Creatures can damage base modules. Use the Repair Tool to fix damage. Reinforced modules have higher durability.", "生物可以破坏基地模块。用修复工具修复损伤。强化模块耐久度更高。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("How many modules can I build?", "能建多少个模块？", locale)}</summary>
        <div className="faq-answer">{pick("There is no hard cap, but performance may degrade with very large bases. Structural integrity limits depend on depth and reinforcement.", "没有硬性上限，但基地过大性能会下降。结构完整性上限取决于深度和加固。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Can I move a base?", "能移动基地吗？", locale)}</summary>
        <div className="faq-answer">{pick("No. You must deconstruct (hold the builder tool and right-click) each module to reclaim resources, then rebuild elsewhere.", "不能。必须拆除（手持建造工具右键）每个模块回收资源，再到新址重建。", locale)}</div>
      </details>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — base building mechanics may change with updates. Last updated June 2026.", "抢先体验版本信息——建造机制可能随更新而变化。最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
