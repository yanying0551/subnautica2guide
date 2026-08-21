import type { Metadata } from "next";
import { GuideHub } from "@/components/GuideHub";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Guides — Under Source Review", "深海迷航2 攻略——正在进行来源核验", locale),
    description: pick("Guide content is being checked against current attributable sources.", "攻略内容正在依据当前可追溯来源核验。", locale),
    alternates: getAlternates("/guides", locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function GuidesHub() {
  const locale = await getLocale();
  return <GuideHub locale={locale} />;
}
