import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
} from "lucide-react";
import type { FocusedRoadsidePage as FocusedRoadsidePageData } from "@/data/focusedPages";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

export function FocusedRoadsidePage({ page }: { page: FocusedRoadsidePageData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: page.heading,
    description: page.description,
    totalTime: "PT5M",
    step: page.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
      url: `${absoluteUrl(page.href)}#step-${index + 1}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(page.href)}#service`,
    name: page.title,
    serviceType: page.serviceType,
    description: page.description,
    url: absoluteUrl(page.href),
    provider: {
      "@id": businessId,
    },
    areaServed: {
      "@type": "Place",
      name: page.areaServed,
    },
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
    { name: page.heading, path: page.href },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, howToSchema, serviceSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              {page.eyebrow}
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              {page.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href={page.primaryServiceHref} className="btn btn-secondary">
                {page.primaryServiceLabel}
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">
              {page.alertLabel}
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              {page.alertText}
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Call direct</p>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-2xl font-black text-white"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              What to do right now
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Work through these steps before the call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              These steps are written for the first few minutes of a roadside problem:
              stay safe, identify the issue, and give dispatch the right information.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.steps.map((step, index) => (
              <div key={step.title} id={`step-${index + 1}`} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-safety-yellow">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What to tell dispatch
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Give RoadZone Plus the details that shorten the call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The right details help the technician bring the right equipment and reach
              the correct entrance, shoulder, lot, or garage.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.dispatchDetails.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Related help
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              RoadZone pages that connect to this problem.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {page.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <h3 className="text-xl font-black text-white">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{link.text}</p>
                <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  View page
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={page.secondaryHref} className="btn btn-secondary">
              {page.secondaryLabel}
            </Link>
            <Link href="/roadside-assistance-cost-orlando" className="btn btn-secondary">
              Roadside Cost Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Common questions.</h2>
          </div>

          <div className="grid gap-4">
            {page.faqs.map((faq) => (
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
            <p className="text-sm font-black uppercase text-white/72">{page.eyebrow}</p>
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
