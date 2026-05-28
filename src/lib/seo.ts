import { areas, site } from "@/data/site";

export const businessId = `${site.url}/#business`;
export const websiteId = `${site.url}/#website`;

export function absoluteUrl(path = "") {
  if (!path || path === "/") {
    return site.url;
  }

  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function cityAreaSchema(area = areas) {
  return area.map((item) => ({
    "@type": "City",
    name: `${item.name}, FL`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: item.county,
    },
  }));
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
