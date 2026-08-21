import Link from "next/link";
import { GuideRegistryEntry, GUIDE_CATEGORIES, guideRegistry } from "@/lib/guide-registry";
import { l, pick, type Locale } from "@/lib/server-locale";
import { Breadcrumb, PageHero, StatusBadge, UnderReviewNotice } from "@/components/GuideUI";

export function GuideCard({ entry, locale }: { entry: GuideRegistryEntry; locale: Locale }) {
  return (
    <Link href={l(entry.path, locale)} className="group block rounded-lg border border-deep-400/15 bg-surface-card p-5 transition-colors hover:border-deep-400/45 hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-deep-300">{pick(entry.title.en, entry.title.zh, locale)}</h3>
        <StatusBadge status={entry.status} locale={locale} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{pick(entry.description.en, entry.description.zh, locale)}</p>
      <span className="data-label mt-4 inline-block text-deep-300">{pick("Open reference →", "打开参考 →", locale)}</span>
    </Link>
  );
}

export function GuideHub({ locale }: { locale: Locale }) {
  return <div>
    <PageHero locale={locale} status="review" eyebrow={pick("Guide network", "攻略网络", locale)} title={pick("Subnautica 2 Guides", "深海迷航2 攻略", locale)} intro={pick("A bilingual index of verified references and topics awaiting source review.", "已核验参考与等待来源核验主题的双语索引。", locale)} />
    <section className="max-w-6xl mx-auto px-4 py-10 page-content">
      <Breadcrumb locale={locale} items={[{ href: "/", en: "Home", zh: "首页" }, { en: "Guides", zh: "攻略" }]} />
      <UnderReviewNotice locale={locale} />
      <div className="mt-10 space-y-10">
        {GUIDE_CATEGORIES.map((category) => {
          const entries = guideRegistry.filter((entry) => entry.category === category.id && entry.path !== "/guides");
          if (!entries.length) return null;
          return <section key={category.id} aria-labelledby={`guide-category-${category.id}`}>
            <h2 id={`guide-category-${category.id}`} className="mb-4">{pick(category.en, category.zh, locale)}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{entries.map((entry) => <GuideCard key={entry.path} entry={entry} locale={locale} />)}</div>
          </section>;
        })}
      </div>
    </section>
  </div>;
}