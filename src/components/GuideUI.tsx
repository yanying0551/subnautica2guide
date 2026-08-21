import Link from "next/link";
import { l, pick, type Locale } from "@/lib/locale-utils";

export function StatusBadge({ status, locale }: { status: "verified" | "review" | "limited"; locale: Locale }) {
  const label = status === "verified"
    ? pick("Verified", "已核验", locale)
    : status === "limited"
      ? pick("Verified · limited scope", "已核验 · 范围有限", locale)
      : pick("Source review", "来源核验中", locale);
  return <span className={`status-badge status-${status}`}>{label}</span>;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  status,
  locale,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  status?: "verified" | "review" | "limited";
  locale: Locale;
}) {
  return (
    <header className="page-hero">
      <div className="page-hero__signal" aria-hidden="true" />
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="data-label">S2 / GUIDE NETWORK</span>
          {status && <StatusBadge status={status} locale={locale} />}
        </div>
        <p className="text-sm font-medium text-deep-300 mb-3">{eyebrow}</p>
        <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white max-w-4xl">{title}</h1>
        <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-300 max-w-3xl">{intro}</p>
      </div>
    </header>
  );
}

export function Breadcrumb({ items, locale }: { items: { href?: string; en: string; zh: string }[]; locale: Locale }) {
  return (
    <nav aria-label={pick("Breadcrumb", "面包屑导航", locale)} className="data-label mb-6 flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <span key={`${item.href ?? "current"}-${index}`} className="inline-flex items-center gap-2">
          {index > 0 && <span className="text-deep-700" aria-hidden="true">/</span>}
          {item.href ? <Link href={l(item.href, locale)} className="hover:text-deep-300 transition-colors">{locale === "zh" ? item.zh : item.en}</Link> : <span className="text-slate-300">{locale === "zh" ? item.zh : item.en}</span>}
        </span>
      ))}
    </nav>
  );
}

export function SourceBlock({
  checked,
  scope,
  sources,
  locale,
}: {
  checked: string;
  scope: string;
  sources: { href: string; en: string; zh: string }[];
  locale: Locale;
}) {
  return (
    <aside className="source-block" aria-label={pick("Sources and scope", "来源与范围", locale)}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="!mt-0 !mb-0 text-base">{pick("Sources & scope", "来源与范围", locale)}</h2>
        <span className="data-label text-deep-300">SOURCE LOG</span>
      </div>
      <ul className="space-y-2 text-sm text-slate-300">
        {sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="text-deep-300 hover:text-white">{locale === "zh" ? source.zh : source.en} ↗</a></li>)}
      </ul>
      <div className="mt-4 pt-3 border-t border-deep-400/10 grid sm:grid-cols-2 gap-2 text-xs text-slate-400">
        <span><strong className="text-slate-300">{pick("Last checked", "最后核验", locale)}:</strong> {checked}</span>
        <span><strong className="text-slate-300">{pick("Scope", "适用范围", locale)}:</strong> {scope}</span>
      </div>
    </aside>
  );
}

export function UnderReviewNotice({ locale }: { locale: Locale }) {
  return <div className="review-notice"><StatusBadge status="review" locale={locale} /><p>{pick("Detailed gameplay claims on this page are under source review. This page is not a verified reference and may be incomplete.", "本页详细玩法内容正在进行来源核验。本页不是已经核验的参考资料，内容可能不完整。", locale)}</p></div>;
}
