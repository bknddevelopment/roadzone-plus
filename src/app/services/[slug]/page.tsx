import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  CheckCircle2,
  DollarSign,
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

const priorityAreaSlugsByService: Record<string, string[]> = {
  jumpstart: ["orlando", "university", "sanford"],
  "tire-change": ["orlando", "kissimmee", "winter-garden"],
  "fuel-delivery": ["orlando", "lake-buena-vista", "kissimmee"],
  "auto-lockout": ["orlando", "lake-buena-vista", "celebration"],
  "wheel-lock-removal": ["orlando", "ocoee", "winter-garden"],
  "battery-replacement": ["orlando", "altamonte-springs", "university"],
  "smart-key-programming": ["orlando", "kissimmee", "lake-buena-vista"],
};

const serviceSeo: Partial<
  Record<string, { title: string; heading: string; description: string }>
> = {
  jumpstart: {
    title: "Jump Start Service Orlando FL | 24 Hour Battery Help",
    heading: "Jump start service in Orlando, FL",
    description:
      "Need jump start service in Orlando, FL? RoadZone Plus provides 24/7 battery boost help at homes, hotels, parking lots, work, and roadside locations.",
  },
  "fuel-delivery": {
    title: "Fuel Delivery Orlando FL | 24 Hour Gas Delivery",
    heading: "Fuel delivery in Orlando, FL",
    description:
      "Need fuel delivery in Orlando, FL? RoadZone Plus brings emergency gas to stranded drivers on roads, at hotels, parking lots, apartments, and workplaces.",
  },
  "auto-lockout": {
    title: "Car Lockout Service Orlando FL | Locked Keys Help",
    heading: "Car lockout service in Orlando, FL",
    description:
      "Locked keys in car in Orlando? Call RoadZone Plus for 24/7 car lockout service at homes, hotels, parking lots, work, and roadside stops.",
  },
  "battery-replacement": {
    title: "Car Battery Replacement Orlando FL | Mobile Battery Help",
    heading: "Car battery replacement help in Orlando, FL",
    description:
      "Need car battery replacement help in Orlando, FL? RoadZone Plus helps when a jumpstart is not enough and your battery keeps failing in Central Florida heat.",
  },
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

  const seo = serviceSeo[service.slug];
  const title = seo?.title ?? `${service.name} in Orlando, FL`;
  const description =
    seo?.description ??
    `${service.summary} Call ${site.phoneDisplay} for 24/7 roadside assistance.`;

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

  const priorityAreas = (priorityAreaSlugsByService[service.slug] ?? ["orlando"])
    .map((areaSlug) => areas.find((area) => area.slug === areaSlug))
    .filter((area): area is (typeof areas)[number] => Boolean(area));
  const heading = serviceSeo[service.slug]?.heading ?? `${service.name} in Orlando, FL`;

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
              {heading}
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

      {service.slug === "wheel-lock-removal" || service.slug === "tire-change" ? (
        <section className="section border-y border-white/10 bg-panel">
          <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <Info aria-hidden="true" size={16} />
                Lost wheel lock key?
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                If the wheel cannot come off, start here.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                A missing wheel lock key can stop a tire change before it starts. Read the Orlando guide on what to check, when to stop forcing the lock, and when to call RoadZone Plus.
              </p>
            </div>
            <Link href="/lost-wheel-lock-key-orlando" className="btn btn-primary shrink-0">
              Read the Guide
            </Link>
          </div>
        </section>
      ) : null}

      {service.slug === "auto-lockout" ? (
        <section className="section border-y border-white/10 bg-panel">
          <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <Info aria-hidden="true" size={16} />
                Locked keys in the car?
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                Start with the Orlando car lockout guide.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                The guide covers what to check before forcing the door, what to tell dispatch,
                and when a car lockout becomes an emergency in Florida heat.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/car-lockout-service-orlando" className="btn btn-primary">
                Car Lockout Guide
              </Link>
              <Link href="/locked-keys-in-rental-car-orlando" className="btn btn-secondary">
                Rental Car Lockout
              </Link>
            </div>
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

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {priorityAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card-solid group block p-5 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <p className="text-xs font-black uppercase text-route-green">Priority area</p>
                <h3 className="mt-3 text-xl font-black text-white">{area.name}, FL</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{area.emphasis}</p>
                <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  View {area.name} coverage
                </span>
              </Link>
            ))}
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

      <section className="section bg-asphalt">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <DollarSign aria-hidden="true" size={16} />
              What it costs
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Wondering what {service.shortName.toLowerCase()} costs in Orlando?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              See typical roadside assistance cost in Orlando, the free options worth
              checking first, and why RoadZone Plus confirms your exact price on the call —
              with no membership.
            </p>
          </div>
          <Link href="/roadside-assistance-cost-orlando" className="btn btn-primary shrink-0">
            View Orlando Cost Guide
          </Link>
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
