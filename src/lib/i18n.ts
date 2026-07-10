// i18n dictionary — English / 中文
// Every text string on the site that differs per language goes here.

export type Locale = "en" | "zh";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "zh"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

// Flat string key → value per locale
export const t: Record<string, Record<Locale, string>> = {
  // Brand
  "brand.title": { en: "Subnautica 2 Guide", zh: "深海迷航2 指南" },
  "brand.subtitle": { en: "Fan-made Wiki & Guide", zh: "粉丝制作的中文维基指南" },
  "brand.description": {
    en: "The ultimate fan-made guide for Subnautica 2 — walkthroughs, creature database, resource locations, base building tips, and co-op guides.",
    zh: "为深海迷航2（Subnautica 2）打造的完整中文指南——全流程攻略、生物图鉴、资源点位、基地建造技巧和联机教程。",
  },

  // Navigation
  "nav.home": { en: "Home", zh: "首页" },
  "nav.creatures": { en: "Creatures", zh: "生物图鉴" },
  "nav.resources": { en: "Resources", zh: "资源指南" },
  "nav.base-building": { en: "Base Building", zh: "基地建造" },
  "nav.biomods": { en: "Biomods", zh: "生物改造" },
  "nav.coop": { en: "Co-op", zh: "联机" },
  "nav.roadmap": { en: "Roadmap", zh: "路线图" },
  "nav.guides": { en: "Guides", zh: "教程" },

  // Hero
  "hero.badge": { en: "Early Access • Updated June 2026", zh: "抢先体验 • 2026年6月更新" },
  "hero.cta.resources": { en: "Browse Resources", zh: "资源大全" },
  "hero.cta.beginner": { en: "Beginner Guide →", zh: "新手教程 →" },

  // Quick Links
  "quicklinks.title": { en: "Quick Links", zh: "快捷导航" },
  "quicklinks.creatures": { en: "Creatures", zh: "生物图鉴" },
  "quicklinks.resources": { en: "Resources", zh: "资源指南" },
  "quicklinks.base-building": { en: "Base Building", zh: "基地建造" },
  "quicklinks.biomods": { en: "Biomods", zh: "生物改造" },
  "quicklinks.coop": { en: "Co-op Guide", zh: "联机教程" },
  "quicklinks.roadmap": { en: "Roadmap", zh: "开发路线图" },

  // Popular Guides
  "popular.title": { en: "Popular Guides", zh: "热门攻略" },
  "popular.digestive": { en: "How to Cure Digestive Incompatibility", zh: "如何治愈消化系统不兼容" },
  "popular.digestive.desc": { en: "Get rid of that green status icon — here's exactly what you need.", zh: "消除那个绿色状态图标——这里有你需要的所有信息。" },
  "popular.copper": { en: "Where to Find Copper", zh: "铜矿位置指南" },
  "popular.copper.desc": { en: "Copper is essential for batteries and wiring. Best locations inside.", zh: "铜是制作电池和电路的关键材料，内有最佳采集点。" },
  "popular.base": { en: "Best Base Location Guide", zh: "最佳基地选址指南" },
  "popular.base.desc": { en: "Find the perfect spot for your first base on Luca.", zh: "在路卡星球找到最适合你第一个基地的位置。" },
  "popular.coop": { en: "Co-op Multiplayer Guide", zh: "联机多人教程" },
  "popular.coop.desc": { en: "How to play with friends, crossplay details, and co-op mechanics.", zh: "如何与朋友一起游玩、跨平台联机详情和合作机制。" },

  // EA Status
  "ea.title": { en: "Early Access Status", zh: "抢先体验状态" },
  "ea.build": { en: "Current build: EA 1.0 + Hotfix 3", zh: "当前版本：EA 1.0 + 热点修复3" },
  "ea.released": { en: "Released", zh: "发布" },
  "ea.released.date": { en: "May 14, 2026", zh: "2026年5月14日" },
  "ea.next": { en: "Next", zh: "下一个" },
  "ea.next.update": { en: "EA 1.1 Update", zh: "EA 1.1 更新" },
  "ea.price": { en: "Price", zh: "售价" },

  // Footer
  "footer.about.title": { en: "Subnautica 2 Guide", zh: "深海迷航2 指南" },
  "footer.about.text": {
    en: "A fan-made guide and wiki for Subnautica 2. Not affiliated with Unknown Worlds Entertainment or Krafton Inc.",
    zh: "为深海迷航2（Subnautica 2）制作的粉丝指南和维基百科。与 Unknown Worlds Entertainment 或 Krafton Inc. 无关。",
  },
  "footer.quicklinks": { en: "Quick Links", zh: "快速链接" },
  "footer.sources": { en: "Official Sources", zh: "官方资源" },
  "footer.fan.text": { en: "Subnautica 2 is a trademark of Unknown Worlds Entertainment. This is a fan site.", zh: "深海迷航2 是 Unknown Worlds Entertainment 的商标。本网站为粉丝制作。" },
  "footer.privacy": { en: "Privacy", zh: "隐私政策" },
  "footer.terms": { en: "Terms", zh: "服务条款" },
  "footer.cookies": { en: "Cookies", zh: "Cookie 政策" },
  "footer.disclaimer": { en: "Disclaimer", zh: "免责声明" },

  // Pages — Guides list page
  "guides.title": { en: "Guides & Walkthroughs", zh: "游戏教程" },
  "guides.desc": { en: "Step-by-step guides for Subnautica 2 Early Access.", zh: "深海迷航2 抢先体验版本循序渐进教程。" },
  "guides.system.title": { en: "System Requirements", zh: "系统配置要求" },
  "guides.system.desc": { en: "Check if your PC can run Subnautica 2 on Unreal Engine 5.", zh: "查看你的电脑能否运行搭载虚幻5引擎的深海迷航2。" },

  // Pages — Resources list
  "resources.title": { en: "Subnautica 2 Resources", zh: "资源大全" },
  "resources.desc": { en: "Complete resource location guide for Subnautica 2 Early Access.", zh: "深海迷航2 抢先体验版本完整资源点位指南。" },
  "resources.table.name": { en: "Resource", zh: "资源" },
  "resources.table.source": { en: "Source", zh: "来源" },
  "resources.table.biome": { en: "Best Biome", zh: "最佳生物群系" },
  "resources.table.depth": { en: "Depth", zh: "深度" },

  // Creatures title
  "creatures.title": { en: "Subnautica 2 Creatures", zh: "深海迷航2 生物图鉴" },
  "creatures.desc": { en: "Complete creature guide for Subnautica 2 Early Access. 93 documented species across 4 confirmed biomes.", zh: "深海迷航2 抢先体验完整生物指南。已收录 93 种生物，分布在 4 个已确认的生物群系中。" },

  // Base building
  "base-building.title": { en: "Subnautica 2 Base Building Guide", zh: "基地建造指南" },
  "base-building.desc": { en: "Complete base building guide for Subnautica 2.", zh: "深海迷航2 完整基地建造指南。" },

  // Biomods
  "biomods.title": { en: "Subnautica 2 Biomods Guide", zh: "生物改造指南" },
  "biomods.desc": { en: "Complete biomods guide for Subnautica 2.", zh: "深海迷航2 完整生物改造指南。" },

  // Multiplayer
  "multiplayer.title": { en: "Subnautica 2 Co-op Multiplayer Guide", zh: "联机多人游戏指南" },
  "multiplayer.desc": { en: "Complete Subnautica 2 co-op guide.", zh: "深海迷航2 完整联机教程。" },

  // Roadmap
  "roadmap.title": { en: "Subnautica 2 EA Roadmap", zh: "抢先体验开发路线图" },
  "roadmap.desc": { en: "Track Subnautica 2 Early Access roadmap.", zh: "关注深海迷航2 抢先体验版本的开发路线图。" },

  // System requirements
  "system-requirements.title": { en: "Subnautica 2 System Requirements", zh: "系统配置要求" },
  "system-requirements.desc": { en: "Can your PC run Subnautica 2?", zh: "你的电脑能跑深海迷航2 吗？" },

  // Beginner guide
  "beginner-guide.title": { en: "Subnautica 2 Beginner Guide", zh: "新手入门指南" },
  "beginner-guide.desc": { en: "Complete beginner guide for Subnautica 2.", zh: "深海迷航2 完整新手入门指南。" },

  // 404
  "404.message": { en: "This page hasn't been built yet — we're adding new guides daily.", zh: "此页面尚未完成——我们每天都在添加新的指南内容。" },
  "404.back": { en: "Back to Home", zh: "回到首页" },

  // Disclaimer about section
  "about.title": { en: "About This Guide", zh: "关于本指南" },
  "about.text": {
    en: "Subnautica 2 Guide is an independent, fan-made wiki and guide website. We provide walkthroughs, creature information, resource locations, base building tips, and more for Subnautica 2 Early Access. We are not affiliated with Unknown Worlds Entertainment or Krafton Inc.",
    zh: "深海迷航2 指南是一个独立的粉丝制作维基和攻略网站。我们为深海迷航2 抢先体验版提供全流程攻略、生物信息、资源点位、基地建造技巧等内容。我们与 Unknown Worlds Entertainment 或 Krafton Inc. 无关。",
  },

  // Resource detail page — shared UI strings
  "resource.tldr.title": { en: "⚡ TL;DR — Quick Answer", zh: "⚡ 摘要 — 快速答案" },
  "resource.biome.title": { en: "by Biome", zh: "按生态域分类" },
  "resource.biome.col.name": { en: "Biome", zh: "生态域" },
  "resource.biome.col.depth": { en: "Depth", zh: "深度" },
  "resource.biome.col.notes": { en: "Notes", zh: "说明" },
  "resource.uses.title": { en: "Crafting Uses", zh: "合成用途" },
  "resource.protip.title": { en: "💡 Pro Tip", zh: "💡 实用技巧" },
  "resource.related.title": { en: "Related Guides", zh: "相关指南" },
  "resource.related.all": { en: "All Resources →", zh: "全部资源 →" },
  "resource.related.beginner": { en: "Beginner Guide →", zh: "新手指南 →" },
  "resource.footer.note": {
    en: "EA version information — resource locations may change with updates. Last updated: June 2026.",
    zh: "抢先体验版本信息——资源位置可能随更新而变化。最后更新：2026年6月。",
  },
  "breadcrumb.home": { en: "Home", zh: "首页" },
  "breadcrumb.resources": { en: "Resources", zh: "资源" },
};

// Get translation by key
export function tr(key: string, locale: Locale): string {
  return t[key]?.[locale] ?? t[key]?.en ?? key;
}

// Quick links data per locale
export const quickLinksZh = [
  { href: "/creatures", label: "生物图鉴", icon: "🐟" },
  { href: "/resources", label: "资源指南", icon: "⛏️" },
  { href: "/base-building", label: "基地建造", icon: "🏗️" },
  { href: "/biomods", label: "生物改造", icon: "🧬" },
  { href: "/guides/multiplayer", label: "联机教程", icon: "🎮" },
  { href: "/updates/roadmap", label: "路线图", icon: "📋" },
];

// Guides list per locale
export const guidesZh = [
  { slug: "beginner-guide", name: "新手入门指南", description: "在路卡星球的第一个小时——该做什么、该去哪里。" },
  { slug: "digestive-incompatibility", name: "治愈消化系统不兼容", description: "如何治愈消化系统不兼容症状。" },
  { slug: "angel-comb", name: "天使梳指南", description: "在哪里找到以及如何使用天使梳。" },
  { slug: "feedback-resonator", name: "反馈共振器指南", description: "如何解锁和使用反馈共振器。" },
  { slug: "multiplayer", name: "联机多人指南", description: "如何与朋友一起游玩深海迷航2。" },
];

// Featured guides per locale
export const featuredGuidesZh = [
  {
    title: "如何治愈消化系统不兼容",
    href: "/guides/digestive-incompatibility",
    desc: "消除那个绿色状态图标——这里有你需要的所有信息。",
    tag: "热门",
  },
  {
    title: "铜矿位置指南",
    href: "/resources/copper",
    desc: "铜是制作电池和电路的关键材料。内有最佳采集点。",
    tag: "必备",
  },
  {
    title: "最佳基地选址指南",
    href: "/base-building",
    desc: "在路卡星球找到最适合你第一个基地的位置。",
    tag: "教程",
  },
  {
    title: "联机多人教程",
    href: "/guides/multiplayer",
    desc: "如何与朋友一起游玩、跨平台联机详情和合作机制。",
    tag: "热门",
  },
];

// Resource detail data — per-locale content for /resources/[slug]
export type ResourceDetail = {
  title: string;
  meta: string;
  h1: string;
  tldr: string;
  biomes: { name: string; depth: string; notes: string }[];
  uses: string[];
  proTip: string;
};

export const resourceDetailZh: Record<string, ResourceDetail> = {
  copper: {
    title: "深海迷航2 铜矿位置完整指南",
    meta: "在深海迷航2 中需要铜矿？这里提供铜矿位置、最佳生态域、深度范围和采矿技巧。铜是制作电路套件、电池和早期合成的关键材料。",
    h1: "在深海迷航2 中哪里能找到铜矿",
    tldr: "铜矿最常见于 **稀疏平原** 和 **高原** 生态域。在海底和洞穴壁上寻找 **石灰岩矿脉**。深度：0–150 米。用生存刀或 Prawn 机甲钻臂破坏石灰岩矿脉即可获取。",
    biomes: [
      { name: "稀疏平原", depth: "0-80m", notes: "密度最高——最佳早期刷矿点。检查洞穴系统可获取最高刷新率。" },
      { name: "高原", depth: "30-150m", notes: "中等密度，稀疏平原资源枯竭时的良好替代。" },
      { name: "墓地", depth: "50-100m", notes: "低密度。注意攻击性生物。" },
      { name: "热液尖塔", depth: "80-200m", notes: "中等密度，但深度超过你早期所需。" },
    ],
    uses: ["电路套件——大多数基地模块的必需品", "电池——为工具和载具供电", "电脑芯片——高级合成", "强化潜水服——深海探索"],
    proTip: "当铜矿稀缺时，前往稀疏平原的洞穴系统。那里有全游戏最高的石灰岩矿脉密度。一次穿过主洞穴的探索可获得 15-20 块铜矿。",
  },
  silver: {
    title: "深海迷航2 白银位置完整指南",
    meta: "深海迷航2 白银位置。白银从石灰岩矿脉中获取。最佳生态域、深度范围和合成用途。",
    h1: "在深海迷航2 中哪里能找到白银",
    tldr: "白银来自 **石灰岩矿脉**——和铜矿同源。最佳采集区：**高原生态域**，50-150m。白银比铜矿稀有（约 1:4 比例），需要破坏更多矿脉。",
    biomes: [
      { name: "高原", depth: "50-150m", notes: "白银的最佳综合采集点。石灰岩矿脉密度高。" },
      { name: "稀疏平原", depth: "0-80m", notes: "刷新不错但白银掉率较低。" },
      { name: "热液尖塔", depth: "80-200m", notes: "拥有深海探索工具后的良好后期来源。" },
    ],
    uses: ["电路套件——和铜矿一样，需求量大", "医疗包制作器——恢复生命", "扫描室升级——范围和速度提升"],
    proTip: "白银和铜矿共享同一种矿脉，所以无法专门刷白银。最佳策略是数量取胜：破坏你看到的每一个石灰岩矿脉，把多余的铜存起来备用。",
  },
  lead: {
    title: "深海迷航2 铅矿位置——哪里能找到铅",
    meta: "在深海迷航2 中寻找铅？铅来自砂岩矿脉。最佳生态域、深度指南及铅的合成用途。",
    h1: "在深海迷航2 中哪里能找到铅",
    tldr: "铅来自 **砂岩矿脉**（也产出白银和黄金）。最佳生态域：**稀疏平原** 和 **墓地**，30-100m。铅是辐射防护的关键材料。",
    biomes: [
      { name: "墓地", depth: "30-100m", notes: "砂岩矿脉密度最高。最佳铅矿采集点。" },
      { name: "稀疏平原", depth: "20-80m", notes: "良好替代，特别是生态域边界处。" },
      { name: "高原", depth: "50-150m", notes: "密度较低但值得检查。" },
    ],
    uses: ["辐射服——探索热液区域必需", "强化潜水服——深海生存", "铅砖——基地的辐射屏蔽"],
    proTip: "别把砂岩矿脉和石灰岩搞混——砂岩质地更粗糙、颜色更深。如果还在早期且需要辐射服，优先去墓地生态域以最快速度收集铅。",
  },
  salt: {
    title: "深海迷航2 盐矿位置——哪里能找到盐沉积",
    meta: "在深海迷航2 中寻找盐沉积。盐用于腌制食物和水过滤。最佳生态域、深度和采集技巧。",
    h1: "在深海迷航2 中哪里能找到盐",
    tldr: "盐沉积以 **白色结晶形态** 出现在海底。最佳采集于 **稀疏平原** 和 **高原**，0-50m。徒手采集——无需工具。",
    biomes: [
      { name: "稀疏平原", depth: "0-50m", notes: "最常见的生态域。盐沉积散落在沙质海底。" },
      { name: "高原", depth: "10-60m", notes: "不错的替代，特别是岩石构造附近。" },
      { name: "热液尖塔", depth: "30-80m", notes: "稀少但经过时值得顺手收集。" },
    ],
    uses: ["腌制食物——为长途探险保存鱼肉", "水过滤机——生产大瓶水"],
    proTip: "盐会在相同位置刷新，使稀疏平原成为可靠的采集路线。在地图上标记几个已知盐点，每个游戏内白天重访一次。",
  },
  titanium: {
    title: "深海迷航2 钛矿位置——最佳钛矿采集指南",
    meta: "钛是深海迷航2 中使用最频繁的资源。从石灰岩矿脉、金属残骸和所有生态域中获取钛。完整采集指南含路线。",
    h1: "在深海迷航2 中哪里能找到钛",
    tldr: "钛无处不在。破坏 **石灰岩矿脉**（约 30% 掉率）。收集海底散落的 **金属残骸** 在制造器中处理。最佳起始生态域：稀疏平原。",
    biomes: [
      { name: "所有生态域", depth: "0-200m", notes: "石灰岩矿脉到处刷新。约每 3 个矿脉掉落 1 块钛。" },
      { name: "稀疏平原（残骸）", depth: "0-80m", notes: "金属残骸最集中——寻找扭曲的金属碎片。" },
      { name: "高原（残骸）", depth: "20-150m", notes: "悬崖边有不错的残骸刷新。" },
    ],
    uses: ["基地舱室——每条走廊和房间", "工具——生存刀、扫描器、修复工具", "载具——海滑翔器、Prawn 机甲零件", "家具——储物柜、椅子、种植盆"],
    proTip: "金属残骸每块给 4 个钛，而矿脉只给 1 个。批量采集时优先选残骸。一次穿过稀疏平原可获得 20+ 块残骸（80+ 钛）。",
  },
  quartz: {
    title: "深海迷航2 石英位置完整水晶指南",
    meta: "深海迷航2 石英位置。石英水晶用于玻璃、窗户和高级合成。最佳生态域和深度范围。",
    h1: "在深海迷航2 中哪里能找到石英",
    tldr: "石英水晶位于 **高原** 和 **稀疏平原** 海底，10-80m。寻找发光的结晶构造。徒手采集——无需工具。",
    biomes: [
      { name: "高原", depth: "10-80m", notes: "最佳刷新率。水晶在沙质海底上清晰可见。" },
      { name: "稀疏平原", depth: "0-50m", notes: "良好的早期来源，特别是洞穴入口附近。" },
      { name: "热液尖塔", depth: "50-150m", notes: "更大的水晶构造但更深。" },
    ],
    uses: ["玻璃——用于窗户和观察室", "强化玻璃——用于深海基地模块", "电脑芯片——中间合成组件"],
    proTip: "石英水晶在黑暗中略微发光，使夜间或洞穴系统中更容易发现。高原生态域密度最高——一次穿过可获得 10-15 块石英。",
  },
  gold: {
    title: "深海迷航2 黄金位置——哪里能找到金矿",
    meta: "在深海迷航2 中寻找金矿。黄金来自砂岩矿脉。最佳生态域、深度范围和高级合成用途。",
    h1: "在深海迷航2 中哪里能找到黄金",
    tldr: "黄金来自 **砂岩矿脉**（也产出铅和白银）。最佳生态域：**热液尖塔**，80-200m。黄金是高级电子元件的必需品。",
    biomes: [
      { name: "热液尖塔", depth: "80-200m", notes: "全游戏最高的砂岩密度。最佳黄金采集点。" },
      { name: "墓地", depth: "50-150m", notes: "不错的替代，刷新密度中等。" },
      { name: "高原", depth: "50-150m", notes: "密度较低但早期可达。" },
    ],
    uses: ["电脑芯片——高级模块", "电路套件——高端基地组件", "扫描室——升级芯片"],
    proTip: "黄金是较稀有的基础资源之一。在热液尖塔发现砂岩矿脉时全部清理——那里的黄金/铅比例优于其他生态域。",
  },
  lithium: {
    title: "深海迷航2 锂矿位置——哪里能找到锂",
    meta: "在深海迷航2 中寻找锂。锂矿位置、最佳生态域及在基地建造和载具升级中的用途。",
    h1: "在深海迷航2 中哪里能找到锂",
    tldr: "锂来自 **页岩矿脉**（也产出钻石）。最佳生态域：**热液尖塔**，100-200m。锂是基地加固和载具深度模块的关键。",
    biomes: [
      { name: "热液尖塔", depth: "100-200m", notes: "主要来源。页岩矿脉见于更深的洞穴系统。" },
      { name: "墓地", depth: "80-150m", notes: "密度较低但值得探访。" },
    ],
    uses: ["塑钢锭——高级基地组件", "船体加固——载具深度模块", "强化潜水服——深海探索"],
    proTip: "当你开始建造深海基地时锂变得至关重要。尽早囤积——热液尖塔生态域的页岩矿脉刷新频率高于其他资源点。",
  },
};

// English resource detail data
export const resourceDetailEn: Record<string, ResourceDetail> = {
  copper: {
    title: "Where to Find Copper in Subnautica 2 — Complete Guide",
    meta: "Need copper in Subnautica 2? Find copper locations, best biomes, depth ranges, and mining tips. Copper is essential for wiring kits, batteries, and early crafting.",
    h1: "Where to Find Copper in Subnautica 2",
    tldr: "Copper is most commonly found in **Sparse Plains** and **Plateaus** biomes. Look for **Limestone Outcrops** on the seafloor and along cave walls. Depth: 0–150 meters. Break Limestone Outcrops with your Survival Knife or Prawn Suit Drill Arm.",
    biomes: [
      { name: "Sparse Plains", depth: "0-80m", notes: "High density — best early-game farming spot. Check cave systems for highest spawn rate." },
      { name: "Plateaus", depth: "30-150m", notes: "Medium density, good alternative when Sparse Plains runs dry." },
      { name: "Graveyard", depth: "50-100m", notes: "Low density. Beware of aggressive creatures." },
      { name: "Thermal Spires", depth: "80-200m", notes: "Medium density, but deeper than you need for copper." },
    ],
    uses: ["Wiring Kit — essential for most base modules", "Battery — power tools and vehicles", "Computer Chip — advanced crafting", "Reinforced Dive Suit — deep exploration"],
    proTip: "When copper seems rare, head to the Sparse Plains cave systems. They have the highest Limestone Outcrop density in the game. A single run through the main caves can yield 15-20 copper ore.",
  },
  silver: {
    title: "Where to Find Silver in Subnautica 2 — Full Location Guide",
    meta: "Silver locations in Subnautica 2. Find silver ore from Limestone Outcrops. Best biomes, depth ranges, and crafting uses.",
    h1: "Where to Find Silver in Subnautica 2",
    tldr: "Silver comes from **Limestone Outcrops** — the same source as Copper. Best farming area: **Plateaus biome**, 50-150m. Silver is rarer than Copper (roughly 1:4 ratio), so you may need to break more outcrops.",
    biomes: [
      { name: "Plateaus", depth: "50-150m", notes: "Best all-around spot for silver. High Limestone Outcrop density." },
      { name: "Sparse Plains", depth: "0-80m", notes: "Decent spawns but lower silver drop rate." },
      { name: "Thermal Spires", depth: "80-200m", notes: "Good late-game source once you have deeper exploration tools." },
    ],
    uses: ["Wiring Kit — same as copper, you'll need lots", "Medical Kit Fabricator — health restoration", "Scanner Room Upgrades — range and speed boosts"],
    proTip: "Silver and Copper share the same outcrop type, so there's no way to target farm silver specifically. The best strategy is volume: break every Limestone Outcrop you see and store the excess copper for later.",
  },
  lead: {
    title: "Lead Location in Subnautica 2 — Where to Find Lead",
    meta: "Looking for lead in Subnautica 2? Lead is found in Sandstone Outcrops. Best biomes, depth guide, and what lead is used for in crafting.",
    h1: "Where to Find Lead in Subnautica 2",
    tldr: "Lead comes from **Sandstone Outcrops** (also yield Silver and Gold). Best biome: **Sparse Plains** and **Graveyard**, 30-100m. Lead is critical for radiation protection.",
    biomes: [
      { name: "Graveyard", depth: "30-100m", notes: "Highest Sandstone Outcrop density. Best spot for lead farming." },
      { name: "Sparse Plains", depth: "20-80m", notes: "Good alternative, especially along the biome borders." },
      { name: "Plateaus", depth: "50-150m", notes: "Lower density but worth checking." },
    ],
    uses: ["Radiation Suit — required for exploring thermal zones", "Reinforced Dive Suit — deep sea survival", "Lead Tile — radiation shielding for bases"],
    proTip: "Don't mistake Sandstone Outcrops for Limestone ones — Sandstone has a rougher, darker texture. If you're still early-game and need the Radiation Suit, prioritize the Graveyard biome for the fastest lead collection.",
  },
  salt: {
    title: "Salt Location in Subnautica 2 — Where to Find Salt Deposits",
    meta: "Find salt deposits in Subnautica 2. Salt is required for cured food and water filtration. Best biomes, depth, and farming tips.",
    h1: "Where to Find Salt in Subnautica 2",
    tldr: "Salt deposits appear on the seafloor as **white crystalline formations**. Best found in **Sparse Plains** and **Plateaus**, 0-50m. Use your hands to harvest — no tool required.",
    biomes: [
      { name: "Sparse Plains", depth: "0-50m", notes: "Most common biome. Salt deposits are scattered across the sandy floor." },
      { name: "Plateaus", depth: "10-60m", notes: "Decent alternative, especially near rock formations." },
      { name: "Thermal Spires", depth: "30-80m", notes: "Sparse but worth grabbing when you're in the area." },
    ],
    uses: ["Cured Food — preserve fish for long expeditions", "Water Filtration Machine — produce large water bottles"],
    proTip: "Salt respawns in the same locations after you pick it, making the Sparse Plains a reliable farming route. Mark your map with a few known salt locations and revisit them every in-game day.",
  },
  titanium: {
    title: "Titanium Location in Subnautica 2 — Best Titanium Farming Guide",
    meta: "Titanium is the most-used resource in Subnautica 2. Find titanium from Limestone Outcrops, Salvage, and all biomes. Complete farming guide with routes.",
    h1: "Where to Find Titanium in Subnautica 2",
    tldr: "Titanium is everywhere. Break **Limestone Outcrops** (~30% drop rate). Collect **Metal Salvage** scattered on the seafloor and process it at the Fabricator. Best starter biome: Sparse Plains.",
    biomes: [
      { name: "All Biomes", depth: "0-200m", notes: "Limestone Outcrops spawn everywhere. Titanium drops from roughly 1 in 3 outcrops." },
      { name: "Sparse Plains (Salvage)", depth: "0-80m", notes: "Highest concentration of Metal Salvage — look for twisted metal fragments." },
      { name: "Plateaus (Salvage)", depth: "20-150m", notes: "Good salvage spawns along the cliffs." },
    ],
    uses: ["Base Compartments — every corridor and room", "Tools — Survival Knife, Scanner, Repair Tool", "Vehicles — Sea Glide, Prawn Suit parts", "Furniture — lockers, chairs, planters"],
    proTip: "Metal Salvage gives 4 titanium per piece versus 1 from outcrops. Always prioritize salvage for bulk farming. One trip through Sparse Plains can net 20+ salvage pieces (80+ titanium).",
  },
  quartz: {
    title: "Quartz Location in Subnautica 2 — Complete Crystal Guide",
    meta: "Where to find Quartz in Subnautica 2. Quartz crystals are used for glass, windows, and advanced crafting. Best biomes and depth ranges.",
    h1: "Where to Find Quartz in Subnautica 2",
    tldr: "Quartz crystals are found on the seafloor in **Plateaus** and **Sparse Plains**, 10-80m. Look for glowing crystalline formations. Harvest by hand — no tool needed.",
    biomes: [
      { name: "Plateaus", depth: "10-80m", notes: "Best spawn rates. Crystals are clearly visible against the sandy floor." },
      { name: "Sparse Plains", depth: "0-50m", notes: "Good early-game source, especially near cave entrances." },
      { name: "Thermal Spires", depth: "50-150m", notes: "Larger crystal formations but deeper." },
    ],
    uses: ["Glass — for windows and observation rooms", "Reinforced Glass — for deep-sea base modules", "Computer Chip — intermediate crafting component"],
    proTip: "Quartz crystals glow slightly in the dark, making them easier to spot during nighttime or in cave systems. The Plateaus biome has the highest density — a single pass can yield 10-15 quartz.",
  },
  gold: {
    title: "Gold Location in Subnautica 2 — Where to Find Gold Ore",
    meta: "Find gold ore in Subnautica 2. Gold comes from Sandstone Outcrops. Best biomes, depth ranges, and uses for advanced crafting.",
    h1: "Where to Find Gold in Subnautica 2",
    tldr: "Gold comes from **Sandstone Outcrops** (also yield Lead and Silver). Best biome: **Thermal Spires**, 80-200m. Gold is needed for advanced electronics.",
    biomes: [
      { name: "Thermal Spires", depth: "80-200m", notes: "Highest Sandstone density in the game. Best gold farming location." },
      { name: "Graveyard", depth: "50-150m", notes: "Good alternative with moderate spawn density." },
      { name: "Plateaus", depth: "50-150m", notes: "Lower density but accessible early-game." },
    ],
    uses: ["Computer Chip — advanced modules", "Wiring Kit — high-end base components", "Scanner Room — upgrade chips"],
    proTip: "Gold is one of the rarer basic resources. When you find Sandstone Outcrops in the Thermal Spires, clear them all — the gold-to-lead ratio is better there than in other biomes.",
  },
  lithium: {
    title: "Lithium Location in Subnautica 2 — Where to Find Lithium",
    meta: "Find lithium in Subnautica 2. Lithium ore locations, best biomes, and what it's used for in base building and vehicle upgrades.",
    h1: "Where to Find Lithium in Subnautica 2",
    tldr: "Lithium comes from **Shale Outcrops** (also yield Diamond). Best biome: **Thermal Spires**, 100-200m. Lithium is essential for base reinforcement and vehicle depth modules.",
    biomes: [
      { name: "Thermal Spires", depth: "100-200m", notes: "Primary source. Shale Outcrops are found in deeper cave systems." },
      { name: "Graveyard", depth: "80-150m", notes: "Lower density but worth visiting." },
    ],
    uses: ["Plasteel Ingot — advanced base components", "Hull Reinforcement — vehicle depth modules", "Reinforced Dive Suit — deep exploration"],
    proTip: "Lithium becomes critical once you start building deep bases. Stockpile it early — the Thermal Spires biome has Shale Outcrops that respawn more frequently than other resource nodes.",
  },
};

// Get resource detail by slug + locale
export function getResourceDetail(slug: string, locale: Locale): ResourceDetail | undefined {
  if (locale === "zh") return resourceDetailZh[slug];
  return resourceDetailEn[slug];
}

