import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, PhoneCall, Route, ShieldCheck } from "lucide-react";
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

  const title = area.metaTitle ?? `Roadside Assistance in ${area.name}, FL`;
  const description =
    area.metaDescription ??
    `RoadZone Plus provides 24/7 roadside assistance in ${area.name}, FL for jumpstarts, tire changes, lockouts, fuel delivery, and battery help.`;

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

  const areaFaqSchema = area.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: area.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbs, areaServiceSchema, areaFaqSchema].filter(Boolean)),
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
              {area.heading ?? `Roadside assistance in ${area.name}, FL.`}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              {area.intro}
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

      {area.emergencyNotes && area.emergencyNotes.length > 0 ? (
        <section className="section border-t border-white/10 bg-road-black">
          <div className="container">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <PhoneCall aria-hidden="true" size={16} />
                Orlando emergency help
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                Roadside assistance in {area.name} when you need a direct call.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                If your vehicle is stuck, the fastest path is still simple: call,
                describe the problem, and give the clearest location you can.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {area.emergencyNotes.map((item) => (
                <div key={item.heading} className="card-solid p-6">
                  <h3 className="text-xl font-black text-white">{item.heading}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {area.freeAssistanceNotes && area.freeAssistanceNotes.length > 0 ? (
        <section className="section border-t border-white/10 bg-panel">
          <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="eyebrow">
                <ShieldCheck aria-hidden="true" size={16} />
                Free vs. direct help
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                Road Rangers, memberships, and direct Orlando roadside assistance.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Some Orlando drivers have a free or membership-backed option. The
                important question is whether that option covers where your car is
                actually stuck right now.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.phoneHref} className="btn btn-primary">
                  <PhoneCall aria-hidden="true" size={18} />
                  Call {site.phoneDisplay}
                </a>
                <Link href="/roadside-assistance-cost-orlando" className="btn btn-secondary">
                  Compare cost options
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {area.freeAssistanceNotes.map((item) => (
                <div key={item.heading} className="card-solid p-6">
                  <h3 className="text-xl font-black text-white">{item.heading}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {area.nearParks ? (
        <section className="border-y border-white/10 bg-panel py-8">
          <div className="container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-road-red" size={20} />
              <p className="max-w-2xl text-base leading-7 text-white/76">
                Visiting the parks or stuck in a rental car near Walt Disney World or
                Universal Orlando? See our dedicated{" "}
                <span className="font-black text-white">theme park roadside help</span> page.
              </p>
            </div>
            <Link href="/theme-park-roadside-assistance" className="btn btn-secondary shrink-0">
              Theme park roadside help
            </Link>
          </div>
        </section>
      ) : null}

      <section className="section border-t border-white/10 bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Local coverage
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Roads and areas we cover in {area.name}.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus focuses on {area.emphasis}. Call from anywhere in{" "}
              {area.county} and share the nearest road, intersection, or landmark so
              help can reach you faster.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {area.coverage.map((spot) => (
              <span
                key={spot}
                className="rounded-md border border-white/12 bg-black/25 px-3 py-2 text-sm font-bold text-white/72"
              >
                {spot}
              </span>
            ))}
          </div>
        </div>
      </section>

      {area.faqs && area.faqs.length > 0 ? (
        <section className="section bg-asphalt">
          <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="eyebrow">
                <CheckCircle2 aria-hidden="true" size={16} />
                Local FAQ
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                Orlando roadside assistance questions.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Straight answers for drivers searching from Orlando before they call.
              </p>
            </div>

            <div className="grid gap-4">
              {area.faqs.map((faq) => (
                <div key={faq.question} className="card-solid p-6">
                  <h3 className="text-xl font-black text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
