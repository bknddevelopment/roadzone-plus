import { MapPin, PhoneCall } from "lucide-react";
import { site } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-black/95 p-3 shadow-[0_-18px_40px_rgba(0,0,0,0.34)] backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <a href={site.phoneHref} className="btn btn-primary min-h-12">
          <PhoneCall aria-hidden="true" size={18} />
          Call 24/7
        </a>
        <a
          href="/areas"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/14 text-white"
          aria-label="View service areas"
        >
          <MapPin aria-hidden="true" size={20} />
        </a>
      </div>
    </div>
  );
}
