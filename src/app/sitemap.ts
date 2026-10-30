import type { MetadataRoute } from "next";
import { focusedPageList } from "@/data/focusedPages";
import {
  serviceDiscoveryLastModified,
  serviceDiscoveryTargetSlugs,
} from "@/data/serviceDiscovery";
import { areas, services, site } from "@/data/site";

const disneyGrowthLastModified = new Date("2026-08-05T00:00:00.000Z");
const carKeyCostLastModified = new Date("2026-10-23T00:00:00.000Z");
const batteryCostLastModified = new Date("2026-10-25T00:00:00.000Z");
const turnpikeLastModified = new Date("2026-10-28T00:00:00.000Z");
const spareTireLastModified = new Date("2026-10-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/areas",
    "/contact",
    "/theme-park-roadside-assistance",
    "/lost-wheel-lock-key-orlando",
    "/locked-keys-in-rental-car-orlando",
    "/ran-out-of-gas-on-i-4-orlando",
    "/road-rangers-orlando",
    "/roadside-assistance-cost-orlando",
    "/roadside-assistance-near-disney-world-resort",
    "/mobile-tire-repair-orlando",
    "/free-roadside-assistance-orlando",
    "/car-key-replacement-cost-orlando",
    "/car-battery-replacement-cost-orlando",
    "/roadside-assistance-florida-turnpike-orlando",
    "/how-long-can-you-drive-on-a-spare-tire-orlando",
    ...focusedPageList.map((page) => page.href),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified:
      path === "/services"
        ? serviceDiscoveryLastModified
        : path === "/roadside-assistance-near-disney-world-resort"
          ? disneyGrowthLastModified
          : path === "/car-key-replacement-cost-orlando"
            ? carKeyCostLastModified
            : path === "/car-battery-replacement-cost-orlando"
              ? batteryCostLastModified
              : path === "/roadside-assistance-florida-turnpike-orlando"
                ? turnpikeLastModified
                : path === "/how-long-can-you-drive-on-a-spare-tire-orlando"
                  ? spareTireLastModified
                  : undefined,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: serviceDiscoveryTargetSlugs.has(service.slug)
      ? serviceDiscoveryLastModified
      : undefined,
    changeFrequency: "weekly" as const,
    priority: service.priority ? 0.9 : 0.75,
  }));

  const areaRoutes = areas.map((area) => ({
    url: `${site.url}/areas/${area.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
