"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { areas, services, site } from "@/data/site";
import { SiteLogo } from "@/components/SiteLogo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const priorityServices = services.filter((service) => service.priority).slice(0, 5);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <SiteLogo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/76 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="btn btn-secondary">
            <PhoneCall aria-hidden="true" size={18} />
            {site.phoneDisplay}
          </a>
          <a href={site.phoneHref} className="btn btn-primary">
            Call Now
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

      {open ? (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-base font-semibold text-white/80 hover:bg-white/8 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-bold uppercase text-white/46">Fast services</p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {priorityServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-md border border-white/10 px-3 py-3 text-sm font-semibold text-white/76"
                    onClick={() => setOpen(false)}
                  >
                    {service.shortName}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-bold uppercase text-white/46">Primary areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {areas.slice(0, 6).map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="rounded-md bg-white/8 px-3 py-2 text-sm font-semibold text-white/72"
                    onClick={() => setOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
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
