import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SourceReviewPage } from "@/components/SourceReviewPage";
import { resources } from "@/lib/constants";
import { getAlternates, SOURCE_REVIEW_ROBOTS } from "@/lib/seo-metadata";
import { getLocale, pick } from "@/lib/server-locale";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  if (!resources.some((resource) => resource.slug === slug)) {
    return { title: pick("Resource Not Found", "未找到资源", locale), robots: SOURCE_REVIEW_ROBOTS };
  }
  return {
    title: pick("Resource Detail — Under Source Review", "资源详情——来源核验中", locale),
    description: pick("This resource page is under source review.", "本资源页面正在进行来源核验。", locale),
    alternates: getAlternates(`/resources/${slug}`, locale),
    robots: SOURCE_REVIEW_ROBOTS,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!resources.some((resource) => resource.slug === slug)) notFound();
  const locale = await getLocale();
  return <SourceReviewPage locale={locale} title={pick("Resource Detail", "资源详情", locale)} />;
}
