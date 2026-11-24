import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  ExternalLink,
  Info,
  MapPin,
  PhoneCall,
  Route,
  ThermometerSun,
  TriangleAlert,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/jump-start-service-kissimmee-fl";
const title = "Jump Start Service in Kissimmee, FL, 24/7";
const description =
  "24/7 jump start service in Kissimmee, FL at hotels, vacation homes and US 192 lots, plus where free Road Ranger jump starts run on the Turnpike and I-4, and when.";
const updatedIso = "2026-11-24";
const updatedLabel = "November 24, 2026";
const heroImage = "/visuals/battery-cost/jumper-cable-clamps.webp";
const heroAlt =
  "Two pairs of red and black jumper cable clamps resting on an open engine";

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
        width: 1200,
        height: 800,
        alt: heroAlt,
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every hour, mile marker, exit and battery fact on this page is quoted from a
// page in `sources`, read on the date above: Florida's Turnpike, the Central
// Florida Expressway Authority and FDOT for Road Ranger services and hours,
// FDOT's Road Ranger coverage map (its RoadRangerBeats feature service) for the
// I-4 beat through Kissimmee, Wikipedia's Interstate 4 exit list for which
// exits that beat covers, Interstate Batteries and Consumer Reports (quoting
// AAA) for battery life, heat and drains, and a Toyota owner's manual for the
// hybrid jump terminal. RoadZone Plus facts are limited to what its own
// jumpstart service page and Kissimmee page already say: 24/7 jump starts where
// the car is parked, a basic no-start check, a safe boost attempt, help deciding
// whether the battery needs replacing, hybrids and EVs, no membership and no
// app. No price, arrival time, certification, years in business or field
// experience is claimed.
const sources = {
  turnpike: {
    name: "Florida's Turnpike: Road Rangers Safety Patrol (read November 24, 2026)",
    short: "Florida's Turnpike",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free roadway assistance includes tire changes with the vehicle's spare, emergency gas (up to 2 gallons), jump starts, water refills and minor emergency repairs that take less than 15 minutes; every Turnpike milepost band from 0 to 308 is listed at 24 hours a day, 7 days a week; the SR 417 Southern Connector (mileposts 0 to 10) and the SR 429 Western Beltway (mileposts 0 to 11) are listed at 6am to 10pm, 7 days a week; dial *347.",
  },
  fdotMap: {
    name: "FDOT: Road Ranger coverage map, RoadRangerBeats layer (read November 24, 2026)",
    short: "FDOT coverage map",
    href: "https://fdot.maps.arcgis.com/apps/webappviewer/index.html?id=e375cf8cdf664c10961fb879788205bb",
    note: "Beat \"I-4 from MM 58 to MM 72\": Monday to Thursday 6:00 a.m. to midnight, Friday to Sunday 6:00 a.m. to 3:30 a.m. Beat \"Florida's Turnpike MM 193 to MM 309\": 24 hours a day. None of the map's 116 beats names US 192.",
  },
  fdot: {
    name: "FDOT: Road Rangers (read November 24, 2026)",
    short: "FDOT",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "Road Rangers are roving vehicles that patrol congested areas and high incident locations of the freeway and provide limited no-cost highway assistance; services can include jump-starting vehicles and making minor repairs; call *347 on your mobile phone.",
  },
  fdotFaq: {
    name: "FDOT: Road Ranger frequently asked questions (read November 24, 2026)",
    short: "FDOT FAQ",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/faq.htm",
    note: "Motorists are not charged for the service; Road Rangers should be able to locate you within 15 to 30 minutes unless detained by an emergency such as a crash; when a repair exceeds their services, the truck moves the car out of the travel lane and FHP contacts a towing service at the motorist's expense.",
  },
  cfx: {
    name: "Central Florida Expressway Authority: Roadside Assistance (read November 24, 2026)",
    short: "CFX",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Road Rangers provide free assistance on SR 408, SR 417, SR 414, SR 429, SR 528 and SR 451; dial *347 (*FHP); hours 6:00 AM to 10:00 PM.",
  },
  wikipediaI4: {
    name: "Wikipedia: Interstate 4, exit list (read November 24, 2026)",
    short: "Wikipedia, I-4 exits",
    href: "https://en.wikipedia.org/wiki/Interstate_4",
    note: "Osceola County exits: 58 (CR 532 to Poinciana and Kissimmee), 60 (SR 429), 62 (SR 417 and World Drive, Celebration), 64 (US 192 to Kissimmee and Magic Kingdom), 65 (Osceola Parkway); then 68 (SR 535 to Kissimmee and Lake Buena Vista) in Orange County.",
  },
  interstateHeat: {
    name: "Interstate Batteries: Is your car's battery ready for the summer? (read November 24, 2026)",
    short: "Interstate Batteries, heat",
    href: "https://www.interstatebatteries.com/en-lx/heat-kills-batteries",
    note: "The average car or truck battery lasts three to five years; the warmer the weather, the faster a battery will corrode; a car that sits unused for longer than two months will eventually drain the battery, especially if it is three years or older; a rotten-egg smell, a swollen case or steam means the battery is probably overheated: shut the engine down and wait for it to cool before addressing the problem.",
  },
  interstateDied: {
    name: "Interstate Batteries: Why Your Car Battery Died (read November 24, 2026)",
    short: "Interstate Batteries, why batteries die",
    href: "https://www.interstatebatteries.com/blog/why-did-my-car-battery-die",
    note: "Batteries work best at 80°F and above 90°F the chemistry starts to degrade the components inside; short trips drain a battery when the alternator never gets long enough to recharge it; a start is one 30-second burst followed by about 20 minutes of recharge from the alternator; key fobs close enough to repeatedly signal the parked car are listed among the drains; a dead battery can also point to the alternator, the starter or a broken wire.",
  },
  consumerReports: {
    name: "Consumer Reports: How Hot Weather Affects Your Car Battery (read November 24, 2026)",
    short: "Consumer Reports, quoting AAA",
    href: "https://www.consumerreports.org/cars/car-batteries/how-hot-weather-affects-your-car-battery-what-to-do-about-it-a4527456418/",
    note: "Car batteries typically last three to five years according to AAA, from 58 months or longer in the farthest northern regions of the U.S. to less than 41 months in the most southern regions.",
  },
  toyota: {
    name: "Toyota Prius (XW60) 2023-2026 Owner's Manual: If the 12-volt battery is discharged (read November 24, 2026)",
    short: "Toyota owner's manual",
    href: "https://www.mytoyo.com/if_the_12_volt_battery_is_discharged-252.html",
    note: "With jumper cables and a second vehicle with a 12-volt battery you can jump start the hybrid system; open the exclusive jump starting terminal cover and connect the positive clamp there, using cables that reach the specified terminals.",
  },
} as const;

type SourceKey = keyof typeof sources;

const byRoad: Array<{
  road: string;
  who: string;
  hours: string;
  detail: string;
  keys: SourceKey[];
}> = [
  {
    road: "Florida's Turnpike",
    who: "Road Rangers, free: dial *347",
    hours: "24 hours a day, 7 days a week",
    detail:
      "Florida's Turnpike lists jump starts among its free Road Ranger services and lists every milepost band from 0 to 308 at 24 hours a day. If the car still will not start after their boost, or you have already left the Turnpike, call RoadZone Plus.",
    keys: ["turnpike"],
  },
  {
    road: "I-4 through Kissimmee and Celebration",
    who: "Road Rangers, free: dial *347, during listed hours",
    hours: "Mon to Thu 6 AM to midnight · Fri to Sun 6 AM to 3:30 AM",
    detail:
      "FDOT's coverage map lists the I-4 patrol from mile marker 58 to 72, the stretch with the CR 532, SR 417, US 192 and Osceola Parkway exits. Between midnight and 6 AM Monday to Thursday, and between 3:30 AM and 6 AM Friday to Sunday, no patrol is listed there: call RoadZone Plus.",
    keys: ["fdotMap", "wikipediaI4"],
  },
  {
    road: "SR 417 and SR 429 toll roads",
    who: "Road Rangers, free: dial *347, during listed hours",
    hours: "6 AM to 10 PM",
    detail:
      "Florida's Turnpike lists Road Rangers on the SR 417 Southern Connector (mileposts 0 to 10) and the SR 429 Western Beltway (mileposts 0 to 11) from 6 AM to 10 PM, and the Central Florida Expressway Authority lists the same hours on SR 408, 417, 414, 429, 528 and 451. From 10 PM to 6 AM, call RoadZone Plus.",
    keys: ["turnpike", "cfx"],
  },
  {
    road: "US 192, hotel lots, garages and vacation homes",
    who: "RoadZone Plus: call (407) 222-2739",
    hours: "Any hour",
    detail:
      "None of the beats on FDOT's Road Ranger map names US 192, and FDOT describes Road Rangers as patrols of the freeway. A dead battery in a hotel lot, a parking garage, a vacation-home driveway or a US 192 parking lot is a call to RoadZone Plus, day or night.",
    keys: ["fdotMap", "fdot"],
  },
];

const whyItDies: Array<{ title: string; text: string; keys: SourceKey[] }> = [
  {
    title: "Florida heat shortens battery life",
    text: "Interstate Batteries says batteries work best at 80°F and that above 90°F the chemistry starts to wear down the parts inside. AAA, quoted by Consumer Reports, puts typical battery life at less than 41 months in the most southern regions of the U.S., against 58 months or longer in the far north.",
    keys: ["interstateDied", "consumerReports"],
  },
  {
    title: "A car parked for days at a vacation home or hotel",
    text: "Interstate Batteries lists a key fob close enough to keep signaling the parked car among the drains on a battery, so in a vacation-home garage, keep the fob away from the car. A car left unused for longer than two months will eventually drain, especially if the battery is three years or older.",
    keys: ["interstateDied", "interstateHeat"],
  },
  {
    title: "Short hops between the parks, the hotel and dinner",
    text: "Interstate Batteries describes a start as one 30-second burst followed by about 20 minutes of recharge from the alternator. Short trips that never give it that time leave the battery weaker with each start.",
    keys: ["interstateDied"],
  },
  {
    title: "It may not be the battery at all",
    text: "Interstate Batteries says a dead battery can also be a sign of a failing alternator, a starter that has given out or a broken wire draining the battery. If the car dies again soon after a jump, that is the next thing to have checked.",
    keys: ["interstateDied"],
  },
];

const tellUs: Array<{ label: string; detail: string }> = [
  {
    label: "Where the car is",
    detail:
      "The hotel or resort name and the building or garage level; the vacation-home community, street and house number, and how to get through the gate; on US 192, the nearest cross street or business; on the Turnpike or I-4, your direction and the last exit you passed.",
  },
  {
    label: "What the car is",
    detail:
      "Year, make, model and color. Say if it is a hybrid or has a push-button start, and if it is a rental, which company and the plate.",
  },
  {
    label: "What it does when you try",
    detail:
      "A clicking sound, a slow crank, dim dashboard lights or nothing at all. That tells the technician what to check first.",
  },
  {
    label: "What it will cost",
    detail:
      "Ask on the call, before the technician heads out. RoadZone Plus needs no membership and no app.",
  },
];

const relatedLinks = [
  {
    href: "/services/jumpstart",
    title: "Jumpstart service",
    text: "What the jump start call covers across Orlando: the symptom check, the boost and the replacement decision.",
  },
  {
    href: "/areas/kissimmee",
    title: "Roadside assistance in Kissimmee",
    text: "Tire changes, fuel, lockouts and wheel lock removal in Kissimmee, and who to call on each road.",
  },
  {
    href: "/jump-start-cost-orlando",
    title: "How much a jump start costs",
    text: "What roadside clubs, insurers and pay-per-use services publish for a jump start, side by side.",
  },
  {
    href: "/car-battery-replacement-cost-orlando",
    title: "Car battery replacement cost",
    text: "When the battery is past a boost: what a new battery and installation cost in Orlando.",
  },
  {
    href: "/roadside-assistance-near-disney-world-resort",
    title: "Roadside help near Disney World",
    text: "Who to call at the parks and Disney Springs, and where Disney's own Car Care Center stops.",
  },
  {
    href: "/locked-keys-in-rental-car-orlando",
    title: "Rental car trouble",
    text: "What to have ready with a rental, and when the rental company is the right call instead.",
  },
];

const faqs = [
  {
    question: "Is there 24 hour jump start service in Kissimmee, FL?",
    answer:
      "Yes. RoadZone Plus provides jump starts 24 hours a day, 7 days a week in Kissimmee: in hotel lots, parking garages, vacation-home driveways, US 192 parking lots and at the roadside. Call (407) 222-2739, say where the car is and what it does when you turn the key. There is no membership and no app.",
  },
  {
    question: "Do Road Rangers give free jump starts in Kissimmee?",
    answer:
      "On the highways they patrol, yes. Florida's Turnpike lists jump starts among its free Road Ranger services, 24 hours a day. On I-4 from mile marker 58 to 72, FDOT's map lists patrols Monday to Thursday from 6 AM to midnight and Friday to Sunday from 6 AM to 3:30 AM. On SR 417 and SR 429, Florida's Turnpike and CFX list 6 AM to 10 PM. Dial *347 there. US 192, hotel lots and vacation homes are not on their routes.",
  },
  {
    question: "Can you jump start a car at a Kissimmee vacation home or hotel?",
    answer:
      "Yes. Give the community or hotel name, the street and house number or the building and garage level, and how to get through any gate, and the technician comes to the car in the driveway, lot or garage.",
  },
  {
    question: "Can you jump start a hybrid or a push-button start car?",
    answer:
      "Yes. Hybrids and EVs still use a 12-volt battery to wake the car up, and that battery can die like any other. Some hybrids have a separate jump point: Toyota's Prius manual has the positive clamp go on an exclusive jump starting terminal. Tell the dispatcher the year, make and model.",
  },
  {
    question: "My car died again after a jump. What now?",
    answer:
      "A battery that dies again may be near the end of its life: AAA puts typical battery life at less than 41 months in the most southern regions of the U.S. It can also be the alternator, the starter or a drain. RoadZone Plus can help you decide whether the battery needs replacing; its battery replacement service starts with a condition check and offers on-site installation support when available.",
  },
  {
    question: "How much does a jump start cost in Kissimmee?",
    answer:
      "Ask on the call: RoadZone Plus gives the price before the technician heads out, with no membership needed. For what roadside clubs, insurers and pay-per-use services publish for a jump start, see the jump start cost guide on this site.",
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

export default function JumpStartServiceKissimmeePage() {
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
    "@id": `${absoluteUrl(path)}#service`,
    name: "Jump start service in Kissimmee, FL",
    serviceType: "Jump start",
    description,
    url: absoluteUrl(path),
    provider: {
      "@id": businessId,
    },
    areaServed: {
      "@type": "City",
      name: "Kissimmee",
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Areas", path: "/areas" },
    { name: "Kissimmee", path: "/areas/kissimmee" },
    { name: "Jump Start Service in Kissimmee", path },
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
              <MapPin aria-hidden="true" size={16} />
              Kissimmee, FL
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Jump start service in Kissimmee, FL, 24 hours a day.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Dead battery in Kissimmee? RoadZone Plus comes to the car any hour: a hotel
              lot, a parking garage, a vacation-home driveway or a US 192 parking lot. The
              technician checks the no-start, connects the cables safely, attempts the
              boost and helps you decide whether the battery needs replacing. On
              Florida&apos;s Turnpike, Road Rangers give free jump starts around the clock
              (dial *347); on I-4 through Kissimmee their listed hours end at midnight
              Monday to Thursday and at 3:30 AM Friday to Sunday.
            </p>
            <SourceTags keys={["turnpike", "fdotMap"]} />
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
              <a
                href={site.phoneHref}
                data-call-cta="kissimmee-jump-hero"
                className="btn btn-primary"
              >
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
              width={1200}
              height={800}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="text-sm font-black uppercase text-safety-yellow">
                Car won&apos;t start right now?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                Say where the car is in Kissimmee and what it does when you turn the key.
              </p>
              <a
                href={site.phoneHref}
                data-call-cta="kissimmee-jump-card"
                className="mt-5 flex min-h-11 items-center gap-3 text-2xl font-black text-white"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="by-road" className="section border-b border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Who jump-starts you, road by road
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A free jump start or a call to us: it depends on the road and the hour.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Road Rangers are free and FDOT lists jump starts among their services, but
              they patrol the freeways during set hours. FDOT says they should reach you
              within 15 to 30 minutes unless a crash holds them up. Everywhere else in
              Kissimmee, and on those roads outside their hours, the call is RoadZone Plus.
            </p>
            <SourceTags keys={["fdot", "fdotFaq"]} />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {byRoad.map((item) => (
              <div key={item.road} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{item.road}</p>
                <p className="mt-3 text-xl font-black leading-7 text-white">{item.who}</p>
                <p className="mt-2 text-sm font-bold text-safety-yellow">{item.hours}</p>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.detail}</p>
                <SourceTags keys={item.keys} />
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/60">
            If the car is in a travel lane, anyone is hurt, or you feel unsafe on the
            shoulder, call 911 first. For Road Ranger hours on every Central Florida road,
            see{" "}
            <Link
              href="/road-rangers-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              Road Rangers in Orlando
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="why-it-dies" className="section bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <ThermometerSun aria-hidden="true" size={16} />
              Why batteries die on a Kissimmee trip
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Heat, cars that sit, and short hops.
            </h2>
            <div className="mt-8 grid gap-4">
              {whyItDies.map((item) => (
                <div key={item.title} className="card-solid p-6">
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                  <SourceTags keys={item.keys} />
                </div>
              ))}
            </div>
          </div>
          <figure className="card overflow-hidden bg-panel">
            <Image
              src="/visuals/battery-cost/parking-garage-level.webp"
              alt="An empty level of a multistory parking garage with marked bays"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="p-5 text-sm leading-6 text-white/60">
              Garages, hotel lots and vacation-home driveways are off the freeway, where
              Road Rangers do not patrol. Give the level or the house number when you call.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="hybrids" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <figure className="card overflow-hidden bg-road-black">
            <Image
              src="/visuals/car-key-cost/push-button-start.webp"
              alt="Close-up of a round START STOP push-button ignition on a car dashboard"
              width={1200}
              height={675}
              loading="lazy"
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="h-auto w-full"
            />
          </figure>
          <div>
            <div className="eyebrow">
              <BatteryCharging aria-hidden="true" size={16} />
              Hybrids and push-button cars
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A hybrid still needs its <span className="whitespace-nowrap">12-volt</span>{" "}
              battery to wake up.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Hybrids and EVs still use a regular 12-volt battery to power the electronics
              and wake the car up, and a jump start is the usual fix when it dies. Some
              hybrids have their own jump point: Toyota&apos;s Prius manual has the
              positive clamp go on an exclusive jump starting terminal under a cover. Tell
              the dispatcher the year, make and model so the technician knows where to
              connect.
            </p>
            <SourceTags keys={["toyota"]} />
          </div>
        </div>
      </section>

      <section id="before-you-jump" className="section bg-road-black">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="card-solid p-6">
            <div className="eyebrow">
              <TriangleAlert aria-hidden="true" size={16} />
              Stop first if you see this
            </div>
            <h2 className="mt-5 text-3xl font-black text-white">
              A swollen battery, steam or a rotten-egg smell.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/66">
              Interstate Batteries says those signs mean the battery is probably
              overheated: shut the engine down and wait for the car to cool before doing
              anything else. Tell the dispatcher what you see.
            </p>
            <SourceTags keys={["interstateHeat"]} />
          </div>
          <div className="card-solid p-6">
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              When a jump is not enough
            </div>
            <h2 className="mt-5 text-3xl font-black text-white">
              The car died again, or the battery is three years old or more.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/66">
              Interstate Batteries puts the average battery at three to five years, and
              AAA puts typical life in the most southern regions below 41 months. If the
              car will not hold a charge, RoadZone Plus can help you decide on a new
              battery; its battery replacement service starts with a condition check and offers on-site installation support when available. If a
              new battery dies too, have the alternator and starter checked.
            </p>
            <SourceTags keys={["interstateHeat", "consumerReports", "interstateDied"]} />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/battery-replacement" className="btn btn-secondary">
                Battery replacement
              </Link>
              <Link href="/dead-battery-car-wont-start-orlando" className="btn btn-secondary">
                Dead battery guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="on-the-call" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              On the call
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four things to have ready in Kissimmee.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus is a 24/7 roadside assistance company in Orlando that serves
              Kissimmee. One call, a real person, no membership and no app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                data-call-cta="kissimmee-jump-on-the-call"
                className="btn btn-primary"
              >
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {tellUs.map((item) => (
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
              More for drivers in Kissimmee.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              Kissimmee jump start questions
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
              Where every hour, exit and battery figure on this page comes from.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each page below was read on {updatedLabel}. Road Ranger hours come from
              Florida&apos;s Turnpike, CFX and FDOT, battery figures from Interstate
              Batteries and AAA, and the hybrid jump point from a Toyota owner&apos;s
              manual, not from us. Your own owner&apos;s manual comes first.
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
            <p className="text-sm font-black uppercase text-white/72">
              Dead battery in Kissimmee?
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus for a 24/7 jump start.
            </h2>
          </div>
          <a
            href={site.phoneHref}
            data-call-cta="kissimmee-jump-final"
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
