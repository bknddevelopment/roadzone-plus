import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { areas, getService, services, site } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  businessId,
  cityAreaSchema,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const title = `${service.name} in Orlando, FL`;
  const description = `${service.summary} Call ${site.phoneDisplay} for 24/7 roadside assistance.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@id": businessId,
    },
    areaServed: cityAreaSchema(areas),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        contactType: "customer service",
      },
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <TimerReset aria-hidden="true" size={16} />
              24/7 {service.shortName}
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              {service.name} in Orlando, FL
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              {service.headline} {service.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/areas" className="btn btn-secondary">
                <MapPin aria-hidden="true" size={18} />
                Check Coverage
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">Best fit</p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              {service.emergencyFit}
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Fast contact</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-2xl font-black text-white">
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="card-solid p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 aria-hidden="true" className="text-route-green" size={24} />
              <h2 className="text-3xl font-black text-white">What this includes</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {service.includes.map((item) => (
                <div key={item} className="flex gap-3 rounded-md bg-white/6 p-4">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-route-green" size={18} />
                  <p className="text-sm leading-6 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-solid p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle aria-hidden="true" className="text-safety-yellow" size={24} />
              <h2 className="text-3xl font-black text-white">When to call</h2>
            </div>
            <div className="mt-6 grid gap-3">
              {service.signs.map((item) => (
                <div key={item} className="flex gap-3 rounded-md bg-white/6 p-4">
                  <AlertTriangle aria-hidden="true" className="mt-0.5 shrink-0 text-safety-yellow" size={18} />
                  <p className="text-sm leading-6 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {service.process && service.process.length > 0 ? (
        <section className="section bg-road-black">
          <div className="container">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <Route aria-hidden="true" size={16} />
                How it works
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                How {service.shortName.toLowerCase()} works.
              </h2>
              {service.intro ? (
                <p className="mt-5 text-base leading-8 text-white/66">{service.intro}</p>
              ) : null}
            </div>

            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.process.map((item, index) => (
                <li key={item.step} className="card-solid flex gap-4 p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-road-red text-base font-black text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">{item.step}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/66">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {(service.details && service.details.length > 0) ||
      (service.safetyTips && service.safetyTips.length > 0) ? (
        <section className="section bg-asphalt">
          <div className="container grid gap-8 lg:grid-cols-2">
            {service.details && service.details.length > 0 ? (
              <div className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <Info aria-hidden="true" className="text-route-green" size={24} />
                  <h2 className="text-3xl font-black text-white">Good to know</h2>
                </div>
                <div className="mt-6 grid gap-4">
                  {service.details.map((item) => (
                    <div key={item.heading} className="rounded-md bg-white/6 p-4">
                      <h3 className="text-base font-black text-white">{item.heading}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {service.safetyTips && service.safetyTips.length > 0 ? (
              <div className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck aria-hidden="true" className="text-safety-yellow" size={24} />
                  <h2 className="text-3xl font-black text-white">While you wait</h2>
                </div>
                <div className="mt-6 grid gap-3">
                  {service.safetyTips.map((tip) => (
                    <div key={tip} className="flex gap-3 rounded-md bg-white/6 p-4">
                      <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-safety-yellow" size={18} />
                      <p className="text-sm leading-6 text-white/70">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Service areas
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              {service.shortName} across Central Florida.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus serves Orlando, Ocoee, Pine Hills, Apopka, Altamonte
              Springs, University, Kissimmee, Celebration, Lake Buena Vista, Clermont,
              Winter Garden, Oviedo, Sanford, and nearby areas.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {areas.slice(0, 12).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-md border border-white/10 bg-black/28 p-4 text-sm font-bold text-white/74 hover:border-road-red/60 hover:text-white"
              >
                {area.name}, FL
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Common questions</h2>
          </div>

          <div className="grid gap-4">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">{service.shortName}</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Need help now? Call RoadZone Plus.
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
