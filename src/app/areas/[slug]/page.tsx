import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, PhoneCall, Route } from "lucide-react";
import { areas, getArea, services, site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return {};
  }

  const title = `Roadside Assistance in ${area.name}, FL`;
  const description = `RoadZone Plus provides 24/7 roadside assistance in ${area.name}, FL, including jumpstarts, tire changes, fuel delivery, auto lockouts, wheel lock removal, battery replacement, and smart key programming.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/areas/${area.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/areas/${area.slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/areas" },
    { name: `${area.name}, FL`, path: `/areas/${area.slug}` },
  ]);

  const areaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/areas/${area.slug}`)}#roadside-assistance`,
    name: `Roadside Assistance in ${area.name}, FL`,
    serviceType: "Roadside assistance",
    description: `RoadZone Plus provides 24/7 roadside assistance in ${area.name}, FL — jumpstarts, tire changes, fuel delivery, auto lockouts, wheel lock removal, battery replacement, and smart key programming.`,
    url: absoluteUrl(`/areas/${area.slug}`),
    provider: {
      "@id": businessId,
    },
    areaServed: {
      "@type": "City",
      name: `${area.name}, FL`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.county,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbs, areaServiceSchema]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              {area.county}
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Roadside assistance in {area.name}, FL.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              RoadZone Plus provides 24/7 roadside assistance in {area.name} for
              jumpstarts, tire changes, fuel delivery, auto lockouts, wheel lock
              removal, battery replacement, and smart key programming.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">Local focus</p>
            <p className="mt-3 text-xl font-black leading-7 text-white">{area.emphasis}</p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Need help now?</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-2xl font-black text-white">
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="eyebrow">
                <Route aria-hidden="true" size={16} />
                Available services
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                RoadZone Plus services in {area.name}.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                RoadZone Plus brings the same full range of roadside help to {area.name} — from dead batteries and flat tires to lockouts and fuel delivery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-solid group p-5 transition hover:border-road-red/70"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-route-green" size={18} />
                    <div>
                      <h3 className="text-xl font-black text-white">{service.shortName}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/62">{service.cardText}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">{area.name}, FL</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Stranded nearby? Call RoadZone Plus.
            </h2>
          </div>
          <a href={site.phoneHref} className="btn border border-white bg-white text-road-black hover:bg-white/90">
            <PhoneCall aria-hidden="true" size={20} />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
