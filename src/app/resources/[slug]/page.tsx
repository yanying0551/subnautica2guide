import type { Metadata } from "next";
import { resources } from "@/lib/constants";
import { getResourceDetail } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { ResourceDetailView } from "@/components/ResourceDetailView";
import { getLocale } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return resources.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const enData = getResourceDetail(slug, "en");
  if (!enData) return { title: "Resource Not Found" };
  const data = locale === "zh" ? getResourceDetail(slug, "zh") ?? enData : enData;
  return {
    title: data.title,
    description: data.meta,
    alternates: getAlternates(`/resources/${slug}`, locale),
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getResourceDetail(slug, "en")) notFound();

  return <ResourceDetailView slug={slug} />;
}
