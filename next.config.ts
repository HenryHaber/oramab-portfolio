import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/oramabo-portfolio",
  assetPrefix: "/oramabo-portfolio/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;