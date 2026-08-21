import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { StatusBadge } from "@/components/GuideUI";

const topics = [
  { href: "/guides/multiplayer", en: "Co-op & Multiplayer", zh: "合作与多人模式", verified: true },
  { href: "/info/system-requirements", en: "System Requirements", zh: "系统配置要求", verified: true },
  { href: "/updates/roadmap", en: "Official Updates", zh: "官方更新", verified: true },
  { href: "/creatures", en: "Creatures", zh: "生物", verified: false },
  { href: "/resources", en: "Resources", zh: "资源", verified: false },
  { href: "/base-building", en: "Base Building", zh: "基地建造", verified: false },
];

export default async function HomePage() {
  const locale = await getLocale();
  return <main>
    <section className="relative overflow-hidden border-b border-deep-400/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.12),transparent_28%),linear-gradient(160deg,#0f2738,#0b1926_60%,#051520)]" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-6"><span className="data-label text-deep-300">PLANET 4546B / SIGNAL ONLINE</span><StatusBadge status="review" locale={locale} /></div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-tight text-white">{pick("Subnautica 2 Guide & Wiki", "深海迷航2 指南与 Wiki", locale)}</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">{pick("An independent, source-conscious guide for Subnautica 2. Start with official updates, PC requirements, and the currently documented multiplayer scope.", "面向玩家的深海迷航2独立指南。先从官方更新、PC 配置要求和当前已记录的多人模式范围开始。", locale)}</p>
          <div className="flex flex-wrap gap-3"><Link href={l("/guides/multiplayer", locale)} className="inline-flex items-center gap-2 bg-deep-400/90 text-deep-950 font-semibold px-5 py-3 rounded-lg hover:bg-deep-300 transition-all">{pick("Start exploring", "开始探索", locale)} <span aria-hidden="true">→</span></Link><Link href={l("/updates/roadmap", locale)} className="inline-flex items-center gap-2 border border-deep-400/25 text-deep-300 px-5 py-3 rounded-lg hover:bg-deep-400/10 transition-all">{pick("View official updates", "查看官方更新", locale)}</Link></div>
        </div>
      </div>
    </section>
    <section className="border-b border-deep-400/8 bg-surface-secondary/40"><div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4"><div><span className="data-label">STATUS</span><p className="mt-1 text-sm text-emerald-300">{pick("Early Access", "抢先体验", locale)}</p></div><div><span className="data-label">LANGUAGES</span><p className="mt-1 text-sm text-deep-200">EN / 中文</p></div><div><span className="data-label">EDITORIAL</span><p className="mt-1 text-sm text-deep-200">{pick("Evidence bounded", "证据限定", locale)}</p></div><div><span className="data-label">UPDATED</span><p className="mt-1 text-sm text-deep-200">2026-08-20</p></div></div></section>
    <section className="py-14"><div className="max-w-6xl mx-auto px-4"><div className="flex items-end justify-between gap-4 mb-7"><div><span className="data-label text-deep-300">CORE SYSTEMS</span><h2 className="mt-2 text-2xl font-display font-bold text-white">{pick("Browse by topic", "按主题浏览", locale)}</h2></div><Link href={l("/guides", locale)} className="text-sm text-deep-300 hover:text-white">{pick("All guides →", "全部攻略 →", locale)}</Link></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{topics.map((topic) => <Link key={topic.href} href={l(topic.href, locale)} className="group rounded-lg p-5 border border-deep-400/12 bg-surface-card hover:bg-surface-hover hover:border-deep-400/30 transition-all"><div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-slate-200 group-hover:text-deep-300">{locale === "zh" ? topic.zh : topic.en}</h3>{topic.verified ? <StatusBadge status="verified" locale={locale} /> : <StatusBadge status="review" locale={locale} />}</div><p className="mt-3 text-sm text-slate-400">{topic.verified ? pick("Officially sourced reference", "有官方来源的参考页", locale) : pick("Detailed claims under review", "详细内容正在核验", locale)}</p></Link>)}</div></div></section>
    <section className="pb-14"><div className="max-w-6xl mx-auto px-4"><div className="rounded-lg border border-deep-400/12 bg-surface-card/60 p-6 md:p-8"><div className="flex items-center gap-3 mb-3"><span className="data-label text-deep-300">EDITORIAL PROTOCOL</span><StatusBadge status="review" locale={locale} /></div><p className="text-sm text-slate-400 leading-relaxed">{pick("Detailed gameplay pages remain under source review and are not represented as verified reference material. This independent fan project is not affiliated with Unknown Worlds Entertainment or Krafton.", "详细玩法页面仍在来源审查中，不会被表述为已经核验的参考资料。本独立粉丝项目与 Unknown Worlds Entertainment 或 Krafton 无关。", locale)}</p></div></div></section>
  </main>;
}
