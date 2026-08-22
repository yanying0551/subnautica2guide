import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

const steamUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "Subnautica 2 Beginner Guide — Getting Started",
      "深海迷航2 新手指南——入门须知",
      locale,
    ),
    description: pick(
      "A scope-limited starting guide for Subnautica 2 Early Access. Specific mechanics, recipes, and locations are pending verification.",
      "面向深海迷航2抢先体验的有范围限制的入门指南。具体机制、配方和位置尚待核验。",
      locale,
    ),
    alternates: getAlternates("/guides/beginner-guide", locale),
  };
}

export default async function Page() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 page-content">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)}>{pick("Home", "首页", locale)}</Link>
        <span className="mx-2">/</span>
        <Link href={l("/guides", locale)}>{pick("Guides", "攻略", locale)}</Link>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-4">
        {pick("Subnautica 2 Beginner Guide", "深海迷航2 新手指南", locale)}
      </h1>

      <div className="tldr-box mb-8">
        <strong className="block text-deep-300 mb-1">
          {pick("Scope-limited overview", "有限范围概述", locale)}
        </strong>
        <p>
          {pick(
            "Subnautica 2 entered Early Access on May 14, 2026 (Steam store listing). This page provides a framework for new players. Specific game mechanics, crafting recipes, resource locations, creature behavior, and progression steps are pending verification and are not asserted as official facts here.",
            "深海迷航2 于2026年5月14日进入抢先体验（Steam商店页面）。本页为新玩家提供一个基本框架。具体游戏机制、制作配方、资源位置、生物行为和进度步骤尚待核验，本站不将其宣称为官方事实。",
            locale,
          )}
        </p>
      </div>

      <h2>{pick("What is Subnautica 2?", "什么是深海迷航2？", locale)}</h2>
      <p>
        {pick(
          "Subnautica 2 is an open-world underwater survival game developed by Unknown Worlds Entertainment. It is the sequel to Subnautica and Subnautica: Below Zero. The Steam store listing describes it as actively developed throughout Early Access, with more biomes, creatures, craftables, and narrative planned.",
          "深海迷航2 是由 Unknown Worlds Entertainment 开发的开放世界水下生存游戏，是《深海迷航》和《深海迷航：零度之下》的续作。Steam 商店页面说明游戏仍在抢先体验期间积极开发，计划扩展更多生物群系、生物、可制作物和叙事内容。",
          locale,
        )}
      </p>

      <h2>{pick("Early Access scope", "抢先体验范围", locale)}</h2>
      <p>
        {pick(
          "Early Access began May 14, 2026. The Steam feature list notes Single-player, Online Co-op, Cross-Platform Multiplayer, and 4-player co-op. Official updates so far include Early Access 1.1 — Adaptive Measures (July 8, 2026), the Experimental branch (August 12, 2026), and Early Access 1.2 — Buddy System (August 19, 2026). Specific biome counts, creature lists, craftable totals, and narrative length from the current build are pending verification.",
          "抢先体验于2026年5月14日开始。Steam 功能列表包含单人游戏、在线合作、跨平台多人游戏和4人合作模式。截至目前官方更新包括抢先体验1.1——Adaptive Measures（2026年7月8日）、Experimental 分支（2026年8月12日）和抢先体验1.2——Buddy System（2026年8月19日）。当前版本的具体生物群系数量、生物列表、可制作物总数和叙事长度尚待核验。",
          locale,
        )}
      </p>

      <h2>{pick("Getting started — pending verification", "开始游戏——待核验", locale)}</h2>
      <p>
        {pick(
          "The following topics are commonly covered in beginner guides but are not yet backed by a current, attributable source on this site: initial objectives, crafting basics, blueprint acquisition, resource gathering, base-building fundamentals, survival mechanics (hunger, thirst, oxygen), creature encounters, and vehicle construction. Once verified against the current Early Access build, these sections will be added or linked from this page.",
          "以下主题通常出现在新手指南中，但本站尚未获取当前有来源依据的核验信息：初始目标、基础制作、蓝图获取、资源采集、基地建造基础、生存机制（饥饿、口渴、氧气）、生物遭遇和载具建造。一旦对照当前抢先体验版本完成核验，这些内容将添加至本页或通过链接提供。",
          locale,
        )}
      </p>

      <h2>{pick("What this page does not confirm", "本页不确认的内容", locale)}</h2>
      <p>
        {pick(
          "This page does not assert specific starter locations, exact resource coordinates, optimal progression paths, detailed crafting recipes, creature spawn points, vehicle unlock requirements, or base-building strategies as official facts. Those details require versioned, attributable evidence before they appear here as confirmed information.",
          "本页不将具体起始位置、精确资源坐标、最优进度路线、详细制作配方、生物刷新点、载具解锁条件或基地建造策略宣称为官方事实。这些细节在获得有版本标记、可追溯的证据之前，不会作为已确认信息呈现。",
          locale,
        )}
      </p>

      <h2>{pick("Related guides", "相关攻略", locale)}</h2>
      <ul>
        <li><Link href={l("/guides/multiplayer", locale)}>{pick("Multiplayer and Co-op Status", "多人及合作模式状态", locale)}</Link></li>
        <li><Link href={l("/guides/subnautica-2-walkthrough-progression", locale)}>{pick("Walkthrough and Progression Framework", "流程与进度框架", locale)}</Link></li>
        <li><Link href={l("/guides/subnautica-2-blueprints-crafting-recipes", locale)}>{pick("Blueprints and Crafting Recipes Tracker", "蓝图与制作配方追踪", locale)}</Link></li>
        <li><Link href={l("/guides/subnautica-2-map-biomes", locale)}>{pick("Map and Biomes Reference", "地图与生态域参考", locale)}</Link></li>
      </ul>

      <h2>{pick("Source and scope", "来源与适用范围", locale)}</h2>
      <p>
        {pick(
          "Source: ",
          "来源：",
          locale,
        )}
        <a href={steamUrl} target="_blank" rel="noreferrer">
          {pick("Subnautica 2 on Steam", "Steam：Subnautica 2", locale)}
        </a>
        {pick(
          ". Checked August 20, 2026. Game features, availability, and mechanics can change with updates. Detailed gameplay claims on this page remain pending verification and are not asserted as official facts.",
          "。核验日期为2026年8月20日。游戏功能、可用性和机制可能随更新变化。本页详细玩法主张尚待核验，本站不将其宣称为官方事实。",
          locale,
        )}
      </p>
    </div>
  );
}