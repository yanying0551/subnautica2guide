import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "How to Cure Digestive Incompatibility in Subnautica 2",
      "如何在深海迷航2 中治愈消化系统不兼容",
      locale,
    ),
    description: pick(
      "Stuck with digestive incompatibility in Subnautica 2? Here's exactly what you need and where to find it. Complete cure guide with ingredient locations.",
      "在深海迷航2 中被消化系统不兼容困扰？这里告诉你需要什么、去哪里找。完整解药指南含材料位置。",
      locale,
    ),
    alternates: getAlternates("/guides/digestive-incompatibility", locale),
  };
}

export default async function DigestiveIncompatibility() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/guides", locale)} className="hover:text-deep-400 transition-colors">{pick("Guides", "教程", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("Digestive Incompatibility", "消化系统不兼容", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("How to Cure Digestive Incompatibility in Subnautica 2", "如何在深海迷航2 中治愈消化系统不兼容", locale)}
      </h1>

      <div className="warning-box">
        <strong className="block text-amber-300 mb-1">⚠️ {pick("Common Early-Game Problem", "常见早期问题", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Digestive Incompatibility is the green status icon that appears in your HUD. It drains health slowly and can kill you if left untreated. Fortunately, it's easy to fix once you know where to look.",
            "消化系统不兼容是 HUD 上出现的绿色状态图标。它会缓慢消耗生命值，不治疗可能致命。幸运的是，知道去哪找材料后很容易解决。",
            locale,
          )}
        </p>
      </div>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("Quick Answer", "快速答案", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "You need <strong>Bulbo Tree Samples</strong> (Plateaus, ~50m) and <strong>Creepvine Seed Clusters</strong> (Sparse Plains, ~30m). Craft the cure at the Fabricator. The green indicator clears after consuming the cure.",
            "你需要<strong>球茎树样本</strong>（高原，约 50m）和<strong>藤蔓种子簇</strong>（稀疏平原，约 30m）。在制造器制作解药。服用后绿色指示消失。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("What Is Digestive Incompatibility?", "什么是消化系统不兼容？", locale)}</h2>
      <p className="text-deep-200 mb-4">
        {pick(
          "Digestive Incompatibility is a condition caused by eating <strong>raw alien flora</strong> on the planet Luca. Your human digestive system can't process certain compounds found in native plants. Symptoms include:",
          "消化系统不兼容是由于食用路卡星球上的<strong>生异星植物</strong>引起的病症。人类消化系统无法处理本土植物中的某些化合物。症状包括：",
          locale,
        )}
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li>{pick("A <strong>green icon</strong> in your status panel (looks like a stomach with a cross)", "状态面板上的<strong>绿色图标</strong>（像带叉号的胃）", locale)}</li>
        <li>{pick("Gradual <strong>health drain</strong> over time", "随时间逐渐<strong>消耗生命值</strong>", locale)}</li>
        <li>{pick("Reduced <strong>stamina recovery</strong>", "<strong>体力恢复</strong>降低", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Required Ingredients", "所需材料", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Ingredient", "材料", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Source", "来源", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Biome", "生态域", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Depth", "深度", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Bulbo Tree Sample", "球茎树样本", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Harvest from Bulbo Tree", "从球茎树采集", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Plateaus", "高原", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">~50m</td>
            </tr>
            <tr className="bg-deep-900/10">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Creepvine Seed Cluster", "藤蔓种子簇", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Harvest from Creepvine", "从藤蔓采集", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Sparse Plains", "稀疏平原", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">~30m</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Where to Find Bulbo Tree Samples", "去哪里找球茎树样本", locale)}</h2>
      <p className="text-deep-200 mb-4">
        {pick(
          "Bulbo Trees are large, bulbous plants with a distinctive purple-pink glow. They grow in clusters in the <strong>Plateaus biome</strong>, typically at depths of 40-60 meters. Look for the telltale bioluminescent glow from a distance. Approach and use your Survival Knife to harvest a sample.",
          "球茎树是大型球状植物，有独特的紫粉色辉光。它们成群生长在<strong>高原生态域</strong>，通常深度 40-60 米。从远处就能看到特征性的生物荧光。靠近后用生存刀采集样本。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Where to Find Creepvine Seed Clusters", "去哪里找藤蔓种子簇", locale)}</h2>
      <p className="text-deep-200 mb-4">
        {pick(
          "Creepvines are tall, vine-like plants found in the <strong>Sparse Plains biome</strong>. The seed clusters hang from the upper portions of the vines, around 20-40 meters depth. They glow bright yellow — easy to spot against the darker water. Swim up and harvest by hand.",
          "藤蔓是高大的藤状植物，见于<strong>稀疏平原生态域</strong>。种子簇悬挂在藤蔓上部，深度约 20-40 米。它们发亮黄色光——在较暗的水中很容易发现。游上去徒手采集。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("How to Craft the Cure", "如何制作解药", locale)}</h2>
      <ol className="list-decimal pl-6 space-y-2 text-deep-200 mb-6">
        <li>{pick("Open the <strong>Fabricator</strong> (in your pod or base).", "打开<strong>制造器</strong>（在逃生舱或基地中）。", locale)}</li>
        <li>{pick("Navigate to the <strong>Sustenance</strong> tab.", "进入<strong>食物</strong>标签。", locale)}</li>
        <li>{pick("Select <strong>Cure Digestive Incompatibility</strong>.", "选择<strong>治愈消化系统不兼容</strong>。", locale)}</li>
        <li>{pick("Confirm crafting (takes 2 seconds).", "确认制作（耗时 2 秒）。", locale)}</li>
        <li>{pick("Consume the cure from your inventory.", "从背包中服用解药。", locale)}</li>
      </ol>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Prevention Tips", "预防建议", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li>{pick("Avoid eating raw alien plants — cook your food when possible.", "避免食用生异星植物——尽量烹饪食物。", locale)}</li>
        <li>{pick("Stick to cooked fish and cured food for reliable nutrition.", "以熟鱼和腌制食物作为可靠营养来源。", locale)}</li>
        <li>{pick("If you get the condition again, you already know where the ingredients are!", "如果再次患上，你已经知道材料在哪了！", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("Can I die from Digestive Incompatibility?", "消化系统不兼容会致死吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes, if left untreated for a long time. The health drain is slow, so you have plenty of time to find the cure. Don't panic — just prioritize gathering the ingredients.", "会，如果长期不治疗。生命值消耗很慢，所以你有充足时间找解药。别慌——优先采集材料即可。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Does it go away on its own?", "会自行痊愈吗？", locale)}</summary>
        <div className="faq-answer">{pick("No. You must craft and consume the cure. It will not heal naturally or over time.", "不会。必须制作并服用解药。不会自然或随时间痊愈。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Can I get it more than once?", "会多次患上吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes, if you continue eating raw alien flora. The ingredients are renewable, so you can craft multiple cures.", "会，如果继续食用生异星植物。材料可再生，可以制作多份解药。", locale)}</div>
      </details>

      <div className="mt-10 pt-6 border-t border-deep-400/20">
        <div className="flex flex-wrap gap-2">
          <Link href={l("/guides/beginner-guide", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Beginner Guide →", "新手指南 →", locale)}</Link>
          <Link href={l("/resources/copper", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Copper Location →", "铜矿位置 →", locale)}</Link>
        </div>
      </div>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — last updated June 2026.", "抢先体验版本信息——最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
