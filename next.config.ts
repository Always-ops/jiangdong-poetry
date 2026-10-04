import type { NextConfig } from "next";

// GitHub Pages 构建时设置 PAGES_BASE_PATH（如 /jiangdong-poetry），Vercel 构建不受影响
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = basePath
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
    }
  : {};

export default nextConfig;
