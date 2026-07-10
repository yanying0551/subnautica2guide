"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { tr } from "@/lib/i18n";

export function Footer() {
  const { locale, l } = useLocale();

  return (
    <footer className="mt-auto border-t border-deep-400/10 bg-[#05121d]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-white mb-3">{tr("footer.about.title", locale)}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {tr("footer.about.text", locale)}
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-3">{tr("footer.quicklinks", locale)}</h3>
            <ul className="space-y-1.5 text-sm">
              <li><Link href={l("/creatures")} className="text-slate-400 hover:text-deep-400 transition-colors">{tr("nav.creatures", locale)}</Link></li>
              <li><Link href={l("/resources")} className="text-slate-400 hover:text-deep-400 transition-colors">{tr("nav.resources", locale)}</Link></li>
              <li><Link href={l("/guides/beginner-guide")} className="text-slate-400 hover:text-deep-400 transition-colors">{locale === "zh" ? "新手入门指南" : "Beginner Guide"}</Link></li>
              <li><Link href={l("/guides/multiplayer")} className="text-slate-400 hover:text-deep-400 transition-colors">{tr("nav.coop", locale)}</Link></li>
              <li><Link href={l("/updates/roadmap")} className="text-slate-400 hover:text-deep-400 transition-colors">{tr("nav.roadmap", locale)}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-3">{tr("footer.sources", locale)}</h3>
            <ul className="space-y-1.5 text-sm">
              <li><a href="https://unknownworlds.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-deep-400 transition-colors">Unknown Worlds →</a></li>
              <li><a href="https://store.steampowered.com/app/1962700/Subnautica_2/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-deep-400 transition-colors">Steam Store →</a></li>
              <li><a href="https://www.xbox.com/en-US/games/subnautica-2" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-deep-400 transition-colors">Xbox / Game Pass →</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-deep-400/8 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-400">
          <p>{tr("footer.fan.text", locale)}</p>
          <div className="flex gap-4">
            <Link href={l("/privacy")} className="hover:text-deep-400 transition-colors">{tr("footer.privacy", locale)}</Link>
            <Link href={l("/terms")} className="hover:text-deep-400 transition-colors">{tr("footer.terms", locale)}</Link>
            <Link href={l("/cookie-policy")} className="hover:text-deep-400 transition-colors">{tr("footer.cookies", locale)}</Link>
            <Link href={l("/disclaimer")} className="hover:text-deep-400 transition-colors">{tr("footer.disclaimer", locale)}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
