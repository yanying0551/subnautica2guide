/**
 * The editorial source of truth for the Guide Hub. Keep descriptions scoped to
 * what we can currently attribute; this is deliberately not gameplay data.
 */
export type GuideStatus = "verified" | "limited" | "review";

export type GuideCategory = "reference" | "guides" | "world" | "systems" | "updates";

export interface GuideRegistryEntry {
  slug: string;
  path: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  category: GuideCategory;
  status: GuideStatus;
}

const review = (en: string, zh: string) => ({
  en,
  zh,
});

export const guideRegistry: GuideRegistryEntry[] = [
  {
    slug: "system-requirements", path: "/info/system-requirements",
    title: { en: "System Requirements", zh: "系统配置要求" },
    description: { en: "A verified reference for the published PC requirements.", zh: "已核验的官方 PC 配置要求参考。" },
    category: "reference", status: "verified",
  },
  {
    slug: "multiplayer", path: "/guides/multiplayer",
    title: { en: "Multiplayer", zh: "多人游戏" },
    description: { en: "A verified reference with limited scope for multiplayer status.", zh: "范围有限、已核验的多人游戏状态参考。" },
    category: "reference", status: "limited",
  },
  {
    slug: "roadmap", path: "/updates/roadmap",
    title: { en: "Official Update Tracker", zh: "官方更新追踪" },
    description: { en: "A verified reference for attributable update information.", zh: "已核验的可追溯更新信息参考。" },
    category: "updates", status: "verified",
  },
  {
    slug: "guides", path: "/guides",
    title: { en: "Guide Hub", zh: "攻略中心" },
    description: review("The hub is being assembled while guide sources are checked.", "攻略中心正在整理，相关来源核验进行中。"),
    category: "guides", status: "review",
  },
  {
    slug: "beginner-guide", path: "/guides/beginner-guide",
    title: { en: "Beginner Guide", zh: "新手指南" },
    description: { en: "A scope-limited starting guide grounded in current public references.", zh: "基于当前公开参考、范围有限的新手入门指南。" },
    category: "guides", status: "limited",
  },
  {
    slug: "digestive-incompatibility", path: "/guides/digestive-incompatibility",
    title: { en: "Digestive Incompatibility", zh: "消化不相容" },
    description: review("A topic tracker awaiting attributable gameplay sources.", "等待可追溯玩法来源的主题追踪。"),
    category: "systems", status: "review",
  },
  {
    slug: "angel-comb", path: "/guides/angel-comb",
    title: { en: "Angel Comb", zh: "天使梳" },
    description: review("A topic tracker; location and use details are not confirmed.", "主题追踪；位置和用法细节尚未核实。"),
    category: "world", status: "review",
  },
  {
    slug: "feedback-resonator", path: "/guides/feedback-resonator",
    title: { en: "Feedback Resonator", zh: "反馈共振器" },
    description: review("A topic tracker awaiting source review.", "等待来源核验的主题追踪。"),
    category: "systems", status: "review",
  },
  {
    slug: "creatures", path: "/creatures",
    title: { en: "Creatures", zh: "生物" },
    description: review("A creature reference is being checked against current sources.", "生物参考内容正在依据当前来源核验。"),
    category: "world", status: "review",
  },
  {
    slug: "resources", path: "/resources",
    title: { en: "Resources", zh: "资源" },
    description: review("Resource information remains under source review.", "资源信息仍在来源核验中。"),
    category: "world", status: "review",
  },
  {
    slug: "base-building", path: "/base-building",
    title: { en: "Base Building", zh: "基地建造" },
    description: review("Base-building information remains under source review.", "基地建造信息仍在来源核验中。"),
    category: "systems", status: "review",
  },
  {
    slug: "biomods", path: "/biomods",
    title: { en: "Biomods", zh: "生物模组" },
    description: review("Biomod information remains under source review.", "生物模组信息仍在来源核验中。"),
    category: "systems", status: "review",
  },
  {
    slug: "map-biomes", path: "/guides/subnautica-2-map-biomes",
    title: { en: "Map & Biomes", zh: "地图与生物群系" },
    description: review("A map tracker; locations and claims are not confirmed.", "地图追踪；地点和相关说法尚未核实。"),
    category: "world", status: "review",
  },
  {
    slug: "blueprints", path: "/guides/subnautica-2-blueprints-crafting-recipes",
    title: { en: "Blueprints", zh: "蓝图" },
    description: review("A blueprint tracker; recipes and mechanics are not confirmed.", "蓝图追踪；配方和机制尚未核实。"),
    category: "systems", status: "review",
  },
  {
    slug: "progression", path: "/guides/subnautica-2-walkthrough-progression",
    title: { en: "Progression", zh: "流程进度" },
    description: review("A progression tracker awaiting source review.", "等待来源核验的流程进度追踪。"),
    category: "guides", status: "review",
  },
];

export const GUIDE_CATEGORIES: { id: GuideCategory; en: string; zh: string }[] = [
  { id: "reference", en: "Verified references", zh: "已核验参考" },
  { id: "updates", en: "Updates", zh: "更新" },
  { id: "guides", en: "Guides & trackers", zh: "攻略与追踪" },
  { id: "world", en: "World", zh: "世界" },
  { id: "systems", en: "Systems", zh: "系统" },
];