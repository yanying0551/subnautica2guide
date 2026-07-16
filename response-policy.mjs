import { localizeRedirectLocation } from "./content-indexing.mjs";

export { localizeRedirectLocation } from "./content-indexing.mjs";

export function getHttpsRedirectUrl(requestUrl) {
  const url = new URL(requestUrl);
  if (url.protocol !== "http:") return null;
  url.protocol = "https:";
  return url.toString();
}

export function buildHttpsRedirect(request) {
  const location = getHttpsRedirectUrl(request.url);
  if (!location) return null;
  return new Response(null, { status: 308, headers: { location } });
}

export function applySecurityHeaders(headers, isHttps) {
  if (isHttps) {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()");
  headers.delete("X-Powered-By");
  return headers;
}

export function applyResponsePolicy(response, options) {
  const headers = new Headers(response.headers);
  const location = headers.get("Location");
  if (location) {
    headers.set(
      "Location",
      localizeRedirectLocation(location, options.locale, options.publicRequestUrl),
    );
  }
  if (options.needsSourceReview) headers.set("X-Robots-Tag", "noindex, follow");
  applySecurityHeaders(headers, options.isHttps);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
