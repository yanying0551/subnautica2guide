import Link from "next/link";
import { l, pick, type Locale } from "@/lib/server-locale";
import { Breadcrumb, PageHero, SourceBlock } from "@/components/GuideUI";

type GuideKind = "map" | "blueprints" | "progression";

const steamUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";
const unknownWorldsUrl = "https://unknownworlds.com/en/news/subnautica-2-buddy-system-update";

const copy = {
  map: {
    en: {
      eyebrow: "Map & biomes guide · source review",
      title: "Subnautica 2 Map and Biomes: A Version-Safe Reference",
      intro: "Use this page as a map-status tracker, not as a finished coordinate map. Subnautica 2 is in Early Access, so biome names, boundaries, routes, and points of interest need current-build evidence before they are published as facts.",
      confirmed: "The official store listing describes exploration on an all-new alien world and says Early Access development will continue to add content. It does not provide a complete public coordinate database.",
      next: ["Record the game build and platform before trusting a map screenshot.", "Separate developer-published information from community observations.", "Treat coordinates, depth numbers, creature locations, and route instructions as unverified until they have reproducible current-build evidence."],
      notConfirmed: "A complete biome list, map boundary, coordinate grid, progression route, and guaranteed resource or creature locations are not confirmed by the sources used here.",
      sourceLabel: "Steam listing and official update communication",
    },
    zh: {
      eyebrow: "地图与生态域指南 · 来源核验中",
      title: "深海迷航2 地图与生态域：版本安全参考",
      intro: "本页是地图状态追踪页，不是最终坐标地图。深海迷航2仍处于抢先体验阶段；在发布生态域名称、边界、路线和兴趣点之前，需要当前版本证据。",
      confirmed: "官方商店页面介绍了在全新外星世界中的探索，并说明抢先体验期间会继续开发内容，但没有提供完整的公开坐标数据库。",
      next: ["记录游戏版本和平台，再判断地图截图是否适用。", "区分开发者公开信息和社区观察。", "坐标、深度数值、生物位置和路线说明，在获得可复现的当前版本证据前都应视为未核验。"],
      notConfirmed: "当前来源没有确认完整生态域清单、地图边界、坐标网格、流程路线，以及资源或生物的固定位置。",
      sourceLabel: "Steam 商店页面与官方更新公告",
    },
  },
  blueprints: {
    en: {
      eyebrow: "Blueprints & crafting guide · source review",
      title: "Subnautica 2 Blueprints and Crafting Recipes: Verification Tracker",
      intro: "This page is a safe reference for tracking blueprint evidence. It intentionally does not turn old Subnautica recipes or unverified community tables into Subnautica 2 facts.",
      confirmed: "The official listing confirms crafting tools as part of the survival experience. It does not provide a complete recipe, unlock, material-cost, or station database.",
      next: ["Capture the exact item or blueprint name as shown in the current build.", "Record where the unlock was observed and which platform/build was used.", "Keep recipe ingredients, station requirements, and unlock order separate until each has direct evidence."],
      notConfirmed: "The full blueprint catalogue, ingredient quantities, crafting stations, unlock conditions, and recipe order remain unconfirmed here.",
      sourceLabel: "Steam listing and official update communication",
    },
    zh: {
      eyebrow: "蓝图与制作指南 · 来源核验中",
      title: "深海迷航2 蓝图与制作配方：核验追踪页",
      intro: "本页用于安全地追踪蓝图证据，不会把旧版深海迷航机制或未经核验的社区表格当成深海迷航2事实。",
      confirmed: "官方商店页面确认生存体验包含工具制作，但没有提供完整配方、解锁、材料成本或工作台数据库。",
      next: ["记录当前版本中显示的准确物品或蓝图名称。", "记录解锁出现的位置，以及使用的平台和版本。", "在每项都有直接证据前，分开记录材料、工作台要求和解锁顺序。"],
      notConfirmed: "完整蓝图目录、材料数量、制作台、解锁条件和配方顺序目前都未在本页确认。",
      sourceLabel: "Steam 商店页面与官方更新公告",
    },
  },
  progression: {
    en: {
      eyebrow: "Walkthrough & progression guide · source review",
      title: "Subnautica 2 Walkthrough and Progression: Early Access Framework",
      intro: "This is a spoiler-controlled progression framework for an evolving Early Access game. It helps you document what to check next without pretending that an unfinished story or objective order is final.",
      confirmed: "The official listing describes survival, exploration, crafting, and base building, while official update posts show that features can change during Early Access.",
      next: ["Start with the current objective or unlock shown in your own build.", "Keep survival needs, exploration notes, crafting notes, and story observations in separate sections.", "When a guide step changes after an update, record the old and new build instead of silently rewriting history."],
      notConfirmed: "This page does not confirm a complete story, ending, objective sequence, required route, or spoiler-free order of progression.",
      sourceLabel: "Steam listing and the Buddy System update",
    },
    zh: {
      eyebrow: "流程与进度指南 · 来源核验中",
      title: "深海迷航2 流程与进度：抢先体验框架",
      intro: "这是面向持续变化的抢先体验游戏的防剧透进度框架。它帮助玩家记录下一步要核对什么，但不会把未完成的故事或目标顺序写成最终版本。",
      confirmed: "官方商店页面介绍了生存、探索、制作和基地建造；官方更新公告也表明抢先体验期间功能可能变化。",
      next: ["以自己当前版本中显示的目标或解锁为起点。", "将生存需求、探索笔记、制作笔记和剧情观察分开记录。", "攻略步骤因更新变化时，记录旧版本和新版本，不要无提示地覆盖历史。"],
      notConfirmed: "本页不确认完整故事、结局、目标顺序、必经路线或无剧透的固定进度顺序。",
      sourceLabel: "Steam 商店页面与 Buddy System 更新公告",
    },
  },
} as const;

export function EvidenceBoundGuidePage({ kind, locale }: { kind: GuideKind; locale: Locale }) {
  const data = copy[kind][locale === "zh" ? "zh" : "en"];
  return (
    <main>
      <PageHero locale={locale} status="review" eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
      <article className="max-w-4xl mx-auto px-4 py-10 page-content">
      <Breadcrumb locale={locale} items={[{ href: "/", en: "Home", zh: "首页" }, { href: "/guides", en: "Guides", zh: "攻略" }, { en: "Source review", zh: "来源核验" }]} />
      <div className="tldr-box mb-8">
        <strong className="block text-deep-300 mb-2">{pick("What is confirmed", "已确认范围", locale)}</strong>
        <p>{data.confirmed}</p>
      </div>
      <h2>{pick("A useful way to check the next update", "核对下一次更新的方法", locale)}</h2>
      <ul>{data.next.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2>{pick("Not confirmed on this page", "本页尚未确认", locale)}</h2>
      <p>{data.notConfirmed}</p>
      <h2>{pick("Use verified references", "查看已核验参考", locale)}</h2>
      <ul>
        <li><Link href={l("/guides/multiplayer", locale)}>{pick("Co-op and multiplayer status", "合作与多人模式状态", locale)}</Link></li>
        <li><Link href={l("/info/system-requirements", locale)}>{pick("PC system requirements", "PC 系统配置要求", locale)}</Link></li>
        <li><Link href={l("/updates/roadmap", locale)}>{pick("Official update status", "官方更新状态", locale)}</Link></li>
      </ul>
      <SourceBlock locale={locale} checked="August 20, 2026" scope={pick("Early Access; details may change", "抢先体验；细节可能变化", locale)} sources={[{ href: steamUrl, en: "Subnautica 2 on Steam", zh: "Steam：Subnautica 2" }, { href: unknownWorldsUrl, en: data.sourceLabel, zh: data.sourceLabel }]} />
      </article>
    </main>
  );
}
