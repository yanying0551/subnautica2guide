import { beforeEach, describe, expect, it, vi } from "vitest";

const { openNextFetch } = vi.hoisted(() => ({
  openNextFetch: vi.fn(),
}));

vi.mock("../.open-next/worker.js", () => ({
  default: { fetch: openNextFetch },
}));

import worker from "../cloudflare-worker.mjs";

const env = { marker: "env" };
const ctx = { marker: "ctx" };

describe("production worker entry composition", () => {
  beforeEach(() => {
    openNextFetch.mockReset();
    openNextFetch.mockResolvedValue(
      new Response("upstream", { headers: { "X-Powered-By": "Next.js" } }),
    );
  });

  it("redirects HTTP before invoking OpenNext", async () => {
    const response = await worker.fetch(
      new Request("http://subnautica2guide.wiki/zh-cn/guides/multiplayer/?from=http"),
      env,
      ctx,
    );

    expect(response.status).toBe(308);
    expect(response.headers.get("Location")).toBe(
      "https://subnautica2guide.wiki/zh-cn/guides/multiplayer/?from=http",
    );
    expect(openNextFetch).not.toHaveBeenCalled();
  });

  it("forwards a Chinese request on its internal path with locale header and cookie", async () => {
    await worker.fetch(
      new Request("https://subnautica2guide.wiki/zh-cn/guides/multiplayer/?view=full", {
        headers: { cookie: "session=abc; locale=en" },
      }),
      env,
      ctx,
    );

    expect(openNextFetch).toHaveBeenCalledOnce();
    const [forwarded, forwardedEnv, forwardedCtx] = openNextFetch.mock.calls[0];
    expect(forwarded.url).toBe(
      "https://subnautica2guide.wiki/guides/multiplayer/?view=full",
    );
    expect(forwarded.headers.get("x-locale")).toBe("zh");
    expect(forwarded.headers.get("cookie")).toBe("session=abc; locale=zh");
    expect(forwarded.headers.has("x-nonce")).toBe(false);
    expect(forwarded.headers.has("Content-Security-Policy")).toBe(false);
    expect(forwardedEnv).toBe(env);
    expect(forwardedCtx).toBe(ctx);
  });

  it("keeps verified multiplayer indexable and quarantines unverified content", async () => {
    const verified = await worker.fetch(
      new Request("https://subnautica2guide.wiki/guides/multiplayer/"),
      env,
      ctx,
    );
    const unverified = await worker.fetch(
      new Request("https://subnautica2guide.wiki/guides/beginner-guide/"),
      env,
      ctx,
    );

    expect(verified.headers.has("X-Robots-Tag")).toBe(false);
    expect(unverified.headers.get("X-Robots-Tag")).toBe("noindex, follow");
  });

  it("localizes relative Chinese redirects and applies low-risk security headers", async () => {
    openNextFetch.mockResolvedValueOnce(
      new Response(null, {
        status: 307,
        headers: { Location: "child", "X-Powered-By": "Next.js" },
      }),
    );

    const response = await worker.fetch(
      new Request("https://subnautica2guide.wiki/zh-cn/guides/current/"),
      env,
      ctx,
    );

    expect(response.headers.get("Location")).toBe(
      "/zh-cn/guides/current/child",
    );
    expect(response.headers.get("Strict-Transport-Security")).toContain(
      "max-age=31536000",
    );
    expect(response.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(response.headers.get("X-Frame-Options")).toBe("DENY");
    expect(response.headers.get("Referrer-Policy")).toBe(
      "strict-origin-when-cross-origin",
    );
    expect(response.headers.has("Content-Security-Policy")).toBe(false);
    expect(response.headers.has("X-Powered-By")).toBe(false);
  });
});
