import { areas, services, site } from "@/data/site";
import { businessId, cityAreaSchema, websiteId } from "@/lib/seo";

export function Schema() {
  const serviceArea = cityAreaSchema(areas);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["AutomotiveBusiness", "LocalBusiness"],
      "@id": businessId,
      name: site.name,
      url: site.url,
      telephone: site.phoneE164,
      slogan: site.tagline,
      description: site.description,
      image: `${site.url}/brand/roadzone-plus-logo.png`,
      logo: `${site.url}/brand/roadzone-plus-logo.png`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.coordinates.latitude,
        longitude: site.coordinates.longitude,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        contactType: "customer service",
        areaServed: "Central Florida",
        availableLanguage: "English",
      },
      openingHours: "Mo-Su 00:00-23:59",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: serviceArea,
      knowsAbout: services.map((service) => service.name),
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.summary,
          provider: {
            "@id": businessId,
          },
          areaServed: serviceArea,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: site.name,
      url: site.url,
      description: site.description,
      publisher: {
        "@id": businessId,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
