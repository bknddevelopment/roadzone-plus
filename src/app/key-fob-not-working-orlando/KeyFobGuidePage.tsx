// Page-only layout for /key-fob-not-working-orlando (upgrade in place, 2026-11-28).
// It follows components/FocusedRoadsidePage.tsx, which protected pages also use and which stays unchanged.
// The three images are already on the site with licence records (MIT job key-fob-upgrade-2026-11-28, image-license.md).
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  KeyRound,
  MapPin,
  PhoneCall,
  Radio,
  ShieldCheck,
  Thermometer,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";
import {
  detectionCauses,
  faqs,
  heatNote,
  keyFobPage,
  makerSteps,
  relatedLinks,
  sourceOrder,
  sources,
  whenToCall,
} from "./content";

export function KeyFobGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
    "@id": `${absoluteUrl(keyFobPage.href)}#service`,
    name: keyFobPage.title,
    serviceType: keyFobPage.serviceType,
    description: keyFobPage.description,
    url: absoluteUrl(keyFobPage.href),
    provider: {
      "@id": businessId,
    },
    areaServed: {
      "@type": "Place",
      name: keyFobPage.areaServed,
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
    { name: "Key fob not working", path: keyFobPage.href },
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
              <KeyRound aria-hidden="true" size={16} />
              {keyFobPage.eyebrow}
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              {keyFobPage.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{keyFobPage.answer}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary" data-call-cta="keyfob-hero">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <a href="#backup-start" className="btn btn-secondary">
                Backup start by maker
              </a>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <figure>
              <Image
                src="/visuals/car-key-cost/push-button-start.webp"
                alt="Close-up of a round START STOP push-button ignition on a car dashboard"
                width={1200}
                height={675}
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                A push-button start. In the Toyota, Honda and Nissan manuals and on one Hyundai model
                page read for this guide, the backup start uses this button with the fob.
              </figcaption>
            </figure>
            <p className="mt-6 text-sm font-black uppercase text-safety-yellow">
              Do not force the door or ignition
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              Try your maker&apos;s backup start first. Forcing a door or the start button does not
              fix a fob.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Call direct, 24 hours</p>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-2xl font-black text-white"
                data-call-cta="keyfob-aside"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="backup-start"
        className="section border-b border-white/10 bg-panel"
        aria-labelledby="backup-start-heading"
      >
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <CheckCircle2 aria-hidden="true" size={16} />
              From the makers&apos; own manuals
            </div>
            <h2 id="backup-start-heading" className="mt-5 text-4xl font-black text-white">
              How to start the car when the fob is weak or dead, maker by maker.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              These are the steps each maker publishes, read on {keyFobPage.readOn}. Your own
              owner&apos;s manual is the final word for your model and year.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {makerSteps.map((maker) => (
              <li key={maker.maker} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-safety-yellow">{maker.maker}</p>
                <h3 className="mt-2 text-lg font-black leading-7 text-white">{maker.where}</h3>
                <ol className="mt-4 grid gap-2 text-sm leading-6 text-white/72">
                  {maker.steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-black text-route-green">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm leading-6 text-white/60">{maker.note}</p>
                <p className="mt-3 text-xs leading-5 text-white/48">
                  Source:{" "}
                  {maker.sourceKeys.map((key, index) => (
                    <span key={key}>
                      {index > 0 ? "; " : null}
                      <a
                        href={sources[key].href}
                        className="underline decoration-white/30 underline-offset-2 hover:text-white"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {sources[key].name}
                      </a>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn btn-primary" data-call-cta="keyfob-steps">
              <PhoneCall aria-hidden="true" size={18} />
              Still not starting? Call {site.phoneDisplay}
            </a>
            <Link href="/services/smart-key-programming" className="btn btn-secondary">
              Smart Key Programming
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-asphalt" aria-labelledby="not-detected-heading">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Radio aria-hidden="true" size={16} />
              Key not detected
            </div>
            <h2 id="not-detected-heading" className="mt-5 text-4xl font-black text-white">
              Why the car stops reading the fob.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Start with the fob battery. If the battery is not the problem, Hyundai&apos;s and
              Toyota&apos;s manuals name the other causes below.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detectionCauses.map((cause) => (
              <div key={cause.heading} className="card-solid p-6">
                <h3 className="text-lg font-black text-white">{cause.heading}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{cause.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <figure>
              <Image
                src="/visuals/car-lockout-cost/sunlit-car-interior.webp"
                alt="Sunlight across the dashboard and steering wheel inside a closed car"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                Sun on the dashboard of a closed car.
              </figcaption>
            </figure>
            <div className="rounded-md bg-white/6 p-6">
              <div className="eyebrow">
                <Thermometer aria-hidden="true" size={16} />
                Heat
              </div>
              <h3 className="mt-4 text-2xl font-black text-white">{heatNote.heading}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{heatNote.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel" aria-labelledby="when-heading">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              When to call
            </div>
            <h2 id="when-heading" className="mt-5 text-4xl font-black text-white">
              What to do next, by what the fob is doing.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Give the year, make, model, key type and the exact dashboard message when you call.
              Those details decide whether the fix happens where the car is parked.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {whenToCall.map((row) => (
              <li key={row.situation} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-safety-yellow">If</p>
                <h3 className="mt-2 text-lg font-black leading-7 text-white">{row.situation}</h3>
                <p className="mt-4 flex gap-3 text-base font-black leading-7 text-white">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-route-green"
                    size={18}
                  />
                  <span>{row.action}</span>
                </p>
                <p className="mt-3 text-sm leading-6 text-white/68">{row.detail}</p>
              </li>
            ))}
          </ol>

          <figure className="mt-10 max-w-3xl">
            <Image
              src="/visuals/car-lockout-cost/car-key-with-remote-head.webp"
              alt="A hand holding out a car key with a black remote head and a metal blade"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
            <figcaption className="mt-3 text-sm leading-6 text-white/56">
              A key with a remote head and a metal blade. Tell dispatch where yours is: in your
              hand, locked inside, or lost.
            </figcaption>
          </figure>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn btn-primary" data-call-cta="keyfob-when">
              <PhoneCall aria-hidden="true" size={18} />
              Call {site.phoneDisplay}, 24 hours
            </a>
            <Link href="/services/auto-lockout" className="btn btn-secondary">
              Auto Lockout Service
            </Link>
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
            {relatedLinks.map((link) => (
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
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Key fob questions.</h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-10 border-t border-white/10 pt-6">
          <p className="text-xs font-black uppercase text-white/48">
            Sources (read {keyFobPage.readOn})
          </p>
          <ol className="mt-3 grid gap-2 text-xs leading-5 text-white/56">
            {sourceOrder.map((key) => (
              <li key={key}>
                <a
                  href={sources[key].href}
                  className="underline decoration-white/30 underline-offset-2 hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {sources[key].name}
                </a>
                : {sources[key].note}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">{keyFobPage.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Fob still not working? Call RoadZone Plus.
            </h2>
          </div>
          <a
            href={site.phoneHref}
            className="btn border border-white bg-white text-road-black hover:bg-white/90"
            data-call-cta="keyfob-footer"
          >
            <PhoneCall aria-hidden="true" size={20} />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
