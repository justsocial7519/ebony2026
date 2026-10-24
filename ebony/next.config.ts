import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Retired pages: send old links and bookmarks to their replacements
  async redirects() {
    return [
      { source: "/projects", destination: "/collections", permanent: true },
      { source: "/projects/:path*", destination: "/collections", permanent: true },
      { source: "/about", destination: "/why-ebony", permanent: true },
    ]
  },
}

export default nextConfig
