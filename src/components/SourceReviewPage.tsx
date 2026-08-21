import Link from "next/link";
import { l, pick, type Locale } from "@/lib/server-locale";
import { Breadcrumb, PageHero, SourceBlock } from "@/components/GuideUI";

export function SourceReviewPage({ locale, title }: { locale: Locale; title: string }) {
  return <div>
    <PageHero
      locale={locale}
      status="review"
      eyebrow={pick("Editorial quarantine", "编辑隔离", locale)}
      title={title}
      intro={pick("This page is being prepared as a useful reference, but its version-sensitive gameplay claims are not ready to publish as verified facts.", "本页面正在整理为实用参考，但其中与版本相关的玩法内容尚未达到可作为已核实事实发布的标准。", locale)}
    />
    <section aria-labelledby="source-review-title" className="max-w-4xl mx-auto px-4 py-10 page-content">
      <Breadcrumb locale={locale} items={[{ href: "/", en: "Home", zh: "首页" }, { en: "Source review", zh: "来源核验" }]} />
      <div className="review-notice">
        <span className="status-badge status-review">{pick("NOINDEX", "不收录", locale)}</span>
        <p>{pick("Detailed claims remain under source review. Unsupported counts, locations, mechanics, and roadmap details are withheld rather than presented as confirmed facts.", "详细内容仍在来源核验中。未经支持的数量、地点、机制和路线图细节会被暂缓展示，不会被当作已确认事实。", locale)}</p>
      </div>
      <h2 id="source-review-title">{pick("Use verified references while review is in progress", "核验期间请使用已核验参考", locale)}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link className="rounded-lg border border-deep-400/15 bg-surface-card p-4 text-deep-300 hover:border-deep-400/40 hover:bg-surface-hover transition-colors" href={l("/info/system-requirements", locale)}>{pick("Verified PC system requirements →", "已核验的 PC 系统配置 →", locale)}</Link>
        <Link className="rounded-lg border border-deep-400/15 bg-surface-card p-4 text-deep-300 hover:border-deep-400/40 hover:bg-surface-hover transition-colors" href={l("/guides/multiplayer", locale)}>{pick("Verified multiplayer status →", "已核验的多人模式状态 →", locale)}</Link>
        <Link className="rounded-lg border border-deep-400/15 bg-surface-card p-4 text-deep-300 hover:border-deep-400/40 hover:bg-surface-hover transition-colors" href={l("/updates/roadmap", locale)}>{pick("Official update tracker →", "官方更新追踪 →", locale)}</Link>
      </div>
      <SourceBlock locale={locale} checked={pick("Review in progress", "核验进行中", locale)} scope={pick("Claims are not yet indexable reference material", "内容尚不能作为可收录参考资料", locale)} sources={[{ href: "https://unknownworlds.com", en: "Unknown Worlds", zh: "Unknown Worlds" }, { href: "https://store.steampowered.com/app/1962700/Subnautica_2/", en: "Subnautica 2 on Steam", zh: "Steam：Subnautica 2" }]} />
    </section>
  </div>;
}
