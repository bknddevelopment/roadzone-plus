import { getArea, site, type Area } from "@/data/site";

/**
 * Town pages strengthened in place, merged over the base entry in site.ts.
 * Kept in this server-only file because site.ts is also imported by the client
 * Header, so any text added there would change the script every page loads.
 */
const areaUpgrades: Record<string, Partial<Area>> = {
  "lake-buena-vista": {
    metaTitle: "Roadside Assistance Lake Buena Vista FL: 24/7 Help",
    metaDescription:
      "24/7 roadside help in Lake Buena Vista, FL: jump starts, spare tire changes, fuel and lockouts at Disney Springs, Hotel Plaza Blvd and I-4 exits 67 to 70.",
    heading: "24 hour roadside assistance in Lake Buena Vista, FL.",
    intro:
      "Stuck in Lake Buena Vista? RoadZone Plus takes roadside calls 24 hours a day here: jump starts, spare tire changes, emergency fuel, car lockouts, wheel lock removal, battery replacement and smart key help, with no membership and no app. Lake Buena Vista is the mailing address for Walt Disney World and the city that holds Disney Springs and some of the area's hotels, reached from I-4 at exits 67, 68 and 70. Free Road Rangers patrol that stretch of I-4 only at set hours, and not in garages, hotel lots or on Apopka-Vineland Road; there, RoadZone Plus is the direct call.",
    coverage: [
      "I-4 exit 67: SR 536 (Epcot Center Drive and World Center Drive)",
      "I-4 exit 68: Apopka-Vineland Road (SR 535)",
      "I-4 exit 70: Daryl Carter Parkway",
      "Disney Springs garages and lots",
      "Hotel Plaza Boulevard hotels",
      "Palm Parkway",
      "Near the Disney parks",
    ],
    emergencyNotes: [
      {
        heading: "I-4 at exits 67, 68 and 70: Road Rangers at set hours",
        body:
          "FDOT's Road Ranger coverage map lists I-4 from mile 58 to mile 72, the stretch through the Lake Buena Vista exits, at Monday to Thursday 6:00 a.m. to midnight and Friday to Sunday 6:00 a.m. to 3:30 a.m. Dial *347 from a cell phone in those hours. Outside them the map lists no patrol on this stretch, so call RoadZone Plus.",
      },
      {
        heading: "From exit 72 east, I-4 is listed around the clock",
        body:
          "From mile 72, where the Beachline (SR 528) meets I-4, to mile 98, the same map lists the I-4 patrol 24 hours a day. A car stopped at exit 67, 68 or 70 is on the shorter-hours stretch, so say the exit number and your direction when you call.",
      },
      {
        heading: "Disney Springs, hotel lots and Apopka-Vineland Road: call RoadZone Plus",
        body:
          "FDOT's map lists Road Ranger beats on I-4, the toll roads and a weekday pilot on a few Orlando arterials. Apopka-Vineland Road (SR 535), Hotel Plaza Boulevard, Palm Parkway and Daryl Carter Parkway are not on it, and parking garages and hotel lots are not roads it patrols. There, day or night, RoadZone Plus comes to the car.",
      },
    ],
    freeAssistanceNotes: [
      {
        heading: "On Walt Disney World property, Disney has its own help",
        body:
          "Disney runs a Car Care Center for guests on Walt Disney World property, with its own hours and its own list of services. Our Disney World page sets out what it covers, the hours, and where its help stops, so you know when to call Disney and when to call RoadZone Plus.",
      },
      {
        heading: "Visiting in a rental car",
        body:
          "If the rental will not start, has a flat with a usable spare, is out of fuel or has the keys locked inside, RoadZone Plus can help in the garage, the hotel lot or on the road. Have the rental company, the plate and the exact spot ready. A lost rental key is different: the rental company controls replacement keys for its fleet.",
      },
      {
        heading: "Give the exact Lake Buena Vista location",
        body:
          "Name the Disney Springs garage or lot, its level and row, or the hotel on Hotel Plaza Boulevard. On I-4, give your direction and the last exit you passed: FDOT's I-4 project site asks Road Ranger callers for the same things, the road, the direction of travel and the last exit or landmark.",
      },
    ],
    faqs: [
      {
        question: "Is there 24 hour roadside assistance in Lake Buena Vista, FL?",
        answer: `Yes. RoadZone Plus takes roadside calls 24 hours a day, 7 days a week in Lake Buena Vista: at Disney Springs, at the hotels on Hotel Plaza Boulevard, on Apopka-Vineland Road and on I-4 at exits 67, 68 and 70. Call ${site.phoneDisplay}, say what happened and where the car is.`,
      },
      {
        question: "What are the Road Ranger hours on I-4 at Lake Buena Vista?",
        answer:
          "FDOT's Road Ranger coverage map lists I-4 from mile 58 to mile 72, which takes in exits 67, 68 and 70, at Monday to Thursday 6:00 a.m. to midnight and Friday to Sunday 6:00 a.m. to 3:30 a.m. From mile 72 to mile 98 it lists the patrol 24 hours a day. Dial *347 from a cell phone when a patrol is listed; otherwise call RoadZone Plus.",
      },
      {
        question: "Do Road Rangers help at Disney Springs or at the Hotel Plaza Boulevard hotels?",
        answer:
          "Not according to FDOT's coverage map: its Road Ranger beats are I-4, the toll roads and a weekday arterial pilot, and Hotel Plaza Boulevard, Apopka-Vineland Road, parking garages and hotel lots are not among them. Call RoadZone Plus there.",
      },
      {
        question: "Which I-4 exits serve Lake Buena Vista?",
        answer:
          "Exit 67 is SR 536 (Epcot Center Drive and World Center Drive), toward Epcot and Disney Springs. Exit 68 is Apopka-Vineland Road (SR 535). Exit 70 is Daryl Carter Parkway, a partial interchange that opened on July 19, 2025. Give the exit number and your direction when you call.",
      },
      {
        question: "Can you help with a rental car in Lake Buena Vista?",
        answer:
          "Yes, for a lockout, a dead battery, a flat with a usable spare, or an empty tank. Have the rental company, the plate and the garage, lot or hotel ready. If the key is lost rather than locked inside, the rental company controls replacement keys.",
      },
      {
        question: "Do I need a membership or an app for roadside help in Lake Buena Vista?",
        answer:
          "No. RoadZone Plus is call-first roadside help: one call, no annual plan and no app account.",
      },
      {
        question: "Is RoadZone Plus part of Walt Disney World?",
        answer: `No. RoadZone Plus is an independent roadside assistance company based at ${site.address.street}, ${site.address.city}, and is not affiliated with Walt Disney World.`,
      },
    ],
    relatedLinks: [
      {
        label: "Roadside help near Disney World",
        href: "/roadside-assistance-near-disney-world-resort",
        description: "Who to call at the parks and Disney Springs, and where Disney's own Car Care Center stops.",
      },
      {
        label: "Road Rangers around Orlando",
        href: "/road-rangers-orlando",
        description: "The free highway patrol, the *347 number, and the hours road by road.",
      },
      {
        label: "Locked keys in a rental car",
        href: "/locked-keys-in-rental-car-orlando",
        description: "What to have ready, and when the rental company is the right call instead.",
      },
      {
        label: "Kissimmee roadside assistance",
        href: "/areas/kissimmee",
        description: "US 192, the hotels and vacation homes south of the parks, and who to call by road.",
      },
      {
        label: "Celebration roadside assistance",
        href: "/areas/celebration",
        description: "The community next to Walt Disney World, off US 192 and World Drive.",
      },
      {
        label: "International Drive roadside help",
        href: "/international-drive-roadside-assistance",
        description: "The hotels, attractions and garages along International Drive.",
      },
    ],
    sources: {
      readOn: "November 25, 2026",
      items: [
        {
          name: "FDOT: Road Ranger coverage map (District 5)",
          href: "https://fdot.maps.arcgis.com/apps/webappviewer/index.html?id=e375cf8cdf664c10961fb879788205bb",
          note: "I-4 from mile 58 to mile 72: Monday to Thursday 6:00 a.m. to midnight, Friday to Sunday 6:00 a.m. to 3:30 a.m.; I-4 from mile 72 to mile 98: 24 hours a day; the arterial pilot roads",
        },
        {
          name: "I-4 Beyond the Ultimate (FDOT): Road Rangers, Heroes of the Highway",
          href: "https://i4beyond.com/road-rangers-heroes-of-the-highway/",
          note: "call *FHP (*347) and give the roadway, your direction of travel and the last exit or landmark you passed",
        },
        {
          name: "I-4 Beyond the Ultimate (FDOT): I-4 and Apopka-Vineland Road interchange notice, posted November 25, 2026",
          href: "https://i4beyond.com/attention-drivers-overnight-closures-at-the-i-4-and-apopka-vineland-road-interchange-november-30-december-3/",
          note: "Apopka-Vineland Road is S.R. 535 at Exit 68; Exit 67 is S.R. 536 (Epcot Center Drive/World Center Drive); Exit 70 is Daryl Carter Parkway; Palm Parkway",
        },
        {
          name: "Wikipedia: Interstate 4, exit list",
          href: "https://en.wikipedia.org/wiki/Interstate_4",
          note: "exit 67 toward Epcot and Disney Springs; exit 70, Daryl Carter Parkway, a partial interchange opened July 19, 2025; exit 72, the Beachline (SR 528)",
        },
        {
          name: "Wikipedia: Lake Buena Vista, Florida",
          href: "https://en.wikipedia.org/wiki/Lake_Buena_Vista,_Florida",
          note: "a city in Orange County; the mailing address for Walt Disney World; Disney Springs and some hotels are in the city",
        },
      ],
    },
  },
};

export function getAreaPage(slug: string): Area | undefined {
  const base = getArea(slug);
  if (!base) return undefined;
  const upgrade = areaUpgrades[slug];
  return upgrade ? { ...base, ...upgrade } : base;
}
