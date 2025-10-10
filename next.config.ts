import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  eslint: {
    // Disabled on builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["mdx", "tsx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
