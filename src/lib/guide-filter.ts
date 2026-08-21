import type { GuideRegistryEntry, GuideStatus } from "@/lib/guide-registry";

export type GuideFilterStatus = GuideStatus | "all";

export function filterGuideEntries(
  entries: GuideRegistryEntry[],
  query: string,
  status: GuideFilterStatus,
): GuideRegistryEntry[] {
  const needle = query.trim().toLocaleLowerCase();
  return entries.filter((entry) => {
    const matchesStatus = status === "all" || entry.status === status;
    if (!matchesStatus) return false;
    if (!needle) return true;
    return [entry.title.en, entry.title.zh, entry.description.en, entry.description.zh]
      .join(" ")
      .toLocaleLowerCase()
      .includes(needle);
  });
}
