import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = process.env.DOMAIN ?? "https://www.xyzuan.my.id/";
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${domain}/dashboards`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${domain}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${domain}/projects`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
