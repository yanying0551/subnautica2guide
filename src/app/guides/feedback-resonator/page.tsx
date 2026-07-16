import type { Metadata } from "next";
import { SourceReviewPage } from "@/components/SourceReviewPage";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Feedback Resonator Guide — Under Source Review", "反馈谐振器指南——来源核验中", locale),
    description: pick("This page is under source review. Use verified Subnautica 2 information while checks are completed.", "本页面正在进行来源核验，请在核验完成前使用已验证的深海迷航2信息。", locale),
    alternates: getAlternates("/guides/feedback-resonator", locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function Page() {
  const locale = await getLocale();
  return <SourceReviewPage locale={locale} title={pick("Feedback Resonator Guide", "反馈谐振器指南", locale)} />;
}
