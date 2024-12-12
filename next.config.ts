import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "viaplaceholder.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVG images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Add optional CSP for security
  },
};

export default nextConfig;
