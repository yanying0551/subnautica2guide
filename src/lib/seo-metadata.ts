import type { Metadata } from "next";
import type { Locale } from "@/lib/server-locale";

const ZH_PREFIX = "/zh-cn";

/** Build canonical and hreflang URLs for one public route. */
export function getAlternates(path: string, locale: Locale): Metadata["alternates"] {
  const route = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const enUrl = route || "/";
  const zhUrl = `${ZH_PREFIX}${route}`;

  return {
    canonical: locale === "zh" ? zhUrl : enUrl,
    languages: {
      en: enUrl,
      "zh-CN": zhUrl,
      "x-default": enUrl,
    },
  };
}
