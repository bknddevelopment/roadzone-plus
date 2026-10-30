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
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/how-long-can-you-drive-on-a-spare-tire-orlando";
const title = "How Long Can You Drive on a Spare Tire? Orlando Guide";
const description =
  "A donut spare is good for about 50 miles at no more than 50 mph, per Goodyear. What that means on I-4 and Orlando toll roads, plus 24/7 spare installation.";
const updatedIso = "2026-10-30";
const updatedLabel = "October 30, 2026";
const heroImage = "/visuals/spare-tire/donut-spare-on-sedan.webp";
const heroAlt =
  "An orange sedan parked at a curb with a small blue temporary donut spare fitted on its front wheel";

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
        width: 1560,
        height: 1170,
        alt: heroAlt,
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every spare-tire speed and distance limit on this page comes from a tire
// maker (Goodyear, Michelin, Cooper) or NHTSA page in
// `sources`, read on the date above. Florida speed rules come from the Florida
// Statutes; Road Ranger facts from FDOT, Florida's Turnpike and CFX. RoadZone
// Plus facts are limited to what the live tire-change service page says: no
// prices, arrival times, towing or tire repair are claimed here.
const sources = {
  goodyear: {
    name: "Goodyear: Spare Tires, A Complete Guide (read October 30, 2026)",
    short: "Goodyear",
    href: "https://www.goodyear.com/en-us/learn/spare-tire-guide",
    note: "A donut tire is listed at about 50 miles and 50 mph, and compact spares are designed to take you about 50 to 70 miles; not recommended to exceed 50 mph; compact spares generally need 60 psi and can impair ABS, traction control and the speedometer; spares have a shelf life of about 6 to 10 years; run-flat tires are limited to 50 mph for up to 50 miles once deflated.",
  },
  michelin: {
    name: "Michelin: Can I Drive On a Spare Tire? (read October 30, 2026)",
    short: "Michelin",
    href: "https://www.michelinman.com/auto/auto-tips-and-advice/tires-101/driving-on-a-spare-tire",
    note: "Do not exceed 50 mph on a compact spare; avoid highways where possible and, if you must, stay well under 50 mph in the right lane; check the spare's sidewall for its own limits; mobility kits will not fix sidewall damage or a blowout.",
  },
  firestone: {
    name: "Firestone Complete Auto Care: A Complete Guide to Spare Tires (read October 30, 2026)",
    short: "Firestone",
    href: "https://www.firestonecompleteautocare.com/tires/tire-info/maintenance/spare-tire-considerations/",
    note: "Compact spares lack the tread depth to perform well in wet conditions; some trucks, performance vehicles and AWD or 4WD vehicles are not compatible with compact spares because their powertrains expect consistent tire diameters.",
  },
  cooper: {
    name: "Cooper Tires: The pros and cons of different spare tires (read October 30, 2026)",
    short: "Cooper Tires",
    href: "https://www.coopertire.com/en_US/tire-education/tire-safety/spare-tires.html",
    note: "A compact spare can affect ABS, traction control and the speedometer; once deflated, Cooper's run-flat guidance is no more than 55 mph for 50 miles.",
  },
  nhtsa: {
    name: "NHTSA: Tires, TireWise (read October 30, 2026)",
    short: "NHTSA",
    href: "https://www.nhtsa.gov/vehicle-safety/tires",
    note: "Check every tire, including the spare, once a month; some vehicle and tire makers recommend replacing tires six to 10 years old; the last four digits of the DOT number are the week and year made; tire aging is a greater concern in the southern Sun Belt; 511 deaths in tire-related crashes in 2024.",
  },
  aaa: {
    name: "AAA Newsroom: Nearly One-Third of New Vehicles are Missing a Spare Tire (Orlando, October 18, 2017; read October 30, 2026)",
    short: "AAA",
    href: "https://newsroom.aaa.com/2017/10/spare-aaa-finds-nearly-one-third-new-vehicles-missing-spare-tire/",
    note: "28 percent of 2017 model-year vehicles had no spare as standard; AAA helped more than 450,000 members with a flat and no spare in a year; nearly 20 percent of U.S. drivers do not know how to change a flat; inflator kits cannot fix sidewall damage or blowouts and last only four to eight years.",
  },
  toyota: {
    name: "Toyota: 2026 Corolla Owner's Manual, If you have a flat tire (read October 30, 2026)",
    short: "Toyota owner's manual",
    href: "https://www.toyota.com/content/dam/toyota/owners/digital-owners-manual/en/om12w27u/chapter/ch07se020406.html",
    note: "Do not continue driving with a flat tire; the compact spare is labeled TEMPORARY USE ONLY; it has no tire pressure warning valve, so its low pressure is not reported and a warning light that came on stays on after the change; the car sits lower on it; never use two compact spares at once or move one to another vehicle.",
  },
  fs316183: {
    name: "Florida Statutes 316.183, Unlawful speed (read October 30, 2026)",
    short: "Fla. Stat. 316.183",
    href: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.183.html",
    note: "Minimum speed on interstates with at least four lanes is 40 mph, or 50 mph where the posted limit is 70; no driving so slowly that you impede traffic, except when reduced speed is necessary for safe operation.",
  },
  fs316187: {
    name: "Florida Statutes 316.187, Establishment of state speed zones (read October 30, 2026)",
    short: "Fla. Stat. 316.187",
    href: "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.187.html",
    note: "The maximum allowable speed limit on limited access highways is 70 mph.",
  },
  tpRoadRangers: {
    name: "Florida's Turnpike Enterprise: Road Rangers Safety Patrol (read October 30, 2026)",
    short: "Florida's Turnpike, Road Rangers",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free help by dialing *347, including tire changes with the vehicle's spare; 24 hours a day on the Turnpike mainline (Milepost 0 to 308); 6 AM to 10 PM on the Turnpike-run sections of SR 417, SR 429 and SR 528.",
  },
  cfx: {
    name: "Central Florida Expressway Authority: Roadside Assistance (read October 30, 2026)",
    short: "CFX Roadside Assistance",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Road Rangers on SR 408, 417, 414, 429, 528 and 451 help more than 4,000 motorists a month with things like a flat tire change; hours 6:00 AM to 10:00 PM; dial *347.",
  },
  fdotFaq: {
    name: "FDOT: Road Ranger Service Patrol, Frequently Asked Questions (read October 30, 2026)",
    short: "FDOT Road Ranger FAQ",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/faq.htm",
    note: "Motorists are not charged; the patrol should locate you within 15 to 30 minutes unless held up by an emergency; stay inside your vehicle once out of traffic.",
  },
};

type SourceKey = keyof typeof sources;

const spareTypes: Array<{
  type: string;
  howFar: string;
  howFast: string;
  orlandoMove: string;
  cite: SourceKey[];
}> = [
  {
    type: "Compact “donut” spare",
    howFar: "About 50 miles. Goodyear lists a donut at about 50 and says compact spares are built for about 50 to 70.",
    howFast: "50 mph or less",
    orlandoMove:
      "Leave I-4, the Turnpike or the toll road at the next exit. Take local roads to the nearest tire shop.",
    cite: ["goodyear", "michelin"],
  },
  {
    type: "Full-size matching spare",
    howFar: "No set mileage. Treat it as temporary until the flat is repaired or replaced.",
    howFast: "Normal speeds",
    orlandoMove:
      "You can keep driving, but book the tire shop now. NHTSA says a full-size spare is not a replacement for worn tires.",
    cite: ["michelin", "goodyear", "nhtsa"],
  },
  {
    type: "Full-size spare that does not match",
    howFar: "Not published as a number. It may not be the same size as your other tires.",
    howFast: "Check the owner's manual",
    orlandoMove: "Drive gently to a tire shop and ask whether it can stay on.",
    cite: ["goodyear"],
  },
  {
    type: "Run-flat tire, after air loss",
    howFar: "About 50 miles",
    howFast: "50 mph (Goodyear) or 55 mph (Cooper)",
    orlandoMove: "Limits differ by tire maker. Read the sidewall or the owner's manual.",
    cite: ["goodyear", "cooper"],
  },
  {
    type: "Inflator or sealant kit",
    howFar: "Not a spare. It seals small tread punctures only.",
    howFast: "Follow the kit's own label",
    orlandoMove:
      "A sidewall cut or blowout is beyond any kit. Call before you try to drive.",
    cite: ["michelin", "aaa"],
  },
];

const sidewallChecks = [
  {
    title: "The speed limit printed on the tire",
    text: "Compact spares carry their own maximum speed, molded into the sidewall and sometimes on a colored wheel label. The one in the photo reads 50 mph (80 km/h). Goodyear and Michelin both put compact spares at 50 mph.",
    cite: ["goodyear", "michelin"] as SourceKey[],
  },
  {
    title: "The words “Temporary use only”",
    text: "Toyota's manual says that label marks its compact spare, to be used temporarily and only in an emergency. Treat it as a short trip to a tire shop.",
    cite: ["toyota"] as SourceKey[],
  },
  {
    title: "The inflation pressure",
    text: "Compact spares generally need about 60 psi, higher than road tires. The exact number is on the sidewall, the driver's door label or the manual. A spare sitting unused loses pressure over months without any visible sign.",
    cite: ["goodyear", "michelin"] as SourceKey[],
  },
  {
    title: "The four-digit date code",
    text: "Find the DOT number. Its last four digits are the week and year the tire was made, so 0308 means the third week of 2008.",
    cite: ["nhtsa"] as SourceKey[],
  },
  {
    title: "Cuts, cracks or bulges",
    text: "NHTSA lists physical damage, such as cuts, cracks or bulges, as a reason to stop using a tire. If the spare looks damaged, do not put it on and drive.",
    cite: ["nhtsa"] as SourceKey[],
  },
];

const orlandoRoads: Array<{
  road: string;
  text: string;
  cite: SourceKey[];
}> = [
  {
    road: "I-4 and other interstates",
    text: "Florida sets a minimum speed on interstates with four or more lanes: 40 mph, or 50 mph where the posted limit is 70. On a 70 mph stretch, the legal minimum and a donut's maximum are the same number. Take the next exit.",
    cite: ["fs316183", "fs316187"],
  },
  {
    road: "Florida's Turnpike",
    text: "If the flat happens on the mainline, dial *347. The free Road Rangers patrol changes a tire using your own spare, 24 hours a day on the Turnpike mainline. Then leave at the next exit on the donut.",
    cite: ["tpRoadRangers"],
  },
  {
    road: "SR 408, SR 417, SR 429 and SR 528",
    text: "CFX Road Rangers patrol Orlando's expressways from 6 AM to 10 PM and help more than 4,000 drivers a month with things like a flat tire change or gas. Outside those hours, CFX's Road Rangers are off patrol, so you fit the spare yourself or call a private service. The Turnpike's own patrol still covers SR 408 Milepost 0 to 1 around the clock.",
    cite: ["cfx", "tpRoadRangers"],
  },
  {
    road: "Local roads to the tire shop",
    text: "Surface roads let you stay at or under 50 mph without holding up fast traffic. Michelin says to avoid highways on a compact spare where possible. Pick the nearest tire shop, not your hotel or home.",
    cite: ["michelin"],
  },
];

const drivingTips = [
  {
    text: "Stay at or under 50 mph, and lower if the spare's label says so. Avoid hard acceleration, hard braking and sharp turns.",
    cite: ["michelin", "goodyear"] as SourceKey[],
  },
  {
    text: "Keep to the right lane and leave extra room to stop. A compact spare can affect ABS, traction control and the speedometer.",
    cite: ["michelin", "cooper", "goodyear"] as SourceKey[],
  },
  {
    text: "Go slow over bumps and driveways. The car sits lower on a compact spare than on standard tires.",
    cite: ["toyota"] as SourceKey[],
  },
  {
    text: "Count miles, not days. Plan on about 50 miles total, which is a short run to a tire shop, not a week of errands.",
    cite: ["goodyear"] as SourceKey[],
  },
  {
    text: "Take extra care in rain. Compact spares have shallow tread and do not grip like your regular tires on a wet road.",
    cite: ["firestone", "goodyear"] as SourceKey[],
  },
  {
    text: "Never fit two compact spares at once, and do not move a compact spare to a different car.",
    cite: ["toyota"] as SourceKey[],
  },
];

const warningLights = [
  {
    title: "Tire pressure light stays on",
    text: "Some compact spares have no pressure sensor. Toyota's Corolla manual says the system cannot report the spare's pressure, and a warning light that came on with the flat stays on after the change. Check the spare with a gauge.",
    cite: ["toyota"] as SourceKey[],
  },
  {
    title: "ABS or traction control light",
    text: "Goodyear and Cooper both say a small spare can affect ABS and traction control. Drive as if those systems are not there.",
    cite: ["goodyear", "cooper"] as SourceKey[],
  },
  {
    title: "Speedometer reads off",
    text: "A smaller spare can throw off the speedometer. Leave a margin under 50 mph rather than riding the limit.",
    cite: ["goodyear", "cooper"] as SourceKey[],
  },
  {
    title: "AWD, 4WD, trucks and performance cars",
    text: "Some are not compatible with compact spares, because their drivetrains expect every tire to be the same size. Check the owner's manual before you fit one.",
    cite: ["firestone"] as SourceKey[],
  },
];

const noSpareSteps = [
  {
    title: "Look under the trunk floor first",
    text: "AAA found 28 percent of 2017 model-year vehicles came without a spare as standard. Michelin says many newer cars carry run-flat tires or a sealant-and-inflator kit instead. Rentals vary, so look before you leave the lot.",
    cite: ["aaa", "michelin"] as SourceKey[],
  },
  {
    title: "Use the kit only on a small tread puncture",
    text: "Inflator kits cannot fix sidewall damage or a blowout, and AAA says they last only four to eight years. Check the date on the can.",
    cite: ["aaa", "michelin"] as SourceKey[],
  },
  {
    title: "Do not drive on the flat",
    text: "Toyota's manual is direct: driving even a short distance on a flat can damage the tire and wheel beyond repair and could cause a crash.",
    cite: ["toyota"] as SourceKey[],
  },
  {
    title: "Call and say there is no spare",
    text: "You are not alone: AAA reported helping more than 450,000 members in one year who had a flat and no spare. Tell us on the call and we will help you figure out the fastest next step.",
    cite: ["aaa"] as SourceKey[],
  },
];

const ageChecks = [
  {
    text: "Check the spare's pressure once a month with the other four. NHTSA's monthly check includes the spare.",
    cite: ["nhtsa"] as SourceKey[],
  },
  {
    text: "Mind the age. Some vehicle and tire makers say to replace tires six to 10 years old, even with full tread. Goodyear gives spares a 6 to 10 year shelf life.",
    cite: ["nhtsa", "goodyear"] as SourceKey[],
  },
  {
    text: "Heat and sun add to it. NHTSA says sunlight and a warmer climate contribute to tire aging, a greater concern in the more southern Sun Belt states.",
    cite: ["nhtsa"] as SourceKey[],
  },
  {
    text: "Spares are prone to aging because they seldom get replaced. On an older car, the spare can easily be the oldest tire on it.",
    cite: ["nhtsa"] as SourceKey[],
  },
];

const onTheCall = [
  {
    label: "Where you are",
    detail:
      "Road, direction and the last exit or mile marker. In a parking lot, the store or hotel name and which side of the building.",
  },
  {
    label: "Which spare you have",
    detail:
      "Full-size, donut, an inflator kit only, or not sure. Coverage on any highway or toll road is confirmed on the call.",
  },
  {
    label: "Wheel locks",
    detail:
      "Whether you have the key for a locking lug nut. A missing key blocks the change, and we remove wheel locks too.",
  },
  {
    label: "The vehicle",
    detail:
      "Year, make, model and color, and whether it is a rental, so the technician knows which car to look for.",
  },
];

const relatedLinks = [
  {
    href: "/mobile-tire-repair-orlando",
    title: "Mobile Tire Help in Orlando",
    text: "What a roadside tire call can and cannot fix, and when a tire shop is the right answer.",
  },
  {
    href: "/flat-tire-on-i-4-orlando",
    title: "Flat Tire on I-4",
    text: "Shoulder safety first, then the spare: what to do when the flat happens on the interstate.",
  },
  {
    href: "/road-rangers-orlando",
    title: "Road Rangers in Orlando",
    text: "Which Orlando roads the free patrol covers, its hours and when a private call fits better.",
  },
  {
    href: "/services/wheel-lock-removal",
    title: "Wheel Lock Removal",
    text: "No key for the locking lug nut? It has to come off before any spare goes on.",
  },
];

const faqs = [
  {
    question: "How long can you drive on a spare tire?",
    answer:
      "On a compact donut spare, plan on about 50 miles. Goodyear lists a donut at about 50 miles and 50 mph, and says compact spares are designed for about 50 to 70 miles. Keep to 50 mph or less. A full-size matching spare has no set mileage, but it should still be treated as temporary until the flat is fixed. Your spare's sidewall and your owner's manual give its exact limits.",
  },
  {
    question: "How fast can you drive on a donut spare?",
    answer:
      "No faster than 50 mph, unless the spare's own label gives a lower number. Goodyear and Michelin both put compact spares at 50 mph. Michelin adds: avoid highways where you can, and if you must use one, stay well under 50 mph in the right lane.",
  },
  {
    question: "Can I drive on I-4 with a donut spare?",
    answer:
      "Avoid it. Florida's minimum speed on an interstate with four or more lanes is 40 mph, and 50 mph where the posted limit is 70. That leaves little or no room under a donut's 50 mph limit. Florida's slow-driving rule does allow reduced speed when it is necessary for safe operation, but the safer plan is to leave I-4 at the next exit and use local roads.",
  },
  {
    question: "Can I drive on a spare tire for a week?",
    answer:
      "Not on a donut. The limit is miles, not days, and about 50 miles goes fast in Orlando traffic. Get the flat repaired or replaced right away. A full-size matching spare can be driven normally, but NHTSA says not to use it as a replacement for worn tires except in an emergency.",
  },
  {
    question: "How long does a spare tire last if it is never used?",
    answer:
      "Goodyear gives spares a shelf life of about 6 to 10 years. NHTSA says some vehicle and tire makers recommend replacing tires that are six to 10 years old, regardless of tread. It adds that tire aging is a greater concern in the more southern Sun Belt states. Read the last four digits of the DOT number to see the week and year your spare was made.",
  },
  {
    question: "Why is my tire pressure light on after putting on the spare?",
    answer:
      "Some compact spares have no tire pressure sensor. Toyota's Corolla manual says its compact spare has no pressure warning valve, so the system cannot report the spare's pressure, and a warning light that came on with the flat stays on after the change. Check the spare with a gauge; Goodyear says compact spares generally need about 60 psi.",
  },
  {
    question: "What if my car or rental has no spare tire?",
    answer:
      "Do not drive on the flat. If the car has an inflator kit and the damage is a small puncture in the tread, the kit may seal it for now. It will not fix a sidewall cut or a blowout. Otherwise, call RoadZone Plus at (407) 222-2739 and say there is no spare. We will help you figure out the fastest next step.",
  },
  {
    question: "Will RoadZone Plus put my spare on?",
    answer:
      "Yes. RoadZone Plus installs spare tires for Orlando drivers 24/7: the technician loosens the lug nuts, swaps the flat for your usable spare, tightens everything and explains how far and how fast you can drive on it to reach a tire shop. If a locking lug nut has no key, we remove the wheel lock too. Coverage on any highway or toll road is confirmed on the call.",
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

export default function SpareTireDrivingLimitsPage() {
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
      width: 1560,
      height: 1170,
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
      { "@type": "Thing", name: "Temporary spare tire" },
      { "@type": "Thing", name: "Spare tire installation" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "How Long Can You Drive on a Spare Tire", path },
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
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <Gauge aria-hidden="true" size={16} />
              Spare tire limits in Orlando
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              How long can you drive on a spare tire?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              On a compact &ldquo;donut&rdquo; spare, plan on about 50 miles at no more than
              50 mph. Goodyear lists a donut at about 50 miles and 50 mph, and Michelin says
              not to exceed 50 mph. A full-size matching spare can be driven normally until
              the flat is fixed. In Orlando, that 50 mph matters: Florida&apos;s minimum
              speed on an interstate posted at 70 mph is also 50 mph.
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
              <Link href="/services/tire-change" className="btn btn-secondary">
                Tire Change Service
              </Link>
            </div>
          </div>

          <aside className="card overflow-hidden bg-panel">
            <Image
              src={heroImage}
              alt={heroAlt}
              width={1560}
              height={1170}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="text-sm font-black uppercase text-safety-yellow">
                Flat right now?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                We put your spare on, 24/7 in Orlando, and tell you how far and how fast
                you can drive on it to reach a tire shop.
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

      <section id="at-a-glance" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              At a glance
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Your limit depends on which spare you have.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Five kinds of &ldquo;spare&rdquo; ride in cars today. Find yours, then read
              its sidewall: the number printed on your own tire beats any general rule.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                How far and how fast you can drive on each type of spare tire, and what to do
                on Orlando roads
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Spare type
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    How far
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    How fast
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    What to do in Orlando
                  </th>
                </tr>
              </thead>
              <tbody>
                {spareTypes.map((row, index) => (
                  <tr
                    key={row.type}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[22%] md:p-5">
                      <span className="block text-lg font-black text-white">{row.type}</span>
                    </th>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/72 md:mt-0 md:table-cell md:w-[26%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        How far
                      </span>
                      {row.howFar}
                    </td>
                    <td className="mt-3 block align-top md:mt-0 md:table-cell md:w-[16%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        How fast
                      </span>
                      <span className="font-black text-safety-yellow">{row.howFast}</span>
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        What to do in Orlando
                      </span>
                      {row.orlandoMove}
                      <SourceTags keys={row.cite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-black text-white">
                Why a donut has a limit at all
              </h3>
              <p className="mt-3 text-base leading-8 text-white/66">
                Compact spares are built light, with shallow tread, to save weight and
                trunk space. Michelin says that lighter build means they do not have the
                speed or mileage ability of a regular tire. Goodyear adds that driving too
                fast can damage the spare and affect handling and braking. The limit comes
                from how the tire is built.
              </p>
              <SourceTags keys={["michelin", "goodyear", "firestone"]} />
            </div>
            <figure>
              <Image
                src="/visuals/spare-tire/full-size-spare-truck.webp"
                alt="A full-size spare tire stored in the in-bed trunk of a pickup truck, with the trunk lid propped open"
                width={1600}
                height={878}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                A full-size spare, like this one in a pickup&apos;s in-bed trunk, is the
                same size as the road tires and has no donut speed limit.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="read-the-sidewall" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <Gauge aria-hidden="true" size={16} />
              Read your own spare
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Five things your spare&apos;s sidewall tells you in 60 seconds.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Michelin says to always check the sidewall of your spare for its own limits,
              because they vary by tire. Here is what to look for.
            </p>
            <SourceTags keys={["michelin"]} />
            <figure className="mt-8">
              <Image
                src="/visuals/spare-tire/spare-sidewall-50-mph.webp"
                alt="Close-up of a compact spare tire sidewall molded with 'Max vehicle speed 50 mph - 80 km/h' next to a yellow caution label on the steel wheel"
                width={1600}
                height={1200}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                This compact spare says it on the rubber: max vehicle speed 50 mph (80
                km/h). The yellow wheel label repeats it.
              </figcaption>
            </figure>
          </div>

          <ol className="grid gap-4">
            {sidewallChecks.map((item, index) => (
              <li key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="orlando-roads" className="section bg-road-black">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="eyebrow">
                <Route aria-hidden="true" size={16} />
                Orlando roads on a donut
              </div>
              <h2 className="mt-5 text-4xl font-black text-white">
                On a 70 mph interstate, Florida&apos;s minimum is a donut&apos;s maximum.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Florida law allows up to 70 mph on limited access highways. On an
                interstate with four or more lanes, the minimum is 40 mph, and it rises to
                50 mph where the posted limit is 70. Florida also bars driving so slowly
                that you impede traffic, except when reduced speed is necessary for safe
                operation. A donut is a good reason to slow down. It is a better reason to
                get off the interstate.
              </p>
              <SourceTags keys={["fs316187", "fs316183"]} />
            </div>
            <figure>
              <Image
                src="/visuals/spare-tire/i-4-express-orlando.webp"
                alt="An entrance road to the I-4 Express lanes in Orlando, with XPRESS painted on the pavement, orange barrels and elevated interstate ramps overhead"
                width={1600}
                height={1200}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                An access road to the I-4 Express lanes in Orlando. On a donut, the
                interstate is the road to leave, not the road to take.
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {orlandoRoads.map((item) => (
              <div key={item.road} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="shrink-0 text-safety-yellow" size={18} />
                  <h3 className="text-xl font-black text-white">{item.road}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/60">
            The Road Rangers are free. FDOT says they should be able to locate you within 15
            to 30 minutes unless an emergency such as a crash holds them up. Our{" "}
            <Link
              href="/road-rangers-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              Road Rangers guide
            </Link>{" "}
            covers their Orlando roads and hours. For the Turnpike itself, see{" "}
            <Link
              href="/roadside-assistance-florida-turnpike-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              roadside help on Florida&apos;s Turnpike
            </Link>
            .
          </p>
          <SourceTags keys={["fdotFaq"]} />
        </div>
      </section>

      <section id="how-to-drive" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Driving the 50 miles
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Six rules for the drive to the tire shop.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A donut gets you to a shop. It does not drive like your other tires. These
              come from the tire makers and the owner&apos;s manual.
            </p>
          </div>
          <ul className="grid gap-4">
            {drivingTips.map((tip) => (
              <li key={tip.text} className="card-solid flex items-start gap-3 p-5">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-route-green" size={18} />
                <div className="text-sm leading-6 text-white/68">
                  <p>{tip.text}</p>
                  <SourceTags keys={tip.cite} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="warning-lights" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              Warning lights and AWD
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What changes in the car once the donut is on.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {warningLights.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="no-spare" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              No spare in the trunk
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Rental or newer car with no spare? Four steps.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Nearly 20 percent of U.S. drivers do not know how to change a flat, AAA
              found. Plenty of cars now leave them nothing to change it with.
            </p>
            <SourceTags keys={["aaa"]} />
          </div>
          <ol className="grid gap-4">
            {noSpareSteps.map((item, index) => (
              <li key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="spare-age" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Gauge aria-hidden="true" size={16} />
              Before you need it
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              How long a spare lasts in a Florida trunk.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A spare that has never touched the road still ages. NHTSA counted 511 deaths
              in tire-related crashes in 2024. Four checks keep the spare ready.
            </p>
            <SourceTags keys={["nhtsa"]} />
          </div>
          <ul className="grid gap-4">
            {ageChecks.map((item) => (
              <li key={item.text} className="card-solid flex items-start gap-3 p-5">
                <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-route-green" size={18} />
                <div className="text-sm leading-6 text-white/68">
                  <p>{item.text}</p>
                  <SourceTags keys={item.cite} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="what-we-do" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              What RoadZone Plus does
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              We put the spare on and tell you its limits. Four things to have ready.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus is a 24/7 roadside assistance company in Orlando. On a flat, the
              technician loosens the lug nuts, swaps the flat for your usable spare and
              tightens everything. Then we explain how far and how fast you can drive on it
              to reach a tire shop. You are not kneeling on the shoulder of a busy Orlando
              road, and the tire shop repairs or replaces the flat.
            </p>
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
          <div className="grid gap-4 sm:grid-cols-2">
            {onTheCall.map((item) => (
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
              More on flats and spares in Orlando.
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
              Spare tire questions
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
              Where every limit and rule on this page comes from.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each page below was read on {updatedLabel}. Tire limits come from the tire
              makers and NHTSA, not from us. Your own spare&apos;s sidewall and your
              owner&apos;s manual come first. RoadZone Plus is not FDOT, Florida&apos;s
              Turnpike, CFX or the Road Rangers.
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
            <p className="text-sm font-black uppercase text-white/72">Flat tire in Orlando?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus to get the spare on, 24/7.
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
