import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  ExternalLink,
  Gauge,
  Info,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Store,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/tire-change-cost-orlando";
const title = "How Much Does It Cost to Change a Tire in Orlando?";
const description =
  "A roadside spare swap runs about $50 to $100 in labor; Allstate lists $99. A new tire at a shop is the tire plus installation. AAA, insurance and Road Rangers compared.";
const updatedIso = "2026-11-19";
const updatedLabel = "November 19, 2026";
const heroImage = "/visuals/turnpike/spare-tire-fitted.webp";
const heroAlt =
  "A compact spare tire with a yellow 50 mph caution label fitted to a car's rear wheel";

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

// Every price, rule and fact on this page is quoted from a page in `sources`,
// read on the date above. RoadZone Plus publishes no tire change price, so none
// is given here. The RoadZone facts are limited to what its own tire change
// service page and mobile tire repair guide already say: it installs a usable
// spare 24/7 where the car is, removes wheel locks, does not patch or plug
// tires, sell tires, repair rims or tow, and confirms the exact price on the
// call before dispatch with no membership required. No arrival times,
// certifications, years in business or field experience are claimed.
const sources = {
  stateFarm: {
    name: "State Farm: How roadside assistance coverage may help save you money in the long run (State Farm Editorial Team, October 29, 2025; read November 19, 2026)",
    short: "State Farm",
    href: "https://www.statefarm.com/simple-insights/auto-and-vehicles/how-roadside-assistance-coverage-may-save-you-money",
    note: "Estimated out-of-pocket cost for a flat tire change (labor): $50 to $100. These costs can vary widely based on your location, the time of day and the service provider. The cost table links to MarketWatch. The average cost for roadside assistance from State Farm is $10 to $20 per year. When you use this coverage, a claim will likely be filed.",
  },
  marketWatch: {
    name: "MarketWatch: How Much Is Roadside Assistance? (Daniel Robinson, April 9, 2026, data updated July 2025; read November 19, 2026)",
    short: "MarketWatch",
    href: "https://www.marketwatch.com/insurance-services/auto-insurance/how-much-is-roadside-assistance/",
    note: "Mechanical labor can include battery jump-starts and installations, spare tire assistance and labor to fix minor mechanical or electrical issues; you may pay $50 to $100 for any of these, depending on your vehicle and the area where you broke down. Some companies count roadside service calls as auto claims, which means they can increase your rates in the future.",
  },
  allstate: {
    name: "Allstate Roadside: pay for today's service (estimated charges; read November 19, 2026)",
    short: "Allstate Roadside",
    href: "https://roadside.allstate.com/member/AMC/home",
    note: "You can either pay for just today's service, or call to ask about a membership. Listed: Tow $159, Lockout $95, Fuel Delivery $95, Tire Change $99, Jump Start $95. Costs may vary based on Service Provider market rates.",
  },
  aaaAcgRoadside: {
    name: "AAA The Auto Club Group: 24/7 AAA Roadside Assistance (read November 19, 2026)",
    short: "AAA Auto Club Group roadside",
    href: "https://www.acg.aaa.com/aaa-membership/roadside-assistance.html",
    note: "Flat Tire: Let us install your spare. And if it's unavailable or unsafe, get towed to an approved repair facility. Roadside benefits begin three days after payment of dues.",
  },
  aaaAcgPlans: {
    name: "AAA The Auto Club Group: Compare membership levels (read November 19, 2026)",
    short: "AAA Auto Club Group plans",
    href: "https://www.acg.aaa.com/aaa-membership/compare-membership-levels.html",
    note: "Annual pricing shown with no ZIP code entered: Classic $79, Plus $117, Premier $144; each plan lists Flat Tire service. Pricing may vary based on your home zip code. Roadside benefits begin three days after payment of dues.",
  },
  geico: {
    name: "GEICO: 24/7 Roadside Assistance, Emergency Roadside Service (read November 19, 2026)",
    short: "GEICO",
    href: "https://www.geico.com/auto-insurance/emergency-road-service/",
    note: "Emergency Roadside Service for as little as $14 a year per car. Tire changes: if you have a functioning spare tire, roadside assistance will install it for you. If you do not have a spare or require a new tire, the cost of the tire itself is not covered.",
  },
  fdot: {
    name: "Florida Department of Transportation: Road Rangers (read November 19, 2026)",
    short: "FDOT Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "The Road Ranger Service Patrol provides limited no-cost highway assistance; call *347. Road Rangers patrol congested areas and high incident locations of the freeway. Services can include: change flat tires.",
  },
  cfx: {
    name: "Central Florida Expressway Authority: Roadside Assistance, Dial *347 (read November 19, 2026)",
    short: "CFX",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Road Rangers provide free assistance along central Florida's toll roads, including State Roads 408, 417, 414, 429, 528 and 451. They help more than 4,000 motorists every month who need minor breakdown assistance, like a flat tire changed or gas. On patrol seven days a week, 365 days a year, 6:00 AM to 10:00 PM.",
  },
  turnpike: {
    name: "Florida's Turnpike: Road Rangers Safety Patrol (read November 19, 2026)",
    short: "Florida's Turnpike",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free roadway assistance and services include tire changes with vehicle spare; dial *347. Hours listed for the Florida's Turnpike mainline: 24 hours a day, 7 days a week.",
  },
  firestoneCost: {
    name: "Firestone Complete Auto Care: Understanding the cost of new tires (read November 19, 2026)",
    short: "Firestone tire prices",
    href: "https://www.firestonecompleteautocare.com/tires/tire-info/buying-considerations/cost-of-new-tires/",
    note: "Tire prices vary. More budget-friendly options can range from $50 to $150 each. Mid-range tires can be $100 to $300 each, and high-end tires can be anywhere from $300 to $1,000 each. Also factor in installation costs, old-tire disposal fees and any warranties.",
  },
  goodyear: {
    name: "Goodyear: Tire Installation Cost (read November 19, 2026)",
    short: "Goodyear",
    href: "https://www.goodyear.com/en-us/learn/tire-installation-cost",
    note: "When buying your tires via Goodyear.com, the tire installation cost for four tires will be an estimated $99.80. Cost includes mounting and balancing, and TPMS kit. Removing an old tire from the wheel is generally outside the capabilities of any home mechanic due to the specialized equipment required.",
  },
  costco: {
    name: "Costco: Tires (read November 19, 2026)",
    short: "Costco",
    href: "https://www.costco.com/auto-tires.html",
    note: "Includes installation at no charge. Installation only available on tires purchased from Costco Tire Center. Additional component costs may apply.",
  },
  discountTire: {
    name: "Discount Tire: Tire Installation Cost Breakdown (read November 19, 2026)",
    short: "Discount Tire",
    href: "https://www.discounttire.com/learn/tire-installation-cost",
    note: "Installation fees are noted during checkout online or in-store. They cover valve stems or TPMS kits, mounting, balancing and tire disposal fees. The page prints no dollar amount.",
  },
  jdPower: {
    name: "J.D. Power: How Much Does It Cost to Replace Tires? (Matt Yantakosol, June 26, 2024; read November 19, 2026)",
    short: "J.D. Power",
    href: "https://www.jdpower.com/cars/shopping-guides/how-much-does-it-cost-to-replace-tires",
    note: "Using Walmart as an example, the per tire costs include $11 for mounting, $15 for tire balancing, and $10 for road-hazard warranty. Walmart's own tire page showed no installation prices when it was read for this page.",
  },
  walmartPlus: {
    name: "Walmart: Walmart+ Benefits, Auto Care (read November 19, 2026)",
    short: "Walmart+",
    href: "https://www.walmart.com/help/article/walmart-benefits-auto-care/9b7deb0aa485427fa605fbcd05bd2e62",
    note: "Bring any tire with a puncture to the auto care center for repair. If we can repair the tire, we'll do it for free. Non-members pay $15 for this service.",
  },
  floridaTireFee: {
    name: "Florida Department of Revenue: Lead-Acid Battery Fee, New Tire Fee, and Rental Car Surcharge (Section 403.7185, Florida Statutes; read November 19, 2026)",
    short: "Florida Department of Revenue",
    href: "https://floridarevenue.com/taxes/taxesfees/Pages/solid_waste.aspx",
    note: "New Tire Fee: a $1.00 fee is due whether a new tire is sold separately or as a component part of a vehicle. The fee must be separately stated on the sales invoice and included in the total amount subject to sales tax.",
  },
  aaaSpare: {
    name: "AAA Newsroom: Spare Me! AAA Finds Nearly One-Third of New Vehicles are Missing a Spare Tire (October 18, 2017; read November 19, 2026)",
    short: "AAA Newsroom (2017)",
    href: "https://newsroom.aaa.com/2017/10/spare-aaa-finds-nearly-one-third-new-vehicles-missing-spare-tire/",
    note: "Nearly one-third (28 percent) of 2017 model year vehicles do not come with a spare tire as standard equipment. According to a previous AAA survey, nearly 20 percent (39 million) of U.S. drivers do not know how to change a flat tire.",
  },
  michelin: {
    name: "Michelin: Can I Drive On a Spare Tire? (read November 19, 2026)",
    short: "Michelin",
    href: "https://www.michelinman.com/auto/auto-tips-and-advice/tires-101/driving-on-a-spare-tire",
    note: "Do not exceed 50 mph on a compact spare, and avoid aggressive acceleration, hard braking, or sharp cornering. If you're on a full-size spare, normal speeds apply, but still get to a service center as soon as possible.",
  },
  firestoneSpare: {
    name: "Firestone Complete Auto Care: A Complete Guide to Spare Tires (read November 19, 2026)",
    short: "Firestone spare guide",
    href: "https://www.firestonecompleteautocare.com/tires/tire-info/maintenance/spare-tire-considerations/",
    note: "The general recommendation for a compact spare tire is to drive no more than 50 miles before you upgrade to a permanent full-size tire. Most spare tires have a maximum speed of 50 mph. Read the compact tire sidewall or your owner's manual to learn the maximum driving distance and the top speed.",
  },
};

type SourceKey = keyof typeof sources;

const jobs: Array<{
  title: string;
  who: string;
  text: string;
  cite: SourceKey[];
  link?: { href: string; label: string };
}> = [
  {
    title: "Swap the flat for your spare",
    who: "A roadside job: RoadZone Plus does this",
    text: "The flat comes off, your spare goes on, and the lug nuts are tightened. Published labor estimates run $50 to $100, and Allstate's pay-per-use roadside service lists a tire change at $99. You need a usable spare in the car.",
    cite: ["stateFarm", "allstate"],
    link: { href: "/services/tire-change", label: "Tire Change Service" },
  },
  {
    title: "Put a new tire on the wheel",
    who: "A tire shop job",
    text: "The old tire is pulled off the rim and a new one is mounted and balanced on a machine. You pay for the tire plus installation. Goodyear says removing a tire from the wheel is generally outside what a home mechanic can do, because of the equipment it takes.",
    cite: ["goodyear"],
  },
  {
    title: "Patch or plug a puncture",
    who: "A tire shop job",
    text: "A repairable puncture is fixed at a shop. Walmart's auto care centers charge non-members $15 to repair a punctured tire, and repair it free for Walmart+ members. RoadZone Plus does not patch or plug tires at the roadside.",
    cite: ["walmartPlus"],
    link: { href: "/mobile-tire-repair-orlando", label: "What a mobile fix can solve" },
  },
  {
    title: "No spare in the car",
    who: "A tow, an inflator kit or a mobile tire retailer",
    text: "AAA found that 28 percent of 2017 model-year vehicles came without a spare tire as standard equipment. With no usable spare, a tire change at the roadside is not possible; AAA's Florida club tows members to an approved repair facility. RoadZone Plus does not tow, but it will tell you plainly which option fits.",
    cite: ["aaaSpare", "aaaAcgRoadside"],
  },
];

const roadsideRows: Array<{
  source: SourceKey;
  what: string;
  figure: string;
  fine: string;
}> = [
  {
    source: "stateFarm",
    what: "Estimated out-of-pocket cost of a flat tire change (labor), no coverage",
    figure: "$50 to $100",
    fine: "Varies widely with location, time of day and provider. The table cites MarketWatch.",
  },
  {
    source: "marketWatch",
    what: "Roadside mechanical labor, including spare tire assistance",
    figure: "$50 to $100",
    fine: "Depends on the vehicle and the area where you broke down",
  },
  {
    source: "allstate",
    what: "Pay-per-use roadside service: one tire change, no membership",
    figure: "$99 estimated",
    fine: "May vary with service provider market rates",
  },
];

const shopRows: Array<{
  source: SourceKey;
  what: string;
  figure: string;
  fine: string;
}> = [
  {
    source: "firestoneCost",
    what: "The tire itself, per tire",
    figure: "$50 to $150 budget, $100 to $300 mid-range, $300 to $1,000 high-end",
    fine: "Installation, old-tire disposal and warranties are extra",
  },
  {
    source: "goodyear",
    what: "Installation of four tires bought on Goodyear.com",
    figure: "$99.80 estimated",
    fine: "Includes mounting, balancing and a TPMS kit",
  },
  {
    source: "jdPower",
    what: "Walmart installation, per tire, as J.D. Power reported in June 2024",
    figure: "$11 mounting, $15 balancing, $10 road-hazard warranty",
    fine: "A 2024 figure; Walmart's own page showed no installation prices on November 19, 2026",
  },
  {
    source: "costco",
    what: "Installation of tires bought from a Costco Tire Center",
    figure: "No charge",
    fine: "Additional component costs may apply",
  },
  {
    source: "discountTire",
    what: "Installation: valve stems or TPMS kits, mounting, balancing and tire disposal",
    figure: "Shown at checkout",
    fine: "No dollar amount printed on the page",
  },
  {
    source: "floridaTireFee",
    what: "Florida's fee on each new tire sold",
    figure: "$1.00 per tire",
    fine: "Stated separately on the invoice and included in the amount subject to sales tax",
  },
];

const coverage: Array<{ title: string; text: string; cite: SourceKey[] }> = [
  {
    title: "AAA: included, but not on the day you join",
    text: "All three plans on the comparison page of The Auto Club Group, the AAA club that serves Florida, list flat tire service: AAA installs your spare, and if it is unavailable or unsafe, tows you to an approved repair facility. Its page showed $79 for Classic, $117 for Plus and $144 for Premier with no ZIP code entered, and says prices may vary by home ZIP code. Roadside benefits begin three days after you pay.",
    cite: ["aaaAcgRoadside", "aaaAcgPlans"],
  },
  {
    title: "Your car insurance add-on",
    text: "GEICO's Emergency Roadside Service, from as little as $14 a year per car, installs a functioning spare; it does not pay for a new tire. State Farm puts its own roadside coverage at $10 to $20 a year on average and says a claim will likely be filed when you use it. MarketWatch notes some insurers count a roadside call as a claim, which can raise rates later, so ask before you use it.",
    cite: ["geico", "stateFarm", "marketWatch"],
  },
  {
    title: "Road Rangers on Orlando highways: free",
    text: "FDOT lists changing flat tires among the Road Rangers' no-cost services; call *347. On Central Florida's toll roads (SR 408, 417, 414, 429, 528 and 451), CFX's Road Rangers patrol 6 AM to 10 PM every day and help more than 4,000 drivers a month with problems like a flat tire. On the Turnpike mainline, the Turnpike's Road Rangers change tires with the vehicle's spare 24 hours a day.",
    cite: ["fdot", "cfx", "turnpike"],
  },
];

const callChecklist = [
  {
    label: "Where the car is",
    detail:
      "Street address, or the parking lot, garage level and row, hotel, apartment building, or highway exit and direction.",
  },
  {
    label: "Which tire, and what happened",
    detail:
      "Front or rear, driver or passenger side, and whether it went flat slowly, blew out or hit a curb.",
  },
  {
    label: "The spare and the wheel lock key",
    detail:
      "Whether there is a spare and whether it holds air. If one lug nut on each wheel looks different, the car has wheel locks: look for the key in the glovebox and trunk.",
  },
  {
    label: "The vehicle",
    detail: "Year, make, model and color, so the technician can find it.",
  },
];

const priceQuestions = [
  "What is the total price for the tire change, including the trip to me?",
  "Is it the same price at night, on a weekend or on a holiday?",
  "What happens, and what does it cost, if my spare is flat too?",
  "How do I pay, and do I get a receipt with the business name on it?",
];

const paa: Array<{ question: string; answer: string; cite: SourceKey[] }> = [
  {
    question: "Is $600 for 4 tires good?",
    answer:
      "That is $150 a tire. Firestone puts budget tires at $50 to $150 each and mid-range tires at $100 to $300 each, so $600 for four sits at the top of the budget range and the bottom of the mid-range. Before you compare quotes, check what the total includes: Discount Tire's installation fees cover valve stems or TPMS kits, mounting, balancing and tire disposal, and Florida adds a $1.00 fee on each new tire.",
    cite: ["firestoneCost", "discountTire", "floridaTireFee"],
  },
  {
    question: "Is it hard to replace a tire?",
    answer:
      "Swapping on a spare is a roadside job, but many drivers do not do it themselves: a AAA survey cited in 2017 found nearly 20 percent of U.S. drivers (39 million) did not know how to change a flat tire. Putting a new tire on the wheel is harder: Goodyear says taking the old tire off the rim is generally outside the capabilities of a home mechanic because of the equipment required.",
    cite: ["aaaSpare", "goodyear"],
  },
  {
    question: "How much does it cost to replace an entire tire?",
    answer:
      "Add the tire and its installation. Firestone puts budget tires at $50 to $150 each and high-end tires at up to $1,000 each. Goodyear estimates $99.80 to install four tires bought on Goodyear.com (mounting, balancing and a TPMS kit), and Costco installs tires bought from its Tire Centers at no charge. In Florida, each new tire also carries a $1.00 fee.",
    cite: ["firestoneCost", "goodyear", "costco", "floridaTireFee"],
  },
];

const relatedLinks = [
  {
    href: "/services/tire-change",
    title: "Tire Change Service",
    text: "RoadZone Plus's 24/7 spare tire installation, wherever the car is in Orlando.",
  },
  {
    href: "/mobile-tire-repair-orlando",
    title: "Mobile Tire Help in Orlando",
    text: "What a roadside tire call can and cannot fix, and when a tire shop is the right answer.",
  },
  {
    href: "/how-long-can-you-drive-on-a-spare-tire-orlando",
    title: "How Far on a Spare?",
    text: "Donut or full-size: how far and how fast to drive before the tire shop.",
  },
  {
    href: "/lost-wheel-lock-key-orlando",
    title: "Lost Wheel Lock Key",
    text: "When a locking lug nut stops the tire change before it starts.",
  },
  {
    href: "/road-rangers-orlando",
    title: "Road Rangers in Orlando",
    text: "Where the free highway patrol works, its hours, and how to reach it with *347.",
  },
  {
    href: "/roadside-assistance-cost-orlando",
    title: "Roadside Assistance Cost",
    text: "Jumps, lockouts, tires and fuel: how one-time calls compare with memberships.",
  },
];

const faqs = [
  {
    question: "How much does it cost to change a tire in Orlando?",
    answer:
      "None of the sources read for this page publishes an Orlando-only price. For a roadside swap to your spare, State Farm's cost table and MarketWatch put the labor at $50 to $100, and Allstate's pay-per-use roadside service lists a tire change at $99. A new tire at a shop is a different bill: the tire plus installation. RoadZone Plus does not publish a tire change price; it confirms your exact price on the call before dispatch, with no membership required.",
  },
  {
    question: "How much is a roadside tire change without AAA or a membership?",
    answer:
      "Expect roughly $50 to $100 in labor, according to State Farm's and MarketWatch's estimates; Allstate lists $99 for a pay-per-use tire change. Joining AAA on the spot does not cover today's flat: The Auto Club Group says roadside benefits begin three days after you pay. Whoever you call, ask for the total, including the trip, before anyone is sent.",
  },
  {
    question: "Does car insurance pay for a flat tire change?",
    answer:
      "Only if your policy has roadside coverage. GEICO's Emergency Roadside Service, from as little as $14 a year per car, installs a functioning spare but does not pay for a new tire. State Farm says its roadside coverage averages $10 to $20 a year and that a claim will likely be filed when you use it. Ask your insurer how a tire change is recorded.",
  },
  {
    question: "Do Florida Road Rangers change flat tires for free?",
    answer:
      "Yes, on the roads they patrol. FDOT lists changing flat tires among the Road Rangers' no-cost services; dial *347. CFX's Road Rangers cover Central Florida's toll roads, including SR 408, 417, 414, 429, 528 and 451, from 6 AM to 10 PM every day, and the Turnpike's Road Rangers change tires with the vehicle's spare on the Turnpike mainline 24 hours a day. Their pages describe highway and toll-road patrols; a flat in a driveway, parking lot or garage is outside the roads they list.",
  },
  {
    question: "How much does a tire shop charge to put a new tire on?",
    answer:
      "It depends on the shop. Goodyear estimates $99.80 to install four tires bought on Goodyear.com, including mounting, balancing and a TPMS kit. Costco installs tires bought from its Tire Centers at no charge, though additional component costs may apply. Discount Tire shows its installation fee at checkout. J.D. Power reported Walmart's per-tire charges in June 2024 as $11 for mounting, $15 for balancing and $10 for a road-hazard warranty.",
  },
  {
    question: "What if my car has no spare tire?",
    answer:
      "A roadside tire change needs a usable spare. AAA found that 28 percent of 2017 model-year vehicles came without one as standard equipment. Without a spare, the options are the inflator kit if the car has one, a tow to a tire shop, or a mobile tire retailer. RoadZone Plus does not tow or sell tires, but call anyway and it will tell you plainly which option fits where you are.",
  },
  {
    question: "How fast and how far can I drive on a spare tire?",
    answer:
      "On a compact spare, Michelin says not to exceed 50 mph, and Firestone's general recommendation is no more than 50 miles before you replace it with a full-size tire. Both point you to the spare's sidewall or the owner's manual for your car's limits. A full-size spare can be driven at normal speeds, Michelin says, but still get to a service center soon.",
  },
  {
    question: "How do I get a tire change from RoadZone Plus?",
    answer:
      "Call (407) 222-2739, any hour. Say where the car is, which tire is flat, whether you have a usable spare and a wheel lock key, and the year, make and model. RoadZone Plus installs your spare at homes, apartments, hotels, workplaces, stores, parking lots and roadside stops in Orlando, removes wheel locks if the key is missing, and confirms your exact price on the call before dispatch, with no membership required.",
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

function PriceTable({
  caption,
  rows,
}: {
  caption: string;
  rows: Array<{ source: SourceKey; what: string; figure: string; fine: string }>;
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-md border border-white/10">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
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
          {rows.map((row, index) => (
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
              <td className="mt-2 block align-top text-sm leading-6 text-white/70 md:mt-0 md:table-cell md:w-[32%] md:p-5">
                <span className="block text-xs font-black uppercase text-white/55 md:hidden">
                  What the price covers
                </span>
                {row.what}
              </td>
              <td className="mt-3 block align-top md:mt-0 md:table-cell md:w-[24%] md:p-5">
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
  );
}

export default function TireChangeCostPage() {
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
      { "@type": "Thing", name: "Tire change cost" },
      { "@type": "Thing", name: "Flat tire" },
      { "@type": "Thing", name: "Spare tire" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Tire Change Cost", path },
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
              Flat tire in Orlando
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              How much does it cost to change a tire?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              It depends on the job. Swapping a flat for your own spare at the roadside
              costs about $50 to $100 in labor out of pocket: State Farm&apos;s cost table
              lists that range, citing MarketWatch, and Allstate&apos;s pay-per-use roadside
              service lists a tire change at $99. A new tire at a shop is the tire plus
              installation, which Goodyear estimates at $99.80 for four tires bought on
              Goodyear.com. The swap can cost nothing extra with AAA, a roadside add-on on
              your car insurance, or a free Road Ranger on a covered Orlando highway.
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
              <Link href="/services/tire-change" className="btn btn-secondary">
                Tire Change Service
              </Link>
            </div>
          </div>

          <aside className="card overflow-hidden bg-panel" aria-labelledby="hero-call-heading">
            <Image
              src={heroImage}
              alt={heroAlt}
              width={1600}
              height={1067}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p
                id="hero-call-heading"
                className="text-sm font-black uppercase text-safety-yellow"
              >
                Flat tire right now?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                RoadZone Plus installs your usable spare 24/7 where the car is: a driveway,
                parking lot, workplace, hotel or roadside stop. No membership. Your exact
                price is confirmed on the call, before dispatch.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 flex min-h-11 items-center gap-3 text-2xl font-black text-white"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
              <Link
                href="/services/tire-change"
                className="mt-3 inline-flex min-h-11 items-center text-sm font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                How the tire change service works
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section id="which-job" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              Four different jobs
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              &ldquo;Change a tire&rdquo; can mean four things, and each costs something different.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Many of the price answers that come up for this search are about buying new tires. If you are stuck with
              a flat and have a spare, you need the first one.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {jobs.map((job) => (
              <div key={job.title} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{job.who}</p>
                <h3 className="mt-3 text-xl font-black text-white">{job.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{job.text}</p>
                <SourceTags keys={job.cite} />
                {job.link ? (
                  <Link
                    href={job.link.href}
                    className="mt-3 inline-flex min-h-11 items-center text-sm font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
                  >
                    {job.link.label}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadside-price" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <BadgeDollarSign aria-hidden="true" size={16} />
              Swapping on your spare
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Three published prices for a roadside tire change.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Each figure is quoted from its source; the date each page was read is in the
              source list at the bottom. State Farm&apos;s range comes from MarketWatch, so
              the two are one estimate, not two. None of the sources read for this page
              publishes an Orlando-only price.
            </p>
          </div>

          <PriceTable
            caption="Published roadside tire change prices by source: what each price covers, the price, and the fine print"
            rows={roadsideRows}
          />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66">
            RoadZone Plus does not publish a tire change price. It confirms your exact price
            on the call, before dispatch, and no membership is required. State Farm says
            prices vary with location, time of day and provider, so ask any company for the
            total, including the trip, before you agree.
          </p>
          <SourceTags keys={["stateFarm"]} />
        </div>
      </section>

      <section id="shop-price" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Store aria-hidden="true" size={16} />
              Putting a new tire on
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              At a tire shop, you pay for the tire and the installation.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              RoadZone Plus does not sell or mount tires. These are the published prices
              from tire makers and shops for the trip to the shop after the spare is on.
            </p>
          </div>

          <PriceTable
            caption="Published tire and installation prices by source: what each price covers, the price, and the fine print"
            rows={shopRows}
          />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66">
            Comparing quotes? Ask whether mounting, balancing, valve stems or TPMS service,
            disposal of the old tire and Florida&apos;s $1.00 new tire fee are in the total.
          </p>
          <SourceTags keys={["discountTire", "floridaTireFee"]} />
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
              Three ways the roadside swap may already be paid for.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              One pay-per-use tire change at Allstate&apos;s $99 estimate costs more than a
              year of AAA Classic at The Auto Club Group&apos;s $79, but only if you joined at
              least three days before the flat. None of these pays for a new tire. Check
              them before you pay anyone.
            </p>
            <SourceTags keys={["allstate", "aaaAcgPlans", "geico"]} />
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {coverage.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-center">
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
                Florida&apos;s Turnpike, photographed in January 2022. On the Turnpike
                mainline, the Turnpike&apos;s Road Rangers change tires with the vehicle&apos;s
                spare 24 hours a day.
              </figcaption>
            </figure>
            <p className="text-sm leading-7 text-white/66">
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
        </div>
      </section>

      <section id="spare-limits" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Gauge aria-hidden="true" size={16} />
              After the swap
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A donut spare gets you to the shop, not through the week.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              The cheapest tire change still ends at a tire shop if the flat tire cannot be
              saved. Plan the trip around the spare&apos;s limits.
            </p>
            <Link
              href="/how-long-can-you-drive-on-a-spare-tire-orlando"
              className="mt-5 inline-flex min-h-11 items-center text-sm font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              How far you can drive on a spare in Orlando
            </Link>
            <figure className="mt-6">
              <Image
                src="/visuals/spare-tire/donut-spare-on-sedan.webp"
                alt="An orange sedan parked at a curb with a small blue temporary donut spare fitted on its front wheel"
                width={1560}
                height={1170}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/60">
                A temporary donut spare on a sedan&apos;s front wheel: a way to reach the
                tire shop, not a replacement tire.
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4">
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">50 mph on a compact spare</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Michelin says not to exceed 50 mph on a compact spare and to avoid hard
                acceleration, hard braking and sharp turns. Firestone says most spare tires
                have a maximum speed of 50 mph, so it is best to avoid freeways and roads with
                higher speed limits.
              </p>
              <SourceTags keys={["michelin", "firestoneSpare"]} />
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">About 50 miles, then a real tire</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Firestone&apos;s general recommendation is to drive no more than 50 miles on a
                compact spare before you replace it with a permanent full-size tire. Your
                spare&apos;s sidewall or the owner&apos;s manual gives your car&apos;s own maximum
                distance and top speed.
              </p>
              <SourceTags keys={["firestoneSpare"]} />
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">A full-size spare is different</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Michelin says normal speeds apply on a full-size spare, but you should still
                get to a service center as soon as possible.
              </p>
              <SourceTags keys={["michelin"]} />
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Questions people ask Google
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four tires for $600, doing it yourself, and replacing a whole tire.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Google shows four questions next to this search in Orlando. Three are answered
              here from the sources on this page; the fourth asks about Canadian Tire, a
              chain in Canada, and is left out.
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

      <section id="on-the-call" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What RoadZone Plus does
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              24/7 spare tire installation in Orlando, price confirmed before dispatch.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              RoadZone Plus comes to the car at homes, apartments, hotels, workplaces,
              stores, parking lots and roadside stops, 24 hours a day. The technician
              loosens the lug nuts, swaps the flat for your spare, tightens everything and
              explains how far and how fast you can drive on the spare. A missing wheel lock
              key can be handled on the same call with wheel lock removal. RoadZone Plus
              does not patch or plug tires, sell tires, repair rims or tow. There is no
              membership; the exact price is confirmed on the call before dispatch. Have
              these four things ready.
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

      <section id="related" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Related help
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">More on flat tires in Orlando.</h2>
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

      <section id="faq" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Tire change cost questions</h2>
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

      <section id="sources" className="section bg-road-black">
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
              Each page below was read on {updatedLabel}. Roadside prices come from State
              Farm, MarketWatch and Allstate; coverage from AAA, GEICO and State Farm; free
              help from FDOT, the Central Florida Expressway Authority and Florida&apos;s
              Turnpike; tire and installation prices from Firestone, Goodyear, J.D. Power,
              Costco, Discount Tire and Walmart; the new tire fee from the Florida
              Department of Revenue; spare tire facts from AAA, Michelin and Firestone. None
              are RoadZone Plus prices.
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
            <p className="text-sm font-black uppercase text-white/85">Flat tire?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus to have your spare installed, 24/7 in Orlando.
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
