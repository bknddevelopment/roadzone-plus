import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  DollarSign,
  Info,
  KeyRound,
  PhoneCall,
  Route,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/car-key-replacement-cost-orlando";
const title = "Car Key Replacement Cost in Orlando (2026 Guide)";
const description =
  "What car key replacement costs in 2026: published ranges for basic, transponder, flip, laser-cut and smart keys, dealer vs locksmith, lost-key costs, and Orlando next steps.";
const updatedIso = "2026-10-23";
const updatedLabel = "October 23, 2026";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    type: "article",
    images: [
      {
        url: "/visuals/car-key-cost/remote-key-at-car-door.webp",
        width: 1600,
        height: 1066,
        alt: "A hand turning a remote-head car key in a white car's door lock",
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every dollar figure on this page comes from a named, dated outside source
// (see `sources` below). None of them is a RoadZone Plus price. The owner has
// not given RoadZone a key price, so the page never shows one.
const sources = {
  kbb: {
    name: "Kelley Blue Book: Key Fob Replacement: What You Need to Know (July 14, 2025)",
    short: "Kelley Blue Book, Jul 2025",
    href: "https://www.kbb.com/car-advice/key-fob-replacement/",
    note: "Dealer quotes gathered nationwide, a cost table by key type, programming and proof-of-ownership rules, DIY and insurance notes.",
  },
  carfax: {
    name: "Carfax: Replacing a Lost Car Key or Fob (March 5, 2025)",
    short: "Carfax, Mar 2025",
    href: "https://www.carfax.com/maintenance/lost-car-key-fob-replacement",
    note: "Ranges for basic, transponder, switchblade and smart keys, and what happens when you lose a smart key with no backup.",
  },
  edmunds: {
    name: "Edmunds: Guide to Replacing Your Key Fob (March 12, 2025)",
    short: "Edmunds, Mar 2025",
    href: "https://www.edmunds.com/car-maintenance/the-high-cost-of-losing-your-keys.html",
    note: "Southern California dealer quotes for Honda, Ford and Subaru keys, laser-cut and switchblade costs, the cost of losing every key, and the VIN question.",
  },
  autozone: {
    name: "AutoZone: How Much Does a New Car Key Cost? (June 5, 2025)",
    short: "AutoZone, Jun 2025",
    href: "https://www.autozone.com/diy/electrical/how-much-does-a-new-car-key-cost",
    note: "Ranges for traditional, transponder and smart keys, programming and towing add-ons, and AutoZone's own answer on key cutting and programming.",
  },
};

type SourceKey = keyof typeof sources;

const keyTypeCosts: Array<{
  key: string;
  whatItIs: string;
  range: string;
  basis: string;
  cite: SourceKey[];
}> = [
  {
    key: "Basic metal key (no chip)",
    whatItIs: "An all-metal key, usually on older cars. Nothing to program.",
    range: "$5–$15 (copy); up to $100 cut by a locksmith or dealer",
    basis:
      "Kelley Blue Book lists $5–$15. Carfax says a hardware-store copy from a spare should cost under $10. AutoZone puts a cut replacement at $25–$100.",
    cite: ["kbb", "carfax", "autozone"],
  },
  {
    key: "Transponder (chip) key",
    whatItIs: "A key with a security chip in the head. The car will not start until the chip is programmed.",
    range: "$125–$250",
    basis:
      "Kelley Blue Book: $50–$100 for the key plus $75–$150 to program it. AutoZone: $100–$250. Carfax: can reach $250.",
    cite: ["kbb", "autozone", "carfax"],
  },
  {
    key: "Remote-head or flip (switchblade) key",
    whatItIs: "A key and lock/unlock remote in one piece. The blade may fold into the fob.",
    range: "$150–$300",
    basis:
      "Kelley Blue Book lists a switchblade fob at $150–$300. Carfax says $200–$300. Edmunds says dealers typically start around $200 with programming.",
    cite: ["kbb", "carfax", "edmunds"],
  },
  {
    key: "Laser-cut (sidewinder) key",
    whatItIs: "A thicker blade cut on its face. It needs a special cutting machine and has a chip to program.",
    range: "$150–$300",
    basis:
      "Edmunds: $150–$300 with labor for an all-in-one laser-cut key, typically at the dealer.",
    cite: ["edmunds"],
  },
  {
    key: "Smart key / push-to-start fob",
    whatItIs: "Stays in your pocket. You start the car with a button.",
    range: "$200–$500",
    basis:
      "Kelley Blue Book: $200–$400. Carfax: $220–$500. AutoZone: $200–$500 or more. Some luxury fobs cost more.",
    cite: ["kbb", "carfax", "autozone"],
  },
  {
    key: "Just the fob battery",
    whatItIs: "A coin battery inside the fob. Weak range or a 'key not detected' message can mean it is low.",
    range: "$10 or less",
    basis:
      "Kelley Blue Book says these batteries generally cost $10 or less, and some fobs take two.",
    cite: ["kbb"],
  },
];

const whoToCall: Array<{
  option: string;
  whenItFits: string;
  watchOut: string;
  cite: SourceKey[];
  link?: { href: string; label: string };
}> = [
  {
    option: "Car dealer",
    whenItFits:
      "Newer cars, many smart keys and some laser-cut keys. Dealers use factory parts.",
    watchOut:
      "Usually the most expensive route. Every dealer Kelley Blue Book surveyed wanted proof of ownership. If no key works, the car may need a tow to the dealer, and an ordered key can take days.",
    cite: ["kbb", "carfax"],
  },
  {
    option: "Automotive locksmith",
    whenItFits:
      "Many transponder, flip and older keys. Many locksmiths are mobile and come to the car.",
    watchOut:
      "Kelley Blue Book puts the saving at about 10% to 25% versus a dealer. A locksmith will likely need a second working fob to program some smart keys.",
    cite: ["kbb"],
  },
  {
    option: "Mobile key programming (RoadZone Plus)",
    whenItFits:
      "A key or fob that needs programming on a vehicle RoadZone can work on, when you would rather not move the car.",
    watchOut:
      "RoadZone Plus offers key and fob programming support for compatible vehicles only. Call with the year, make, model and key type to ask whether yours is one we can handle.",
    cite: [],
    link: { href: "/services/smart-key-programming", label: "Smart key programming" },
  },
  {
    option: "Parts store",
    whenItFits: "Buying a battery or checking what key your car uses.",
    watchOut:
      "AutoZone's own guide says it does not currently provide key cutting or programming. Call the store before you drive there.",
    cite: ["autozone"],
  },
  {
    option: "Buy a fob online and program it",
    whenItFits: "Some older cars allow owner programming with a button-and-ignition sequence.",
    watchOut:
      "Kelley Blue Book cites $50–$100 for an aftermarket fob plus about $50 for a programmer, with a risk of failed programming and warranty trouble.",
    cite: ["kbb", "edmunds"],
  },
];

const dealerQuotes = [
  {
    vehicle: "2017 Honda Accord",
    key: "Key fob",
    quote: "As little as $150 at a dealer",
    source: "kbb" as SourceKey,
  },
  {
    vehicle: "2018 Honda Accord",
    key: "Smart key",
    quote: "About $300: $150 for the key and blade, $120–$140 to program",
    source: "edmunds" as SourceKey,
  },
  {
    vehicle: "2020 Toyota Sienna",
    key: "Key fob",
    quote: "About $200–$400, similar to the Forester",
    source: "kbb" as SourceKey,
  },
  {
    vehicle: "2020 Subaru Forester",
    key: "Push-button-start fob",
    quote: "About $200–$400",
    source: "kbb" as SourceKey,
  },
  {
    vehicle: "2016 Subaru Impreza",
    key: "Remote combo key",
    quote: "$250–$300 with programming",
    source: "edmunds" as SourceKey,
  },
  {
    vehicle: "2017 Ford F-150",
    key: "Keyless fob",
    quote: "About $180 for the fob plus $190 to program",
    source: "edmunds" as SourceKey,
  },
  {
    vehicle: "2023 BMW X7",
    key: "Smart key",
    quote: "About $500 to replace and program",
    source: "kbb" as SourceKey,
  },
];

const orlandoSituations = [
  {
    title: "The key is locked inside the car",
    text: "You do not need a new key. You need the door opened without damage. That is a lockout call, not a replacement.",
    href: "/car-lockout-service-orlando",
    label: "Car lockout help in Orlando",
  },
  {
    title: "It is a rental car",
    text: "Rental companies usually control replacement keys for their own cars. Call the rental company about a lost key. RoadZone can still help with a lockout or fob trouble.",
    href: "/locked-keys-in-rental-car-orlando",
    label: "Rental car key help",
  },
  {
    title: "The fob stopped working but you still have it",
    text: "Check the fob battery and the hidden backup key first. A dead fob battery is a cheap fix, not a new key.",
    href: "/key-fob-not-working-orlando",
    label: "Key fob not working guide",
  },
  {
    title: "Your only key is gone",
    text: "This is the expensive case. Find your registration or title before you call anyone, and ask on the phone whether the provider can come to the car or needs it towed.",
    href: "/services/smart-key-programming",
    label: "Ask about your key",
  },
];

const savingSteps = [
  "Try a new fob battery before paying for a new fob. Kelley Blue Book says these batteries usually cost $10 or less.",
  "Use your spare if you have one, and get a second key made while you still have a working one. Edmunds' advice is to get the spare now, on your terms, not in an emergency.",
  "Keep your registration or title handy. Dealers in Kelley Blue Book's survey would not program a fob without proof of ownership.",
  "Check your insurance and warranty. Kelley Blue Book notes insurance may pay for a fob, but the claim counts against your deductible.",
  "Ask for the full price on the phone: key or fob, cutting, programming and any trip or tow charge.",
];

const faqs = [
  {
    question: "How much does car key replacement cost?",
    answer:
      "It depends on the key. Published 2025 ranges run from under $10 to copy a basic metal key to about $200–$500 for a push-to-start smart key. A transponder (chip) key is about $125–$250 and a flip or switchblade key about $150–$300 (Kelley Blue Book, Carfax, AutoZone). These are national ranges, not RoadZone Plus prices.",
  },
  {
    question: "How much is it to replace a car key if I lost all my keys?",
    answer:
      "More than making a spare. With no working key, Carfax says a lost smart key often means a tow to the dealer and proof of ownership, and an ordered key can take a few days. AutoZone says tows start around $50. Edmunds warns that replacing the locks after losing every key can cost close to $1,000.",
  },
  {
    question: "Can AutoZone replace my car key?",
    answer:
      "AutoZone's own key-cost guide (June 2025) says it does not currently provide key cutting or programming services. Call your local store before you go.",
  },
  {
    question: "Can I replace a key fob myself?",
    answer:
      "Sometimes. Edmunds and Carfax say some automakers let owners program a new fob with a sequence of ignition turns and button presses listed in the owner's manual. Kelley Blue Book warns that DIY fobs and programmers can fail and may cause warranty problems.",
  },
  {
    question: "Can a locksmith make a car key from the VIN?",
    answer:
      "Yes, according to Edmunds, but you will need to show proof of ownership, and some newer vehicles must be present when the key is cut.",
  },
  {
    question: "Why are key fobs so expensive?",
    answer:
      "Carfax says most keys today have electronic parts that pair them to one specific vehicle and must be programmed before they work. Edmunds adds that a replacement smart key must be bought from a dealer or a factory parts reseller.",
  },
  {
    question: "Does car insurance pay for a lost key?",
    answer:
      "It may. Kelley Blue Book notes that insurance can cover a fob, but the claim counts against your deductible, so it may not make sense if the fob costs less than the deductible. Check your policy and warranty first.",
  },
  {
    question: "Can RoadZone Plus program my key in Orlando?",
    answer:
      "RoadZone Plus offers smart key and key fob programming support for compatible vehicles. Whether we can handle yours depends on the year, make, model and key type. Call (407) 222-2739 with those details and we will tell you on the call whether we can help or whether a dealer or locksmith is the better route.",
  },
];

function SourceTags({ keys }: { keys: SourceKey[] }) {
  if (keys.length === 0) return null;
  return (
    <span className="mt-2 block text-xs leading-5 text-white/48">
      Source:{" "}
      {keys.map((key, index) => (
        <span key={key}>
          {index > 0 ? ", " : null}
          <a
            href={sources[key].href}
            className="underline decoration-white/30 underline-offset-2 hover:text-white"
            rel="noreferrer"
            target="_blank"
          >
            {sources[key].short}
          </a>
        </span>
      ))}
    </span>
  );
}

export default function CarKeyReplacementCostPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    headline: "How Much Does Car Key Replacement Cost in Orlando?",
    description,
    datePublished: updatedIso,
    dateModified: updatedIso,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/visuals/car-key-cost/remote-key-at-car-door.webp"),
      width: 1600,
      height: 1066,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@id": businessId,
    },
    about: [
      { "@type": "Thing", name: "Car key replacement cost" },
      { "@type": "Thing", name: "Key fob programming" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Car Key Replacement Cost in Orlando", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, faqSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <DollarSign aria-hidden="true" size={16} />
              Orlando key cost guide
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              How Much Does Car Key Replacement Cost in Orlando?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Most car keys cost between about{" "}
              <span className="font-black text-white">$10 and $500</span> to replace,
              and the key type decides where you land. Published 2025 ranges put a chip
              (transponder) key at <span className="font-black text-white">$125–$250</span>{" "}
              and a push-to-start smart key at{" "}
              <span className="font-black text-white">$200–$500</span>. Losing every key
              costs the most. These are national figures from Kelley Blue Book, Carfax,
              Edmunds and AutoZone, not RoadZone Plus prices.
            </p>
            <p className="mt-4 text-sm font-bold text-white/48">
              Updated <time dateTime={updatedIso}>{updatedLabel}</time> ·{" "}
              <a href="#sources" className="underline decoration-white/30 underline-offset-2 hover:text-white">
                See every source
              </a>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/smart-key-programming" className="btn btn-secondary">
                Smart Key Programming
              </Link>
            </div>
          </div>

          <aside className="card overflow-hidden bg-panel">
            <Image
              src="/visuals/car-key-cost/remote-key-at-car-door.webp"
              alt="A hand turning a remote-head car key in a white car's door lock"
              width={1600}
              height={1066}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="text-sm font-black uppercase text-safety-yellow">
                Stuck with a key problem now?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                Call to ask whether RoadZone Plus can program your key. Have the year,
                make, model and key type ready.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 flex items-center gap-3 text-2xl font-black text-white"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="cost-by-key-type" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wallet aria-hidden="true" size={16} />
              Cost by key type
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What each kind of car key costs to replace.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Find your key in the first column. The range combines the key, cutting and
              programming where the source gives a total. These are published national
              ranges, not RoadZone Plus quotes, and dealers usually sit at the top of them.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Car key replacement cost by key type, with published sources
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Key type
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Published range
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Where the number comes from
                  </th>
                </tr>
              </thead>
              <tbody>
                {keyTypeCosts.map((row, index) => (
                  <tr
                    key={row.key}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[30%] md:p-5">
                      <span className="block font-black text-white">{row.key}</span>
                      <span className="mt-2 block text-sm font-normal leading-6 text-white/60">
                        {row.whatItIs}
                      </span>
                    </th>
                    <td className="mt-3 block align-top md:mt-0 md:table-cell md:w-[22%] md:p-5">
                      <span className="text-xs font-black uppercase text-white/42 md:hidden">
                        Published range:{" "}
                      </span>
                      <span className="font-black text-safety-yellow">{row.range}</span>
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      {row.basis}
                      <SourceTags keys={row.cite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Image
              src="/visuals/car-key-cost/flip-key-with-remote.webp"
              alt="A black flip key with lock, unlock and trunk buttons and its metal blade folded out"
              width={1200}
              height={799}
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
            <figcaption className="text-base leading-8 text-white/66">
              <span className="block text-xl font-black text-white">
                How to tell which key you have
              </span>
              A plain metal key with no plastic head is the cheap case. Since the mid- to
              late 1990s, many keys carry a security chip in the plastic head (Edmunds).
              Buttons on the head mean a remote, and a blade that
              folds out means a flip or switchblade key like this one. If you start the
              car with a button and never insert a key, you have a smart key. Your
              owner&apos;s manual names the type.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="dealer-vs-locksmith" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Dealer vs locksmith vs mobile
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Who to call for a replacement key in Orlando.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The same key can cost very different amounts depending on who makes it and
              whether the car has to be towed there. Here is how the options compare.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            {whoToCall.map((item, index) => (
              <div
                key={item.option}
                className={`grid gap-4 bg-black/20 p-5 md:grid-cols-[0.7fr_1fr_1.3fr] ${
                  index > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Option</p>
                  <p className="mt-2 font-black text-white">{item.option}</p>
                  {item.link ? (
                    <Link
                      href={item.link.href}
                      className="mt-2 inline-flex items-center gap-2 text-sm font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200"
                    >
                      {item.link.label}
                    </Link>
                  ) : null}
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">When it fits</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.whenItFits}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white/42">Watch out for</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.watchOut}</p>
                  <SourceTags keys={item.cite} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lost-all-keys" className="section bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <KeyRound aria-hidden="true" size={16} />
              Spare key vs all keys lost
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Losing your only key is what makes it expensive.
            </h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-white/66">
              <p>
                Copying a key you still have is the cheap job. When every key is gone,
                the new one has to be made and paired with the car from scratch.
              </p>
              <p>
                Carfax says losing a smart key with no backup often means having the car
                towed to a dealer and showing proof of ownership, and an ordered key can
                keep the car there for a few days. AutoZone says tow charges start around
                $50 and climb with distance. Edmunds warns that if you lose every key,
                replacing the car&apos;s locks can cost close to $1,000.
              </p>
              <p>
                That is why the best money you can spend is on a second key now, while one
                still works. Kelley Blue Book also notes a locksmith will likely need a
                second working fob to program some smart keys.
              </p>
            </div>
            <SourceTags keys={["carfax", "autozone", "edmunds", "kbb"]} />
          </div>

          <figure>
            <Image
              src="/visuals/car-key-cost/push-button-start.webp"
              alt="Close-up of a round START STOP push-button ignition on a car dashboard"
              width={1200}
              height={675}
              loading="lazy"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full rounded-md border border-white/10"
            />
            <figcaption className="mt-3 text-sm leading-6 text-white/56">
              A push-button start means a smart key, the most expensive type to replace
              when the last one is lost.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="orlando-situations" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Orlando situations
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Before you pay for a new key, check which problem you have.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Many Orlando key calls are not key replacements at all. A rental at a
              theme-park lot, a fob locked inside at a hotel, and a dead fob battery on
              I-4 each have a cheaper first step.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {orlandoSituations.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white hover:text-red-200"
                >
                  <CheckCircle2 aria-hidden="true" size={16} />
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dealer-quotes" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <DollarSign aria-hidden="true" size={16} />
              Real dealer quotes by make
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What dealers quoted for common cars.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Kelley Blue Book (2025, dealers nationwide) and Edmunds (2025, Southern
              California dealers) published these quotes. They show how much the make
              and key type move the price. They are not Orlando quotes and not RoadZone
              Plus prices.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Published dealer key quotes by vehicle</caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-4 text-xs font-black uppercase text-white/48">
                    Vehicle
                  </th>
                  <th scope="col" className="p-4 text-xs font-black uppercase text-white/48">
                    Key
                  </th>
                  <th scope="col" className="p-4 text-xs font-black uppercase text-white/48">
                    Published dealer quote
                  </th>
                  <th scope="col" className="p-4 text-xs font-black uppercase text-white/48">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {dealerQuotes.map((row, index) => (
                  <tr
                    key={`${row.vehicle}-${row.key}`}
                    className={`block bg-black/20 p-4 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block font-black text-white md:table-cell md:p-4">
                      {row.vehicle}
                    </th>
                    <td className="block text-sm text-white/60 md:table-cell md:p-4">
                      {row.key}
                    </td>
                    <td className="mt-1 block text-sm font-bold text-white/80 md:mt-0 md:table-cell md:p-4">
                      {row.quote}
                    </td>
                    <td className="block text-xs text-white/48 md:table-cell md:p-4">
                      <a
                        href={sources[row.source].href}
                        className="underline decoration-white/30 underline-offset-2 hover:text-white"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {sources[row.source].short}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="save-money" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Keep the cost down
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Five checks before you pay for a new key.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each of these can turn an expensive replacement into a cheap fix, or stop a
              surprise charge on the day.
            </p>
            <div className="mt-8">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call to ask about your key
              </a>
            </div>
          </div>

          <ol className="grid gap-4">
            {savingSteps.map((step, index) => (
              <li key={step} className="card-solid flex gap-4 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                  {index + 1}
                </span>
                <span className="text-sm leading-6 text-white/72">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="roadzone-key-help" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <PhoneCall aria-hidden="true" size={16} />
              Where RoadZone Plus fits
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Key programming help for compatible vehicles, without a membership.
            </h2>
          </div>
          <div className="grid gap-4 text-base leading-8 text-white/66">
            <p>
              RoadZone Plus is a 24/7 roadside company based at {site.address.street} in
              Orlando. We offer smart key and key fob programming support for compatible
              vehicles, plus lockout help when the key is stuck inside.
            </p>
            <p>
              Not every key can be done roadside. Call with the year, make, model, key type
              and any dashboard message. We will tell you on the call whether we can help,
              and the price before any work starts. If a dealer or locksmith is the better
              route for your key, we will say so.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/smart-key-programming" className="btn btn-secondary">
                About key programming
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Clock3 aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Car key cost questions</h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sources" className="section border-y border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Where the numbers come from.</h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each source below was read on {updatedLabel}. Prices change, and your own
              quote depends on your car, your key and who does the work.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {Object.values(sources).map((source) => (
              <a
                key={source.href}
                href={source.href}
                className="group rounded-md bg-white/6 p-4 text-sm leading-6 text-white/66 transition hover:bg-white/10 hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                <span className="block font-black text-white group-hover:text-red-200">
                  {source.name}
                </span>
                <span className="mt-1 block">{source.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-road-red py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/72">Key trouble in Orlando?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call to ask whether we can help with your key.
            </h2>
          </div>
          <a
            href={site.phoneHref}
            className="btn border border-white bg-white text-road-black hover:bg-white/90"
          >
            <PhoneCall aria-hidden="true" size={20} />
            {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
