import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Fuel,
  Info,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  businessId,
} from "@/lib/seo";

const title = "Ran Out of Gas on I-4? What to Do (and Who to Call) in Orlando";
const description =
  "Ran out of gas on I-4 in Orlando? Here is exactly what to do right now to stay safe, your options on I-4, SR 408, and SR 528 — Road Rangers vs. 911 vs. local fuel delivery — and who to call. RoadZone Plus brings fuel to you 24/7: (407) 222-2739.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ran-out-of-gas-on-i-4-orlando",
  },
  openGraph: {
    title,
    description,
    url: "/ran-out-of-gas-on-i-4-orlando",
  },
  twitter: {
    title,
    description,
  },
};

const immediateSteps = [
  {
    title: "Steer to the right shoulder and get fully off the travel lanes",
    text: "As the engine loses power you keep steering and light braking for a few seconds. Signal right, coast onto the right shoulder, and get the whole car past the white line — not half in the lane. On I-4 through downtown Orlando the left shoulder is narrow and dangerous, so commit right early while you still have momentum.",
  },
  {
    title: "Turn on your hazard lights immediately",
    text: "Hit the hazards the moment you feel the car stumble, before you even finish coasting. At 60-plus mph, traffic behind you needs every second of warning. Leave them flashing the entire time you are stopped.",
  },
  {
    title: "Stay buckled and stay inside the vehicle",
    text: "On a live interstate shoulder the safest place is usually inside the car with your seatbelt on. Standing outside next to fast-moving I-4 traffic is how shoulder incidents happen. Only exit if there is a fire or you can reach a wide, protected area well away from traffic.",
  },
  {
    title: "Pin down your exact location",
    text: "Look for the nearest mile marker (the small green posts on the right), the next exit number, or an overhead sign. 'I-4 eastbound just past the Princeton Street exit' gets help to you far faster than 'somewhere on I-4.' If you have it, glance at your phone's location too.",
  },
  {
    title: "Call for help and describe where you are",
    text: "Call RoadZone Plus for fuel brought to you, dial *347 (*FHP) for Florida's Road Rangers on the expressway, or call 911 if you are in an unsafe spot or there is any danger. Share the road, direction of travel, nearest exit or mile marker, and your vehicle's year, make, model, and color.",
  },
];

const corridorNotes = [
  {
    road: "Interstate 4 (I-4)",
    text: "Central Florida's busiest and most stressful corridor, made worse for years by the I-4 Ultimate construction. Shoulders narrow sharply through downtown Orlando, and stop-and-go traffic burns fuel faster than the open road. If you stall here, commit to the right shoulder early and share the nearest exit — Princeton Street, Ivanhoe, South Street, Anderson Street, or the Kirkman, Conroy, or Sand Lake interchanges.",
  },
  {
    road: "SR 408 (Spessard L. Holland East-West Expressway)",
    text: "The toll road that cuts straight across Orlando. It moves fast with limited shoulder room in places, so an empty tank leaves you exposed. Note the nearest exit — Orange Blossom Trail, Mills, Bumby, Conway, or Semoran — and stay buckled until help arrives.",
  },
  {
    road: "SR 528 (Martin B. Andersen Beachline Expressway)",
    text: "The route most drivers take toward Orlando International Airport (MCO) and the coast. Long stretches between exits and airport-bound traffic mean running dry here can leave you a while from the next station. Mark the nearest exit or mile marker before you call.",
  },
];

const optionRows = [
  {
    option: "Local 24/7 fuel delivery (RoadZone Plus)",
    bestFor: "Getting fuel brought directly to your car — on the interstate, a surface street, a parking lot, a hotel, or your driveway, day or night.",
    notes:
      "One call, no membership, and no app. The technician brings fuel to your exact location so you can start the engine and reach a station. Works everywhere the free highway programs do not: local roads, lots, and overnight.",
  },
  {
    option: "FDOT Road Rangers (*347 / *FHP)",
    bestFor: "Free, quick help while you are stranded on a Central Florida interstate or expressway during daytime hours.",
    notes:
      "Florida's Road Ranger service patrols limited-access highways like I-4 and the expressways and can provide a small amount of emergency fuel at no charge. Coverage is generally limited to roughly 6 AM–10 PM and to the highways themselves — not local streets, parking lots, hotels, or overnight calls.",
  },
  {
    option: "911 / Florida Highway Patrol",
    bestFor: "Any situation where you feel unsafe, are blocking traffic, can't reach a safe shoulder, or there is a crash, injury, or fire.",
    notes:
      "If your stalled position is dangerous, treat it as an emergency and call 911 first. Dispatchers can send a trooper to protect the scene. 911 is about safety, not refueling, so still arrange fuel delivery to actually get moving again.",
  },
  {
    option: "Walk to a gas station yourself",
    bestFor: "Almost never on I-4, SR 408, or SR 528.",
    notes:
      "Walking along a live interstate shoulder is one of the most dangerous things you can do. On a limited-access highway there is often no safe pedestrian path and no nearby exit. Stay with your vehicle and let fuel come to you instead.",
  },
];

const whyItHappens = [
  {
    title: "I-4 traffic burns fuel faster than you expect",
    text: "Stop-and-go crawls through the construction zones and rush-hour backups keep the engine running while you barely move. A tank that looked fine at home can hit empty in heavy I-4 traffic, especially on a hot day with the A/C working hard.",
  },
  {
    title: "Visitors and unfamiliar routes",
    text: "Orlando draws millions of out-of-town drivers heading to the parks, the airport, or the coast. An unfamiliar interchange, a missed exit, or a 'I'll fill up at the next one' that never comes leaves rental cars and road-trippers stranded on the interstate.",
  },
  {
    title: "Faulty or optimistic fuel gauges",
    text: "Older cars, rentals you have never driven, and vehicles with a sticky float can read higher than reality. The low-fuel light is a warning, not a promise of another 40 miles — on a long stretch of SR 528 that margin disappears fast.",
  },
  {
    title: "Long gaps between exits",
    text: "Parts of SR 528 toward MCO and the Beachline run a long way between services. If the light comes on at the wrong moment, the next station may be farther than the fuel you have left.",
  },
];

const afterFuelTips = [
  "Drive straight to the nearest gas station and fill the tank completely — a small amount of delivered fuel is meant to get you moving, not to top you off.",
  "If the car cranked but struggled to start, let it run a moment before pulling back into traffic so fuel reaches the engine.",
  "Merge back onto I-4 or the expressway only with a clear gap and your blinker on; shoulders give you very little room to build speed.",
  "If your low-fuel light has been coming on sooner than the miles suggest, have the gauge or fuel sender checked so this does not repeat.",
];

const dispatchDetails = [
  {
    label: "Road and direction",
    detail:
      "Say the exact road and direction first: I-4 eastbound, I-4 westbound, SR 408 eastbound, or SR 528 toward the airport. Direction matters more than the nearest city.",
  },
  {
    label: "Nearest marker",
    detail:
      "Use the closest mile marker, exit, overhead sign, toll plaza, hotel, ramp, or cross street. One precise landmark is better than a long explanation.",
  },
  {
    label: "Vehicle details",
    detail:
      "Share the year, make, model, color, and whether the vehicle takes gas or diesel, especially for rentals, trucks, vans, or work vehicles.",
  },
  {
    label: "Safety status",
    detail:
      "Tell dispatch if you are fully on the shoulder, partially blocking traffic, stuck in a gore area, or unable to safely exit the lane. Unsafe positions should go to 911 first.",
  },
];

const faqs = [
  {
    question: "Who do I call when I run out of gas on I-4 in Orlando?",
    answer:
      "For fuel brought directly to your vehicle anywhere in the Orlando area — including I-4, SR 408, SR 528, surface streets, parking lots, and hotels, 24 hours a day — call RoadZone Plus at (407) 222-2739. On a Central Florida interstate or expressway during daytime hours, you can also dial *347 (*FHP) for Florida's free Road Rangers. If your stalled position is unsafe or there is any danger, call 911 first.",
  },
  {
    question: "What should I do right now if I just ran out of gas on the highway?",
    answer:
      "Steer onto the right shoulder and get the whole car off the travel lanes, turn on your hazard lights, and stay buckled inside the vehicle. Note the nearest mile marker or exit, then call for fuel delivery or, if you feel unsafe, call 911. Do not try to walk along an interstate shoulder to a gas station.",
  },
  {
    question: "Is it safe to walk to a gas station from I-4?",
    answer:
      "No. Walking along a live interstate or expressway shoulder is extremely dangerous, and on limited-access roads like I-4, SR 408, and SR 528 there is rarely a safe pedestrian path or a nearby exit. Stay with your vehicle with the hazards on and have fuel delivered to you instead.",
  },
  {
    question: "Do the Road Rangers bring gas for free on I-4?",
    answer:
      "Florida's Road Ranger program patrols limited-access highways and can provide a small amount of emergency fuel at no charge to get you to the next station. Coverage is generally limited to roughly 6 AM–10 PM and to the highways themselves — not local streets, parking lots, hotels, or overnight calls. Outside those hours or off the highway, a 24/7 service like RoadZone Plus brings fuel directly to you. Dial *347 (*FHP) to reach the Road Rangers.",
  },
  {
    question: "How long does it take to get fuel delivered on I-4?",
    answer:
      "It depends on your exact location, the time of day, and traffic on the corridor at that moment. The fastest way to a quick response is a clear location — the road, your direction of travel, and the nearest exit or mile marker — and your vehicle details. RoadZone Plus confirms the situation on the call and dispatches a technician with fuel to your spot.",
  },
  {
    question: "How much does emergency fuel delivery cost in Orlando?",
    answer:
      "Fuel delivery usually includes a service charge to bring the fuel to you, plus the cost of the gas itself, and the total depends on your location and how much fuel you need. RoadZone Plus confirms the price with you on the call before dispatching, and no membership is required. You can also see general Orlando-area roadside price ranges on our cost guide.",
  },
  {
    question: "My car stalled but I am not sure it is out of gas — can you still help?",
    answer:
      "Yes. If you ran below the low-fuel warning and the engine sputtered before dying, an empty tank is the likely cause. Describe what happened when you call — whether the low-fuel light was on and how the car behaved — and the team can prepare for fuel delivery or point you to the right service if it turns out to be the battery or something else.",
  },
  {
    question: "Can you bring gas to a rental car?",
    answer:
      "Yes. Rental cars run out of fuel all the time, especially for visitors on unfamiliar Orlando routes. Have the year, make, model, and color ready, confirm whether it takes gasoline or diesel, and share your exact location so a technician arrives prepared.",
  },
];

export default function RanOutOfGasI4Page() {
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
    name: "What to do when you run out of gas on I-4 in Orlando",
    description:
      "Step-by-step safety actions to take if your vehicle runs out of fuel on I-4, SR 408, or SR 528 in the Orlando area.",
    totalTime: "PT5M",
    step: immediateSteps.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.text,
      url: `${absoluteUrl("/ran-out-of-gas-on-i-4-orlando")}#step-${index + 1}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl("/ran-out-of-gas-on-i-4-orlando")}#service`,
    name: "Emergency Fuel Delivery on I-4 and Orlando Highways",
    serviceType: "Emergency fuel delivery",
    description:
      "24/7 emergency fuel delivery for drivers who run out of gas on I-4, SR 408, SR 528, and across the Orlando and Central Florida area.",
    url: absoluteUrl("/ran-out-of-gas-on-i-4-orlando"),
    provider: {
      "@id": businessId,
    },
    areaServed: {
      "@type": "City",
      name: "Orlando, FL",
    },
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
    { name: "Ran Out of Gas on I-4 in Orlando", path: "/ran-out-of-gas-on-i-4-orlando" },
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
              <Fuel aria-hidden="true" size={16} />
              Out of gas on I-4
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Ran Out of Gas on I-4? What to Do in Orlando
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Running out of gas on I-4 is stressful, fast-moving, and genuinely
              dangerous on a busy Central Florida interstate. This guide walks you
              through exactly what to do right now to stay safe on the shoulder, your
              real options on I-4, SR 408, and SR 528 — Road Rangers, 911, and local
              fuel delivery — and who to call to actually get moving again. RoadZone
              Plus brings fuel directly to your vehicle, 24/7, no membership needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/fuel-delivery" className="btn btn-secondary">
                Fuel Delivery Service
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">
              Stalled right now?
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              Get fully onto the right shoulder, turn on your hazards, stay buckled
              inside the car, and call. We bring fuel to your exact location.
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
              <AlertTriangle aria-hidden="true" size={16} />
              Do this first
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What to do the second you run out of gas on I-4.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              When the engine starts to lose power on the interstate, you have a few
              seconds to act. Work through these steps in order. The goal is simple: get
              off the live lanes, make yourself visible, and get help to your exact spot
              without ever walking into traffic.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {immediateSteps.map((item, index) => (
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

          <div className="mt-6 flex gap-3 rounded-md border border-safety-yellow/30 bg-safety-yellow/10 p-5">
            <ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-safety-yellow" size={20} />
            <p className="text-sm leading-6 text-white/78">
              <span className="font-black text-white">The one rule that matters most:</span>{" "}
              never walk along an I-4, SR 408, or SR 528 shoulder to find a gas station.
              Stay with your vehicle, keep the hazards on, and let fuel come to you. If
              your position feels unsafe at any point, call 911.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Know your road
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              I-4, SR 408, and SR 528 each strand you differently.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Central Florida&apos;s three big corridors are not the same when you run
              dry. Knowing the exits and where the shoulders get tight helps you give
              dispatch a precise location and pick the safest spot to stop.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {corridorNotes.map((item) => (
              <div key={item.road} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <Route aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                  <h3 className="text-lg font-black text-white">{item.road}</h3>
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
              <Info aria-hidden="true" size={16} />
              Your options, compared
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Road Rangers vs. 911 vs. calling for fuel delivery.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              There is no single &quot;right&quot; number for every situation. Here is an
              honest comparison so you can choose fast, whether you are on the interstate
              at noon or stuck in a parking lot at 2 AM.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {optionRows.map((row) => (
              <div
                key={row.option}
                className="card-solid grid gap-4 p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-6"
              >
                <div>
                  <h3 className="text-xl font-black text-white">{row.option}</h3>
                  <p className="mt-3 text-sm leading-6 text-safety-yellow">
                    <span className="font-black uppercase text-white/48">Best for:</span>{" "}
                    {row.bestFor}
                  </p>
                </div>
                <p className="text-sm leading-6 text-white/66">{row.notes}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/56">
            The simplest way to think about it: call{" "}
            <span className="font-black text-white">911</span> when you feel unsafe,
            dial <span className="font-black text-white">*347 (*FHP)</span> for the free
            Road Rangers on the highway during the day, and call{" "}
            <span className="font-black text-white">RoadZone Plus</span> whenever you need
            fuel actually brought to you — including off the highway, overnight, and on
            local streets the free programs do not cover.
          </p>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Fuel aria-hidden="true" size={16} />
              Why it keeps happening
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Why drivers run out of gas on Orlando highways.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Running out of fuel is rarely carelessness. On Central Florida&apos;s
              corridors a few specific things line up to catch good drivers off guard.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyItHappens.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle aria-hidden="true" className="shrink-0 text-safety-yellow" size={20} />
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
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
              <Wrench aria-hidden="true" size={16} />
              After the fuel arrives
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Once you are running again.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A little delivered fuel is enough to start the engine and reach a station —
              it is not a full tank. Take a few minutes to get back on the road safely
              and make sure you are not right back in the same spot.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/fuel-delivery" className="btn btn-secondary">
                Fuel Delivery Details
              </Link>
              <Link href="/areas/orlando" className="btn btn-secondary">
                Orlando Coverage
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {afterFuelTips.map((tip) => (
              <div key={tip} className="flex gap-3 rounded-md bg-white/6 p-4">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-route-green" size={18} />
                <p className="text-sm leading-6 text-white/70">{tip}</p>
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
              Orlando coverage
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Fuel delivery anywhere you run dry in Central Florida.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus is based in Orlando and brings emergency fuel to the
              interstates, the expressways, and everywhere the free highway programs do
              not reach — surface streets, parking lots, hotels, apartment complexes, and
              driveways across the metro.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/services/fuel-delivery"
              className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
            >
              <div className="flex items-center gap-3">
                <Fuel aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                <h3 className="text-lg font-black text-white">Emergency Fuel Delivery</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/64">
                Gas brought directly to your vehicle so you can reach the next station.
              </p>
              <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                See the service
              </span>
            </Link>

            <Link
              href="/areas/orlando"
              className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
            >
              <div className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                <h3 className="text-lg font-black text-white">Orlando, FL</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/64">
                I-4, SR 408, SR 528, downtown, I-Drive, and the neighborhoods between.
              </p>
              <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                View area
              </span>
            </Link>

            <Link
              href="/roadside-assistance-cost-orlando"
              className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
            >
              <div className="flex items-center gap-3">
                <Info aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                <h3 className="text-lg font-black text-white">Roadside Cost Guide</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/64">
                General Orlando-area price ranges and free options before you pay.
              </p>
              <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                See the guide
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              What to say on the call
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Give dispatch the details that get fuel to the right shoulder.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The fastest fuel delivery call is specific. Before you call, gather the
              details below if you can do it safely without stepping into traffic.
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

      <section className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Out of gas on I-4 questions.
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
            <p className="text-sm font-black uppercase text-white/72">Out of gas right now</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Stranded on I-4? Call RoadZone Plus for fuel.
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
