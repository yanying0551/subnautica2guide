import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://subnautica2guide.wiki";
  const zhPrefix = "/zh-cn";

  // Detailed gameplay pages are intentionally excluded until claims have
  // attributable, version-specific evidence. Keep only stable public routes.
  const sharedRoutes = [
    "", // home
    "/privacy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
    "/editorial-policy",
    "/info/system-requirements",
    "/guides/multiplayer",
  ];

  const priorityMap: Record<string, number> = {
    "/": 1.0,
    "/privacy": 0.3,
    "/terms": 0.3,
    "/cookie-policy": 0.3,
    "/disclaimer": 0.3,
    "/editorial-policy": 0.4,
    "/info/system-requirements": 0.6,
    "/guides/multiplayer": 0.6,
  };

  const frequencyMap: Record<string, string> = {
    "/": "weekly",
    "/privacy": "yearly",
    "/terms": "yearly",
    "/cookie-policy": "yearly",
    "/disclaimer": "yearly",
    "/info/system-requirements": "monthly",
    "/guides/multiplayer": "monthly",
  } as Record<string, string>;

  const result: MetadataRoute.Sitemap = [];

  for (const route of sharedRoutes) {
    const url = route === "" ? baseUrl : `${baseUrl}${route}`;
    result.push({
      url,
      priority: priorityMap[route] ?? 0.5,
      changeFrequency: (frequencyMap[route] ?? "monthly") as "daily" | "weekly" | "monthly" | "yearly" | "always" | "hourly" | "never",
    });
  }

  // Add ZH routes with /zh-cn prefix
  for (const route of sharedRoutes) {
    const zhUrl = route === "" ? `${baseUrl}${zhPrefix}` : `${baseUrl}${zhPrefix}${route}`;
    result.push({
      url: zhUrl,
      priority: priorityMap[route] ?? 0.5,
      changeFrequency: (frequencyMap[route] ?? "monthly") as "daily" | "weekly" | "monthly" | "yearly" | "always" | "hourly" | "never",
    });
  }

  return result;
}
