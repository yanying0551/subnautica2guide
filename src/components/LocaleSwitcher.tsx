"use client";

import { useLocale } from "@/contexts/LocaleContext";

export function LocaleSwitcher() {
  const { locale, toggle } = useLocale();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-xs font-medium bg-deep-700/40 text-deep-300 border border-deep-400/20 px-3 py-1.5 rounded-full hover:bg-deep-600/40 hover:border-deep-400/40 transition-colors whitespace-nowrap"
      aria-label="Switch language"
      title={`Switch to ${locale === "en" ? "Chinese" : "English"}`}
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span>{locale === "en" ? "中文" : "English"}</span>
    </button>
  );
}
