import type { Metadata } from "next";
import Link from "next/link";
import {
  BatteryCharging,
  CheckCircle2,
  Fuel,
  KeyRound,
  PhoneCall,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Roadside Assistance Services in Orlando, FL",
  description:
    "See RoadZone Plus roadside assistance services: jumpstarts, tire changes, fuel delivery, auto lockouts, wheel lock removal, battery replacement, and smart key programming.",
  alternates: {
    canonical: "/services",
  },
};

const serviceIcons = {
  jumpstart: BatteryCharging,
  "tire-change": Wrench,
  "fuel-delivery": Fuel,
  "auto-lockout": KeyRound,
  "wheel-lock-removal": Wrench,
  "battery-replacement": BatteryCharging,
  "smart-key-programming": KeyRound,
};

export default function ServicesPage() {
  return (
    <>
      <section className="section border-b border-white/10 bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              24/7 roadside services
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Roadside assistance services in Orlando.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              RoadZone Plus is built for urgent driver needs: dead batteries, flat
              tires, empty tanks, locked cars, missing wheel lock keys, and smart key
              problems. Call first for the fastest help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/areas" className="btn btn-secondary">
                View Areas Served
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-asphalt">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] ?? ShieldCheck;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-solid group grid gap-5 p-6 transition hover:-translate-y-1 hover:border-road-red/70 sm:grid-cols-[auto_1fr]"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-road-red text-white">
                    <Icon aria-hidden="true" size={25} />
                  </span>
                  <span>
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="text-2xl font-black text-white">{service.name}</span>
                      {service.priority ? (
                        <span className="rounded-md bg-safety-yellow px-2 py-1 text-xs font-black uppercase text-black">
                          High intent
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-white/64">
                      {service.summary}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white group-hover:text-red-200">
                      <CheckCircle2 aria-hidden="true" size={17} />
                      See details
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
