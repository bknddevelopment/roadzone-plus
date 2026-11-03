import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BadgeDollarSign,
  ExternalLink,
  Info,
  KeyRound,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/car-lockout-cost-orlando";
const title = "How Much Does It Cost to Unlock a Car?";
const description =
  "Most published figures put a car unlock at about $50 to $150, more after hours. Sourced prices, what AAA covers, red flags, and 24/7 Orlando help.";
const updatedIso = "2026-11-03";
const updatedLabel = "November 3, 2026";
const heroImage = "/visuals/car-lockout-cost/hand-on-locked-car-door.webp";
const heroAlt = "A hand pulling the handle of a dark car door that will not open";

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

// Every price, percentage, law and rule on this page is quoted from a page in
// `sources`, read on the date above. RoadZone Plus publishes no lockout price,
// so none is given here: the RoadZone facts are limited to what its own auto
// lockout and car lockout pages already say (24/7 dispatch, damage-conscious
// entry for common passenger vehicles, price confirmed on the call before
// dispatch, no membership). No arrival times, certifications, years in business
// or field experience are claimed.
const sources = {
  yelp: {
    name: "Yelp: How much does Vehicle lockouts cost? (last updated November 2026; read November 3, 2026)",
    short: "Yelp",
    href: "https://www.yelp.com/costs/vehicle_lockouts",
    note: "Based on 17,695 real quotes from businesses in the United States: a range from $55 to $120, with $75 marked typical. Yelp builds the estimate from quotes businesses sent to consumers; actual costs may vary.",
  },
  thumbtack: {
    name: "Thumbtack: How much does a car locksmith cost? (last updated August 20, 2026; read November 3, 2026)",
    short: "Thumbtack",
    href: "https://www.thumbtack.com/p/car-locksmith-cost",
    note: "The national average cost to hire a car locksmith is typically $117 to $259, with a low-end cost of $64; a simple car lockout often falls within that range, and costs can climb toward the high-end average of $456 for after-hours emergencies. Cost factors: key type, vehicle make and model, time of service, type of service, and travel distance.",
  },
  jdpower: {
    name: "J.D. Power: How Much Does It Cost For A Locksmith To Open Your Car Door? (Dustin Hawley, December 30, 2022; read November 3, 2026)",
    short: "J.D. Power",
    href: "https://www.jdpower.com/cars/shopping-guides/how-much-does-it-cost-for-a-locksmith-to-open-your-car-door",
    note: "Unlocking the door: $70 to $150. Night assistance usually carries a premium, distant locations may cost more, and the type of lock matters: Volvo doors are very hard to open without the right key, while Ford and Hyundai are relatively easier. A replacement car door lock costs $300 to $600. A slim jim used unprofessionally can disable airbags and damage electric sensors; trying it yourself risks damaging the lock system and denting the car.",
  },
  gvlock: {
    name: "Great Valley Lockshop: How Much Is a Locksmith for a Car? (Chris Strauss, September 19, 2024; read November 3, 2026)",
    short: "Great Valley Lockshop",
    href: "https://www.gvlock.com/blog/how-much-is-a-locksmith-for-a-car/",
    note: "Car lockout service: $60 to $150 for standard service during business hours; emergency or after-hours service can increase the cost to $150 to $250 or more. Factors: time of service, vehicle type, location and travel distance, lock complexity, additional fees. A Pennsylvania locksmith's figures.",
  },
  ableLock: {
    name: "Able Lock Shop: How Much is a Locksmith for a Car? What's a Fair Price? (September 19, 2022; read November 3, 2026)",
    short: "Able Lock Shop",
    href: "https://ablelockshop.com/blog/how-much-is-a-locksmith-for-a-car/",
    note: "You will spend between $50 and $100 to unlock a vehicle; the cost depends on the area, the hour (after-hours costs more) and the locksmith's travel time. Do not try a coat hanger: you will probably cause damage. A New York locksmith's figures.",
  },
  aaaSouth: {
    name: "AAA Auto Club South: Emergency Road Service, Lockout Service (read November 3, 2026)",
    short: "AAA Auto Club South",
    href: "https://autoclubsouth.aaa.com/automotive/ers_lockoutservice.aspx",
    note: "If a locksmith is required, services valued up to $50 are covered for Classic members (exclusive of ignition repair or replacement), up to $100 for Plus members and up to $150 for Premier members. If the vehicle can't be safely opened, towing is provided under the towing benefit.",
  },
  waAg: {
    name: "Washington State Attorney General: Keys to avoiding locksmith fraud (August 10, 2011; read November 3, 2026)",
    short: "Washington Attorney General",
    href: "https://www.atg.wa.gov/all-consuming-blog/keys-avoiding-locksmith-fraud",
    note: "If you're locked out of your car and have a roadside assistance service, call them first; these services are sometimes included with the purchase of a car, as an add-on through your insurance company or through a membership club such as AAA. In a lock-out, most legitimate locksmiths will give you an estimate on the phone for the total cost. Expect the locksmith to ask you for identification.",
  },
  wiDatcp: {
    name: "Wisconsin DATCP: Consumer Protection Fact Sheet, Hiring a Locksmith (read November 3, 2026)",
    short: "Wisconsin consumer protection",
    href: "https://datcp.wi.gov/Pages/Publications/HiringALocksmith470.aspx",
    note: "In lock-outs, most legitimate locksmiths will give you an estimate on the phone for the total cost of the work; once the locksmith arrives, ask if that estimate has changed. Be cautious if you are told up front that the lock has to be drilled and replaced. Ask about extra fees for night calls, mileage or a minimum service charge. Never sign a blank form authorizing work.",
  },
  bbb: {
    name: "Better Business Bureau: Scam Alert, Locked out? Don't fall for a locksmith scam (July 24, 2020; read November 3, 2026)",
    short: "BBB",
    href: "https://www.bbb.org/article/news-releases/22797-bbb-scam-alert-locked-out-dont-fall-for-a-locksmith-cons",
    note: "Imitators may answer with a generic \"Hello, locksmith services\"; a phone quote as low as $15 grows once the locksmith arrives; a claim that the lock must be drilled is most likely a deception. Ask about the service call, mileage and parts first, get an estimate before work begins, insist on an itemized invoice with the business name and address, and pay by credit card.",
  },
  fdot: {
    name: "Florida Department of Transportation: Road Rangers (read November 3, 2026)",
    short: "FDOT Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "Road Rangers provide limited no-cost highway assistance, dial *347. Listed services: change flat tires, jump-start vehicles and make minor repairs, two free local calls, clear disabled vehicles and debris from travel lanes, supply emergency gasoline, diesel and water. Lockouts are not on the list.",
  },
  flhsmv: {
    name: "Florida Highway Safety and Motor Vehicles: Car and Driveway Safety (read November 3, 2026)",
    short: "FLHSMV",
    href: "https://www.flhsmv.gov/safety-center/child-safety/car-driveway-safety/",
    note: "Florida temperatures will rapidly increase in minutes; the inside of a vehicle can heat up by 20 degrees in just 10 minutes; heatstroke in a vehicle can occur when the temperature is as low as 57 degrees outside. If you see a child or pet locked in a hot car, take immediate action by calling 911.",
  },
  flStatute: {
    name: "Florida Statutes, section 768.139: Rescue of vulnerable person or domestic animal from a motor vehicle (2026; read November 3, 2026)",
    short: "Fla. Stat. 768.139",
    href: "https://www.flsenate.gov/Laws/Statutes/2026/0768.139",
    note: "A person who enters a vehicle to remove a vulnerable person or domestic animal is immune from civil liability for damage to the vehicle if they: determine the vehicle is locked or there is no reasonable way out; believe in good faith that entry is necessary because of imminent danger; ensure law enforcement is notified or 911 is called before entering or immediately after; use no more force than necessary; and remain with the person or animal until law enforcement or another first responder arrives.",
  },
  edmunds: {
    name: "Edmunds: Guide to Replacing Your Key Fob (Ronald Montoya and Jeremy Korzeniewski, March 12, 2025; read November 3, 2026)",
    short: "Edmunds",
    href: "https://www.edmunds.com/car-maintenance/the-high-cost-of-losing-your-keys.html",
    note: "A low-cost alternative is a basic car key without the transmitter: it will do everything except start the engine, but it will come in handy if you lock your keys in the car.",
  },
};

type SourceKey = keyof typeof sources;

const priceRows: Array<{
  source: SourceKey;
  measures: string;
  figure: string;
  afterHours: string;
}> = [
  {
    source: "yelp",
    measures: "Vehicle lockout quotes sent by U.S. businesses (17,695 quotes)",
    figure: "$55 to $120, $75 typical",
    afterHours: "Not split out",
  },
  {
    source: "jdpower",
    measures: "A locksmith unlocking the car door",
    figure: "$70 to $150",
    afterHours: "Night calls usually carry a premium",
  },
  {
    source: "gvlock",
    measures: "Car lockout service, standard business hours",
    figure: "$60 to $150",
    afterHours: "$150 to $250 or more",
  },
  {
    source: "ableLock",
    measures: "Unlocking a vehicle",
    figure: "$50 to $100",
    afterHours: "Costs more after hours",
  },
  {
    source: "thumbtack",
    measures: "Hiring a car locksmith for any job (a simple lockout often falls in this range)",
    figure: "$117 to $259 average, $64 low end",
    afterHours: "Can climb toward $456",
  },
];

const priceMovers: Array<{ title: string; text: string; cite: SourceKey[] }> = [
  {
    title: "The hour you call",
    text: "Every source that splits it out charges more at night. Great Valley Lockshop's lockout range goes from $60-$150 in business hours to $150-$250 or more after hours, and Thumbtack says costs can climb toward $456 for after-hours emergencies.",
    cite: ["gvlock", "thumbtack", "jdpower"],
  },
  {
    title: "How far the technician drives",
    text: "J.D. Power says distant locations may cost more, and Thumbtack says many locksmiths charge a service fee that rises with travel distance. Ask whether the trip is included in the number you are quoted.",
    cite: ["jdpower", "thumbtack"],
  },
  {
    title: "What you drive",
    text: "J.D. Power: Volvo doors are very hard to open without the right key, while Ford and Hyundai are relatively easier, and common models are usually quicker. Thumbtack adds that luxury and newer vehicles often have more complex security systems.",
    cite: ["jdpower", "thumbtack"],
  },
  {
    title: "Locked in, or lost?",
    text: "A lockout means the key is inside the car. If the key is lost or broken, the job becomes a key replacement, which Thumbtack says depends heavily on the key type. AAA Auto Club South's own lockout benefit excludes ignition repair or replacement.",
    cite: ["thumbtack", "aaaSouth"],
  },
];

const coverage: Array<{ title: string; text: string; cite: SourceKey[] }> = [
  {
    title: "AAA: covered up to a tier limit",
    text: "AAA Auto Club South covers locksmith service valued up to $50 for Classic members, $100 for Plus and $150 for Premier. Compare that with the $55 to $120 Yelp range before you pay anyone out of pocket.",
    cite: ["aaaSouth", "yelp"],
  },
  {
    title: "Your insurer or your new-car warranty",
    text: "The Washington State Attorney General's advice: if you have a roadside assistance service, call it first. It is sometimes included when you buy a car, added through your insurance company, or part of a club membership such as AAA.",
    cite: ["waAg"],
  },
  {
    title: "Road Rangers do not list lockouts",
    text: "FDOT's free Road Rangers (dial *347) change flat tires, jump-start cars and bring emergency fuel on the highways they patrol. Lockouts are not on FDOT's list of Road Ranger services, so on I-4 with the keys inside, plan on a paid call or your own coverage.",
    cite: ["fdot"],
  },
  {
    title: "No coverage? Ask for the total first",
    text: "Pay-as-you-go is fine when you get the full price before anyone drives out. RoadZone Plus needs no membership and confirms the price on the call before dispatch.",
    cite: [],
  },
];

const redFlags: Array<{ flag: string; why: string; cite: SourceKey[] }> = [
  {
    flag: "A phone quote that sounds too low",
    why: "The BBB describes quotes as low as $15 that grow once the van arrives. Every source on this page puts a real unlock well above that.",
    cite: ["bbb"],
  },
  {
    flag: "\"Locksmith services\" instead of a company name",
    why: "The BBB says imitators answer with a generic greeting. Ask for the business's legal name; if they will not say it, call someone else.",
    cite: ["bbb", "wiDatcp"],
  },
  {
    flag: "\"We have to drill the lock\"",
    why: "Wisconsin's consumer protection office says to be cautious if you are told up front that the lock must be drilled and replaced, and the BBB calls it most likely a deception.",
    cite: ["wiDatcp", "bbb"],
  },
  {
    flag: "A new price at the car",
    why: "Wisconsin says to ask whether the phone estimate has changed once the technician sees the car; the BBB says if it does not match, have someone else do the job.",
    cite: ["wiDatcp", "bbb"],
  },
  {
    flag: "A blank form or no invoice",
    why: "Never sign a blank form authorizing work. Ask for an itemized invoice with the business name and address; the BBB recommends paying by credit card for added security.",
    cite: ["wiDatcp", "bbb"],
  },
];

const phoneQuestions = [
  "What is the total price to open the car, including the trip?",
  "Is there a night, weekend or holiday charge, or a minimum fee?",
  "Does the price change if the car is a newer or luxury model?",
  "What is your business's name, and will the vehicle be marked?",
  "Will you ask for my ID? (A legitimate provider should confirm the car is yours.)",
];

const onTheCall = [
  {
    label: "Where the car is",
    detail:
      "Hotel, store, garage level and row, apartment building, theme park lot, or the road and nearest cross street.",
  },
  {
    label: "Where the key is",
    detail:
      "On the seat, in the trunk, in a bag, or actually lost or broken. A lost key is a different job and a different price.",
  },
  {
    label: "The vehicle",
    detail:
      "Year, make, model and color. Newer and luxury models can need a more careful approach.",
  },
  {
    label: "Rental or your own",
    detail:
      "If it is a rental, say which company. RoadZone can help with access; replacement keys may still go through the rental company.",
  },
];

const paa: Array<{ question: string; answer: string; cite: SourceKey[] }> = [
  {
    question: "Do locksmiths unlock car doors?",
    answer:
      "Yes. Great Valley Lockshop calls car lockouts one of the most frequent locksmith services, done with specialized tools so the car is not damaged. J.D. Power says you typically have two options when locked out: call AAA or a nearby locksmith. A 24/7 roadside company such as RoadZone Plus is a third: its auto lockout service is damage-conscious entry for common passenger vehicles.",
    cite: ["gvlock", "jdpower"],
  },
  {
    question: "How much will a locksmith cost for a car?",
    answer:
      "For an unlock, about $50 to $150 in most published figures; Yelp's quote data puts the typical lockout at $75. Thumbtack's wider figure, $117 to $259, is the national average for any car locksmith job, including keys, and Thumbtack says a simple lockout often falls inside it. A new key costs more than an unlock, and the key type drives it.",
    cite: ["yelp", "jdpower", "thumbtack"],
  },
  {
    question: "Does AAA unlock vehicles for free?",
    answer:
      "It is part of the membership you already pay for, up to a limit. AAA Auto Club South covers locksmith service valued up to $50 on Classic, $100 on Plus and $150 on Premier; anything above that is yours. If the car cannot be safely opened, AAA tows it under the towing benefit instead.",
    cite: ["aaaSouth"],
  },
  {
    question: "Can a locksmith make a key from the VIN?",
    answer:
      "That is a key replacement, not a lockout, and it is priced as one: Thumbtack lists key type as a major cost factor. If your key is lost rather than locked inside, our car key replacement cost guide covers the VIN question and key prices with their sources. Edmunds suggests a cheap metal-only spare that opens the doors but does not start the car, which is exactly what you want after a lockout.",
    cite: ["thumbtack", "edmunds"],
  },
];

const relatedLinks = [
  {
    href: "/services/auto-lockout",
    title: "Auto Lockout Service",
    text: "RoadZone Plus's 24/7 damage-conscious lockout service for common passenger vehicles.",
  },
  {
    href: "/car-lockout-service-orlando",
    title: "Car Lockout Service Orlando",
    text: "What to do in the first minutes of a lockout at a hotel, store, garage or roadside.",
  },
  {
    href: "/locked-keys-in-rental-car-orlando",
    title: "Locked Keys in a Rental Car",
    text: "Visitor lockouts near the parks, hotels and Orlando airport, and who to call first.",
  },
  {
    href: "/car-key-replacement-cost-orlando",
    title: "Car Key Replacement Cost",
    text: "When the key is lost, not locked inside: sourced prices by key type.",
  },
  {
    href: "/key-fob-not-working-orlando",
    title: "Key Fob Not Working",
    text: "A dead fob battery can look like a lockout. Check this first.",
  },
  {
    href: "/roadside-assistance-cost-orlando",
    title: "Roadside Assistance Cost",
    text: "How a one-time call compares with memberships and free highway help.",
  },
];

const faqs = [
  {
    question: "How much does it cost to unlock a car in Orlando?",
    answer:
      "None of the sources read for this page publishes an Orlando-only figure. The national figures cluster at about $50 to $150 for a standard unlock: Yelp's 17,695 U.S. lockout quotes run $55 to $120 with $75 typical, J.D. Power says $70 to $150, and Great Valley Lockshop says $60 to $150 in business hours. After hours costs more. RoadZone Plus does not publish a lockout price; it confirms the price on the call before dispatch, with no membership required.",
  },
  {
    question: "How much does a locksmith charge to unlock a car at night?",
    answer:
      "More than in the daytime. Great Valley Lockshop puts after-hours lockouts at $150 to $250 or more, and Thumbtack says costs can climb toward $456 for after-hours emergencies. J.D. Power says night assistance usually carries a premium. Ask whether a night or weekend charge applies before you agree.",
  },
  {
    question: "Is it cheaper to call a locksmith or roadside assistance?",
    answer:
      "If you already have roadside coverage, use it first: the Washington State Attorney General's advice is to call your roadside assistance service before a locksmith, and AAA Auto Club South covers locksmith service up to $50, $100 or $150 depending on the tier. Without coverage, compare total prices, including the trip and any night charge, from a locksmith and a roadside company.",
  },
  {
    question: "Will unlocking my car damage it?",
    answer:
      "Done properly, it should not. J.D. Power warns that a slim jim used unprofessionally can disable airbags and damage electric sensors, and that trying it yourself risks damaging the lock system and denting the car. Able Lock Shop says a coat hanger will probably cause damage. RoadZone Plus describes its lockout service as a damage-conscious approach for common passenger vehicles.",
  },
  {
    question: "My child or pet is locked in the car. What do I do?",
    answer:
      "Call 911 first. FLHSMV says the inside of a car can heat up by 20 degrees in 10 minutes and heatstroke can occur when it is as low as 57 degrees outside. Florida's section 768.139 protects someone who breaks in to rescue a vulnerable person or pet from paying for the damage, but only if the car is locked, the danger is imminent, 911 is called before or right after entry, no more force than necessary is used, and they stay until responders arrive.",
  },
  {
    question: "Do Florida Road Rangers unlock cars?",
    answer:
      "FDOT's list of Road Ranger services covers flat tires, jump-starts, minor repairs, two free local calls, clearing lanes and emergency fuel and water. Lockouts are not on it. For a lockout on I-4 or in a parking lot, call your roadside coverage or a 24/7 lockout service.",
  },
  {
    question: "What if my keys are lost, not locked inside?",
    answer:
      "Then it is a key replacement, not a lockout, and the price depends on the key type. See our car key replacement cost guide for sourced prices, or the smart key programming service for push-to-start keys.",
  },
  {
    question: "How do I avoid a locksmith scam?",
    answer:
      "Get the total price on the phone, including trip and night charges; Wisconsin's consumer protection office says most legitimate locksmiths will give one for a lockout. Be wary of a generic \"locksmith services\" greeting, a quote that rises at the car, or a claim that the lock must be drilled, all red flags named by the BBB. Never sign a blank form, ask for an itemized invoice, and pay by credit card.",
  },
  {
    question: "How do I get RoadZone Plus to unlock my car?",
    answer:
      "Call (407) 222-2739, any hour. Say where the car is, where the key is, and the year, make, model and color. RoadZone Plus provides 24/7, damage-conscious lockout help for common passenger vehicles at homes, hotels, parking lots, workplaces and roadside stops, and confirms the price on the call before dispatch. Have your ID ready, since the technician may confirm the vehicle is yours.",
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

export default function CarLockoutCostPage() {
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
      width: 1200,
      height: 800,
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
      { "@type": "Thing", name: "Car lockout cost" },
      { "@type": "Thing", name: "Automotive locksmith" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Car Lockout Cost", path },
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
              <BadgeDollarSign aria-hidden="true" size={16} />
              Locked out in Orlando
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              How much does it cost to unlock a car?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              About $50 to $150 for a standard unlock, in most published figures. Yelp&apos;s
              17,695 U.S. lockout quotes run $55 to $120, with $75 typical. Nights cost more: one
              locksmith lists $150 to $250 or more after hours. If you have AAA, Auto Club South covers
              locksmith service up to $50, $100 or $150 depending on your tier.
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
              <Link href="/services/auto-lockout" className="btn btn-secondary">
                Auto Lockout Service
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
                Keys locked inside right now?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                24/7 damage-conscious lockout help anywhere in Orlando. The price is
                confirmed on the call, before anyone drives out.
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

      <section id="price-table" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <BadgeDollarSign aria-hidden="true" size={16} />
              What people pay
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Five published lockout prices, side by side.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each figure below is quoted from its source, with the source&apos;s date. None
              of the sources read for this page publishes an Orlando-only number, so these
              are national figures; two are individual locksmiths&apos; own price guides from
              Pennsylvania and New York.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Published car lockout prices by source: what each measures, the price, and
                the after-hours figure
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Source
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    What it measures
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Price
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    After hours
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row, index) => (
                  <tr
                    key={row.source}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[20%] md:p-5">
                      <a
                        href={sources[row.source].href}
                        className="inline-flex min-h-11 items-center text-lg font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200 md:min-h-0"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {sources[row.source].short}
                      </a>
                    </th>
                    <td className="mt-2 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:w-[36%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        What it measures
                      </span>
                      {row.measures}
                    </td>
                    <td className="mt-3 block align-top md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        Price
                      </span>
                      <span className="text-xl font-black text-safety-yellow">{row.figure}</span>
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        After hours
                      </span>
                      {row.afterHours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60">
            RoadZone Plus does not publish a lockout price. It confirms your price on the
            call, before a technician is sent, and no membership is required. Ask any
            provider for the total, including the trip and any night charge.
          </p>
        </div>
      </section>

      <section id="what-moves-the-price" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Why quotes differ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four things move a lockout price.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The sources agree on what pushes a quote up. Knowing them tells you which
              questions to ask before you say yes.
            </p>
            <figure className="mt-8">
              <Image
                src="/visuals/car-lockout-cost/car-key-with-remote-head.webp"
                alt="A hand holding out a car key with a black remote head and a metal blade"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                Key on the seat is a lockout. Key lost or broken is a key replacement, priced
                differently.
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4">
            {priceMovers.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
            <p className="text-sm leading-7 text-white/60">
              Key lost, not locked in? See the{" "}
              <Link
                href="/car-key-replacement-cost-orlando"
                className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                car key replacement cost guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="already-covered" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Before you pay
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              You may already be covered. Check these first.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {coverage.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="child-or-pet" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              Child or pet inside
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Not a price question. Call 911 first.
            </h2>
            <figure className="mt-8">
              <Image
                src="/visuals/car-lockout-cost/sunlit-car-interior.webp"
                alt="Sunlight across the dashboard and steering wheel inside a closed car"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                FLHSMV: a closed car can heat up by 20 degrees in 10 minutes.
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4 text-base leading-8 text-white/66">
            <p>
              Florida Highway Safety and Motor Vehicles says Florida temperatures rise
              rapidly in minutes, the inside of a vehicle can heat up by 20 degrees in just
              10 minutes, and heatstroke in a vehicle can occur when it is as low as 57
              degrees outside. If a child or pet is locked in, call 911 before anyone else.
            </p>
            <SourceTags keys={["flhsmv"]} />
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">
                What Florida&apos;s rescue law requires
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Section 768.139 protects a person who breaks into a car to rescue a
                vulnerable person or a pet from paying for the damage, but only if they do
                all five:
              </p>
              <ol className="mt-4 grid gap-2 text-sm leading-6 text-white/72">
                <li>1. Confirm the car is locked or there is no reasonable way out.</li>
                <li>2. Believe in good faith the person or animal is in imminent danger.</li>
                <li>3. Call 911 or law enforcement before entering, or immediately after.</li>
                <li>4. Use no more force than necessary.</li>
                <li>5. Stay with them nearby until police or another first responder arrives.</li>
              </ol>
              <SourceTags keys={["flStatute"]} />
            </div>
          </div>
        </div>
      </section>

      <section id="red-flags" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              Red flags
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Five signs the price will not be the price.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Lockouts are where bait-and-switch pricing happens, because you are stuck and
              in a hurry. The BBB and two state consumer offices name the same warning signs.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {redFlags.map((item) => (
              <div key={item.flag} className="card-solid p-6">
                <h3 className="text-lg font-black text-white">{item.flag}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.why}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ask-on-the-phone" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              On the phone
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Five questions that lock in the price.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Wisconsin&apos;s consumer protection office says most legitimate locksmiths
              will give a lockout estimate for the total cost on the phone, and the
              Washington Attorney General says to expect them to ask for your ID.
            </p>
            <SourceTags keys={["wiDatcp", "waAg"]} />
          </div>
          <ol className="grid gap-4">
            {phoneQuestions.map((question, index) => (
              <li key={question} className="card-solid flex items-start gap-4 p-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                  {index + 1}
                </span>
                <span className="text-base font-bold leading-7 text-white">{question}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="dont-force-it" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <figure>
            <Image
              src="/visuals/car-lockout-cost/door-panel-off-lock-work.webp"
              alt="A person working on the lock mechanism of a car door with the inner door panel removed"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
            <figcaption className="mt-3 text-sm leading-6 text-white/56">
              Door panels, lock rods and window seals are what a forced entry can cost you.
            </figcaption>
          </figure>
          <div>
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              The coat hanger
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The cheapest unlock can be the most expensive one.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-white/66">
              <p>
                Two of the results Google ranks for this search in Orlando are about getting in
                without a locksmith, one of them with a coat hanger. J.D. Power
                says a slim jim used unprofessionally can disable airbags and damage
                electric sensors, and that trying it yourself risks damaging the lock
                system and denting the car. Able Lock Shop says a coat hanger will probably cause
                damage, and may fail anyway.
              </p>
              <p>
                Compare the bills: Yelp&apos;s lockout quotes run $55 to $120, while J.D. Power
                puts a replacement car door lock at $300 to $600. Edmunds
                suggests a cheap metal-only spare key, one that opens the doors but does not
                start the engine, for exactly this moment next time.
              </p>
              <SourceTags keys={["jdpower", "ableLock", "yelp", "edmunds"]} />
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Four questions people ask Google
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Locksmiths, AAA, and keys made from a VIN.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The four questions Google shows next to this search in Orlando, answered from
              the sources on this page.
            </p>
          </div>
          <div className="grid gap-4">
            {paa.map((item) => (
              <div key={item.question} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.answer}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <KeyRound aria-hidden="true" size={16} />
              What RoadZone Plus does
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              24/7 lockout help, price confirmed before dispatch.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus is a 24/7 roadside assistance company in Orlando. Its auto
              lockout service is damage-conscious entry for common passenger vehicles at
              homes, hotels, stores, parking lots, workplaces and roadside stops. The price
              is confirmed on the call before dispatch, and no membership is required. Have
              your ID ready: the technician may confirm the vehicle is yours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/auto-lockout" className="btn btn-secondary">
                Auto Lockout Service
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

      <section id="related" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Related help
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              More on lockouts and keys in Orlando.
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

      <section id="faq" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Car lockout cost questions</h2>
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

      <section id="sources" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ExternalLink aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Where every price and rule on this page comes from.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each page below was read on {updatedLabel}. Prices come from Yelp, Thumbtack,
              J.D. Power and two locksmiths&apos; own price guides; coverage from AAA and
              FDOT; scam warnings from the BBB and two state consumer offices; heat and
              rescue rules from Florida&apos;s motor vehicle agency and statutes. None are
              RoadZone Plus prices.
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
              Keys locked in the car?
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus for 24/7 lockout help in Orlando.
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
