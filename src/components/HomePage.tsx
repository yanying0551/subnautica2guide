import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";

const quickLinksEn = [
  { href: "/creatures", label: "Creatures", icon: "🐟" },
  { href: "/resources", label: "Resources", icon: "⛏️" },
  { href: "/base-building", label: "Base Building", icon: "🏗️" },
  { href: "/biomods", label: "Biomods", icon: "🧬" },
  { href: "/guides/multiplayer", label: "Co-op Guide", icon: "🎮" },
  { href: "/updates/roadmap", label: "Roadmap", icon: "📋" },
];

const quickLinksZh = [
  { href: "/creatures", label: "生物图鉴", icon: "🐟" },
  { href: "/resources", label: "资源指南", icon: "⛏️" },
  { href: "/base-building", label: "基地建造", icon: "🏗️" },
  { href: "/biomods", label: "生物改造", icon: "🧬" },
  { href: "/guides/multiplayer", label: "联机教程", icon: "🎮" },
  { href: "/updates/roadmap", label: "路线图", icon: "📋" },
];

const featuredGuidesEn = [
  {
    title: "How to Cure Digestive Incompatibility",
    href: "/guides/digestive-incompatibility",
    desc: "Get rid of that green status icon — here's exactly what you need.",
    tag: "Popular",
  },
  {
    title: "Where to Find Copper",
    href: "/resources/copper",
    desc: "Copper is essential for batteries and wiring. Best locations inside.",
    tag: "Essential",
  },
  {
    title: "Best Base Location Guide",
    href: "/base-building",
    desc: "Find the perfect spot for your first base on Luca.",
    tag: "Guide",
  },
  {
    title: "Co-op Multiplayer Guide",
    href: "/guides/multiplayer",
    desc: "How to play with friends, crossplay details, and co-op mechanics.",
    tag: "Popular",
  },
];

const featuredGuidesZh = [
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

export default async function HomePage() {
  const locale = await getLocale();
  const useZh = locale === "zh";
  const links = useZh ? quickLinksZh : quickLinksEn;
  const featured = useZh ? featuredGuidesZh : featuredGuidesEn;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-deep-400/10">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/20 via-deep-950 to-surface pointer-events-none" />
        <div className="absolute top-[-20%] left-1/4 w-[600px] h-[600px] bg-deep-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-deep-400/8 border border-deep-400/20 rounded-full px-3.5 py-1 text-xs text-deep-300 font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-400 animate-pulse" />
              {pick("Early Access • Updated June 2026", "抢先体验 • 2026年6月更新", locale)}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-white">
              {pick("Subnautica 2 Guide", "深海迷航2 指南", locale)}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {pick(
                "The ultimate fan-made guide for Subnautica 2 — walkthroughs, creature database, resource locations, base building tips, and co-op guides.",
                "为深海迷航2（Subnautica 2）打造的完整中文指南——全流程攻略、生物图鉴、资源点位、基地建造技巧和联机教程。",
                locale,
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={l("/resources", locale)}
                className="inline-flex items-center gap-2 bg-deep-400/90 text-deep-950 font-medium px-5 py-2.5 rounded-lg hover:bg-deep-300 transition-all shadow-lg shadow-deep-400/20"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" strokeLinecap="round"/></svg>
                {pick("Browse Resources", "资源大全", locale)}
              </Link>
              <Link
                href={l("/guides/beginner-guide", locale)}
                className="inline-flex items-center gap-2 border border-deep-400/25 text-deep-300 px-5 py-2.5 rounded-lg hover:bg-deep-400/10 transition-all"
              >
                {pick("Beginner Guide →", "新手教程 →", locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-14 border-b border-deep-400/8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-display font-bold text-white">{pick("Quick Links", "快捷导航", locale)}</h2>
            <div className="glow-underline" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={l(link.href, locale)}
                className="flex flex-col items-center gap-2 rounded-xl p-5 glow-border hover:bg-surface-hover transition-all text-center"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm font-medium text-slate-300">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-display font-bold text-white">{pick("Popular Guides", "热门攻略", locale)}</h2>
            <div className="glow-underline" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {featured.map((guide) => (
              <Link
                key={guide.href}
                href={l(guide.href, locale)}
                className="group rounded-xl p-5 glow-border hover:bg-surface-hover hover:border-deep-400/30 transition-all"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-deep-200 group-hover:text-deep-300 transition-colors">
                    {guide.title}
                  </h3>
                  <span className="text-xs bg-deep-400/10 text-deep-400 px-2 py-0.5 rounded-full shrink-0 ml-2 border border-deep-400/20">
                    {guide.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-1.5">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EA Status Bar */}
      <section className="py-10 border-y border-deep-400/8 bg-surface-secondary/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-lg font-display font-bold text-white mb-1">{pick("Early Access Status", "抢先体验状态", locale)}</h2>
              <p className="text-slate-400 text-sm">{pick("Current build: EA 1.0 + Hotfix 3", "当前版本：EA 1.0 + 热点修复3", locale)}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="rounded-lg px-4 py-3 glow-border">
                <span className="block text-deep-300 font-semibold">{pick("Released", "发布", locale)}</span>
                <span className="text-slate-400">{pick("May 14, 2026", "2026年5月14日", locale)}</span>
              </div>
              <div className="rounded-lg px-4 py-3 glow-border">
                <span className="block text-deep-300 font-semibold">{pick("Next", "下一个", locale)}</span>
                <span className="text-slate-400">{pick("EA 1.1 Update", "EA 1.1 更新", locale)}</span>
              </div>
              <div className="rounded-lg px-4 py-3 glow-border">
                <span className="block text-deep-300 font-semibold">{pick("Price", "售价", locale)}</span>
                <span className="text-slate-400">$29.99 USD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-xl p-6 md:p-8 border border-deep-400/8 bg-surface-card/50">
            <h2 className="text-md font-display font-bold text-white mb-2">{pick("About This Guide", "关于本指南", locale)}</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {pick(
                "Subnautica 2 Guide is an independent, fan-made wiki and guide website. We provide walkthroughs, creature information, resource locations, base building tips, and more for Subnautica 2 Early Access. We are not affiliated with Unknown Worlds Entertainment or Krafton Inc.",
                "深海迷航2 指南是一个独立的粉丝制作维基和攻略网站。我们为深海迷航2 抢先体验版提供全流程攻略、生物信息、资源点位、基地建造技巧等内容。我们与 Unknown Worlds Entertainment 或 Krafton Inc. 无关。",
                locale,
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
