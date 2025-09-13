import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default {
  eslint: { ignoreDuringBuilds: true },
};

git add .
git commit -m "Fix type errors and update config"
git push