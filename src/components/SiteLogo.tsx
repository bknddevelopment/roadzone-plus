import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function SiteLogo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
      <Image
        src="/brand/roadzone-plus-logo.png"
        alt={`${site.name} logo`}
        width={1575}
        height={430}
        priority
        className="h-12 w-auto max-w-[210px] rounded bg-white object-contain sm:h-14 sm:max-w-[240px]"
      />
    </Link>
  );
}
