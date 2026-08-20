import type { Metadata } from "next";
import { EvidenceBoundGuidePage } from "@/components/EvidenceBoundGuidePage";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Map and Biomes — Version-Safe Reference", "深海迷航2 地图与生态域——版本安全参考", locale),
    description: pick("A source-bounded Subnautica 2 map and biome reference for Early Access.", "有来源边界的深海迷航2抢先体验地图与生态域参考。", locale),
    alternates: getAlternates("/guides/subnautica-2-map-biomes", locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function Page() {
  return <EvidenceBoundGuidePage kind="map" locale={await getLocale()} />;
}
