import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Info,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
} from "lucide-react";
import { services, site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const title = "Roadside Assistance Near Disney World Resort";
const description =
  "Stranded near Disney World Resort? RoadZone Plus brings 24/7 roadside help to Disney-area hotels, rental cars, Disney Springs, US 192, and I-4. Call (407) 222-2739.";

const path = "/roadside-assistance-near-disney-world-resort";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
  },
  twitter: {
    title,
    description,
  },
};

const disneySituations = [
  {
    title: "Locked keys in a rental car at the hotel",
    text: "The most common Disney-area call: keys or a fob locked inside a rental at a resort hotel, Disney Springs, or a restaurant on Hotel Plaza Boulevard. RoadZone Plus offers damage-conscious lockout help.",
  },
  {
    title: "Dead battery after a few park days",
    text: "A car that sat at the hotel through several park days can refuse to start, especially in Florida heat. A jumpstart at the parking spot is usually the fix, including for hybrid and EV 12-volt batteries.",
  },
  {
    title: "Flat tire on World Drive, US 192, or I-4",
    text: "Resort-corridor roads move fast and shoulders can be narrow. If you have a usable spare, RoadZone Plus installs it on-site so you are not kneeling next to traffic.",
  },
  {
    title: "Out of gas between the parks and the hotel",
    text: "Unfamiliar roads and a low rental tank are a bad mix. RoadZone Plus brings fuel to the vehicle so you can reach a station instead of walking a resort highway.",
  },
];

const locationGuidance = [
  {
    label: "Disney-area hotels",
    detail:
      "Give the hotel name first, then the lot, garage level, row, or entrance. The Disney World area has hundreds of hotels between Lake Buena Vista, US 192, and Celebration, so the property name matters most.",
  },
  {
    label: "Disney Springs and Lake Buena Vista",
    detail:
      "Use the garage name (Orange, Lime, or Grapefruit), the level and row, or the nearest store or restaurant. Off the garages, use Hotel Plaza Boulevard, Apopka-Vineland Road, or the closest I-4 exit.",
  },
  {
    label: "US 192 in Kissimmee",
    detail:
      "US 192 (Irlo Bronson Memorial Highway) uses posted mile markers along the tourist corridor. Share the mile marker, hotel, restaurant, or cross street plus your direction of travel.",
  },
  {
    label: "I-4 and World Drive",
    detail:
      "On I-4, give the direction and the nearest exit (the Disney exits fall around 62 through 68). On World Drive, Osceola Parkway, or Western Way, name the road, direction, and the last sign or landmark you passed.",
  },
];

const rightNowSteps = [
  {
    title: "Get out of the travel lane",
    text: "If the vehicle can still move, pull fully onto a shoulder, into a hotel lot, or onto a side road. On I-4, US 192, or World Drive, stay buckled inside if the shoulder is narrow, and call 911 first if you are blocking traffic.",
  },
  {
    title: "Pin down your exact location",
    text: "Hotel name, Disney Springs garage and level, US 192 mile marker, I-4 exit, or the nearest cross street. 'Near Disney' covers more than forty square miles — the specific marker is what gets help to you.",
  },
  {
    title: "Name the problem and the vehicle",
    text: "Say whether it is a lockout, dead battery, flat tire, or empty tank, then the year, make, model, and color. For rentals, add the rental company if you know it.",
  },
  {
    title: "Call and stay reachable",
    text: "Call RoadZone Plus, keep your phone on, and stay near the vehicle when it is safe. Resort properties can have several entrances, so the technician may call to confirm the right one.",
  },
];

const corridorAreas = [
  { name: "Lake Buena Vista", slug: "lake-buena-vista", note: "Disney Springs and the hotels right off I-4" },
  { name: "Kissimmee", slug: "kissimmee", note: "the US 192 corridor near Walt Disney World" },
  { name: "Celebration", slug: "celebration", note: "the community next to the parks, off US 192 and World Drive" },
];

const waitingTips = [
  "Turn on your hazard lights and stay well away from passing traffic.",
  "In a hotel lot or garage, wait in a well-lit spot near the vehicle.",
  "On I-4, US 192, or World Drive, stay buckled inside if the shoulder is narrow.",
  "If resort staff or security direct traffic where you are, follow their guidance — the technician can meet you at the safest access point.",
  "Keep your phone charged and reachable so dispatch can confirm your exact spot.",
];

const officialOptions = [
  {
    title: "Walt Disney World Car Care Center",
    text: "Disney lists its Car Care Center for resort automotive support, rental services, and certain roadside needs. If you want the official Disney route first, start there.",
    href: "https://disneyworld.disney.go.com/guest-services/car-care-center/",
  },
  {
    title: "Rental company roadside line",
    text: "If the vehicle is a rental, the rental company may have its own roadside coverage, rules, and charges. Check the key tag or rental agreement before paying twice.",
  },
  {
    title: "RoadZone Plus direct local dispatch",
    text: "Use RoadZone Plus when you need a direct local call for a hotel lot, garage, US 192 stop, I-4 corridor issue, lockout, jumpstart, tire change, or fuel delivery.",
  },
];

const faqs = [
  {
    question: "Is there roadside assistance near Disney World Resort?",
    answer:
      "Yes. RoadZone Plus is a local Orlando roadside service covering the Disney World Resort area, including Lake Buena Vista, Disney Springs, Kissimmee, Celebration, US 192, World Drive, and the I-4 exits around the parks. Call (407) 222-2739 for 24/7 dispatch.",
  },
  {
    question: "Are you part of Walt Disney World?",
    answer:
      "No. RoadZone Plus is an independent local roadside assistance service, not affiliated with Walt Disney World. That is exactly why visitors call: help comes directly to hotels, garages, and roads around the resort area without a membership or app.",
  },
  {
    question: "Can you help with a rental car near Disney?",
    answer:
      "Yes. Lockouts, dead batteries, flat tires, and empty tanks in rental cars are the most common Disney-area calls. Have the year, make, model, color, and rental company ready. For a lost rental key, the rental company usually controls replacements, and RoadZone Plus will tell you that honestly on the call.",
  },
  {
    question: "Can you reach me at a Disney-area hotel or Disney Springs?",
    answer:
      "Yes. RoadZone Plus responds to hotel lots, parking garages, and roads across the resort corridor, including the Disney Springs garages and Hotel Plaza Boulevard. Some resort-operated lots have their own traffic control, so follow staff guidance and the technician will coordinate the safest meeting point.",
  },
  {
    question: "How fast can you get to the Disney area?",
    answer:
      "RoadZone Plus dispatches 24/7 as soon as you call. Travel time depends on where you are and traffic on I-4 and US 192, so the fastest thing you can do is share a precise location: the hotel name, garage level, mile marker, or exit.",
  },
  {
    question: "What does roadside help near Disney cost?",
    answer:
      "It depends on the service, the time of day, and where the vehicle is. RoadZone Plus confirms the price with you on the call before dispatch, with no membership required. The Orlando roadside cost guide shows typical market ranges.",
  },
  {
    question: "My car won't start in a theme park parking lot. What do I do?",
    answer:
      "Note the lot name, section, and row before you leave the car or as soon as you get back to it, then call with the vehicle details. Dead batteries after a long park day are one of the most common calls, and a jumpstart at the parking spot is usually the fix.",
  },
  {
    question: "Do I need a membership or an app?",
    answer:
      "No. RoadZone Plus is call-first roadside help. One call to (407) 222-2739 gets a technician dispatched, whether you live in Orlando or are just visiting for the week.",
  },
];

export default function DisneyWorldRoadsidePage() {
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "What to do if you break down near Disney World Resort",
    description:
      "Immediate steps for visitors stranded near Walt Disney World: get safe, pin down the exact resort-area location, and call for 24/7 roadside help.",
    totalTime: "PT5M",
    step: rightNowSteps.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.text,
      url: `${absoluteUrl(path)}#step-${index + 1}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: "Roadside Assistance Near Disney World Resort",
    serviceType: "Roadside assistance",
    description:
      "24/7 roadside assistance for the Disney World Resort area: rental car lockouts, jumpstarts, fuel delivery, and flat tire help across Lake Buena Vista, Kissimmee, Celebration, US 192, and I-4.",
    url: absoluteUrl(path),
    provider: {
      "@id": businessId,
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Walt Disney World Resort area, FL",
      },
      ...corridorAreas.map((area) => ({
        "@type": "City",
        name: `${area.name}, FL`,
      })),
    ],
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
    { name: "Roadside Assistance Near Disney World Resort", path },
  ]);

  const disneyServices = services.filter((service) =>
    ["jumpstart", "fuel-delivery", "tire-change", "auto-lockout"].includes(service.slug),
  );

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
              <MapPin aria-hidden="true" size={16} />
              Disney World Resort Area
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Roadside Assistance Near Disney World Resort
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              A dead battery at the hotel, keys locked in a rental car, a flat on World
              Drive, or an empty tank on US 192 should not cost you a vacation day.
              RoadZone Plus is a local, call-first roadside service covering the Disney
              World Resort area — Lake Buena Vista, Disney Springs, Kissimmee,
              Celebration, and the I-4 corridor — 24 hours a day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/theme-park-roadside-assistance" className="btn btn-secondary">
                Theme Park Roadside Guide
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">
              Independent roadside help — no membership
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              One call gets a technician headed to your hotel, garage, or roadside spot.
              No app, no annual plan.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Available 24/7</p>
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
              Common Disney-area calls
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What strands visitors around Disney World.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {disneySituations.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle aria-hidden="true" className="shrink-0 text-safety-yellow" size={20} />
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-white/60">
            Locked out of a rental? Start with the full guide to{" "}
            <Link
              href="/locked-keys-in-rental-car-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              locked keys in a rental car in Orlando
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What to do right now
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four steps before help can roll.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The Disney World area is enormous — resort roads, giant lots, garages, and
              highway exits that all look similar at night. These steps keep you safe and
              give dispatch what it needs to route the call directly.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rightNowSteps.map((item, index) => (
              <div key={item.title} id={`step-${index + 1}`} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-safety-yellow">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
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
              Exact-location guide
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              How to describe where you are near Disney.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              &ldquo;Near Disney World&rdquo; is not a location a technician can drive
              to. Use the markers below for the corner of the resort area you are in, and
              share your direction of travel if you are on a road.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {locationGuidance.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Resort-area coverage
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The communities around Disney World Resort.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Most Disney-area breakdowns actually happen in the towns and corridors
              around the parks: hotel lots in Lake Buena Vista, the US 192 strip through
              Kissimmee, and the roads around Celebration.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {corridorAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <div className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                  <h3 className="text-xl font-black text-white">{area.name}, FL</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/64">{area.note}</p>
                <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  View area
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-white/60">
            Also visiting Universal or International Drive? See the wider{" "}
            <Link
              href="/theme-park-roadside-assistance"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              theme park roadside assistance guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Official vs. direct help
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Which roadside number should you call near Disney?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus is independent local roadside help. It is not Walt Disney
              World, a rental company, or a membership plan. The best call depends on
              where the vehicle is, what coverage you already have, and whether you need
              direct dispatch right now.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {officialOptions.map((option) => (
              <div key={option.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{option.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{option.text}</p>
                {option.href ? (
                  <a
                    href={option.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white hover:text-red-200"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Official Disney source
                    <ExternalLink aria-hidden="true" size={15} />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Services near the resort
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What RoadZone Plus brings to the Disney area.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {disneyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <h3 className="text-lg font-black text-white">{service.shortName}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{service.cardText}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white group-hover:text-red-200">
                  <CheckCircle2 aria-hidden="true" size={16} />
                  See details
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              While you wait
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Staying safe until the technician arrives.
            </h2>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {waitingTips.map((tip) => (
              <div key={tip} className="flex gap-3 rounded-md bg-white/6 p-4">
                <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-safety-yellow" size={18} />
                <p className="text-sm leading-6 text-white/70">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Disney-area roadside questions.
            </h2>
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
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">Disney World Resort area</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Stranded near the parks? Call RoadZone Plus.
            </h2>
          </div>
          <a
            href={site.phoneHref}
            className="btn border border-white bg-white text-road-black hover:bg-white/90"
          >
            <PhoneCall aria-hidden="true" size={20} />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
