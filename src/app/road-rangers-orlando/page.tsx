import type { Metadata } from "next";
import Image from "next/image";
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
  Wrench,
  XCircle,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const title = "Road Rangers Orlando FL: Free Roadside Help, *347 & Hours";
const description =
  "Florida Road Rangers are free: dial *347 from a cell phone. Hours by road around Orlando (I-4, the Turnpike, toll roads), what they do, and who to call off their routes.";

const path = "/road-rangers-orlando";
const checkedOn = "November 23, 2026";

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

const shortAnswers = [
  {
    question: "Is it free?",
    answer: "Yes, on the roads they patrol.",
    detail:
      "FDOT calls it limited no-cost highway assistance. Florida's Turnpike and CFX both describe it as free.",
  },
  {
    question: "What number?",
    answer: "Dial *347 (*FHP)",
    detail:
      "From a cell phone. If your carrier does not support *347, FDOT points you to the Florida Highway Patrol's regional communication centers.",
  },
  {
    question: "Where?",
    answer: "Highways, not parking lots.",
    detail:
      "Around Orlando: I-4 and I-4 Express, Florida's Turnpike, and the toll roads run by CFX and by the Turnpike.",
  },
  {
    question: "When?",
    answer: "It depends on the road.",
    detail:
      "I-4 between exits 72 and 98 and the Turnpike itself are listed 24 hours a day. Most Orlando toll roads list no patrol overnight. See the hours below.",
  },
];

type RoadHours = {
  road: string;
  stretch: string;
  hours: string;
  plain: string;
  source: string;
};

const roadHours: RoadHours[] = [
  {
    road: "I-4, mile 72 to mile 98",
    stretch:
      "From the Beachline (exit 72) through Sand Lake Road (exit 74A), Universal (exits 74B and 75A), Kirkman Road (exit 75B) and the Turnpike junction (exit 77) to Lake Mary and Heathrow (exit 98).",
    hours: "24 hours a day, every day of the week.",
    plain: "The only stretch of I-4 near Orlando that FDOT lists around the clock.",
    source: "FDOT Road Ranger coverage map",
  },
  {
    road: "I-4, mile 58 to mile 72",
    stretch:
      "From Four Corners (exit 58) past Celebration (exit 62), US 192 (exit 64), Osceola Parkway (exit 65), Epcot and Disney Springs (exit 67), Lake Buena Vista (exit 68) and SeaWorld (exit 71) to the Beachline (exit 72).",
    hours:
      "Monday to Thursday, 6:00 a.m. to midnight. Friday to Sunday, 6:00 a.m. to 3:30 a.m.",
    plain:
      "No patrol is listed here between 3:30 a.m. and 6:00 a.m. on any day, and from Monday to Thursday the listed patrol ends at midnight.",
    source: "FDOT Road Ranger coverage map",
  },
  {
    road: "I-4, mile 98 to mile 114",
    stretch:
      "From Lake Mary and Heathrow (exit 98) past the Sanford exits (101A and 104) to the SR 472 exit for Deltona and DeLand (exit 114).",
    hours:
      "Monday to Thursday, 6:00 a.m. to midnight. Friday to Sunday, 6:00 a.m. to 3:30 a.m.",
    plain: "The same late-night gap as the stretch past the Disney exits.",
    source: "FDOT Road Ranger coverage map",
  },
  {
    road: "Florida's Turnpike",
    stretch: "The Turnpike itself, which meets I-4 at exit 77.",
    hours: "24 hours a day, 7 days a week, on every milepost Florida's Turnpike lists, 0 to 308.",
    plain: "Around the clock, all year.",
    source: "Florida's Turnpike, Road Rangers Safety Patrol",
  },
  {
    road: "Toll roads run by Florida's Turnpike",
    stretch:
      "The Western Beltway (SR 429, mileposts 0 to 11), which meets I-4 at exit 60; the Southern Connector (SR 417, mileposts 0 to 10), which meets I-4 at exit 62 by Celebration; the Beachline (SR 528, mileposts 0 to 8), which starts at I-4 exit 72 toward Orlando International Airport; and the Seminole Expressway (SR 417, mileposts 38 to 55).",
    hours: "6:00 a.m. to 10:00 p.m., 7 days a week.",
    plain: "No patrol is listed on these stretches between 10:00 p.m. and 6:00 a.m.",
    source: "Florida's Turnpike, Road Rangers Safety Patrol",
  },
  {
    road: "CFX toll roads",
    stretch: "SR 408, SR 414, SR 417, SR 429, SR 451 and SR 528, run by the Central Florida Expressway Authority.",
    hours:
      "CFX lists 6:00 a.m. to 10:00 p.m., seven days a week, 365 days a year. FDOT's coverage map lists 6:00 a.m. to 8:00 p.m. for the same six roads.",
    plain:
      "The two published schedules differ between 8:00 p.m. and 10:00 p.m. After 10:00 p.m. neither lists a patrol.",
    source: "CFX Roadside Assistance; FDOT Road Ranger coverage map",
  },
  {
    road: "Arterial pilot on Orlando surface roads",
    stretch:
      "SR 50, SR 526, US 441, Oak Ridge Road, SR 423, SR 435 (Kirkman Road), SR 482 (Sand Lake Road) and Conroy Road, as FDOT's map names them.",
    hours: "Monday to Friday, 6:00 a.m. to 10:00 p.m. Not in operation on Saturday or Sunday.",
    plain: "A weekday patrol on surface roads, which FDOT lists as a pilot.",
    source: "FDOT Road Ranger coverage map",
  },
];

const areaLinks = [
  { href: "/areas/kissimmee", label: "Kissimmee" },
  { href: "/areas/celebration", label: "Celebration" },
  { href: "/areas/lake-buena-vista", label: "Lake Buena Vista" },
  { href: "/areas/orlando", label: "Orlando" },
  { href: "/areas/sanford", label: "Sanford" },
];

const whatTheyDo = [
  "Change flat tires. Florida's Turnpike lists this as a tire change with the vehicle's own spare.",
  "Jump-start vehicles and make minor repairs. Florida's Turnpike lists minor emergency repairs that can be completed in less than 15 minutes.",
  "Supply emergency gasoline, diesel and water. Florida's Turnpike lists emergency gas of up to 2 gallons.",
  "Give stranded drivers two free local calls.",
  "Clear disabled vehicles and debris from the travel lanes, and move disabled vehicles to safer locations.",
  "Help with traffic control at crash scenes, and notify the Florida Highway Patrol about abandoned vehicles.",
];

const whereHelpStops = [
  {
    title: "Off their roads",
    text: "Hotel lots, theme park lots, parking garages, airport rental garages and vacation-home driveways are not on any route that FDOT, Florida's Turnpike, CFX or the I-4 project site lists.",
  },
  {
    title: "Outside their hours",
    text: "Away from I-4 between exits 72 and 98 and the Turnpike itself, the listed patrols stop at night. The hours by road are above.",
  },
  {
    title: "Without a spare",
    text: "Florida's Turnpike lists its free tire change as a change with the vehicle's own spare. A tire that cannot be swapped for a spare is not on its list.",
  },
  {
    title: "Tows, lockouts and long repairs",
    text: "None of the four official pages lists a tow to a repair shop or home, or a lockout, among the free services. Florida's Turnpike lists only minor repairs that take less than 15 minutes.",
  },
];

const roadZoneSituations = [
  {
    title: "Flat tire in a hotel lot, garage or driveway",
    text: "If you have a usable spare, RoadZone Plus comes to the car and puts it on, at any hour.",
    href: "/services/tire-change",
    label: "Tire Change",
    Icon: Wrench,
  },
  {
    title: "Dead battery off the highway",
    text: "A car that will not start in a theme park lot, a rental garage or a driveway is a direct jump start call.",
    href: "/services/jumpstart",
    label: "Jump Start Service",
    Icon: ShieldCheck,
  },
  {
    title: "Keys locked inside the car",
    text: "No Road Ranger agency lists lockouts. RoadZone Plus handles them at hotels, restaurants, airports and parking lots.",
    href: "/services/auto-lockout",
    label: "Auto Lockout",
    Icon: CheckCircle2,
  },
  {
    title: "A tire that needs more than a swap",
    text: "When the problem is the tire itself, see the mobile tire options and what can be done where the car is.",
    href: "/mobile-tire-repair-orlando",
    label: "Mobile Tire Help",
    Icon: MapPin,
  },
];

const dialSteps = [
  {
    title: "Get safe first",
    text: "Pull fully onto the shoulder if you can and turn on your hazard lights. Call 911 if the car is blocking traffic, there has been a crash, you see smoke or you feel unsafe.",
  },
  {
    title: "Dial *347 from your cell phone",
    text: "Ask for a Road Ranger. CFX also says its Road Rangers stop to help when they see a car pulled over on the side of the road.",
  },
  {
    title: "Say where you are",
    text: "The I-4 project site says to have three things ready: the road you are on, your direction of travel, and the last exit or landmark you passed.",
  },
  {
    title: "Know the truck",
    text: "FDOT says every Road Ranger vehicle is white, with the Road Rangers logo on the rear and sides, and the drivers are in uniform.",
  },
];

const comparisonRows = [
  {
    option: "On I-4 between exits 72 and 98, any hour",
    roadRangers: "Listed 24 hours a day. Dial *347.",
    roadZone: "A direct paid call if you would rather not wait for the patrol, or need more than they offer.",
  },
  {
    option: "On I-4 past the Disney exits or on a toll road, late at night",
    roadRangers: "No patrol listed past the Disney exits between 3:30 a.m. and 6:00 a.m., or on most toll roads after 10:00 p.m.",
    roadZone: "Takes calls 24 hours a day.",
  },
  {
    option: "Hotel lot, theme park lot, airport garage or driveway",
    roadRangers: "Not on any listed route.",
    roadZone: "Comes to the car, with no membership and no app.",
  },
  {
    option: "Locked out, no spare, or the car needs more than 15 minutes",
    roadRangers: "Not among the free services the agencies list.",
    roadZone: "Lockouts, tire help and jump starts on one call.",
  },
];

const sourceLinks = [
  {
    name: "FDOT: Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "Limited no-cost highway assistance, sponsored by GEICO; *347 from a mobile phone; the list of services; white vehicles with the Road Rangers logo; more than 6.1 million service assists since 2000.",
  },
  {
    name: "FDOT: Road Ranger coverage map (District 5)",
    href: "https://fdot.maps.arcgis.com/apps/webappviewer/index.html?id=e375cf8cdf664c10961fb879788205bb",
    note: "Hours by stretch: I-4 mile 72 to 98, 24 hours a day; I-4 mile 58 to 72 and 98 to 114, Monday to Thursday 6:00 a.m. to midnight and Friday to Sunday 6:00 a.m. to 3:30 a.m.; CFX toll roads 6:00 a.m. to 8:00 p.m.; the arterial pilot, weekdays 6:00 a.m. to 10:00 p.m.",
  },
  {
    name: "Florida's Turnpike: Road Rangers Safety Patrol",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free assistance 365 days a year; tire changes with the vehicle's spare, up to 2 gallons of gas, jump starts, water, repairs under 15 minutes; hours by road.",
  },
  {
    name: "Central Florida Expressway Authority: Roadside Assistance",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Free help on SR 408, 417, 414, 429, 528 and 451; more than 4,000 drivers helped every month; 6:00 AM to 10:00 PM, 365 days a year; patrols follow FHP in suspending at sustained winds of 45 mph or more.",
  },
  {
    name: "I-4 Beyond the Ultimate (FDOT): Road Rangers, Heroes of the Highway",
    href: "https://i4beyond.com/road-rangers-heroes-of-the-highway/",
    note: "Patrols on I-4, I-4 Express, I-95, I-75, CFX roads and Florida's Turnpike; what to have ready when you call *347.",
  },
  {
    name: "Florida Highway Patrol: regional communication centers",
    href: "https://www.flhsmv.gov/florida-highway-patrol/contact-fhp/regional-communication-centers/",
    note: "Where FDOT sends drivers whose mobile carrier does not support *347.",
  },
];

const relatedGuides = [
  {
    href: "/roadside-assistance-florida-turnpike-orlando",
    title: "Roadside Assistance on Florida's Turnpike",
    text: "Who reaches you on the Turnpike near Orlando, exit by exit from Kissimmee to Minneola.",
  },
  {
    href: "/free-roadside-assistance-orlando",
    title: "Free Roadside Assistance in Orlando",
    text: "Every free and already-paid option: Road Rangers, insurance, warranties and memberships.",
  },
  {
    href: "/roadside-assistance-near-disney-world-resort",
    title: "Roadside Help Near Disney World",
    text: "Who to call near Disney by place and hour, including Disney's own Car Care Center.",
  },
  {
    href: "/orlando-airport-roadside-assistance",
    title: "Orlando Airport Roadside Assistance",
    text: "Who to call at MCO, in the rental garages and on the airport roads.",
  },
  {
    href: "/locked-keys-in-rental-car-orlando",
    title: "Locked Keys in a Rental Car",
    text: "What to do first with a rental, and who can open it.",
  },
  {
    href: "/florida-move-over-law",
    title: "Florida's Move Over Law",
    text: "What drivers must do when they pass a Road Ranger or any stopped vehicle.",
  },
];

const faqs = [
  {
    question: "Are Road Rangers free in Florida?",
    answer:
      "Yes, on the roads they patrol. FDOT describes Road Rangers as limited no-cost highway assistance, and both Florida's Turnpike and the Central Florida Expressway Authority call the service free. Parking lots, garages and driveways are not on their routes.",
  },
  {
    question: "How do I call a Road Ranger in Florida?",
    answer:
      "Dial *347, also written *FHP, from a cell phone and ask for a Road Ranger. Be ready to give the road you are on, your direction of travel and the last exit or landmark you passed. If your carrier does not support *347, FDOT points drivers to the Florida Highway Patrol's regional communication centers.",
  },
  {
    question: "What is a Road Ranger?",
    answer:
      "A roving patrol vehicle of the Florida Department of Transportation's Road Ranger Service Patrol, which FDOT bids out to private contractors. Road Rangers clear minor incidents from the travel lanes and help stranded drivers with flat tires, jump starts, emergency fuel and water, minor repairs and two free local calls. FDOT says the program has made more than 6.1 million service assists since it began in 2000.",
  },
  {
    question: "What are the Road Ranger hours in Orlando?",
    answer:
      "It depends on the road. FDOT's coverage map lists I-4 from mile 72 to mile 98 at 24 hours a day, and I-4 from mile 58 to mile 72, past the Disney exits, at 6:00 a.m. to midnight Monday to Thursday and 6:00 a.m. to 3:30 a.m. Friday to Sunday. Florida's Turnpike patrols its mainline 24 hours a day. CFX lists 6:00 a.m. to 10:00 p.m. on its toll roads, while FDOT's map lists 6:00 a.m. to 8:00 p.m. for them.",
  },
  {
    question: "Do Road Rangers work on Thanksgiving, Christmas and New Year's Day?",
    answer:
      "Florida's Turnpike and CFX both say their Road Rangers patrol 365 days a year. FDOT's coverage map gives I-4 hours by weekday and weekend and has no separate holiday line. CFX adds that its patrols follow the Florida Highway Patrol in stopping when sustained winds reach 45 mph or more.",
  },
  {
    question: "Can a Road Ranger tow my car?",
    answer:
      "Not to a shop or home: none of the FDOT, Florida's Turnpike, CFX or I-4 project pages lists that among the free services. Road Rangers do clear disabled vehicles from the travel lanes and move them to safer locations.",
  },
  {
    question: "Can Road Rangers help in a hotel or theme park parking lot?",
    answer:
      "Those lots are not on any route the Road Ranger agencies list. For a car in a hotel lot, a theme park lot, an airport rental garage or a vacation-home driveway, RoadZone Plus is a direct paid roadside service that takes calls 24 hours a day.",
  },
  {
    question: "Is RoadZone Plus part of the Road Ranger program?",
    answer:
      "No. RoadZone Plus is a private, paid roadside service in Orlando. It is not FDOT, CFX, Florida's Turnpike, the Florida Highway Patrol or the Road Rangers. This page explains the free program first and then where a direct call fits.",
  },
  {
    question: "What if I am blocking traffic or feel unsafe?",
    answer:
      "Call 911. A roadside service is not a substitute for emergency response when the car is blocking traffic, there has been a crash, there is smoke or fire, or you feel in danger.",
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
    image: absoluteUrl(heroImage),
    datePublished: "2026-06-30",
    dateModified: "2026-11-23",
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
      "Direct 24/7 roadside assistance in Orlando where the free Road Ranger patrols do not reach: hotel lots, theme park lots, airport rental garages, driveways and late-night hours. Jump starts, tire changes with your spare, lockouts and fuel delivery.",
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
    dateModified: "2026-11-23",
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
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Florida Road Rangers near Orlando
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
              Road Rangers in Orlando: free highway help, the *347 number, and the hours by road.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Road Rangers are free on the highways they patrol. Dial{" "}
              <span className="font-black text-white">*347 (*FHP)</span> from a cell phone. Around
              Orlando they cover I-4, Florida&apos;s Turnpike and the toll roads, but the hours
              change by road, and hotel lots, garages and driveways are not on their routes.
              RoadZone Plus is a private 24/7 roadside service for those places and hours.
            </p>
            <p className="mt-4 text-sm font-bold text-white/56">
              Hours and services checked against FDOT, Florida&apos;s Turnpike and CFX on {checkedOn}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#hours-by-road" className="btn btn-secondary">
                <Clock3 aria-hidden="true" size={18} />
                Road Ranger Hours by Road
              </a>
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call RoadZone {site.phoneDisplay}
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
              <div className="flex items-start gap-3">
                <AlertTriangle aria-hidden="true" className="mt-1 shrink-0 text-safety-yellow" size={20} />
                <p className="text-sm leading-6 text-white/70">
                  RoadZone Plus is not FDOT, CFX, Florida&apos;s Turnpike, the Florida Highway Patrol
                  or the Road Rangers. This guide explains the free program first.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="short-answer" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Short answer
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Free, *347, highways only, and the hours depend on the road.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {shortAnswers.map((item) => (
              <div key={item.question} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-white/42">{item.question}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.answer}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hours-by-road" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <Clock3 aria-hidden="true" size={16} />
                Road Ranger hours around Orlando
              </div>
              <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                Road Ranger hours, road by road.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Each agency publishes its own hours. These are the stretches an Orlando driver or
                visitor is most likely to be on, with the hours as each source lists them, read on{" "}
                {checkedOn}.
              </p>
            </div>
            <figure>
              <Image
                src="/visuals/spare-tire/i-4-express-orlando.webp"
                alt="An entrance road to the I-4 Express lanes in Orlando, with XPRESS painted on the pavement, orange barrels and elevated interstate ramps overhead"
                width={1600}
                height={1200}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/60">
                An entrance to the I-4 Express lanes in Orlando, May 2023. The I-4 project site lists
                I-4 Express among the Road Ranger routes.
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 grid gap-4">
            {roadHours.map((item) => (
              <div key={item.road} className="card-solid grid gap-4 p-6 lg:grid-cols-[0.9fr_1.4fr_1fr]">
                <div>
                  <h3 className="text-xl font-black text-white">{item.road}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.stretch}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Listed hours</p>
                  <p className="mt-2 font-black leading-7 text-white">{item.hours}</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.plain}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Source</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.source}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/60">
            CFX adds that its Road Rangers follow the Florida Highway Patrol in suspending patrols
            when sustained winds reach 45 mph or more. On I-4 the exit numbers follow the mile
            markers: exit 64, for example, is at mile 64.2.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/66">
            RoadZone Plus area guides near these exits:{" "}
            {areaLinks.map((area, index) => (
              <span key={area.href}>
                <Link
                  href={area.href}
                  className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                >
                  {area.label}
                </Link>
                {index < areaLinks.length - 2 ? ", " : index === areaLinks.length - 2 ? " and " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              What they do
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              What a Road Ranger can do at the roadside.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The Road Ranger Service Patrol is funded by FDOT and its partners, bid out to private
              contractors and sponsored by GEICO. FDOT counts more than 6.1 million service assists
              since the program began in 2000, and CFX says its Road Rangers help more than 4,000
              drivers every month on its toll roads.
            </p>
          </div>

          <div className="card-solid p-6">
            <h3 className="text-xl font-black text-white">
              The free services, as the official pages list them
            </h3>
            <ul className="mt-5 grid gap-3">
              {whatTheyDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-route-green" size={18} />
                  <span className="text-sm leading-6 text-white/72">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <XCircle aria-hidden="true" size={16} />
                Where their help stops
              </div>
              <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                Where Road Rangers do not go, and what is not on their list.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Road Rangers are a highway patrol. A car can also give out somewhere else: a hotel
                garage, a theme park lot, an airport rental level or a vacation-home driveway.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whereHelpStops.map((item) => (
                  <div key={item.title} className="card-solid p-5">
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure>
              <Image
                src="/visuals/battery-cost/parking-garage-level.webp"
                alt="An empty level of a multistory parking garage with painted parking lines and low afternoon light"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/60">
                A parking garage level. Garages and lots are not on any Road Ranger route the
                agencies list.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              When you dial *347
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Broken down on the highway right now? Use this order.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Hazard lights also bring your car under{" "}
              <Link
                href="/florida-move-over-law"
                className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                Florida&apos;s Move Over law
              </Link>
              , which tells passing drivers to move over or slow down.
            </p>
          </div>

          <ol className="grid gap-4">
            {dialSteps.map((step, index) => (
              <li key={step.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Road Rangers or RoadZone Plus
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Which call fits where your car is.
            </h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            {comparisonRows.map((row, index) => (
              <div
                key={row.option}
                className={`grid gap-4 bg-black/20 p-5 lg:grid-cols-[0.9fr_1fr_1fr] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Where you are</p>
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

      <section className="section bg-road-black">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="eyebrow">
                <PhoneCall aria-hidden="true" size={16} />
                When to call RoadZone
              </div>
              <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                24/7 roadside help in the places and hours the patrols do not cover.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                RoadZone Plus takes calls 24 hours a day in Kissimmee, Lake Buena Vista, the area
                around Walt Disney World, Orlando International Airport and Universal: hotel lots,
                theme park lots, rental garages and vacation-home driveways. There is no membership
                and no app.
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
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Road Rangers questions from Florida drivers
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

      <section className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ExternalLink aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Official sources, read on {checkedOn}.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Hours and services change. Check the agency&apos;s own page before you rely on the
              free program.
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
            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              More help if the free option does not solve it.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">Off the patrol routes or after hours</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              When the Road Rangers cannot reach you, call RoadZone Plus.
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
