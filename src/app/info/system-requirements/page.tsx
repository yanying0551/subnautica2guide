import type { Metadata } from "next";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";
import { Breadcrumb, PageHero, SourceBlock } from "@/components/GuideUI";

const sourceUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 PC System Requirements", "深海迷航2 PC 系统配置要求", locale),
    description: pick(
      "Official Steam-listed minimum and recommended PC system requirements for Subnautica 2, last checked July 13, 2026.",
      "来自官方 Steam 页面的深海迷航2 PC 最低和推荐系统配置要求，最后核验日期为2026年7月13日。",
      locale,
    ),
    alternates: getAlternates("/info/system-requirements", locale),
  };
}

function RequirementsTable({ recommended, locale }: { recommended: boolean; locale: "en" | "zh" }) {
  const rows = recommended
    ? [
        [pick("OS", "操作系统", locale), "Windows 11"],
        [pick("Processor", "处理器", locale), "Intel Core i7-13700 / AMD Ryzen 7 7700X"],
        [pick("Memory", "内存", locale), "16 GB RAM"],
        [pick("Graphics", "显卡", locale), "GeForce RTX 3070 8GB / RX 6700 XT 8GB"],
        ["DirectX", pick("Version 12", "版本 12", locale)],
        [pick("Network", "网络", locale), pick("Broadband Internet connection", "宽带互联网连接", locale)],
        [pick("Storage", "存储", locale), pick("50 GB available space", "50 GB 可用空间", locale)],
      ]
    : [
        [pick("OS", "操作系统", locale), "Windows 10/11"],
        [pick("Processor", "处理器", locale), "Intel Core i5-8400 / AMD Ryzen 5 2600"],
        [pick("Memory", "内存", locale), "12 GB RAM"],
        [pick("Graphics", "显卡", locale), "GeForce GTX 1660 6GB / RX 5500 XT 6GB"],
        ["DirectX", pick("Version 12", "版本 12", locale)],
        [pick("Network", "网络", locale), pick("Broadband Internet connection", "宽带互联网连接", locale)],
        [pick("Storage", "存储", locale), pick("50 GB available space", "50 GB 可用空间", locale)],
      ];

  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm">
        <thead><tr className="bg-deep-800/50"><th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Component", "组件", locale)}</th><th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{recommended ? pick("Recommended", "推荐", locale) : pick("Minimum", "最低", locale)}</th></tr></thead>
        <tbody>{rows.map(([label, value], index) => <tr key={label} className={index % 2 ? "bg-deep-900/10" : "bg-deep-800/20"}><td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{label}</td><td className="p-2 border-b border-deep-400/15 text-deep-200">{value}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

export default async function SystemRequirements() {
  const locale = await getLocale();
  return (
    <main>
      <PageHero locale={locale} status="verified" eyebrow={pick("Official PC requirements", "官方 PC 配置要求", locale)} title={pick("Subnautica 2 PC System Requirements", "深海迷航2 PC 系统配置要求", locale)} intro={pick("The minimum and recommended configurations listed by the official Steam store page.", "官方 Steam 商店页面列出的最低和推荐配置。", locale)} />
      <div className="max-w-4xl mx-auto px-4 py-10 page-content">
      <Breadcrumb locale={locale} items={[{ href: "/", en: "Home", zh: "首页" }, { en: "System Requirements", zh: "系统配置要求" }]} />
      <div className="tldr-box mb-8"><strong className="block text-deep-300 mb-1">{pick("Verification status", "核验状态", locale)}</strong><p>{pick("Verified against the official Steam store listing on July 13, 2026. These requirements can change as the game is updated.", "已于2026年7月13日依据官方 Steam 商店页面核验。随着游戏更新，这些配置可能变化。", locale)}</p></div>
      <h2>{pick("Minimum system requirements", "最低系统配置", locale)}</h2><RequirementsTable recommended={false} locale={locale} />
      <h2>{pick("Recommended system requirements", "推荐系统配置", locale)}</h2><RequirementsTable recommended locale={locale} />
      <p>{pick("Both sets of requirements list a 64-bit processor and operating system. The Steam listing also lists a broadband Internet connection.", "两套配置均要求64位处理器和操作系统。Steam 页面还列出了宽带互联网连接。", locale)}</p>
      <SourceBlock locale={locale} checked="July 13, 2026" scope={pick("Steam listing; no independent performance claims", "Steam 页面；不作独立性能主张", locale)} sources={[{ href: sourceUrl, en: "Subnautica 2 on Steam — System Requirements", zh: "Steam：Subnautica 2 系统配置要求" }]} />
      </div>
    </main>
  );
}
