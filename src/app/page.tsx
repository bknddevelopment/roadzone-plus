import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  CircleDollarSign,
  Clock3,
  Fuel,
  KeyRound,
  MapPin,
  PhoneCall,
  Route,
  ShieldCheck,
  TimerReset,
  Wrench,
} from "lucide-react";
import { areas, counties, services, site } from "@/data/site";
import { absoluteUrl, businessId } from "@/lib/seo";

const serviceIcons = {
  jumpstart: BatteryCharging,
  "tire-change": Wrench,
  "fuel-delivery": Fuel,
  "auto-lockout": KeyRound,
  "wheel-lock-removal": Wrench,
  "battery-replacement": BatteryCharging,
  "smart-key-programming": KeyRound,
};

const priorityServices = services.filter((service) => service.priority);

const emergencyHelpLinks = [
  {
    href: "/roadside-assistance-cost-orlando",
    title: "What will it cost?",
    text: "See typical Orlando roadside cost ranges, free options to check first, and when to call direct.",
    Icon: CircleDollarSign,
  },
  {
    href: "/ran-out-of-gas-on-i-4-orlando",
    title: "Ran out of gas on I-4",
    text: "Fuel delivery guidance for Orlando highways, expressways, toll roads, and late-night breakdowns.",
    Icon: Fuel,
  },
  {
    href: "/locked-keys-in-rental-car-orlando",
    title: "Locked keys in a rental",
    text: "Lockout help for visitors at hotels, rental lots, theme parks, restaurants, and shopping centers.",
    Icon: KeyRound,
  },
  {
    href: "/lost-wheel-lock-key-orlando",
    title: "Lost wheel lock key",
    text: "What to do when a locking lug nut blocks a tire change and the spare cannot go on.",
    Icon: Wrench,
  },
  {
    href: "/theme-park-roadside-assistance",
    title: "Stuck near the parks",
    text: "Roadside help near Disney, Universal, Lake Buena Vista, Celebration, Kissimmee, and resort corridors.",
    Icon: Route,
  },
];

const neighborhoods = [
  "Downtown Orlando",
  "Pine Hills",
  "Conway",
  "Hunters Creek",
  "Dr. Phillips",
  "Lake Nona",
  "Horizon West",
  "Windermere",
  "MetroWest",
  "Baldwin Park",
  "College Park",
  "Azalea Park",
  "Union Park",
  "Belle Isle",
  "Meadow Woods",
  "Southchase",
  "Sky Lake",
  "Waterford Lakes",
];

const homeFaqs = [
  {
    question: "What roadside assistance services does RoadZone Plus offer in Orlando?",
    answer:
      "RoadZone Plus provides 24/7 roadside assistance in Orlando and Central Florida, including jumpstarts, flat tire changes, emergency fuel delivery, auto lockouts, wheel lock removal, battery replacement, and smart key programming.",
  },
  {
    question: "Is RoadZone Plus available 24 hours a day?",
    answer:
      "Yes. RoadZone Plus operates 24 hours a day, seven days a week, including nights, weekends, and holidays. One call connects you with roadside help any time.",
  },
  {
    question: "How quickly can you reach me?",
    answer:
      "We dispatch as soon as you call. Share your exact location and the nearest cross street, exit, or landmark so the technician can reach you as directly as possible.",
  },
  {
    question: "Do I need a membership to use RoadZone Plus?",
    answer:
      "No. There is no membership and no app to download. Call the number, describe what is wrong, and a roadside technician is dispatched to you.",
  },
  {
    question: "What areas around Orlando do you cover?",
    answer:
      "RoadZone Plus serves Orlando and surrounding Central Florida, including Ocoee, Pine Hills, Apopka, Altamonte Springs, the University area, Kissimmee, Celebration, Lake Buena Vista, Clermont, Winter Garden, Oviedo, and Sanford, plus the roads in between along I-4 and SR 408.",
  },
  {
    question: "Do you help with hybrids and electric vehicles?",
    answer:
      "Yes. Hybrids and EVs use a 12-volt battery for their electronics that can die like any other, and a standard jumpstart is usually the fix. Share your year, make, and model when you call.",
  },
  {
    question: "Can you help tourists locked out of a rental car near the theme parks?",
    answer:
      "Yes. RoadZone Plus serves the resort corridor near Walt Disney World and Universal Orlando, including Lake Buena Vista, Kissimmee, and Celebration, and helps visitors in rental cars with lockouts, fuel, jumpstarts, and flat tires.",
  },
  {
    question: "How do I get roadside help right now?",
    answer:
      `Call ${site.phoneDisplay}. Tell the dispatcher your location and what happened, and a technician is sent your way.`,
  },
  {
    question: "What information should I have ready when I call?",
    answer:
      "Have your exact location (an address, cross street, exit number, hotel, or nearby landmark), the year, make, model, and color of your vehicle, and a short description of what is wrong. That lets the dispatcher send the right help to the right place the first time.",
  },
  {
    question: "Is there a membership fee or annual cost to use RoadZone Plus?",
    answer:
      "No annual fee and no club to join. Costs depend on the service you need and where you are, so RoadZone Plus confirms the details with you on the call instead of charging a recurring membership like a roadside club.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
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
    "@id": `${absoluteUrl("/")}#roadside-assistance`,
    name: "Roadside Assistance in Orlando, FL",
    serviceType: "Roadside assistance",
    description:
      "24/7 roadside assistance in Orlando and Central Florida: jumpstarts, tire changes, emergency fuel delivery, auto lockouts, wheel lock removal, battery replacement, and smart key programming.",
    url: absoluteUrl("/"),
    provider: { "@id": businessId },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, serviceSchema]) }}
      />

      <section className="relative overflow-hidden border-b border-white/10 bg-road-black">
        <div className="absolute inset-0 opacity-35">
          <div className="h-full w-full bg-[radial-gradient(circle_at_70%_25%,rgba(240,34,34,0.34),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08)_0,transparent_28%)]" />
        </div>

        <div className="container relative grid min-h-[calc(100svh-80px)] items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-18">
          <div className="max-w-3xl">
            <div className="eyebrow animate-in">
              <Clock3 aria-hidden="true" size={16} />
              Open 24/7 in Orlando and Central Florida
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl animate-in-delay-1">
              24/7 Roadside Assistance
              <span className="mt-3 block text-road-red"> in Orlando &amp; Central Florida.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl animate-in-delay-2">
              RoadZone Plus is a 24/7 roadside assistance service in Orlando and Central
              Florida. Fast jumpstarts, tire changes, fuel delivery, auto lockouts, wheel
              lock removal, battery replacement, and smart key programming — one call gets a
              roadside technician moving.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-in-delay-3">
              <a href={site.phoneHref} className="btn btn-primary hero-cta sm:min-w-52">
                <PhoneCall aria-hidden="true" size={20} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services" className="btn btn-secondary sm:min-w-44">
                View Services
              </Link>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3 animate-in-delay-4">
              {[
                ["24/7", "Emergency response"],
                ["7", "Roadside services"],
                ["13+", "Cities covered"],
              ].map(([value, label]) => (
                <div key={label} className="card p-4">
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-white/58">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade">
            <div className="card overflow-hidden bg-panel p-4 sm:p-6">
              <Image
                src="/visuals/hero-roadside.jpg"
                alt="Roadside assistance vehicle helping a stranded driver at night"
                width={1200}
                height={800}
                priority
                className="aspect-[3/2] w-full rounded-md object-cover"
              />
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-white/10 bg-black/36 p-4">
                  <p className="text-xs font-black uppercase text-safety-yellow">
                    Fast Dispatch
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Call, share your location, and get help sent to you.
                  </p>
                </div>
                <div className="rounded-md border border-white/10 bg-black/36 p-4">
                  <p className="text-xs font-black uppercase text-route-green">
                    Direct Service
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Built around phone calls, not complicated bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-5">
        <div className="container grid gap-3 md:grid-cols-5">
          {priorityServices.map((service) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? ShieldCheck;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex min-h-24 items-center gap-3 rounded-md border border-white/10 bg-white/5 p-4 transition hover:border-road-red/70 hover:bg-white/8"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-road-red text-white">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <span>
                  <span className="block text-sm font-black text-white">{service.shortName}</span>
                  <span className="mt-1 block text-xs leading-5 text-white/55">
                    Call now
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <div className="eyebrow">
                <Route aria-hidden="true" size={16} />
                Emergency help
              </div>
              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Pick the problem first. Then call the right help.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Roadside calls usually start with a specific problem, not a category list.
                These quick paths cover the moments Orlando drivers and visitors search for
                when they are already stranded.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-self-end">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/roadside-assistance-cost-orlando" className="btn btn-secondary">
                Cost Guide
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {emergencyHelpLinks.map(({ href, title, text, Icon }) => (
              <Link
                key={href}
                href={href}
                className="card-solid group block p-5 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white text-road-black">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
                <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                  Open guide
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
              Orlando&apos;s 24/7 roadside team
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Local roadside assistance in Orlando, any hour.
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-white/68">
              <p>
                When your car quits in Orlando, you do not have time to compare
                memberships or wait on hold. RoadZone Plus is a local, call-first roadside
                assistance service built for exactly that moment. One call to{" "}
                {site.phoneDisplay} puts a technician on the way to your driveway, your
                hotel, a parking lot, or the shoulder of I-4 — any hour of the day or
                night.
              </p>
              <p>
                Central Florida is hard on cars. Summer heat kills batteries early, hot
                pavement and long commutes wear tires down, and unfamiliar routes leave
                visitors stranded between gas stations. RoadZone Plus handles the most
                common roadside problems on-site: jumpstarts for dead batteries,
                spare-tire installation for flats, emergency fuel delivery when the tank
                runs dry, lockout help when keys are stuck inside, and wheel lock removal
                when a missing key blocks a tire change.
              </p>
              <p>
                There is no app to download and no membership to buy. You call, describe
                what happened and where you are, and a technician is dispatched with the
                right equipment. From downtown Orlando and the University area to
                Kissimmee, Winter Garden, Sanford, and the resort corridor near the theme
                parks, help is one call away — including for the 12-volt batteries in
                hybrids and electric vehicles, smart key problems, and locking lug nuts
                that basic operators skip.
              </p>
              <p>
                Roadside trouble does not keep business hours, and neither does RoadZone
                Plus. Whether it is a commuter battery that died in a downtown garage, a
                flat on the way to the airport, a rental car locked tight at a resort, or
                an empty tank on a dark stretch of highway, the response is the same: call,
                tell us where you are, and a technician heads your way with the equipment
                to get you moving again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="eyebrow">
                <Wrench aria-hidden="true" size={16} />
                Services
              </div>
              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Built for the calls drivers make when they are stuck.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/65 lg:justify-self-end">
              Every service covers exactly what happens, when to call, and where
              RoadZone Plus can reach you. No memberships, no middlemen — direct
              roadside help from one phone call.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? ShieldCheck;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-solid group block p-6 transition hover:-translate-y-1 hover:border-road-red/70"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white text-road-black">
                      <Icon aria-hidden="true" size={23} />
                    </span>
                    {service.priority ? (
                      <span className="rounded-md bg-road-red/16 px-2 py-1 text-xs font-black uppercase text-red-200">
                        Priority
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-white">{service.shortName}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{service.cardText}</p>
                  <span className="mt-5 inline-flex text-sm font-black text-white group-hover:text-red-200">
                    View service
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Coverage
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Orlando first, Central Florida & around it.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus is based in Orlando and serves drivers across Orange,
              Osceola, Seminole, and Polk County areas. Whether you are near the
              theme parks, on I-4, or in a residential neighborhood — help can
              reach you.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {counties.map((county) => (
                <span
                  key={county}
                  className="rounded-md border border-white/12 bg-black/25 px-3 py-2 text-sm font-bold text-white/72"
                >
                  {county}
                </span>
              ))}
            </div>

            <p className="mt-7 text-sm font-black uppercase tracking-wide text-white/48">
              Neighborhoods we reach
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {neighborhoods.map((spot) => (
                <span
                  key={spot}
                  className="rounded-md bg-white/6 px-3 py-1.5 text-xs font-semibold text-white/64"
                >
                  {spot}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/areas" className="btn btn-secondary">
                <Route aria-hidden="true" size={18} />
                View Service Areas
              </Link>
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call for ETA
              </a>
            </div>
          </div>

          <div className="card bg-road-black p-4 sm:p-6">
            <Image
              src="/visuals/coverage-aerial.jpg"
              alt="RoadZone Plus Central Florida service area map"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full rounded-md object-cover"
            />
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {areas.slice(0, 9).map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="rounded-md bg-white/7 px-3 py-2 text-sm font-bold text-white/72 hover:bg-white/12 hover:text-white"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container">
          <div className="max-w-2xl">
            <div className="eyebrow">
              <TimerReset aria-hidden="true" size={16} />
              How It Works
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              A simple emergency flow.
            </h2>
          </div>

          <div className="road-divider relative mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Call RoadZone Plus",
                text: "Tap the call button from any screen. The number is always visible, especially on mobile.",
              },
              {
                number: "02",
                title: "Share your location",
                text: "Give the closest address, intersection, hotel, parking lot, or mile marker so dispatch can move faster.",
              },
              {
                number: "03",
                title: "Get back moving",
                text: "The technician handles the roadside issue or helps you understand the next practical step.",
              },
            ].map((step) => (
              <div key={step.number} className="relative card-solid p-6">
                <p className="text-4xl font-black text-road-red">{step.number}</p>
                <h3 className="mt-5 text-2xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Trust
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Clear, useful, call-first.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Roadside customers are stressed, stranded, and usually on a phone. The
              experience is intentionally direct: what they need, where RoadZone serves,
              and how to call.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "No membership maze",
                text: "The CTA is direct roadside help, not a long intake flow.",
              },
              {
                title: "Modern vehicle support",
                text: "Smart key programming and wheel lock removal separate RoadZone from basic roadside operators.",
              },
              {
                title: "Tourist and local ready",
                text: "Coverage includes Orlando, Kissimmee, Lake Buena Vista, Celebration, and commuter areas.",
              },
              {
                title: "One call, not an app",
                text: "No app downloads, no account signups. Call the number and a technician gets dispatched.",
              },
            ].map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Orlando roadside assistance questions.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Straight answers about how RoadZone Plus helps drivers across Orlando and
              Central Florida — availability, coverage, and how to get help fast.
            </p>
          </div>

          <div className="grid gap-4">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="card-solid p-6">
                <h3 className="text-lg font-black text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/70">{site.tagline}</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Stranded in Central Florida? Call RoadZone Plus.
            </h2>
          </div>
          <a href={site.phoneHref} className="btn border-white bg-white text-road-black hover:bg-white/90">
            <PhoneCall aria-hidden="true" size={20} />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
