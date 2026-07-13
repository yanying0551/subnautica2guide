import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

const sourceUrl = "https://store.steampowered.com/app/1962700/Subnautica_2/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick("Subnautica 2 Co-op and Multiplayer Status", "深海迷航2 合作与多人模式状态", locale),
    description: pick("Official Steam-listed multiplayer features for Subnautica 2, last checked July 13, 2026.", "来自官方 Steam 页面、最后核验于2026年7月13日的深海迷航2 多人模式信息。", locale),
    alternates: getAlternates("/guides/multiplayer", locale),
  };
}

export default async function Multiplayer() {
  const locale = await getLocale();
  const features = [
    pick("Single-player", "单人游戏", locale),
    pick("Online Co-op", "在线合作", locale),
    pick("Cross-Platform Multiplayer", "跨平台多人游戏", locale),
    pick("4-player co-op", "4 人合作模式", locale),
  ];
  return <div className="max-w-3xl mx-auto px-4 py-10 page-content">
    <nav className="text-sm text-deep-300 mb-6"><Link href={l("/", locale)}>{pick("Home", "首页", locale)}</Link><span className="mx-2">/</span><Link href={l("/guides", locale)}>{pick("Guides", "攻略", locale)}</Link></nav>
    <h1 className="text-3xl font-bold text-deep-100 mb-4">{pick("Subnautica 2 Co-op and Multiplayer Status", "深海迷航2 合作与多人模式状态", locale)}</h1>
    <div className="tldr-box mb-8"><strong className="block text-deep-300 mb-1">{pick("Verified status", "已核验状态", locale)}</strong><p>{pick("The official Steam listing says Subnautica 2 can be played alone or with friends in 4-player co-op. It lists Single-player, Online Co-op, and Cross-Platform Multiplayer as features.", "官方 Steam 页面说明，深海迷航2 可以单人游玩，也可以与好友进行4人合作；页面列出的功能包括单人游戏、在线合作和跨平台多人游戏。", locale)}</p></div>
    <h2>{pick("Officially listed features", "官方列出的功能", locale)}</h2><ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    <h2>{pick("What this page does not confirm", "本页不确认的内容", locale)}</h2><p>{pick("The source used here does not specify platform combinations, invite steps, session settings, save behavior, resource sharing, servers, voice chat, local split-screen, or troubleshooting. We do not treat those details as confirmed until they have a current, attributable source.", "本页使用的来源未说明平台组合、邀请步骤、会话设置、存档行为、资源共享、服务器、语音聊天、本地分屏或故障排查。除非具有当前且可追溯的来源，本站不会将这些细节视为已确认。", locale)}</p>
    <h2>{pick("Source and scope", "来源与适用范围", locale)}</h2><p>{pick("Source: ", "来源：", locale)}<a href={sourceUrl} target="_blank" rel="noreferrer">{pick("Subnautica 2 on Steam", "Steam：Subnautica 2", locale)}</a>{pick(". Last checked July 13, 2026. Features and availability can change with updates.", "。最后核验日期为2026年7月13日。功能和可用性可能随更新变化。", locale)}</p>
  </div>;
}
