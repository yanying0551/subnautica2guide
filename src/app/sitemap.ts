import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://subnautica2guide.wiki";
  const zhPrefix = "/zh-cn";

  // All routes that exist in both EN and ZH
  const sharedRoutes = [
    "", // home
    "/resources",
    "/resources/copper",
    "/resources/silver",
    "/resources/lead",
    "/resources/salt",
    "/resources/titanium",
    "/resources/quartz",
    "/resources/gold",
    "/resources/lithium",
    "/creatures",
    "/base-building",
    "/biomods",
    "/guides",
    "/guides/beginner-guide",
    "/guides/digestive-incompatibility",
    "/guides/angel-comb",
    "/guides/feedback-resonator",
    "/guides/multiplayer",
    "/info/system-requirements",
    "/updates/roadmap",
    "/privacy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
  ];

  const priorityMap: Record<string, number> = {
    "/": 1.0,
    "/resources": 0.9,
    "/resources/copper": 0.8,
    "/resources/silver": 0.8,
    "/resources/lead": 0.8,
    "/resources/salt": 0.8,
    "/resources/titanium": 0.8,
    "/resources/quartz": 0.8,
    "/resources/gold": 0.8,
    "/resources/lithium": 0.8,
    "/creatures": 0.9,
    "/base-building": 0.8,
    "/biomods": 0.8,
    "/guides": 0.7,
    "/guides/beginner-guide": 0.9,
    "/guides/digestive-incompatibility": 0.8,
    "/guides/angel-comb": 0.7,
    "/guides/feedback-resonator": 0.7,
    "/guides/multiplayer": 0.8,
    "/info/system-requirements": 0.7,
    "/updates/roadmap": 0.8,
    "/privacy": 0.3,
    "/terms": 0.3,
    "/cookie-policy": 0.3,
    "/disclaimer": 0.3,
  };

  const frequencyMap: Record<string, string> = {
    "/": "daily",
    "/resources": "weekly",
    "/resources/copper": "monthly",
    "/resources/silver": "monthly",
    "/resources/lead": "monthly",
    "/resources/salt": "monthly",
    "/resources/titanium": "monthly",
    "/resources/quartz": "monthly",
    "/resources/gold": "monthly",
    "/resources/lithium": "monthly",
    "/creatures": "weekly",
    "/base-building": "weekly",
    "/biomods": "weekly",
    "/guides": "weekly",
    "/guides/beginner-guide": "monthly",
    "/guides/digestive-incompatibility": "monthly",
    "/guides/angel-comb": "monthly",
    "/guides/feedback-resonator": "monthly",
    "/guides/multiplayer": "monthly",
    "/info/system-requirements": "monthly",
    "/updates/roadmap": "weekly",
    "/privacy": "yearly",
    "/terms": "yearly",
    "/cookie-policy": "yearly",
    "/disclaimer": "yearly",
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
