import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ExternalLink,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/flat-tire-on-i-4-orlando";
const title = "Flat Tire on the Highway Near Orlando: What to Do on I-4";
const description =
  "Flat tire on I-4 or another Orlando highway? Get out of the lane, hazards on, dial *347 for a free Road Ranger. Patrol hours by I-4 mile marker, and 24/7 help.";

// The patrol hours, rules and figures below were read on the sources' own pages on this date (New York time).
const updatedLabel = "November 26, 2026";
const updatedIso = "2026-11-26";

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

const sources = {
  fdotHome: {
    name: "Florida Department of Transportation, Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "The services list (change flat tires, jump starts and minor repairs, emergency gasoline, diesel and water, two free local calls) and more than 6.1 million service assists since 2000.",
  },
  fdotFaq: {
    name: "Florida Department of Transportation, Road Ranger FAQ",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/faq.htm",
    note: "No charge to motorists, 15 to 30 minutes to locate you, what Florida law asks when a car blocks a travel lane, and what happens when a repair is beyond the Road Rangers.",
  },
  fdotBeats: {
    name: "FDOT Road Ranger service map, District 5 (Central Florida) patrol records",
    href: "https://services1.arcgis.com/O1JpcwDW8sjYuddV/arcgis/rest/services/RoadRangerBeats/FeatureServer/19",
    note: "Patrol hours for I-4 by mile marker: 58 to 72, 72 to 98, 98 to 114.",
  },
  i4WhoToCall: {
    name: "I-4 Beyond (FDOT), \"Need Help on the Road? Know Who to Call\" (September 17, 2026)",
    href: "https://i4beyond.com/need-help-on-the-road-know-who-to-call/",
    note: "When to call 911 and when to call *FHP (*347) on I-4.",
  },
  i4RoadRangers: {
    name: "I-4 Beyond (FDOT), \"Road Rangers: Heroes of the Highway\"",
    href: "https://i4beyond.com/road-rangers-heroes-of-the-highway/",
    note: "What to tell the dispatcher, and the roads Road Rangers patrol, I-4 Express among them.",
  },
  i4Express: {
    name: "I-4 Beyond (FDOT), Managed Lanes",
    href: "https://i4beyond.com/project-info-map/managed-lanes/",
    note: "Where the I-4 Express lanes run: from west of Kirkman Road to east of SR 434, two lanes in each direction.",
  },
  turnpike: {
    name: "Florida's Turnpike, Road Rangers Safety Patrol",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free tire changes with the vehicle's spare, and emergency gas of up to 2 gallons, on the Turnpike system.",
  },
  moveOverStatute: {
    name: "Florida Statutes, section 316.126 (Move Over)",
    href: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.126.html",
    note: "What other drivers must do for a disabled vehicle showing hazard lights.",
  },
  moveOverFlhsmv: {
    name: "Florida Highway Safety and Motor Vehicles, Move Over",
    href: "https://www.flhsmv.gov/safety-center/driving-safety/move-over/",
    note: "A vehicle with a flat tire is protected under the law; 205 crashes and more than 17,500 citations in 2024.",
  },
  aaaSpare: {
    name: "AAA Newsroom, \"Spare Me! AAA Finds Nearly One-Third of New Vehicles are Missing a Spare Tire\" (October 18, 2017)",
    href: "https://newsroom.aaa.com/2017/10/spare-aaa-finds-nearly-one-third-new-vehicles-missing-spare-tire/",
    note: "28 percent of 2017 model year vehicles without a spare as standard equipment, and the limits of inflator kits.",
  },
  i4Exits: {
    name: "Wikipedia, Interstate 4 (exit list)",
    href: "https://en.wikipedia.org/wiki/Interstate_4",
    note: "Exit numbers and the roads they serve between exits 58 and 104.",
  },
} as const;

type WhoToCall = {
  situation: string;
  call: string;
  detail: string;
  link?: { href: string; label: string };
};

const whoToCall: WhoToCall[] = [
  {
    situation: "A crash, a fire, a medical emergency, anything life-threatening",
    call: "911",
    detail:
      "FDOT's I-4 project site lists 911 for a severe crash, a wrong-way driver, a car on fire, a crime in progress, a roadside medical emergency or another life-threatening situation.",
  },
  {
    situation: "A flat on the shoulder of I-4 or the I-4 Express lanes",
    call: "*347 (*FHP), free",
    detail:
      "The same page lists *FHP for a disabled vehicle on the roadside: it connects you with a dispatcher who can send an FHP trooper or a Road Ranger. FDOT lists changing flat tires among Road Ranger services, charges motorists nothing, and says Road Rangers should locate you within 15 to 30 minutes unless they are detained by an emergency such as a crash.",
  },
  {
    situation: "A flat on Florida's Turnpike or an Orlando toll road",
    call: "*347 as well",
    detail:
      "Florida's Turnpike lists free tire changes with the vehicle's own spare. On the toll roads around Orlando the patrol hours are set road by road.",
    link: { href: "/road-rangers-orlando", label: "Road Ranger hours, road by road" },
  },
  {
    situation: "A flat in a rental car",
    call: "Your rental company's roadside line, then a local company",
    detail:
      "Check your rental agreement before anyone touches the wheel. Our rental guide lists the phone numbers and roadside terms of ten rental companies in Orlando.",
    link: { href: "/locked-keys-in-rental-car-orlando", label: "Rental companies' roadside numbers" },
  },
  {
    situation: "Off the highway, or no patrol on duty: a ramp end, hotel lot, garage, gas station or driveway",
    call: `RoadZone Plus, ${site.phoneDisplay}`,
    detail:
      "RoadZone Plus puts your usable spare on and removes a locking lug nut when its key is missing, 24 hours a day. The price is confirmed on the call before dispatch, with no membership. RoadZone Plus does not patch or plug tires, sell tires or tow.",
    link: { href: "/services/tire-change", label: "Tire change service" },
  },
  {
    situation: "No spare, or the wheel itself is damaged",
    call: "A tow to a tire shop",
    detail:
      "When a repair is beyond what Road Rangers do, FDOT says the Road Ranger moves the car out of the travel lane and FHP contacts a towing service, at the motorist's expense.",
  },
];

type PatrolStretch = {
  miles: string;
  covers: string;
  hours: string;
  gap: string;
};

const patrolStretches: PatrolStretch[] = [
  {
    miles: "Mile 58 to 72",
    covers:
      "Exit 58 (CR 532, Four Corners) past Celebration and Disney World (exits 62, 64 and 65), Lake Buena Vista (exit 68) and SeaWorld (exit 71) to the Beachline, SR 528 (exit 72).",
    hours: "Monday to Thursday, 6:00 AM to midnight. Friday to Sunday, 6:00 AM to 3:30 AM.",
    gap: "Midnight to 6:00 AM after a Monday to Thursday shift; 3:30 AM to 6:00 AM after a Friday to Sunday shift.",
  },
  {
    miles: "Mile 72 to 98",
    covers:
      "The Beachline (exit 72) past Sand Lake Road (exit 74A), Universal Orlando (exits 74B and 75A), Kirkman Road (exit 75B), downtown Orlando, Altamonte Springs (exit 92) and SR 434 (exit 94) to Lake Mary and Heathrow (exit 98). The I-4 Express lanes lie on this stretch.",
    hours: "24 hours a day, every day (FDOT lists the I-4 Ultimate Road Rangers).",
    gap: "None listed.",
  },
  {
    miles: "Mile 98 to 114",
    covers: "Lake Mary and Heathrow (exit 98) past Sanford (exits 101A to 101D and 104) to mile marker 114.",
    hours: "Monday to Thursday, 6:00 AM to midnight. Friday to Sunday, 6:00 AM to 3:30 AM.",
    gap: "Midnight to 6:00 AM after a Monday to Thursday shift; 3:30 AM to 6:00 AM after a Friday to Sunday shift.",
  },
];

const steps = [
  {
    title: "Get out of the travel lane if the car will move",
    text: "FDOT's Road Ranger FAQ: \"If your vehicle is blocking a travel lane, Florida law requires that you shall make every effort to move your vehicle so as not to block the regular flow of traffic.\" The shoulder or the next exit ramp gets you out of the lane.",
  },
  {
    title: "Turn on your hazard lights",
    text: "Hazard lights are one of the signals that bring Florida's Move Over law into play. On an interstate with two or more lanes in your direction, section 316.126 tells drivers approaching a disabled vehicle displaying hazard lights to leave the lane next to it, or slow to 20 mph below the posted limit when they cannot move over safely. FLHSMV says a vehicle with a flat tire is protected under the law.",
  },
  {
    title: "Stay inside the car",
    text: "FDOT again: \"Once out of the flow of traffic, stay inside your vehicle and wait for help to arrive.\" In 2024 Florida recorded 205 crashes and more than 17,500 citations for drivers who failed to move over (FLHSMV), so the shoulder is no place to stand.",
  },
  {
    title: "Call with three facts ready",
    text: "The road you are on, your direction of travel, and the last exit or landmark you passed: that is what FDOT's I-4 project site asks you to tell the *347 dispatcher. For RoadZone Plus, add whether you have a usable spare and whether a wheel lock key is missing.",
  },
];

const faqs = [
  {
    question: "Who do I call for a flat tire on the highway in Orlando?",
    answer:
      "On I-4, the I-4 Express lanes, Florida's Turnpike and the toll roads, dial *347 (*FHP): the dispatcher can send an FHP trooper or a free Road Ranger. Call 911 for a crash, a fire, a medical emergency or anything life-threatening. Off the highway, or when no patrol is on duty, call RoadZone Plus at (407) 222-2739 to have your spare put on, 24 hours a day.",
  },
  {
    question: "Do Road Rangers change flat tires for free?",
    answer:
      "Yes. FDOT lists changing flat tires among Road Ranger services and says motorists are not charged; while you are being helped you can make up to two local phone calls for free. Florida's Turnpike describes its free tire change as a change with the vehicle's own spare.",
  },
  {
    question: "How long does a Road Ranger take to reach me?",
    answer:
      "FDOT says Road Rangers should be able to locate you within 15 to 30 minutes, unless they are detained by an emergency such as a crash.",
  },
  {
    question: "Do Road Rangers patrol I-4 all night?",
    answer:
      "On part of it. FDOT's patrol records list I-4 from mile marker 72 to 98 (the Beachline, Universal, downtown Orlando and Altamonte Springs to Lake Mary) as patrolled 24 hours a day. From mile 58 to 72, past Disney, Celebration and Lake Buena Vista, and from mile 98 to 114, past Sanford, the patrol runs 6:00 AM to midnight Monday to Thursday and 6:00 AM to 3:30 AM Friday to Sunday.",
  },
  {
    question: "What if I do not have a spare tire?",
    answer:
      "Then RoadZone Plus cannot change it, because it needs a usable spare to put on, and Florida's Turnpike lists its free Road Ranger tire change as a change with the vehicle's own spare. AAA found in 2017 that 28 percent of that year's new vehicles had no spare as standard equipment, and that inflator kits cannot fix sidewall damage or a blowout. FDOT says a car the Road Rangers cannot help is moved out of the travel lane and FHP contacts a towing service, at your expense.",
  },
  {
    question: "Should I change the tire myself on the I-4 shoulder?",
    answer:
      "Not on a narrow or busy shoulder. Standing next to fast traffic is dangerous, and FDOT tells stranded drivers to stay inside the vehicle once it is out of the flow of traffic. Take the next exit if the car can get there, or call *347 and wait inside.",
  },
  {
    question: "Can RoadZone Plus change my flat tire near I-4?",
    answer:
      "Yes, when the car can be reached safely and you have a usable spare: at the end of a ramp, in a hotel, theme park or airport lot, a garage, a gas station or a driveway. RoadZone Plus is a private company, not FDOT or the Road Rangers; during patrol hours on I-4 itself, the free *347 call comes first. Call (407) 222-2739 and give the road, the direction and the nearest exit.",
  },
  {
    question: "Does RoadZone Plus patch or plug tires?",
    answer:
      "No. RoadZone Plus puts your spare on and removes wheel locks; it does not patch or plug tires, sell tires, repair rims or tow. Once the spare is on, a tire shop repairs or replaces the flat.",
  },
];

const linkClass =
  "inline-flex py-3 text-sm font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200";

export default function FlatTireOnI4Page() {
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
    headline: "Flat tire on the highway near Orlando: what to do on I-4, and who to call",
    description,
    url: absoluteUrl(path),
    dateModified: updatedIso,
    image: absoluteUrl("/visuals/spare-tire/i-4-express-orlando.webp"),
    author: { "@id": businessId },
    publisher: { "@id": businessId },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: "Spare tire installation near I-4 in Orlando",
    serviceType: "Roadside spare tire installation",
    description:
      "24/7 spare tire installation and wheel lock removal for drivers with a flat tire near I-4 in Orlando, at ramp ends, hotel and theme park lots, garages, gas stations and driveways.",
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: { "@type": "Place", name: "Orlando, FL and the I-4 corridor" },
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
    { name: "Flat Tire on I-4", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema, serviceSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Flat tire on I-4
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">
              Flat tire on the highway near Orlando? What to do on I-4.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Get the car out of the travel lane if it will move, turn on your hazard lights
              and stay inside. On I-4, dial <strong className="text-white">*347</strong> (*FHP):
              the dispatcher can send a Florida Highway Patrol trooper or a free FDOT Road
              Ranger, and changing flat tires is on the Road Rangers&apos; list. Call{" "}
              <strong className="text-white">911</strong> instead for a crash, a fire, a
              medical emergency or anything life-threatening.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/66">
              Road Rangers patrol I-4 from mile marker 72 to 98 around the clock. From mile 58
              to 72, past Disney, Celebration and Lake Buena Vista, the patrol ends at midnight
              Monday to Thursday and at 3:30 AM Friday to Sunday. Off the highway, after those
              hours, or when you would rather call a company yourself, RoadZone Plus puts your
              spare on at any hour.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary" data-call-cta="flat-i4-hero">
                <PhoneCall aria-hidden="true" size={18} />
                Call RoadZone Plus: {site.phoneDisplay}
              </a>
              <Link href="/services/tire-change" className="btn btn-secondary">
                Tire change service
              </Link>
            </div>
            <p className="mt-4 text-sm font-bold text-white/58">
              Updated {updatedLabel} ·{" "}
              <a
                href="#sources"
                className="underline decoration-road-red/60 underline-offset-2 hover:text-white"
              >
                See every source
              </a>
            </p>
          </div>

          <figure className="card overflow-hidden bg-panel">
            <Image
              src="/visuals/spare-tire/i-4-express-orlando.webp"
              alt="An entrance road to the I-4 Express lanes in Orlando, with XPRESS painted on the pavement, orange barrels and elevated interstate ramps overhead"
              width={1600}
              height={1200}
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="px-6 py-3 text-xs leading-5 text-white/56">
              An entrance to the I-4 Express lanes in Orlando, May 2023. FDOT&apos;s I-4 project
              site lists I-4 Express among the roads Road Rangers patrol.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="who-to-call"
        aria-labelledby="who-to-call-heading"
        className="section border-b border-white/10 bg-panel"
      >
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              Who to call
            </div>
            <h2 id="who-to-call-heading" className="mt-5 text-4xl font-black text-white">
              Who to call for a flat tire on I-4, by where you are.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Most of these answers come from FDOT&apos;s own pages, listed at the end of this
              guide. RoadZone Plus is not FDOT, the Florida Highway Patrol or the Road Rangers.
            </p>
          </div>

          <ol className="mt-8 grid gap-3 lg:grid-cols-2" aria-label="Who to call, situation by situation">
            {whoToCall.map((row) => (
              <li key={row.situation} className="card-solid p-5">
                <p className="text-xs font-black uppercase text-safety-yellow">{row.situation}</p>
                <p className="mt-2 text-lg font-black text-white">{row.call}</p>
                <p className="mt-2 text-sm leading-6 text-white/66">{row.detail}</p>
                {row.link ? (
                  <Link href={row.link.href} className={`mt-2 ${linkClass}`}>
                    {row.link.label}
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="patrol-hours"
        aria-labelledby="patrol-hours-heading"
        className="section border-b border-white/10 bg-road-black"
      >
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              Road Ranger hours on I-4
            </div>
            <h2 id="patrol-hours-heading" className="mt-5 text-4xl font-black text-white">
              When the free patrol is on I-4 around Orlando, mile by mile.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              From FDOT&apos;s Road Ranger service map for Central Florida, read {updatedLabel}.
              I-4&apos;s exit numbers sit at about the same mile marker, so exit 72 is close to
              mile 72. *347 connects you with an FHP dispatcher, who can send a trooper or a Road
              Ranger; FDOT notes that Road Ranger service availability varies throughout the state.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Road Ranger patrol hours on I-4 near Orlando by mile marker, from FDOT
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Stretch
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    What it covers
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Patrol hours
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    No patrol listed
                  </th>
                </tr>
              </thead>
              <tbody>
                {patrolStretches.map((row, index) => (
                  <tr
                    key={row.miles}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[16%] md:p-5">
                      <span className="block text-lg font-black text-white">{row.miles}</span>
                    </th>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/72 md:mt-0 md:table-cell md:w-[40%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        What it covers
                      </span>
                      {row.covers}
                    </td>
                    <td className="mt-3 block align-top text-sm font-bold leading-6 text-white md:mt-0 md:table-cell md:w-[22%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        Patrol hours
                      </span>
                      {row.hours}
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/72 md:mt-0 md:table-cell md:w-[22%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        No patrol listed
                      </span>
                      {row.gap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="card-solid p-5">
              <p className="flex items-center gap-2 text-sm font-black uppercase text-safety-yellow">
                <MapPin aria-hidden="true" size={16} />
                The I-4 Express lanes
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                I-4 Express runs from west of Kirkman Road to east of SR 434, two lanes in each
                direction with limited access points, inside the stretch FDOT lists as patrolled
                24 hours. Road Rangers patrol I-4 Express, so a flat there is a *347 call.
              </p>
            </div>
            <div className="card-solid p-5">
              <p className="flex items-center gap-2 text-sm font-black uppercase text-safety-yellow">
                <Clock3 aria-hidden="true" size={16} />
                After midnight past Disney
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                On the nights after a Monday to Thursday shift, FDOT lists no Road Ranger patrol on
                I-4 from mile 58 to 72 between midnight and 6:00 AM. Once the car is off I-4 at a
                hotel, a gas station or a parking lot near Kissimmee or Lake Buena Vista, RoadZone
                Plus takes the call at any hour.
              </p>
              <div className="mt-2 flex flex-wrap gap-4">
                <Link href="/areas/kissimmee" className={linkClass}>
                  Roadside help in Kissimmee by road and hour
                </Link>
                <Link href="/areas/lake-buena-vista" className={linkClass}>
                  Roadside help in Lake Buena Vista
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-to-do"
        aria-labelledby="what-to-do-heading"
        className="section border-b border-white/10 bg-panel"
      >
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Step by step
            </div>
            <h2 id="what-to-do-heading" className="mt-5 text-4xl font-black text-white">
              What to do with a flat tire on the highway, under Florida&apos;s rules.
            </h2>
            <ol className="mt-8 grid gap-3">
              {steps.map((step, index) => (
                <li key={step.title} id={`step-${index + 1}`} className="card-solid p-5">
                  <p className="text-xs font-black uppercase text-safety-yellow">Step {index + 1}</p>
                  <p className="mt-2 text-lg font-black text-white">{step.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <figure>
            <Image
              src="/visuals/move-over/road-ranger-move-over-sign.webp"
              alt="A Florida Road Ranger truck on the right shoulder of Interstate 10 with an amber sign on its roof reading MOVE OVER, with traffic in the lanes ahead"
              width={1600}
              height={1067}
              loading="lazy"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
            <figcaption className="mt-3 text-sm leading-6 text-white/56">
              A Florida Road Ranger truck on the shoulder of Interstate 10 in Madison County,
              April 2024. FDOT says Road Rangers have made more than 6.1 million service assists
              since the program began in 2000.
            </figcaption>
            <div className="mt-6 rounded-md border border-white/10 bg-road-red/16 p-5">
              <p className="flex items-center gap-2 text-sm font-black uppercase text-white">
                <AlertTriangle aria-hidden="true" size={16} />
                Not on the traffic side
              </p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Do not open the trunk or kneel at a wheel on the side next to the lanes. If the
                flat is on that side, wait inside for help, or drive on to the next exit if the car
                can get there.
              </p>
              <Link href="/florida-move-over-law" className={`mt-2 ${linkClass}`}>
                Florida&apos;s Move Over law: who it covers, fines and points
              </Link>
            </div>
          </figure>
        </div>
      </section>

      <section
        id="no-spare"
        aria-labelledby="no-spare-heading"
        className="section border-b border-white/10 bg-road-black"
      >
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <figure>
            <Image
              src="/visuals/spare-tire/donut-spare-on-sedan.webp"
              alt="An orange sedan parked at a curb with a small blue temporary donut spare fitted on its front wheel"
              width={1560}
              height={1170}
              loading="lazy"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
            <figcaption className="mt-3 text-sm leading-6 text-white/56">
              A temporary donut spare on a sedan. RoadZone Plus needs a usable spare like this one to
              change a flat.
            </figcaption>
          </figure>

          <div>
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              No spare, or no key
            </div>
            <h2 id="no-spare-heading" className="mt-5 text-4xl font-black text-white">
              Check the trunk before you call: the spare decides who can help.
            </h2>
            <ul className="mt-6 grid gap-3">
              <li className="flex gap-3 text-base leading-7 text-white/72">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-safety-yellow" size={18} />
                <span>
                  AAA found that 28 percent of 2017 model year vehicles had no spare tire as
                  standard equipment, and that in the year before it had helped more than 450,000
                  members whose cars had a flat and no spare.
                </span>
              </li>
              <li className="flex gap-3 text-base leading-7 text-white/72">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-safety-yellow" size={18} />
                <span>
                  An inflator kit is not a spare: AAA says it cannot provide even a temporary fix
                  for sidewall damage or a blowout, and most kits need replacing every four to
                  eight years.
                </span>
              </li>
              <li className="flex gap-3 text-base leading-7 text-white/72">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-safety-yellow" size={18} />
                <span>
                  Florida&apos;s Turnpike lists its free tire change as a change with the
                  vehicle&apos;s own spare. When a repair is beyond the Road Rangers, FDOT says the
                  car is moved out of the travel lane and FHP contacts a towing service at your
                  expense.
                </span>
              </li>
              <li className="flex gap-3 text-base leading-7 text-white/72">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-safety-yellow" size={18} />
                <span>
                  One lug nut on each wheel that looks different from the rest is a wheel lock. If
                  its key is missing, say so on the call: RoadZone Plus removes wheel locks so the
                  spare can go on.
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/how-long-can-you-drive-on-a-spare-tire-orlando" className={linkClass}>
                How far you can drive on the spare
              </Link>
              <Link href="/services/wheel-lock-removal" className={linkClass}>
                Wheel lock removal
              </Link>
              <Link href="/tire-change-cost-orlando" className={linkClass}>
                What a tire change costs in Orlando
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-heading" className="section border-b border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">Questions</div>
            <h2 id="faq-heading" className="mt-5 text-4xl font-black text-white">
              Flat tire on I-4: common questions.
            </h2>
          </div>
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-solid p-5">
                <h3 className="text-lg font-black text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{faq.answer}</p>
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
              The sources for the hours, rules and figures on this page.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each page below was read on {updatedLabel}. Patrol hours change; check FDOT&apos;s
              page before you rely on the free option. RoadZone Plus is not FDOT, the Florida
              Highway Patrol, Florida&apos;s Turnpike or the Road Rangers, and runs no public
              program.
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
            <p className="text-sm font-black uppercase text-white/72">Flat tire near I-4?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus to get the spare on, 24/7.
            </h2>
          </div>
          <a
            href={site.phoneHref}
            className="btn border border-white bg-white text-road-black hover:bg-white/90"
            data-call-cta="flat-i4-footer"
          >
            <PhoneCall aria-hidden="true" size={20} />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
