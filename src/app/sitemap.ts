import type { MetadataRoute } from "next";
import { focusedPageList } from "@/data/focusedPages";
import {
  serviceDiscoveryLastModified,
  serviceDiscoveryTargetSlugs,
} from "@/data/serviceDiscovery";
import { areas, services, site } from "@/data/site";
import {
  nightRentalGuides,
  serviceNightRentalLastModified,
} from "@/data/serviceNightRental";

const serviceNightRentalSlugs = new Set<string>(Object.keys(nightRentalGuides));

const disneyCarCareLastModified = new Date("2026-11-19T00:00:00.000Z");
const carKeyCostLastModified = new Date("2026-11-20T00:00:00.000Z");
const batteryCostLastModified = new Date("2026-10-25T00:00:00.000Z");
const turnpikeLastModified = new Date("2026-10-28T00:00:00.000Z");
const coldStartLastModified = new Date("2026-11-23T00:00:00.000Z");
const spareTireLastModified = new Date("2026-10-30T00:00:00.000Z");
const lockoutCostLastModified = new Date("2026-11-03T00:00:00.000Z");
const moveOverLawLastModified = new Date("2026-11-08T00:00:00.000Z");
const jumpStartCostLastModified = new Date("2026-11-12T00:00:00.000Z");
const tireChangeCostLastModified = new Date("2026-11-19T00:00:00.000Z");
const airportGuideLastModified = new Date("2026-11-19T00:00:00.000Z");
const roadRangersLastModified = new Date("2026-11-23T00:00:00.000Z");
const kissimmeeJumpStartLastModified = new Date("2026-11-24T00:00:00.000Z");
const rentalLockoutLastModified = new Date("2026-11-26T00:00:00.000Z");
const flatTireI4LastModified = new Date("2026-11-26T00:00:00.000Z");
const internationalDriveLastModified = new Date("2026-11-27T00:00:00.000Z");
const areaLastModified: Record<string, Date> = {
  kissimmee: new Date("2026-11-22T00:00:00.000Z"),
  sanford: new Date("2026-11-22T00:00:00.000Z"),
  "lake-buena-vista": new Date("2026-11-26T00:00:00.000Z"),
  apopka: new Date("2026-11-28T00:00:00.000Z"),
};

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
    "/car-wont-start-in-cold-orlando",
    "/car-lockout-cost-orlando",
    "/florida-move-over-law",
    "/jump-start-cost-orlando",
    "/tire-change-cost-orlando",
    "/jump-start-service-kissimmee-fl",
    ...focusedPageList.map((page) => page.href),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified:
      path === "/services"
        ? serviceDiscoveryLastModified
        : path === "/roadside-assistance-near-disney-world-resort"
          ? disneyCarCareLastModified
          : path === "/car-key-replacement-cost-orlando"
            ? carKeyCostLastModified
            : path === "/car-battery-replacement-cost-orlando"
              ? batteryCostLastModified
              : path === "/roadside-assistance-florida-turnpike-orlando"
                ? turnpikeLastModified
                : path === "/how-long-can-you-drive-on-a-spare-tire-orlando"
                  ? spareTireLastModified
                  : path === "/car-wont-start-in-cold-orlando"
                    ? coldStartLastModified
                    : path === "/car-lockout-cost-orlando"
                      ? lockoutCostLastModified
                      : path === "/florida-move-over-law"
                        ? moveOverLawLastModified
                        : path === "/jump-start-cost-orlando"
                          ? jumpStartCostLastModified
                          : path === "/tire-change-cost-orlando"
                            ? tireChangeCostLastModified
                            : path === "/orlando-airport-roadside-assistance"
                              ? airportGuideLastModified
                              : path === "/road-rangers-orlando"
                                ? roadRangersLastModified
                                : path === "/jump-start-service-kissimmee-fl"
                                  ? kissimmeeJumpStartLastModified
                                  : path === "/locked-keys-in-rental-car-orlando"
                                    ? rentalLockoutLastModified
                                    : path === "/flat-tire-on-i-4-orlando"
                                      ? flatTireI4LastModified
                                      : path === "/international-drive-roadside-assistance"
                                        ? internationalDriveLastModified
                                        : undefined,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: serviceNightRentalSlugs.has(service.slug)
      ? serviceNightRentalLastModified
      : serviceDiscoveryTargetSlugs.has(service.slug)
        ? serviceDiscoveryLastModified
        : undefined,
    changeFrequency: "weekly" as const,
    priority: service.priority ? 0.9 : 0.75,
  }));

  const areaRoutes = areas.map((area) => ({
    url: `${site.url}/areas/${area.slug}`,
    lastModified: areaLastModified[area.slug],
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
