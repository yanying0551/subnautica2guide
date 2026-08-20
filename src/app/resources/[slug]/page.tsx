import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceDetailView } from "@/components/ResourceDetailView";
import { resources } from "@/lib/constants";
import { getAlternates } from "@/lib/seo-metadata";
import { getLocale, pick } from "@/lib/server-locale";
import { getResourceDetail } from "@/lib/i18n";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) return { title: pick("Resource Not Found", "未找到资源", locale) };
  const data = getResourceDetail(slug, locale);
  return {
    title: data?.title ?? pick(`${resource.name} — Subnautica 2 Resource`, `${resource.name} — 深海迷航2 资源`, locale),
    description: data?.meta,
    alternates: getAlternates(`/resources/${slug}`, locale),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!resources.some((resource) => resource.slug === slug)) notFound();
  return <ResourceDetailView slug={slug} />;
}
