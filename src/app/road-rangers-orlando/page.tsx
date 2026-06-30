import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Fuel,
  Info,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const title = "Road Rangers Orlando FL | Free vs 24/7 Roadside Help";
const description =
  "Looking for Road Rangers in Orlando? Learn when free highway assistance may help, the *347 phone path, and when to call RoadZone Plus for 24/7 roadside help.";

const path = "/road-rangers-orlando";

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

const quickAnswer = [
  {
    label: "Road Rangers",
    value: "Try first on covered highways",
    text: "Use this path when you are safely stopped on a covered Central Florida highway or expressway and need limited no-cost help.",
  },
  {
    label: "Phone path",
    value: "Dial *347 (*FHP)",
    text: "Official FDOT and CFX pages point motorists to *347 from a mobile phone for Florida Highway Patrol and Road Ranger help.",
  },
  {
    label: "RoadZone Plus",
    value: "Call direct 24/7",
    text: "Use RoadZone when you are in a parking lot, hotel, apartment, local road, late-night situation, or want a paid local dispatch.",
  },
];

const firstSteps = [
  {
    title: "Get safe first",
    text: "Move fully out of the lane if you can, turn on hazards, and call 911 first if the car is blocking traffic, there is a crash, you see smoke, or you feel unsafe.",
  },
  {
    title: "Check whether you are on a covered highway",
    text: "Road Rangers are built for highway and expressway incidents. If you are in a hotel lot, apartment complex, store lot, neighborhood, or garage, that is usually a private roadside call.",
  },
  {
    title: "Dial *347 if the public option fits",
    text: "If you are on a covered Orlando-area highway or expressway, dial *347 (*FHP) from your mobile phone and ask about Road Ranger assistance.",
  },
  {
    title: "Call RoadZone when coverage does not fit",
    text: "If the free highway option is not available, does not cover your location, or you need direct 24/7 help, call RoadZone Plus with your exact location and vehicle details.",
  },
];

const comparisonRows = [
  {
    option: "Covered highway shoulder",
    roadRangers: "Often the first path to check if you are safely stopped on a covered route.",
    roadZone: "Good backup if you need direct dispatch, are outside patrol coverage, or need help at night.",
  },
  {
    option: "Parking lot, hotel, apartment, workplace, or store",
    roadRangers: "Usually not the right fit because this is off the highway patrol coverage area.",
    roadZone: "Best fit for direct roadside help at the vehicle with no membership or app required.",
  },
  {
    option: "I-Drive, theme parks, resort corridor, or rental car",
    roadRangers: "May help only if the vehicle is actually on a covered expressway or interstate.",
    roadZone: "Built for visitors and local drivers in lots, garages, hotels, restaurants, and resort areas.",
  },
  {
    option: "Late night or urgent direct dispatch",
    roadRangers: "Availability depends on route, hours, weather, and patrol coverage.",
    roadZone: "Available 24/7 for paid roadside help when you want one direct local call.",
  },
];

const whatTheyMayHelpWith = [
  "Flat tire assistance on covered highways",
  "Jump-starts and minor vehicle help",
  "Small emergency fuel assistance",
  "Traffic control and help clearing disabled vehicles",
  "Roadway debris and incident support",
];

const roadZoneSituations = [
  {
    title: "Out of gas away from a covered highway",
    text: "Fuel delivery calls often happen at hotels, apartments, local roads, stores, and parking lots where Road Rangers are not the practical path.",
    href: "/services/fuel-delivery",
    label: "Fuel Delivery",
    Icon: Fuel,
  },
  {
    title: "Dead battery at a home, hotel, work, or garage",
    text: "A dead battery off the highway is usually a direct jumpstart call. RoadZone Plus can come to the vehicle 24/7.",
    href: "/services/jumpstart",
    label: "Jumpstart Service",
    Icon: ShieldCheck,
  },
  {
    title: "Flat tire in a lot or unsafe shoulder",
    text: "If you have a usable spare, RoadZone Plus can help install it. If you are blocking traffic or cannot get safe, call 911 first.",
    href: "/services/tire-change",
    label: "Tire Change",
    Icon: Wrench,
  },
  {
    title: "Keys locked inside the car",
    text: "Lockouts at airports, rentals, hotels, restaurants, and parking lots are usually private roadside calls, not a highway patrol issue.",
    href: "/services/auto-lockout",
    label: "Auto Lockout",
    Icon: CheckCircle2,
  },
];

const orlandoRoutes = [
  "I-4",
  "SR 408",
  "SR 417",
  "SR 414",
  "SR 429",
  "SR 528",
  "SR 451",
  "Turnpike area routes",
];

const sourceLinks = [
  {
    name: "Central Florida Expressway Authority Roadside Assistance",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "CFX lists Road Rangers, *347 (*FHP), covered Central Florida toll roads, daily patrol, and posted patrol hours.",
  },
  {
    name: "FDOT Road Ranger Service Patrol",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "FDOT describes Road Rangers as limited no-cost highway assistance and lists examples such as flat tires, jump-starts, emergency fuel, and incident support.",
  },
  {
    name: "Florida Highway Patrol contact guidance",
    href: "https://www.flhsmv.gov/florida-highway-patrol/contact-fhp/regional-communication-centers/",
    note: "FDOT points motorists here when a mobile carrier does not support the *347 phone path.",
  },
];

const relatedGuides = [
  {
    href: "/roadside-assistance-cost-orlando",
    title: "Roadside Assistance Cost in Orlando",
    text: "Compare free options, memberships, insurance benefits, and direct pay-as-you-go roadside help.",
  },
  {
    href: "/ran-out-of-gas-on-i-4-orlando",
    title: "Ran Out of Gas on I-4",
    text: "Safety steps and fuel delivery options for Orlando highways, toll roads, and expressway shoulders.",
  },
  {
    href: "/orlando-airport-roadside-assistance",
    title: "Airport Roadside Assistance",
    text: "Roadside help for MCO, airport hotels, rental cars, cell phone lots, and nearby routes.",
  },
  {
    href: "/international-drive-roadside-assistance",
    title: "International Drive Roadside Help",
    text: "Help for I-Drive hotels, restaurants, shopping centers, attractions, and local roads.",
  },
];

const faqs = [
  {
    question: "Are Road Rangers free in Orlando?",
    answer:
      "Road Rangers are a public highway assistance program that can provide limited no-cost help on covered highways and expressways. The free option depends on the road, patrol coverage, hours, and the type of problem. It is not the same as a 24/7 private roadside service for parking lots, hotels, apartments, local roads, or garages.",
  },
  {
    question: "What is the Road Rangers Orlando phone number?",
    answer:
      "The public phone path listed by official Florida transportation sources is *347, also shown as *FHP, from a mobile phone. If your carrier does not support *347, FDOT points motorists to Florida Highway Patrol regional communication center contact information.",
  },
  {
    question: "Can Road Rangers help in a parking lot?",
    answer:
      "Usually no. Road Rangers are designed for highway and expressway assistance. If your car is in a hotel lot, apartment community, workplace, shopping center, theme-park-area lot, airport garage, or neighborhood, call RoadZone Plus for direct 24/7 roadside help.",
  },
  {
    question: "Should I call Road Rangers or RoadZone Plus?",
    answer:
      "If you are safely stopped on a covered highway or expressway, Road Rangers may be worth trying first. If you are off the covered highway system, need late-night help, want direct dispatch, or are stranded in a parking lot, hotel, garage, apartment, or local road, call RoadZone Plus.",
  },
  {
    question: "What if I am blocking traffic or feel unsafe?",
    answer:
      "Call 911 first. Roadside service is not a substitute for emergency response when the vehicle is blocking traffic, there has been a crash, there is smoke or fire, or you feel in danger.",
  },
  {
    question: "Can RoadZone Plus help if Road Rangers cannot?",
    answer:
      "Yes. RoadZone Plus is a direct paid roadside service for Orlando drivers who need 24/7 help with jumpstarts, tire changes, fuel delivery, lockouts, battery help, wheel lock removal, and related roadside problems where the public highway option does not fit.",
  },
];

export default function RoadRangersOrlandoPage() {
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@id": businessId,
    },
    mainEntityOfPage: {
      "@id": `${absoluteUrl(path)}#webpage`,
    },
    citation: sourceLinks.map((source) => source.href),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#roadside-service`,
    name: "24/7 Roadside Assistance in Orlando",
    serviceType: "Roadside assistance",
    description:
      "Direct 24/7 roadside assistance in Orlando for drivers who need help beyond public highway patrol coverage, including jumpstarts, tire changes, fuel delivery, lockouts, battery help, and wheel lock removal.",
    url: absoluteUrl(path),
    provider: {
      "@id": businessId,
    },
    areaServed: {
      "@type": "City",
      name: "Orlando, FL",
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site.url}#website`,
      name: site.name,
      url: site.url,
    },
    about: {
      "@id": `${absoluteUrl(path)}#roadside-service`,
    },
    citation: sourceLinks.map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Road Rangers Orlando", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema, serviceSchema, webPageSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Orlando Road Rangers guide
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Road Rangers in Orlando: free highway help vs. 24/7 roadside service.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              If you searched for Road Rangers in Orlando, start with the safe public option:
              on covered highways and expressways, dial{" "}
              <span className="font-black text-white">*347 (*FHP)</span>. If that does not
              cover where your car is actually stuck, RoadZone Plus is the direct 24/7
              roadside call for Orlando parking lots, hotels, local roads, apartments,
              garages, and late-night breakdowns.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/roadside-assistance-cost-orlando" className="btn btn-secondary">
                Compare Cost Options
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle aria-hidden="true" className="mt-1 shrink-0 text-safety-yellow" size={22} />
              <div>
                <p className="text-sm font-black uppercase text-safety-yellow">
                  Important distinction
                </p>
                <p className="mt-3 text-base leading-7 text-white/70">
                  RoadZone Plus is not FDOT, CFX, Florida Highway Patrol, or Road Rangers.
                  This page explains the public highway option and when a direct private
                  roadside service is the better fit.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Need direct help?</p>
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
              <Info aria-hidden="true" size={16} />
              Quick answer
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The right call depends on where the car is stuck.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Road Rangers are useful when the vehicle is on the covered highway system.
              RoadZone Plus is for direct Orlando roadside dispatch when that free option
              does not fit the location, hour, or problem.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {quickAnswer.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-white/42">{item.label}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.value}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              What to do first
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              If you are stranded right now, use this order.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Do not start by comparing prices while traffic is moving around you. Stabilize
              the situation first, then choose the help path that actually covers your
              location.
            </p>
          </div>

          <div className="grid gap-4">
            {firstSteps.map((step, index) => (
              <div key={step.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Orlando coverage check
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Road Rangers are highway assistance, not a replacement for every roadside call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Official sources describe Road Rangers as limited no-cost highway assistance.
              In Central Florida, CFX lists covered toll roads including major expressways,
              and FDOT describes services that can include flat-tire help, jump-starts,
              emergency fuel, and incident support.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">
                Orlando-area roads people usually mean
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {orlandoRoutes.map((road) => (
                  <span
                    key={road}
                    className="rounded-md border border-white/10 bg-black/24 px-3 py-2 text-center text-sm font-black text-white"
                  >
                    {road}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-white/60">
                Always verify the current route, hours, weather restrictions, and dispatch
                availability with the official public source before relying on the free
                program.
              </p>
            </div>

            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">
                Problems Road Rangers may be able to help with
              </h3>
              <div className="mt-5 grid gap-3">
                {whatTheyMayHelpWith.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-route-green" size={18} />
                    <p className="text-sm leading-6 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Road Rangers vs. RoadZone Plus
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Use Road Rangers when the public highway option fits. Call RoadZone when it does not.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              This is the practical split for Orlando drivers and visitors. The wrong call
              can cost you time, especially if your vehicle is not actually on a covered
              highway shoulder.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            {comparisonRows.map((row, index) => (
              <div
                key={row.option}
                className={`grid gap-4 bg-black/20 p-5 lg:grid-cols-[0.78fr_1fr_1fr] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Situation</p>
                  <p className="mt-2 font-black text-white">{row.option}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Road Rangers</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{row.roadRangers}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">RoadZone Plus</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{row.roadZone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="eyebrow">
                <PhoneCall aria-hidden="true" size={16} />
                When to call RoadZone
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                Direct 24/7 help for the places public patrols usually do not cover.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                RoadZone Plus is for the real Orlando situations that happen away from a
                patrol route: hotels, garages, apartments, restaurants, stores, airport
                areas, tourist corridors, local roads, and late-night breakdowns.
              </p>
              <div className="mt-8">
                <a href={site.phoneHref} className="btn btn-primary">
                  <PhoneCall aria-hidden="true" size={18} />
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {roadZoneSituations.map(({ title: itemTitle, text, href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white text-road-black">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-white">{itemTitle}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
                  <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ExternalLink aria-hidden="true" size={16} />
              Public source check
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Official sources used for this guide.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus uses these public pages for context and does not claim to
              operate the public Road Ranger program.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                className="group rounded-md border border-white/10 bg-black/22 p-5 text-sm leading-6 text-white/66 transition hover:border-road-red/60 hover:bg-white/8 hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-2 font-black text-white group-hover:text-red-200">
                  {source.name}
                  <ExternalLink aria-hidden="true" size={15} />
                </span>
                <span className="mt-2 block">{source.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Related Orlando guides
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              More help if the free option does not solve it.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              These pages connect the Road Rangers search to the services and locations most
              likely to turn into a real customer call.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card-solid group p-5 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <h3 className="text-lg font-black text-white">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{guide.text}</p>
                <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  Open guide
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
              <Clock3 aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Road Rangers Orlando questions
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
            <p className="text-sm font-black uppercase text-white/72">Covered highway or not</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              When the public option does not fit, call RoadZone Plus.
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
