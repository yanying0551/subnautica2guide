import type { Metadata } from "next";
import { SourceReviewPage } from "@/components/SourceReviewPage";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return { title: pick("Subnautica 2 Resources — Under Source Review", "深海迷航2 资源——正在进行来源核验", locale), description: pick("Resource locations and crafting information are being checked against current attributable sources.", "资源位置与制作资料正在依据当前可追溯来源核验。", locale), alternates: getAlternates("/resources", locale), robots: SOURCE_REVIEW_ROBOTS };
}

export default async function ResourcesPage() { const locale = await getLocale(); return <SourceReviewPage locale={locale} title={pick("Subnautica 2 Resources", "深海迷航2 资源", locale)} />; }
