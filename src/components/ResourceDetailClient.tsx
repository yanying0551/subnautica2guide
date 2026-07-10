"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { tr, getResourceDetail } from "@/lib/i18n";
import { resources } from "@/lib/constants";

export function ResourceDetailClient({ slug }: { slug: string }) {
  const { locale, l } = useLocale();
  const data = getResourceDetail(slug, locale);

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-deep-100 mb-4">404</h1>
        <p className="text-deep-300 mb-6">{tr("404.message", locale)}</p>
        <Link href={l("/")} className="inline-block bg-deep-400/90 text-deep-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-deep-400 transition-all">
          {tr("404.back", locale)}
        </Link>
      </div>
    );
  }

  const resourceName = resources.find((r) => r.slug === slug)?.name ?? slug;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/")} className="hover:text-deep-400 transition-colors">{tr("breadcrumb.home", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/resources")} className="hover:text-deep-400 transition-colors">{tr("breadcrumb.resources", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{resourceName}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">{data.h1}</h1>

      {/* TL;DR */}
      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">{tr("resource.tldr.title", locale)}</strong>
        <div className="page-content text-deep-100" dangerouslySetInnerHTML={{ __html: data.tldr }} />
      </div>

      {/* Biome Table */}
      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">
        {locale === "zh" ? `${resourceName} 按生态域分布` : `Where to Find ${resourceName} by Biome`}
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{tr("resource.biome.col.name", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{tr("resource.biome.col.depth", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{tr("resource.biome.col.notes", locale)}</th>
            </tr>
          </thead>
          <tbody>
            {data.biomes.map((b, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-deep-800/20" : "bg-deep-900/10"}>
                <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{b.name}</td>
                <td className="p-2 border-b border-deep-400/15 text-deep-200">{b.depth}</td>
                <td className="p-2 border-b border-deep-400/15 text-deep-200">{b.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Uses */}
      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{tr("resource.uses.title", locale)}</h2>
      <ul className="space-y-2 mb-8">
        {data.uses.map((use, i) => (
          <li key={i} className="flex items-start gap-2 text-deep-200">
            <span className="text-deep-400 mt-1">•</span>
            <span>{use}</span>
          </li>
        ))}
      </ul>

      {/* Pro Tip */}
      <div className="info-box">
        <strong className="block text-deep-300 mb-1">{tr("resource.protip.title", locale)}</strong>
        <p className="text-deep-100">{data.proTip}</p>
      </div>

      {/* Related Links */}
      <div className="mt-10 pt-6 border-t border-deep-400/20">
        <h3 className="font-semibold text-deep-300 mb-3">{tr("resource.related.title", locale)}</h3>
        <div className="flex flex-wrap gap-2">
          <Link href={l("/resources")} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{tr("resource.related.all", locale)}</Link>
          <Link href={l("/guides/beginner-guide")} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{tr("resource.related.beginner", locale)}</Link>
        </div>
      </div>

      <div className="mt-6 text-xs text-deep-400/50">{tr("resource.footer.note", locale)}</div>
    </div>
  );
}
