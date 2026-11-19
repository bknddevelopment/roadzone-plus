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
  "Near Disney World: what Disney's Car Care Center covers until one hour after park closing, and RoadZone Plus 24/7 for lockouts, late nights and US 192 hotels.";

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
      "Use the garage name (Orange, Lime, or Grapefruit) or the surface lot (Mango, Strawberry, or Watermelon), the level and row, or the nearest store or restaurant. Off the garages, use Hotel Plaza Boulevard, Apopka-Vineland Road, or the closest I-4 exit.",
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

const disneyCarCareUrl =
  "https://disneyworld.disney.go.com/guest-services/car-care-center/";
const disneySpringsParkingUrl =
  "https://www.disneysprings.com/disney-springs-map/parking-transportation/";
const disneyCarCarePhone = "(407) 824-0976";
const disneyOfficialRoadsideSummary =
  `Disney says its Car Care Center, ${disneyCarCarePhone}, provides basic roadside services up to one hour after park closing. After that, Disney directs guests to Resort security for support.`;

// Quoted from Disney's Car Care Center page, read November 19, 2026.
// Disney's number is shown as text, never as a tel: link, so a tap on it is
// not counted as a RoadZone phone tap.
const disneyCarCareServices = [
  "Complimentary towing to the Car Care Center, or, if the center is closed, to a destination within Walt Disney World Resort",
  "Fuel assistance",
  "Battery jump start",
  "Flat tire assistance, including inflating the flat tire",
  "Winch out, when the vehicle is stuck in mud",
];

const disneyRepairHours = [
  { days: "Monday to Wednesday, and Friday", hours: "8:00 AM to 6:00 PM" },
  { days: "Thursday", hours: "8:00 AM to 8:30 PM" },
  { days: "Saturday", hours: "8:00 AM to 5:00 PM" },
  { days: "Sunday", hours: "9:00 AM to 5:00 PM" },
];

const whoToCallNearDisney: Array<{
  situation: string;
  call: string;
  detail: string;
  link?: { href: string; label: string };
}> = [
  {
    situation: "On Walt Disney World property, up to one hour after park closing",
    call: `Disney's Car Care Center: ${disneyCarCarePhone}`,
    detail:
      "Disney lists towing to the center, fuel assistance, a battery jump start, flat tire help and a winch out, for automobiles, SUVs and small trucks.",
  },
  {
    situation: "On Disney property, more than one hour after park closing",
    call: "Resort security",
    detail:
      "That is where Disney's Car Care Center page directs guests who need help after its cutoff.",
  },
  {
    situation: "Keys locked inside the car",
    call: `RoadZone Plus: ${site.phoneDisplay}, 24/7`,
    detail:
      "Lockouts are not on the roadside list Disney publishes for its Car Care Center. RoadZone Plus offers damage-conscious lockout help at hotels, garages, and roadside stops.",
    link: {
      href: "/locked-keys-in-rental-car-orlando",
      label: "Locked keys in a rental car: the full guide",
    },
  },
  {
    situation: "A rental car, if you bought the rental company's roadside cover",
    call: "The number on the key tag or rental agreement",
    detail:
      "That cover has its own rules and charges. Check it before you pay a second service for the same job.",
  },
  {
    situation: "A US 192 hotel in Kissimmee, a Celebration address, or I-4",
    call: `RoadZone Plus: ${site.phoneDisplay}, 24/7`,
    detail:
      "Give the hotel name, the US 192 mile marker, or the I-4 direction and exit.",
    link: {
      href: "/road-rangers-orlando",
      label: "Free Road Ranger highway help around Orlando, and when to call a 24/7 service",
    },
  },
  {
    situation: "A crash, an injury, or a car stopped in a travel lane",
    call: "911",
    detail: "Call 911 first. Roadside help comes once everyone is safe.",
  },
];

const disneySources = [
  {
    name: "Walt Disney World: Car Care Center",
    href: disneyCarCareUrl,
    note: "roadside services, the one-hour cutoff, Resort security, location, repair hours",
  },
  {
    name: "Disney Springs: Parking & Transportation map",
    href: disneySpringsParkingUrl,
    note: "garage and surface lot names",
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
      "Note the lot name, section, and row before you leave the car or as soon as you get back to it. Up to one hour after park closing, Disney's own Car Care Center at (407) 824-0976 lists battery jump starts, flat tire help, and fuel assistance; after that, Disney directs guests to Resort security. For keys locked inside, which is not on Disney's list, call RoadZone Plus with the vehicle details. Dead batteries after a long park day are one of the most common calls, and a jumpstart at the parking spot is usually the fix.",
  },
  {
    question: "What is the phone number for Disney's Car Care Center?",
    answer:
      "Disney lists (407) 824-0976 for its Car Care Center, both for roadside help and for repair appointments. It is near the Magic Kingdom auto plaza, beside the Speedway gas station, at 1000 West Car Care Drive, Bay Lake, FL 32830. RoadZone Plus is a separate, independent service at (407) 222-2739.",
  },
  {
    question: "Does Disney's Car Care Center help with lockouts?",
    answer:
      "Lockouts are not on the roadside list Disney publishes for its Car Care Center, which names towing to the center, fuel assistance, battery jump starts, flat tire assistance, and winch outs (read November 19, 2026). For keys locked inside a car near Disney, RoadZone Plus offers lockout help 24/7 at (407) 222-2739; in a rental, also check whether you bought the rental company's roadside cover.",
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
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
              Roadside Assistance Near Disney World Resort
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Stranded at a Disney-area hotel, garage, US 192 stop, or nearby I-4
              corridor? RoadZone Plus is an independent, call-first roadside service
              available 24/7 for lockouts, jumpstarts, tire changes, and fuel delivery.
              RoadZone Plus is not affiliated with Walt Disney World.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="btn btn-primary"
                data-call-cta="disney-hero"
              >
                <PhoneCall aria-hidden="true" size={18} />
                Call RoadZone: {site.phoneDisplay}
              </a>
              <a
                href={disneyCarCareUrl}
                className="btn btn-secondary"
                rel="noreferrer"
                target="_blank"
              >
                Disney&apos;s official option
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            </div>
            <p className="mt-3 text-sm font-bold text-white/58">
              RoadZone is independent local help. No membership or app required.
            </p>
          </div>

          <aside
            aria-label="Choose roadside help near Disney World"
            className="card bg-panel p-6"
          >
            <p className="text-sm font-black uppercase text-safety-yellow">
              Choose the right number
            </p>
            <div className="mt-5">
              <p className="text-lg font-black text-white">Need independent local help?</p>
              <p className="mt-2 text-sm leading-6 text-white/66">
                Call RoadZone for a lockout, jumpstart, tire change, or fuel delivery at
                a Disney-area hotel, garage, US 192 stop, or nearby I-4 corridor.
              </p>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-lg font-black text-white">
                On Walt Disney World property?
              </p>
              <p className="mt-2 text-sm leading-6 text-white/66">
                {disneyOfficialRoadsideSummary}
              </p>
              <a
                href={disneyCarCareUrl}
                className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white hover:text-red-200"
                rel="noreferrer"
                target="_blank"
              >
                View Disney&apos;s official roadside instructions
                <ExternalLink aria-hidden="true" size={15} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="who-to-call"
        aria-labelledby="disney-who-to-call-heading"
        className="section border-b border-white/10 bg-panel"
      >
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Disney&apos;s own roadside help, and what it leaves out
            </div>
            <h2
              id="disney-who-to-call-heading"
              className="mt-5 text-4xl font-black text-white"
            >
              Who to call near Disney, by where the car is and the hour.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Walt Disney World runs its own Car Care Center, and it covers some calls
              on Disney property until one hour after park closing. Lockouts, late
              nights, the hotels along US 192, and I-4 need a different call. RoadZone
              Plus is independent and not affiliated with Walt Disney World; Disney&apos;s
              details below are taken from Disney&apos;s own page.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <ol className="grid gap-3" aria-label="Who to call, situation by situation">
              {whoToCallNearDisney.map((row) => (
                <li key={row.situation} className="card-solid p-5">
                  <p className="text-xs font-black uppercase text-safety-yellow">
                    {row.situation}
                  </p>
                  <p className="mt-2 text-lg font-black text-white">{row.call}</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{row.detail}</p>
                  {row.link ? (
                    <Link
                      href={row.link.href}
                      className="mt-2 inline-flex py-1.5 text-sm font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                    >
                      {row.link.label}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ol>

            <aside
              aria-labelledby="disney-car-care-heading"
              className="card-solid h-fit p-6"
            >
              <h3
                id="disney-car-care-heading"
                className="text-xl font-black text-white"
              >
                Disney&apos;s Car Care Center, as Disney lists it
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Roadside line: <span className="font-black text-white">{disneyCarCarePhone}</span>.
                Basic roadside services for automobiles, SUVs, and small trucks, up to one
                hour after park closing:
              </p>
              <ul className="mt-4 grid gap-2">
                {disneyCarCareServices.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-white/72">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-route-green"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-md bg-white/6 p-3 text-sm font-bold leading-6 text-white/80">
                Not on Disney&apos;s list: lockouts (keys locked inside).
              </p>
              <p className="mt-4 text-sm leading-6 text-white/66">
                <span className="font-black text-white">Where:</span> near the Magic
                Kingdom auto plaza, beside the Speedway gas station, 1000 West Car Care
                Drive, Bay Lake, FL 32830.
              </p>
              <div className="mt-4 text-sm leading-6 text-white/66">
                <p>
                  <span className="font-black text-white">Repairs</span> are charged and
                  booked by phone at the same number, in these hours:
                </p>
                <ul className="mt-2 grid gap-1">
                  {disneyRepairHours.map((slot) => (
                    <li key={slot.days} className="flex gap-2">
                      <Clock3
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-white/50"
                        size={14}
                      />
                      <span>
                        {slot.days}: {slot.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="btn btn-primary"
              data-call-cta="disney-who-to-call"
            >
              <PhoneCall aria-hidden="true" size={18} />
              Call RoadZone: {site.phoneDisplay}, 24 hours
            </a>
            <Link href="/locked-keys-in-rental-car-orlando" className="btn btn-secondary">
              Locked out of a rental?
            </Link>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs font-black uppercase text-white/50">
              Sources (read November 19, 2026)
            </p>
            <ul className="mt-3 grid gap-2">
              {disneySources.map((source) => (
                <li key={source.href} className="text-sm leading-6 text-white/62">
                  <a
                    href={source.href}
                    className="inline-flex items-center gap-1 font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {source.name}
                    <ExternalLink aria-hidden="true" size={13} />
                  </a>
                  : {source.note}
                </li>
              ))}
            </ul>
          </div>
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
            data-call-cta="disney-final"
          >
            <PhoneCall aria-hidden="true" size={20} />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
