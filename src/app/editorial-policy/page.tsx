import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Editorial & Verification Policy", "编辑与内容核验政策", locale),
    description: pick(
      "How Subnautica 2 Guide evaluates sources, scopes version-sensitive claims, and decides when content may be indexed.",
      "了解深海迷航2 指南如何评估来源、界定版本敏感主张，并决定内容何时可被搜索引擎收录。",
      locale,
    ),
    alternates: getAlternates("/editorial-policy", locale),
  };
}

export default async function EditorialPolicyPage() {
  const locale = await getLocale();
  const items = [
    pick("Use primary official sources whenever possible.", "尽可能使用第一方官方来源。", locale),
    pick("Record a source, verification date, and applicable game version for detailed claims.", "为详细主张记录来源、核验日期和适用游戏版本。", locale),
    pick("Keep unsupported, incomplete, or stale gameplay pages out of search until they are reviewed.", "未经支持、不完整或已过期的玩法页面，在完成审查前不进入搜索结果。", locale),
    pick("Apply the same evidence scope to English and Chinese content, metadata, and structured data.", "对中英文内容、元数据和结构化数据采用相同的证据范围。", locale),
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 page-content">
      <h1 className="text-3xl font-bold text-deep-100 mb-2">
        {pick("Editorial & Verification Policy", "编辑与内容核验政策", locale)}
      </h1>
      <p className="text-sm text-deep-400/50 mb-8">
        {pick("Effective: July 13, 2026", "生效日期：2026年7月13日", locale)}
      </p>

      <h2>{pick("Our standard", "我们的标准", locale)}</h2>
      <p>
        {pick(
          "Subnautica 2 changes over time. We do not present unsupported gameplay details as settled facts. Detailed pages remain under source review until their material claims have current, attributable evidence.",
          "深海迷航2 的内容会随时间变化。本站不会把缺乏依据的玩法细节当作确定事实。详细页面会持续进行来源审查，直至重要主张具备当前且可追溯的证据。",
          locale,
        )}
      </p>

      <h2>{pick("How we evaluate information", "我们如何评估信息", locale)}</h2>
      <ol>
        <li>{pick("Official developer, publisher, store, patch-note, and support material is preferred.", "优先采用开发商、发行商、商店页面、补丁说明和支持文档等官方材料。", locale)}</li>
        <li>{pick("A reproducible current-build observation may support a claim only when its platform, version, date, and method are recorded.", "只有在记录平台、版本、日期和方法后，可复现的当前版本实测才可支持一项主张。", locale)}</li>
        <li>{pick("Community reports can help us find leads, but do not establish precise facts by themselves.", "社区报告可以帮助发现线索，但本身不足以确立精确事实。", locale)}</li>
      </ol>

      <h2>{pick("What every verified detailed page needs", "每个已核验详细页面需要具备的内容", locale)}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>

      <h2>{pick("Search status", "搜索状态", locale)}</h2>
      <p>
        {pick(
          "Pages with unresolved material claims are available for readers but use a noindex instruction and are excluded from our Sitemap. We remove that restriction only after an editorial review confirms that the page meets this policy.",
          "重要主张尚未解决的页面仍可供读者访问，但会使用 noindex 指令并从 Sitemap 中排除。只有编辑审查确认页面符合本政策后，才会解除该限制。",
          locale,
        )}
      </p>

      <h2>{pick("Corrections", "更正", locale)}</h2>
      <p>
        {pick(
          "If we find an unsupported or outdated claim, we remove or qualify it promptly and return the affected page to review. Please see the ",
          "如果发现缺乏依据或已过期的主张，我们会及时删除或限定其表述，并将受影响页面重新置为审查状态。请参阅",
          locale,
        )}
        <Link href={l("/disclaimer", locale)}>{pick("disclaimer", "免责声明", locale)}</Link>
        {pick(" for general site terms.", "了解网站的一般条款。", locale)}
      </p>
    </div>
  );
}
