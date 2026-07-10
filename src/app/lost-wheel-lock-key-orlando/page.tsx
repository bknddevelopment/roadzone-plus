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
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  businessId,
} from "@/lib/seo";

const path = "/lost-wheel-lock-key-orlando";
const title = "Lost Wheel Lock Key Orlando | Wheel Lock Removal";
const description =
  "Lost your wheel lock key in Orlando? Learn what to check, when to stop, and when to call RoadZone Plus for 24/7 wheel lock removal and tire help.";

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

const stuckSituations = [
  {
    title: "Flat tire, but the lock key is missing",
    text: "The spare may be ready and the jack may be in the trunk, but the wheel cannot come off if one locking lug nut is blocking removal.",
  },
  {
    title: "The key socket is stripped or cracked",
    text: "A worn wheel lock key can slip, crack, or round out when someone tries to force it. That can make the lock harder to remove.",
  },
  {
    title: "The dealer kit is gone",
    text: "Used cars, rentals, and family vehicles often change hands without the small wheel lock key. Many drivers only discover it during an emergency.",
  },
  {
    title: "A tire shop cannot start the job",
    text: "Some shops will not touch the tire until the locking lug nut is removed first. RoadZone Plus fills that roadside gap.",
  },
];

const firstSteps = [
  {
    title: "Check the common storage spots",
    text: "Look in the glove box, center console, spare-tire well, trunk side compartments, jack bag, and any small pouch that came with the vehicle.",
  },
  {
    title: "Stop forcing the lock",
    text: "If the key is slipping or the lock is rounding, stop. More force can damage the lock, the wheel, or the stud and turn a simple service call into a bigger repair.",
  },
  {
    title: "Call with the vehicle details",
    text: "Share the year, make, model, wheel type, and whether you have a flat tire now. That helps the technician prepare for the right situation.",
  },
  {
    title: "Stay visible and reachable",
    text: "If you are on the roadside, turn on hazards, move away from traffic when safe, and keep your phone reachable so the technician can find you.",
  },
];

const decisionOptions = [
  {
    title: "You need the wheel off now",
    text: "If a flat tire, brake job, or tire-shop visit is blocked by the locking lug nut, stop forcing it and call for wheel lock removal at the vehicle.",
    href: "/services/wheel-lock-removal",
    label: "Get wheel lock removal help",
  },
  {
    title: "You want a replacement key",
    text: "Check the original wheel-lock paperwork or contact the vehicle dealer or lock manufacturer. Replacement is useful for later, but it may not solve an active roadside emergency quickly.",
    href: "/contact",
    label: "Call RoadZone for guidance",
  },
  {
    title: "You also have a flat tire",
    text: "Tell dispatch that the lock and the flat are connected. RoadZone Plus can confirm whether wheel lock removal and tire-change help can be handled in the same service call.",
    href: "/services/tire-change",
    label: "See flat tire help",
  },
];

const localScenarios = [
  {
    area: "Orlando",
    href: "/areas/orlando",
    text: "parking lots, apartments, office parks, I-4, SR 408, and neighborhood streets",
  },
  {
    area: "Lake Buena Vista",
    href: "/areas/lake-buena-vista",
    text: "resort lots, Disney Springs, hotel parking, and the roads around the parks",
  },
  {
    area: "Kissimmee",
    href: "/areas/kissimmee",
    text: "US 192, vacation rentals, hotels, and visitor-heavy routes near the resort corridor",
  },
  {
    area: "Celebration",
    href: "/areas/celebration",
    text: "residential streets, hotel lots, and the park-adjacent corridors west of Orlando",
  },
];

const dispatchDetails = [
  {
    label: "Vehicle and wheel type",
    detail:
      "Share the year, make, model, and whether the wheels are factory, aftermarket, chrome, black, or custom. A quick photo helps if you can send one safely.",
  },
  {
    label: "What happened to the key",
    detail:
      "Tell us if the key is missing, cracked, stripped, slipping, or stuck on the lock. Do not keep forcing it if it is already rounding out.",
  },
  {
    label: "Your tire situation",
    detail:
      "Say whether you have a flat tire now, whether the spare is usable, and whether a tire shop already refused to start until the lock is removed.",
  },
  {
    label: "Exact location",
    detail:
      "Use the apartment name, parking lot, hotel, road, exit, or nearest cross street. If you are on a shoulder, stay clear of traffic and keep your hazards on.",
  },
];

const faqs = [
  {
    question: "What should I do if I lost my wheel lock key in Orlando?",
    answer:
      "Check the glove box, console, trunk, spare-tire well, jack kit, and any small pouch first. If you cannot find it, call RoadZone Plus and explain whether you have a flat tire now or need the lock removed before tire service.",
  },
  {
    question: "Can RoadZone Plus remove a locking lug nut without the key?",
    answer:
      "Yes. RoadZone Plus provides wheel lock removal help for Orlando and nearby Central Florida drivers when the key is lost, stripped, or broken. Share your vehicle details when you call.",
  },
  {
    question: "Can I drive with a flat tire if the wheel lock key is missing?",
    answer:
      "No. Driving on a flat can damage the tire, wheel, suspension, and nearby body parts. If the wheel cannot come off because of a locking lug nut, call for roadside help instead of trying to drive it.",
  },
  {
    question: "Will a tire shop remove the wheel lock for me?",
    answer:
      "Some tire shops can, but many will ask you to handle the lock first, especially if the key is missing or stripped. RoadZone Plus is useful when the vehicle is already stuck and the wheel needs to come off before anything else can happen.",
  },
  {
    question: "Can you help if I also need a flat tire changed?",
    answer:
      "Yes. Wheel lock removal often connects directly to flat tire service. If you have a usable spare, RoadZone Plus can help remove the lock and move the tire change forward.",
  },
  {
    question: "Can you make a replacement wheel lock key?",
    answer:
      "RoadZone Plus focuses on roadside wheel lock removal, not making a new manufacturer key. If you want a replacement key later, the dealer or wheel-lock manufacturer may be the right source.",
  },
  {
    question: "Can I buy a universal wheel lock key?",
    answer:
      "There is no single key guaranteed to fit every factory and aftermarket wheel lock. Wheel-lock patterns vary, so a replacement usually needs to match the lock or its identifying information. If the wheel must come off now, roadside removal may be faster than searching for a matching replacement.",
  },
  {
    question: "Can AutoZone or another parts store replace my wheel lock key?",
    answer:
      "Parts stores sell wheel-lock sets and removal tools, but an in-stock key is not guaranteed to match the lock already on your vehicle. Check any wheel-lock paperwork, the dealer, or the manufacturer for a matching replacement. If a flat tire has you stranded, call RoadZone Plus for removal help instead of guessing with the wrong tool.",
  },
  {
    question: "Do rental cars have wheel locks?",
    answer:
      "Some do. If you are in a rental car and cannot find the wheel lock key, check with the rental company and call RoadZone Plus if you are stranded and need help at the vehicle.",
  },
  {
    question: "How much does wheel lock removal cost?",
    answer:
      "The cost depends on the vehicle, lock condition, location, and whether another roadside service is needed. RoadZone Plus confirms the situation on the call instead of quoting a one-size-fits-all price online.",
  },
];

export default function LostWheelLockKeyPage() {
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
    name: "What to do when you lost your wheel lock key in Orlando",
    description:
      "Step-by-step actions for Orlando drivers when a missing, broken, or stripped wheel lock key blocks a flat tire change or tire service.",
    totalTime: "PT5M",
    step: firstSteps.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.text,
      url: `${absoluteUrl("/lost-wheel-lock-key-orlando")}#step-${index + 1}`,
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    datePublished: "2026-06-07",
    dateModified: "2026-07-10",
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@id": businessId,
    },
    mainEntityOfPage: absoluteUrl(path),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Lost Wheel Lock Key Orlando", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, howToSchema, articleSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <KeyRound aria-hidden="true" size={16} />
              Lost wheel lock key
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Lost Your Wheel Lock Key in Orlando?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              If your wheel lock key is missing, check the glove box, console, spare-tire
              well, jack kit, and trunk before forcing the lock. If the wheel still cannot
              come off, RoadZone Plus provides 24/7 wheel lock removal in Orlando so a
              blocked tire change or other wheel service can move forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/wheel-lock-removal" className="btn btn-secondary">
                Wheel Lock Service
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">
              Do not force it
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              If the wheel lock key is missing or slipping, extra force can make the
              lock harder to remove and can damage the wheel hardware.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Fast contact</p>
              <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-2xl font-black text-white">
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section border-b border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <CheckCircle2 aria-hidden="true" size={16} />
              Choose the right next step
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Replacement key later, or wheel removal now?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The right answer depends on whether the vehicle is safe and parked, or a
              missing key is actively blocking a flat tire change or repair. Use the path
              that matches what is happening now.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {decisionOptions.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card-solid group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/66">{item.text}</p>
                <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              When this becomes urgent
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The lock is small. The problem is not.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Wheel locks are designed to prevent theft, but they can also prevent a
              needed tire change. If the key is gone, the vehicle may be stuck until the
              locked lug nut comes off.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stuckSituations.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle aria-hidden="true" className="shrink-0 text-safety-yellow" size={20} />
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              First steps
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What to do before the wheel gets damaged.
            </h2>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {firstSteps.map((item, index) => (
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

      <section className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Roadside judgment
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Why this is not a normal tire change.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A standard spare tire install is simple only when every lug nut can come
              off. A wheel lock changes the job. The technician has to deal with the
              lock first, then move to the tire issue. That is why a missing key should
              be treated as a roadside service problem, not a DIY shortcut.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/tire-change" className="btn btn-secondary">
                Tire Change Help
              </Link>
              <Link href="/services/wheel-lock-removal" className="btn btn-secondary">
                Wheel Lock Removal
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                <h3 className="text-xl font-black text-white">Call when the spare cannot go on</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                If the flat tire is ready to be changed but one locking lug nut blocks
                removal, RoadZone Plus can help remove the lock and move the job forward.
              </p>
            </div>
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                <h3 className="text-xl font-black text-white">Call before the lock gets worse</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                A partially stripped lock is harder to remove than an intact one. If the
                key slips or the lock looks rounded, stop trying and call.
              </p>
            </div>
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                <h3 className="text-xl font-black text-white">Call even if you are at home</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Wheel lock problems do not only happen on highways. Driveways, apartments,
                hotel lots, and workplace parking lots are common call locations.
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
              Orlando coverage
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Wheel lock help where drivers actually get stuck.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus serves Orlando and nearby Central Florida areas where flat
              tires, missing lock keys, and visitor vehicle problems happen every day.
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
                  <MapPin aria-hidden="true" className="shrink-0 text-route-green" size={20} />
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
              <PhoneCall aria-hidden="true" size={16} />
              What to tell dispatch
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Give us the wheel-lock details before the hardware gets worse.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Wheel locks are easier to handle before repeated force damages the key,
              lock, wheel, or stud. Share the details below when you call RoadZone Plus.
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/services/wheel-lock-removal"
              className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
            >
              <h3 className="text-xl font-black text-white">Wheel Lock Removal</h3>
              <p className="mt-3 text-sm leading-6 text-white/64">
                Local roadside help when a locking lug nut blocks the tire job.
              </p>
              <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                See the service
              </span>
            </Link>
            <Link
              href="/services/tire-change"
              className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
            >
              <h3 className="text-xl font-black text-white">Flat Tire Help</h3>
              <p className="mt-3 text-sm leading-6 text-white/64">
                If the lock comes off and you have a usable spare, RoadZone can help
                move the tire change forward.
              </p>
              <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                See tire change help
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Lost wheel lock key questions.
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
            <p className="text-sm font-black uppercase text-white/72">Wheel lock help</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Missing the key? Call before forcing the lock.
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
