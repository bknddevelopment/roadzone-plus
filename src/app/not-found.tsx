import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] bg-road-black">
      <div className="container max-w-3xl">
        <p className="text-sm font-black uppercase text-road-red">Page not found</p>
        <h1 className="mt-5 text-5xl font-black text-white">Need roadside help?</h1>
        <p className="mt-5 text-lg leading-8 text-white/66">
          The page you requested does not exist, but RoadZone Plus can still be reached
          24/7 by phone.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn btn-primary">
            <PhoneCall aria-hidden="true" size={18} />
            Call {site.phoneDisplay}
          </a>
          <Link href="/" className="btn btn-secondary">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
