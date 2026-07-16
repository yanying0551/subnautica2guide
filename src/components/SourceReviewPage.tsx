import Link from "next/link";
import { l, pick, type Locale } from "@/lib/server-locale";

export function SourceReviewPage({ locale, title }: { locale: Locale; title: string }) {
  return <section aria-labelledby="source-review-title" className="max-w-3xl mx-auto px-4 py-12 page-content">
    <div className="rounded-xl border border-amber-400/30 bg-amber-950/20 p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">{pick("Under source review", "正在进行来源核验", locale)}</p>
      <h1 id="source-review-title" className="text-3xl font-bold text-deep-100 mb-4">{title}</h1>
      <p>{pick("This page is temporarily quarantined while its game-version-specific claims are checked against current, attributable sources. Unsupported counts, locations, mechanics, and roadmap details have been removed rather than presented as confirmed facts.", "本页面暂时处于内容隔离状态，正在依据当前、可追溯的来源核验与游戏版本相关的断言。未经支持的数量、地点、机制和路线图细节已移除，不会被当作已确认事实展示。", locale)}</p>
      <p>{pick("Use the verified pages below while review is in progress.", "核验期间请使用下方已验证页面。", locale)}</p>
      <ul>
        <li><Link href={l("/info/system-requirements", locale)}>{pick("Verified PC system requirements", "已核验的 PC 系统配置", locale)}</Link></li>
        <li><Link href={l("/guides/multiplayer", locale)}>{pick("Verified multiplayer status", "已核验的多人模式状态", locale)}</Link></li>
      </ul>
    </div>
  </section>;
}
