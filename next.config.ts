import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/jump-start",
        destination: "/services/jumpstart",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
