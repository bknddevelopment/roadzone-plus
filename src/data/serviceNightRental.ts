// Night and rental-car guidance for the two service pages that answer most RoadZone Plus calls
// (tire change and jump start). Used only by src/app/services/[slug]/page.tsx.
// Every public figure below was read from its source on November 19, 2026.

export const serviceNightRentalLastModified = "2026-11-19T00:00:00.000Z";

export type NightRentalSource = {
  name: string;
  href: string;
  note: string;
};

export type NightRentalGuide = {
  eyebrow: string;
  heading: string;
  intro: string;
  night: { heading: string; body: string[]; tellUs: string[] };
  rental: { heading: string; body: string[]; tellUs: string[] };
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ href: string; label: string }>;
  sources: Array<"cfx" | "turnpike" | "aaaSpare">;
};

export const nightRentalSources: Record<"cfx" | "turnpike" | "aaaSpare", NightRentalSource> = {
  cfx: {
    name: "Central Florida Expressway Authority: Roadside Assistance, Dial *347 (read November 19, 2026)",
    href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
    note: "Road Rangers give free help along central Florida's toll roads, including SR 408, 417, 414, 429, 528 and 451; on patrol seven days a week, 6:00 AM to 10:00 PM.",
  },
  turnpike: {
    name: "Florida's Turnpike: Road Rangers Safety Patrol (read November 19, 2026)",
    href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
    note: "Free tire changes with the vehicle's spare and jump starts; 24 hours a day on the Turnpike mainline; 6 AM to 10 PM on the Beachline (SR 528, mileposts 0 to 8), the Southern Connector (SR 417, mileposts 0 to 10), the Seminole Expressway (SR 417, mileposts 38 to 55) and the Western Beltway (SR 429, mileposts 0 to 11).",
  },
  aaaSpare: {
    name: "AAA Newsroom: Spare Me! AAA Finds Nearly One-Third of New Vehicles are Missing a Spare Tire (October 18, 2017; read November 19, 2026)",
    href: "https://newsroom.aaa.com/2017/10/spare-aaa-finds-nearly-one-third-new-vehicles-missing-spare-tire/",
    note: "28 percent of 2017 model year vehicles do not come with a spare tire as standard equipment; tire-inflator kits cannot fix sidewall damage or blowouts.",
  },
};

const roadRangerHours =
  "On the Central Florida Expressway Authority's toll roads, including SR 408, 414, 417, 429, 451 and 528, the free Road Rangers patrol from 6:00 AM to 10:00 PM, seven days a week, according to CFX. Florida's Turnpike patrols its mainline 24 hours a day, but lists 6 AM to 10 PM for its own stretches of the Beachline, the Southern Connector, the Seminole Expressway and the Western Beltway.";

export const nightRentalGuides: Record<"tire-change" | "jumpstart", NightRentalGuide> = {
  "tire-change": {
    eyebrow: "Late-night and rental car flats",
    heading: "Flat tire after dark or in a rental car in Orlando",
    intro:
      "Two situations make an Orlando flat harder to sort out: it happens late at night, or it happens in a rental car. Here is who can help at what hour, what a rental may be missing, and what to tell RoadZone Plus so the right help arrives the first time.",
    night: {
      heading: "After 10 PM, the free toll-road patrols thin out",
      body: [
        roadRangerHours,
        "Florida's Turnpike lists its free Road Ranger tire change as a change with the vehicle's own spare, and Road Rangers work the highways they patrol. A flat in a hotel lot, an apartment complex, a parking garage or a driveway is outside their roads at any hour. RoadZone Plus takes tire change calls 24 hours a day at the roadside and at those addresses.",
      ],
      tellUs: [
        "The road and direction of travel, plus the nearest exit or mile marker, or the hotel or complex name and the section of the lot",
        "Whether the car is on a highway shoulder or off the road in a lot",
        "Whether the spare, the jack and the lug wrench are in the car",
        "Whether the wheels have a locking lug nut, and where its key is",
      ],
    },
    rental: {
      heading: "In a rental, check the trunk floor before you call",
      body: [
        "Lift the trunk floor or look under the cargo area before you call anyone. AAA found that 28 percent of 2017 model year vehicles had no spare tire as standard equipment. Some carry a tire-inflator kit instead, and AAA notes that those kits cannot fix sidewall damage or a blowout.",
        "If the rental has a usable spare, a roadside tire change gets you moving. If it has no spare, a roadside tire change is not possible: call the roadside number on your rental agreement or key tag and ask how the company handles a car with no spare. Either way, ask the rental company whether it will cover a local provider before you pay anyone.",
      ],
      tellUs: [
        "The rental company's name and the car's year, make, model and color",
        "Where the spare and jack are, if you found them",
        "Whether the wheel lock key is in the glove box or the console",
      ],
    },
    faqs: [
      {
        question: "Can RoadZone Plus change a flat tire on a rental car in Orlando?",
        answer:
          "Yes, when the rental has a usable spare. Check under the trunk floor first, and ask the rental company whether it will cover a local provider before you pay. If the car has no spare, call the roadside number on the rental agreement and ask how the company handles it.",
      },
      {
        question: "Do Road Rangers change tires at night in Orlando?",
        answer:
          "On the Central Florida Expressway toll roads, including SR 408, 414, 417, 429, 451 and 528, CFX lists Road Ranger hours of 6:00 AM to 10:00 PM. Florida's Turnpike patrols its mainline 24 hours a day. Florida's Turnpike lists its free tire change as a change with your own spare, and Road Rangers work their highways, so a hotel lot, garage or driveway is outside their roads.",
      },
    ],
    related: [
      { href: "/tire-change-cost-orlando", label: "What a tire change costs" },
      { href: "/how-long-can-you-drive-on-a-spare-tire-orlando", label: "How far you can drive on a spare" },
      { href: "/flat-tire-on-i-4-orlando", label: "Flat tire on I-4" },
    ],
    sources: ["cfx", "turnpike", "aaaSpare"],
  },
  jumpstart: {
    eyebrow: "Late-night and rental car dead batteries",
    heading: "Dead battery after dark or in a rental car in Orlando",
    intro:
      "Two situations make an Orlando dead battery harder to sort out: the car will not start late at night, or the car is a rental that dies in a hotel garage or park lot. Here is who can help at what hour, what to check in a rental, and what to tell RoadZone Plus so the jump start goes quickly.",
    night: {
      heading: "After 10 PM, the free toll-road patrols thin out",
      body: [
        roadRangerHours,
        "Florida's Turnpike lists jump starts among its free Road Ranger services, and Road Rangers work the highways they patrol. A car that dies in a hotel garage, a theme park lot, an apartment complex or a driveway is outside their roads at any hour. RoadZone Plus takes jump start calls 24 hours a day at the roadside and at those addresses.",
      ],
      tellUs: [
        "The garage or lot name, the level and the row, or the road and nearest exit",
        "Whether the car is parked nose-in against a wall or another car, which helps the technician plan how to reach the battery",
        "Whether the car clicks, cranks slowly or shows no lights at all",
      ],
    },
    rental: {
      heading: "In a rental, tell the rental company too",
      body: [
        "A jump start gets a rental running, but the battery belongs to the rental company. If the car needs a second jump, or dies again after a short drive, call the roadside number on the rental agreement or key tag and ask the company to repair or swap the car.",
        "If the dashboard shows a key-not-detected message rather than a dead battery, that is a different problem; the key fob guide below covers it. Ask the rental company whether it will cover a local provider before you pay anyone.",
      ],
      tellUs: [
        "The rental company's name and the car's year, make, model and color",
        "Whether the car is push-to-start and where the key fob is",
        "Whether this is the first jump or the car has needed one before on this trip",
      ],
    },
    faqs: [
      {
        question: "Can RoadZone Plus jump start a rental car in Orlando?",
        answer:
          "Yes. Give the dispatcher the rental company's name and the car's year, make, model and color. If the car needs another jump or dies again soon after, call the roadside number on the rental agreement, because the battery belongs to the rental company's fleet.",
      },
      {
        question: "Who jump starts a car at night in Orlando?",
        answer:
          "On the Central Florida Expressway toll roads, CFX lists Road Ranger hours of 6:00 AM to 10:00 PM, and Florida's Turnpike patrols its mainline 24 hours a day. Off those highways, in garages, hotel lots and driveways, RoadZone Plus takes jump start calls 24 hours a day.",
      },
    ],
    related: [
      { href: "/jump-start-cost-orlando", label: "What a jump start costs" },
      { href: "/key-fob-not-working-orlando", label: "Key fob not working" },
      { href: "/dead-battery-car-wont-start-orlando", label: "Dead battery or no start?" },
    ],
    sources: ["cfx", "turnpike"],
  },
};
