import type { Metadata } from "next";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";
import { Breadcrumb, PageHero, SourceBlock } from "@/components/GuideUI";

const steamStoreUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";
const adaptiveMeasuresUrl = "https://unknownworlds.com/news/subnautica-2-adaptive-measures-update";
const experimentalUrl = "https://unknownworlds.com/news/subnautica-2-experimental-branch";
const buddySystemUrl = "https://unknownworlds.com/news/subnautica-2-buddy-system-update";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: pick("Subnautica 2 Update Roadmap", "深海迷航2 更新路线图", locale), description: pick("Officially published Subnautica 2 Early Access updates, checked August 20, 2026.", "截至2026年8月20日核验的深海迷航2官方抢先体验更新。", locale), alternates: getAlternates("/updates/roadmap", locale), robots: { index: true, follow: true } };
}

export default async function Page() {
  const locale = await getLocale();
  return <main>
    <PageHero locale={locale} status="verified" eyebrow={pick("Official updates tracker", "官方更新追踪", locale)} title={pick("Subnautica 2 Update Roadmap", "深海迷航2 更新路线图", locale)} intro={pick("A source-bounded record of publicly announced Early Access updates—not a promised feature-by-feature schedule.", "基于公开来源的抢先体验更新记录页，不把推测写成逐项功能时间表。", locale)} />
    <article className="page-content max-w-4xl mx-auto px-4 py-10">
      <Breadcrumb locale={locale} items={[{ href: "/", en: "Home", zh: "首页" }, { en: "Updates", zh: "更新" }, { en: "Roadmap", zh: "路线图" }]} />
      <section className="grid gap-4 md:grid-cols-3 mb-10">
        {[
          ["EA 1.1", "Adaptive Measures", "July 8, 2026"],
          ["Branch", "Experimental", "August 12, 2026"],
          ["EA 1.2", "Buddy System", "August 19, 2026"],
        ].map(([code, name, date]) => <div className="rounded-lg border border-deep-400/15 bg-surface-card p-4" key={code}><span className="data-label text-deep-300">{code}</span><h2 className="!mt-3 !mb-2 text-lg">{name}</h2><p className="data-label">{date}</p></div>)}
      </section>
      <h2>{pick("Current Early Access status", "当前抢先体验状态", locale)}</h2>
      <p>{pick("The Steam store listing gives May 14, 2026 as the Early Access release date. It describes the game as actively developed, with more biomes, creatures, craftables, and narrative planned throughout Early Access.", "Steam 商店页面将 2026 年 5 月 14 日列为抢先体验发布日期，并说明游戏仍在积极开发中，期间会继续扩展生物群系、生物、可制作物和叙事内容。", locale)}</p>
      <h2>{pick("Public development updates", "公开开发更新", locale)}</h2>
      <p>{pick("Official announcements record Early Access 1.1 — Adaptive Measures, the Experimental branch, and Early Access 1.2 — Buddy System. Buddy System names proximity voice chat, player revives, emotes, player trading, two character options, and other gameplay and building changes.", "官方公告记录了抢先体验1.1——Adaptive Measures、Experimental 分支，以及抢先体验1.2——Buddy System。Buddy System 提到了距离语音、玩家救援、表情、玩家交易、两种角色选项，以及其他玩法和建造调整。", locale)}</p>
      <h2>{pick("What is and is not confirmed", "已确认与未确认内容", locale)}</h2>
      <p>{pick("These entries document published updates, not a promise of future release dates. The official sources do not provide a complete dated feature-by-feature roadmap, so this page does not publish a dated feature-by-feature roadmap or turn speculation into a schedule.", "以上内容记录已公开发布的更新，不代表未来发布日期承诺。官方来源没有提供完整的逐项功能日期路线图，因此本页面不会发布带日期的逐项功能路线图，也不会把推测写成时间表。", locale)}</p>
      <SourceBlock locale={locale} checked="August 20, 2026" scope={pick("Early Access; announcements can change", "抢先体验；公告内容可能变化", locale)} sources={[{ href: steamStoreUrl, en: "Steam store listing", zh: "Steam 商店页面" }, { href: adaptiveMeasuresUrl, en: "Adaptive Measures", zh: "Adaptive Measures 公告" }, { href: experimentalUrl, en: "Experimental Branch", zh: "Experimental 分支公告" }, { href: buddySystemUrl, en: "Buddy System", zh: "Buddy System 公告" }]} />
    </article>
  </main>;
}
