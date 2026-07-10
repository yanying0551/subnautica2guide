import openNextWorker from "./.open-next/worker.js";

const ZH_PREFIX = "/zh-cn";

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const headers = new Headers(request.headers);
    let locale;

    if (url.pathname === ZH_PREFIX || url.pathname.startsWith(`${ZH_PREFIX}/`)) {
      url.pathname = url.pathname.slice(ZH_PREFIX.length) || "/";
      locale = "zh";
    } else {
      locale = "en";
    }

    // OpenNext may filter custom request headers before Next middleware runs.
    // Pass the route-derived locale through both a header and an internal
    // cookie; the middleware turns it into the public preference cookie.
    headers.set("x-locale", locale);
    const cookies = (headers.get("cookie") || "")
      .split(";")
      .map((cookie) => cookie.trim())
      .filter((cookie) => cookie && !cookie.startsWith("locale="));
    cookies.push(`locale=${locale}`);
    headers.set("cookie", cookies.join("; "));

    const internalRequest = new Request(url, {
      method: request.method,
      headers,
      body:
        request.method === "GET" || request.method === "HEAD"
          ? undefined
          : request.body,
      redirect: request.redirect,
    });

    return openNextWorker.fetch(internalRequest, env, ctx);
  },
};

export default worker;
