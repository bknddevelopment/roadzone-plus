import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  Info,
  PhoneCall,
  Route,
  ShieldCheck,
  TrafficCone,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const title = "Free Roadside Assistance Orlando | What Actually Exists";
const description =
  "Is there free roadside assistance in Orlando? Yes — sometimes. See how Road Rangers, insurance, warranties, and memberships work, and when direct 24/7 dispatch is the right call.";

const path = "/free-roadside-assistance-orlando";

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

const quickAnswer = [
  {
    label: "On a covered highway",
    value: "Road Rangers — free",
    text: "Safely stopped on I-4, the Turnpike, or a covered Central Florida expressway during patrol hours? Dial *347 (*FHP) and ask about Road Ranger assistance first.",
  },
  {
    label: "Coverage you already pay for",
    value: "Check before you spend",
    text: "Many insurance policies, new-car warranties, credit cards, and memberships include roadside help. If you have it, use it — that call may cost you nothing extra.",
  },
  {
    label: "Everywhere the free options stop",
    value: "RoadZone Plus — paid, direct",
    text: "Parking lots, hotels, apartments, local roads, and overnight calls. RoadZone Plus is not free — it is direct pay-as-you-go dispatch, 24/7, with the price confirmed on the call.",
  },
];

const freeOptions = [
  {
    title: "Road Rangers on covered highways",
    text: "Florida's Road Ranger service patrol offers limited no-cost help — flat tire assistance, jump-starts, small amounts of emergency fuel, and incident support — on covered Central Florida interstates and expressways. Coverage depends on the road, the patrol route, and posted hours (typically daytime into the evening). It is a highway program: it does not come to parking lots, hotels, apartments, or neighborhood streets.",
    href: "/road-rangers-orlando",
    label: "Full Road Rangers Orlando guide",
  },
  {
    title: "Auto insurance roadside add-ons",
    text: "Many Orlando drivers already carry a roadside benefit on their auto policy and forget it exists. Check your policy documents or insurer app: towing, jumpstarts, lockouts, and fuel delivery are commonly included for a small annual premium you may already be paying.",
  },
  {
    title: "New-car warranties and manufacturer programs",
    text: "Most new vehicles include manufacturer roadside assistance for the first several years. If your car is newer, the number in the owner's manual or manufacturer app may dispatch help at no per-call cost.",
  },
  {
    title: "Credit cards and memberships",
    text: "Some credit cards bundle roadside benefits, and annual memberships such as AAA prepay for a set number of calls per year. These are not free — you pay the annual fee whether you use it or not — but if you already have one, a covered call costs nothing extra.",
  },
  {
    title: "Rental car roadside lines",
    text: "Driving a rental? The rental company has its own roadside line, and some rentals include coverage or sold you a protection package at the counter. Check the key tag or rental agreement. For lockouts and dead batteries at the vehicle, a local roadside call is often faster — but know what you already paid for.",
  },
];

const whenFreeStops = [
  {
    title: "You are in a parking lot, hotel, or apartment",
    text: "Road Rangers patrol highways, not private property. Hotel lots, Disney- and Universal-area garages, apartment communities, and shopping centers are direct roadside calls.",
  },
  {
    title: "It is the middle of the night",
    text: "Patrol programs run posted hours and insurance dispatch can be slow to confirm overnight. RoadZone Plus answers 24/7 and dispatches directly.",
  },
  {
    title: "You are on a local road",
    text: "Orange Blossom Trail, US 192, Sand Lake Road, and neighborhood streets are outside highway patrol coverage. A breakdown there needs a direct provider.",
  },
  {
    title: "You need a service the free option does not carry",
    text: "Wheel lock removal, battery replacement, and smart key problems go beyond what a highway patrol truck or basic membership call typically handles.",
  },
];

const sourceLinks = [
  {
    name: "Central Florida Expressway Authority Roadside Assistance",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "CFX lists Road Rangers, the *347 (*FHP) phone path, covered toll roads, and posted patrol hours.",
  },
  {
    name: "FDOT Road Ranger Service Patrol",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "FDOT describes Road Rangers as limited no-cost highway assistance, including flat tires, jump-starts, and emergency fuel.",
  },
];

const commonCalls = [
  {
    href: "/services/jumpstart",
    title: "Jumpstart Service",
    text: "Dead battery at home, work, a hotel, or a garage — off the highway, this is a direct call.",
  },
  {
    href: "/services/tire-change",
    title: "Tire Change",
    text: "Spare tire installation at your location when the flat did not happen on a patrolled highway.",
  },
  {
    href: "/services/fuel-delivery",
    title: "Fuel Delivery",
    text: "Gas brought to hotels, apartments, lots, and local roads where no patrol truck is coming.",
  },
  {
    href: "/services/auto-lockout",
    title: "Auto Lockout",
    text: "Keys locked in the car at a store, restaurant, or hotel — a private roadside call, not a highway one.",
  },
];

const faqs = [
  {
    question: "Is there free roadside assistance in Orlando?",
    answer:
      "Sometimes. Florida's Road Ranger program provides limited no-cost help on covered Central Florida highways and expressways during patrol hours — dial *347 (*FHP). Your insurance policy, new-car warranty, credit card, or membership may also cover roadside calls. Outside those situations, roadside help in Orlando is a paid service.",
  },
  {
    question: "Are Road Rangers really free?",
    answer:
      "Yes, Road Rangers are a publicly funded highway service patrol and do not charge for their limited assistance. The catch is coverage: they patrol specific highways during posted hours and do not respond to parking lots, hotels, apartments, or local streets.",
  },
  {
    question: "Is RoadZone Plus free?",
    answer:
      "No. RoadZone Plus is a direct, pay-as-you-go roadside service. There is no membership fee and no annual plan — you pay for the service call you need, and the price is confirmed with you on the phone before a technician is dispatched.",
  },
  {
    question: "When does paying for roadside help make sense?",
    answer:
      "When the free options do not cover you: private property, local roads, late-night hours, a service the patrol does not carry, or when you simply need help dispatched now without verifying coverage first. One direct call can be cheaper than a year of membership fees you never use.",
  },
  {
    question: "Does my insurance already include roadside assistance?",
    answer:
      "Many policies do, as an inexpensive add-on that is easy to forget. Check your declarations page or insurer app for 'roadside assistance' or 'towing and labor' coverage before paying out of pocket — and note that using it occasionally may be reported like a claim with some insurers, which is worth asking about.",
  },
  {
    question: "Who do I call for free help on I-4?",
    answer:
      "If you are safely stopped on I-4 during patrol hours, dial *347 (*FHP) from your mobile phone and ask about Road Ranger assistance. If you are blocking traffic or in danger, call 911 first. If the patrol cannot reach you, is off-hours, or your problem needs more than their limited service, RoadZone Plus dispatches 24/7.",
  },
];

export default function FreeRoadsideAssistancePage() {
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
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@id": businessId,
    },
    mainEntityOfPage: {
      "@id": `${absoluteUrl(path)}#webpage`,
    },
    citation: sourceLinks.map((source) => source.href),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#roadside-service`,
    name: "24/7 Roadside Assistance in Orlando",
    serviceType: "Roadside assistance",
    description:
      "Direct paid 24/7 roadside assistance in Orlando for the situations free options do not cover: jumpstarts, tire changes, fuel delivery, lockouts, wheel lock removal, and battery help.",
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
    { name: "Free Roadside Assistance in Orlando", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema, serviceSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <TrafficCone aria-hidden="true" size={16} />
              Free vs. direct dispatch
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Free Roadside Assistance in Orlando: What Actually Exists
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              There are real free and already-paid-for roadside options in Orlando, and
              this page lays them out honestly: Road Rangers on covered highways, plus
              the insurance, warranty, and membership coverage you may already have.
              When none of them fit — parking lots, hotels, local roads, late nights —
              RoadZone Plus is the direct paid call that answers 24/7.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/road-rangers-orlando" className="btn btn-secondary">
                Road Rangers Guide
              </Link>
            </div>
          </div>

          <aside className="card bg-panel p-6">
            <p className="text-sm font-black uppercase text-safety-yellow">
              Honest framing
            </p>
            <p className="mt-3 text-xl font-black leading-7 text-white">
              RoadZone Plus is not free — it is direct pay-as-you-go help with no
              membership, and the price is confirmed before dispatch.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-sm font-black uppercase text-white/48">
                On a covered highway?
              </p>
              <p className="mt-3 text-2xl font-black text-white">Dial *347 (*FHP)</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                The free Road Ranger path for covered Central Florida expressways during
                patrol hours.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Quick answer
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Three paths, depending on where you are stuck.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {quickAnswer.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{item.label}</p>
                <p className="mt-3 text-xl font-black text-white">{item.value}</p>
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
              <CheckCircle2 aria-hidden="true" size={16} />
              The free and already-paid options
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Check these before you pay out of pocket.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              A good roadside company tells you when you do not need to pay it. These
              are the legitimate no-extra-cost paths for Orlando drivers.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {freeOptions.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 aria-hidden="true" className="shrink-0 text-route-green" size={20} />
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white hover:text-red-200"
                  >
                    <CheckCircle2 aria-hidden="true" size={16} />
                    {item.label}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border border-white/10 bg-black/24 p-5">
            <p className="text-sm font-black uppercase text-white/48">Public sources</p>
            <div className="mt-4 grid gap-3">
              {sourceLinks.map((source) => (
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
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Where free help stops
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The situations that turn into a direct call.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Most Orlando breakdowns do not happen on a patrolled expressway shoulder.
              They happen in the places the free programs were never designed to reach.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whenFreeStops.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-white/60">
            Ran dry on the interstate? The{" "}
            <Link
              href="/ran-out-of-gas-on-i-4-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              ran out of gas on I-4 guide
            </Link>{" "}
            covers the highway-specific safety steps and both the free and direct fuel
            options.
          </p>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              When you do call direct
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What RoadZone Plus handles, pay-as-you-go.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              No membership, no app — the price is confirmed on the call before a
              technician heads out. See{" "}
              <Link
                href="/services"
                className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
              >
                all roadside services
              </Link>{" "}
              or jump to the common ones below.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commonCalls.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-solid group p-6 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{item.text}</p>
                <span className="mt-4 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  View service
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/roadside-assistance-cost-orlando" className="btn btn-secondary">
              What Roadside Help Costs in Orlando
            </Link>
            <Link href="/road-rangers-orlando" className="btn btn-secondary">
              Road Rangers vs. RoadZone
            </Link>
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
              Free roadside assistance questions.
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
              When free does not fit
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Need direct help now? Call RoadZone Plus.
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
