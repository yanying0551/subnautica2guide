import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "Subnautica 2 Co-op Multiplayer Guide — How to Play with Friends",
      "深海迷航2 联机多人指南——如何与好友一起游玩",
      locale,
    ),
    description: pick(
      "Complete Subnautica 2 co-op guide. How to start a multiplayer session, invite friends, crossplay between PC and Xbox, and how resources and bases work in co-op.",
      "深海迷航2 完整联机指南。如何创建多人会话、邀请好友、PC 和 Xbox 跨平台联机，以及联机中资源和基地如何共享。",
      locale,
    ),
    alternates: getAlternates("/guides/multiplayer", locale),
  };
}

export default async function Multiplayer() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <Link href={l("/guides", locale)} className="hover:text-deep-400 transition-colors">{pick("Guides", "教程", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("Co-op Multiplayer", "联机多人", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Subnautica 2 Co-op Multiplayer Guide", "深海迷航2 联机多人游戏指南", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("Quick Answer", "快速答案", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "Subnautica 2 supports up to <strong>4 players</strong> in online co-op. Crossplay between PC (Steam/Epic) and Xbox. Host creates a session, friends join via invite. Resources and bases are shared. No dedicated servers — uses peer-to-peer connection.",
            "深海迷航2 支持最多 <strong>4 人</strong>在线联机。PC（Steam/Epic）和 Xbox 之间支持跨平台联机。房主创建会话，好友通过邀请加入。资源和基地共享。无专用服务器——使用点对点连接。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("How to Start a Co-op Session", "如何创建联机会话", locale)}</h2>
      <ol className="list-decimal pl-6 space-y-2 text-deep-200 mb-6">
        <li>{pick("<strong>Launch Subnautica 2</strong> from your platform (Steam, Epic, or Xbox).", "从你的平台（Steam、Epic 或 Xbox）<strong>启动深海迷航2</strong>。", locale)}</li>
        <li>{pick("From the main menu, select <strong>Multiplayer</strong>.", "在主菜单选择<strong>多人模式</strong>。", locale)}</li>
        <li>{pick("Choose <strong>Host Game</strong> to create a new session.", "选择<strong>创建游戏</strong>新建一个会话。", locale)}</li>
        <li>{pick("Set your session name and any optional settings (password, max players).", "设置会话名称和可选参数（密码、最大玩家数）。", locale)}</li>
        <li>{pick("Start the game — your session is now live.", "开始游戏——你的会话现已上线。", locale)}</li>
      </ol>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Inviting Friends", "邀请好友", locale)}</h2>
      <h3 className="text-lg font-semibold text-deep-300 mt-6 mb-2">{pick("Steam", "Steam", locale)}</h3>
      <p className="text-deep-200 mb-4">
        {pick(
          "Friends can join through the Steam overlay (Shift+Tab → Friends list → Join Game). Alternatively, send them your session invite code visible in the Multiplayer menu.",
          "好友可通过 Steam 叠加层加入（Shift+Tab → 好友列表 → 加入游戏）。也可在多人模式菜单中查看会话邀请码发送给好友。",
          locale,
        )}
      </p>

      <h3 className="text-lg font-semibold text-deep-300 mt-6 mb-2">{pick("Xbox / Game Pass", "Xbox / Game Pass", locale)}</h3>
      <p className="text-deep-200 mb-4">
        {pick(
          "Use the Xbox social features: invite from the Xbox Guide (Xbox button → Parties & chats → Start a party → Invite friends). Game Pass PC users can use the Xbox app overlay.",
          "使用 Xbox 社交功能：从 Xbox 指南邀请（Xbox 按钮 → 派对和聊天 → 创建派对 → 邀请好友）。Game Pass PC 用户可使用 Xbox 应用叠加层。",
          locale,
        )}
      </p>

      <h3 className="text-lg font-semibold text-deep-300 mt-6 mb-2">{pick("Crossplay", "跨平台联机", locale)}</h3>
      <p className="text-deep-200 mb-6">
        {pick(
          "Crossplay is supported between PC (Steam + Epic) and Xbox. Make sure all players have the <strong>same game version</strong> (all on Early Access). Crossplay is enabled by default — no special settings needed.",
          "PC（Steam + Epic）和 Xbox 之间支持跨平台联机。确保所有玩家<strong>游戏版本相同</strong>（都是抢先体验版）。跨平台默认开启——无需特殊设置。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("How Co-op Works", "联机机制说明", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li><strong className="text-deep-100">{pick("Resources", "资源", locale)}</strong>: {pick("Most resources are instanced per player — everyone can mine the same outcrop independently.", "大多数资源按玩家独立分配——每个人都可以独立采集同一个矿脉。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Bases", "基地", locale)}</strong>: {pick("Bases are shared. Any player can build, modify, or deconstruct base modules.", "基地共享。任何玩家都可以建造、修改或拆除基地模块。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Vehicles", "载具", locale)}</strong>: {pick("Vehicles are per-player. Each player can have their own Seaglide, Prawn Suit, etc.", "载具按玩家独立。每个玩家可以拥有自己的海滑翔器、Prawn 机甲等。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Progress", "进度", locale)}</strong>: {pick("Story progression is shared. Key scan data and PDA entries sync across all players.", "剧情进度共享。关键扫描数据和 PDA 条目在所有玩家之间同步。", locale)}</li>
        <li><strong className="text-deep-100">{pick("Communication", "交流", locale)}</strong>: {pick("Voice chat is supported in-game. Proximity-based audio adds to immersion.", "游戏内支持语音聊天。基于距离的音频增强沉浸感。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Can You Play Solo?", "可以单人游玩吗？", locale)}</h2>
      <p className="text-deep-200 mb-6">
        {pick(
          "Yes. Subnautica 2 fully supports single-player. Just select Single Player from the main menu. Your single-player save can be loaded in co-op mode, and vice versa.",
          "可以。深海迷航2 完整支持单人模式。在主菜单选择单人模式即可。单人存档可以加载到联机模式，反之亦然。",
          locale,
        )}
      </p>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Known Issues", "已知问题", locale)}</h2>
      <ul className="list-disc pl-6 space-y-1.5 text-deep-200 mb-6">
        <li>{pick("Some players report <strong>desync</strong> issues in deeper biomes — relogging usually fixes it.", "部分玩家在深海生态域报告<strong>不同步</strong>问题——重新登录通常可解决。", locale)}</li>
        <li>{pick("<strong>Base building</strong> can cause brief lag when multiple players build simultaneously.", "多个玩家同时建造<strong>基地</strong>时可能出现短暂卡顿。", locale)}</li>
        <li>{pick("If a <strong>host disconnects</strong>, all players are kicked. No host migration in the current build.", "如果<strong>房主断线</strong>，所有玩家都会被踢出。当前版本不支持房主迁移。", locale)}</li>
      </ul>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("Is there split-screen co-op?", "有分屏联机吗？", locale)}</summary>
        <div className="faq-answer">{pick("No. Subnautica 2 supports online co-op only. No local split-screen or LAN play.", "没有。深海迷航2 仅支持在线联机。无本地分屏或局域网游戏。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Can I play with friends on different platforms?", "可以和不同平台的好友联机吗？", locale)}</summary>
        <div className="faq-answer">{pick("Yes! Crossplay works between Steam, Epic Games Store, and Xbox. All platforms are interoperable.", "可以！Steam、Epic Games Store 和 Xbox 之间支持跨平台联机。所有平台互通。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Are there dedicated servers?", "有专用服务器吗？", locale)}</summary>
        <div className="faq-answer">{pick("No. Sessions are peer-to-peer. The host player's connection determines session stability.", "没有。会话采用点对点连接。房主的网络状况决定会话稳定性。", locale)}</div>
      </details>

      <div className="mt-10 pt-6 border-t border-deep-400/20">
        <div className="flex flex-wrap gap-2">
          <Link href={l("/guides/beginner-guide", locale)} className="text-sm bg-deep-800/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-700/40 hover:border-deep-400/40 transition-all">{pick("Beginner Guide →", "新手指南 →", locale)}</Link>
        </div>
      </div>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("EA version information — co-op features may change with updates. Last updated June 2026.", "抢先体验版本信息——联机功能可能随更新而变化。最后更新：2026年6月。", locale)}
      </div>
    </div>
  );
}
