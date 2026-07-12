import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  const openNextCloudflareModule: string = "@opennextjs/cloudflare";
  void import(openNextCloudflareModule).then((module) =>
    module.initOpenNextCloudflareForDev(),
  );
}
