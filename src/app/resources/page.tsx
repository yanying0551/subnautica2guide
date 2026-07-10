import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Resources", "深海迷航2 资源", locale),
    description: pick(
      "Complete resource location guide for Subnautica 2 Early Access.",
      "深海迷航2 抢先体验版完整资源位置指南。",
      locale,
    ),
    alternates: getAlternates("/resources", locale),
  };
}

const resourcesDataEn = [
  { slug: "copper", name: "Copper", source: "Limestone Outcrops", bestBiome: "Sparse Plains", depth: "0-150m", icon: "🟫" },
  { slug: "silver", name: "Silver", source: "Limestone Outcrops", bestBiome: "Plateaus", depth: "50-150m", icon: "⬜" },
  { slug: "lead", name: "Lead", source: "Sandstone Outcrops", bestBiome: "Graveyard", depth: "30-100m", icon: "⚫" },
  { slug: "salt", name: "Salt", source: "Seafloor Deposits", bestBiome: "Sparse Plains", depth: "0-50m", icon: "🧂" },
  { slug: "titanium", name: "Titanium", source: "Limestone/Salvage", bestBiome: "All Biomes", depth: "0-200m", icon: "🔩" },
  { slug: "quartz", name: "Quartz", source: "Seafloor Crystals", bestBiome: "Plateaus", depth: "10-80m", icon: "💎" },
  { slug: "gold", name: "Gold", source: "Sandstone Outcrops", bestBiome: "Thermal Spires", depth: "80-200m", icon: "🟡" },
  { slug: "lithium", name: "Lithium", source: "Shale Outcrops", bestBiome: "Thermal Spires", depth: "100-200m", icon: "🔋" },
];

const resourcesDataZh = [
  { slug: "copper", name: "铜矿", source: "石灰岩矿脉", bestBiome: "稀疏平原", depth: "0-150m", icon: "🟫" },
  { slug: "silver", name: "白银", source: "石灰岩矿脉", bestBiome: "高原", depth: "50-150m", icon: "⬜" },
  { slug: "lead", name: "铅", source: "砂岩矿脉", bestBiome: "墓地", depth: "30-100m", icon: "⚫" },
  { slug: "salt", name: "盐", source: "海底沉积", bestBiome: "稀疏平原", depth: "0-50m", icon: "🧂" },
  { slug: "titanium", name: "钛", source: "石灰岩/金属残骸", bestBiome: "所有生态域", depth: "0-200m", icon: "🔩" },
  { slug: "quartz", name: "石英", source: "海底水晶", bestBiome: "高原", depth: "10-80m", icon: "💎" },
  { slug: "gold", name: "黄金", source: "砂岩矿脉", bestBiome: "热液尖塔", depth: "80-200m", icon: "🟡" },
  { slug: "lithium", name: "锂", source: "页岩矿脉", bestBiome: "热液尖塔", depth: "100-200m", icon: "🔋" },
];

export default async function ResourcesPage() {
  const locale = await getLocale();
  const data = locale === "zh" ? resourcesDataZh : resourcesDataEn;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-display font-bold text-white mb-2">
        {locale === "zh" ? "深海迷航2 资源大全" : "Subnautica 2 Resources"}
      </h1>
      <p className="text-deep-300 mb-8">
        {locale === "zh" ? "深海迷航2 抢先体验版本完整资源点位指南。" : "Complete resource location guide for Subnautica 2 Early Access."}
      </p>

      <div className="rounded-xl border border-deep-400/10 p-6 mb-10 bg-surface-card/50">
        <h2 className="text-xl font-display font-bold text-white mb-4">
          {locale === "zh" ? "快速参考" : "Quick Reference"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2 border-b border-deep-400/20 text-deep-300 font-semibold">
                  {locale === "zh" ? "资源" : "Resource"}
                </th>
                <th className="text-left p-2 border-b border-deep-400/20 text-deep-300 font-semibold">
                  {locale === "zh" ? "来源" : "Source"}
                </th>
                <th className="text-left p-2 border-b border-deep-400/20 text-deep-300 font-semibold">
                  {locale === "zh" ? "最佳群系" : "Best Biome"}
                </th>
                <th className="text-left p-2 border-b border-deep-400/20 text-deep-300 font-semibold">
                  {locale === "zh" ? "深度" : "Depth"}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={row.slug} className={i === data.length - 1 ? "" : "border-b border-deep-400/8"}>
                  <td className="p-2">
                    <Link href={l(`/resources/${row.slug}`, locale)} className="text-deep-400 font-medium hover:text-deep-300 transition-colors">
                      {row.name}
                    </Link>
                  </td>
                  <td className="p-2 text-slate-300">{row.source}</td>
                  <td className="p-2 text-slate-300">{row.bestBiome}</td>
                  <td className="p-2 text-slate-300">{row.depth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {data.map((r) => (
          <Link
            key={r.slug}
            href={l(`/resources/${r.slug}`, locale)}
            className="flex items-center gap-3 rounded-xl p-4 glow-border hover:bg-surface-hover hover:border-deep-400/30 transition-all"
          >
            <span className="text-2xl">{r.icon}</span>
            <div>
              <span className="font-medium text-deep-200">{r.name}</span>
              <span className="block text-xs text-deep-400/50">
                {locale === "zh" ? "查看完整位置指南 →" : "View full location guide →"}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-xs text-deep-400/50">
        <p>{locale === "zh" ? "抢先体验版本信息——资源位置可能随更新而变化。最后更新：2026年6月。" : "EA version information — resource locations may change with updates. Last updated: June 2026."}</p>
      </div>
    </div>
  );
}
