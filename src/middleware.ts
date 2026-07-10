import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_OPTIONS = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax" as const,
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  const upstreamLocale = request.headers.get("x-locale");
  const cookieLocale = request.cookies.get("locale")?.value;
  const isChinese =
    upstreamLocale === "zh" ||
    cookieLocale === "zh" ||
    pathname === "/zh-cn" ||
    pathname.startsWith("/zh-cn/");

  requestHeaders.set("x-locale", isChinese ? "zh" : "en");

  // Direct Next.js requests still need their visible prefix rewritten. The
  // Cloudflare entry worker has already removed it, so rewriting again would
  // recurse through the self-service binding and overwrite the locale.
  const hasVisibleChinesePrefix =
    pathname === "/zh-cn" || pathname.startsWith("/zh-cn/");

  const response = hasVisibleChinesePrefix
    ? NextResponse.rewrite(
        (() => {
          const url = request.nextUrl.clone();
          url.pathname = pathname.replace(/^\/zh-cn/, "") || "/";
          return url;
        })(),
        { request: { headers: requestHeaders } },
      )
    : NextResponse.next({ request: { headers: requestHeaders } });

  response.cookies.set("locale", isChinese ? "zh" : "en", COOKIE_OPTIONS);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
