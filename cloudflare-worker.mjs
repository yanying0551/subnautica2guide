import openNextWorker from "./.open-next/worker.js";
import {
  buildInternalRequest,
  classifyRequestPath,
} from "./content-indexing.mjs";
import {
  applyResponsePolicy,
  buildHttpsRedirect,
} from "./response-policy.mjs";

// Detailed gameplay pages remain available to readers, but are excluded from
// search results until their version-specific claims have attributable sources.
const worker = {
  async fetch(request, env, ctx) {
    const httpsRedirect = buildHttpsRedirect(request);
    if (httpsRedirect) return httpsRedirect;

    const url = new URL(request.url);
    const publicRequestUrl = url.toString();
    const headers = new Headers(request.headers);
    const route = classifyRequestPath(url.pathname);

    url.pathname = route.internalPath;
    const locale = route.locale;

    // OpenNext may filter custom request headers before Next middleware runs.
    headers.set("x-locale", locale);
    const cookies = (headers.get("cookie") || "")
      .split(";")
      .map((cookie) => cookie.trim())
      .filter((cookie) => cookie && !cookie.startsWith("locale="));
    cookies.push(`locale=${locale}`);
    headers.set("cookie", cookies.join("; "));

    const internalRequest = buildInternalRequest(request, url, headers);
    const response = await openNextWorker.fetch(internalRequest, env, ctx);

    return applyResponsePolicy(response, {
      locale,
      needsSourceReview: route.needsSourceReview,
      publicRequestUrl,
      isHttps: true,
    });
  },
};

export default worker;
