import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Biomods Guide — DNA Modification System", "深海迷航2 生物模组指南——DNA 改造系统", locale),
    description: pick(
      "Complete guide to Subnautica 2 Biomods (DNA modification). How biomods work, best biomods to unlock first, where to find DNA samples, and recommended builds.",
      "深海迷航2 生物模组（DNA 改造）完整指南。了解生物模组的运作方式、优先解锁哪些模组、在哪里寻找 DNA 样本以及推荐搭配。",
      locale,
    ),
    alternates: getAlternates("/biomods", locale),
  };
}

export default async function BiomodsPage() {
  const locale = await getLocale();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("Biomods", "生物改造", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Subnautica 2 Biomods Guide", "深海迷航2 生物改造指南", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("Quick Answer", "快速答案", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Biomods are DNA modifications that enhance your abilities. Collect DNA samples from creatures, research them in the Biomod Lab, then craft and equip modifications. Priority biomods: <strong>Dash</strong> (movement speed) and <strong>Sea Skimmer</strong> (oxygen efficiency).",
            "生物改造是通过修改 DNA 增强能力的系统。从生物身上收集 DNA 样本，在生物改造实验室研究并解锁配方，然后制作装备。优先解锁：<strong>冲刺</strong>（移动速度）和<strong>海面滑行者</strong>（氧气效率）。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("What Are Biomods?", "什么是生物改造？", locale)}</h2>
      <p className="text-deep-200 mb-6">
        {pick(
          "Biomods are a new system introduced in Subnautica 2 that allows you to modify your DNA using genetic material harvested from creatures. Each biomod grants a unique passive ability, from improved swimming speed to enhanced damage resistance. You can equip multiple biomods simultaneously, limited by your Biomod Capacity.",
          "生物改造是深海迷航2 引入的新系统，允许你使用从生物身上采集的遗传物质修改自己的 DNA。每个生物改造提供一项独特的被动能力，从游泳速度提升到伤害抗性增强。你可以同时装备多个生物改造，受生物改造容量限制。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("How Biomods Work", "生物改造如何运作", locale)}</h2>
      <ol className="list-decimal pl-6 space-y-2 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Collect DNA", "收集 DNA", locale)}</strong> — {pick("Scan or harvest DNA samples from creatures (knife harvest gives higher quality samples).", "扫描或采集生物的 DNA 样本（用刀采集可获得更高质量的样本）。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Research", "研究", locale)}</strong> — {pick("Use the Biomod Lab in your base to analyze DNA and unlock biomod blueprints.", "在基地的生物改造实验室分析 DNA 并解锁生物改造配方。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Craft", "制作", locale)}</strong> — {pick("Each biomod requires specific materials and DNA samples.", "每个生物改造需要特定材料和 DNA 样本。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Equip", "装备", locale)}</strong> — {pick("Install biomods at a Biomod Station. Manage your capacity limit.", "在生物改造站装备。管理你的容量上限。", locale)}</li>
      </ol>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Recommended Biomods (Early Priority)", "推荐生物改造（早期优先级）", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Biomod", "生物改造", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Effect", "效果", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Priority", "优先级", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Dash", "冲刺", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("+30% swim speed", "+30% 游泳速度", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-400 font-medium">#1</td>
            </tr>
            <tr className="bg-deep-900/10">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Sea Skimmer", "海面滑行者", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("-25% oxygen consumption rate", "-25% 氧气消耗", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-400 font-medium">#2</td>
            </tr>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Pressure Adaptation", "压力适应", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("+50m crush depth", "+50m 抗压深度", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-300">#3</td>
            </tr>
            <tr className="bg-deep-900/10">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Thermal Resistance", "热抗性", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Reduces heat damage by 50%", "减少 50% 热伤害", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-300">#4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-box">
        <strong className="block text-deep-300 mb-1">💡 {pick("Biomod Capacity", "生物改造容量", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Your Biomod Capacity increases as you unlock more Biomod Lab upgrades. Early game you can equip 2-3 biomods. Mid-game upgrades let you equip 5+ simultaneously.",
            "你的生物改造容量随实验室升级而提升。游戏早期可装备 2-3 个生物改造。中期升级后可同时装备 5 个以上。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("Can I remove a biomod after equipping it?", "装备后能取下生物改造吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes. Visit a Biomod Station to unequip any biomod. Some materials may not be fully refunded.", "可以。前往生物改造站卸下任意生物改造。部分材料可能无法全额返还。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Are biomods permanent?", "生物改造是永久的吗？", locale)}</summary>
        <div className="faq-answer">{pick("Equipped biomods are persistent. They don't degrade or expire. You can freely swap them at a Biomod Station.", "已装备的生物改造是持久的。不会衰减或过期。可在生物改造站自由更换。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Can I get all biomods in one playthrough?", "一周目能获得所有生物改造吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes. DNA samples are renewable (creatures respawn), and all biomod blueprints can be unlocked with enough research.", "可以。DNA 样本是可再生的（生物会刷新），所有生物改造配方都可凭足够研究解锁。", locale)}</div>
      </details>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — biomod system may change with updates. Last updated June 2026.", "抢先体验版本信息——生物改造系统可能随更新而变化。最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
