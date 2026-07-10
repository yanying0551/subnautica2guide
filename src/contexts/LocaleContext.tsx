"use client";

import { createContext, useCallback, useContext, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const ZH_PREFIX = "/zh-cn";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  /** Locale-aware link: prepends /zh-cn when locale is zh. */
  l: (href: string) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith(ZH_PREFIX) ? "zh" : "en";
}

export function LocalProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPath(pathname);

  const l = useCallback(
    (href: string): string => {
      if (href.startsWith("http") || href.startsWith("//")) return href;
      if (locale === "zh") {
        if (href.startsWith(ZH_PREFIX)) return href;
        return ZH_PREFIX + (href === "/" ? "/" : href);
      }
      return href;
    },
    [locale],
  );

  const setLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === locale) return;

      // Keep the `locale` cookie in sync with the URL so that subsequent
      // server-side requests (RSC payload, metadata, middleware) are rendered
      // in the same language as the client-side switcher. Without this, the
      // middleware would keep reading the stale cookie, produce a mismatched
      // `x-locale` request header, and the server tree would stay in the old
      // language until a hard reload.
      if (typeof document !== "undefined") {
        document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
      }

      if (newLocale === "zh") {
        router.replace(ZH_PREFIX + (pathname === "/" ? "/" : pathname));
        return;
      }

      const englishPath = pathname.startsWith(ZH_PREFIX)
        ? pathname.slice(ZH_PREFIX.length) || "/"
        : pathname;
      router.replace(englishPath);
    },
    [locale, pathname, router],
  );

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "zh" : "en");
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle, l }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocalProvider");
  return context;
}
