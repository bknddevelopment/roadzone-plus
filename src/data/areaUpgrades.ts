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
          "FDOT's map for this district lists Road Ranger beats on I-4, I-75 and I-95, on the toll roads and on a weekday pilot of a few Orlando arterials. Apopka-Vineland Road (SR 535), Hotel Plaza Boulevard, Palm Parkway and Daryl Carter Parkway are not on it, and parking garages and hotel lots are not roads it patrols. There, day or night, RoadZone Plus comes to the car.",
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
          "Not according to FDOT's coverage map: its Road Ranger beats for this district are I-4, I-75 and I-95, the toll roads and a weekday arterial pilot, and Hotel Plaza Boulevard, Apopka-Vineland Road, parking garages and hotel lots are not among them. Call RoadZone Plus there.",
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
  apopka: {
    metaTitle: "Roadside Assistance Apopka FL: 24/7 Help on US 441 & SR 429",
    metaDescription:
      "24/7 roadside help in Apopka, FL: jump starts, spare tire changes, fuel and lockouts on US 441, SR 414, SR 429 and SR 451, with Road Ranger hours by road.",
    heading: "24 hour roadside assistance in Apopka, FL.",
    intro:
      "Stuck in Apopka? RoadZone Plus takes roadside calls 24 hours a day here: jump starts, spare tire changes, emergency fuel, car lockouts, wheel lock removal, battery replacement and smart key help, with no membership and no app. RoadZone Plus is based at 7337 Habbersham Dr in Orlando, about 6 miles in a straight line from Apopka City Hall. Free Road Rangers work the SR 414, SR 429 and SR 451 expressways around Apopka only at set hours, and FDOT's Road Ranger beat map shows no patrol downtown, on US 441 where it meets SR 429, at Kelly Park or at Wekiwa Springs State Park. There, and at night, RoadZone Plus is the direct call.",
    coverage: [
      "US 441 (Orange Blossom Trail)",
      "SR 414 (John Land Apopka Expressway)",
      "SR 429 and the Wekiva Parkway",
      "SR 451",
      "Downtown Apopka and Main Street",
      "Ocoee Apopka Road and AdventHealth Apopka",
      "Kelly Park Road and Kelly Park",
      "Wekiwa Springs State Park",
    ],
    emergencyNotes: [
      {
        heading: "SR 414, SR 429 and SR 451: Road Rangers at set hours",
        body:
          "CFX lists SR 414, SR 429 and SR 451 among the toll roads its Road Rangers serve. CFX's Using Our Expressways page, updated October 29, 2026, and FDOT's Road Ranger beat map give their hours as 6:00 a.m. to 8:00 p.m., seven days a week; an older CFX page still says 10:00 p.m. In those hours, dial *347 (*FHP) and ask for a Road Ranger. Outside them, call RoadZone Plus.",
      },
      {
        heading: "SR 429 past US 441 and Kelly Park Road: not on the beat map",
        body:
          "North of its junction with SR 414, SR 429 reaches the US 441 interchange, where it becomes the Wekiva Parkway, and then Kelly Park Road. FDOT's beat map ends the SR 429 patrol near the SR 414 junction and shows a separate Wekiva Parkway patrol from mile 42 to mile 55, 6:00 a.m. to 10:00 p.m., farther north. The stretch between them has no beat on that map. Stopped there, dial *347 for the Highway Patrol and give your mile marker, or call RoadZone Plus.",
      },
      {
        heading: "Downtown, US 441 and the parks: call RoadZone Plus",
        body:
          "On FDOT's beat map, the only Central Florida patrol that names US 441 is a weekday pilot in south and central Orlando, 6:00 a.m. to 10:00 p.m., not run on weekends. No beat covers downtown Apopka, US 441 where it meets SR 429, Kelly Park or Wekiwa Springs State Park, and the beats are roads, not parking lots. There, day or night, RoadZone Plus comes to the car.",
      },
    ],
    freeAssistanceNotes: [
      {
        heading: "What a free Road Ranger can do",
        body:
          "FDOT lists flat tire changes, jump starts and minor repairs, emergency fuel and two free local calls, and does not charge for the help. When a repair is more than that, the Road Ranger moves the car out of the travel lane and the Highway Patrol calls a tow at the driver's expense. Off the beats and outside their hours, RoadZone Plus does the jump start, the spare tire change, the fuel and the lockout.",
      },
      {
        heading: "Kelly Park and Wekiwa Springs State Park",
        body:
          "Kelly Park/Rock Springs, an Orange County park at 400 E Kelly Park Rd, is open 8 a.m. to 6 p.m. from November until March and 8 a.m. to 8 p.m. from March until early November. Wekiwa Springs State Park, at 1800 Wekiwa Circle, is open 8 a.m. to sunset and has required a day-use reservation since September 2, 2025. Neither address is on a Road Ranger beat: for a dead battery or a flat in the lot, give the park, the lot and the row when you call.",
      },
      {
        heading: "Give the exact Apopka location",
        body:
          "On SR 414, SR 429 or SR 451, say the road, your direction and the nearest mile marker or exit. In town, give the street and the nearest cross street or business; at AdventHealth Apopka on Ocoee Apopka Road, which is open 24 hours, name the lot. FDOT asks drivers to move out of the travel lane if they can, then stay inside the vehicle and wait for help.",
      },
    ],
    faqs: [
      {
        question: "Is there 24 hour roadside assistance in Apopka, FL?",
        answer: `Yes. RoadZone Plus takes roadside calls 24 hours a day, 7 days a week in Apopka: downtown, on US 441, on SR 414, SR 429 and SR 451, and in the lots at the parks and the hospital. Call ${site.phoneDisplay}, say what happened and where the car is.`,
      },
      {
        question: "What are the Road Ranger hours on SR 414, SR 429 and SR 451 near Apopka?",
        answer:
          "CFX's newest listing and FDOT's Road Ranger beat map give 6:00 a.m. to 8:00 p.m., seven days a week; an older CFX page still says 6:00 a.m. to 10:00 p.m. In those hours, dial *347 (*FHP) and ask for a Road Ranger. After 8:00 p.m., call RoadZone Plus.",
      },
      {
        question: "Do Road Rangers patrol US 441 in Apopka?",
        answer:
          "Not on FDOT's beat map. The only Central Florida beat that names US 441 is a weekday pilot in south and central Orlando, 6:00 a.m. to 10:00 p.m., not run on weekends. In Apopka, call RoadZone Plus, or dial 911 in an emergency.",
      },
      {
        question: "Who do I call on the Wekiva Parkway north of Apopka?",
        answer:
          "The Wekiva Parkway project site gives *FHP (*347) for non-emergency roadside help and 911 for emergencies. FDOT's beat map shows a Wekiva Parkway Road Ranger patrol from mile 42 to mile 55, 6:00 a.m. to 10:00 p.m., and no beat between the SR 414 junction and that stretch, past the US 441 and Kelly Park Road interchanges. RoadZone Plus can come to you at any hour.",
      },
      {
        question: "How far is RoadZone Plus from Apopka?",
        answer: `RoadZone Plus is based at ${site.address.street}, ${site.address.city}, about 6 miles in a straight line from Apopka City Hall at 120 E Main Street. Ask for the arrival time when you call.`,
      },
      {
        question: "Can RoadZone Plus fix a flat tire in Apopka?",
        answer:
          "RoadZone Plus puts on your spare where the car is stopped. It does not patch or plug tires, sell new tires or repair rims on the roadside; when the tire itself needs repair or replacement, it will say so and help you get to the right next step.",
      },
      {
        question: "What should I do while I wait on SR 414 or SR 429?",
        answer:
          "FDOT asks drivers to move the car out of the travel lane if they can; once out of traffic, stay inside the vehicle and wait for help. Drivers passing a stopped Road Ranger must move over a lane, or slow to 20 mph below the posted limit if they cannot move over safely.",
      },
    ],
    relatedLinks: [
      {
        label: "Road Rangers around Orlando",
        href: "/road-rangers-orlando",
        description: "The free highway patrol, the *347 number, and the hours road by road.",
      },
      {
        label: "Ocoee roadside assistance",
        href: "/areas/ocoee",
        description: "West-side roadside assistance near homes, schools and shopping centers.",
      },
      {
        label: "Pine Hills roadside assistance",
        href: "/areas/pine-hills",
        description: "Local help around residential roads and commuter routes.",
      },
      {
        label: "Altamonte Springs roadside assistance",
        href: "/areas/altamonte-springs",
        description: "Roadside support near I-4, shopping areas and neighborhoods.",
      },
      {
        label: "Florida's Move Over law",
        href: "/florida-move-over-law",
        description: "Who it covers, what passing drivers must do, and the fine and points.",
      },
      {
        label: "How long can you drive on a spare tire?",
        href: "/how-long-can-you-drive-on-a-spare-tire-orlando",
        description: "How far and how fast a spare can take you after a flat.",
      },
    ],
    sources: {
      readOn: "November 27, 2026",
      items: [
        {
          name: "CFX: Roadside Assistance",
          href: "https://www.cfxway.com/for-travelers/traveler-help-center/roadside-assistance/",
          note: "Road Rangers on toll roads including SR 408, SR 417, SR 414, SR 429, SR 528 and SR 451; dial *347 (*FHP) and ask for a Road Ranger; this page lists 6:00 AM to 10:00 PM; the Move Over rule of 20 mph below the posted limit",
        },
        {
          name: "CFX: Using Our Expressways (updated October 29, 2026)",
          href: "https://www.cfxway.com/for-travelers/traveler-help-center/using-our-expressways/",
          note: "Road Rangers patrol CFX expressways seven days a week from 6 AM to 8 PM",
        },
        {
          name: "FDOT: Road Ranger beats map data (data last edited September 3, 2025)",
          href: "https://services1.arcgis.com/O1JpcwDW8sjYuddV/arcgis/rest/services/RoadRangerBeats/FeatureServer/19",
          note: "SR 414, SR 429 (Western Expressway) and SR 451: 6:00 a.m. to 8:00 p.m.; SR 429 Wekiva Parkway mile 42 to 55: 6:00 a.m. to 10:00 p.m.; the arterial pilot that names US 441: weekdays 6:00 a.m. to 10:00 p.m., not in operation on weekends; no beat at the Apopka points named on this page",
        },
        {
          name: "FDOT: Road Rangers",
          href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/home.htm",
          note: "call *347 on your mobile phone; flat tires, jump starts and minor repairs, emergency fuel, two free local calls",
        },
        {
          name: "FDOT: Road Rangers, frequently asked questions",
          href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/faq.htm",
          note: "no charge to motorists; a tow at the motorist's expense when the repair is beyond them; move out of the travel lane, then stay inside the vehicle",
        },
        {
          name: "CFX: State Road 429",
          href: "https://www.cfxway.com/for-travelers/expressways/429/",
          note: "SR 429 becomes the Wekiva Parkway when it crosses US 441 in Apopka",
        },
        {
          name: "CFX: Wekiva Parkway",
          href: "https://www.cfxway.com/for-travelers/expressways/wekiva/",
          note: "the parkway section from the SR 429-US 441 interchange north to just past Kelly Park Road",
        },
        {
          name: "CFX: State Road 414",
          href: "https://www.cfxway.com/for-travelers/expressways/414/",
          note: "SR 414 runs from US 441 in Apopka to Maitland Boulevard; three of its nine miles are shared with SR 429",
        },
        {
          name: "CFX: State Road 451",
          href: "https://www.cfxway.com/for-travelers/expressways/451/",
          note: "SR 451 links SR 414 and SR 429 north to US 441 (Orange Blossom Trail)",
        },
        {
          name: "Wekiva Parkway project site",
          href: "https://www.wekivaparkway.com/",
          note: "for non-emergency roadside assistance dial *FHP (*347); to report an emergency dial 911",
        },
        {
          name: "Orange County: Kelly Park/Rock Springs",
          href: "https://www.orangecountyfl.net/CultureParks/Parks.aspx?m=dtlvw&d=22",
          note: "400 E Kelly Park Rd; 8 a.m. to 8 p.m. from March until early November, 8 a.m. to 6 p.m. from November until March",
        },
        {
          name: "Florida State Parks: Wekiwa Springs State Park",
          href: "https://www.floridastateparks.org/parks-and-trails/wekiwa-springs-state-park",
          note: "1800 Wekiwa Circle; 8 a.m. to sunset; day-use reservations required since September 2, 2025",
        },
        {
          name: "AdventHealth Apopka",
          href: "https://www.adventhealth.com/hospital/adventhealth-apopka",
          note: "2100 Ocoee Apopka Road; open 24 hours a day, 7 days a week",
        },
        {
          name: "City of Apopka",
          href: "https://apopka.gov/",
          note: "City Hall at 120 E Main Street; the straight-line distance from 7337 Habbersham Dr, measured from the U.S. Census Bureau geocoder's point for that address to City Hall, is 6.0 to 6.2 miles",
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
