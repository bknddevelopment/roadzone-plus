import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Info,
  MapPin,
  PhoneCall,
  Route,
  Scale,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/florida-move-over-law";
const title = "Florida Move Over Law: Who It Covers, Fine and Points";
const description =
  "Florida's Move Over law: leave the lane or slow 20 mph under the limit. Disabled cars count since 2024. $30 base; 3 points, or 4 if it results in a crash.";
const updatedIso = "2026-11-08";
const updatedLabel = "November 8, 2026";
const heroImage = "/visuals/move-over/road-ranger-move-over-sign.webp";
const heroAlt =
  "A Florida Road Ranger truck on the right shoulder of Interstate 10 with an amber sign on its roof reading MOVE OVER, with traffic in the lanes ahead";

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
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 1067,
        alt: heroAlt,
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every rule, date, fine and point count on this page comes from a page in
// `sources`, read on the date above. The statute, the 2023 session law and the
// penalty sections are primary sources. Clerk figures are examples and are
// labelled by county. RoadZone Plus facts are limited to what the site's
// tire-change service page already says: no prices, arrival times or towing.
const sources = {
  fs316126: {
    name: "Florida Statutes 316.126, the Move Over Act, 2026 edition (read November 8, 2026)",
    short: "Fla. Stat. 316.126",
    href: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.126.html",
    note: "Paragraph (1)(b) lists the covered vehicles and what drivers must do. Paragraph (1)(a) covers an emergency vehicle approaching you. Subsection (6) makes a violation of subsection (1) a noncriminal moving violation. The section's history ends at chapter 2023-197.",
  },
  ch2023197: {
    name: "Laws of Florida, Chapter 2023-197, CS/CS/CS/HB 425 (read November 8, 2026)",
    short: "Ch. 2023-197, Laws of Florida",
    href: "https://laws.flrules.org/2023/197",
    note: "Section 1 adds disabled motor vehicles to s. 316.126(1)(b), effective January 1, 2024. Section 2 reenacts s. 318.18(2)(d), also effective January 1, 2024. Approved by the Governor June 5, 2023.",
  },
  fs31818: {
    name: "Florida Statutes 318.18, Amount of penalties, 2026 edition (read November 8, 2026)",
    short: "Fla. Stat. 318.18",
    href: "https://www.flsenate.gov/Laws/Statutes/2026/318.18",
    note: "Paragraph (2)(d) places violations of s. 316.126(1)(b) in the $30 tier. Paragraph (3)(a) sets $60 for other moving violations. Later subsections add court costs, surcharges and fees.",
  },
  fs32227: {
    name: "Florida Statutes 322.27, driver license point system, 2026 edition (read November 8, 2026)",
    short: "Fla. Stat. 322.27",
    href: "https://www.flsenate.gov/Laws/Statutes/2026/322.27",
    note: "Paragraph (3)(d)8 assigns 3 points to all other moving violations. Paragraph (3)(d)9 assigns 4 points to a moving violation in that paragraph, other than unlawful speed or unlawful use of a wireless communications device, that results in a crash. Paragraphs (3)(a) to (c) set suspensions at 12 points in 12 months, 18 in 18 months and 24 in 36 months.",
  },
  fs31814: {
    name: "Florida Statutes 318.14, Noncriminal traffic infractions, 2026 edition (read November 8, 2026)",
    short: "Fla. Stat. 318.14",
    href: "https://www.flsenate.gov/Laws/Statutes/2026/318.14",
    note: "Subsection (4) lets a person who does not elect to appear pay the civil penalty by mail or in person, or enter a payment plan, within 30 days after the citation is issued. Doing so is deemed an admission of the infraction. Subsection (9) lets a driver without a commercial license elect a driver improvement course: adjudication withheld and no points, not within 12 months of a prior election, no more than eight in a lifetime.",
  },
  fs31819: {
    name: "Florida Statutes 318.19, Infractions requiring a mandatory hearing, 2026 edition (read November 8, 2026)",
    short: "Fla. Stat. 318.19",
    href: "https://www.flsenate.gov/Laws/Statutes/2026/318.19",
    note: "A person cited for an infraction that results in a crash causing the death or serious bodily injury of another must appear at the scheduled hearing. The options in s. 318.14(2), (4) and (9), which include paying without a hearing and traffic school, are not available.",
  },
  fs316003: {
    name: "Florida Statutes 316.003, Definitions, 2026 edition (read November 8, 2026)",
    short: "Fla. Stat. 316.003",
    href: "https://www.flsenate.gov/Laws/Statutes/2026/316.003",
    note: "Defines authorized emergency vehicles, including fire department vehicles, police vehicles and ambulances.",
  },
  fs3162397: {
    name: "Florida Statutes 316.2397, Certain lights prohibited, 2026 edition (read November 8, 2026)",
    short: "Fla. Stat. 316.2397",
    href: "https://www.flsenate.gov/Laws/Statutes/2026/316.2397",
    note: "Paragraph (7)(a) allows flashing lights to indicate that a vehicle is lawfully stopped or disabled upon the highway.",
  },
  flhsmv: {
    name: "Florida Highway Safety and Motor Vehicles: Move Over, Florida! (read November 8, 2026)",
    short: "FLHSMV Move Over",
    href: "https://www.flhsmv.gov/safety-center/driving-safety/move-over/",
    note: "Gives January 1, 2025 for the expansion to vehicles with hazard lights, flares or signage. Reports 205 crashes and more than 17,500 citations in 2024 for failing to move over.",
  },
  orangeClerk: {
    name: "Orange County Clerk of Courts: Traffic Ticket Options (read November 8, 2026)",
    short: "Orange County Clerk",
    href: "https://www.myorangeclerk.com/Divisions/Traffic/Traffic-Ticket-Options",
    note: "Make your election within 30 calendar days of receiving a ticket. Traffic school: once in 12 months, no more than eight times in a lifetime, not for commercial license holders. At a hearing, a penalty of up to $500.00 plus court costs.",
  },
  pascoClerk: {
    name: "Pasco County Clerk: Traffic Fine Schedule (read November 8, 2026)",
    short: "Pasco County Clerk",
    href: "https://pascoclerk.com/302/Traffic-Fine-Schedule",
    note: "Lists Move Over Act/Failure to Slow Down for Emergency Vehicle/Wrecker, 316.126.1B, at $134, and Move Over Act/Failure to Yield to Emergency Vehicle at $164.",
  },
  fdotFaq: {
    name: "FDOT: Road Ranger Service Patrol, Frequently Asked Questions (read November 8, 2026)",
    short: "FDOT Road Ranger FAQ",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/faq.htm",
    note: "Dial *347. Availability varies across the state. Motorists are not charged. Patrols should locate you within 15 to 30 minutes unless detained by an emergency. Move out of the travel lane if you can, then stay inside the vehicle. If the repair is beyond them, the FHP contacts a towing service at the motorist's expense.",
  },
  fdotHome: {
    name: "FDOT: Road Ranger Service Patrol (read November 8, 2026)",
    short: "FDOT Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "Limited no-cost highway assistance. Patrols congested areas and high incident locations of the freeway. Services can include changing flat tires, jump-starts, emergency fuel and clearing disabled vehicles from travel lanes.",
  },
  tpRoadRangers: {
    name: "Florida's Turnpike Enterprise: Road Rangers Safety Patrol (read November 8, 2026)",
    short: "Florida's Turnpike, Road Rangers",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free assistance 365 days a year by dialing *347, including tire changes with the vehicle's spare. 24 hours a day on the Turnpike mainline, Milepost 0 to 308.",
  },
  cfx: {
    name: "Central Florida Expressway Authority: Roadside Assistance (read November 8, 2026)",
    short: "CFX Roadside Assistance",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Dial *347 and ask for a Road Ranger. Free assistance on central Florida toll roads including SR 408. Seven days a week, 6:00 AM to 10:00 PM.",
  },
  gao: {
    name: "U.S. Government Accountability Office: GAO-21-166, December 17, 2020 (read November 8, 2026)",
    short: "GAO-21-166",
    href: "https://www.gao.gov/products/gao-21-166",
    note: "Reports that all states and the District of Columbia have enacted Move Over laws.",
  },
};

type SourceKey = keyof typeof sources;
type Cite = SourceKey | { key: SourceKey; pin: string };

const roadRows: Array<{
  road: string;
  rule: string;
  otherwise: string;
  cites: Cite[];
}> = [
  {
    road: "Interstate or other highway with two or more lanes going your way",
    rule: "Leave the lane closest to the stopped vehicle, as soon as it is safe.",
    otherwise: "If you cannot safely change lanes, slow to the speed in the chart below.",
    cites: [{ key: "fs316126", pin: "(1)(b)1." }],
  },
  {
    road: "Two-lane road",
    rule: "Slow to the speed in the chart below. The statute does not ask you to cross into the oncoming lane.",
    otherwise:
      "The two-lane text does not limit the slowdown to one direction, so slow down whichever way you are going.",
    cites: [{ key: "fs316126", pin: "(1)(b)2." }],
  },
  {
    road: "A law enforcement officer is directing traffic",
    rule: "Do what the officer tells you.",
    otherwise: "Both rules include the words “except when otherwise directed by a law enforcement officer.”",
    cites: [{ key: "fs316126", pin: "(1)(b)1. and 2." }],
  },
];

const speedChart = [
  { posted: "70", required: "50" },
  { posted: "65", required: "45" },
  { posted: "60", required: "40" },
  { posted: "55", required: "35" },
  { posted: "50", required: "30" },
  { posted: "45", required: "25" },
  { posted: "40", required: "20" },
  { posted: "35", required: "15" },
  { posted: "30", required: "10" },
  { posted: "25", required: "5" },
  { posted: "20 or less", required: "5" },
];

const whoRows: Array<{
  vehicle: string;
  when: string;
  cites: Cite[];
}> = [
  {
    vehicle: "Police, fire, ambulance and other authorized emergency vehicles",
    when: "Parked on the roadside and displaying any visual signals.",
    cites: [{ key: "fs316126", pin: "(1)(b)" }, { key: "fs316003", pin: "definition" }],
  },
  {
    vehicle: "Sanitation vehicle",
    when: "Performing a task related to sanitation services on the roadside.",
    cites: [{ key: "fs316126", pin: "(1)(b)" }],
  },
  {
    vehicle: "Utility service vehicle",
    when: "Performing a task related to utility services on the roadside.",
    cites: [{ key: "fs316126", pin: "(1)(b)" }],
  },
  {
    vehicle: "Wrecker (tow truck)",
    when: "Displaying amber rotating or flashing lights and performing a recovery or loading on the roadside.",
    cites: [{ key: "fs316126", pin: "(1)(b)" }],
  },
  {
    vehicle: "Road and bridge maintenance or construction vehicle",
    when: "Displaying warning lights on the roadside, without advance signs and channelizing devices. If the crew has set up signs and cones, follow those instead.",
    cites: [{ key: "fs316126", pin: "(1)(b)" }],
  },
  {
    vehicle: "Disabled motor vehicle, including an ordinary car",
    when: "Stopped with warning or hazard lights on; or stopped and using flares or emergency signage; or stopped with one or more persons visibly present.",
    cites: [{ key: "fs316126", pin: "(1)(b)" }, "ch2023197"],
  },
];

const disabledTriggers = [
  "Warning lights or hazard lights are on.",
  "Flares are lit or emergency signage is posted.",
  "One or more persons are visibly present at the stopped vehicle.",
];

const penaltyCards: Array<{
  figure: string;
  label: string;
  text: string;
  cites: Cite[];
}> = [
  {
    figure: "$30",
    label: "Base penalty",
    text: "Florida puts violations of s. 316.126(1)(b) in its $30 penalty tier. The 2023 act that added disabled cars reenacted that line.",
    cites: [{ key: "fs31818", pin: "(2)(d)" }, "ch2023197"],
  },
  {
    figure: "$134",
    label: "One clerk's total, with costs",
    text: "Court costs and fees are added to the base. Pasco County's clerk lists $134 for this offense. We did not find a published Orange County amount, so go by your citation.",
    cites: ["pascoClerk", { key: "fs31818", pin: "(12), (18), (19)" }],
  },
  {
    figure: "3 or 4",
    label: "Points on your license",
    text: "A violation of subsection (1) is a moving violation. Florida assigns 3 points to moving violations it does not list separately, or 4 if the violation results in a crash.",
    cites: [{ key: "fs316126", pin: "(6)" }, { key: "fs32227", pin: "(3)(d)8. and 9." }],
  },
];

const ticketOptions: Array<{
  title: string;
  text: string;
  cites: Cite[];
}> = [
  {
    title: "Pay it",
    text: "Paying is an admission, and the points go on your record: 3, or 4 if the violation results in a crash. Orange County's clerk says to make your election within 30 calendar days of receiving the ticket.",
    cites: ["orangeClerk", { key: "fs31814", pin: "(4)" }],
  },
  {
    title: "Elect traffic school",
    text: "If you qualify and finish the course, adjudication is withheld and no points are assessed. You get one election in 12 months and eight in a lifetime. Commercial license holders are not eligible.",
    cites: ["orangeClerk", { key: "fs31814", pin: "(9)" }],
  },
  {
    title: "Ask for a hearing",
    text: "If a judge or hearing officer finds you committed the offense, Orange County's clerk says the penalty can be up to $500.00 plus court costs, and points may be assessed.",
    cites: ["orangeClerk"],
  },
];

const stoppedSteps: Array<{
  title: string;
  text: string;
  cites: Cite[];
}> = [
  {
    title: "Get out of the travel lane if the car can still roll",
    text: "FDOT says Florida law requires you to make every effort to move so you do not block the regular flow of traffic. Aim for the right shoulder or the next exit.",
    cites: ["fdotFaq"],
  },
  {
    title: "Turn on your hazard lights",
    text: "Hazards are the first thing the statute lists for a disabled car, and Florida allows flashers to show a vehicle is lawfully stopped or disabled. Flares or an emergency sign count too.",
    cites: [{ key: "fs316126", pin: "(1)(b)" }, { key: "fs3162397", pin: "(7)(a)" }],
  },
  {
    title: "Stay inside and wait for help",
    text: "FDOT says that once you are out of the flow of traffic, stay inside your vehicle and wait for help. The law does not stop every driver: Florida counted 205 failure-to-move-over crashes in 2024.",
    cites: ["fdotFaq", "flhsmv"],
  },
  {
    title: "Call the right number",
    text: "In a lane, in a crash, with smoke, or if you feel unsafe, call 911. Otherwise dial *347 from a mobile phone for Florida Highway Patrol and the Road Rangers.",
    cites: ["fdotHome", "fdotFaq", "cfx"],
  },
  {
    title: "Say exactly where you are",
    text: "Give the road, your direction and the last exit or mile marker. Say whether you are fully on the shoulder or partly in a lane.",
    cites: [],
  },
];

const roads: Array<{
  road: string;
  text: string;
  cites: Cite[];
}> = [
  {
    road: "I-4",
    text: "Dial *347. FDOT's Road Rangers patrol congested and high-incident freeway stretches and can change a flat. FDOT says availability varies, so ask when you call.",
    cites: ["fdotHome", "fdotFaq"],
  },
  {
    road: "Florida's Turnpike",
    text: "Dial *347. The Road Rangers Safety Patrol is free and runs 24 hours a day on the mainline, Milepost 0 to 308. It changes tires using your own spare.",
    cites: ["tpRoadRangers"],
  },
  {
    road: "SR 408",
    text: "Dial *347 and ask for a Road Ranger. The CFX patrol is free and runs 6:00 AM to 10:00 PM, seven days a week. Outside those hours it is off patrol.",
    cites: ["cfx"],
  },
];

const faqs = [
  {
    question: "What is the Move Over law in Florida?",
    answer:
      "It is section 316.126 of the Florida Statutes. When a covered vehicle is stopped on the roadside and the road has two or more lanes going your way, you must leave the lane closest to it as soon as it is safe. If you cannot, or you are on a two-lane road, slow to 20 mph under the posted limit, or to 5 mph if the limit is 20 mph or less.",
  },
  {
    question: "Does the Move Over law apply to disabled cars in Florida?",
    answer:
      "Yes, since January 1, 2024. It covers a disabled motor vehicle that is stopped with warning or hazard lights on, is using flares or emergency signage, or has one or more persons visibly present.",
  },
  {
    question: "What is the fine for not moving over in Florida?",
    answer:
      "The base penalty is $30 under section 318.18(2)(d). Court costs and fees are added, so the amount due is higher and varies by county. Pasco County's clerk lists $134. If you request a hearing and are found to have committed the offense, Orange County's clerk says the penalty can be up to $500 plus court costs.",
  },
  {
    question: "How many points is a Move Over ticket in Florida?",
    answer:
      "Three, or four if the violation results in a crash. Section 316.126(6) makes a violation of subsection (1) a moving violation. Section 322.27 assigns 3 points to moving violations it does not list separately, and 4 to one that results in a crash. If you qualify and complete an approved traffic school, adjudication is withheld and no points are assessed.",
  },
  {
    question: "Did Florida's Move Over law change in 2025?",
    answer:
      "Not that we can find. The statute's history lists chapter 2023-197 as its last change, and that act added disabled vehicles effective January 1, 2024. The state's FLHSMV page gives January 1, 2025 as the date, but the act itself says 2024.",
  },
  {
    question: "Do I have to change lanes on a two-lane road?",
    answer:
      "No. On a two-lane road the statute tells you to slow down: 20 mph under the posted limit, or 5 mph if the limit is 20 mph or less. It does not ask you to cross into the oncoming lane.",
  },
  {
    question: "Is the Move Over law in all 50 states?",
    answer:
      "Yes. The U.S. Government Accountability Office reported in December 2020 that all states and the District of Columbia have enacted Move Over laws. This page covers Florida's version only.",
  },
];

function SourceTags({ cites }: { cites: Cite[] }) {
  if (cites.length === 0) return null;
  return (
    <span className="mt-2 block text-xs leading-5 text-white/56">
      Source:{" "}
      {cites.map((cite, index) => {
        const key = typeof cite === "string" ? cite : cite.key;
        const pin = typeof cite === "string" ? null : cite.pin;
        return (
          <span key={`${key}-${pin ?? "all"}`}>
            {index > 0 ? ", " : null}
            <a
              href={sources[key].href}
              className="underline decoration-white/30 underline-offset-2 hover:text-white"
              rel="noreferrer"
              target="_blank"
            >
              {sources[key].short}
              {pin ? ` ${pin}` : ""}
            </a>
          </span>
        );
      })}
    </span>
  );
}

export default function FloridaMoveOverLawPage() {
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
    datePublished: updatedIso,
    dateModified: updatedIso,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(heroImage),
      width: 1600,
      height: 1067,
    },
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@id": businessId,
    },
    mainEntityOfPage: absoluteUrl(path),
    about: [
      { "@type": "Thing", name: "Florida Move Over law" },
      { "@type": "Thing", name: "Florida Statutes section 316.126" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Florida Move Over Law", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Scale aria-hidden="true" size={16} />
              Florida Statutes 316.126
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
              Florida Move Over law: the rule, the fine and the points
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Leave the lane next to a stopped emergency, sanitation, utility, tow or road-crew
              vehicle, or a disabled car, as soon as it is safe. On a two-lane road, or if you
              cannot move over, slow to 20 mph under the posted limit, or 5 mph if the limit is
              20 or less.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/66">
              Disabled cars count since January 1, 2024, if they show hazards, flares or signs,
              or someone is visibly there. It is a moving violation: a $30 base penalty before
              court costs, plus 3 points, or 4 if it results in a crash. General information,
              not legal advice.
            </p>
            <SourceTags
              cites={[
                { key: "fs316126", pin: "(1)(b), (6)" },
                "ch2023197",
                { key: "fs31818", pin: "(2)(d)" },
                { key: "fs32227", pin: "(3)(d)8. and 9." },
              ]}
            />
            <p className="mt-4 text-sm font-bold text-white/56">
              Updated <time dateTime={updatedIso}>{updatedLabel}</time> ·{" "}
              <a
                href="#sources"
                className="inline-flex min-h-11 items-center underline decoration-white/30 underline-offset-2 hover:text-white"
              >
                See every source
              </a>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#if-you-are-stopped" className="btn btn-primary">
                <AlertTriangle aria-hidden="true" size={18} />
                I am the stopped car
              </a>
              <a href="#fine-and-points" className="btn btn-secondary">
                Fine and points
              </a>
            </div>
          </div>

          <aside className="card overflow-hidden bg-panel">
            <figure>
              <Image
                src={heroImage}
                alt={heroAlt}
                width={1600}
                height={1067}
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="px-6 pt-4 text-xs leading-5 text-white/56">
                A Florida Road Ranger truck on the shoulder of Interstate 10 in Madison County,
                April 2024.
              </figcaption>
            </figure>
            <div className="p-6">
              <p className="text-sm font-black uppercase text-safety-yellow">
                Stopped on the shoulder right now?
              </p>
              <p className="mt-3 text-base leading-7 text-white/76">
                Get out of the lane if you can, turn your hazards on and stay inside. In a
                lane, in a crash or unsafe: call 911. Otherwise dial *347 for the free Road
                Rangers.
              </p>
              <a
                href="#if-you-are-stopped"
                className="mt-3 inline-flex min-h-11 items-center text-sm font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                See the full steps
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="what-to-do" className="section scroll-mt-8 bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Multi-lane or two-lane
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What you must do depends on the road you are on.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The same two duties apply to every covered vehicle. Which one applies comes down
              to how many lanes go your way. The duty starts &ldquo;as soon as it is safe,&rdquo;
              so check your mirrors before you move.
            </p>
            <SourceTags cites={[{ key: "fs316126", pin: "(1)(b)" }]} />
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                What Florida&apos;s Move Over law requires on multi-lane and two-lane roads
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    Road
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    What the law requires
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    If you cannot, or are not sure
                  </th>
                </tr>
              </thead>
              <tbody>
                {roadRows.map((row, index) => (
                  <tr
                    key={row.road}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[30%] md:p-5">
                      <span className="block text-lg font-black text-white">{row.road}</span>
                    </th>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/76 md:mt-0 md:table-cell md:w-[36%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/56 md:hidden">
                        What the law requires
                      </span>
                      {row.rule}
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/70 md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/56 md:hidden">
                        If you cannot, or are not sure
                      </span>
                      {row.otherwise}
                      <SourceTags cites={row.cites} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-black text-white">The speed to slow to</h3>
            <p className="mt-3 max-w-3xl text-base leading-8 text-white/66">
              Take 20 mph off the posted limit when the limit is 25 mph or more. At 20 mph or
              less, the statute sets 5 mph.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {speedChart.map((item) => (
                <li key={item.posted} className="card-solid p-4">
                  <span className="block text-xs font-black uppercase text-white/56">
                    Posted {item.posted}
                  </span>
                  <span className="mt-1 block text-2xl font-black text-safety-yellow">
                    {item.required} mph
                  </span>
                </li>
              ))}
            </ul>
            <SourceTags cites={[{ key: "fs316126", pin: "(1)(b)2." }]} />
          </div>
        </div>
      </section>

      <section id="who-it-covers" className="section scroll-mt-8 border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Who you move over for
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Six kinds of stopped vehicle, each with its own condition.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each row is one clause of the statute. The condition is the part most summaries
              skip: the law applies when it is true. What you do is the same for all six, and
              depends on your road.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Vehicles covered by Florida&apos;s Move Over law and the condition for each
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    Stopped vehicle
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    The law applies when it is
                  </th>
                </tr>
              </thead>
              <tbody>
                {whoRows.map((row, index) => (
                  <tr
                    key={row.vehicle}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[36%] md:p-5">
                      <span className="block text-lg font-black text-white">{row.vehicle}</span>
                    </th>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/76 md:mt-0 md:table-cell md:p-5">
                      {row.when}
                      <SourceTags cites={row.cites} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">Road Rangers are not named</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                The list above does not mention Road Rangers by name. A Road Ranger stopped
                beside a disabled car is next to a vehicle the law does cover, so move over
                the same way.
              </p>
              <SourceTags cites={[{ key: "fs316126", pin: "(1)(b)" }]} />
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">Coming toward you is a different rule</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                If an emergency vehicle is approaching with a siren or blue or red lights, yield
                and pull as close as reasonable to the closest edge of the curb, clear of any
                intersection. Stop there until it has passed.
              </p>
              <SourceTags cites={[{ key: "fs316126", pin: "(1)(a)" }]} />
            </div>
          </div>
        </div>
      </section>

      <section id="disabled-cars" className="section scroll-mt-8 bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Ordinary disabled cars
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Disabled cars have been covered since January 1, 2024, not 2025.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The Legislature added disabled motor vehicles in Chapter 2023-197, a
              transportation act the Governor approved on June 5, 2023. Its first section
              begins: &ldquo;Effective January 1, 2024, paragraph (b) of subsection (1) of
              section 316.126, Florida Statutes, is amended.&rdquo;
            </p>
            <SourceTags cites={["ch2023197"]} />
            <p className="mt-5 text-base leading-8 text-white/66">
              You will see 2025 given as the start date online, including on FLHSMV&apos;s own
              Move Over page, which says &ldquo;As of January 1, 2025.&rdquo; The act says 2024.
              The statute&apos;s history in the 2026 edition lists chapter 2023-197 as the
              section&apos;s last change. We found no 2025 amendment.
            </p>
            <SourceTags cites={["flhsmv", "fs316126"]} />
          </div>
          <div className="card-solid p-6">
            <h3 className="text-xl font-black text-white">
              A disabled car counts when any one of these is true
            </h3>
            <ul className="mt-4 grid gap-3">
              {disabledTriggers.map((trigger) => (
                <li key={trigger} className="flex items-start gap-3 text-sm leading-6 text-white/76">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-route-green"
                    size={18}
                  />
                  <span>{trigger}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-white/66">
              The statute does not limit this to interstates, or to any reason for stopping.
              From far back you cannot tell which cars qualify, so move over for all of them.
            </p>
            <SourceTags cites={[{ key: "fs316126", pin: "(1)(b)" }]} />
          </div>
        </div>
      </section>

      <section id="fine-and-points" className="section scroll-mt-8 border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Gauge aria-hidden="true" size={16} />
              Fine and points
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A $30 base penalty before costs, and 3 points, or 4 if it results in a crash.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              You will see $120, $158 and &ldquo;up to $500&rdquo; quoted for this ticket. The
              base is set by statute. The total depends on your county&apos;s costs, and on
              whether you go to a hearing. The amount on your citation is the one that counts.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {penaltyCards.map((card) => (
              <div key={card.label} className="card-solid p-6">
                <p className="text-5xl font-black text-safety-yellow">{card.figure}</p>
                <h3 className="mt-3 text-xl font-black text-white">{card.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{card.text}</p>
                <SourceTags cites={card.cites} />
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-2xl font-black text-white">Your options after a ticket</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {ticketOptions.map((option) => (
              <div key={option.title} className="card-solid p-6">
                <h4 className="text-lg font-black text-white">{option.title}</h4>
                <p className="mt-3 text-sm leading-6 text-white/70">{option.text}</p>
                <SourceTags cites={option.cites} />
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-md border border-safety-yellow/30 bg-black/20 p-5">
              <AlertTriangle
                aria-hidden="true"
                className="mt-1 shrink-0 text-safety-yellow"
                size={20}
              />
              <div className="text-sm leading-6 text-white/72">
                <p>
                  If the violation results in a crash that kills or seriously injures someone
                  else, you must appear at a hearing. Paying without one, by mail, in person or on a
                  payment plan, is off the table, and so is traffic school.
                </p>
                <SourceTags
                  cites={[
                    { key: "fs31819", pin: "(1), (2)" },
                    { key: "fs31814", pin: "(2), (4), (9)" },
                  ]}
                />
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-md border border-white/10 bg-black/20 p-5">
              <Info aria-hidden="true" className="mt-1 shrink-0 text-white/66" size={20} />
              <div className="text-sm leading-6 text-white/72">
                <p>
                  Points add up. Florida can suspend a license at 12 points in 12 months, 18 in
                  18 months or 24 in 36 months. In 2024, FLHSMV reported more than 17,500
                  citations for failing to move over.
                </p>
                <SourceTags cites={[{ key: "fs32227", pin: "(3)(a) to (c)" }, "flhsmv"]} />
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60">
            The separate rule for an emergency vehicle coming toward you falls under
            Florida&apos;s general moving-violation penalty, a $60 base. Pasco County&apos;s
            clerk lists it at $164 with costs. RoadZone Plus is a roadside company, not a law
            firm. For advice on your own ticket, talk to a Florida traffic attorney.
          </p>
          <SourceTags cites={[{ key: "fs31818", pin: "(3)(a)" }, "pascoClerk"]} />
        </div>
      </section>

      <section id="if-you-are-stopped" className="section scroll-mt-8 bg-asphalt">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="eyebrow">
                <AlertTriangle aria-hidden="true" size={16} />
                If you are the one stopped
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                If you are the stopped car on <span className="whitespace-nowrap">I-4</span>, the
                Turnpike or SR 408.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                The law asks other drivers to give you room, but you cannot count on it. Get
                safe first. Phone calls and tires come after that.
              </p>
            </div>
            <figure>
              <Image
                src="/visuals/turnpike/turnpike-open-shoulder.webp"
                alt="An empty stretch of Florida's Turnpike with a wide paved right shoulder, grass verge and pine trees under a clear sky"
                width={1600}
                height={1200}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/60">
                A wide paved shoulder on Florida&apos;s Turnpike. Traffic still passes a few feet
                away, so stay inside the car.
              </figcaption>
            </figure>
          </div>

          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {stoppedSteps.map((step, index) => (
              <li key={step.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">{step.text}</p>
                <SourceTags cites={step.cites} />
              </li>
            ))}
          </ol>

          <h3 className="mt-10 text-2xl font-black text-white">Who answers on your road</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {roads.map((item) => (
              <div key={item.road} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="shrink-0 text-safety-yellow" size={18} />
                  <h4 className="text-xl font-black text-white">{item.road}</h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
                <SourceTags cites={item.cites} />
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60">
            The Road Rangers cost you nothing, so on a covered road they are worth dialing
            first. FDOT says a patrol should locate you within 15 to 30 minutes unless an
            emergency holds it up. Our{" "}
            <Link
              href="/road-rangers-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              Road Rangers guide
            </Link>{" "}
            explains where they fit in Orlando.
          </p>
          <SourceTags cites={["fdotFaq"]} />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="eyebrow">
                <Wrench aria-hidden="true" size={16} />
                After you are safe
              </div>
              <h3 className="mt-5 text-3xl font-black text-white">
                When the patrol cannot help, RoadZone Plus can put your spare on.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/66">
                RoadZone Plus is a private, paid company. We are not FDOT, CFX, Florida Highway
                Patrol or the Road Rangers. Call us when the patrol is off duty or cannot reach
                you, or when you would rather have one direct call.
              </p>
              <p className="mt-4 text-base leading-8 text-white/66">
                With a usable spare, our{" "}
                <Link
                  href="/services/tire-change"
                  className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                >
                  tire change service
                </Link>{" "}
                swaps the flat and tells you how far and how fast you can drive on the spare. If
                a locking lug nut has no key, we remove that too. Coverage on any highway or
                toll road is confirmed on the call. See also{" "}
                <Link
                  href="/flat-tire-on-i-4-orlando"
                  className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                >
                  a flat tire on I-4
                </Link>{" "}
                and{" "}
                <Link
                  href="/roadside-assistance-florida-turnpike-orlando"
                  className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                >
                  roadside help on Florida&apos;s Turnpike
                </Link>
                .
              </p>
              <p className="mt-4 text-base leading-8 text-white/66">
                We do not tow. If the car has to be towed, FDOT says the Highway Patrol can
                contact a towing service at your expense.
              </p>
              <SourceTags cites={["fdotFaq"]} />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.phoneHref} className="btn btn-primary">
                  <PhoneCall aria-hidden="true" size={18} />
                  Call {site.phoneDisplay}
                </a>
                <Link href="/services/tire-change" className="btn btn-secondary">
                  Tire Change Service
                </Link>
              </div>
            </div>
            <figure>
              <Image
                src="/visuals/turnpike/spare-tire-fitted.webp"
                alt="A compact spare tire with a yellow 50 mph caution label fitted to a car's rear wheel"
                width={1600}
                height={1067}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/60">
                A compact spare has its own speed limit, printed on the tire.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="faq" className="section scroll-mt-8 border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Florida Move Over law questions
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sources" className="section scroll-mt-8 bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ExternalLink aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Where every rule on this page comes from.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each page below was read on {updatedLabel}. The law comes from the Florida
              Statutes and the Laws of Florida, not from us. This page is general information,
              not legal advice, and RoadZone Plus is not a law firm or a government agency.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {Object.values(sources).map((source) => (
              <a
                key={source.href}
                href={source.href}
                className="group rounded-md bg-white/6 p-4 text-sm leading-6 text-white/66 transition hover:bg-white/10 hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-2 font-black text-white group-hover:text-red-200">
                  {source.name}
                  <ExternalLink aria-hidden="true" className="shrink-0" size={15} />
                </span>
                <span className="mt-1 block">{source.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/80">
              Flat tire and a usable spare?
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Once you are safe, call RoadZone Plus to get it on.
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
