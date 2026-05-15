import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://boss-fit.vercel.app",
    },
    {
      url: "https://boss-fit.vercel.app/api/health",
    },
  ];
}
