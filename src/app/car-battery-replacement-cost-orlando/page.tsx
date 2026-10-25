import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  CheckCircle2,
  Clock3,
  DollarSign,
  Info,
  PhoneCall,
  Route,
  ShieldCheck,
  Store,
  ThermometerSun,
  Wallet,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/car-battery-replacement-cost-orlando";
const title = "How Much Does It Cost to Replace a Car Battery in Orlando?";
const description =
  "2026 car battery replacement costs: published prices by battery type, free-install stores vs dealer vs mobile, Florida's $1.50 battery fee, core charges, and what to do if the car is dead where it's parked.";
const updatedIso = "2026-10-25";
const updatedLabel = "October 25, 2026";
const heroImage = "/visuals/battery-cost/battery-in-engine-bay.webp";

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
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 1067,
        alt: "A red car battery with its positive terminal cover, sitting in a dark engine bay",
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every dollar figure on this page comes from a named, dated outside source
// (see `sources` below). None of them is a RoadZone Plus price. The owner has
// not given RoadZone a battery price or confirmed which batteries the truck
// carries, so the page never shows a RoadZone price or promises an install.
const sources = {
  autozone: {
    name: "AutoZone: How Much Is a Car Battery? Replacement Costs & More (October 12, 2025)",
    short: "AutoZone, Oct 2025",
    href: "https://www.autozone.com/diy/battery/how-much-is-a-car-battery",
    note: "Price ranges for standard lead-acid, AGM and premium batteries, battery life, what changes the price, and AutoZone's free installation and testing.",
  },
  walser: {
    name: "Walser Automotive Group: How Much Should a Car Battery Replacement Cost? (March 4, 2026)",
    short: "Walser, Mar 2026",
    href: "https://www.walser.com/blog/how-much-should-a-car-battery-replacement-cost/",
    note: "A dealer group's installed-price range, what it includes, and why batteries in the trunk or under a seat take more labor.",
  },
  kbb: {
    name: "Kelley Blue Book: Car Battery Replacement Prices & Cost Estimates (read October 25, 2026)",
    short: "Kelley Blue Book",
    href: "https://www.kbb.com/battery-replacement/",
    note: "A replacement battery price range, average battery life and what shortens it, and step-by-step jump-start and DIY replacement instructions.",
  },
  pepboys: {
    name: "Pep Boys: Car Batteries & Replacement (read October 25, 2026)",
    short: "Pep Boys",
    href: "https://www.pepboys.com/batteries/battery-replacement",
    note: "\"As low as\" prices and free-replacement warranty lengths for four Interstate battery lines, and a free test and installation coupon ending October 31, 2026.",
  },
  pepboysGuide: {
    name: "Pep Boys: Get the Right Car Battery with Our Guide (read October 25, 2026)",
    short: "Pep Boys guide",
    href: "https://www.pepboys.com/how-to-buy/car-battery",
    note: "Buying advice, including that higher temperatures are hard on car batteries.",
  },
  advance: {
    name: "Advance Auto Parts: Free Store Services (read October 25, 2026)",
    short: "Advance Auto Parts",
    href: "https://shop.advanceautoparts.com/o/storeservices",
    note: "Free battery installation and registration with purchase, free testing, and battery recycling, for most vehicles at most locations.",
  },
  oreilly: {
    name: "O'Reilly Auto Parts: Free Car Battery Testing and Installation (read October 25, 2026)",
    short: "O'Reilly Auto Parts",
    href: "https://www.oreillyauto.com/store-services/free-battery-testing",
    note: "Free testing, charging and installation, and which vehicles O'Reilly may not install on.",
  },
  walmart: {
    name: "Walmart: Battery Install (read October 25, 2026)",
    short: "Walmart",
    href: "https://www.walmart.com/cp/battery-install/6110703",
    note: "Free installation with Walmart battery purchases at Walmart Auto Care Centers.",
  },
  midas: {
    name: "Midas: Car Battery Replacement, Battery Testing, Starting & Charging (read October 25, 2026)",
    short: "Midas",
    href: "https://www.midas.com/auto-repair-services/car-battery-service",
    note: "How long a battery swap takes, what the service includes, and when a battery should be replaced.",
  },
  aaa: {
    name: "AAA The Auto Club Group: Car Battery Replacement & Install Service (read October 25, 2026)",
    short: "AAA (Auto Club Group)",
    href: "https://www.acg.aaa.com/automotive/battery-service.html",
    note: "AAA Mobile Battery Service for members of the club that serves Florida: member discount, warranty, and what the price leaves out.",
  },
  aaaRoadside: {
    name: "AAA The Auto Club Group: 24/7 Roadside Assistance (read October 25, 2026)",
    short: "AAA roadside",
    href: "https://www.acg.aaa.com/aaa-membership/roadside-assistance.html",
    note: "Free battery delivery and installation in most vehicles for members, and that the call counts as a roadside service call.",
  },
  airtasker: {
    name: "Airtasker: Car Battery Replacement Cost Guide (updated March 26, 2025)",
    short: "Airtasker, Mar 2025",
    href: "https://www.airtasker.com/us/costs/mobile-car-battery-replacement/car-battery-replacement-cost/",
    note: "A US cost guide with example prices for a few common vehicles.",
  },
  flStatute: {
    name: "Florida Statutes §403.7185, Lead-acid battery fees (2026 Florida Statutes)",
    short: "Fla. Stat. §403.7185",
    href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0403/Sections/0403.7185.html",
    note: "Florida's $1.50 fee on each new or remanufactured lead-acid battery sold at retail.",
  },
  jiffylube: {
    name: "Jiffy Lube: Car Battery Replacement Services (read October 25, 2026)",
    short: "Jiffy Lube",
    href: "https://www.jiffylube.com/auto-services/battery/battery-replacement",
    note: "What a battery replacement includes and how often batteries are usually replaced.",
  },
  interstate: {
    name: "Interstate Batteries: Refundable Core Deposit (read October 25, 2026)",
    short: "Interstate Batteries",
    href: "https://www.interstatebatteries.com/support/refundable-core-deposit",
    note: "How a battery core deposit is charged and refunded, and when it is not charged at installation.",
  },
  epa: {
    name: "US EPA: Battery Collection Action Case Study, Lead-Acid Battery Collection (August 7, 2025)",
    short: "US EPA, Aug 2025",
    href: "https://www.epa.gov/electronics-batteries-management/battery-collection-action-case-study-lead-acid-battery-collection",
    note: "What a battery core charge is, its usual size, and how it is refunded.",
  },
};

type SourceKey = keyof typeof sources;

const batteryTypeCosts: Array<{
  type: string;
  whatItIs: string;
  range: string;
  basis: string;
  cite: SourceKey[];
}> = [
  {
    type: "Standard (flooded lead-acid) battery",
    whatItIs: "The most common battery in everyday cars, SUVs and light trucks.",
    range: "$90–$225 for the battery",
    basis:
      "AutoZone puts most standard replacements at $90 to $200 and standard lead-acid batteries at $90 to $225. Kelley Blue Book gives a wider $45 to $250 for replacement batteries overall.",
    cite: ["autozone", "kbb"],
  },
  {
    type: "AGM battery",
    whatItIs:
      "Needed by many newer cars with start-stop or a lot of electronics. Check your owner's manual or the old battery's label.",
    range: "$230–$450 or more",
    basis:
      "AutoZone: expect $230 to $450 or more for an AGM battery. Walser says AGM batteries cost more but tend to last longer.",
    cite: ["autozone", "walser"],
  },
  {
    type: "Specialty or premium battery (including lithium-ion)",
    whatItIs: "Performance cars, some off-road vehicles and some hybrids.",
    range: "$300–$500 or more",
    basis: "AutoZone: $300 to $500 or even higher.",
    cite: ["autozone"],
  },
  {
    type: "Installed at a dealer or repair shop",
    whatItIs: "Battery plus labor, a battery or charging system test, and disposal of the old one.",
    range: "$120–$300 total",
    basis:
      "Walser, a dealer group, says most replacements cost $120 to $300, and that price often includes the battery, installation, a test and disposal.",
    cite: ["walser"],
  },
];

const pepBoysLines = [
  { line: "Interstate M", price: "$134.95", warranty: "18 months" },
  { line: "Interstate MT", price: "$224.95", warranty: "24 months" },
  { line: "Interstate MTP", price: "$224.95", warranty: "30 months" },
  { line: "Interstate MTX", price: "$259.95", warranty: "36 months" },
];

const whereToBuy: Array<{
  option: string;
  install: string;
  watchOut: string;
  cite: SourceKey[];
}> = [
  {
    option: "Parts store: AutoZone, Advance Auto Parts, O'Reilly",
    install: "Free installation when you buy the battery there, on most vehicles at most locations. Free battery testing too.",
    watchOut:
      "The car has to get there, or you bring the battery in. O'Reilly may not install batteries under rear seats or in cars that need constant voltage during the swap. Advance says it also registers a new battery for free when the car needs it.",
    cite: ["autozone", "advance", "oreilly"],
  },
  {
    option: "Walmart Auto Care Center",
    install: "Free installation with a Walmart battery purchase.",
    watchOut: "Only at stores with an Auto Care Center, and the car has to be driven there.",
    cite: ["walmart"],
  },
  {
    option: "Pep Boys",
    install:
      "Interstate batteries \"as low as\" $134.95 to $259.95 by line. A coupon makes the test and installation free through October 31, 2026 (up to a $19.99 value).",
    watchOut:
      "The coupon excludes high-voltage hybrids, EVs and hard-to-reach batteries. Check the warranty length of the line you buy.",
    cite: ["pepboys"],
  },
  {
    option: "Midas or another repair shop",
    install: "Midas says a swap takes 20 to 30 minutes on most vehicles and includes cleaning the tray and terminals and recycling the old battery.",
    watchOut: "Midas's battery page lists no price. Ask for the total before work starts.",
    cite: ["midas"],
  },
  {
    option: "Car dealer",
    install: "Walser's installed range is $120 to $300, usually with a test and disposal included.",
    watchOut: "Batteries in the trunk or under a seat take more labor, according to Walser. Ask what the quote includes.",
    cite: ["walser"],
  },
  {
    option: "AAA Mobile Battery Service (members)",
    install:
      "AAA's Auto Club Group, which serves Florida, comes to the car to test and replace the battery. Delivery and installation are free in most vehicles. The member pays for the AAA battery, at least $22 off retail, with a 3-year free replacement warranty.",
    watchOut:
      "Members only, select areas and hours. The call counts as one of your yearly roadside service calls, and AAA's battery prices exclude tax and an environmental fee.",
    cite: ["aaa", "aaaRoadside"],
  },
];

const costDrivers = [
  {
    title: "Battery type",
    text: "An AGM battery costs about twice a basic flooded one or more (AutoZone: $230–$450+ vs $90–$225). AutoZone says a car with start-stop or a lot of electronics probably needs an AGM.",
    cite: ["autozone"] as SourceKey[],
  },
  {
    title: "Size and power",
    text: "Every battery has a group size for its dimensions and terminal layout. Higher cold-cranking amps and reserve capacity raise the price.",
    cite: ["autozone"] as SourceKey[],
  },
  {
    title: "Where the battery sits",
    text: "Batteries in the trunk, under a seat or under panels take more labor. Some stores will not install them at all.",
    cite: ["walser", "oreilly"] as SourceKey[],
  },
  {
    title: "Registration and resets",
    text: "Some cars need the new battery registered, and some need a battery reset or constant voltage during the swap. Advance registers batteries for free with purchase.",
    cite: ["advance", "oreilly"] as SourceKey[],
  },
  {
    title: "Warranty length",
    text: "Longer warranties cost more up front. At Pep Boys, the 18-month line starts at $134.95 and the 36-month line at $259.95.",
    cite: ["autozone", "pepboys"] as SourceKey[],
  },
  {
    title: "Florida fee and core charge",
    text: "Florida adds $1.50 per new lead-acid battery, and many sellers add a refundable core charge (EPA: usually $5 to $20) until you return the old battery.",
    cite: ["flStatute", "epa"] as SourceKey[],
  },
];

const savingSteps = [
  "Get the battery tested before you buy. AutoZone, Advance, O'Reilly and Pep Boys all test batteries for free, and a car that dies once may only need a jump and a charge.",
  "If the car can be driven, buy where installation is free with purchase: most parts stores and Walmart Auto Care Centers.",
  "Bring the old battery back, or let the installer keep it, so you get the core charge refunded. Advance also gives up to a $10 gift card for recycling an old battery.",
  "Compare warranty length, not just price. A cheaper battery with a shorter free-replacement period can cost more over time.",
  "If you are a AAA member, check whether mobile battery service covers your area before you pay anyone else to come to the car.",
  "Ask for the full total on the phone: battery, Florida fee, core charge, tax, labor, and any trip or after-hours charge.",
];

const faqs = [
  {
    question: "How much does it cost to replace a car battery?",
    answer:
      "Most standard batteries cost $90 to $200, and AGM batteries $230 to $450 or more (AutoZone). Installed at a dealer or shop, Walser puts the usual total at $120 to $300. Parts stores and Walmart install for free on most vehicles when you buy the battery there. In Florida, add the $1.50 state lead-acid battery fee and any refundable core charge. These are published figures, not RoadZone Plus prices.",
  },
  {
    question: "Is $200 a lot for a car battery?",
    answer:
      "Not usually. $200 is at the top of AutoZone's $90 to $200 range for a standard battery, inside Walser's $120 to $300 range for an installed replacement, and below AutoZone's $230 starting price for an AGM battery. Whether it is fair depends on the battery type and how long the warranty is.",
  },
  {
    question: "Will AutoZone replace my battery?",
    answer:
      "AutoZone says it offers free battery installation in most vehicles at most locations when you buy the battery there, plus free battery testing and charging. Call your store first if the battery is hard to reach.",
  },
  {
    question: "Does Midas sell car batteries?",
    answer:
      "Yes. Midas says its technicians will help you choose a replacement battery, that a swap takes 20 to 30 minutes on most vehicles, and that the service includes cleaning the battery tray and terminals and recycling the old battery. Midas's battery page lists no price, so ask your location.",
  },
  {
    question: "What is the warranty on Pep Boys car batteries?",
    answer:
      "Pep Boys sells Interstate batteries with free-replacement warranties from 12 to 48 months depending on the model. Its current lines show 18 months (Interstate M), 24 months (MT), 30 months (MTP) and 36 months (MTX). Coverage starts on the purchase date and does not reset after a replacement.",
  },
  {
    question: "Is it cheaper to replace your own car battery?",
    answer:
      "Often only slightly. Most parts stores and Walmart install for free when you buy the battery there, so doing it yourself mainly saves a trip. Kelley Blue Book says a confident do-it-yourselfer can do it. O'Reilly notes some vehicles need a battery reset, and Advance notes some need the new battery registered.",
  },
  {
    question: "How long do car batteries typically last?",
    answer:
      "Kelley Blue Book says the average battery should last six years, but extreme temperatures, humidity, heavy accessory loads and frequent towing can cut that to 3 or 4 years. AutoZone, Jiffy Lube and Walser all give 3 to 5 years as the usual range.",
  },
  {
    question: "Is it OK to jump start a car?",
    answer:
      "Yes, when it is done in the right order. Kelley Blue Book's steps: both cars in park and off, red clip to the dead battery's positive post, other red clip to the good battery's positive post, black clip to the good battery's negative post, and the last black clip to clean, unpainted metal under the dead car's hood, not to the dead battery. Start the good car, wait about five minutes, then try the dead one.",
  },
  {
    question: "How much does mobile battery replacement cost?",
    answer:
      "AAA members in Florida get delivery and installation free in most vehicles and pay for the AAA battery. Outside AAA, published mobile prices are scarce. Airtasker's 2025 US guide lists examples of $165 to $200 for a 2019 Ford F-150 and $170 to $205 for a 2019 Toyota RAV4 or Honda CR-V. Ask any mobile provider for the full price before they send anyone.",
  },
  {
    question: "Can RoadZone Plus replace my battery where the car is parked?",
    answer:
      "Call (407) 222-2739 to ask. Whether we can handle your battery depends on the vehicle and the battery it needs, so have the year, make, model and engine ready. We will tell you on the call whether we can help and what it costs, or whether a jumpstart and a store is the better route.",
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

export default function CarBatteryReplacementCostPage() {
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    headline: title,
    description,
    datePublished: updatedIso,
    dateModified: updatedIso,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(heroImage),
      width: 1600,
      height: 1067,
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
    about: [
      { "@type": "Thing", name: "Car battery replacement cost" },
      { "@type": "Thing", name: "Car battery installation" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Car Battery Replacement Cost in Orlando", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, faqSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <DollarSign aria-hidden="true" size={16} />
              Orlando battery cost guide
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              How Much Does It Cost to Replace a Car Battery in Orlando?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Most drivers pay about{" "}
              <span className="font-black text-white">$90 to $200</span> for a standard
              battery and <span className="font-black text-white">$230 to $450</span> or
              more for an AGM battery. Installed at a dealer or shop, the usual total is{" "}
              <span className="font-black text-white">$120 to $300</span>. Parts stores
              install for free on most cars when you buy there, and Florida adds a{" "}
              <span className="font-black text-white">$1.50</span> fee on every new
              lead-acid battery. These figures come from AutoZone, Walser and Florida law,
              not RoadZone Plus prices.
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
              <Link href="/dead-battery-car-wont-start-orlando" className="btn btn-secondary">
                Car Won&apos;t Start?
              </Link>
            </div>
          </div>

          <aside className="card overflow-hidden bg-panel">
            <Image
              src={heroImage}
              alt="A red car battery with its positive terminal cover, sitting in a dark engine bay"
              width={1600}
              height={1067}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="text-sm font-black uppercase text-safety-yellow">
                Battery dead where the car is parked?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                Call to ask whether RoadZone Plus can handle your battery. Have the year,
                make, model and engine ready.
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

      <section id="cost-by-battery-type" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wallet aria-hidden="true" size={16} />
              Cost by battery type
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What a replacement car battery costs in 2026.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The battery your car needs decides most of the price. These are published
              national figures, not RoadZone Plus quotes, and they do not include the
              Florida fee or tax.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Car battery replacement cost by battery type, with published sources
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Battery or job
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Published range
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Where the number comes from
                  </th>
                </tr>
              </thead>
              <tbody>
                {batteryTypeCosts.map((row, index) => (
                  <tr
                    key={row.type}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[30%] md:p-5">
                      <span className="block font-black text-white">{row.type}</span>
                      <span className="mt-2 block text-sm font-normal leading-6 text-white/60">
                        {row.whatItIs}
                      </span>
                    </th>
                    <td className="mt-3 block align-top md:mt-0 md:table-cell md:w-[22%] md:p-5">
                      <span className="text-xs font-black uppercase text-white/42 md:hidden">
                        Published range:{" "}
                      </span>
                      <span className="font-black text-safety-yellow">{row.range}</span>
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      {row.basis}
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
                Real shelf prices: Pep Boys&apos; Interstate lines
              </h3>
              <p className="mt-3 text-base leading-8 text-white/66">
                Pep Boys publishes &quot;as low as&quot; prices for each battery line. The
                longer the free-replacement warranty, the higher the starting price. Your
                car&apos;s size and type can cost more than the starting price.
              </p>
              <div className="mt-5 overflow-hidden rounded-md border border-white/10">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Pep Boys Interstate battery starting prices and warranties
                  </caption>
                  <thead className="bg-black/40">
                    <tr>
                      <th scope="col" className="p-3 text-xs font-black uppercase text-white/48 sm:p-4">
                        Line
                      </th>
                      <th scope="col" className="p-3 text-xs font-black uppercase text-white/48 sm:p-4">
                        As low as
                      </th>
                      <th scope="col" className="p-3 text-xs font-black uppercase text-white/48 sm:p-4">
                        Free replacement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pepBoysLines.map((row) => (
                      <tr key={row.line} className="border-t border-white/10 bg-black/20">
                        <th scope="row" className="p-3 font-black text-white sm:p-4">
                          {row.line}
                        </th>
                        <td className="p-3 font-black text-safety-yellow sm:p-4">{row.price}</td>
                        <td className="p-3 text-white/72 sm:p-4">{row.warranty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <SourceTags keys={["pepboys"]} />
            </div>
            <figure>
              <Image
                src="/visuals/battery-cost/battery-under-open-hood.webp"
                alt="A mechanic leaning over an open car hood next to a black car battery with a red positive terminal cover"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                Most batteries sit under the hood, which keeps labor low. Batteries in the
                trunk or under a seat take longer (Walser).
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="where-to-buy" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Store aria-hidden="true" size={16} />
              Store vs dealer vs mobile
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Where to get a new battery put in, and what installation costs.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Labor is often free when you buy the battery at a store. What you pay for
              is the trip: someone has to get the car, or the battery, to the store.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            {whereToBuy.map((item, index) => (
              <div
                key={item.option}
                className={`grid gap-4 bg-black/20 p-5 md:grid-cols-[0.7fr_1.15fr_1.15fr] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Option</p>
                  <p className="mt-2 font-black text-white">{item.option}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">
                    Installation and price
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.install}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Watch out for</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.watchOut}</p>
                  <SourceTags keys={item.cite} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dead-where-parked" className="section bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Can you drive to the store?
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The cheapest route depends on whether the car will move.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-white/66">
              <p>
                <span className="font-black text-white">If the car still starts</span>, even
                slowly, drive it to a parts store or Walmart Auto Care Center while it
                runs. You pay for the battery, and installation is free on most cars.
              </p>
              <p>
                <span className="font-black text-white">If the car is dead</span> in a
                driveway, an apartment lot, a hotel or airport garage, or an office lot,
                you have four choices:
              </p>
              <ol className="grid gap-3">
                <li className="card-solid p-4 text-sm leading-6">
                  <span className="font-black text-white">Jump it, then drive to a store.</span>{" "}
                  Often the cheapest. The store can test the battery and charging system
                  before you buy.
                </li>
                <li className="card-solid p-4 text-sm leading-6">
                  <span className="font-black text-white">Take the battery to the store.</span>{" "}
                  O&apos;Reilly tells drivers whose car will not start to remove the battery
                  and bring it in for a free test and charge. Charging can take an hour or
                  more, and you need tools and a ride.
                </li>
                <li className="card-solid p-4 text-sm leading-6">
                  <span className="font-black text-white">Use AAA if you are a member.</span>{" "}
                  Mobile battery service is free to deliver and install in most vehicles;
                  you pay for the AAA battery. Select areas and hours only.
                </li>
                <li className="card-solid p-4 text-sm leading-6">
                  <span className="font-black text-white">Call a mobile roadside company.</span>{" "}
                  Ask on the phone whether they can bring the right battery for your car,
                  and get the full price first.
                </li>
              </ol>
              <SourceTags keys={["oreilly", "aaa", "aaaRoadside"]} />
            </div>
          </div>

          <figure>
            <Image
              src="/visuals/battery-cost/parking-garage-level.webp"
              alt="An empty level of a multistory parking garage with painted parking lines and low afternoon light"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
            <figcaption className="mt-3 text-sm leading-6 text-white/56">
              A dead battery on an upper garage level is where a store trip gets hard. Note
              the level, row and nearest stairwell before you call anyone.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="florida-fees" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Florida extras
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The two small charges on a Florida battery receipt.
            </h2>
          </div>
          <div className="grid gap-4">
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">$1.50 state lead-acid battery fee</h3>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Florida law charges a $1.50 fee for each new or remanufactured lead-acid
                battery sold at retail in the state, and the fee is itself subject to sales
                tax. The money goes to Florida&apos;s Water Quality Assurance Trust Fund.
                AAA, for example, notes that its battery prices do not include tax and an
                environmental fee.
              </p>
              <SourceTags keys={["flStatute", "aaa"]} />
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">Refundable core charge</h3>
              <p className="mt-3 text-sm leading-6 text-white/66">
                A core charge is a deposit on the old battery. The EPA says battery core
                charges are usually $5 to $20 and are refunded when you return the old
                battery. Interstate Batteries says stores do not charge the deposit when
                you hand over the old battery at installation, so it mostly matters when
                you buy a battery to put in yourself.
              </p>
              <SourceTags keys={["epa", "interstate"]} />
            </div>
          </div>
        </div>
      </section>

      <section id="jump-or-replace" className="section bg-asphalt">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <figure>
            <Image
              src="/visuals/battery-cost/jumper-cable-clamps.webp"
              alt="Two pairs of red and black jumper cable clamps resting on an open engine"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
          </figure>
          <div>
            <div className="eyebrow">
              <BatteryCharging aria-hidden="true" size={16} />
              Jump or replace?
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Not every dead battery needs to be replaced.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-white/66">
              <p>
                If you left the lights on, a jump and a long drive may be all it needs.
                Midas says a battery that takes a jump but has to be jumped again and
                again cannot hold a charge and should be replaced soon, and one that will
                not take a jump at all needs replacing now.
              </p>
              <p>
                Other signs the battery is near the end, from AutoZone: a slow crank, dim
                lights at idle, corrosion or a swollen case, or the battery light staying
                on. Get it tested before you buy: Midas says that if the battery tests
                healthy, the no-start has another cause to find.
              </p>
            </div>
            <SourceTags keys={["kbb", "midas", "autozone"]} />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/jumpstart" className="btn btn-primary">
                Jumpstart Service
              </Link>
              <Link href="/dead-battery-car-wont-start-orlando" className="btn btn-secondary">
                Dead Battery Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why-winter" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <ThermometerSun aria-hidden="true" size={16} />
              Florida heat, winter failures
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Why Orlando batteries give out, and why so many in winter.
            </h2>
          </div>
          <div className="grid gap-4 text-base leading-8 text-white/66">
            <p>
              Kelley Blue Book says an average battery should last six years, but extreme
              temperatures and humidity can cut that to 3 or 4. Pep Boys&apos; buying guide
              says higher temperatures are hard on car batteries and tells drivers in hot
              climates to buy one built for warm weather.
            </p>
            <p>
              Cold mornings then expose the weak ones. Walser explains that low
              temperatures slow the chemical reactions inside a battery, so batteries that
              are already weak often fail in winter.
            </p>
            <p>
              Orlando drivers feel it. Searches for &quot;car battery replacement cost&quot; in
              the Orlando area hit 720 in January 2026, against about 390 in a typical
              month over the last year (Google Ads search data through DataForSEO, pulled{" "}
              {updatedLabel}). If your battery is three or more years old and cranking
              slowly, a free test now is cheaper than a dead car in a parking lot later.
            </p>
            <SourceTags keys={["kbb", "pepboysGuide", "walser"]} />
          </div>
        </div>
      </section>

      <section id="cost-drivers" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <DollarSign aria-hidden="true" size={16} />
              What moves the price
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Six things that change your battery bill.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="save-money" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Keep the cost down
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Six checks before you pay for a new battery.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each one can save money or stop a surprise charge on the day.
            </p>
            <div className="mt-8">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call to ask about your battery
              </a>
            </div>
          </div>

          <ol className="grid gap-4">
            {savingSteps.map((step, index) => (
              <li key={step} className="card-solid flex gap-4 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-white/72">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="roadzone-battery-help" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              Where RoadZone Plus fits
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Stuck with a dead battery in Orlando? Call before you pay for a tow.
            </h2>
          </div>
          <div className="grid gap-4 text-base leading-8 text-white/66">
            <p>
              RoadZone Plus is a 24/7 roadside company based at {site.address.street} in
              Orlando. We do jumpstarts wherever the car is parked, with no membership
              needed.
            </p>
            <p>
              If the battery needs replacing, call to ask whether we can handle yours
              where the car is parked. It depends on the vehicle and the battery it takes,
              so have the year, make, model and engine ready. We will tell you on the call
              whether we can help and the price, or whether a jump and a store trip is
              the cheaper route.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/battery-replacement" className="btn btn-secondary">
                About battery help
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Car battery cost questions</h2>
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
              <CheckCircle2 aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Where the numbers come from.</h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each source below was read on {updatedLabel}. Prices and store offers
              change, and your own total depends on your car, its battery and who does the
              work. None of these are RoadZone Plus prices.
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
                <span className="block font-black text-white group-hover:text-red-200">
                  {source.name}
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
            <p className="text-sm font-black uppercase text-white/72">Dead battery in Orlando?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call to ask whether we can help with your battery.
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
