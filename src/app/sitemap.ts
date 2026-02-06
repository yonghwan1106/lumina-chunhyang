import type { MetadataRoute } from "next";
import { killerContents } from "@/data/killer-contents";
import { storySeasons } from "@/data/story-seasons";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lumina-chunhyang.vercel.app";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/overview`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contents`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/story`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/impact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/roadmap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/budget`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const contentRoutes: MetadataRoute.Sitemap = killerContents.map((content) => ({
    url: `${baseUrl}/contents/${content.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const seasonRoutes: MetadataRoute.Sitemap = Object.keys(storySeasons).map((season) => ({
    url: `${baseUrl}/story/${season}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...contentRoutes, ...seasonRoutes];
}
