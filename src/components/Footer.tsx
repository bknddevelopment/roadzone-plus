import Link from "next/link";
import { Clock3, MapPin, PhoneCall } from "lucide-react";
import { areas, services, site } from "@/data/site";
import { SiteLogo } from "@/components/SiteLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <SiteLogo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Fast, reliable roadside assistance for Orlando and Central Florida drivers.
              Call any time for lockouts, jumpstarts, tire changes, fuel delivery, wheel
              lock removal, battery help, and smart key support.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/72">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 font-bold text-white">
                <PhoneCall aria-hidden="true" size={17} />
                {site.phoneDisplay}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock3 aria-hidden="true" size={17} />
                {site.hours}
              </span>
              <address className="inline-flex items-start gap-2 not-italic">
                <MapPin aria-hidden="true" size={17} className="mt-0.5 shrink-0" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.state}{" "}
                  {site.address.zip}
                </span>
              </address>
            </div>
          </div>

          <div>
            <h2 className="footer-heading">Services</h2>
            <div className="mt-4 grid gap-2">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="footer-link">
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="footer-heading">Service Areas</h2>
            <div className="mt-4 grid gap-2">
              {areas.slice(0, 8).map((area) => (
                <Link key={area.slug} href={`/areas/${area.slug}`} className="footer-link">
                  {area.name}
                </Link>
              ))}
              <Link href="/theme-park-roadside-assistance" className="footer-link">
                Near the theme parks
              </Link>
              <Link href="/areas" className="footer-link font-bold text-white">
                View all areas
              </Link>
            </div>
          </div>

          <div>
            <h2 className="footer-heading">Fast Action</h2>
            <div className="mt-4 grid gap-3">
              <Link href="/services" className="footer-link">
                Compare services
              </Link>
              <Link href="/contact" className="footer-link">
                Contact RoadZone Plus
              </Link>
              <a href={site.phoneHref} className="btn btn-primary mt-2">
                <PhoneCall aria-hidden="true" size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
