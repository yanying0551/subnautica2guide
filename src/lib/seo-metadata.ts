import type { Metadata } from "next";
import type { Locale } from "@/lib/server-locale";

const SITE_URL = "https://subnautica2guide.wiki";
const ZH_PREFIX = "/zh-cn";

export const SOURCE_REVIEW_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: true,
};

function finalPublicUrl(path: string): string {
  const route = path === "/" || path === "" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${route}/`;
}

/** Build canonical and hreflang URLs that match the site's final trailing-slash routes. */
export function getAlternates(path: string, locale: Locale): Metadata["alternates"] {
  const route = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const enUrl = finalPublicUrl(route);
  const zhUrl = finalPublicUrl(`${ZH_PREFIX}${route}`);

  return {
    canonical: locale === "zh" ? zhUrl : enUrl,
    languages: {
      en: enUrl,
      "zh-CN": zhUrl,
      "x-default": enUrl,
    },
  };
}
