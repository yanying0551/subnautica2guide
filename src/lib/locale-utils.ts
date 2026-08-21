export type Locale = "en" | "zh";

const ZH_PREFIX = "/zh-cn";

/** Locale-aware link: prepends /zh-cn when locale is zh. */
export function l(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("//")) return href;
  if (locale === "zh") {
    if (href.startsWith(ZH_PREFIX)) return href;
    return ZH_PREFIX + (href === "/" ? "/" : href);
  }
  return href;
}

/** Pick a localized value and strip legacy inline markup from string copy. */
export function pick<T>(en: T, zh: T, locale: Locale): T {
  const selected = locale === "zh" ? zh : en;
  if (typeof selected === "string") {
    return selected.replace(/<\/?strong>/g, "").replace(/&quot;/g, '"') as T;
  }
  return selected;
}
