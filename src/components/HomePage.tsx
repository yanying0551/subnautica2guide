import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";

const sections = [
  { href: "/guides", en: "Guides", zh: "攻略" },
  { href: "/resources", en: "Resources", zh: "资源" },
  { href: "/creatures", en: "Creatures", zh: "生物" },
  { href: "/base-building", en: "Base Building", zh: "基地建造" },
];

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-deep-400/10">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-900/20 via-deep-950 to-surface pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-deep-400/8 border border-deep-400/20 rounded-full px-3.5 py-1 text-xs text-deep-300 font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-400 animate-pulse" />
              {pick("Independent fan guide • source review in progress", "独立粉丝指南 • 正在进行来源核验", locale)}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-white">
              {pick("Subnautica 2 Guide", "深海迷航2 指南", locale)}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {pick(
                "An independent fan guide for Subnautica 2. Detailed gameplay claims are currently under source review and may be incomplete or unavailable.",
                "面向玩家的深海迷航2独立粉丝指南。详细玩法主张正在进行来源核验，内容可能尚不完整或暂不可用。",
                locale,
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={l("/guides", locale)}
                className="inline-flex items-center gap-2 bg-deep-400/90 text-deep-950 font-medium px-5 py-2.5 rounded-lg hover:bg-deep-300 transition-all shadow-lg shadow-deep-400/20"
              >
                {pick("Browse guide topics", "浏览攻略主题", locale)}
              </Link>
              <Link
                href={l("/disclaimer", locale)}
                className="inline-flex items-center gap-2 border border-deep-400/25 text-deep-300 px-5 py-2.5 rounded-lg hover:bg-deep-400/10 transition-all"
              >
                {pick("Read our verification policy", "查看核验说明", locale)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 border-b border-deep-400/8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-display font-bold text-white mb-3">
            {pick("Browse by topic", "按主题浏览", locale)}
          </h2>
          <p className="text-slate-400 mb-8">
            {pick(
              "Detailed pages are currently under review and are not represented here as verified reference material.",
              "详细页面目前正在审查中，本站不会将其表述为已经核验的参考资料。",
              locale,
            )}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={l(section.href, locale)}
                className="rounded-xl p-5 glow-border hover:bg-surface-hover transition-all text-center text-sm font-medium text-slate-300"
              >
                {locale === "zh" ? section.zh : section.en}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-xl p-6 md:p-8 border border-deep-400/8 bg-surface-card/50">
            <h2 className="text-md font-display font-bold text-white mb-2">
              {pick("Editorial status", "编辑状态", locale)}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {pick(
                "This is an independent fan project and is not affiliated with Unknown Worlds Entertainment or Krafton. Game features, availability, and mechanics can change. Detailed gameplay pages are under source review and should not be treated as verified reference material.",
                "本站是独立粉丝项目，与 Unknown Worlds Entertainment 或 Krafton 无关。游戏功能、可用性与机制可能变化。详细玩法页面正在进行来源审查，不应被视为已经核验的参考资料。",
                locale,
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
