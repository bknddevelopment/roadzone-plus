import { MapPin, PhoneCall } from "lucide-react";
import { site } from "@/data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-black/95 p-3 shadow-[0_-18px_40px_rgba(0,0,0,0.34)] backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <a href={site.phoneHref} className="btn btn-primary min-h-12 leading-tight">
          <PhoneCall aria-hidden="true" size={18} />
          <span className="flex flex-col items-start">
            <span>Call RoadZone Plus</span>
            <span className="text-xs font-bold opacity-80">{site.phoneDisplay}</span>
          </span>
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
