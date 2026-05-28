import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
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

export default function HomePage() {
  return (
    <>
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
              RoadZone Plus
              <span className="mt-3 block text-road-red"> roadside help now.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl animate-in-delay-2">
              Fast jumpstarts, tire changes, fuel delivery, auto lockouts, wheel lock
              removal, battery replacement, and smart key programming. One call gets a
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
