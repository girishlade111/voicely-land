import type { NextConfig } from "next";

// Static export for GitHub Pages. API routes (waitlist) removed; the
// waitlist form uses a mailto: fallback instead (see FooterCTA / HeroSection).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
