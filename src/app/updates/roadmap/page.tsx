import type { Metadata } from "next";
import Link from "next/link";
import { getLocale, l, pick } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      "Subnautica 2 EA Roadmap — Update Tracker",
      "深海迷航2 抢先体验路线图——更新追踪",
      locale,
    ),
    description: pick(
      "Track Subnautica 2 Early Access roadmap, upcoming updates, EA 1.1 and EA 1.2 plans, patch notes, and hotfix history.",
      "追踪深海迷航2 抢先体验路线图、即将到来的更新、EA 1.1 和 EA 1.2 计划、补丁说明和热修复历史。",
      locale,
    ),
    alternates: getAlternates("/updates/roadmap", locale),
  };
}

export default async function RoadmapPage() {
  const locale = await getLocale();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-deep-300 mb-6">
        <Link href={l("/", locale)} className="hover:text-deep-400 transition-colors">{pick("Home", "首页", locale)}</Link>
        <span className="mx-2 text-deep-400">/</span>
        <span className="text-deep-400 font-medium">{pick("EA Roadmap", "抢先体验路线图", locale)}</span>
      </nav>

      <h1 className="text-3xl font-bold text-deep-100 mb-6">
        {pick("Subnautica 2 Early Access Roadmap", "深海迷航2 抢先体验开发路线图", locale)}
      </h1>

      <div className="tldr-box">
        <strong className="block text-deep-300 mb-1">⚡ {pick("Current Status", "当前状态", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "<strong>EA 1.0</strong> launched May 14, 2026. Hotfixes 1-3 released. Next major update: <strong>EA 1.1</strong> (date TBA). EA 1.2 also planned. Full 1.0 release expected in 2028-2029.",
            "<strong>EA 1.0</strong> 于 2026 年 5 月 14 日上线。热修复 1-3 已发布。下一个大版本：<strong>EA 1.1</strong>（日期待定）。EA 1.2 也在计划中。完整 1.0 版本预计 2028-2029 年。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Update History", "更新历史", locale)}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-deep-800/50">
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Update", "更新", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Date", "日期", locale)}</th>
              <th className="text-left p-2 border-b-2 border-deep-400/30 text-deep-300">{pick("Highlights", "亮点", locale)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">EA 1.0</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("May 14, 2026", "2026年5月14日", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Launch: 4 biomes, 5 creatures, Tadpole submersible, DNA modification, base building, 4-player co-op", "首发：4 个生态域、5 种生物、蝌蚪号潜水器、DNA 改造、基地建造、4 人联机", locale)}</td>
            </tr>
            <tr className="bg-deep-900/10">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Hotfix 1", "热修复 1", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("May 22, 2026", "2026年5月22日", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Crash fixes, save corruption fix, co-op connection stability improvements", "崩溃修复、存档损坏修复、联机连接稳定性提升", locale)}</td>
            </tr>
            <tr className="bg-deep-800/20">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Hotfix 2", "热修复 2", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("June 1, 2026", "2026年6月1日", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Performance optimizations for Thermal Spires, creature AI fixes", "热液尖塔性能优化、生物 AI 修复", locale)}</td>
            </tr>
            <tr className="bg-deep-900/10">
              <td className="p-2 border-b border-deep-400/15 font-medium text-deep-100">{pick("Hotfix 3", "热修复 3", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("June 15, 2026", "2026年6月15日", locale)}</td>
              <td className="p-2 border-b border-deep-400/15 text-deep-200">{pick("Biomod UI fixes, base building alignment fixes, additional language support", "生物改造 UI 修复、基地建造对齐修复、新增语言支持", locale)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">{pick("Upcoming Updates", "即将到来的更新", locale)}</h2>
      <div className="space-y-4 mb-6">
        <div className="glow-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm bg-amber-900/30 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-medium">{pick("In Progress", "进行中", locale)}</span>
            <h3 className="font-bold text-deep-100">{pick("EA 1.1 — Quality of Life", "EA 1.1——体验优化", locale)}</h3>
          </div>
          <p className="text-sm text-deep-200">
            {pick(
              "Date TBA (estimated mid-late July 2026). Includes: creature modification improvements, wreckage gameplay, vehicle manufacturing updates, PDA log additions, storage caches, sprint mechanic, more creature encounters.",
              "日期待定（预计 2026 年 7 月中下旬）。包含：生物改造改进、残骸玩法、载具制造更新、PDA 日志新增、储物缓存、冲刺机制、更多生物遭遇。",
              locale,
            )}
          </p>
        </div>

        <div className="glow-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm bg-deep-700/30 text-deep-300 border border-deep-400/20 px-2 py-0.5 rounded-full font-medium">{pick("Planned", "已计划", locale)}</span>
            <h3 className="font-bold text-deep-100">{pick("EA 1.2 — Co-op Enhancement", "EA 1.2——联机增强", locale)}</h3>
          </div>
          <p className="text-sm text-deep-200">
            {pick(
              "Date TBA. Focus: voice chat improvements, player trading system, respawn mechanics, player emotes, more customization options.",
              "日期待定。重点：语音聊天改进、玩家交易系统、重生机制、玩家表情、更多自定义选项。",
              locale,
            )}
          </p>
        </div>

        <div className="glow-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm bg-deep-700/30 text-deep-300 border border-deep-400/20 px-2 py-0.5 rounded-full font-medium">{pick("Future", "未来", locale)}</span>
            <h3 className="font-bold text-deep-100">{pick("Future Major Updates", "未来重大更新", locale)}</h3>
          </div>
          <p className="text-sm text-deep-200">
            {pick(
              "New biomes, new creatures, new resources, new tools, new vehicles, and the next chapter of the story. No timeline confirmed.",
              "新生态域、新生物、新资源、新工具、新载具，以及剧情下一章。暂无时间表。",
              locale,
            )}
          </p>
        </div>
      </div>

      <div className="warning-box">
        <strong className="block text-amber-300 mb-1">⚠️ {pick("Note", "提示", locale)}</strong>
        <p className="text-deep-100">
          {pick(
            "All roadmap dates and content are subject to change. Unknown Worlds has not committed to specific release dates for EA 1.1 and beyond. This page will be updated as new information becomes available.",
            "所有路线图日期和内容均可能变更。Unknown Worlds 未对 EA 1.1 及之后的发布日期做出承诺。新信息公布时本页将更新。",
            locale,
          )}
        </p>
      </div>

      <h2 className="text-xl font-bold text-deep-100 mt-8 mb-4">FAQ</h2>
      <details className="faq-item">
        <summary>{pick("Will Subnautica 2 come to PS5 or Switch?", "深海迷航2 会登陆 PS5 或 Switch 吗？", locale)}</summary>
        <div className="faq-answer">{pick("Not confirmed. The current Early Access release is PC and Xbox only. Console ports are expected after 1.0 launch (2028+).", "未确认。当前抢先体验仅限 PC 和 Xbox。主机版预计在 1.0 正式版发布后（2028+）。", locale)}</div>
      </details>
      <details className="faq-item">
        <summary>{pick("Will my Early Access save carry over to 1.0?", "抢先体验存档能继承到 1.0 吗？", locale)}</summary>
        <div className="faq-answer">{pick("Unknown Worlds has stated they will try to support save migration, but cannot guarantee it for major content updates. Back up your saves before significant updates.", "Unknown Worlds 表示会尝试支持存档迁移，但无法对重大内容更新做出保证。重大更新前请备份存档。", locale)}</div>
      </details>

      <div className="mt-6 text-xs text-deep-400/50">
        {pick("Roadmap information compiled from official Unknown Worlds announcements. Last updated June 29, 2026.", "路线图信息整理自 Unknown Worlds 官方公告。最后更新：2026年6月29日。", locale)}
      </div>
    </div>
  );
}
