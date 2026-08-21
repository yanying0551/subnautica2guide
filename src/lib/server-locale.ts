import { cookies, headers } from "next/headers";
import type { Locale } from "@/lib/locale-utils";

export type { Locale } from "@/lib/locale-utils";
export { l, pick } from "@/lib/locale-utils";

/** Get the current locale from the proxy request header, then cookie. */
export async function getLocale(): Promise<Locale> {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-locale");
  if (headerLocale === "zh" || headerLocale === "en") return headerLocale;

  const cookieStore = await cookies();
  const cookie = cookieStore.get("locale");
  return cookie?.value === "zh" ? "zh" : "en";
}
