import type { Metadata } from "next";
import { EvidenceBoundGuidePage } from "@/components/EvidenceBoundGuidePage";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Walkthrough and Progression — Early Access Framework", "深海迷航2 流程与进度——抢先体验框架", locale),
    description: pick("A spoiler-controlled, source-bounded Subnautica 2 walkthrough framework for Early Access.", "有来源边界、防剧透的深海迷航2抢先体验流程框架。", locale),
    alternates: getAlternates("/guides/subnautica-2-walkthrough-progression", locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function Page() {
  return <EvidenceBoundGuidePage kind="progression" locale={await getLocale()} />;
}
