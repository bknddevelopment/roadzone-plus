import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  PhoneCall,
  Route,
  Wrench,
} from "lucide-react";
import { site } from "@/data/site";

// Orlando-only sections for /areas/orlando. Every public-program fact below comes
// from the official pages listed in `sources`, read on 2026-11-13.

type SourceKey =
  | "cfxRoadside"
  | "cfxExpressways"
  | "fdotRoadRangers"
  | "turnpikeRangers"
  | "flhsmvMoveOver"
  | "flhsmvBulletin";

const sources: Record<SourceKey, { name: string; href: string; note: string }> = {
  cfxRoadside: {
    name: "Central Florida Expressway Authority: Roadside Assistance, Dial *347",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Names the toll roads where CFX Road Rangers help (SR 408, 414, 417, 429, 451 and 528) and says they help more than 4,000 motorists every month.",
  },
  cfxExpressways: {
    name: "Central Florida Expressway Authority: Using Our Expressways",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/using-our-expressways/",
    note: "Gives Road Ranger hours on CFX expressways as 6 AM to 8 PM, seven days a week, on a 125-mile toll road network.",
  },
  fdotRoadRangers: {
    name: "Florida Department of Transportation: Road Rangers",
    href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
    note: "Describes limited no-cost highway assistance on congested and high-incident freeway stretches, lists the services, and reports more than 6.1 million service assists since 2000.",
  },
  turnpikeRangers: {
    name: "Florida's Turnpike: Road Rangers Safety Patrol",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Lists the free services (tire change with your spare, up to 2 gallons of gas, jump starts, repairs under 15 minutes) and the patrol hours for each Turnpike-run road.",
  },
  flhsmvMoveOver: {
    name: "Florida Highway Safety and Motor Vehicles: Move Over, Florida!",
    href: "https://www.flhsmv.gov/safety-center/driving-safety/move-over/",
    note: "Explains the Move Over law, its January 1, 2025 expansion to disabled vehicles, and the 2024 crash and citation counts.",
  },
  flhsmvBulletin: {
    name: "Florida Highway Safety and Motor Vehicles: Move Over bulletin, January 2, 2025",
    href: "https://content.govdelivery.com/accounts/FLHSMV/bulletins/3c7a9f5",
    note: "Gives the safety steps for disabled motorists: be seen, use the right shoulder, keep your seatbelt on, and never walk into the roadway.",
  },
};

const roadRows: Array<{
  where: string;
  detail: string;
  call: string;
  callNote: string;
  /** Show a tap-to-call RoadZone Plus link under the label. */
  callRoadZone?: boolean;
  link?: { href: string; label: string };
  sourceKeys: SourceKey[];
}> = [
  {
    where: "CFX toll roads: SR 408, SR 414, SR 417, SR 429, SR 451 and SR 528",
    detail:
      "Road Rangers on the Central Florida Expressway Authority network help more than 4,000 drivers a month with minor breakdowns such as a flat tire or an empty tank. CFX lists their hours as 6 AM to 8 PM, seven days a week. Some stretches of SR 417, SR 429 and SR 528 are run by Florida's Turnpike instead; see the next row.",
    call: "*347 from 6 AM to 8 PM",
    callNote: "Outside those hours, or if no Road Ranger can reach you, call RoadZone Plus.",
    sourceKeys: ["cfxRoadside", "cfxExpressways"],
  },
  {
    where:
      "Turnpike-run expressways: SR 417 Southern Connector and Seminole Expressway, SR 429 Western Beltway, SR 528 mileposts 0 to 8",
    detail:
      "Florida's Turnpike lists Road Ranger hours of 6 AM to 10 PM, seven days a week, on these stretches. The free help covers a tire change with your own spare, up to 2 gallons of gas, a jump start, and repairs that take less than 15 minutes.",
    call: "*347 from 6 AM to 10 PM",
    callNote: "Outside those hours, or for a lockout or a battery that needs replacing, call RoadZone Plus.",
    sourceKeys: ["turnpikeRangers"],
  },
  {
    where: "Florida's Turnpike mainline through Orlando",
    detail:
      "The Turnpike lists its mainline Road Ranger patrol as 24 hours a day, seven days a week. Exits, service plazas, and what to do on the Orlando stretch are in our Turnpike guide.",
    call: "*347 first on the mainline",
    callNote: "Call RoadZone Plus once you are off the mainline or need a service the patrol does not list.",
    link: {
      href: "/roadside-assistance-florida-turnpike-orlando",
      label: "Roadside assistance on the Turnpike near Orlando",
    },
    sourceKeys: ["turnpikeRangers"],
  },
  {
    where: "I-4 and other state freeways",
    detail:
      "FDOT Road Rangers patrol congested and high-incident stretches of the freeway. FDOT lists flat tire changes, jump starts, minor repairs, emergency fuel, and clearing disabled vehicles from travel lanes, and publishes its patrol map and hours on its Road Ranger page.",
    call: "*347 if a patrol covers your spot",
    callNote: "For help at any hour, or once you exit to a ramp or a lot, call RoadZone Plus.",
    link: { href: "/road-rangers-orlando", label: "Road Rangers in Orlando, explained" },
    sourceKeys: ["fdotRoadRangers"],
  },
  {
    where:
      "Driveways, neighborhood streets, apartment communities, hotel and resort lots, parking garages, store and office lots",
    detail:
      "These are not highway patrol zones. And none of the published Road Ranger service lists (FDOT and Florida's Turnpike) includes car lockouts, battery replacement, wheel lock removal, or key fob programming, wherever the car is.",
    call: "RoadZone Plus",
    callNote:
      "Open 24 hours, 7 days a week. No membership or app needed, and the price is confirmed on the call before any work begins.",
    callRoadZone: true,
    sourceKeys: ["fdotRoadRangers", "turnpikeRangers"],
  },
  {
    where: "A crash, an injury, smoke or fire, or a car you cannot move out of a travel lane",
    detail:
      "Treat it as an emergency first. FDOT tells drivers in an emergency to call 911 immediately or *FHP (*347), and FLHSMV adds that *347 reaches the Florida Highway Patrol on Florida's highways.",
    call: "911, or *347 (*FHP)",
    callNote: "Call RoadZone Plus for the roadside fix once everyone is safe.",
    sourceKeys: ["fdotRoadRangers", "flhsmvBulletin"],
  },
];

const problemRows: Array<{
  problem: string;
  service: { href: string; label: string };
  next: { href: string; label: string };
}> = [
  {
    problem: "The car clicks, cranks slowly, or will not start",
    service: { href: "/services/jumpstart", label: "Jump start service" },
    next: { href: "/jump-start-cost-orlando", label: "What a jump start costs" },
  },
  {
    problem: "It starts after a jump but dies again, or the battery is old",
    service: { href: "/services/battery-replacement", label: "Battery replacement" },
    next: { href: "/car-battery-replacement-cost-orlando", label: "Battery replacement cost in Orlando" },
  },
  {
    problem: "Flat tire and a usable spare in the trunk",
    service: { href: "/services/tire-change", label: "Tire change" },
    next: { href: "/how-long-can-you-drive-on-a-spare-tire-orlando", label: "How far you can drive on the spare" },
  },
  {
    problem: "The spare is there, but a locking lug nut will not come off",
    service: { href: "/services/wheel-lock-removal", label: "Wheel lock removal" },
    next: { href: "/lost-wheel-lock-key-orlando", label: "Lost wheel lock key help" },
  },
  {
    problem: "Out of gas on a highway, a ramp, or a local road",
    service: { href: "/services/fuel-delivery", label: "Fuel delivery" },
    next: { href: "/ran-out-of-gas-on-i-4-orlando", label: "Ran out of gas on I-4" },
  },
  {
    problem: "Keys locked inside the car",
    service: { href: "/services/auto-lockout", label: "Car lockout service" },
    next: { href: "/car-lockout-cost-orlando", label: "What a car unlock costs" },
  },
  {
    problem: "Key fob dead, \"key not detected,\" or a smart key that needs programming",
    service: { href: "/services/smart-key-programming", label: "Smart key programming" },
    next: { href: "/car-key-replacement-cost-orlando", label: "Car key replacement cost" },
  },
];

const dispatchDetails: Array<{ place: string; say: string }> = [
  {
    place: "On I-4, a toll road, or the Turnpike",
    say: "Road name, direction of travel, the nearest exit number or mile marker, and which shoulder you are on.",
  },
  {
    place: "In a parking garage",
    say: "Garage name, level, row or section, and the entrance you used.",
  },
  {
    place: "At a hotel or resort",
    say: "Hotel name, which lot or tower, and the closest entrance or lobby.",
  },
  {
    place: "At an apartment community",
    say: "Community name, building number, and the gate code if the property is gated.",
  },
  {
    place: "At a store, office, or restaurant",
    say: "Business name, street, and which side of the building the car is on.",
  },
  {
    place: "About the vehicle",
    say: "Year, make, model, and color; what it is doing (clicking, no crank, flat, locked); and whether you have a spare and a wheel lock key.",
  },
];

const safetySteps: Array<{ heading: string; body: string }> = [
  {
    heading: "Be seen",
    body: "Pull off the road and turn on your hazard lights. Use a reflective vest, and reflective triangles or cones behind the car, if you carry them.",
  },
  {
    heading: "Pick the right spot",
    body: "If the car still moves, exit the highway and park where other drivers expect parked cars. If you must stop, use the right shoulder rather than the left, and avoid stopping on a bridge.",
  },
  {
    heading: "Stay buckled in if it is not safe outside",
    body: "If it is unsafe to get out, stay seated with your seatbelt on. If you do get out, use the side away from traffic, and never walk into the roadway to flag anyone down.",
  },
];

const linkClass =
  "font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200";

function SourceNote({ keys }: { keys: SourceKey[] }) {
  return (
    <p className="mt-3 text-xs leading-5 text-white/56">
      Source:{" "}
      {keys.map((key, index) => (
        <span key={key}>
          {index > 0 ? "; " : null}
          <a
            href={sources[key].href}
            className="underline decoration-white/30 underline-offset-2 hover:text-white"
            rel="noreferrer"
            target="_blank"
          >
            {sources[key].name}
          </a>
        </span>
      ))}
    </p>
  );
}

export function OrlandoRoadsideGuide() {
  return (
    <>
      <section id="who-to-call" className="section border-t border-white/10 bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Route aria-hidden="true" size={16} />
              Orlando, road by road
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Who to call for roadside assistance in Orlando, based on where you are stuck.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Orlando&apos;s free Road Ranger patrols are organized by road owner (FDOT,
              Florida&apos;s Turnpike, and the Central Florida Expressway Authority), each
              with its own roads and hours, and none of them patrols a driveway, a garage, or
              a hotel lot. Statewide, Road Rangers have made more than 6.1 million service assists
              since 2000, so use them where they patrol. Everywhere else, and at any hour,
              call RoadZone Plus.
            </p>
            <SourceNote keys={["fdotRoadRangers"]} />
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Who to call for roadside help in Orlando, by road or location, with patrol hours
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    Where you are
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    What is available
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/56">
                    Who to call
                  </th>
                </tr>
              </thead>
              <tbody>
                {roadRows.map((row, index) => (
                  <tr
                    key={row.where}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[28%] md:p-5">
                      <span className="block text-lg font-black leading-7 text-white">{row.where}</span>
                    </th>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      {row.detail}
                      {row.link ? (
                        <Link
                          href={row.link.href}
                          className="mt-2 flex min-h-11 items-center font-black text-white underline decoration-white/30 underline-offset-2 hover:text-red-200"
                        >
                          {row.link.label}
                        </Link>
                      ) : null}
                      <SourceNote keys={row.sourceKeys} />
                    </td>
                    <td className="mt-3 block align-top md:mt-0 md:table-cell md:w-[24%] md:p-5">
                      <span className="block text-lg font-black text-safety-yellow">{row.call}</span>
                      {row.callRoadZone ? (
                        <a
                          href={site.phoneHref}
                          className="mt-1 inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-lg font-black text-white hover:text-red-200"
                        >
                          <PhoneCall aria-hidden="true" size={18} className="shrink-0 text-road-red" />
                          {site.phoneDisplay}
                        </a>
                      ) : null}
                      <span className="mt-2 block text-sm leading-6 text-white/66">{row.callNote}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={site.phoneHref} className="btn btn-primary shrink-0">
              <PhoneCall aria-hidden="true" size={18} />
              Call {site.phoneDisplay}
            </a>
            <p className="text-sm leading-6 text-white/66">
              Not sure which row fits? Call and describe where you are. To check what is
              free before you pay, see{" "}
              <Link href="/free-roadside-assistance-orlando" className={linkClass}>
                free roadside assistance options in Orlando
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="match-the-problem" className="section border-t border-white/10 bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              Match the problem
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Which Orlando roadside service fits what your car is doing.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus comes to the car for each of these, and many calls end without a
              tow. Every card links to the service and to the guide that answers the next
              question, which is usually the cost.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problemRows.map((row) => (
              <li key={row.problem} className="card-solid p-6">
                <h3 className="text-lg font-black leading-7 text-white">{row.problem}</h3>
                <Link
                  href={row.service.href}
                  className="mt-4 flex min-h-11 items-center gap-2 text-sm font-black text-white hover:text-red-200"
                >
                  <CheckCircle2 aria-hidden="true" size={16} className="shrink-0 text-route-green" />
                  {row.service.label}
                </Link>
                <Link
                  href={row.next.href}
                  className="flex min-h-11 items-center text-sm font-bold text-white/72 underline decoration-white/30 underline-offset-2 hover:text-white"
                >
                  {row.next.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="what-to-say" className="section border-t border-white/10 bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <ClipboardList aria-hidden="true" size={16} />
              Before you call
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              What to tell dispatch so the technician finds your car.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              &quot;Orlando&quot; covers a lot of ground. These details are what turn a call
              into a dispatch, so have them ready and keep your phone on in case dispatch
              calls back to confirm.
            </p>
            <div className="mt-8">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          <dl className="grid gap-3">
            {dispatchDetails.map((item) => (
              <div key={item.place} className="card-solid p-5">
                <dt className="text-base font-black text-white">{item.place}</dt>
                <dd className="mt-2 text-sm leading-6 text-white/66">{item.say}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="wait-safely" className="section border-t border-white/10 bg-panel">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <AlertTriangle aria-hidden="true" size={16} />
              While you wait
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">Waiting safely on an Orlando road.</h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Since January 1, 2025, Florida&apos;s Move Over law also covers a disabled car
              with its hazard lights on: other drivers must move over a lane, or slow to 20
              mph below the posted limit if they cannot. In 2024 Florida recorded 205 crashes
              and more than 17,500 citations for drivers who failed to move over, so do not
              count on every driver doing it. The{" "}
              <Link href="/florida-move-over-law" className={linkClass}>
                Florida Move Over law guide
              </Link>{" "}
              has the details.
            </p>
            <SourceNote keys={["flhsmvMoveOver"]} />
          </div>

          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {safetySteps.map((step, index) => (
              <li key={step.heading} className="card-solid p-6">
                <span className="text-sm font-black uppercase text-safety-yellow">Step {index + 1}</span>
                <h3 className="mt-2 text-xl font-black text-white">{step.heading}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{step.body}</p>
              </li>
            ))}
          </ol>
          <SourceNote keys={["flhsmvBulletin"]} />
        </div>
      </section>

      <section id="sources" className="section border-t border-white/10 bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ExternalLink aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-3xl font-black text-white">
              Public sources for the patrol and safety facts on this page.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Checked November 13, 2026. RoadZone Plus is a private roadside company and does
              not operate the Road Ranger programs. The agencies below set patrol roads and
              hours, and they can change.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {Object.values(sources).map((source) => (
              <a
                key={source.href}
                href={source.href}
                className="group rounded-md border border-white/10 bg-black/22 p-5 text-sm leading-6 text-white/66 transition hover:border-road-red/60 hover:bg-white/8 hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-2 font-black text-white group-hover:text-red-200">
                  {source.name}
                  <ExternalLink aria-hidden="true" size={15} className="shrink-0" />
                </span>
                <span className="mt-2 block">{source.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
