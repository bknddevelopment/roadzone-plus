import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  DollarSign,
  Info,
  PhoneCall,
  Route,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { areas, services, site } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  businessId,
  cityAreaSchema,
} from "@/lib/seo";

const title = "Roadside Assistance Cost Orlando";
const description =
  "See Orlando roadside assistance cost ranges for jumpstarts, lockouts, flat tire changes, fuel delivery, and wheel lock removal. Call (407) 222-2739.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/roadside-assistance-cost-orlando",
  },
  openGraph: {
    title,
    description,
    url: "/roadside-assistance-cost-orlando",
  },
  twitter: {
    title,
    description,
  },
};

// General Orlando-area market ranges drivers typically
// pay out of pocket (no membership) across providers — they are NOT RoadZone Plus
// quotes. Adjust the `range` values here to match your own market positioning.
const costAtAGlance = [
  {
    service: "Jumpstart",
    slug: "jumpstart",
    range: "$50–$120",
    note: "A single dead-battery boost on-site. Bigger trucks, vans, and RVs can run higher.",
  },
  {
    service: "Car lockout / unlock",
    slug: "auto-lockout",
    range: "$50–$150",
    note: "Damage-conscious entry. Late nights and luxury or newer vehicles tend to cost more.",
  },
  {
    service: "Flat tire change",
    slug: "tire-change",
    range: "$50–$120",
    note: "Installing your usable spare. No spare on hand usually changes the plan.",
  },
  {
    service: "Fuel delivery",
    slug: "fuel-delivery",
    range: "$60–$150 + fuel",
    note: "A service call to bring fuel to you, plus the cost of the gas itself.",
  },
  {
    service: "Wheel lock removal",
    slug: "wheel-lock-removal",
    range: "$50–$150+",
    note: "Depends heavily on the lock's condition and whether it is stripped.",
  },
  {
    service: "Battery replacement",
    slug: "battery-replacement",
    range: "$150–$350 installed",
    note: "The battery itself plus installation. Varies by battery type and vehicle.",
  },
];

const priceFactors = [
  {
    title: "Which service you need",
    text: "A jumpstart is usually the lowest-cost call. Battery replacement, wheel lock removal, and smart key work involve parts or extra equipment, so they sit higher.",
  },
  {
    title: "Time of day",
    text: "Late nights, weekends, and holidays can carry a higher rate with some providers because fewer technicians are on the road.",
  },
  {
    title: "Your vehicle",
    text: "Larger trucks, vans, RVs, and some newer or luxury vehicles need heavier-duty equipment or extra care, which can raise the price.",
  },
  {
    title: "Where you are",
    text: "Distance and access matter. A busy highway shoulder, a parking garage, or a spot far from the main roads can affect the final cost.",
  },
];

const localCostScenarios = [
  {
    title: "Hotel, resort, or theme-park parking lot",
    text: "The cheapest option is usually not a highway patrol program because you are off the expressway. Call direct roadside help when the car is in a Disney Springs, Universal, resort, apartment, or shopping-center lot.",
    href: "/theme-park-roadside-assistance",
    label: "Theme park roadside help",
  },
  {
    title: "I-4, 408, 417, 528, or Turnpike shoulder",
    text: "If you are on a limited-access highway during patrol hours, try *347 first. If you are outside coverage, after hours, or need a faster direct dispatch, call a roadside provider.",
    href: "/ran-out-of-gas-on-i-4-orlando",
    label: "I-4 fuel help",
  },
  {
    title: "Locked out of a rental car",
    text: "Call the rental company first if the vehicle is covered. If you are stranded at the vehicle and need damage-conscious entry, a direct lockout call is usually the fastest next step.",
    href: "/locked-keys-in-rental-car-orlando",
    label: "Rental lockout help",
  },
  {
    title: "Flat tire with a missing wheel lock key",
    text: "This can cost more than a normal tire change because the locked lug nut has to come off first. Stop forcing it and call for wheel lock removal before the tire work continues.",
    href: "/lost-wheel-lock-key-orlando",
    label: "Wheel lock removal",
  },
];

const chooseByProblem = [
  {
    problem: "Car clicks or will not start",
    service: "Jumpstart or battery replacement",
    href: "/services/jumpstart",
    priceSignal: "Usually lower if the battery only needs a boost; higher if it needs replacement.",
  },
  {
    problem: "Keys are locked inside",
    service: "Auto lockout",
    href: "/services/auto-lockout",
    priceSignal: "Vehicle type, time of day, and access complexity move the cost.",
  },
  {
    problem: "Flat tire with a usable spare",
    service: "Tire change",
    href: "/services/tire-change",
    priceSignal: "Normal spare installs are simpler; missing wheel locks or unsafe shoulders add complexity.",
  },
  {
    problem: "Out of gas",
    service: "Fuel delivery",
    href: "/services/fuel-delivery",
    priceSignal: "Expect a service call plus the fuel itself unless your coverage pays it.",
  },
  {
    problem: "Wheel lock key is gone",
    service: "Wheel lock removal",
    href: "/services/wheel-lock-removal",
    priceSignal: "Stripped or damaged locks can take more work than a clean removal.",
  },
  {
    problem: "Key fob or smart key issue",
    service: "Smart key programming",
    href: "/services/smart-key-programming",
    priceSignal: "Programming and vehicle compatibility matter more than distance alone.",
  },
];

const freeOptions = [
  {
    title: "Road Rangers on the expressways (free)",
    text: "Florida's Road Ranger program offers free help on many Central Florida expressways and interstates — dial *347 (*FHP). It is a great option on I-4, the Turnpike, and similar roads, but coverage is typically limited to roughly 6 AM–10 PM and to limited-access highways, not local streets, parking lots, hotels, or overnight calls.",
  },
  {
    title: "Insurance and warranty add-ons",
    text: "Many auto insurance policies and new-car warranties include a roadside assistance benefit. Check your policy or app before you pay out of pocket — you may already be covered for basics like a tow, jumpstart, or lockout.",
  },
  {
    title: "Memberships and credit cards",
    text: "Annual memberships (such as AAA) and some credit cards bundle roadside help for a yearly fee. They can pay off for frequent drivers, but you pay whether or not you use them that year.",
  },
];

const marketComparison = [
  {
    title: "Membership plans",
    bestFor: "Drivers who expect multiple roadside calls in a year.",
    watchOut:
      "Check tow-mile limits, included call counts, lockout reimbursement caps, and whether the service follows the driver or only the vehicle.",
  },
  {
    title: "Insurance, warranty, or credit-card coverage",
    bestFor: "Drivers who already have the benefit active before the breakdown.",
    watchOut:
      "Coverage can be slower to confirm at night, at theme-park lots, in rental cars, or when the app cannot verify your exact location.",
  },
  {
    title: "Fleet or national on-demand pricing",
    bestFor: "Business accounts that need standardized soft-service or tow pricing.",
    watchOut:
      "Public rate cards often separate soft services from tow hookup and per-mile charges, so the lowest number may not be the final cost.",
  },
  {
    title: "Direct Orlando roadside dispatch",
    bestFor: "Drivers who need help now without joining a plan.",
    watchOut:
      "Give the exact location, vehicle, and problem on the call so the provider can confirm the price before dispatch.",
  },
];

const sourceLinks = [
  {
    name: "Central Florida Expressway Authority Road Rangers roadside assistance",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "CFX lists *347 (*FHP), daily patrol, and 6 AM–10 PM Road Rangers hours.",
  },
  {
    name: "Florida Department of Transportation Road Ranger Service Patrol",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "FDOT describes limited no-cost highway assistance, including flat tires, jumpstarts, and emergency fuel.",
  },
  {
    name: "AAA roadside assistance membership benefits",
    href: "https://www.ace.aaa.com/automotive/roadside-assistance.html",
    note: "AAA shows the national membership model: towing limits, lockout help, fuel delivery, battery service, and service-call rules.",
  },
  {
    name: "Discount Tire fleet roadside assistance",
    href: "https://fleet.discounttire.com/s/roadside-assistance",
    note: "A public fleet example showing separate soft-service, tow, and per-mile pricing components.",
  },
];

const faqs = [
  {
    question: "How much does roadside assistance cost in Orlando?",
    answer:
      "Most one-time roadside calls in the Orlando area run about $50 to $150 when you pay out of pocket without a membership, depending on the service, your vehicle, the time of day, and your location. A simple jumpstart is usually toward the lower end, while battery replacement or wheel lock removal can be higher. RoadZone Plus confirms your exact price on the call before any work begins.",
  },
  {
    question: "Does roadside assistance cost more at Disney, Universal, or hotel lots?",
    answer:
      "It can, depending on access, parking-garage rules, resort security, traffic, and the exact service needed. The bigger issue is that free highway patrol programs usually do not cover private hotel, theme-park, apartment, or shopping-center parking lots. RoadZone Plus confirms the price before dispatch.",
  },
  {
    question: "What is the average cost for roadside assistance?",
    answer:
      "For a single pay-as-you-go service call, drivers commonly see somewhere in the $50 to $150 range. Annual memberships are priced differently — often around $60 to $165 per year — and only make sense if you expect to use them. The ranges on this page are general Orlando-area market figures to help you plan, not flat RoadZone Plus rates.",
  },
  {
    question: "Is there free roadside assistance in Florida?",
    answer:
      "Yes, in some situations. Florida's Road Ranger program provides free help on many Central Florida expressways and interstates — dial *347 (*FHP) — but it generally runs about 6 AM to 10 PM and only on limited-access highways, not local roads, parking lots, or hotels. Your insurance, vehicle warranty, or a membership may also cover roadside help. For every time those do not, RoadZone Plus is available 24/7 with no membership required.",
  },
  {
    question: "How much does it cost to unlock a car in Orlando?",
    answer:
      "A car lockout typically falls in the $50 to $150 range out of pocket, with late nights and newer or luxury vehicles tending toward the higher end. RoadZone Plus uses a damage-conscious approach and confirms the cost with you on the call before heading out.",
  },
  {
    question: "What is the cheapest way to get roadside help?",
    answer:
      "Check what you already have first: many insurance policies, new-car warranties, and credit cards include roadside assistance. On a Central Florida expressway during daytime hours, the free Road Ranger service (*347) may reach you. When those do not apply — overnight, on local roads, or in a parking lot — a direct pay-as-you-go call avoids an annual membership fee, and RoadZone Plus requires no membership to help.",
  },
  {
    question: "Do you charge a membership fee?",
    answer:
      "No. RoadZone Plus is call-first roadside help with no annual membership and no app account required. You call, the team confirms the service and the price, and a technician is dispatched.",
  },
  {
    question: "Why doesn't RoadZone Plus post one flat price online?",
    answer:
      "Roadside pricing depends on the exact service, your vehicle, your location, and the time of day, so a single posted price would be misleading. RoadZone Plus confirms a clear price with you on the call, before any work starts, so there are no surprises.",
  },
];

export default function RoadsideCostPage() {
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
    "@id": `${absoluteUrl("/roadside-assistance-cost-orlando")}#service`,
    name: "Roadside Assistance in Orlando",
    serviceType: "Roadside assistance",
    description:
      "24/7 pay-as-you-go roadside assistance in Orlando and Central Florida — jumpstarts, lockouts, flat tire changes, fuel delivery, wheel lock removal, and battery help, with no membership required.",
    url: absoluteUrl("/roadside-assistance-cost-orlando"),
    provider: {
      "@id": businessId,
    },
    areaServed: cityAreaSchema(areas),
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
    "@id": `${absoluteUrl("/roadside-assistance-cost-orlando")}#webpage`,
    url: absoluteUrl("/roadside-assistance-cost-orlando"),
    name: title,
    description,
    dateModified: "2026-06-18",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site.url}#website`,
      name: site.name,
      url: site.url,
    },
    about: {
      "@id": `${absoluteUrl("/roadside-assistance-cost-orlando")}#service`,
    },
    citation: sourceLinks.map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Roadside Assistance Cost in Orlando", path: "/roadside-assistance-cost-orlando" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema, webPageSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <DollarSign aria-hidden="true" size={16} />
              Orlando price guide
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              How Much Does Roadside Assistance Cost in Orlando?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Most one-time roadside calls in the Orlando area run about{" "}
              <span className="font-black text-white">$50–$150</span> when you pay out of
              pocket without a membership — the exact price depends on the service, your
              vehicle, the time of day, and where you are. Below are typical market ranges
              to help you plan, plus the free options worth checking first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">No membership needed</p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              RoadZone Plus confirms your exact price on the call, before any work starts —
              no annual fee, no app.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Available 24/7</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-2xl font-black text-white">
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wallet aria-hidden="true" size={16} />
              Cost at a glance
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Typical Orlando roadside prices by service.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              These are general Orlando-area market ranges for paying out of pocket without
              a membership — not RoadZone Plus quotes. Your real price is confirmed on the
              call before any work begins.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {costAtAGlance.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-white">{item.service}</h3>
                  <span className="shrink-0 rounded-md bg-road-red px-3 py-1 text-sm font-black text-white">
                    {item.range}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.note}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white group-hover:text-red-200">
                  <CheckCircle2 aria-hidden="true" size={16} />
                  See this service
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              What changes the price
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Why two roadside calls can cost different amounts.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Roadside pricing is rarely one flat number. A few things move it up or down,
              which is why RoadZone Plus confirms the cost with you on the call instead of
              posting a single rate.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {priceFactors.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <Route aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Orlando situations
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The cheapest option depends on where the car is stuck.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A highway shoulder, resort parking lot, apartment complex, and rental-car
              lockout are different calls. The right move is the one that actually covers
              your location and gets a technician to the vehicle.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {localCostScenarios.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white hover:text-red-200"
                >
                  <CheckCircle2 aria-hidden="true" size={16} />
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Free &amp; low-cost options
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Is there free roadside assistance in Florida?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Sometimes, yes — it is worth checking these before you pay out of pocket. When
              they do not cover your situation, a direct pay-as-you-go call is usually the
              fastest way back on the road.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {freeOptions.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border border-white/10 bg-black/24 p-5">
            <p className="text-sm font-black uppercase text-white/48">Public context checked</p>
            <div className="mt-4 grid gap-3">
              {sourceLinks.map((source) => (
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
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Pick the right service
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Match the problem to the roadside call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The fastest way to get an accurate price is to name the exact problem on the
              call. These are the common Orlando calls and what usually changes the cost.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            {chooseByProblem.map((item, index) => (
              <div
                key={item.problem}
                className={`grid gap-4 bg-black/20 p-5 md:grid-cols-[0.85fr_0.85fr_1.3fr] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Problem</p>
                  <p className="mt-2 font-black text-white">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Best service</p>
                  <Link href={item.href} className="mt-2 block font-black text-white hover:text-red-200">
                    {item.service}
                  </Link>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Cost signal</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.priceSignal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <Wallet aria-hidden="true" size={16} />
              Membership vs. pay-as-you-go
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Should you pay per call or join a plan?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              An annual membership can be worth it if you break down often or drive long
              distances regularly. If you just need help right now, paying for a single call
              avoids a yearly fee — and RoadZone Plus does not require a membership to come
              out.
            </p>
            <div className="mt-8">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Get a price on the call
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">Pay-as-you-go (RoadZone Plus)</h3>
              <p className="mt-3 text-sm leading-6 text-white/66">
                You pay only when you need help, with no annual fee. Best if you rarely
                break down or want help right now without signing up for anything. The price
                is confirmed before any work begins.
              </p>
            </div>
            <div className="card-solid p-6">
              <h3 className="text-xl font-black text-white">Annual membership</h3>
              <p className="mt-3 text-sm leading-6 text-white/66">
                A flat yearly fee (often around $60–$165) covers a set number of service
                calls. It can save money for frequent or long-distance drivers, but you pay
                whether or not you use it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              What the national cost pages miss
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Roadside cost depends on the coverage path, not just the service.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              National pages usually explain plans, benefits, or generic service ranges.
              In Orlando, the better question is what actually works where the vehicle is
              sitting: a highway shoulder, resort lot, rental-car pickup area, hotel garage,
              apartment complex, or toll-road exit.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            {marketComparison.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-4 bg-black/20 p-5 lg:grid-cols-[0.7fr_1fr_1.25fr] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Option</p>
                  <p className="mt-2 font-black text-white">{item.title}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Best for</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.bestFor}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Check before you wait</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.watchOut}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <CheckCircle2 aria-hidden="true" size={16} />
              The services we price
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Roadside services RoadZone Plus brings to you.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Tap any service for what it includes, when to call, and the cost factors that
              apply.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-md border border-white/10 bg-black/28 p-4 text-sm font-bold text-white/74 hover:border-road-red/60 hover:text-white"
              >
                {service.shortName}
              </Link>
            ))}
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
            <h2 className="mt-5 text-4xl font-black text-white">Roadside cost questions</h2>
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

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">No membership, no surprises</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Get a clear price on the call. Then get moving.
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
