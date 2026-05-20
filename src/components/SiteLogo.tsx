import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <Image
        src="/brand/roadzone-plus-logo.svg"
        alt=""
        aria-hidden="true"
        width={52}
        height={52}
        priority
        className="h-11 w-11"
      />
      <span className="leading-none">
        <span className="block text-base font-black text-white">{site.name}</span>
        <span className="block pt-1 text-xs font-semibold uppercase text-white/60">
          24/7 roadside help
        </span>
      </span>
    </Link>
  );
}
