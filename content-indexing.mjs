const ZH_PREFIX = "/zh-cn";

const REVIEW_PATH_PREFIXES = [
  "/guides",
  "/resources",
  "/creatures",
  "/base-building",
  "/biomods",
  "/updates",
];

const VERIFIED_PATHS = new Set(["/guides/multiplayer"]);

function isAmbiguousPath(pathname) {
  return (
    pathname.includes("%") ||
    pathname.includes("\\") ||
    pathname.includes("//") ||
    /[\u0000-\u001f\u007f]/.test(pathname) ||
    /(^|\/)\.{1,2}(\/|$)/.test(pathname)
  );
}

export function buildInternalRequest(request, url, headers) {
  const hasBody = request.method !== "GET" && request.method !== "HEAD";
  const init = {
    method: request.method,
    headers,
    body: hasBody ? request.body : undefined,
    cache: request.cache,
    credentials: request.credentials,
    integrity: request.integrity,
    keepalive: request.keepalive,
    mode: request.mode,
    redirect: request.redirect,
    referrer: request.referrer,
    referrerPolicy: request.referrerPolicy,
    signal: request.signal,
  };

  // Node's Fetch implementation requires this for streamed request bodies;
  // workerd accepts the same RequestInit extension.
  if (hasBody && request.body) init.duplex = "half";

  return new Request(url, init);
}

export function normalizeContentPath(pathname) {
  if (pathname.length > 1) {
    return pathname.replace(/\/+$/, "") || "/";
  }
  return pathname || "/";
}

export function localizeRedirectLocation(location, locale, publicRequestUrl) {
  if ((locale !== "zh" && locale !== "zh-cn") || typeof location !== "string" || !location) {
    return location;
  }
  if (location.startsWith("//") || /%(?![\da-fA-F]{2})/.test(location)) {
    return location;
  }

  let target;
  let publicUrl;
  try {
    publicUrl = new URL(publicRequestUrl);
    target = new URL(location, publicUrl);
  } catch {
    return location;
  }

  if (target.origin !== publicUrl.origin || isAmbiguousPath(target.pathname)) {
    return location;
  }
  if (
    target.pathname !== ZH_PREFIX &&
    !target.pathname.startsWith(`${ZH_PREFIX}/`)
  ) {
    target.pathname = `${ZH_PREFIX}${target.pathname}`;
  }

  if (/^[a-z][a-z\d+.-]*:/i.test(location)) {
    return target.toString();
  }
  return `${target.pathname}${target.search}${target.hash}`;
}

export function needsSourceReview(pathname) {
  if (isAmbiguousPath(pathname) || pathname.startsWith(`${ZH_PREFIX}/`)) {
    return true;
  }

  const normalized = normalizeContentPath(pathname);
  if (VERIFIED_PATHS.has(normalized)) return false;

  return REVIEW_PATH_PREFIXES.some(
    (prefix) =>
      normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
}

export function classifyRequestPath(pathname) {
  let locale = "en";
  let internalPath = pathname;
  let ambiguous = isAmbiguousPath(pathname);

  if (!ambiguous && (pathname === ZH_PREFIX || pathname.startsWith(`${ZH_PREFIX}/`))) {
    internalPath = pathname.slice(ZH_PREFIX.length) || "/";
    locale = "zh";
    ambiguous = internalPath === ZH_PREFIX || internalPath.startsWith(`${ZH_PREFIX}/`);
  }

  return {
    locale,
    internalPath,
    needsSourceReview: ambiguous || needsSourceReview(internalPath),
  };
}
