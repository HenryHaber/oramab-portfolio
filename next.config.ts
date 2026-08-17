import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/oramab-portfolio",
  assetPrefix: "/oramab-portfolio/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;