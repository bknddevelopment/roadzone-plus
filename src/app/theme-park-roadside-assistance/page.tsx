import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
} from "lucide-react";
import { services, site } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  businessId,
} from "@/lib/seo";

const title = "Theme Park Roadside Assistance Orlando";
const description =
  "Roadside assistance near Disney, Universal, I-4, hotels, and rental cars: jumpstarts, lockouts, fuel delivery, and flat tire help. Call (407) 222-2739.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/theme-park-roadside-assistance",
  },
  openGraph: {
    title,
    description,
    url: "/theme-park-roadside-assistance",
  },
  twitter: {
    title,
    description,
  },
};

const visitorSituations = [
  {
    title: "Locked keys in a rental car",
    text: "It happens at hotels, parking lots, and rest stops. RoadZone Plus offers damage-conscious lockout help so a rental does not derail your trip.",
  },
  {
    title: "Out of gas on I-4 or US 192",
    text: "An unfamiliar route and a low tank are a common mix for visitors. We bring fuel to your vehicle so you can reach the next station.",
  },
  {
    title: "Dead battery at the hotel",
    text: "A car that sat through a few park days can refuse to start. We jumpstart it where it is parked, including most hybrids and EVs.",
  },
  {
    title: "Flat tire near the parks",
    text: "If you have a usable spare, we install it on-site so you are not waiting on a busy shoulder near the attractions.",
  },
];

const corridorAreas = [
  { name: "Lake Buena Vista", slug: "lake-buena-vista", note: "Disney Springs and the hotels right off I-4" },
  { name: "Kissimmee", slug: "kissimmee", note: "the US 192 corridor near Walt Disney World" },
  { name: "Celebration", slug: "celebration", note: "the master-planned community next to the parks" },
];

const rightNowSteps = [
  {
    title: "Move to the safest place you can",
    text: "If you are on a ramp, resort exit, or park road, get fully out of the travel lane if the vehicle can still move. Turn on your hazard lights and stay clear of traffic.",
  },
  {
    title: "Identify the exact lot, garage, hotel, or road",
    text: "Use the parking section, garage level, hotel name, attraction, road name, exit, or nearest landmark. 'Universal garage level 3' is faster than 'near Universal.'",
  },
  {
    title: "Confirm the problem and vehicle",
    text: "Say whether you need fuel, a jumpstart, a lockout, a tire change, or wheel lock help, then share the year, make, model, and color of the vehicle.",
  },
  {
    title: "Call and keep your phone reachable",
    text: "Call RoadZone Plus, stay near the vehicle when it is safe, and keep your phone on so the technician can confirm the entrance, row, or pickup point.",
  },
];

const locationDetails = [
  {
    label: "Disney-area lots",
    detail:
      "Use the park, resort, Disney Springs garage, lot name, row, level, tram stop, or Hotel Plaza Boulevard landmark if you know it.",
  },
  {
    label: "Universal and I-Drive",
    detail:
      "Share the garage level, hotel, attraction, International Drive cross street, Kirkman Road, Major Boulevard, or I-4 exit when you call.",
  },
  {
    label: "US 192 and Kissimmee",
    detail:
      "Use the hotel, vacation-home community, mile marker, store, restaurant, or US 192 cross street so the technician does not lose time in the corridor.",
  },
  {
    label: "Rental vehicles",
    detail:
      "Have the rental company, vehicle color, and license plate ready if you can see it. For lockouts, tell us where the key or fob is inside the car.",
  },
];

const faqs = [
  {
    question: "Do you help with rental cars?",
    answer:
      "Yes. Lockouts, dead batteries, flat tires, and empty tanks happen in rental cars all the time, especially for visitors. Have the year, make, model, and your exact location ready when you call so the technician arrives prepared.",
  },
  {
    question: "Do you cover the area around Disney and Universal?",
    answer:
      "Yes. RoadZone Plus serves the resort corridor, including Lake Buena Vista, Kissimmee, and Celebration, plus the routes along I-4 and US 192 that visitors travel most.",
  },
  {
    question: "I am visiting and do not have local roadside coverage. Can you still help?",
    answer:
      "Yes. RoadZone Plus is a direct, call-first roadside service with no membership required. One call gets a technician dispatched, whether you live here or are just visiting.",
  },
  {
    question: "What should I have ready when I call?",
    answer:
      "Share your exact location (a hotel name, exit number, attraction, or mile marker), the year, make, model, and color of the vehicle, and what is wrong, so the team can respond accurately.",
  },
  {
    question: "Are you available late at night?",
    answer:
      "Yes. RoadZone Plus operates 24 hours a day, seven days a week, including nights, weekends, and holidays.",
  },
  {
    question: "How much does roadside help near the parks cost?",
    answer:
      "Costs vary by the service you need and where you are, so RoadZone Plus confirms the details with you on the call rather than quoting a flat rate online. There is no membership required to get help.",
  },
  {
    question: "What if I am not sure exactly where I am near the parks?",
    answer:
      "Share whatever you can: the hotel name, a park or attraction, the parking lot, an exit number, or a nearby landmark. The dispatcher can work from that to direct the technician to you.",
  },
];

const waitingTips = [
  "Pull as far off the road as you safely can and turn on your hazard lights.",
  "Note the nearest hotel, attraction, exit, or mile marker to share when you call.",
  "Stay buckled inside the vehicle if you are stopped on a busy shoulder or ramp.",
  "Keep your phone reachable so the technician can confirm your exact spot.",
];

export default function ThemeParkRoadsidePage() {
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
    name: "What to do if you need roadside assistance near Orlando theme parks",
    description:
      "Immediate steps for visitors and locals stranded near Walt Disney World, Universal Orlando, US 192, International Drive, or the resort corridor.",
    totalTime: "PT5M",
    step: rightNowSteps.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.text,
      url: `${absoluteUrl("/theme-park-roadside-assistance")}#step-${index + 1}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl("/theme-park-roadside-assistance")}#service`,
    name: "Theme Park Area Roadside Assistance",
    serviceType: "Roadside assistance",
    description:
      "24/7 roadside assistance for visitors and locals near Orlando's theme parks, including rental car lockouts, fuel delivery, jumpstarts, and flat tire help.",
    url: absoluteUrl("/theme-park-roadside-assistance"),
    provider: {
      "@id": businessId,
    },
    areaServed: corridorAreas.map((area) => ({
      "@type": "City",
      name: `${area.name}, FL`,
    })),
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
    { name: "Theme Park Roadside Assistance", path: "/theme-park-roadside-assistance" },
  ]);

  const priorityServices = services.filter((service) => service.priority);

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
              Disney • Universal • Resort Area
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Roadside Assistance Near Orlando&apos;s Theme Parks
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              A flat tire, a dead battery, an empty tank, or keys locked in a rental car
              should not cost you a day at the parks. RoadZone Plus brings 24/7 roadside
              help to visitors and locals near Walt Disney World, Universal Orlando, and
              the surrounding resort corridor.
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
            <p className="text-sm font-black uppercase text-safety-yellow">No membership needed</p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              One call gets a technician dispatched — whether you live here or are just
              visiting.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Available 24/7</p>
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
          <div className="max-w-3xl">
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              Common situations
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What trips up visitors near the parks.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {visitorSituations.map((item) => (
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
            Locked keys in a rental car is the most common one — see our full guide to{" "}
            <Link href="/locked-keys-in-rental-car-orlando" className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200">locked keys in a rental car in Orlando</Link>.
          </p>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Resort corridor
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Coverage across the theme park corridor.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus serves the roads visitors use most — I-4, US 192, and the
              International Drive area near Universal Orlando — plus the resort-area
              communities below.
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
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What to do right now
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Get the exact location before you call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The theme-park corridor has giant lots, garages, resort roads, and
              confusing entrances. These details help RoadZone Plus route the call
              directly instead of searching the wrong side of the property.
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {locationDetails.map((item) => (
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
              <ShieldCheck aria-hidden="true" size={16} />
              Services we bring to you
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Help for the most common rental and travel problems.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priorityServices.map((service) => (
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
              Staying safe while help is on the way.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Park roads, resort exits, and I-4 ramps stay busy. A few simple steps keep
              you safe until the technician arrives.
            </p>
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
            <h2 className="mt-5 text-4xl font-black text-white">Visitor questions</h2>
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
            <p className="text-sm font-black uppercase text-white/72">Near the parks</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Stuck near the theme parks? Call RoadZone Plus.
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
