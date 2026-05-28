import { areas, services, site } from "@/data/site";

export function Schema() {
  const serviceArea = areas.map((area) => ({
    "@type": "City",
    name: `${area.name}, FL`,
    containedInPlace: area.county,
  }));

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      telephone: site.phoneDisplay,
      slogan: site.tagline,
      image: `${site.url}/brand/roadzone-plus-logo.png`,
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
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.summary,
          areaServed: serviceArea,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      publisher: {
        "@id": `${site.url}/#business`,
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
