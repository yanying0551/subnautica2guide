import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { guides } from "@/lib/constants";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Guides & Walkthroughs", "深海迷航2 指南与攻略", locale),
    description: pick(
      "Step-by-step guides for Subnautica 2 Early Access.",
      "深海迷航2 抢先体验版分步指南与攻略。",
      locale,
    ),
    alternates: getAlternates("/guides", locale),
  };
}

const guidesZh = [
  { slug: "beginner-guide", name: "新手入门指南", description: "在路卡星球的第一个小时——该做什么、该去哪里。" },
  { slug: "digestive-incompatibility", name: "治愈消化系统不兼容", description: "如何治愈消化系统不兼容症状。" },
  { slug: "angel-comb", name: "天使梳指南", description: "在哪里找到以及如何使用天使梳。" },
  { slug: "feedback-resonator", name: "反馈共振器指南", description: "如何解锁和使用反馈共振器。" },
  { slug: "multiplayer", name: "联机多人指南", description: "如何与朋友一起游玩深海迷航2。" },
];

export default async function GuidesPage() {
  const locale = await getLocale();
  const items = locale === "zh" ? guidesZh : guides;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-deep-100 mb-2">
        {pick("Guides & Walkthroughs", "游戏教程", locale)}
      </h1>
      <p className="text-deep-300 mb-8">
        {pick("Step-by-step guides for Subnautica 2 Early Access.", "深海迷航2 抢先体验版本循序渐进教程。", locale)}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((guide) => (
          <Link
            key={guide.slug}
            href={l(`/guides/${guide.slug}`, locale)}
            className="glow-border rounded-xl p-5 hover:bg-deep-800/30 transition-all"
          >
            <h2 className="font-semibold text-deep-100 mb-1">{guide.name}</h2>
            <p className="text-sm text-deep-300">{guide.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 glow-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-deep-100 mb-3">{pick("System Requirements", "系统配置要求", locale)}</h2>
        <p className="text-sm text-deep-300 mb-4">
          {pick("Check if your PC can run Subnautica 2 on Unreal Engine 5.", "查看你的电脑能否运行搭载虚幻5引擎的深海迷航2。", locale)}
        </p>
        <Link
          href={l("/info/system-requirements", locale)}
          className="inline-block text-sm bg-deep-400/90 text-deep-900 font-semibold px-4 py-2 rounded-lg hover:bg-deep-400 transition-all shadow-lg shadow-deep-400/20"
        >
          {pick("View System Requirements →", "查看系统配置要求 →", locale)}
        </Link>
      </div>

      <div className="mt-10 text-xs text-deep-400/50">
        <p>{pick("EA version information — guides may change with updates. Last updated: June 2026.", "抢先体验版本信息——指南内容可能随更新而变化。最后更新：2026年6月。", locale)}</p>
      </div>
    </div>
  );
}
