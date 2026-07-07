import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Info,
  PhoneCall,
  ShieldCheck,
  Wrench,
  XCircle,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const title = "Mobile Tire Repair Orlando | Mobile Flat Tire Help";
const description =
  "Searching for mobile tire repair in Orlando? RoadZone Plus brings 24/7 mobile flat tire help — spare tire installation and wheel lock removal — and tells you honestly when a tire shop is the right call.";

const path = "/mobile-tire-repair-orlando";

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

const canDo = [
  "Install your usable spare tire at your location, 24/7",
  "Remove and re-tighten lug nuts safely, including stubborn ones",
  "Remove a locking lug nut when the wheel lock key is lost or stripped",
  "Help you judge how far and how fast you can drive on the spare",
  "Talk through the fastest next step if a roadside fix is not possible",
];

const cannotDo = [
  "Patch or plug a punctured tire on the roadside",
  "Sell or deliver new or used replacement tires",
  "Repair a bent or cracked rim",
  "Fix a shredded tire or damaged sidewall — those need a tire shop",
];

const decisionGuide = [
  {
    title: "You have a usable spare",
    text: "This is the classic mobile flat tire call. A technician comes to your home, workplace, parking lot, or roadside spot and installs the spare so you can drive to a tire shop on your schedule.",
    href: "/services/tire-change",
    label: "Tire Change Service",
  },
  {
    title: "The wheel lock key is missing",
    text: "A locking lug nut without its key blocks any tire change — roadside or at a shop. RoadZone Plus can remove the lock so the spare can go on or the shop can do its work.",
    href: "/services/wheel-lock-removal",
    label: "Wheel Lock Removal",
  },
  {
    title: "No spare, or the tire is destroyed",
    text: "Many newer cars ship without a spare. If there is no usable spare, or the tire or rim is badly damaged, the fix is a tire shop or a tow. Call anyway — we will help you figure out the fastest safe option.",
    href: "/roadside-assistance-cost-orlando",
    label: "Compare your options",
  },
  {
    title: "Slow leak, car still drives",
    text: "If the tire holds enough air to drive safely, the cheapest path is often driving directly to a tire shop before the leak becomes a flat. Do not wait until it strands you on I-4.",
    href: "/flat-tire-on-i-4-orlando",
    label: "Flat on I-4 guide",
  },
];

const steps = [
  {
    title: "Get out of traffic first",
    text: "If the vehicle can roll, move to a parking lot, side street, or wide shoulder. On I-4 or an expressway, stay buckled inside if the shoulder is narrow, and call 911 first if you are blocking a lane.",
  },
  {
    title: "Check for a spare",
    text: "Look under the trunk floor or under the rear of the vehicle. Note whether it is a full-size spare, a donut, or missing — many newer cars only carry an inflator kit.",
  },
  {
    title: "Look at the lug nuts",
    text: "If one lug nut on each wheel looks different from the rest, your car has wheel locks. Check the glovebox and trunk for the key, and tell dispatch if it is missing.",
  },
  {
    title: "Call with the details",
    text: "Share your exact location, the vehicle, the tire that failed, your spare situation, and the wheel lock status. That decides whether a roadside fix works or a shop is the right call.",
  },
];

const faqs = [
  {
    question: "Do you offer mobile tire repair in Orlando?",
    answer:
      "RoadZone Plus offers mobile flat tire help: spare tire installation and wheel lock removal at your location, 24/7. We do not patch or plug tires, sell new tires, or repair rims on the roadside — when the tire itself needs repair or replacement, we will say so honestly and help you get to the right next step.",
  },
  {
    question: "Can you patch or plug my tire at my location?",
    answer:
      "No. Roadside patching is not part of RoadZone Plus service. If your tire has a repairable puncture, a tire shop can patch it properly. What RoadZone Plus does is install your usable spare so you can get to that shop safely instead of driving on a flat.",
  },
  {
    question: "Can you bring me a new tire?",
    answer:
      "No. RoadZone Plus does not sell or deliver tires. If the tire is beyond use and there is no spare, the practical options are a tow to a tire shop or having the vehicle serviced where it sits by a tire retailer. Call and we will help you think through the fastest option for where you are.",
  },
  {
    question: "What if my car has no spare tire?",
    answer:
      "Call anyway. Many newer vehicles ship with an inflator kit instead of a spare. Depending on the damage, the answer may be the inflator kit, a tow, or a mobile tire retailer. RoadZone Plus will tell you plainly what fits your situation instead of dispatching a service that cannot help.",
  },
  {
    question: "A locking lug nut is stopping the tire change. Can you help?",
    answer:
      "Yes. Wheel lock removal is a RoadZone Plus specialty. If the wheel lock key is lost, stripped, or broken, the technician can remove the locking lug nut so the spare can go on or a shop can service the wheel.",
  },
  {
    question: "How far can I drive on a spare?",
    answer:
      "Most temporary donut spares are limited to around 50 miles at reduced speed — check the sticker on the spare itself. A full-size spare can go further. The technician explains your limits on-site so you can plan the trip to the tire shop.",
  },
  {
    question: "How much does mobile flat tire help cost in Orlando?",
    answer:
      "Installing a usable spare is typically one of the lower-cost roadside services, and wheel lock removal depends on the lock's condition. RoadZone Plus confirms your exact price on the call before dispatch, with no membership required. The Orlando cost guide shows typical market ranges.",
  },
  {
    question: "Do you help on I-4 and the Orlando highways?",
    answer:
      "Yes, when the vehicle is in a safe enough spot to work. On a narrow or busy shoulder, safety comes first — share the road, direction, and nearest exit or mile marker, and call 911 first if you are blocking traffic.",
  },
];

export default function MobileTireRepairPage() {
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
    name: "What to do when you get a flat tire in Orlando",
    description:
      "Steps for handling a flat tire in Orlando: get safe, check your spare and wheel locks, and decide between mobile flat tire help and a tire shop.",
    totalTime: "PT5M",
    step: steps.map((item, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: item.title,
      text: item.text,
      url: `${absoluteUrl(path)}#step-${index + 1}`,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: "Mobile Flat Tire Help in Orlando",
    serviceType: "Mobile flat tire assistance and spare tire installation",
    description:
      "24/7 mobile flat tire help in Orlando, FL: spare tire installation and wheel lock removal at homes, workplaces, parking lots, and roadside locations.",
    url: absoluteUrl(path),
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
    { name: "Mobile Tire Repair Orlando", path },
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
              <Wrench aria-hidden="true" size={16} />
              Mobile flat tire help
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Mobile Tire Repair in Orlando: What Roadside Help Can Actually Fix
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Searching for mobile tire repair usually means one thing: the tire failed
              and you cannot get to a shop. RoadZone Plus brings 24/7 mobile flat tire
              help to your location — installing your usable spare and removing stuck
              wheel locks — and tells you honestly when the tire itself needs a shop
              instead.
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

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">
              The honest version
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              We install spares and remove wheel locks at your location. We do not patch
              tires or sell new ones — and we will tell you that up front.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">Call 24/7</p>
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
              <Info aria-hidden="true" size={16} />
              Straight answers
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What RoadZone Plus does — and does not do — at your car.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              &ldquo;Mobile tire repair&rdquo; can mean anything from a spare install to
              a full tire shop on wheels. Here is exactly where RoadZone Plus fits, so
              you call the right help the first time.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 aria-hidden="true" className="text-route-green" size={24} />
                <h3 className="text-2xl font-black text-white">At your location, 24/7</h3>
              </div>
              <div className="mt-6 grid gap-3">
                {canDo.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-white/6 p-4">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-route-green" size={18} />
                    <p className="text-sm leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-solid p-6">
              <div className="flex items-center gap-3">
                <XCircle aria-hidden="true" className="text-safety-yellow" size={24} />
                <h3 className="text-2xl font-black text-white">Needs a tire shop or tow</h3>
              </div>
              <div className="mt-6 grid gap-3">
                {cannotDo.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-white/6 p-4">
                    <XCircle aria-hidden="true" className="mt-0.5 shrink-0 text-safety-yellow" size={18} />
                    <p className="text-sm leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/60">
                If your situation lands here, calling is still the right move — RoadZone
                Plus will help you sort out the fastest safe path instead of leaving you
                guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              Pick your situation
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Which tire problem do you have?
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {decisionGuide.map((item) => (
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
              <AlertTriangle aria-hidden="true" size={16} />
              What to do right now
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Four checks before you call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Two minutes of checking saves a wasted dispatch. Your spare and wheel lock
              situation decides whether a mobile fix works or a shop is the answer.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.title} id={`step-${index + 1}`} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-safety-yellow">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-white/60">
            Flat on the highway? Read the{" "}
            <Link
              href="/flat-tire-on-i-4-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              flat tire on I-4 guide
            </Link>{" "}
            for shoulder safety first. Missing the little key for a locking lug nut? See{" "}
            <Link
              href="/lost-wheel-lock-key-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              lost wheel lock key in Orlando
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Mobile tire help questions.
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

      <section className="section bg-asphalt">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              What it costs
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Wondering what flat tire help costs in Orlando?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              See typical Orlando roadside cost ranges and why RoadZone Plus confirms
              your exact price on the call — no membership, no surprises.
            </p>
          </div>
          <Link href="/roadside-assistance-cost-orlando" className="btn btn-primary shrink-0">
            View Orlando Cost Guide
          </Link>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">Flat tire in Orlando</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Need the spare on now? Call RoadZone Plus.
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
