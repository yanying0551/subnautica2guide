"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GUIDE_CATEGORIES, guideRegistry, type GuideRegistryEntry, type GuideStatus } from "@/lib/guide-registry";
import { filterGuideEntries, type GuideFilterStatus } from "@/lib/guide-filter";
import { l, pick, type Locale } from "@/lib/server-locale";
import { Breadcrumb, PageHero, StatusBadge, UnderReviewNotice } from "@/components/GuideUI";

export { filterGuideEntries };

const categoryIcons: Record<string, string> = { reference: "◉", updates: "⌁", guides: "✦", world: "◈", systems: "▦" };
const statusFilters: Array<{ value: GuideFilterStatus; en: string; zh: string }> = [
  { value: "all", en: "All topics", zh: "全部主题" },
  { value: "verified", en: "Verified", zh: "已核验" },
  { value: "limited", en: "Limited scope", zh: "有限范围" },
  { value: "review", en: "Source review", zh: "来源核验中" },
];

export function GuideCard({ entry, locale }: { entry: GuideRegistryEntry; locale: Locale }) {
  return (
    <Link href={l(entry.path, locale)} className="group flex min-h-[190px] flex-col rounded-xl border border-deep-400/15 bg-[#0f2738] p-5 transition hover:-translate-y-0.5 hover:border-deep-400/40 hover:shadow-[0_0_22px_rgba(34,211,238,.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-white group-hover:text-deep-300">{pick(entry.title.en, entry.title.zh, locale)}</h3>
        <StatusBadge status={entry.status} locale={locale} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{pick(entry.description.en, entry.description.zh, locale)}</p>
      <span className="data-label mt-auto pt-5 text-deep-300">{pick("Open reference →", "打开参考 →", locale)}</span>
    </Link>
  );
}

export function GuideHub({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<GuideFilterStatus>("all");
  const entries = useMemo(() => filterGuideEntries(guideRegistry.filter((entry) => entry.path !== "/guides"), query, status), [query, status]);
  const isZh = locale === "zh";

  return <div>
    <PageHero locale={locale} status="review" eyebrow={pick("Guide network / DATABASE ACCESS", "攻略网络 / 资料库入口", locale)} title={pick("Guides and Tutorials", "攻略与教程", locale)} intro={pick("Search the field guide by topic. Verified references are separated from pages still awaiting source review.", "按主题搜索资料。已核验参考与仍待来源核验的页面明确区分。", locale)} />
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Breadcrumb locale={locale} items={[{ href: "/", en: "Home", zh: "首页" }, { en: "Guides", zh: "攻略" }]} />
      <UnderReviewNotice locale={locale} />
      <div className="mt-10 rounded-xl border border-deep-400/15 bg-[#0f2738]/70 p-4 md:p-5">
        <label htmlFor="guide-search" className="sr-only">{pick("Search guides", "搜索攻略", locale)}</label>
        <div className="flex items-center gap-3 rounded-lg border border-deep-400/20 bg-[#0a1f30] px-4 py-3 focus-within:border-deep-400/50">
          <span className="text-xl text-deep-300" aria-hidden>⌕</span>
          <input id="guide-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={pick("Search for guides, blueprints, or topics…", "搜索攻略、蓝图或主题…", locale)} className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
          <kbd className="hidden rounded border border-deep-400/15 bg-surface px-2 py-1 font-mono text-[10px] text-slate-500 sm:inline">CTRL K</kbd>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={pick("Filter by status", "按状态筛选", locale)}>
          {statusFilters.map((filter) => <button key={filter.value} type="button" onClick={() => setStatus(filter.value)} aria-pressed={status === filter.value} className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${status === filter.value ? "border-deep-400/50 bg-deep-400/15 text-deep-200" : "border-deep-400/15 text-slate-400 hover:border-deep-400/35 hover:text-white"}`}>{isZh ? filter.zh : filter.en}</button>)}
        </div>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-10">
          {GUIDE_CATEGORIES.map((category) => {
            const categoryEntries = entries.filter((entry) => entry.category === category.id);
            if (!categoryEntries.length) return null;
            return <section key={category.id} aria-labelledby={`guide-category-${category.id}`}>
              <div className="mb-4 flex items-center justify-between gap-3"><h2 id={`guide-category-${category.id}`} className="flex items-center gap-3 text-2xl font-display font-bold text-white"><span className="text-deep-300" aria-hidden>{categoryIcons[category.id]}</span>{pick(category.en, category.zh, locale)}</h2><span className="data-label">{categoryEntries.length} {pick("entries", "项", locale)}</span></div>
              <div className="grid gap-4 md:grid-cols-2">{categoryEntries.map((entry) => <GuideCard key={entry.path} entry={entry} locale={locale} />)}</div>
            </section>;
          })}
          {!entries.length && <div className="rounded-xl border border-dashed border-deep-400/25 px-6 py-14 text-center"><p className="font-display text-xl text-white">{pick("No matching guide entries", "没有匹配的攻略条目", locale)}</p><p className="mt-2 text-sm text-slate-400">{pick("Try another keyword or clear the status filter.", "请尝试其他关键词或清除状态筛选。", locale)}</p></div>}
        </div>
        <aside className="h-fit space-y-4 lg:sticky lg:top-24">
          <div className="rounded-xl border border-deep-400/15 bg-[#0f2738] p-5"><div className="flex items-center gap-2"><span className="text-deep-300" aria-hidden>◌</span><h2 className="font-display text-lg font-bold text-white">{pick("Editorial status", "编辑状态", locale)}</h2></div><p className="mt-3 text-sm leading-6 text-slate-400">{pick("This hub keeps every topic accessible while showing whether its claims are verified, limited in scope, or still under source review.", "所有主题都保持可访问，同时明确显示内容是已核验、范围有限，还是仍在来源核验中。", locale)}</p><div className="mt-5 space-y-3 border-t border-deep-400/10 pt-4">{(["verified", "limited", "review"] as GuideStatus[]).map((item) => <div key={item} className="flex items-center justify-between gap-3"><StatusBadge status={item} locale={locale} /><span className="text-sm text-slate-400">{entries.filter((entry) => entry.status === item).length}</span></div>)}</div></div>
          <div className="rounded-xl border border-deep-400/15 bg-[#0f2738] p-5"><span className="data-label text-deep-300">{pick("NEXT IN THE FIELD", "下一步接入", locale)}</span><h2 className="mt-2 font-display text-lg font-bold text-white">{pick("Map, blueprints, progression", "地图、蓝图、流程进度", locale)}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{pick("Tracker shells are being prepared without inventing unverified coordinates, recipes, or story order.", "追踪器外壳正在准备中，不会编造未经核验的坐标、配方或剧情顺序。", locale)}</p></div>
        </aside>
      </div>
    </section>
  </div>;
}
