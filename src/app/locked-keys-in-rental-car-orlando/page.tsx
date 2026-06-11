import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
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

const title =
  "Locked Keys in Your Rental Car in Orlando? Fast, Damage-Conscious Help Near the Parks";
const description =
  "Locked keys in a rental car in Orlando? Skip the slow rental roadside line. RoadZone Plus brings 24/7 damage-conscious lockout help to hotels, parking lots, and resort exits near Disney and Universal. Call (407) 222-2739.";

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

const whyRentalLineSlow = [
  {
    title: "It routes through a national call center, not a local truck",
    text: "When you call the number on the rental contract or the key tag, you usually reach a national support line that then arranges a third-party vendor. That hand-off adds time before anyone is actually driving toward you in Orlando.",
  },
  {
    title: "It often carries its own service charge",
    text: "Rental-company roadside and lockout assistance is frequently a paid add-on. Out of pocket, a rental lockout call routed this way commonly runs around $100 or more before any waiting even begins. RoadZone Plus is a direct, call-first local service with no membership — we confirm your exact price on the call instead of routing you through a national queue.",
  },
  {
    title: "The vendor may be coming from far away",
    text: "A dispatched vendor could be anywhere in the metro and may not know the resort corridor. RoadZone Plus is based in Orlando and works the Disney and Universal corridor every day, so we know the hotel lots, the Disney Springs decks, and the US 192 and I-4 access points.",
  },
  {
    title: "You still lose vacation hours either way",
    text: "Every minute spent on hold or waiting for a far-away vendor is a minute off a park day or a missed dinner reservation. Calling a local roadside service directly skips the middle layer.",
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
      "The rental company's number usually routes through a national call center that then arranges a third-party vendor, which adds time, and that assistance is often a paid add-on that can run around $100 or more out of pocket. A local, call-first service like RoadZone Plus dispatches an Orlando-area technician directly with no membership, and confirms your price on the call.",
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
      "RoadZone Plus dispatches 24/7 across the resort corridor as soon as you call. We do not publish a guaranteed arrival time, but we are based in Orlando and work the Lake Buena Vista, Kissimmee, and Celebration areas daily, so share your exact hotel, lot section, or exit and we will route a technician as directly as possible.",
  },
  {
    question: "What if I lost the rental key entirely instead of locking it inside?",
    answer:
      "Losing a rental key is different from a lockout. The rental company controls replacement keys for their fleet, so you will need to contact them for a true replacement. If you simply cannot get into the car, RoadZone Plus can help with the lockout; for key fob or smart key issues, see our smart key programming help, and we will tell you honestly when the rental company is the right next call.",
  },
  {
    question: "How much does a rental car lockout cost in Orlando?",
    answer:
      "A car lockout is typically a mid-range roadside cost, with late nights and newer or luxury rentals tending toward the higher end. RoadZone Plus uses a damage-conscious approach, requires no membership, and confirms your exact price on the call before the technician heads out, rather than quoting a flat rate online.",
  },
];

const waitingTips = [
  "Never leave a child, older adult, or pet in a closed car in the heat — call 911 first if anyone is inside.",
  "Wait in a shaded, well-lit, visible spot, especially in a parking deck or near a busy resort exit.",
  "Have the rental's year, make, model, color, and your exact location ready so the technician can find you fast.",
  "Keep your phone charged and reachable so dispatch can confirm the lot section, hotel, or exit.",
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
          __html: JSON.stringify([faqSchema, serviceSchema, breadcrumbs]),
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
              Locked keys in a rental car in Orlando can stall a whole vacation day —
              standing in the heat at a hotel lot, a theme-park parking deck, or a resort
              exit while the rental company&apos;s national roadside line keeps you on hold.
              RoadZone Plus brings 24/7, damage-conscious lockout help directly to you
              across the Disney and Universal corridor, with no membership and one local
              call to get a technician dispatched.
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
              <li key={item.title} className="card-solid flex gap-4 p-6">
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

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              The rental roadside line
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Why the number on your rental contract is the slow option.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The instinct is to call the rental company first — but for a simple
              lockout, that number is usually the long way around. Here is what tends to
              happen, and why visitors near the parks often end up waiting far longer than
              they need to.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyRentalLineSlow.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <Clock3
                    aria-hidden="true"
                    className="shrink-0 text-safety-yellow"
                    size={20}
                  />
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/52">
            The dollar figure above reflects the kind of out-of-pocket charge drivers
            commonly see on rental-company and national roadside lockout assistance — it
            is a general market reference, not a RoadZone Plus quote. We confirm your
            exact price with you on the call. For a plain-English breakdown of what local
            roadside services typically cost in Orlando, see our{" "}
            <Link
              href="/roadside-assistance-cost-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              Orlando roadside assistance cost guide
            </Link>
            .
          </p>
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
