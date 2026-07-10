import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "Subnautica 2 System Requirements — PC Specs Guide",
      "深海迷航2 系统配置要求——PC 规格指南",
      locale,
    ),
    description: pick(
      "Can your PC run Subnautica 2? Minimum and recommended system requirements for Subnautica 2 on PC. GPU, CPU, RAM, and storage requirements for Unreal Engine 5.",
      "你的电脑能跑深海迷航2 吗？PC 端最低和推荐配置要求。虚幻5 引擎的 GPU、CPU、内存和存储需求。",
      locale,
    ),
    alternates: getAlternates("/info/system-requirements", locale),
  };
}

export default async function SystemRequirements() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/guides", locale)} className="hover:text-deep-400 transition-colors">{pick("Guides", "教程", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("System Requirements", "系统配置要求", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Subnautica 2 System Requirements", "深海迷航2 系统配置要求", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("Quick Answer", "快速答案", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Subnautica 2 runs on Unreal Engine 5 with Lumen and Nanite. Minimum: GTX 1660 / i5-8400 / 16GB RAM. Recommended: RTX 3070 / i7-13700 / 32GB RAM. Requires 50GB SSD — HDD is not recommended.",
            "深海迷航2 基于虚幻5 引擎（Lumen + Nanite）。最低配置：GTX 1660 / i5-8400 / 16GB 内存。推荐配置：RTX 3070 / i7-13700 / 32GB 内存。需要 50GB SSD——不建议使用机械硬盘。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Minimum System Requirements", "最低配置要求", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Component", "组件", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Minimum", "最低", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("OS", "操作系统", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">Windows 10 64-bit</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("CPU", "处理器", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">Intel i5-8400 / AMD Ryzen 5 2600</td></tr>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("GPU", "显卡", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">NVIDIA GTX 1660 / AMD RX 5600 XT</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("RAM", "内存", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">16 GB</td></tr>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Storage", "存储", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">50 GB SSD</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">DirectX</td><td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Version 12", "版本 12", locale)}</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Recommended System Requirements", "推荐配置要求", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Component", "组件", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Recommended", "推荐", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("OS", "操作系统", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">Windows 11 64-bit</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("CPU", "处理器", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">Intel i7-13700 / AMD Ryzen 7 7700</td></tr>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("GPU", "显卡", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">NVIDIA RTX 3070 / AMD RX 6800</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("RAM", "内存", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">32 GB</td></tr>
            <tr className="bg-deep-800/20"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Storage", "存储", locale)}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">50 GB NVMe SSD</td></tr>
            <tr className="bg-deep-900/10"><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">DirectX</td><td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Version 12", "版本 12", locale)}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box">
        <strong className="block text-deep-300 mb-1">💡 {pick("Note", "提示", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Subnautica 2 uses <strong>Unreal Engine 5</strong> with Lumen (dynamic lighting) and Nanite (micro-polygon geometry). An SSD is strongly recommended — HDD may cause significant texture pop-in and longer load times.",
            "深海迷航2 使用<strong>虚幻5 引擎</strong>（Lumen 动态光照 + Nanite 微多边形几何）。强烈建议使用 SSD——机械硬盘可能导致明显的材质弹出和更长的加载时间。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Steam Deck Performance", "Steam Deck 性能表现", locale)}</h2>
      <p className="text-deep-200 mb-6">
        {pick(
          "Subnautica 2 is <strong>Steam Deck Verified</strong>. On Low settings, the game runs at 30-45 FPS (900p) in most biomes. Expect lower performance in Thermal Spires and other dense areas. Recommended settings: Low textures, Medium view distance, FSR 2.0 on Balanced mode.",
          "深海迷航2 已通过 <strong>Steam Deck 兼容认证</strong>。低画质下，大多数生态域可跑 30-45 FPS（900p）。热液尖塔等密集区域帧数较低。推荐设置：低材质、中视距、FSR 2.0 平衡模式。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("Can I run Subnautica 2 on a laptop?", "能在笔记本上跑深海迷航2 吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes, if it has a dedicated GPU meeting the minimum requirements. Integrated graphics (Intel UHD, AMD Radeon Graphics) will not run the game adequately.", "可以，前提是有满足最低配置的独立显卡。核显（Intel UHD、AMD Radeon Graphics）无法流畅运行。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Does Subnautica 2 support DLSS or FSR?", "深海迷航2 支持 DLSS 或 FSR 吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes. DLSS 3.0 (NVIDIA) and FSR 2.0 (AMD) are both supported. FSR 2.0 on Quality mode provides the best balance of visuals and performance.", "支持。DLSS 3.0（NVIDIA）和 FSR 2.0（AMD）都支持。FSR 2.0 质量模式在画质和性能之间平衡最佳。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Is there a benchmark tool?", "有跑分工具吗？", locale)}</summary>
        <div className="faq-answer">{pick("No built-in benchmark. However, the Thermal Spires biome is the most demanding area — test your performance there to get a worst-case estimate.", "无内置跑分。但热液尖塔生态域是最吃性能的区域——在那里测试可获得最坏情况下的表现。", locale)}</div>
      </details>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — requirements may change with optimization updates. Last updated June 2026.", "抢先体验版本信息——配置要求可能随优化更新而变化。最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
