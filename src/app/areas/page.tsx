import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, PhoneCall, Route, ShieldCheck } from "lucide-react";
import { areas, counties, services, site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Central Florida Roadside Service Areas",
  description:
    "RoadZone Plus serves Orlando and nearby Central Florida cities with 24/7 help for dead batteries, flat tires, lockouts, and fuel delivery.",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Central Florida Roadside Service Areas",
    description:
      "RoadZone Plus serves Orlando and nearby Central Florida cities with 24/7 help for dead batteries, flat tires, lockouts, and fuel delivery.",
    url: "/areas",
  },
};

export default function AreasPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "RoadZone Plus Central Florida service areas",
    itemListElement: areas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${area.name}, FL`,
      url: absoluteUrl(`/areas/${area.slug}`),
    })),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/areas" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([itemListSchema, breadcrumbs]) }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Central Florida service areas
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Roadside assistance around Orlando.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              RoadZone Plus is based in Orlando and serves surrounding cities across
              Orange, Osceola, Seminole, and Polk County areas. For the fastest answer,
              call and share your exact location.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call for ETA
              </a>
              <Link href="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card-solid group block p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-road-red text-white">
                    <MapPin aria-hidden="true" size={22} />
                  </span>
                  <span>
                    <span className="block text-2xl font-black text-white">{area.name}</span>
                    <span className="mt-1 block text-sm font-bold text-white/48">
                      {area.county}
                    </span>
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-white/64">{area.emphasis}</p>
                <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  View area page
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              County coverage
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Core counties for launch.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {counties.map((county) => (
              <div key={county} className="card-solid p-6">
                <h3 className="text-2xl font-black text-white">{county}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  RoadZone Plus responds to calls across this county, covering residential streets, highways, parking lots, and commercial areas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <h2 className="text-4xl font-black text-white">Services available by area</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-md border border-white/10 bg-white/5 p-4 text-sm font-bold text-white/72 hover:border-road-red/60 hover:text-white"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
