import { cookies, headers } from "next/headers";

export type Locale = "en" | "zh";

const ZH_PREFIX = "/zh-cn";

/** Get the current locale from the middleware request header, then cookie. */
export async function getLocale(): Promise<Locale> {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-locale");
  if (headerLocale === "zh" || headerLocale === "en") return headerLocale;

  const cookieStore = await cookies();
  const cookie = cookieStore.get("locale");
  return cookie?.value === "zh" ? "zh" : "en";
}

/** Locale-aware link: prepends /zh-cn when locale is zh */
export function l(href: string, locale: Locale): string {
  if (href.startsWith("http") || href.startsWith("//")) return href;
  if (locale === "zh") {
    if (href.startsWith(ZH_PREFIX)) return href;
    return ZH_PREFIX + (href === "/" ? "/" : href);
  }
  return href;
}

/**
 * Simple i18n value picker.
 *
 * Legacy copy contains a small amount of inline `<strong>` markup, but plain
 * React text nodes do not parse HTML. Strip those legacy tags (and the encoded
 * quote entity) so users never see raw markup. New copy should use JSX for
 * emphasis instead of embedding HTML in translation strings.
 */
export function pick<T>(en: T, zh: T, locale: Locale): T {
  const selected = locale === "zh" ? zh : en;
  if (typeof selected === "string") {
    return selected
      .replace(/<\/?strong>/g, "")
      .replace(/&quot;/g, '"') as T;
  }
  return selected;
}
