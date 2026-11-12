import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeDollarSign,
  BatteryCharging,
  ExternalLink,
  Info,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/jump-start-cost-orlando";
const title = "How Much Does a Jump Start Cost in Orlando?";
const description =
  "A jump start usually costs $50 to $100 out of pocket; Allstate lists $95 pay-per-use. AAA, insurance add-ons, free Road Rangers and jump packs compared.";
const updatedIso = "2026-11-12";
const updatedLabel = "November 12, 2026";
const shareImage = "/brand/roadzone-plus-logo.png";

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
        url: shareImage,
        width: 1575,
        height: 430,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every price, rule and fact on this page is quoted from a page in `sources`,
// read on the date above. RoadZone Plus publishes no jump start price, so none
// is given here: the RoadZone facts are limited to what its own jumpstart
// service page already says (24/7 dispatch to where the car is parked, no
// membership, exact price confirmed on the call before the technician heads
// out). No arrival times, certifications, years in business or field
// experience are claimed.
const sources = {
  stateFarm: {
    name: "State Farm: How roadside assistance coverage may help save you money in the long run (State Farm Editorial Team, October 29, 2025; read November 12, 2026)",
    short: "State Farm",
    href: "https://www.statefarm.com/simple-insights/auto-and-vehicles/how-roadside-assistance-coverage-may-save-you-money",
    note: "Estimated out-of-pocket cost for a jump-start: $50 to $100. These costs can vary widely based on your location, the time of day and the service provider. The average cost for roadside assistance from State Farm is $10 to $20 per year.",
  },
  marketWatch: {
    name: "MarketWatch: How Much Is Roadside Assistance? (Daniel Robinson, data updated July 2025; read November 12, 2026)",
    short: "MarketWatch",
    href: "https://www.marketwatch.com/insurance-services/auto-insurance/how-much-is-roadside-assistance/",
    note: "Mechanical labor, including battery jump-starts, can cost $50 to $100 depending on your vehicle and the area where you broke down. Plan prices: AAA $65 to $125 per year; GEICO add-on $14+ per year; Progressive $30 to $60 per year. Some companies count roadside service calls as auto claims, which can increase your rates in the future.",
  },
  allstate: {
    name: "Allstate Roadside: pay for today's service (estimated charges; read November 12, 2026)",
    short: "Allstate Roadside",
    href: "https://roadside.allstate.com/member/AMC/home",
    note: "You can either pay for just today's service, or ask about a membership. Estimated charges: Jump Start $95, Tire Change $99, Lockout $95, Fuel Delivery $95, Tow $159. Costs may vary based on service provider market rates.",
  },
  aaaMwg: {
    name: "AAA Mountain West Group: AAA Car Battery Replacement & Jump Start (read November 12, 2026)",
    short: "AAA Mountain West",
    href: "https://mwg.aaa.com/automotive/roadside/mobile-battery",
    note: "If you're not a Member, instant roadside assistance is available by phone when you purchase a Classic Membership and pay a $75 fee. Jump start: free with Membership. Members are entitled to four roadside service calls per Membership year; additional calls result in a fee. This is AAA's Mountain West club, not the club that serves Florida.",
  },
  aaaAcgPlans: {
    name: "AAA The Auto Club Group: Compare membership levels (read November 12, 2026)",
    short: "AAA Auto Club Group plans",
    href: "https://www.acg.aaa.com/aaa-membership/compare-membership-levels.html",
    note: "Annual pricing shown: Classic $79, Plus $117, Premier $144. Roadside benefits begin three days after payment of dues. Taxes, fees and options excluded. The Auto Club Group serves members in Florida and 14 other states and territories.",
  },
  aaaAcgRoadside: {
    name: "AAA The Auto Club Group: 24/7 AAA Roadside Assistance (read November 12, 2026)",
    short: "AAA Auto Club Group roadside",
    href: "https://www.acg.aaa.com/aaa-membership/roadside-assistance.html",
    note: "When your car battery is failing, get a battery jump-start or boost to get back on the road; AAA can test and replace your battery on the spot if needed at a discounted rate. The battery test and replacement service counts as one of the member's allowable service calls per membership year. Roadside benefits begin three days after payment of dues.",
  },
  aaaAcgBattery: {
    name: "AAA The Auto Club Group: Car Battery Replacement & Install Service (read November 12, 2026)",
    short: "AAA Auto Club Group battery",
    href: "https://www.acg.aaa.com/automotive/battery-service.html",
    note: "Heat shortens the life of the battery. In North America, an automotive battery typically lasts 3 to 5 years. The alternator is designed to maintain the battery's charge during normal use, but it is not designed to charge a completely discharged battery. If a vehicle must sit for more than 3 weeks, use a battery maintainer.",
  },
  interstate: {
    name: "Interstate Batteries: Is your car's battery ready for the summer? (read November 12, 2026)",
    short: "Interstate Batteries",
    href: "https://www.interstatebatteries.com/en-lx/heat-kills-batteries",
    note: "Summer heat is brutal on a car battery. The warmer the weather, the faster a battery will corrode; heat will also diminish a battery's ability to start a vehicle and ultimately shorten its life. The average car or truck battery lasts three to five years.",
  },
  geico: {
    name: "GEICO: 24/7 Roadside Assistance, Emergency Roadside Service (read November 12, 2026)",
    short: "GEICO",
    href: "https://www.geico.com/auto-insurance/emergency-road-service/",
    note: "Emergency Roadside Service for as little as $14 a year per car. Covers battery jump starts: if your battery dies, GEICO will send help for a jump start; the cost of replacing a battery is not included. Only GEICO auto insurance policyholders are eligible.",
  },
  fdot: {
    name: "Florida Department of Transportation: Road Rangers (read November 12, 2026)",
    short: "FDOT Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "The Road Ranger Service Patrol provides limited no-cost highway assistance; dial *347. Services can include: change flat tires, jump-start vehicles and make minor repairs, two free local calls, clear disabled vehicles and debris from travel lanes, supply emergency gasoline, diesel and water. Road Rangers patrol congested areas and high incident locations of the freeway.",
  },
  cfx: {
    name: "Central Florida Expressway Authority: Roadside Assistance, Dial *347 (read November 12, 2026)",
    short: "CFX",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Road Rangers provide free assistance along central Florida's toll roads, including State Roads 408, 417, 414, 429, 528 and 451. They help more than 4,000 motorists every month. On patrol seven days a week, 365 days a year, 6:00 AM to 10:00 PM.",
  },
  autozoneServices: {
    name: "AutoZone: Free Battery Testing, Charging & Installation Services (read November 12, 2026)",
    short: "AutoZone battery services",
    href: "https://www.autozone.com/lp/battery-services",
    note: "AutoZone offers three free battery services: testing, charging and recycling. An AutoZoner will come out to your vehicle with a battery tester. If the battery is low on power but still in good shape, AutoZone charges it for free; its fast charger can charge most automotive batteries in about 30 minutes. The page does not list jump-starting a car.",
  },
  autozoneJumpers: {
    name: "AutoZone: Jump Starter, Portable Car Battery Jump Box (listed prices; read November 12, 2026)",
    short: "AutoZone jump starters",
    href: "https://www.autozone.com/test-scan-and-specialty-tools/jump-starter",
    note: "Listed prices on the day read: Duralast 800 Amps DL-800 $39.00; Duralast 1,000 Amp DL-1000 $69.00; NOCO GB20 $79.99; NOCO 1,000 Amps GB40 $99.99; NOCO 2,000 Amps GB70 $199.99; most expensive listed, NOCO 6,250 Amps GB500, $1,999.99.",
  },
  aaaEv: {
    name: "AAA Club Alliance: Jump-Starting an EV, Take These Precautions to Prevent Damage (read November 12, 2026)",
    short: "AAA Club Alliance",
    href: "https://cluballiance.aaa.com/the-extra-mile/advice/car/jump-starting-an-ev",
    note: "Every EV and hybrid has a 12-volt battery system; without it, even if the lithium-ion battery is fully charged, the vehicle will not start. Never jump-start an EV with another EV or hybrid vehicle. Only jump-start an EV's 12-volt battery with a combustion-engine vehicle or jumper pack. Never attempt to jump-start the main lithium-ion battery in an EV or hybrid.",
  },
  toyota: {
    name: "Toyota Prius (2023 to 2026) Owner's Manual: If the 12-volt battery is discharged (read November 12, 2026)",
    short: "Toyota Prius manual",
    href: "https://www.mytoyo.com/if_the_12_volt_battery_is_discharged-252.html",
    note: "With jumper cables and a second vehicle with a 12-volt battery, you can jump start the vehicle. The exclusive jump starting terminal is to be used when charging the 12-volt battery from another vehicle in an emergency; it cannot be used to jump start another vehicle. The hybrid system cannot be started by push-starting.",
  },
  chase: {
    name: "Chase: How to Get Roadside Assistance with a Credit Card (read November 12, 2026)",
    short: "Chase",
    href: "https://www.chase.com/personal/credit-cards/education/rewards-benefits/how-to-get-roadside-assistance-with-a-credit-card",
    note: "Chase offers Roadside Assistance as a complimentary or pay-per-use service to cardmembers. Chase points cardmembers to their card's Guide to Benefits to learn whether the service is complimentary or pay-per-use; roadside service fees are typically explained when you call for assistance.",
  },
};

type SourceKey = keyof typeof sources;

const priceRows: Array<{
  source: SourceKey;
  what: string;
  figure: string;
  fine: string;
}> = [
  {
    source: "stateFarm",
    what: "Estimated out-of-pocket cost of one jump-start, no coverage",
    figure: "$50 to $100",
    fine: "Varies widely with location, time of day and provider",
  },
  {
    source: "marketWatch",
    what: "Roadside mechanical labor, including battery jump-starts",
    figure: "$50 to $100",
    fine: "Depends on the vehicle and the area where you broke down",
  },
  {
    source: "allstate",
    what: "Pay-per-use roadside service: one jump start, no membership",
    figure: "$95 estimated",
    fine: "May vary with service provider market rates",
  },
  {
    source: "aaaMwg",
    what: "AAA for a non-member who needs help right now (Mountain West club, not Florida's)",
    figure: "Classic membership + $75 fee",
    fine: "The jump itself is then free with membership",
  },
];

const coverage: Array<{ title: string; text: string; cite: SourceKey[] }> = [
  {
    title: "AAA: included, but not on the day you join",
    text: "Jump starts come with every AAA plan. The Auto Club Group, the AAA club that serves Florida, showed annual prices of $79 for Classic, $117 for Plus and $144 for Premier when this page was written, and its roadside benefits begin three days after you pay. Joining from the parking lot does not make today's jump free. AAA's Mountain West club allows four service calls a year.",
    cite: ["aaaAcgPlans", "aaaAcgRoadside", "aaaMwg"],
  },
  {
    title: "Your car insurance add-on",
    text: "GEICO's Emergency Roadside Service covers battery jump starts from as little as $14 a year per car, for GEICO policyholders only, and it does not pay for a new battery. State Farm puts its own roadside coverage at $10 to $20 a year on average. MarketWatch notes some insurers count a roadside call as a claim, which can raise rates later, so ask before you use it.",
    cite: ["geico", "stateFarm", "marketWatch"],
  },
  {
    title: "Road Rangers on Orlando highways: free",
    text: "FDOT's Road Rangers jump-start vehicles at no cost on the freeways they patrol; dial *347. On Central Florida's toll roads (SR 408, 417, 414, 429, 528 and 451) CFX's Road Rangers patrol 6 AM to 10 PM every day and help more than 4,000 drivers a month. They work highways, not hotel lots, garages or driveways.",
    cite: ["fdot", "cfx"],
  },
  {
    title: "Your credit card",
    text: "Some cards include roadside help. Chase says it can be complimentary or pay-per-use depending on the card, and the fee is explained when you call. Check your card's Guide to Benefits before you pay anyone else.",
    cite: ["chase"],
  },
];

const jumpStarters: Array<{ name: string; price: string }> = [
  { name: "Duralast 800 Amps (DL-800)", price: "$39.00" },
  { name: "Duralast 1,000 Amp (DL-1000)", price: "$69.00" },
  { name: "NOCO GB20", price: "$79.99" },
  { name: "NOCO 1,000 Amps (GB40)", price: "$99.99" },
  { name: "NOCO 2,000 Amps (GB70)", price: "$199.99" },
];

const callChecklist = [
  {
    label: "Where the car is",
    detail:
      "Street address, or the hotel, garage level and row, apartment building, theme-park lot, or highway exit and direction.",
  },
  {
    label: "What it does",
    detail:
      "Clicking, a slow crank, dim dash lights, or nothing at all. A normal crank that will not catch may not be the battery.",
  },
  {
    label: "The vehicle",
    detail:
      "Year, make, model and color, and whether it is gas, diesel, hybrid or electric.",
  },
  {
    label: "Battery history",
    detail:
      "How old the battery is, whether it has needed jumps before, and whether the car sat for days or weeks.",
  },
];

const priceQuestions = [
  "What is the total price for the jump, including the trip to me?",
  "Is it the same price at night, on a weekend or on a holiday?",
  "If the jump does not hold, what would a battery cost, and can it be done here?",
  "How do I pay, and do I get a receipt with the business name on it?",
];

const paa: Array<{ question: string; answer: string; cite: SourceKey[] }> = [
  {
    question: "Will AutoZone jump start my car for free?",
    answer:
      "AutoZone's own battery-services page lists three free services: battery testing, battery charging and battery recycling. It does not list jump-starting a car. If the battery is low but still in good shape, the store's fast charger can charge most car batteries in about 30 minutes, but the car (or the battery) has to get to the store first. If the car will not start where it is parked, you need a jump there.",
    cite: ["autozoneServices"],
  },
  {
    question: "How much will it cost to jumpstart a car?",
    answer:
      "About $50 to $100 if you pay out of pocket: that is State Farm's estimate for one jump-start and MarketWatch's figure for roadside labor that includes jumps. Allstate's pay-per-use roadside service lists a jump start at $95, an estimate that can vary with local rates. It can cost nothing extra if you already have AAA, an insurance roadside add-on, or a Road Ranger on a covered Orlando highway.",
    cite: ["stateFarm", "marketWatch", "allstate"],
  },
  {
    question: "How much does it cost to get a car jump starter?",
    answer:
      "AutoZone listed portable jump starters from $39.00 (Duralast DL-800) on the day this page was written, with common units at $69.00 to $99.99 (Duralast DL-1000, NOCO GB20 and GB40) and heavy-duty packs at $199.99 and up. A pack only helps if it is charged and in the car when the battery dies.",
    cite: ["autozoneJumpers"],
  },
  {
    question: "How much will AAA charge for a jump start?",
    answer:
      "Nothing extra if you are already a member: AAA says a jump start is free with membership. The Auto Club Group, which serves Florida, showed plans at $79, $117 and $144 a year, with roadside benefits starting three days after you pay. Not a member and stuck now? AAA's Mountain West club offers instant service if you buy a Classic membership and pay a $75 fee; ask Florida's club what it charges before you join on the spot.",
    cite: ["aaaMwg", "aaaAcgPlans"],
  },
];

const relatedLinks = [
  {
    href: "/services/jumpstart",
    title: "Jumpstart Service",
    text: "RoadZone Plus's 24/7 jump start and battery boost service, wherever the car is parked in Orlando.",
  },
  {
    href: "/dead-battery-car-wont-start-orlando",
    title: "Car Won't Start?",
    text: "Clicking, slow crank or silence: what each no-start sound usually means.",
  },
  {
    href: "/car-battery-replacement-cost-orlando",
    title: "Car Battery Replacement Cost",
    text: "When a jump will not hold: sourced battery prices, installation and Florida's battery fee.",
  },
  {
    href: "/road-rangers-orlando",
    title: "Road Rangers in Orlando",
    text: "Where the free highway patrol works, its hours, and how to reach it with *347.",
  },
  {
    href: "/car-wont-start-in-cold-orlando",
    title: "Car Won't Start in the Cold",
    text: "Why a battery worn down by Florida summer often quits on the first cold morning.",
  },
  {
    href: "/roadside-assistance-cost-orlando",
    title: "Roadside Assistance Cost",
    text: "Jumps, lockouts, tires and fuel: how one-time calls compare with memberships.",
  },
];

const faqs = [
  {
    question: "How much does a jump start cost in Orlando?",
    answer:
      "None of the sources read for this page publishes an Orlando-only price. The national figures put a jump start at about $50 to $100 out of pocket (State Farm and MarketWatch), and Allstate's pay-per-use roadside service lists $95. It can cost nothing extra with AAA, an insurance roadside add-on, or FDOT's Road Rangers on the highways they patrol. RoadZone Plus does not publish a jump start price; it confirms your exact price on the call before the technician heads out, with no membership required.",
  },
  {
    question: "How much is a jump start without AAA or a membership?",
    answer:
      "Expect roughly $50 to $100, according to State Farm's and MarketWatch's estimates, and Allstate lists $95 for a pay-per-use jump start. AAA's Mountain West club offers a non-member instant service only if you buy a Classic membership and pay a $75 fee. Whoever you call, ask for the total, including the trip, before anyone is sent.",
  },
  {
    question: "Does car insurance pay for a jump start?",
    answer:
      "Only if your policy has roadside coverage. GEICO's Emergency Roadside Service covers battery jump starts from as little as $14 a year per car, for GEICO policyholders, and does not cover a new battery. State Farm says its roadside coverage averages $10 to $20 a year. MarketWatch notes some insurers count a roadside call as a claim, which can raise rates, so ask your insurer how a jump is recorded.",
  },
  {
    question: "Do Florida Road Rangers jump-start cars for free?",
    answer:
      "Yes, on the highways they patrol. FDOT lists jump-starting vehicles among the Road Rangers' no-cost services; dial *347. CFX's Road Rangers cover Central Florida's toll roads, including SR 408, 417, 414, 429, 528 and 451, from 6 AM to 10 PM every day. They do not come to driveways, hotel lots or parking garages.",
  },
  {
    question: "Is it cheaper to buy a portable jump starter?",
    answer:
      "Over time, often. AutoZone listed jump starters from $39.00, and a NOCO GB20 at $79.99, on the day this page was written, which is less than one $95 pay-per-use jump from Allstate. The catch: the pack must be charged and in the car, and it will not help a battery that is worn out.",
  },
  {
    question: "Can you jump-start a hybrid or an electric car?",
    answer:
      "Yes, the 12-volt battery. AAA says every EV and hybrid has one, and without it the car will not start even if the main battery is full. AAA's rules: jump it only from a gas or diesel car or a jumper pack, never from another EV or hybrid, and never try to jump the main high-voltage battery. Toyota's Prius manual says its jump terminal is for receiving a charge, not for jumping another car.",
  },
  {
    question: "Should I get a jump start or a new battery?",
    answer:
      "A jump is the cheap fix when the battery is still healthy. AAA says batteries typically last 3 to 5 years and heat shortens their life, and that the alternator is not designed to recharge a completely dead battery. If the battery is old or keeps dying, have it tested; AutoZone tests and charges batteries for free. If it needs replacing, see our car battery replacement cost guide.",
  },
  {
    question: "How do I get a jump start from RoadZone Plus?",
    answer:
      "Call (407) 222-2739, any hour. Say where the car is, what it does when you try to start it, and the year, make, model and fuel type. RoadZone Plus sends jump start help to homes, hotels, apartments, garages, parking lots, workplaces and roadside stops in Orlando, needs no membership or app, and confirms your exact price on the call before the technician heads out.",
  },
];

function SourceTags({ keys }: { keys: SourceKey[] }) {
  if (keys.length === 0) return null;
  return (
    <span className="mt-2 block text-xs leading-5 text-white/60">
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

export default function JumpStartCostPage() {
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
    image: absoluteUrl(shareImage),
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@id": businessId,
    },
    mainEntityOfPage: absoluteUrl(path),
    about: [
      { "@type": "Thing", name: "Jump start cost" },
      { "@type": "Thing", name: "Car battery jump start" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Jump Start Cost", path },
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
              Dead battery in Orlando
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              How much does a jump start cost?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Usually about $50 to $100 if you pay out of pocket: State Farm&apos;s cost
              table lists that range for one jump-start, citing MarketWatch&apos;s roadside
              figures. Allstate&apos;s pay-per-use
              roadside service lists a jump start at $95. It can cost nothing extra if you
              already have AAA, a roadside add-on on your car insurance, or a free Road
              Ranger on a covered Orlando highway.
            </p>
            <p className="mt-4 text-sm font-bold text-white/60">
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

          <aside className="card bg-panel p-6" aria-labelledby="hero-call-heading">
            <p
              id="hero-call-heading"
              className="text-sm font-black uppercase text-safety-yellow"
            >
              Car won&apos;t start right now?
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              RoadZone Plus sends 24/7 jump start help to the car: a driveway, hotel lot,
              parking garage, workplace or roadside stop. No membership, no app. Your exact
              price is confirmed on the call, before a technician heads out.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 flex min-h-11 items-center gap-3 text-2xl font-black text-white"
            >
              <PhoneCall aria-hidden="true" size={22} />
              {site.phoneDisplay}
            </a>
            <Link
              href="/services/jumpstart"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              How the jumpstart service works
            </Link>
          </aside>
        </div>
      </section>

      <section id="price-table" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <BadgeDollarSign aria-hidden="true" size={16} />
              Paying for one jump
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four published prices for a single jump start.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Each figure is quoted from its source; the date each page was read is in the
              source list at the bottom. None of the sources read for this page publishes an
              Orlando-only price, so these are national figures.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Published jump start prices by source: what each price covers, the price,
                and the fine print
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/60">
                    Source
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/60">
                    What the price covers
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/60">
                    Price
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/60">
                    Fine print
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
                    <td className="mt-2 block align-top text-sm leading-6 text-white/70 md:mt-0 md:table-cell md:w-[36%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/55 md:hidden">
                        What the price covers
                      </span>
                      {row.what}
                    </td>
                    <td className="mt-3 block align-top md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/55 md:hidden">
                        Price
                      </span>
                      <span className="text-xl font-black text-safety-yellow">{row.figure}</span>
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/70 md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/55 md:hidden">
                        Fine print
                      </span>
                      {row.fine}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66">
            RoadZone Plus does not publish a jump start price. It confirms your exact price
            on the call, before the technician heads out, and no membership is required.
            State Farm says prices vary with location, time of day and provider, so ask any
            company for the total, including the trip, before you agree.
          </p>
          <SourceTags keys={["stateFarm"]} />
        </div>
      </section>

      <section id="already-covered" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Before you pay
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four ways the jump may already be paid for.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              One pay-per-use jump at Allstate&apos;s $95 estimate costs more than a year of
              AAA Classic at The Auto Club Group&apos;s $79, but only if you joined at least
              three days before the battery died. Check these before you pay anyone.
            </p>
            <SourceTags keys={["allstate", "aaaAcgPlans"]} />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {coverage.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66">
            Stopped on an Orlando highway or toll road? Read{" "}
            <Link
              href="/road-rangers-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              how Road Rangers work in Orlando
            </Link>{" "}
            first. In a lot, a garage or at home, call{" "}
            <a
              href={site.phoneHref}
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <section id="jump-or-battery" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <BatteryCharging aria-hidden="true" size={16} />
              Florida heat
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A jump is only the cheap fix if the battery is still good.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Interstate Batteries says summer heat is brutal on a car battery: the warmer
              the weather, the faster it corrodes, and heat shortens its life. AAA puts a
              typical battery&apos;s life at 3 to 5 years and says heat shortens it.
            </p>
            <SourceTags keys={["interstate", "aaaAcgBattery"]} />
          </div>
          <div className="grid gap-4">
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">
                Driving around may not recharge a dead battery
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                AAA says the alternator is built to keep a battery charged during normal
                driving, not to recharge one that is completely discharged. After a jump,
                get the battery tested. AutoZone tests batteries for free and can charge a
                low but healthy one in about 30 minutes.
              </p>
              <SourceTags keys={["aaaAcgBattery", "autozoneServices"]} />
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">Cars that sit for weeks</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                AAA recommends a battery maintainer for a car that will sit for more than
                three weeks. That matters for a car left during a long trip or at a seasonal
                home: one maintainer can be cheaper than the jump that follows.
              </p>
              <SourceTags keys={["aaaAcgBattery"]} />
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">Second jump this month?</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Paying for jump after jump adds up. If the battery is old or keeps dying,
                compare the{" "}
                <Link
                  href="/car-battery-replacement-cost-orlando"
                  className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                >
                  car battery replacement cost
                </Link>{" "}
                with another boost, or ask about{" "}
                <Link
                  href="/services/battery-replacement"
                  className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                >
                  mobile battery replacement
                </Link>{" "}
                on the same call.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="jump-starter" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Zap aria-hidden="true" size={16} />
              Do it yourself
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A jump pack can cost less than one service call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              AutoZone&apos;s listed prices on {updatedLabel}. A $79.99 pack costs less than
              one $95 pay-per-use jump, but only works if it is charged and in the car when
              the battery dies. It will not fix a battery that is worn out.
            </p>
            <SourceTags keys={["autozoneJumpers", "allstate"]} />
          </div>
          <div className="overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Portable jump starter prices listed by AutoZone on {updatedLabel}
              </caption>
              <thead className="bg-black/40">
                <tr>
                  <th scope="col" className="p-4 text-xs font-black uppercase text-white/60">
                    Jump starter
                  </th>
                  <th scope="col" className="p-4 text-right text-xs font-black uppercase text-white/60">
                    Listed price
                  </th>
                </tr>
              </thead>
              <tbody>
                {jumpStarters.map((item) => (
                  <tr key={item.name} className="border-t border-white/10 bg-black/20">
                    <th scope="row" className="p-4 text-sm font-bold text-white">
                      {item.name}
                    </th>
                    <td className="p-4 text-right text-lg font-black text-safety-yellow">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="hybrid-ev" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Hybrids and EVs
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Still a 12-volt jump, with two rules.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              AAA says every EV and hybrid has a 12-volt battery that wakes up the car&apos;s
              computers. If it dies, the car will not start, even with a full main battery.
            </p>
            <SourceTags keys={["aaaEv"]} />
          </div>
          <div className="grid gap-4">
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">
                Jump it from a gas car or a jumper pack only
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                AAA: never jump-start an EV with another EV or a hybrid, which can damage the
                electrical systems of both cars, and never try to jump the main
                high-voltage battery.
              </p>
              <SourceTags keys={["aaaEv"]} />
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">
                Do not use the hybrid to rescue someone else
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Toyota&apos;s 2023 to 2026 Prius manual says its jump-starting terminal is for
                charging the Prius&apos;s 12-volt battery from another vehicle, and cannot be
                used to jump start another car. Check your own owner&apos;s manual, and say
                &ldquo;hybrid&rdquo; or &ldquo;EV&rdquo; when you call for help.
              </p>
              <SourceTags keys={["toyota"]} />
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
              AutoZone, AAA, and buying your own jump starter.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              The four questions Google shows next to this search in Orlando, answered from
              the sources on this page.
            </p>
          </div>
          <div className="grid gap-4">
            {paa.map((item) => (
              <div key={item.question} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.answer}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="on-the-call" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What RoadZone Plus does
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              24/7 jump starts in Orlando, price confirmed before dispatch.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              RoadZone Plus brings jump start help to wherever the car is parked in Orlando:
              homes, apartments, hotels, garages, parking lots, workplaces and roadside
              stops, 24 hours a day. There is no membership and no app; the exact price is
              confirmed on the call before the technician heads out. Have these four things
              ready.
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
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {callChecklist.map((item) => (
                <div key={item.label} className="card-solid p-6">
                  <p className="text-xs font-black uppercase text-route-green">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">
                Four questions to ask any company before it sends someone
              </h3>
              <ol className="mt-4 grid gap-3">
                {priceQuestions.map((question, index) => (
                  <li key={question} className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold leading-6 text-white">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
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
              More on dead batteries in Orlando.
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
                <p className="mt-3 text-sm leading-6 text-white/66">{link.text}</p>
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
            <h2 className="mt-5 text-4xl font-black text-white">Jump start cost questions</h2>
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
            <p className="mt-5 text-base leading-8 text-white/70">
              Each page below was read on {updatedLabel}. Prices come from State Farm,
              MarketWatch, Allstate, AAA, GEICO and AutoZone; free help from FDOT and the
              Central Florida Expressway Authority; battery and hybrid guidance from AAA,
              Interstate Batteries and Toyota. None are RoadZone Plus prices.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {Object.values(sources).map((source) => (
              <a
                key={source.href}
                href={source.href}
                className="group rounded-md bg-white/6 p-4 text-sm leading-6 text-white/70 transition hover:bg-white/10 hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-2 font-black text-white group-hover:text-red-200">
                  {source.name}
                  <ExternalLink aria-hidden="true" size={15} className="shrink-0" />
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
            <p className="text-sm font-black uppercase text-white/85">Car won&apos;t start?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus for a 24/7 jump start in Orlando.
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
