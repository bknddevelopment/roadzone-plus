import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import { areas, services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact RoadZone Plus",
  description:
    "Call RoadZone Plus at (407) 222-2739 for 24/7 roadside assistance in Orlando and Central Florida.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              Contact
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Call RoadZone Plus for 24/7 roadside assistance.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              The fastest way to get help is to call. Share your exact location, your
              vehicle, and what happened so RoadZone Plus can send the right roadside
              support.
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
            <h2 className="text-2xl font-black text-white">Emergency contact</h2>
            <div className="mt-6 grid gap-4">
              <a href={site.phoneHref} className="rounded-md bg-road-red p-5 text-white">
                <span className="flex items-center gap-3 text-sm font-black uppercase text-white/72">
                  <PhoneCall aria-hidden="true" size={18} />
                  Call now
                </span>
                <span className="mt-2 block text-3xl font-black">{site.phoneDisplay}</span>
              </a>
              <div className="rounded-md border border-white/10 bg-black/30 p-5">
                <span className="flex items-center gap-3 text-sm font-black uppercase text-white/48">
                  <Clock3 aria-hidden="true" size={18} />
                  Hours
                </span>
                <p className="mt-2 text-xl font-black text-white">{site.hours}</p>
              </div>
              <div className="rounded-md border border-white/10 bg-black/30 p-5">
                <span className="flex items-center gap-3 text-sm font-black uppercase text-white/48">
                  <MapPin aria-hidden="true" size={18} />
                  Base
                </span>
                <p className="mt-2 text-base font-bold leading-7 text-white">
                  {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              What to tell dispatch
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Have these details ready.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Your closest address, parking lot, intersection, or mile marker",
              "Vehicle year, make, model, and color",
              "Which service you need",
              "Whether the vehicle is in a safe spot",
            ].map((item) => (
              <div key={item} className="card-solid p-6">
                <p className="text-base font-bold leading-7 text-white/76">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black text-white">Top services</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-md border border-white/10 bg-black/28 p-4 text-sm font-bold text-white/74 hover:border-road-red/60 hover:text-white"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white">Primary areas</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {areas.slice(0, 8).map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="rounded-md border border-white/10 bg-black/28 p-4 text-sm font-bold text-white/74 hover:border-road-red/60 hover:text-white"
                >
                  {area.name}, FL
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
