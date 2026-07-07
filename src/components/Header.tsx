"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Fuel,
  KeyRound,
  MapPin,
  Menu,
  PhoneCall,
  Route,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import { areas, services, site } from "@/data/site";
import { SiteLogo } from "@/components/SiteLogo";

type HeaderLink = {
  href: string;
  label: string;
  description: string;
  Icon: LucideIcon;
  badge?: string;
};

const serviceIcons: Record<string, LucideIcon> = {
  jumpstart: BatteryCharging,
  "tire-change": Wrench,
  "fuel-delivery": Fuel,
  "auto-lockout": KeyRound,
  "wheel-lock-removal": Wrench,
  "battery-replacement": BatteryCharging,
  "smart-key-programming": KeyRound,
};

const serviceLinks: HeaderLink[] = services.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.shortName,
  description: service.emergencyFit,
  Icon: serviceIcons[service.slug] ?? ShieldCheck,
  badge: service.priority ? "Fast call" : undefined,
}));

const problemLinks: HeaderLink[] = [
  {
    href: "/ran-out-of-gas-on-i-4-orlando",
    label: "Ran Out of Gas on I-4",
    description: "Fuel delivery help for Orlando highways and expressways.",
    Icon: Fuel,
  },
  {
    href: "/flat-tire-on-i-4-orlando",
    label: "Flat Tire on I-4",
    description: "Roadside tire change guidance for Orlando highways and ramps.",
    Icon: Wrench,
  },
  {
    href: "/dead-battery-car-wont-start-orlando",
    label: "Dead Battery / Won't Start",
    description: "No-start help for batteries, jumpstarts, and parking-lot breakdowns.",
    Icon: BatteryCharging,
  },
  {
    href: "/locked-keys-in-rental-car-orlando",
    label: "Locked Keys in a Rental",
    description: "Visitor and rental-car lockout help near Orlando.",
    Icon: KeyRound,
  },
  {
    href: "/lost-wheel-lock-key-orlando",
    label: "Lost Wheel Lock Key",
    description: "Help when the spare cannot go on because the wheel is stuck.",
    Icon: Wrench,
  },
  {
    href: "/key-fob-not-working-orlando",
    label: "Key Fob Not Working",
    description: "Smart key, push-to-start, and key-not-detected help.",
    Icon: KeyRound,
  },
  {
    href: "/theme-park-roadside-assistance",
    label: "Theme Park Roadside Help",
    description: "Roadside support near Disney, Universal, hotels, and resorts.",
    Icon: Route,
  },
  {
    href: "/roadside-assistance-cost-orlando",
    label: "Roadside Cost Guide",
    description: "What one-time roadside help can cost around Orlando.",
    Icon: CircleDollarSign,
    badge: "No membership",
  },
];

const featuredAreaSlugs = [
  "orlando",
  "lake-buena-vista",
  "kissimmee",
  "celebration",
  "winter-garden",
  "ocoee",
  "altamonte-springs",
  "sanford",
  "university",
];

const featuredAreas = featuredAreaSlugs
  .map((slug) => areas.find((area) => area.slug === slug))
  .filter((area): area is (typeof areas)[number] => Boolean(area));

const areaLinks: HeaderLink[] = featuredAreas.map((area) => ({
  href: `/areas/${area.slug}`,
  label: area.name,
  description: area.emphasis,
  Icon: MapPin,
  badge: area.nearParks ? "Resort corridor" : undefined,
})).concat([
  {
    href: "/international-drive-roadside-assistance",
    label: "International Drive / Universal",
    description: "Visitor roadside help for I-Drive, Universal, hotels, and garages.",
    Icon: Route,
    badge: "Visitor corridor",
  },
  {
    href: "/orlando-airport-roadside-assistance",
    label: "Orlando Airport / MCO",
    description: "Airport-area help for MCO garages, rentals, hotels, and SR 528.",
    Icon: MapPin,
    badge: "Airport",
  },
]);

function DesktopDropdown({
  label,
  links,
  footerHref,
  footerLabel,
  footerText,
}: {
  label: string;
  links: HeaderLink[];
  footerHref: string;
  footerLabel: string;
  footerText: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={closeDropdown}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget)) {
          closeDropdown();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeDropdown();
        }
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 py-7 text-sm font-semibold text-white/76 transition hover:text-white"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={`transition ${isOpen ? "rotate-180" : ""}`}
          size={15}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition duration-150 ${
          isOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-md border border-white/12 bg-road-black/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="grid gap-2 sm:grid-cols-2">
            {links.map(({ href, label: itemLabel, description, Icon, badge }) => (
              <Link
                key={href}
                href={href}
                className="group/link rounded-md border border-white/8 bg-white/[0.04] p-3 transition hover:border-road-red/60 hover:bg-white/[0.07]"
                onClick={closeDropdown}
              >
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-road-black">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-black text-white">{itemLabel}</span>
                      {badge ? (
                        <span className="rounded-md bg-road-red/18 px-2 py-0.5 text-[0.68rem] font-black uppercase text-red-100">
                          {badge}
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-white/58 group-hover/link:text-white/72">
                      {description}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <Link
            href={footerHref}
            className="mt-3 flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-white transition hover:border-road-red/60 hover:bg-road-red/18"
            onClick={closeDropdown}
          >
            <span>{footerLabel}</span>
            <span className="text-xs font-semibold text-white/56">{footerText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileLinkList({
  links,
  onNavigate,
}: {
  links: HeaderLink[];
  onNavigate: () => void;
}) {
  return (
    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {links.map(({ href, label, description, Icon, badge }) => (
        <Link
          key={href}
          href={href}
          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-white/80"
          onClick={onNavigate}
        >
          <span className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-road-black">
              <Icon aria-hidden="true" size={17} />
            </span>
            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-black text-white">{label}</span>
                {badge ? (
                  <span className="rounded-md bg-road-red/18 px-2 py-0.5 text-[0.66rem] font-black uppercase text-red-100">
                    {badge}
                  </span>
                ) : null}
              </span>
              <span className="mt-1 block text-xs leading-5 text-white/58">{description}</span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <SiteLogo />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          <DesktopDropdown
            label="Services"
            links={serviceLinks}
            footerHref="/services"
            footerLabel="View All Roadside Services"
            footerText="Jumpstarts, tires, fuel, lockouts"
          />
          <DesktopDropdown
            label="Emergency Help"
            links={problemLinks}
            footerHref="/roadside-assistance-cost-orlando"
            footerLabel="Compare Roadside Costs"
            footerText="Clear pay-as-you-go guidance"
          />
          <DesktopDropdown
            label="Areas"
            links={areaLinks}
            footerHref="/areas"
            footerLabel="View All Service Areas"
            footerText="Central Florida coverage"
          />
          <Link
            href="/roadside-assistance-cost-orlando"
            className="text-sm font-semibold text-white/76 transition hover:text-white"
          >
            Cost Guide
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-white/76 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center lg:flex">
          <a href={site.phoneHref} className="btn btn-primary px-4 py-2.5">
            <PhoneCall aria-hidden="true" size={18} />
            <span className="grid text-left leading-none">
              <span>Call Now</span>
              <span className="mt-1 text-xs font-bold text-white/82">{site.phoneDisplay}</span>
            </span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/14 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <div className="hidden border-t border-white/8 bg-white/[0.035] lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs font-bold text-white/60 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <Clock3 aria-hidden="true" size={14} />
            Open 24/7 | No membership | Orlando & Central Florida
          </span>
          <span>Jumpstarts | Lockouts | Tires | Fuel | Key Fobs</span>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <div className="grid gap-2">
              <Link
                href="/services"
                className="rounded-md px-3 py-3 text-base font-semibold text-white/80 hover:bg-white/8 hover:text-white"
                onClick={closeMenu}
              >
                All Services
              </Link>
              <Link
                href="/areas"
                className="rounded-md px-3 py-3 text-base font-semibold text-white/80 hover:bg-white/8 hover:text-white"
                onClick={closeMenu}
              >
                Service Areas
              </Link>
              <Link
                href="/roadside-assistance-cost-orlando"
                className="rounded-md px-3 py-3 text-base font-semibold text-white/80 hover:bg-white/8 hover:text-white"
                onClick={closeMenu}
              >
                Cost Guide
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-3 text-base font-semibold text-white/80 hover:bg-white/8 hover:text-white"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>

            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-black text-white">
              <span className="flex items-center gap-2">
                <Clock3 aria-hidden="true" size={17} />
                Open 24/7 | No membership | Orlando & Central Florida
              </span>
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-bold uppercase text-white/46">Fast services</p>
              <MobileLinkList links={serviceLinks} onNavigate={closeMenu} />
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-bold uppercase text-white/46">Emergency help</p>
              <MobileLinkList links={problemLinks} onNavigate={closeMenu} />
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-bold uppercase text-white/46">Primary areas</p>
              <MobileLinkList links={areaLinks} onNavigate={closeMenu} />
            </div>

            <a href={site.phoneHref} className="btn btn-primary mt-6 w-full">
              <PhoneCall aria-hidden="true" size={18} />
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
