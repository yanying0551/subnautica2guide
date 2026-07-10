import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getResourceDetail } from "@/lib/i18n";
import { resources } from "@/lib/constants";

/**
 * Minimal inline-Markdown renderer for resource copy.
 *
 * The copy in `lib/i18n.ts` uses `**bold**` for emphasis. The previous
 * implementation piped the raw string straight into `dangerouslySetInnerHTML`
 * (no parsing) or into a plain text node (escaped), so users saw literal
 * asterisks like `**Sparse Plains**`. This helper:
 *   1. Escapes HTML-special characters (&, <, >) to their entities.
 *   2. Converts `**...**` to `<strong>...</strong>`.
 * The output is safe to inject via `dangerouslySetInnerHTML`.
 */
function renderInlineMd(input: string): string {
  const escaped = input
    .replace(/&/g, "\u0026amp;")
    .replace(/</g, "\u0026lt;")
    .replace(/>/g, "\u0026gt;");
  return escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export function ResourceDetailView({ slug }: { slug: string }) {
  // This is a synchronous component — but we need locale from cookie (async)
  // We'll use a wrapper that calls the async function
  return <ResourceDetailViewAsync slug={slug} />;
}

async function ResourceDetailViewAsync({ slug }: { slug: string }) {
  const locale = await getLocale();
  const data = getResourceDetail(slug, locale);

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-deep-100 mb-4">404</h1>
        <p className="text-deep-300 mb-6">{pick("This page hasn't been built yet — we're adding new guides daily.", "此页面尚未完成——我们每天都在添加新的指南内容。", locale)}</p>
        <Link href={l("/", locale)} className="inline-block bg-deep-400/90 text-deep-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-deep-400 transition-all">
          {pick("Back to Home", "回到首页", locale)}
        </Link>
      </div>
    );
  }

  const resourceName = resources.find((r) => r.slug === slug)?.name ?? slug;
  const tldrTitle = pick("⚡ TL;DR — Quick Answer", "⚡ 摘要 — 快速答案", locale);
  const biomeTitle = pick(`Where to Find ${resourceName} by Biome`, `${resourceName} 按生态域分布`, locale);
  const colName = pick("Biome", "生态域", locale);
  const colDepth = pick("Depth", "深度", locale);
  const colNotes = pick("Notes", "说明", locale);
  const usesTitle = pick("Crafting Uses", "合成用途", locale);
  const protipTitle = pick("💡 Pro Tip", "💡 实用技巧", locale);
  const relatedTitle = pick("Related Guides", "相关指南", locale);
  const relatedAll = pick("All Resources →", "全部资源 →", locale);
  const relatedBeginner = pick("Beginner Guide →", "新手指南 →", locale);
  const footerNote = pick("EA version information — resource locations may change with updates. Last updated: June 2026.", "抢先体验版本信息——资源位置可能随更新而变化。最后更新：2026年6月。", locale);

  // Pre-render any inline markdown (e.g. `**Sparse Plains**`) to HTML so it shows up as bold instead of literal asterisks.
  const tldrHtml = renderInlineMd(data.tldr);
  const proTipHtml = renderInlineMd(data.proTip);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/resources", locale)} className="hover:text-deep-400 transition-colors">{pick("Resources", "资源", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{resourceName}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">{data.h1}</h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">{tldrTitle}</strong>
        <div className="page-content text-deep-100" dangerouslySetInnerHTML={{ __html: tldrHtml }} />
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{biomeTitle}</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{colName}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{colDepth}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{colNotes}</th>
            </tr>
          </thead>
          <tbody>
            {data.biomes.map((b, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-deep-800/20" : "bg-deep-900/10"}>
                <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{b.name}</td>
                <td className="p-2 border-b border-deep-400/15 text-deep-200">{b.depth}</td>
                <td className="p-2 border-b border-deep-400/15 text-deep-200" dangerouslySetInnerHTML={{ __html: renderInlineMd(b.notes) }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{usesTitle}</h2>
      <ul className="space-y-2 mb-8">
        {data.uses.map((use, i) => (
          <li key={i} className="flex items-start gap-2 text-deep-200">
            <span className="text-deep-400 mt-1">•</span>
            <span dangerouslySetInnerHTML={{ __html: renderInlineMd(use) }} />
          </li>
        ))}
      </ul>

      <div className="info-box">
        <strong className="block text-deep-300 mb-1">{protipTitle}</strong>
        <p className="text-deep-100" dangerouslySetInnerHTML={{ __html: proTipHtml }} />
      </div>

      <div className="mt-10 pt-6 border-t border-deep-400/20">
        <h3 className="font-semibold text-deep-300 mb-3">{relatedTitle}</h3>
        <div className="flex flex-wrap gap-2">
          <Link href={l("/resources", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{relatedAll}</Link>
          <Link href={l("/guides/beginner-guide", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{relatedBeginner}</Link>
        </div>
      </div>

      <div className="mt-6 text-xs text-deep-400/50">{footerNote}</div>
    </div>
  );
}
