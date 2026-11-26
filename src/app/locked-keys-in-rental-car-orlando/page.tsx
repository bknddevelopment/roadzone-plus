import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  KeyRound,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  ThermometerSun,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  businessId,
} from "@/lib/seo";

const title = "Locked Keys in Rental Car Orlando: Who to Call";
const description =
  "Keys locked in a rental car in Orlando? What Hertz, Enterprise, Alamo, Avis, Dollar and Sixt say about lockout fees and lost keys, and who to call first.";

// Rental company terms below were read on the companies' own pages on this date.
// Quotations are word for word; a cell says "Not stated" where the page read is silent.
const updatedLabel = "November 26, 2026";
const updatedIso = "2026-11-26";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/locked-keys-in-rental-car-orlando",
  },
  openGraph: {
    title,
    description,
    url: "/locked-keys-in-rental-car-orlando",
  },
  twitter: {
    title,
    description,
  },
};

const rightNowSteps = [
  {
    title: "Make sure no child or pet is inside",
    text: "This is the only step that comes before everything else. If a child, an older adult, or a pet is locked in the car, call 911 immediately — do not wait for any roadside service. In Central Florida sun, the inside of a closed car can become deadly in minutes, long before a technician can reach you.",
  },
  {
    title: "Check the other doors, the trunk, and a spare fob",
    text: "Walk around and try every door and the trunk or hatch. On many rentals a second person is holding a spare fob, or a travel companion has one in a bag. If a working spare fob exists anywhere in your group, that is the fastest way back in.",
  },
  {
    title: "Look through the glass and confirm where the keys are",
    text: "Knowing whether the keys or fob are on the seat, in the ignition, in the trunk, or in a bag helps the technician arrive prepared. A push-to-start rental with the fob locked inside is handled differently than a traditional key turned in the ignition.",
  },
  {
    title: "Move somewhere safe and call for local help",
    text: "If you are at a resort exit, a busy hotel lot, or near an I-4 ramp, step away from moving traffic to a well-lit, visible spot. Then call RoadZone Plus with the rental's year, make, model, color, and your exact location so a local technician can be dispatched.",
  },
];

const sources = {
  hertzLocked: {
    label: "Hertz, \"What do I do if I have locked the keys in my rental car?\"",
    href: "https://www.hertz.com/supporthub/article/What-do-I-do-if-I-have-locked-the-keys-in-my-rental-car",
  },
  hertzLost: {
    label: "Hertz, \"What do I do if I lost the keys to my rental vehicle?\"",
    href: "https://www.hertz.com/supporthub/article/What-do-I-do-if-I-lost-the-keys-to-my-rental-vehicle",
  },
  hertzPremium: {
    label: "Hertz, Premium Emergency Roadside Service (United States)",
    href: "https://www.hertz.com/us/en/products-and-services/value-added-services/united-states/premium-emergency-roadside-assistance",
  },
  enterprise: {
    label: "Enterprise, Orlando International Airport location page (rental terms)",
    href: "https://www.enterprise.com/en/car-rental-locations/us/fl/orlando-international-airport-07v1.html",
  },
  national: {
    label: "National Car Rental, roadside assistance FAQ",
    href: "https://www.nationalcar.com/en/support/car-rental-faqs/insurance-and-coverage-products/roadside-assistance.html",
  },
  alamo: {
    label: "Alamo, roadside assistance FAQ",
    href: "https://www.alamo.com/en/customer-support/car-rental-faqs/insurance-coverage-options/roadside-assistance.html",
  },
  avis: {
    label: "Avis, Extended Roadside Assistance",
    href: "https://www.avis.com/en/products-and-services/protections/extended-roadside-assistance",
  },
  budget: {
    label: "Budget, Extended Roadside Assistance",
    href: "https://www.budget.com/en/offers/us-offers/roadside-assistance",
  },
  budgetPhones: {
    label: "Budget, worldwide telephone numbers",
    href: "https://www.budget.com/en/customer-care/worldwide-telephone-numbers",
  },
  dollar: {
    label: "Dollar, roadside assistance support page",
    href: "https://www.dollar.com/us/en/support/during-your-rental/roadside-assistance",
  },
  thrifty: {
    label: "Thrifty, roadside assistance support page",
    href: "https://www.thrifty.com/us/en/support/during-your-rental/roadside-assistance",
  },
  sixtKey: {
    label: "SIXT help center, \"What should I do if I've lost the key to my SIXT rental car?\"",
    href: "https://www.sixt.com/help-center/articles/what-should-i-do-if-ive-lost-the-key-to-my-sixt-rental-car/",
  },
  sixtCover: {
    label: "SIXT help center, \"What does my SIXT protection package actually cover?\"",
    href: "https://www.sixt.com/help-center/articles/what-does-my-sixt-protection-package-actually-cover/",
  },
  fox: {
    label: "Fox Rent A Car, Orlando airport rental policies",
    href: "https://www.foxrentacar.com/en/locations/united-states/florida/orlando-airport/rental-policies.html",
  },
} as const;

type SourceKey = keyof typeof sources;

type RentalCompany = {
  name: string;
  phone: string;
  phoneNote: string;
  addOn: string;
  withoutAddOn: string;
  keys: string;
  source: SourceKey;
};

const rentalCompanies: RentalCompany[] = [
  {
    name: "Hertz",
    phone: "800-654-5060",
    phoneNote: "Hertz Emergency Roadside Service",
    addOn:
      "Premium Emergency Roadside Service. With it, Hertz says you can request \"the unlock service at no charge.\" Its United States page lists Lock Out Service at \"Maximum $250.00 Per Rental.\"",
    withoutAddOn:
      "Hertz says \"there may be a fee of $98 or more for this service,\" and \"You may use your own auto club to unlock the vehicle.\"",
    keys: "With the add-on, Hertz offers \"the lost key service at no charge\"; its United States page lists Lost Key Service at \"Maximum $500.00 Per Rental.\"",
    source: "hertzLocked",
  },
  {
    name: "Enterprise",
    phone: "1-800-307-6666",
    phoneNote: "printed on Enterprise's Orlando airport page",
    addOn:
      "Roadside Assistance Protection (RAP). Its list includes \"lockout service (if the keys are locked inside the vehicle)\" and \"replacement of lost keys (including remote entry devices).\"",
    withoutAddOn:
      "\"roadside assistance will be available, but standard charges will apply.\" No price is printed on the page.",
    keys: "The page says \"In CA, KS, MO, NV and NY, keys are not covered by RAP\"; Florida is not on that list.",
    source: "enterprise",
  },
  {
    name: "National",
    phone: "1-800-367-6767",
    phoneNote: "printed on National's roadside FAQ",
    addOn:
      "Roadside Plus (RSP), which lists \"lockout service (if the keys are locked inside the vehicle)\" and replacement of lost keys.",
    withoutAddOn:
      "\"roadside assistance will be available, but standard charges will apply.\" No price is printed on the page.",
    keys: "Replacement of lost keys, including remote entry devices, is on the Roadside Plus list.",
    source: "national",
  },
  {
    name: "Alamo",
    phone: "1-800-803-4444",
    phoneNote: "printed on Alamo's roadside FAQ",
    addOn:
      "Roadside Plus (RSP), which \"provides 24/7 roadside assistance without additional charge\" and includes \"Lockout service (if keys are locked inside the Vehicle).\"",
    withoutAddOn: "Not stated on the page read.",
    keys: "Replacement of lost keys is on the Roadside Plus list, except for rentals that start in California, Kansas, Nevada and New York.",
    source: "alamo",
  },
  {
    name: "Avis",
    phone: "800-354-2847",
    phoneNote: "\"In US/Canada,\" on the Avis roadside page",
    addOn:
      "Extended Roadside Assistance: \"Lockout Service - Gain entry when keys are locked inside the vehicle. Get replacement keys or locksmith assistance.\"",
    withoutAddOn: "Not stated on the page read.",
    keys: "Replacement keys are part of the same Lockout Service line.",
    source: "avis",
  },
  {
    name: "Budget",
    phone: "800-354-2847",
    phoneNote: "\"Roadside Assistance,\" on Budget's telephone list",
    addOn:
      "Extended Roadside Assistance, at what Budget calls \"a reasonable additional daily charge,\" with \"Lockout Service\" to \"Gain entry when keys are locked inside the vehicle.\"",
    withoutAddOn: "Not stated on the page read; no daily price is printed.",
    keys: "Key Replacement is on the same list: replacement keys or locksmith assistance.",
    source: "budget",
  },
  {
    name: "Dollar",
    phone: "800-235-9393",
    phoneNote: "Dollar Emergency Roadside Service",
    addOn:
      "Premium Emergency Roadside Service, which covers \"Lost, damaged, or locked-in keys\"; with it, Dollar offers \"the unlock service at no charge.\"",
    withoutAddOn:
      "Dollar says \"there may be a maximum fee of $250 for this service,\" and \"Use your own auto club to unlock the vehicle.\"",
    keys: "Without the add-on: \"Use your own auto club to have new keys made for the vehicle,\" or call Dollar, with the same $250 maximum fee.",
    source: "dollar",
  },
  {
    name: "Thrifty",
    phone: "800-847-4389",
    phoneNote: "Thrifty Emergency Roadside Service, U.S. or Canada",
    addOn:
      "Premium Emergency Roadside Service, which covers \"Lost, damaged, or locked-in keys.\"",
    withoutAddOn:
      "For lost keys, Thrifty says \"there may be a maximum fee of $250 for this service\"; the page does not state a fee for keys locked inside.",
    keys: "\"Use your own auto club to have new keys made for the vehicle,\" or call 800-435-7650, the number Thrifty gives for lost keys.",
    source: "thrifty",
  },
  {
    name: "SIXT",
    phone: "+1 888 7498543",
    phoneNote: "SIXT Roadside Assistance, 24/7",
    addOn:
      "Roadside Assistance Protection, an optional add-on that covers \"Lost key replacement\" and \"Lockouts.\"",
    withoutAddOn:
      "\"we'll still arrange help for you — but the cost of these services may be billed to you.\"",
    keys: "SIXT asks renters not to \"Call an external locksmith without speaking to SIXT first\" and not to \"Order a replacement key through a third party.\"",
    source: "sixtKey",
  },
  {
    name: "Fox (Orlando airport)",
    phone: "On your agreement",
    phoneNote: "\"the emergency roadside service number located on your FOX Rental agreement holder\"",
    addOn:
      "Roadside Service Assistance (RSA) at \"USD/7.49 per rental day\": Fox will \"waive all or a portion of the cost of a roadside assistance service call up to the amount of USD/400.00 per incident,\" and lockout service is among the benefits.",
    withoutAddOn: "Not stated on the page read.",
    keys: "Lost keys are not on the RSA benefit list.",
    source: "fox",
  },
];

const whenToCall = [
  {
    title: "You bought the rental company's roadside cover",
    text: "Call the number in the table below or on your rental agreement. Hertz and Dollar say their Premium Emergency Roadside Service unlocks the car at no charge, and Enterprise, National, Alamo, Avis, Budget, Thrifty and SIXT list lockouts or locked-in keys in their add-ons.",
  },
  {
    title: "You did not buy it",
    text: "The rental company still sends help, but you pay for it: Hertz names \"a fee of $98 or more,\" Dollar \"a maximum fee of $250,\" and Enterprise and National \"standard charges.\" Hertz and Dollar say you may use your own auto club. Or call RoadZone Plus at (407) 222-2739: we confirm the price on the call, before anyone is sent.",
  },
  {
    title: "You rented from SIXT",
    text: "Speak to SIXT first. Its help center asks renters not to call an outside locksmith without speaking to SIXT, and says damage from forcing the car open is charged to the renter.",
  },
  {
    title: "The key is lost, not locked inside",
    text: "Call the rental company first. Its terms decide who may make a new key and what it costs; SIXT, for one, asks renters not to order a key through a third party. If your bags are locked in the car meanwhile, RoadZone Plus can open it.",
  },
];

const locationScenarios = [
  {
    title: "At your hotel or resort",
    text: "You are loading the car for a park day, the doors lock, and the fob is on the seat. Resort valet and the front desk usually cannot open a rental for you. RoadZone Plus comes to the hotel lot or garage so you are not stuck standing in the heat.",
  },
  {
    title: "In a theme-park or Disney Springs parking lot",
    text: "Massive lots and parking decks make a lockout stressful, especially when you are not sure of the row. Note the section and level, then call. We work the Lake Buena Vista and Disney Springs area regularly.",
  },
  {
    title: "At a gas station or store on US 192 or I-Drive",
    text: "A quick stop on the way back from the parks turns into a lockout. We bring damage-conscious entry to the visitor-heavy corridors along US 192, International Drive, and the I-4 access roads.",
  },
  {
    title: "At a resort exit or roadside ramp",
    text: "Locking yourself out near a busy resort exit is both inconvenient and unsafe. Move to a visible spot away from traffic, share the nearest landmark or exit, and we will route a technician to you.",
  },
];

const localScenarios = [
  {
    area: "Lake Buena Vista",
    href: "/areas/lake-buena-vista",
    text: "Disney Springs decks, Hotel Plaza Boulevard, and the resort lots right off I-4",
  },
  {
    area: "Kissimmee",
    href: "/areas/kissimmee",
    text: "the US 192 corridor, vacation-home driveways, and the hotels near Walt Disney World",
  },
  {
    area: "Celebration",
    href: "/areas/celebration",
    text: "the master-planned streets and resort-adjacent lots just off World Drive",
  },
  {
    area: "Orlando",
    href: "/areas/orlando",
    text: "International Drive, the airport routes, downtown lots, and I-4 and SR 528 access",
  },
];

const faqs = [
  {
    question: "I locked the keys in my rental car in Orlando. What should I do first?",
    answer:
      "Make sure no child, older adult, or pet is locked inside — if anyone is, call 911 immediately, because Florida heat inside a closed car turns dangerous fast. Then check every door, the trunk, and whether a travel companion has a spare fob. If you are still locked out, move to a safe, visible spot and call RoadZone Plus with the rental's year, make, model, color, and your exact location for damage-conscious local lockout help.",
  },
  {
    question: "Should I call the rental company's roadside number or a local service?",
    answer:
      "It depends on your rental agreement. If you bought the company's roadside add-on, call its roadside number first: Hertz and Dollar say their Premium Emergency Roadside Service unlocks the car at no charge. If you did not, the company still sends help but charges for it; Hertz says \"there may be a fee of $98 or more,\" and Hertz and Dollar say you may use your own auto club instead. RoadZone Plus is a direct local call with no membership, and we confirm the price on the call before anyone is sent. If you rented from SIXT, speak to SIXT first.",
  },
  {
    question: "Does Enterprise roadside assistance cover a lockout in Florida?",
    answer:
      "Only with the add-on. Enterprise's Roadside Assistance Protection lists \"lockout service (if the keys are locked inside the vehicle)\" and replacement of lost keys, and the keys exclusion it prints applies in California, Kansas, Missouri, Nevada and New York, not Florida. Without it, Enterprise says \"roadside assistance will be available, but standard charges will apply.\" Its roadside number is 1-800-307-6666. National and Alamo call their versions Roadside Plus.",
  },
  {
    question: "Can I call my own locksmith or roadside service for a rental car?",
    answer:
      "Check your agreement first. Hertz and Dollar both say \"You may use your own auto club to unlock the vehicle.\" SIXT asks renters not to \"Call an external locksmith without speaking to SIXT first.\" The Enterprise, National, Alamo, Avis and Budget pages read for this guide do not say either way. Whoever opens the car, keep the receipt and the technician's name.",
  },
  {
    question: "Will opening a rental car cause damage I have to pay for?",
    answer:
      "RoadZone Plus uses a damage-conscious entry approach meant to avoid harm to the door, window, and weather seals. Forcing entry yourself with a coat hanger or wedge is what most often damages modern rentals and electronic locks, and that is exactly what a careful roadside technician is trained to avoid.",
  },
  {
    question: "A child or pet is locked in the rental car. What do I do?",
    answer:
      "Call 911 first, every time. In Central Florida sun, the temperature inside a closed vehicle can rise to life-threatening levels within minutes, and emergency responders are equipped to act immediately. RoadZone Plus can still help, but a person or pet in a hot car is a 911 emergency before it is a roadside call.",
  },
  {
    question: "Can you unlock a push-to-start rental with the key fob locked inside?",
    answer:
      "In most cases, yes. A fob locked inside a push-to-start vehicle is a common lockout, and the entry approach is about getting the door open so you can reach the fob again. Tell us when you call that the rental is push-to-start and where the fob is, so the technician arrives prepared.",
  },
  {
    question: "Do I need to be on a membership or AAA to get help?",
    answer:
      "No. RoadZone Plus is direct, call-first roadside help with no membership and no app required. Visitors who do not have local coverage, and locals between renewals, can all call and get a technician dispatched.",
  },
  {
    question: "How fast can you reach me near Disney or Universal?",
    answer:
      "RoadZone Plus takes calls 24/7. We do not publish an arrival time, because it depends on where you are and on traffic. Our calls come from Kissimmee, Lake Buena Vista, the Disney area, Orlando International Airport and Universal, so give your exact hotel, lot section or exit and we will route a technician as directly as possible.",
  },
  {
    question: "What if I lost the rental key entirely instead of locking it inside?",
    answer:
      "Call the rental company first: a lost key is handled under its terms. With their roadside add-ons, Hertz offers \"the lost key service at no charge,\" and Enterprise, National and Alamo list replacement of lost keys. Without it, Dollar and Thrifty say \"there may be a maximum fee of $250 for this service,\" and both say you may use your own auto club to have new keys made. SIXT asks renters not to order a replacement key through a third party. If your bags are locked in the car while you sort out the key, RoadZone Plus can open it.",
  },
  {
    question: "How much does a rental car lockout cost in Orlando?",
    answer:
      "With the rental company's roadside add-on, Hertz and Dollar say the unlock is at no charge. Without it, Hertz says \"there may be a fee of $98 or more for this service,\" Dollar names \"a maximum fee of $250,\" and Enterprise and National say \"standard charges will apply\" without printing a price. RoadZone Plus does not publish a lockout price; we confirm yours on the call, before anyone is sent, with no membership.",
  },
];

const waitingTips = [
  "Never leave a child, older adult, or pet in a closed car in the heat — call 911 first if anyone is inside.",
  "Wait in a shaded, well-lit, visible spot, especially in a parking deck or near a busy resort exit.",
  "Have the rental's year, make, model, color, and your exact location ready so the technician can find you fast.",
  "Keep your phone charged and reachable so dispatch can confirm the lot section, hotel, or exit.",
];

const dispatchDetails = [
  {
    label: "Rental company and vehicle",
    detail:
      "Tell us whether it is Hertz, Enterprise, Avis, Budget, Turo, or another rental, then share the year, make, model, color, and license plate if you can see it.",
  },
  {
    label: "Proof the rental is yours",
    detail:
      "Have your driver's license and the rental agreement or its confirmation email ready. The technician may confirm the vehicle is yours before opening it, and for a rental the agreement is what shows it.",
  },
  {
    label: "Where the key or fob is",
    detail:
      "Say whether the key is on the seat, in the trunk, in a bag, in the ignition, or if the fob is locked inside a push-to-start car.",
  },
  {
    label: "Exact parking location",
    detail:
      "Use the hotel name, garage level, row, section, resort entrance, attraction, or nearby road. In theme-park lots, the section is often the most important detail.",
  },
  {
    label: "Emergency status",
    detail:
      "If anyone or any pet is inside the vehicle, call 911 first. If the car is blocking traffic or stuck near a ramp, tell dispatch before a technician is sent.",
  },
];

export default function LockedKeysRentalCarPage() {
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
    name: "What to do if you locked keys in a rental car in Orlando",
    description:
      "Immediate steps for a rental car lockout near Orlando hotels, theme parks, parking lots, and resort roads.",
    totalTime: "PT5M",
    step: rightNowSteps.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.text,
      url: `${absoluteUrl("/locked-keys-in-rental-car-orlando")}#step-${index + 1}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl("/locked-keys-in-rental-car-orlando")}#service`,
    name: "Rental Car Lockout Help in Orlando",
    serviceType: "Auto lockout assistance",
    description:
      "Damage-conscious 24/7 rental car lockout help for visitors and locals across Orlando and the Disney and Universal resort corridor when keys or a key fob are locked inside.",
    url: absoluteUrl("/locked-keys-in-rental-car-orlando"),
    provider: {
      "@id": businessId,
    },
    areaServed: localScenarios.map((item) => ({
      "@type": "City",
      name: `${item.area}, FL`,
    })),
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
    {
      name: "Locked Keys in Rental Car Orlando",
      path: "/locked-keys-in-rental-car-orlando",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, howToSchema, serviceSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <KeyRound aria-hidden="true" size={16} />
              Rental car lockout
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Locked Keys in Your Rental Car in Orlando?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Child or pet inside? Call 911. Otherwise, check your rental agreement for the
              roadside add-on. If you bought it, call the rental company&apos;s roadside
              number: Hertz and Dollar say their add-on unlocks the car at no charge. If
              you did not, the company still sends help but charges for it (Hertz says
              &quot;a fee of $98 or more&quot;), so you can call RoadZone Plus instead, 24
              hours a day, with no membership and the price confirmed on the call. Renting
              from SIXT, or lost the key? Call the rental company first.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/52">
              Rental company terms below are quoted from each company&apos;s own website,
              read <time dateTime={updatedIso}>{updatedLabel}</time>. They change, and your
              rental agreement is what applies to your car.
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

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">
              Child or pet inside? Call 911 first
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              In Florida heat, the inside of a closed car can reach deadly temperatures
              within minutes. A person or pet locked in is a 911 emergency before it is a
              roadside call.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">
                Locked out, no one inside
              </p>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-2xl font-black text-white"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="who-to-call" className="section border-b border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              Who to call
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Rental company first, or RoadZone Plus? It depends on your agreement.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each rental company in the table below sells a roadside add-on, and its
              terms decide who you call and what you pay. Find your case among these four.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whenToCall.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="shrink-0 text-route-green"
                    size={20}
                  />
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-2xl font-black text-white">
            What each rental company&apos;s own site says about lockouts and keys
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/60">
            Quoted from each company&apos;s website, read {updatedLabel}. Where a page does
            not say something, the table says so. None of the pages read prints a daily
            price for the add-on except Fox&apos;s Orlando airport page.
          </p>

          <div className="mt-6 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Rental companies&apos; roadside numbers and what each company&apos;s own
                site says about lockouts with and without its roadside add-on, and about
                lost keys
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Company and roadside number
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    With the roadside add-on
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Without it
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Lost keys
                  </th>
                </tr>
              </thead>
              <tbody>
                {rentalCompanies.map((company, index) => (
                  <tr
                    key={company.name}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[20%] md:p-5">
                      <a
                        href={sources[company.source].href}
                        className="inline-flex min-h-11 items-center text-lg font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200 md:min-h-0"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {company.name}
                      </a>
                      <span className="mt-1 block text-base font-black text-safety-yellow">
                        {company.phone}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-white/52">
                        {company.phoneNote}
                      </span>
                    </th>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:w-[30%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        With the roadside add-on
                      </span>
                      {company.addOn}
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:w-[24%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        Without it
                      </span>
                      {company.withoutAddOn}
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        Lost keys
                      </span>
                      {company.keys}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60">
            RoadZone Plus does not publish a lockout price. We confirm your price on the
            call, before a technician is sent, and no membership is required. For the
            lockout prices that other sources publish, see the{" "}
            <Link
              href="/car-lockout-cost-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              Orlando car lockout cost guide
            </Link>
            . Picking up or returning the car at the airport? The{" "}
            <Link
              href="/orlando-airport-roadside-assistance"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              Orlando airport roadside page
            </Link>{" "}
            sets out where each company hands out cars at MCO.
          </p>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              Do this right now
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What to do the moment you realize the keys are locked inside.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A rental lockout in Orlando is stressful, but the first few minutes matter.
              Work through these steps in order — the first one is a safety check that
              comes before everything else.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {rightNowSteps.map((item, index) => (
              <li
                key={item.title}
                id={`step-${index + 1}`}
                className="card-solid flex gap-4 p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-road-red text-base font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <ThermometerSun aria-hidden="true" size={16} />
              The Florida heat warning
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Why a child or pet in a hot car is a 911 call, not a roadside call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              This is the one part of a rental lockout that is not really about the car.
              Central Florida sun is relentless, and a closed vehicle heats up far faster
              than most visitors expect — the temperature inside can climb well past what
              is survivable within minutes, even with the windows cracked and even on a day
              that does not feel extreme outside. Children and pets are especially
              vulnerable.
            </p>
            <p className="mt-4 text-base leading-8 text-white/66">
              If a child, an older adult, or a pet is locked inside, call 911 first.
              Emergency responders are equipped to get the door open immediately and to
              treat anyone affected by the heat. No roadside technician — ours or anyone
              else&apos;s — should ever be the first call when a person or pet is trapped
              inside. RoadZone Plus can still help with the lockout, but human and animal
              safety always comes before the vehicle.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle
                  aria-hidden="true"
                  className="shrink-0 text-safety-yellow"
                  size={20}
                />
                <h3 className="text-xl font-black text-white">
                  Minutes matter in a closed car
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                A parked car in the Florida sun can become dangerously hot very quickly.
                Do not wait to see how a situation develops — if someone is inside and
                cannot get out, treat it as an emergency from the first second.
              </p>
            </div>
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle
                  aria-hidden="true"
                  className="shrink-0 text-safety-yellow"
                  size={20}
                />
                <h3 className="text-xl font-black text-white">
                  Cracked windows are not enough
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Leaving the windows slightly open does not keep a parked car safe in
                Central Florida heat. It is not a substitute for getting a trapped person
                or pet out right away.
              </p>
            </div>
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="shrink-0 text-route-green"
                  size={20}
                />
                <h3 className="text-xl font-black text-white">
                  Call 911, then call us if you still need entry
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Once everyone is safe, RoadZone Plus can handle the lockout itself. The
                order is what matters: people and pets first, the car second.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What to tell dispatch
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The details that speed up rental-car lockout help.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Rental lockouts get slower when the location or key situation is vague.
              Give RoadZone Plus the details below so the technician arrives prepared.
            </p>
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

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Where lockouts happen
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The Orlando spots where rental lockouts strike most.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A rental lockout rarely happens on the open road. It happens where you stop
              — and around the parks, those stops are crowded, hot, and easy to get
              turned around in. RoadZone Plus works all of them.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {locationScenarios.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="shrink-0 text-route-green"
                    size={20}
                  />
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Damage-conscious entry
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Why a rental especially deserves a careful unlock.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A rental is not your car, and any damage from a forced entry can land on
              your final bill or your deposit. That is exactly why a coat hanger,
              a slim-jim from a video, or a wedge bought at a gas station is the wrong
              move on a modern rental — newer vehicles have side-impact airbags in the
              doors, delicate weather seals, and electronic locks that are easy to harm.
            </p>
            <p className="mt-4 text-base leading-8 text-white/66">
              RoadZone Plus uses a damage-conscious approach built to get you back into
              the vehicle without harming the door, the glass, or the seals — the same
              careful method we bring to every{" "}
              <Link
                href="/services/auto-lockout"
                className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                auto lockout
              </Link>{" "}
              call. If the trouble turns out to be a dead or unresponsive key fob rather
              than a true lockout, our{" "}
              <Link
                href="/services/smart-key-programming"
                className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                smart key and key fob help
              </Link>{" "}
              covers that too, and we will tell you honestly when the rental company is
              the right call for a true key replacement.
            </p>
            <p className="mt-4 text-base leading-8 text-white/66">
              Keys are not the only rental trouble. If the rental has a flat, RoadZone Plus
              can put on its{" "}
              <Link
                href="/services/tire-change"
                className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                spare with a mobile tire change
              </Link>
              , and if it will not start, a{" "}
              <Link
                href="/services/jumpstart"
                className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                jump start
              </Link>{" "}
              can get it running, day or night.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/auto-lockout" className="btn btn-secondary">
                Auto Lockout Help
              </Link>
              <Link
                href="/theme-park-roadside-assistance"
                className="btn btn-secondary"
              >
                Theme Park Roadside
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="shrink-0 text-route-green"
                  size={20}
                />
                <h3 className="text-xl font-black text-white">
                  Protects your deposit and your bill
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                A careful unlock is about more than the door — avoiding damage to a rental
                keeps you from arguing over charges at the return counter later.
              </p>
            </div>
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="shrink-0 text-route-green"
                  size={20}
                />
                <h3 className="text-xl font-black text-white">
                  Built for push-to-start rentals
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                A fob locked inside a push-to-start vehicle is one of the most common
                rental lockouts. Tell us the rental is keyless when you call so the
                technician arrives ready.
              </p>
            </div>
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="shrink-0 text-route-green"
                  size={20}
                />
                <h3 className="text-xl font-black text-white">
                  One local call, no membership
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                You do not need to be a member or have local coverage. Visitors and locals
                alike can call RoadZone Plus directly and get a technician dispatched.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Resort corridor coverage
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Rental lockout help across the Disney and Universal corridor.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus serves the visitor-heavy areas where rental cars spend the
              most time parked — the resort lots, vacation-home driveways, and park-area
              corridors below.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {localScenarios.map((item) => (
              <Link
                key={item.area}
                href={item.href}
                className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <div className="flex items-center gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="shrink-0 text-route-green"
                    size={20}
                  />
                  <h3 className="text-xl font-black text-white">{item.area}, FL</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p>
                <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  View area
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              While you wait
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Staying safe and ready until the technician arrives.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Resort lots, parking decks, and I-4 ramps stay busy. A few simple steps keep
              you safe and help the technician reach you faster.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {waitingTips.map((tip) => (
              <div key={tip} className="flex gap-3 rounded-md bg-white/6 p-4">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-safety-yellow"
                  size={18}
                />
                <p className="text-sm leading-6 text-white/70">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <KeyRound aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Rental car lockout questions.
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
              <ShieldCheck aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-3xl font-black text-white">
              Where the rental company terms on this page come from.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/60">
              Each page below is the rental company&apos;s own, read {updatedLabel}. Terms,
              fees and numbers can change, and the agreement for your rental is what
              applies.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {Object.values(sources).map((item) => (
              <li key={item.href} className="rounded-md bg-white/6 p-4 text-sm leading-6">
                <a
                  href={item.href}
                  className="font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200"
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">
              Rental car lockout
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Locked out of your rental near the parks? Call RoadZone Plus.
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
