import type { MetadataRoute } from "next";
import { areas, services, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/areas",
    "/contact",
    "/theme-park-roadside-assistance",
    "/lost-wheel-lock-key-orlando",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: service.priority ? 0.9 : 0.75,
  }));

  const areaRoutes = areas.map((area) => ({
    url: `${site.url}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
