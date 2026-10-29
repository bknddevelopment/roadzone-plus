import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  DollarSign,
  ExternalLink,
  Info,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/roadside-assistance-florida-turnpike-orlando";
const title = "Florida Turnpike Roadside Assistance Near Orlando | 24/7 Help";
const description =
  "Stuck on Florida's Turnpike near Orlando? Dial *347 for the free Road Rangers patrol, or call RoadZone Plus at (407) 222-2739 for a direct 24/7 jumpstart, tire change, fuel delivery or lockout between the Kissimmee and Clermont exits.";
const updatedIso = "2026-10-28";
const updatedLabel = "October 28, 2026";
const heroImage = "/visuals/turnpike/turnpike-open-shoulder.webp";
const heroAlt =
  "An empty stretch of Florida's Turnpike with a wide paved right shoulder, grass verge and pine trees under a clear sky";

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
        height: 1200,
        alt: heroAlt,
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every public-program fact on this page (who patrols the Turnpike, hours,
// what the free patrol carries, response wording, plaza mileposts, exit
// numbers) comes from the FDOT or Florida's Turnpike Enterprise pages listed
// in `sources`, read on the date above. RoadZone Plus is not FDOT, FHP, Road
// Rangers or STARR. The only RoadZone prices quoted are the ranges already
// published on the site's own cost guide.
const sources = {
  tpRoadRangers: {
    name: "Florida's Turnpike Enterprise: Road Rangers Safety Patrol (read October 28, 2026)",
    short: "Florida's Turnpike, Road Rangers",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free assistance 365 days a year by dialing *347; what the patrol does (spare-tire changes, up to 2 gallons of emergency gas, jump starts, water refills, repairs under 15 minutes) and hours by milepost, including 24 hours a day on the Turnpike mainline (Milepost 0 to 308).",
  },
  tpStarr: {
    name: "Florida's Turnpike Enterprise: STARR, Specialty Towing and Roadside Repair (read October 28, 2026)",
    short: "Florida's Turnpike, STARR",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/starr/",
    note: "24/7 service dispatched by the Florida Highway Patrol through *347; charges apply for every service and the operator shows a fee sheet first; covers tows, tire changes, emergency gas, jump starts and simple lockouts.",
  },
  tpSafety: {
    name: "Florida's Turnpike Enterprise: Safety and Assistance (read October 28, 2026)",
    short: "Florida's Turnpike, Safety",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/",
    note: "Call *347 (*FHP) 24 hours a day, 7 days a week for a crash or vehicle trouble anywhere on the Turnpike system; shoulders are for emergency use only; Florida's Move Over law.",
  },
  tpFhp: {
    name: "Florida's Turnpike Enterprise: Florida Highway Patrol Troop K (read October 28, 2026)",
    short: "Florida's Turnpike, FHP",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/florida-highway-patrol-fhp/",
    note: "Troop K is headquartered at the Turkey Lake Service Plaza, Milepost 263, and covers the 450-mile Turnpike system.",
  },
  tpPlazas: {
    name: "Florida's Turnpike Enterprise: Service Plazas (read October 28, 2026)",
    short: "Florida's Turnpike, Service Plazas",
    href: "https://floridasturnpike.com/traveler-resources/service-plazas/",
    note: "Eight service plazas on the mainline about every 40 miles, open 24 hours a day, 7 days a week; fuel stores open 24 hours with regular gas, diesel and E85; Canoe Creek at Milepost 229, Turkey Lake at Milepost 263, Okahumpka at Milepost 299.",
  },
  tpMap: {
    name: "Florida's Turnpike Enterprise: Central Florida Area system map (March 2026, read October 28, 2026)",
    short: "Florida's Turnpike, Central Florida map",
    href: "https://floridasturnpike.com/wp-content/uploads/2026/03/Central-Florida-Area.pdf",
    note: "Exit numbers and names on the Orlando-area stretch of the mainline, from Exit 242 (Kissimmee-St. Cloud South) to Exit 278 (Minneola).",
  },
  tpContact: {
    name: "Florida's Turnpike Enterprise: Contact Us (read October 28, 2026)",
    short: "Florida's Turnpike, Contact",
    href: "https://floridasturnpike.com/about/contact-us/",
    note: "SunPass, TOLL-BY-PLATE and toll-invoice questions go to 1-888-TOLL-FLA (1-888-865-5352), not to the roadside line.",
  },
  fdotFaq: {
    name: "FDOT: Road Ranger Service Patrol, Frequently Asked Questions (read October 28, 2026)",
    short: "FDOT Road Ranger FAQ",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/faq.htm",
    note: "Motorists are not charged; two free local phone calls while being helped; the patrol should locate you within 15 to 30 minutes unless held up by an emergency such as a crash; when a repair is beyond the patrol, the vehicle is moved out of the lane and FHP calls a towing service at the motorist's expense.",
  },
  fdotHome: {
    name: "FDOT: Road Ranger Service Patrol (read October 28, 2026)",
    short: "FDOT Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "Limited no-cost highway assistance; over 6.1 million service assists since the program began in 2000; white trucks with the Road Rangers logo; where to turn if your carrier does not support *347.",
  },
  cfx: {
    name: "Central Florida Expressway Authority: Roadside Assistance (read October 28, 2026)",
    short: "CFX Roadside Assistance",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Road Rangers on the CFX toll roads (SR 408, 417, 414, 429, 528, 451) help more than 4,000 motorists a month, patrol 6:00 AM to 10:00 PM, and Florida's Move Over law: change lanes or slow to 20 mph under the limit.",
  },
  flhsmv: {
    name: "Florida Highway Patrol: Contact FHP (read October 28, 2026)",
    short: "FHP Contact",
    href: "https://www.flhsmv.gov/florida-highway-patrol/contact-fhp/",
    note: "Dial 911 for an emergency, or *FHP (*347) from a mobile phone to report a stranded or disabled motorist to the regional communications center.",
  },
};

type SourceKey = keyof typeof sources;

const whoComes: Array<{
  label: string;
  value: string;
  text: string;
  cite: SourceKey[];
}> = [
  {
    label: "Free: Road Rangers",
    value: "Dial *347 (*FHP)",
    text: "Florida's Turnpike runs its own Road Rangers Safety Patrol 24 hours a day on the mainline. They change a tire using your spare, bring up to 2 gallons of gas, jump a battery, refill a radiator and make repairs that take under 15 minutes. No charge.",
    cite: ["tpRoadRangers", "fdotFaq"],
  },
  {
    label: "Paid: STARR tow and repair",
    value: "Also through *347",
    text: "If the patrol cannot fix it, or you need a tow, the Highway Patrol dispatches the Turnpike's STARR program. Charges apply for every STARR service and the operator shows you a fee sheet before starting.",
    cite: ["tpStarr", "fdotFaq"],
  },
  {
    label: "Direct: RoadZone Plus",
    value: `Call ${site.phoneDisplay}`,
    text: "One call to an Orlando roadside company, 24/7, no membership. Best when you want a jumpstart, spare-tire change, fuel, lockout or key-fob help on the Orlando-area exits, or once you have left the Turnpike for a plaza, a ramp or a local road.",
    cite: [],
  },
];

const firstSteps = [
  {
    title: "Get the whole car onto the right shoulder",
    text: "Signal, coast right and stop with every wheel past the white line. Turnpike shoulders are for emergency use only, so a breakdown is exactly what they are for. The left shoulder next to the fast lane is the last resort.",
  },
  {
    title: "Hazards on, seatbelt on, stay inside",
    text: "Turn on the flashers before the car stops rolling. Stay buckled inside unless there is smoke or fire. Turnpike traffic moves fast and the shoulder is not a sidewalk.",
  },
  {
    title: "Find your milepost or next exit",
    text: "Mileposts are the small green signs on the right every mile. Near Orlando the numbers run from 242 at Kissimmee to 278 at Minneola. Say the road, your direction and the last exit you passed, which is what *347 dispatch asks for.",
  },
  {
    title: "Decide which call fits",
    text: "Blocking a lane, a crash, smoke or an unsafe spot: 911 first. Safely stopped and want the free option: *347. Want a direct Orlando company you choose yourself: RoadZone Plus.",
  },
  {
    title: "Make the call with the car details ready",
    text: "Year, make, model, color, gas or diesel, and whether it is a rental. Then stay with the car with the hazards on until whoever you called arrives.",
  },
];

const exits: Array<{
  exit: string;
  name: string;
  whatIsThere: string;
  areaHref: string;
  areaLabel: string;
}> = [
  {
    exit: "242 / 244",
    name: "Kissimmee-St. Cloud South and North (US 192 and US 441)",
    whatIsThere:
      "The two Kissimmee exits, US 192 hotels and the southern end of the Orlando resort traffic. Canoe Creek Service Plaza sits 13 miles south at Milepost 229.",
    areaHref: "/areas/kissimmee",
    areaLabel: "Kissimmee roadside help",
  },
  {
    exit: "249",
    name: "Osceola Parkway",
    whatIsThere:
      "The toll parkway toward Celebration and the Walt Disney World gates. Resort shuttles, rental cars and families on their first Florida drive.",
    areaHref: "/areas/celebration",
    areaLabel: "Celebration roadside help",
  },
  {
    exit: "254",
    name: "Orlando South (US 17/92/441) and the Beachline (SR 528)",
    whatIsThere:
      "Orange Blossom Trail and the SR 528 interchange toward the airport. Once you leave the mainline for SR 528, Road Ranger hours drop to 6 AM to 10 PM on the Turnpike-run Beachline section.",
    areaHref: "/orlando-airport-roadside-assistance",
    areaLabel: "Airport-area roadside help",
  },
  {
    exit: "259",
    name: "Orlando (I-4)",
    whatIsThere:
      "The I-4 interchange and the tourist corridor. Our I-4 pages cover what to do if you ran out of gas or picked up a flat on the interstate itself.",
    areaHref: "/areas/orlando",
    areaLabel: "Orlando roadside help",
  },
  {
    exit: "263",
    name: "Turkey Lake Service Plaza",
    whatIsThere:
      "Open 24 hours with fuel, food and restrooms, and the headquarters of FHP Troop K. If the car still runs, this is the safest place near Orlando to stop and make your call.",
    areaHref: "/areas/orlando",
    areaLabel: "Orlando roadside help",
  },
  {
    exit: "265 / 267A / 267B",
    name: "SR 408, SR 429 (Western Beltway) and Ocoee (SR 50)",
    whatIsThere:
      "Three exits in a few miles on Orlando's west side. Road Rangers on SR 408 and SR 429 keep different hours from the Turnpike mainline, so note which road you are actually on.",
    areaHref: "/areas/ocoee",
    areaLabel: "Ocoee roadside help",
  },
  {
    exit: "272 / 278",
    name: "Winter Garden-Clermont (SR 50) and Minneola (Hancock Rd.)",
    whatIsThere:
      "The hills west of Orlando. Exits get farther apart from here north, and the next plaza is Okahumpka at Milepost 299.",
    areaHref: "/areas/clermont",
    areaLabel: "Clermont roadside help",
  },
];

const shoulderServices: Array<{
  title: string;
  text: string;
  href: string;
  label: string;
}> = [
  {
    title: "Jumpstart",
    text: "A dead battery on the shoulder, at a plaza or after a night at a Kissimmee hotel. We boost the battery and tell you whether it will hold a charge for the rest of the drive.",
    href: "/services/jumpstart",
    label: "Jumpstart Service",
  },
  {
    title: "Tire change with your spare",
    text: "We install your spare so you are not kneeling next to highway traffic. No usable spare changes the plan, so say so on the call.",
    href: "/services/tire-change",
    label: "Tire Change",
  },
  {
    title: "Fuel delivery",
    text: "Enough gas to reach the next plaza or exit, brought to the shoulder. Useful after 10 PM on SR 528 or SR 429, where the free patrol has gone home.",
    href: "/services/fuel-delivery",
    label: "Fuel Delivery",
  },
  {
    title: "Lockout",
    text: "Keys locked inside at a plaza, a toll ramp or a rest stop. Damage-conscious entry, including rental cars.",
    href: "/services/auto-lockout",
    label: "Auto Lockout",
  },
  {
    title: "Key fob and smart key",
    text: "A push-button car that will not recognize the fob can look like a dead battery. We sort out which it is.",
    href: "/services/smart-key-programming",
    label: "Smart Key Programming",
  },
  {
    title: "Wheel lock removal",
    text: "A flat with a locking lug nut and no key is a tire change that cannot start. We remove the lock first.",
    href: "/services/wheel-lock-removal",
    label: "Wheel Lock Removal",
  },
];

const costRows: Array<{
  service: string;
  range: string;
  note: string;
  href: string;
}> = [
  {
    service: "Jumpstart",
    range: "$50–$120",
    note: "A single boost at the car. Trucks, vans and RVs can run higher.",
    href: "/services/jumpstart",
  },
  {
    service: "Flat tire change",
    range: "$50–$120",
    note: "Installing your usable spare.",
    href: "/services/tire-change",
  },
  {
    service: "Fuel delivery",
    range: "$60–$150 + fuel",
    note: "The trip to you, plus the gas itself.",
    href: "/services/fuel-delivery",
  },
  {
    service: "Car lockout",
    range: "$50–$150",
    note: "Late nights and newer or luxury cars tend toward the top.",
    href: "/services/auto-lockout",
  },
];

const priceFactors = [
  "Where on the Turnpike you are. A shoulder at Exit 259 and a shoulder out past Clermont are different drives for the truck.",
  "Time of day. Late-night calls are usually toward the top of each range.",
  "Vehicle size. Trucks, vans, RVs and trailers take more time and equipment.",
  "What you actually need. A jump that turns into a battery question changes the job, and we say so before doing more.",
  "Whether the free option already fits. If a Road Ranger can change your spare for nothing, we will tell you that on the call.",
];

const safetyTips: Array<{ text: string; cite: SourceKey[] }> = [
  {
    text: "Keep the hazards on the whole time and stay buckled inside. Florida's Move Over law makes passing drivers change lanes or slow to 20 mph under the limit for stopped responders, but it does not protect a person standing on the shoulder.",
    cite: ["cfx", "tpSafety"],
  },
  {
    text: "Do not walk along the Turnpike to a plaza or exit. Plazas are about 40 miles apart and the shoulder is not a walkway. Have fuel or help brought to you.",
    cite: ["tpPlazas"],
  },
  {
    text: "Children and pets: keep them in the car with the windows cracked or the engine running for air conditioning if it still runs. A Florida shoulder in the sun is hotter than it looks, even in winter.",
    cite: [],
  },
  {
    text: "Rental car: tell dispatch it is a rental and have the year, make and model from the key tag. Lockouts and flats on rentals are common on this road.",
    cite: [],
  },
  {
    text: "Tolls do not change. A breakdown does not pause SunPass or TOLL-BY-PLATE charges, and the roadside line cannot help with a toll invoice. The Turnpike's toll line is 1-888-TOLL-FLA.",
    cite: ["tpContact"],
  },
  {
    text: "If a Road Ranger arrives first and the job is bigger than they handle, they move the car out of the lane and FHP calls a tow at your expense. Ask what the tow will cost before you say yes.",
    cite: ["fdotFaq"],
  },
];

const dispatchDetails = [
  {
    label: "Road and direction",
    detail:
      "Say 'Florida's Turnpike northbound' or 'southbound' first. Then whether you are on the mainline or already on SR 528, SR 408 or SR 429.",
  },
  {
    label: "Milepost or exit",
    detail:
      "The green milepost on the right, the last exit you passed, or the next overhead sign. 'Northbound just past Exit 254' gets a truck to you. 'Near Orlando' does not.",
  },
  {
    label: "Vehicle details",
    detail:
      "Year, make, model, color, gas or diesel, and whether it is a rental or a trailer. For a tire change, say whether you have a spare.",
  },
  {
    label: "Where the car sits",
    detail:
      "Fully on the shoulder, partly in a lane, in a gore area at a ramp, or at a plaza. Anything in a lane goes to 911 first.",
  },
];

const relatedLinks = [
  {
    href: "/road-rangers-orlando",
    title: "Road Rangers in Orlando",
    text: "The full free-patrol guide: which Orlando roads they cover, the *347 path and when a private call fits better.",
  },
  {
    href: "/ran-out-of-gas-on-i-4-orlando",
    title: "Ran Out of Gas on I-4",
    text: "What to do on I-4, SR 408 and SR 528 after you leave the Turnpike at Exit 259 or 254.",
  },
  {
    href: "/locked-keys-in-rental-car-orlando",
    title: "Locked Keys in a Rental Car",
    text: "Rental lockouts at plazas, hotels and the airport, and what the rental company will ask.",
  },
  {
    href: "/roadside-assistance-cost-orlando",
    title: "Roadside Assistance Cost in Orlando",
    text: "Every service's published range and what changes the price.",
  },
];

const faqs = [
  {
    question: "Is roadside assistance free on the Florida Turnpike?",
    answer:
      "The Road Rangers Safety Patrol is free. Dial *347 from your mobile phone. On the Turnpike mainline it runs 24 hours a day, 7 days a week, and it covers a spare-tire change, up to 2 gallons of emergency gas, a jump start, a radiator refill and repairs that take under 15 minutes. Towing and bigger repairs are not free: the STARR program and any tow are charged to the driver.",
  },
  {
    question: "What is the phone number for Florida Turnpike roadside assistance?",
    answer:
      "Dial *347, also written *FHP, from a mobile phone anywhere on the Turnpike system. It reaches the Florida Highway Patrol, which sends a Road Ranger or, for a tow, a STARR operator. If your carrier does not support *347, FDOT points drivers to the FHP regional communications centers. For a direct Orlando roadside company instead, call RoadZone Plus at (407) 222-2739.",
  },
  {
    question: "What does *347 do?",
    answer:
      "*347 spells *FHP on a phone keypad. It connects you to the Florida Highway Patrol's regional communications center, which dispatches Road Rangers for free roadside help, STARR for paid towing and repair on the Turnpike, or a trooper for a crash or a disabled vehicle. Dial 911 instead when anyone is hurt, the car is in a lane, or you feel unsafe.",
  },
  {
    question: "How long do Road Rangers take on the Turnpike?",
    answer:
      "FDOT's own answer is that a Road Ranger should be able to locate you within 15 to 30 minutes unless they are held up by an emergency such as a crash. RoadZone Plus does not promise an arrival time on this page: we tell you the real estimate on the call once we know your milepost, your direction and the traffic at that moment.",
  },
  {
    question: "Can you bring gas on the Turnpike?",
    answer:
      "Yes. A Road Ranger can bring up to 2 gallons at no charge on the mainline, 24 hours a day. RoadZone Plus delivers fuel to the shoulder, a plaza or a ramp on the Orlando-area exits, which matters most on SR 528 and SR 429 after 10 PM, when the free patrol on those roads has stopped for the night. Every service plaza also sells regular gas, diesel and E85 around the clock if the car can still reach one.",
  },
  {
    question: "Can you change a tire on the Turnpike shoulder?",
    answer:
      "Yes, if you have a usable spare. Both the Road Rangers and RoadZone Plus install your spare on the shoulder. Pull all the way onto the right shoulder, keep the hazards on and stay in the car until the technician arrives. With no spare, say so on the call: a tow or a mobile tire plan replaces the simple change.",
  },
  {
    question: "Does RoadZone Plus tow on the Turnpike?",
    answer:
      "Towing is not on RoadZone Plus's service list. On the Turnpike, a tow is dispatched by the Highway Patrol through *347 under the STARR program, with a fee sheet shown before the work starts. Call us for a jumpstart, spare-tire change, fuel, lockout, key-fob or wheel-lock problem, and we will tell you on the phone if what you describe needs a tow instead.",
  },
  {
    question: "Which Turnpike exits does RoadZone Plus reach?",
    answer:
      "RoadZone Plus serves Orlando and the towns around it, including Kissimmee, Celebration, Orlando, Ocoee, Winter Garden and Clermont, which the Turnpike passes through. Exact Turnpike coverage is confirmed on the call: give your milepost and direction and we tell you on the spot whether we can reach you and how long it will take.",
  },
  {
    question: "Does my SunPass or toll receipt matter when I break down?",
    answer:
      "Not for the roadside call. Nobody who comes to help you needs your SunPass account, and a breakdown does not pause TOLL-BY-PLATE charges on the segments you already drove. Toll and invoice questions go to the Turnpike's own line, 1-888-TOLL-FLA (1-888-865-5352), not to *347 or to RoadZone Plus.",
  },
];

function SourceTags({ keys }: { keys: SourceKey[] }) {
  if (keys.length === 0) return null;
  return (
    <span className="mt-2 block text-xs leading-5 text-white/48">
      Source:{" "}
      {keys.map((key, index) => (
        <span key={key}>
          {index > 0 ? ", " : null}
          <a
            href={sources[key].href}
            className="underline decoration-white/30 underline-offset-2 hover:text-white"
            rel="noreferrer"
            target="_blank"
          >
            {sources[key].short}
          </a>
        </span>
      ))}
    </span>
  );
}

export default function TurnpikeRoadsideAssistancePage() {
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
    name: "What to do when you break down on Florida's Turnpike near Orlando",
    description:
      "Five safety steps for a breakdown on Florida's Turnpike between the Kissimmee and Minneola exits, and how to choose between *347 and a direct roadside call.",
    totalTime: "PT5M",
    step: firstSteps.map((item, index) => ({
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
    name: "Roadside Assistance on Florida's Turnpike near Orlando",
    serviceType: "Roadside assistance",
    description:
      "24/7 roadside assistance for drivers on the Orlando-area stretch of Florida's Turnpike: jumpstarts, spare-tire changes, fuel delivery, lockouts, key-fob help and wheel lock removal. No membership required.",
    url: absoluteUrl(path),
    provider: {
      "@id": businessId,
    },
    areaServed: [
      { "@type": "City", name: "Orlando, FL" },
      { "@type": "City", name: "Kissimmee, FL" },
      { "@type": "City", name: "Ocoee, FL" },
      { "@type": "City", name: "Clermont, FL" },
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    datePublished: updatedIso,
    dateModified: updatedIso,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(heroImage),
      width: 1600,
      height: 1200,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@id": businessId,
    },
    about: {
      "@id": `${absoluteUrl(path)}#service`,
    },
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Roadside Assistance on Florida's Turnpike", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, howToSchema, serviceSchema, webPageSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Florida&apos;s Turnpike near Orlando
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Roadside assistance on Florida&apos;s Turnpike near Orlando.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Stuck on the Turnpike? Dial{" "}
              <span className="font-black text-white">*347</span> for the free Road Rangers
              patrol, which runs 24 hours a day on the Turnpike mainline and brings up to 2
              gallons of gas, a jump or a spare-tire change at no charge. Want a direct
              Orlando company you pick yourself, with no membership? Call RoadZone Plus at{" "}
              <span className="font-black text-white">{site.phoneDisplay}</span> for a
              jumpstart, tire change, fuel delivery or lockout near the Turnpike exits for
              Kissimmee, Celebration, Orlando, Ocoee, Winter Garden and Clermont. Give your
              milepost and we tell you on the call whether we can reach you.
            </p>
            <p className="mt-4 text-sm font-bold text-white/48">
              Updated <time dateTime={updatedIso}>{updatedLabel}</time> ·{" "}
              <a
                href="#sources"
                className="inline-flex min-h-11 items-center underline decoration-white/30 underline-offset-2 hover:text-white"
              >
                See every source
              </a>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/jumpstart" className="btn btn-secondary">
                Jumpstart Service
              </Link>
            </div>
          </div>

          <aside className="card overflow-hidden bg-panel">
            <Image
              src={heroImage}
              alt={heroAlt}
              width={1600}
              height={1200}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="text-sm font-black uppercase text-safety-yellow">
                On the shoulder right now?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                Hazards on, stay buckled, note your milepost, then call. We are not FDOT or
                the Road Rangers: we are a direct 24/7 Orlando roadside company.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 flex min-h-11 items-center gap-3 text-2xl font-black text-white"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="who-comes" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Who can reach you
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Three ways to get help on the Turnpike, and when each one is the right call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Florida&apos;s Turnpike has its own free patrol, its own paid tow program and a
              Highway Patrol troop based at Turkey Lake. RoadZone Plus is the other option:
              a private company you call directly. Here is how they differ.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {whoComes.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-white/42">{item.label}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{item.value}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>

          <div className="mt-6 max-w-3xl text-sm leading-6 text-white/56">
            <p>
              FDOT counts more than 6.1 million Road Ranger assists statewide since 2000, and
              on Central Florida&apos;s expressways the patrol helps more than 4,000 drivers a
              month. The free option is real. It is also limited to what fits in 15 minutes,
              and on SR 528, SR 408 and SR 429 the patrol runs 6 AM to 10 PM rather than all
              night.
            </p>
            <SourceTags keys={["fdotHome", "cfx", "tpRoadRangers"]} />
          </div>
        </div>
      </section>

      <section id="right-now" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              Stranded right now
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Five steps before you make any call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The Turnpike is a fast road with long gaps between exits. Get safe, get
              located, then choose the call. The order matters more than the speed.
            </p>
            <figure className="mt-8">
              <Image
                src="/visuals/turnpike/turnpike-south-sign.webp"
                alt="An overhead green sign for Florida's Turnpike South with a SunPass or TOLL-BY-PLATE panel above a multi-lane highway"
                width={1600}
                height={1301}
                loading="lazy"
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                The Turnpike&apos;s mainline is electronic-toll only. Dispatch needs your
                direction and the last exit or milepost you passed, not your toll
                account.
              </figcaption>
            </figure>
          </div>

          <div className="grid gap-4">
            {firstSteps.map((step, index) => (
              <div key={step.title} id={`step-${index + 1}`} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{step.text}</p>
              </div>
            ))}
            <SourceTags keys={["tpSafety", "tpMap", "flhsmv"]} />
          </div>
        </div>
      </section>

      <section id="which-stretch" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Which stretch are you on?
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The Orlando-area Turnpike exits, from Kissimmee to Minneola.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              These are the Orlando-area exits from the Turnpike&apos;s own map. Exit
              numbers equal mileposts, so Exit 259 is also Milepost 259. The table is a
              map, not a coverage promise: RoadZone Plus serves Orlando and the towns
              around it, and whether we can reach your exact milepost is confirmed on the
              call.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Orlando-area exits on Florida&apos;s Turnpike mainline with what is nearby
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Exit
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Interchange
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    What is there
                  </th>
                </tr>
              </thead>
              <tbody>
                {exits.map((row, index) => (
                  <tr
                    key={row.exit}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[16%] md:p-5">
                      <span className="block text-2xl font-black text-safety-yellow">
                        {row.exit}
                      </span>
                    </th>
                    <td className="mt-2 block align-top md:mt-0 md:table-cell md:w-[30%] md:p-5">
                      <span className="block font-black text-white">{row.name}</span>
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      {row.whatIsThere}
                      <Link
                        href={row.areaHref}
                        className="mt-2 inline-flex min-h-11 items-center font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200"
                      >
                        {row.areaLabel}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SourceTags keys={["tpMap", "tpPlazas", "tpFhp", "tpRoadRangers"]} />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-black text-white">
                If the car still runs, a service plaza beats the shoulder.
              </h3>
              <p className="mt-3 text-base leading-8 text-white/66">
                The Turnpike&apos;s eight mainline plazas are open 24 hours a day, about 40
                miles apart, and their fuel stores never close. Near Orlando that means Canoe
                Creek at Milepost 229 south of Kissimmee, Turkey Lake at Milepost 263 between
                I-4 and SR 408, and Okahumpka at Milepost 299 north of Minneola. A plaza
                gives you lighting, restrooms, a place to park out of traffic and a clear
                address to give whoever you call.
              </p>
              <SourceTags keys={["tpPlazas"]} />
            </div>
            <figure>
              <Image
                src="/visuals/turnpike/service-plaza-exit-sign.webp"
                alt="A blue 'Service Plaza, Exit Left' sign beside Florida's Turnpike with palm trees and a clear sky"
                width={1600}
                height={1200}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                Plaza exits leave from the left on the Turnpike. If you can limp there,
                do, then call from the lot.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="eyebrow">
                <Wrench aria-hidden="true" size={16} />
                What RoadZone Plus does on the shoulder
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                Six roadside jobs we handle for Turnpike drivers near the towns we serve. Towing is not one of them.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                RoadZone Plus is a 24/7 roadside assistance company based at{" "}
                {site.address.street} in Orlando. We come to the car for the problems below.
                If the car needs a tow, *347 dispatches the Turnpike&apos;s STARR tow program,
                and we will tell you that on the phone rather than send a truck that cannot
                help.
              </p>
              <figure className="mt-8">
                <Image
                  src="/visuals/turnpike/spare-tire-fitted.webp"
                  alt="A compact spare tire with a yellow 50 mph caution label fitted to a car's rear wheel"
                  width={1600}
                  height={1067}
                  loading="lazy"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="h-auto w-full rounded-md border border-white/10"
                />
                <figcaption className="mt-3 text-sm leading-6 text-white/56">
                  A compact spare carries its own speed label, here 50 mph. After the
                  change, leave the Turnpike at the next exit rather than pushing on at
                  highway speed.
                </figcaption>
              </figure>
              <div className="mt-8">
                <a href={site.phoneHref} className="btn btn-primary">
                  <PhoneCall aria-hidden="true" size={18} />
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {shoulderServices.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
                >
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{item.text}</p>
                  <span className="mt-5 inline-flex min-h-11 items-center text-sm font-black text-white group-hover:text-red-200">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cost" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <DollarSign aria-hidden="true" size={16} />
              What it costs on the Turnpike
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The free patrol costs nothing. A direct call has a price you hear first.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Road Rangers never charge, and STARR shows a fee sheet before any work. For a
              direct RoadZone Plus call, these are the Orlando-area ranges from our{" "}
              <Link
                href="/roadside-assistance-cost-orlando"
                className="font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200"
              >
                cost guide
              </Link>
              . They are general market figures, not a quote: we confirm your exact price on
              the call before anyone is dispatched.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            {costRows.map((row, index) => (
              <div
                key={row.service}
                className={`grid gap-4 bg-black/20 p-5 md:grid-cols-[0.8fr_0.6fr_1.4fr] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Service</p>
                  <Link
                    href={row.href}
                    className="mt-2 inline-flex min-h-11 items-center font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200"
                  >
                    {row.service}
                  </Link>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Published range</p>
                  <p className="mt-2 font-black text-safety-yellow">{row.range}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Note</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{row.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="text-2xl font-black text-white">What moves the price on a Turnpike call</h3>
              <p className="mt-3 text-base leading-8 text-white/66">
                Five things decide where in the range you land. We ask about all of them
                before quoting.
              </p>
            </div>
            <ol className="grid gap-3">
              {priceFactors.map((factor, index) => (
                <li key={factor} className="card-solid flex gap-4 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-white/72">{factor}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="how-long" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              How long it takes
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              An honest answer on timing, with no promise we cannot keep.
            </h2>
          </div>
          <div className="grid gap-4 text-base leading-8 text-white/66">
            <p>
              FDOT says a Road Ranger should be able to locate you within 15 to 30 minutes
              on a patrolled road, unless the patrol is held up by an emergency such as a
              crash. That is the public program&apos;s own figure, and it depends on which
              zone the truck is in when you call.
            </p>
            <p>
              RoadZone Plus does not print an arrival time. The honest number depends on
              your milepost, your direction, the time of night and what I-4 and SR 408 are
              doing at that moment. What we do is tell you the real estimate on the call,
              before you decide, and call back if it changes.
            </p>
            <p>
              The fastest thing you control is the location. &quot;Turnpike southbound, just
              past Exit 265, fully on the right shoulder, silver Toyota rental&quot; gets a
              truck moving in one sentence.
            </p>
            <SourceTags keys={["fdotFaq"]} />
          </div>
        </div>
      </section>

      <section id="stay-safe" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Stay safe while you wait
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Six rules for a Turnpike shoulder, including the toll question.
            </h2>
          </div>
          <div className="grid gap-4">
            {safetyTips.map((tip) => (
              <div key={tip.text} className="card-solid flex items-start gap-3 p-5">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-route-green" size={18} />
                <div className="text-sm leading-6 text-white/68">
                  <p>{tip.text}</p>
                  <SourceTags keys={tip.cite} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dispatch" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What to tell dispatch
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four details that get a truck to the right shoulder.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {dispatchDetails.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="related" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Related help
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Pages that connect to a Turnpike breakdown.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-solid group p-5 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <h3 className="text-lg font-black text-white">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{link.text}</p>
                <span className="mt-5 inline-flex min-h-11 items-center text-sm font-black text-white group-hover:text-red-200">
                  Open page
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Florida Turnpike roadside assistance questions
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

      <section id="sources" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ExternalLink aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Where the public-program facts come from.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each page below was read on {updatedLabel}. RoadZone Plus is not FDOT,
              Florida&apos;s Turnpike Enterprise, the Florida Highway Patrol, Road Rangers or
              STARR, and does not operate any public program. Hours and coverage change;
              check the official page before relying on the free option.
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
                  <ExternalLink aria-hidden="true" size={15} />
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
            <p className="text-sm font-black uppercase text-white/72">Stuck on the Turnpike?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus with your milepost and direction.
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
