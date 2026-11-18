import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  devIndicators: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // Keep old static-site URLs working after the migration.
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/contact-us.html", destination: "/contact", permanent: true },
      { source: "/blogs.html", destination: "/resources", permanent: true },
    ];
  },
};

const withMDX = createMDX({
  options: {
    // Plugins are referenced by name so the config stays serialisable for Turbopack.
    remarkPlugins: [["remark-gfm"]],
  },
});

export default withMDX(nextConfig);
