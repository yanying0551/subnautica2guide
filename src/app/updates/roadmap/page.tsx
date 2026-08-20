import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

const steamStoreUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";
const adaptiveMeasuresUrl = "https://unknownworlds.com/news/subnautica-2-adaptive-measures-update";
const experimentalUrl = "https://unknownworlds.com/news/subnautica-2-experimental-branch";
const buddySystemUrl = "https://unknownworlds.com/news/subnautica-2-buddy-system-update";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Update Roadmap", "深海迷航2 更新路线图", locale),
    description: pick(
      "Officially published Subnautica 2 Early Access updates, checked August 20, 2026.",
      "截至2026年8月20日核验的深海迷航2官方抢先体验更新。",
      locale,
    ),
    alternates: getAlternates("/updates/roadmap", locale),
    robots: { index: true, follow: true },
  };
}

export default async function Page() {
  const locale = await getLocale();
  return (
    <article className="page-content mx-auto max-w-4xl px-4 py-10">
      <h1>{pick("Subnautica 2 Update Roadmap", "深海迷航2 更新路线图", locale)}</h1>
      <p>
        {pick(
          "This page summarizes only publicly attributable development information. It does not publish a dated feature-by-feature roadmap.",
          "本页面仅整理有公开来源依据的开发信息，不发布按日期排列的逐项功能路线图。",
          locale,
        )}
      </p>
      <h2>{pick("Current Early Access status", "当前抢先体验状态", locale)}</h2>
      <p>
        {pick(
          "The Steam store listing gives May 14, 2026 as the Early Access release date. It describes the game as actively developed, with more biomes, creatures, craftables, and narrative planned throughout Early Access.",
          "Steam 商店页面将 2026 年 5 月 14 日列为抢先体验发布日期，并说明游戏仍在积极开发中，抢先体验期间会继续扩展生物群系、生物、可制作物和叙事内容。",
          locale,
        )}
      </p>
      <h2>{pick("Public development updates", "公开开发更新", locale)}</h2>
      <p>
        {pick(
          "Official Steam announcements record Early Access 1.1 — Adaptive Measures on July 8, 2026; the Experimental branch on August 12, 2026; and Early Access 1.2 — Buddy System on August 19, 2026. Buddy System adds proximity voice chat, player revives, emotes, player trading, two character options, and other gameplay and building changes.",
          "Steam 官方公告记录了 2026 年 7 月 8 日的抢先体验 1.1——Adaptive Measures、8 月 12 日的 Experimental 分支，以及 8 月 19 日的抢先体验 1.2——Buddy System。Buddy System 加入了距离语音、玩家救援、表情、玩家交易、两种角色选项，以及其他玩法和建造调整。",
          locale,
        )}
      </p>
      <h2>{pick("What is and is not confirmed", "已确认与未确认内容", locale)}</h2>
      <p>
        {pick(
          "These entries document published updates, not a promise of future release dates. A publicly discussed 2 to 3 years development horizon is an attributed estimate, not a guaranteed schedule. The official sources do not provide a complete dated feature-by-feature roadmap, so this page does not turn speculation or estimates into a schedule.",
          "以上内容记录已公开发布的更新，不代表未来发布日期承诺。官方来源没有提供完整的逐项功能日期路线图，因此本页面不会把推测或估计写成时间表。",
          locale,
        )}
      </p>
      <h2>{pick("Sources", "来源", locale)}</h2>
      <ul>
        <li><Link href={steamStoreUrl} target="_blank">{pick("Steam store listing", "Steam 商店页面", locale)}</Link></li>
        <li><Link href={adaptiveMeasuresUrl} target="_blank">{pick("Early Access 1.1 — Adaptive Measures", "抢先体验 1.1——Adaptive Measures", locale)}</Link></li>
        <li><Link href={experimentalUrl} target="_blank">{pick("Experimental Branch Released", "Experimental 分支发布公告", locale)}</Link></li>
        <li><Link href={buddySystemUrl} target="_blank">{pick("Early Access 1.2 — Buddy System", "抢先体验 1.2——Buddy System", locale)}</Link></li>
      </ul>
      <p className="text-sm text-deep-400/70">
        {pick(
          "Sources checked: August 20, 2026. Updates and availability can change.",
          "来源核验日期：2026年8月20日。更新内容和可用性可能发生变化。",
          locale,
        )}
      </p>
    </article>
  );
}
