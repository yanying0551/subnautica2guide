import type { Metadata } from "next";
import { EvidenceBoundGuidePage } from "@/components/EvidenceBoundGuidePage";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Blueprints and Crafting Recipes — Verification Tracker", "深海迷航2 蓝图与制作配方——核验追踪", locale),
    description: pick("A source-bounded Early Access tracker for Subnautica 2 blueprints and crafting recipes.", "有来源边界的深海迷航2抢先体验蓝图与制作配方追踪页。", locale),
    alternates: getAlternates("/guides/subnautica-2-blueprints-crafting-recipes", locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function Page() {
  return <EvidenceBoundGuidePage kind="blueprints" locale={await getLocale()} />;
}
