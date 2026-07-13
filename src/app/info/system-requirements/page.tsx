import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

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
    <div className="max-w-3xl mx-auto px-4 py-10 page-content">
      <nav className="text-sm text-deep-300 mb-6"><Link href={l("/", locale)}>{pick("Home", "首页", locale)}</Link><span className="mx-2 text-deep-400">/</span><span className="text-deep-400 font-medium">{pick("System Requirements", "系统配置要求", locale)}</span></nav>
      <h1 className="text-3xl font-bold text-deep-100 mb-4">{pick("Subnautica 2 PC System Requirements", "深海迷航2 PC 系统配置要求", locale)}</h1>
      <div className="tldr-box mb-8"><strong className="block text-deep-300 mb-1">{pick("Verification status", "核验状态", locale)}</strong><p>{pick("Verified against the official Steam store listing on July 13, 2026. These requirements can change as the game is updated.", "已于2026年7月13日依据官方 Steam 商店页面核验。随着游戏更新，这些配置可能变化。", locale)}</p></div>
      <h2>{pick("Minimum system requirements", "最低系统配置", locale)}</h2><RequirementsTable recommended={false} locale={locale} />
      <h2>{pick("Recommended system requirements", "推荐系统配置", locale)}</h2><RequirementsTable recommended locale={locale} />
      <p>{pick("Both sets of requirements list a 64-bit processor and operating system. The Steam listing also lists a broadband Internet connection.", "两套配置均要求64位处理器和操作系统。Steam 页面还列出了宽带互联网连接。", locale)}</p>
      <h2>{pick("Source and scope", "来源与适用范围", locale)}</h2>
      <p>{pick("Source: ", "来源：", locale)}<a href={sourceUrl} target="_blank" rel="noreferrer">{pick("Subnautica 2 on Steam — System Requirements", "Steam：Subnautica 2 系统配置要求", locale)}</a>{pick(". This page reports the listing as checked on July 13, 2026; it does not make independent performance or compatibility claims.", "。本页仅记录截至2026年7月13日所核验的商店页面信息，不作独立性能或兼容性主张。", locale)}</p>
    </div>
  );
}
