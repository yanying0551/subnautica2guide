import type { Metadata } from "next";
import { SourceReviewPage } from "@/components/SourceReviewPage";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Biomods — Verification Status", "深海迷航2 生物模组——核验状态", locale),
    description: pick("The current evidence status for Subnautica 2 biomod names, unlocks, costs, and effects.", "深海迷航2生物模组名称、解锁、成本和效果的当前证据状态。", locale),
    alternates: getAlternates("/biomods", locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function Page() {
  return <SourceReviewPage locale={await getLocale()} title={pick("Biomods", "生物模组", await getLocale())} />;
}
