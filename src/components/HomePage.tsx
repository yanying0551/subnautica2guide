import Image from "next/image";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { StatusBadge } from "@/components/GuideUI";

const systems = [
  { href: "/creatures", icon: "◈", en: "Creatures", zh: "生物", descEn: "Fauna catalog — content under source review.", descZh: "生物图鉴——内容正在来源核验中。", verified: false, span: "lg:col-span-2" },
  { href: "/resources", icon: "▦", en: "Resources", zh: "资源", descEn: "Crafting materials and known source notes.", descZh: "制作材料与已知来源记录。", verified: false, span: "lg:col-span-2" },
  { href: "/base-building", icon: "⌂", en: "Base Building", zh: "基地建造", descEn: "A structured workspace for future guides.", descZh: "为后续攻略准备的结构化工作台。", verified: false, span: "lg:col-span-2" },
  { href: "/biomods", icon: "✦", en: "Biomods", zh: "生物改造", descEn: "Augmentation pages awaiting evidence review.", descZh: "生物改造页面等待证据核验。", verified: false, span: "lg:col-span-2" },
  { href: "/guides/multiplayer", icon: "◎", en: "Co-op", zh: "合作模式", descEn: "The currently documented multiplayer scope.", descZh: "当前已记录的多人模式范围。", verified: true, span: "lg:col-span-2" },
  { href: "/updates/roadmap", icon: "⌁", en: "Roadmap", zh: "更新路线", descEn: "Official updates, clearly scoped and dated.", descZh: "范围清晰、带日期的官方更新。", verified: true, span: "lg:col-span-2" },
];

const destinations = [
  { href: "/guides", en: "Database", zh: "资料库", descEn: "Creatures, resources, systems, and world references.", descZh: "生物、资源、系统与世界资料。" },
  { href: "/guides", en: "Guides", zh: "攻略", descEn: "Practical guides with clear evidence status.", descZh: "标注证据状态的实用指南。" },
  { href: "/updates/roadmap", en: "Trackers", zh: "追踪器", descEn: "Official updates and changing game status.", descZh: "官方更新与游戏状态变化。" },
  { href: "/guides", en: "Tools", zh: "工具", descEn: "A future workspace for checklists and progress.", descZh: "未来用于清单与进度记录的工作台。" },
];

const guides = [
  { href: "/info/system-requirements", image: "/images/stitch/cave.jpg", tagEn: "Verified reference", tagZh: "已核验参考", titleEn: "System Requirements", titleZh: "系统配置要求", bodyEn: "Compare the published PC requirements before you dive in.", bodyZh: "下潜前先查看已发布的 PC 配置要求。", verified: true },
  { href: "/guides/multiplayer", image: "/images/stitch/station.jpg", tagEn: "Limited scope", tagZh: "有限范围", titleEn: "Multiplayer & Co-op", titleZh: "多人模式与合作", bodyEn: "What is currently documented about playing together.", bodyZh: "当前资料中关于联机游玩的已知信息。", verified: true },
  { href: "/updates/roadmap", image: "/images/stitch/leviathan.jpg", tagEn: "Official updates", tagZh: "官方更新", titleEn: "Roadmap & Updates", titleZh: "路线图与更新", bodyEn: "Follow official announcements without turning plans into promises.", bodyZh: "跟进官方公告，不把计划误读成承诺。", verified: true },
];

export default async function HomePage() {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const text = (en: string, zh: string) => pick(en, zh, locale);

  return (
    <main>
      <section className="relative isolate min-h-[620px] overflow-hidden border-b border-deep-400/15">
<Image src="/images/stitch/cave.jpg" alt="" fill priority className="z-0 object-cover object-center opacity-70" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,#051520_0%,rgba(5,21,32,.88)_32%,rgba(5,21,32,.52)_70%,rgba(5,21,32,.78)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_40%,rgba(34,211,238,.24),transparent_34%)]" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-center px-4 py-20 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="data-label text-deep-300">SUBNAUTICA 2 / INDEPENDENT DATABASE</span>
              <StatusBadge status="review" locale={locale} />
            </div>
            <h1 className="max-w-2xl text-4xl font-display font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl">{text("Subnautica 2 Guide & Wiki", "深海迷航 2 指南与 Wiki")}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">{text("A long-term Subnautica 2 database for official references, practical guides, and trackers that clearly separate verified information from topics still under review.", "一个长期维护的 Subnautica 2 独立资料库：整理官方参考、实用指南与追踪器，并明确区分已核验信息和仍在审查中的主题。")}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={l("/guides", locale)} className="inline-flex items-center gap-2 rounded-lg bg-deep-400 px-5 py-3 font-semibold text-deep-950 shadow-[0_0_28px_rgba(34,211,238,.2)] transition hover:bg-deep-300">{text("Explore the database", "进入资料库")} <span aria-hidden>→</span></Link>
              <Link href={l("/info/system-requirements", locale)} className="inline-flex items-center gap-2 rounded-lg border border-deep-400/35 bg-deep-950/30 px-5 py-3 text-deep-200 transition hover:bg-deep-400/10">{text("Start with the verified guide", "从已核验指南开始")}</Link>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[ ["DATABASE", text("structured entries", "结构化条目")], ["GUIDES", text("practical references", "实用参考")], ["TRACKERS", text("status-led topics", "状态追踪主题")], ["LIVE", text("editorial status", "编辑状态")]].map(([value, label]) => <div key={label} className="rounded-lg border border-deep-400/15 bg-[#0b1926]/75 px-3 py-4 backdrop-blur-sm"><strong className="block font-display text-lg text-deep-200">{value}</strong><span className="data-label mt-1 block leading-tight">{label}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-deep-400/10 bg-[#0a1f30]/55 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-5"><span className="data-label text-deep-300">SUBNAUTICA 2 / SITE MAP</span><h2 className="mt-2 text-2xl font-display font-bold text-white">{text("Explore the knowledge base", "探索知识库")}</h2></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((item) => <Link key={item.en} href={l(item.href, locale)} className="group rounded-xl border border-deep-400/15 bg-[#0f2738] p-4 transition hover:-translate-y-0.5 hover:border-deep-400/35"><h3 className="font-display text-lg font-semibold text-white group-hover:text-deep-300">{isZh ? item.zh : item.en}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{isZh ? item.descZh : item.descEn}</p><span className="mt-3 block text-xs font-semibold uppercase tracking-wider text-deep-300">{text("Open section →", "打开栏目 →")}</span></Link>)}
          </div>
        </div>
      </section>

      <section className="border-b border-deep-400/10 bg-[#0a1f30]/75 py-5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 md:px-6">
          {[ ["STATUS", text("Early Access", "抢先体验"), "text-emerald-300"], ["EDITORIAL", text("Evidence bounded", "证据限定"), "text-deep-200"], ["SCOPE", text("Official sources first", "优先官方来源"), "text-deep-200"], ["AFFILIATION", text("Independent fan project", "独立粉丝项目"), "text-deep-200"]].map(([label, value, color]) => <div key={label}><span className="data-label">{label}</span><p className={`mt-1 text-sm ${color}`}>{value}</p></div>)}
        </div>
      </section>

      <section className="py-16 md:py-20"><div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4"><div><span className="data-label text-deep-300">DATABASE / GUIDE / TRACKER</span><h2 className="mt-2 text-3xl font-display font-bold text-white">{text("Build your field reference", "建立你的探索资料")}</h2></div><Link href={l("/guides", locale)} className="text-sm text-deep-300 hover:text-white">{text("Open database →", "打开资料库 →")}</Link></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">{systems.map((item) => <Link key={item.href} href={l(item.href, locale)} className={`group relative overflow-hidden rounded-xl border border-deep-400/12 bg-[#0f2738] p-5 transition hover:-translate-y-0.5 hover:border-deep-400/35 hover:shadow-[0_0_24px_rgba(34,211,238,.08)] ${item.span}`}><span className="text-2xl text-deep-300" aria-hidden>{item.icon}</span><div className="mt-5 flex items-start justify-between gap-3"><h3 className="font-display text-lg font-semibold text-slate-100 group-hover:text-deep-300">{isZh ? item.zh : item.en}</h3><StatusBadge status={item.verified ? "verified" : "review"} locale={locale} /></div><p className="mt-2 text-sm leading-relaxed text-slate-400">{isZh ? item.descZh : item.descEn}</p></Link>)}</div>
      </div></section>

      <section className="border-y border-deep-400/10 bg-[#0a1f30]/45 py-16 md:py-20"><div className="mx-auto max-w-6xl px-4 md:px-6"><div className="mb-8 flex items-end justify-between gap-4"><div><span className="data-label text-deep-300">FIELD NOTES</span><h2 className="mt-2 text-3xl font-display font-bold text-white">{text("Start with the essentials", "从基础资料开始")}</h2></div><span className="data-label">{text("3 verified entry points", "3 个已核验入口")}</span></div><div className="grid gap-5 md:grid-cols-3">{guides.map((guide) => <Link key={guide.href} href={l(guide.href, locale)} className="group relative min-h-[300px] overflow-hidden rounded-xl border border-deep-400/15 bg-surface-card"><Image src={guide.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#051520] via-[#051520]/55 to-transparent" /><div className="relative flex min-h-[300px] flex-col justify-end p-5"><span className="data-label text-deep-200">{isZh ? guide.tagZh : guide.tagEn}</span><h3 className="mt-2 text-2xl font-display font-bold text-white">{isZh ? guide.titleZh : guide.titleEn}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{isZh ? guide.bodyZh : guide.bodyEn}</p><span className="mt-4 text-sm font-semibold text-deep-300">{text("Open guide →", "打开指南 →")}</span></div></Link>)}</div></div></section>

      <section className="py-16"><div className="mx-auto max-w-6xl px-4 md:px-6"><div className="rounded-xl border border-deep-400/15 bg-[#0f2738]/75 p-6 md:p-8"><div className="flex flex-wrap items-center justify-between gap-4"><div><div className="flex items-center gap-3"><span className="data-label text-deep-300">LIVE DATA / EDITORIAL STATUS</span><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /></div><h2 className="mt-3 text-2xl font-display font-bold text-white">{text("Expedition status", "远征状态")}</h2></div><StatusBadge status="review" locale={locale} /></div><div className="mt-8 grid gap-6 border-t border-deep-400/10 pt-6 sm:grid-cols-3"><div><span className="data-label">CONTENT MODE</span><p className="mt-2 text-deep-200">{text("Evidence bounded", "证据限定")}</p></div><div><span className="data-label">STABILITY</span><p className="mt-2 text-emerald-300">{text("Stable shell", "稳定壳层")}</p></div><div><span className="data-label">NEXT CHECK</span><p className="mt-2 text-deep-200">{text("As official sources change", "随官方来源更新")}</p></div></div><p className="mt-7 border-t border-deep-400/10 pt-5 text-sm leading-relaxed text-slate-400">{text("This independent fan project is not affiliated with Unknown Worlds Entertainment or Krafton. Detailed gameplay pages remain under source review.", "本独立粉丝项目与 Unknown Worlds Entertainment 或 Krafton 无关。详细玩法页面仍在来源审查中。")}</p></div></div></section>
    </main>
  );
}
