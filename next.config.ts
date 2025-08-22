import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "encrypted-tbn0.gstatic.com" },
      { hostname: "hollywoodlife.com" },
      { hostname: "encrypted-tbn2.gstatic.com" },
      { hostname: "i.dailymail.co.uk" },
      { hostname: "c.ndtvimg.com" },
    ],
  },
};

export default nextConfig;
