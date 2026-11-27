import type { FocusedRoadsidePage } from "@/data/focusedPages";

// Content for /international-drive-roadside-assistance only (upgrade in place, 2026-11-27).
// Kept out of data/focusedPages.ts, which protected pages also read, so no other page changes.
// Facts were read on November 27, 2026 from Universal Orlando's parking page, FDOT's District 5
// Road Ranger list and Road Ranger FAQ, Florida's Turnpike's Road Ranger page and Beachline West map,
// CFX's SR 528 page, the I-4 Beyond the Ultimate who-to-call page and the I-4 exit list.
export const internationalDrivePage: FocusedRoadsidePage = {
  slug: "international-drive-roadside-assistance",
  href: "/international-drive-roadside-assistance",
  title: "International Drive Roadside Assistance, Orlando",
  description:
    "Stuck on I-Drive? Who to call near Universal by place and hour: Universal's courtesy garage jumps, Road Rangers at the I-4 Universal exits, RoadZone Plus 24/7.",
  eyebrow: "International Drive / Universal",
  heading: "Roadside assistance on International Drive and near Universal.",
  intro:
    "Who to call depends on where the car stopped. In a Universal Orlando garage, Universal gives guests a courtesy battery jump. On I-4 at the Universal exits, FDOT lists Road Rangers 24 hours a day: dial *347. On International Drive itself, Universal Boulevard and the hotel lots, FDOT lists no Road Ranger patrol, so call RoadZone Plus, open 24/7, for jumpstarts, tire changes, lockouts and fuel.",
  alertLabel: "Use the garage, level and row",
  alertText:
    "Universal's garage is at 6000 Universal Boulevard and Epic Universe parking is at 1001 Epic Boulevard. Give the garage, level and row, or the hotel name and entrance, so help reaches the right side.",
  serviceType: "International Drive roadside assistance",
  areaServed: "International Drive and Universal Orlando",
  primaryServiceHref: "/theme-park-roadside-assistance",
  primaryServiceLabel: "Theme Park Help",
  secondaryHref: "/services",
  secondaryLabel: "All Services",
  steps: [
    {
      title: "Move out of traffic",
      text: "On I-4 or SR 528, if the car can still move, get it out of the travel lane. FDOT then says to stay inside the vehicle and wait for help to arrive.",
    },
    {
      title: "Use a precise landmark",
      text: "Share the garage and level, the hotel, the attraction, the restaurant or the cross street instead of only saying I-Drive.",
    },
    {
      title: "Confirm the roadside problem",
      text: "Say whether it is a lockout, dead battery, flat tire, fuel delivery, wheel lock, or key fob issue.",
    },
    {
      title: "Stay reachable",
      text: "Keep your phone on so the technician can confirm the correct entrance, level, or row.",
    },
  ],
  dispatchDetails: [
    {
      label: "Universal parking",
      detail:
        "Say Universal's garage at 6000 Universal Boulevard or Epic Universe parking at 1001 Epic Boulevard, then the level, row or section, such as the Volcano Bay parking section.",
    },
    {
      label: "I-Drive hotels",
      detail:
        "Share the hotel name, side entrance, lobby area, parking deck, or nearest restaurant.",
    },
    {
      label: "Roadside corridors",
      detail:
        "Use International Drive, Kirkman Road, Major Boulevard, Sand Lake Road, Universal Boulevard, or the nearest I-4 exit.",
    },
    {
      label: "Rental-car status",
      detail:
        "For visitors, tell us the rental company, vehicle color, key/fob location, and whether the rental roadside line has already been called.",
    },
  ],
  relatedLinks: [
    {
      href: "/theme-park-roadside-assistance",
      title: "Theme Park Roadside Help",
      text: "Visitor-focused roadside help around Disney, Universal, hotels, and resort corridors.",
    },
    {
      href: "/locked-keys-in-rental-car-orlando",
      title: "Rental Car Lockout",
      text: "Who to call when keys are locked in a rental, with the rental companies' own roadside terms.",
    },
    {
      href: "/services/jumpstart",
      title: "Jumpstart Service",
      text: "When the car is outside Universal's parking, or a courtesy jump did not keep it running.",
    },
    {
      href: "/services/tire-change",
      title: "Tire Change",
      text: "Your spare put on where the car stopped, on I-Drive or in a hotel lot, day or night.",
    },
    {
      href: "/services/fuel-delivery",
      title: "Fuel Delivery",
      text: "Fuel brought to hotel lots, I-Drive roads, and nearby attraction corridors.",
    },
  ],
  guide: {
    eyebrow: "I-Drive, Universal and I-4, by the hour",
    heading: "Stuck on International Drive or at Universal: who to call, by where you are and the hour.",
    intro:
      "Help near Universal depends on three things: whether you are inside Universal's parking, whether you are on I-4 or a toll road, and the time of day. This is who covers what, from Universal's, FDOT's and Florida's Turnpike's own pages (read November 27, 2026).",
    whoToCall: [
      {
        situation: "The car will not start in a Universal garage or Epic Universe parking",
        call: "A Universal parking attendant, or a call box in the parking area",
        detail:
          "Universal says battery jumps are provided as a courtesy to its guests. If more help is needed, it says to raise the hood if possible and report the car's location to any parking attendant. Call boxes throughout the parking areas reach Universal Security.",
      },
      {
        situation: "A flat tire, keys locked inside, an empty tank or a dead key fob in Universal's parking",
        call: "Tell a parking attendant, then a 24-hour service: RoadZone Plus, (407) 222-2739",
        detail:
          "Universal's Vehicle Assistance note names battery jumps as its courtesy to guests; for further help it says to raise the hood if possible and report the car's location to any parking attendant. For a tire change, a lockout, fuel or a key fob, give RoadZone Plus the garage, level and row, or the Epic Universe parking section.",
      },
      {
        situation: "On I-4 at Sand Lake Road, Universal Boulevard or Kirkman Road (exits 74A to 75B)",
        call: "Road Rangers: dial *347, 24 hours a day",
        detail:
          "FDOT lists Road Ranger patrols on I-4 from mile marker 72 to 98 for 24 hours a day, every day, and these exits sit between about mile 73.7 and 75.2. FDOT says motorists are not charged and that a Road Ranger should reach you within 15 to 30 minutes unless held up by an emergency such as a crash.",
      },
      {
        situation: "On I-4 at Central Florida Parkway or the SR 528 exit (exits 71 and 72), toward SeaWorld",
        call: "Road Rangers: dial *347, within their hours; otherwise RoadZone Plus",
        detail:
          "These exits, at about mile 71.0 and 71.7, fall in FDOT's mile 58 to 72 stretch: Monday to Thursday 6:00 AM to midnight, and Friday to Sunday 6:00 AM to 3:30 AM. Outside those hours FDOT lists no patrol there, and RoadZone Plus answers 24/7.",
      },
      {
        situation: "On SR 528, the Beachline West, from I-4 toward the airport (its exit 1 is International Drive)",
        call: "Road Rangers: dial *347, 6:00 AM to 10:00 PM; otherwise RoadZone Plus",
        detail:
          "Florida's Turnpike Enterprise operates SR 528's westernmost eight miles, from I-4 toward the airport, and lists its Road Rangers on mileposts 0 to 8 from 6:00 AM to 10:00 PM, seven days a week. It lists tire changes with your spare, emergency gas of up to 2 gallons and jump starts among their free services. Between 10:00 PM and 6:00 AM it lists no patrol there, and RoadZone Plus answers 24/7.",
      },
      {
        situation: "On Kirkman Road, Sand Lake Road or Conroy Road on a weekday",
        call: "Road Rangers: dial *347, Monday to Friday 6:00 AM to 10:00 PM",
        detail:
          "FDOT lists a weekday arterial pilot that names SR 435 (Kirkman Road), SR 482 (Sand Lake Road) and Conroy Road among its eight roads, from 6:00 AM to 10:00 PM. FDOT lists it as not in operation on Saturday and Sunday.",
      },
      {
        situation: "On International Drive, Universal Boulevard, or in a hotel, restaurant or outlet lot, or on any road outside the patrol hours",
        call: "A 24-hour private service: RoadZone Plus, (407) 222-2739",
        detail:
          "FDOT's District 5 Road Ranger list does not name International Drive or Universal Boulevard. RoadZone Plus answers 24/7 for jumpstarts, tire changes, lockouts, fuel delivery, wheel lock removal, battery replacement and key fobs.",
      },
      {
        situation: "A severe crash, a car on fire, a wrong-way driver or a medical emergency",
        call: "911",
        detail:
          "The I-4 Beyond the Ultimate project's who-to-call page says to call 911 for a severe crash, a wrong-way driver, a car on fire, a crime in progress, a roadside medical emergency or another life-threatening situation, and *FHP (*347) for a disabled vehicle or roadside assistance. It says a *FHP call connects you with a dispatcher who can send an FHP trooper or a Road Ranger.",
      },
    ],
    table: {
      heading: "Road Ranger cover around International Drive, road by road",
      intro:
        "Hours as FDOT's District 5 list and Florida's Turnpike's Road Ranger page give them, read November 27, 2026. Where a Road Ranger patrols, dial *347 on a mobile phone.",
      columns: ["Road", "Patrol hours", "Listed by"],
      rows: [
        [
          "I-4, mile 72 to 98 (exits 74A to 75B: Sand Lake Road, Universal Boulevard, Kirkman Road)",
          "24 hours a day, every day",
          "FDOT District 5",
        ],
        [
          "I-4, mile 58 to 72 (exit 71 Central Florida Parkway, exit 72 SR 528)",
          "Monday to Thursday 6:00 AM to midnight; Friday to Sunday 6:00 AM to 3:30 AM",
          "FDOT District 5",
        ],
        [
          "SR 528, the Beachline West, mileposts 0 to 8 (I-4 to the airport area; exit 1 is International Drive)",
          "6:00 AM to 10:00 PM, seven days a week",
          "Florida's Turnpike Enterprise",
        ],
        [
          "SR 435 Kirkman Road, SR 482 Sand Lake Road, Conroy Road",
          "Monday to Friday 6:00 AM to 10:00 PM; not on Saturday or Sunday",
          "FDOT District 5 (arterial pilot)",
        ],
        [
          "International Drive, Universal Boulevard, hotel and garage lots",
          "Not on FDOT's list",
          "FDOT District 5",
        ],
      ],
      note:
        "I-4 exit numbers and mile points are from the I-4 exit list, and the SR 528 exit from Florida's Turnpike's Beachline West map. FDOT's District 5 list also has an SR 528 toll-road entry, with no mile limits given, at 6:00 AM to 8:00 PM. FDOT says Road Ranger service availability varies throughout the state.",
    },
    notes: [
      {
        heading: "When a Road Ranger cannot fix it",
        text: "FDOT says that when a repair is more than the Road Rangers offer, the Road Ranger truck moves the car out of the travel lane and the Florida Highway Patrol calls another towing service, at the motorist's expense.",
      },
      {
        heading: "A rental car",
        text: "If you bought the rental company's roadside cover, start with the roadside number on your rental agreement. The rental lockout guide sets out the rental companies' own roadside terms.",
      },
      {
        heading: "A ride while the car waits",
        text: "Universal's ride app and taxi pick-up point for Universal Studios Florida, Islands of Adventure, Volcano Bay and CityWalk is the North Parking Garage at 6000 Universal Boulevard; for Epic Universe it is 1201 Epic Boulevard. Universal charges no parking fee for a drop-off or pick-up.",
      },
    ],
    sources: [
      {
        name: "Universal Orlando: Parking, Directions and Addresses",
        href: "https://www.universalorlando.com/web/en/us/plan-your-visit/hours-information/directions-and-parking",
        note: "courtesy battery jumps, parking attendants and call boxes to Security, garage and Epic Universe addresses, ride app pick-up points",
      },
      {
        name: "FDOT: Road Ranger service availability map",
        href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/map.htm",
        note: "District 5 patrol list: I-4 mile 72 to 98 around the clock, I-4 mile 58 to 72, SR 528, and the weekday arterial pilot",
      },
      {
        name: "FDOT: Road Rangers frequently asked questions",
        href: "https://www.fdot.gov/traffic/cvotim/tim/roadrangers/faq.htm",
        note: "*347, no charge, 15 to 30 minutes, stay inside the vehicle, what happens when a repair is more than they offer",
      },
      {
        name: "Florida's Turnpike: Road Rangers Safety Patrol",
        href: "https://floridasturnpike.com/traveler-resources/safety-and-assistance/road-rangers-safety-patrol/",
        note: "SR 528 Beachline mileposts 0 to 8, 6:00 AM to 10:00 PM, seven days a week; free services listed, *347",
      },
      {
        name: "Central Florida Expressway Authority: SR 528 (Beachline Expressway)",
        href: "https://www.cfxway.com/for-travelers/expressways/528/",
        note: "Florida's Turnpike Enterprise operates the westernmost eight miles of SR 528, from I-4",
      },
      {
        name: "Florida's Turnpike: Beachline West Expressway map",
        href: "https://floridasturnpike.com/wp-content/uploads/2025/12/Beachline-West-Expressway.pdf",
        note: "SR 528 exit 1 is International Drive",
      },
      {
        name: "I-4 Beyond the Ultimate: Need Help on the Road? Know Who to Call",
        href: "https://i4beyond.com/need-help-on-the-road-know-who-to-call/",
        note: "when to call 911, when to call *FHP (*347), and that the *FHP dispatcher can send a trooper or a Road Ranger",
      },
      {
        name: "Wikipedia: Interstate 4, exit list",
        href: "https://en.wikipedia.org/wiki/Interstate_4#Exit_list",
        note: "exit numbers and mile points for exits 71 to 75B",
      },
    ],
  },
  faqs: [
    {
      question: "Does Universal Orlando help if my car won't start in the parking garage?",
      answer:
        "For a dead battery, yes. Universal says battery jumps are provided as a courtesy to its guests; tell any parking attendant or use a call box to reach Security. For a flat tire, a lockout or fuel, call RoadZone Plus at (407) 222-2739 with the garage, level and row.",
    },
    {
      question: "Do Road Rangers patrol International Drive?",
      answer:
        "FDOT's District 5 Road Ranger list does not name International Drive or Universal Boulevard. It does list I-4 from mile 72 to 98 around the clock, SR 528, and a weekday pilot on roads that include Kirkman Road, Sand Lake Road and Conroy Road from 6:00 AM to 10:00 PM.",
    },
    {
      question: "Who do I call on I-4 near Universal at night?",
      answer:
        "At the Universal exits (74A to 75B, Sand Lake Road to Kirkman Road), dial *347: FDOT lists Road Rangers there 24 hours a day. At Central Florida Parkway and the SR 528 exit (exits 71 and 72), FDOT's patrol ends at midnight Monday to Thursday and at 3:30 AM Friday to Sunday; after that, call RoadZone Plus at (407) 222-2739.",
    },
    {
      question: "Does RoadZone Plus cover International Drive?",
      answer:
        "Yes. RoadZone Plus serves International Drive, Universal Orlando, nearby hotels, garages, and I-4 access roads.",
    },
    {
      question: "Can you help rental cars near Universal?",
      answer:
        "Yes. Common rental-car calls include lockouts, dead batteries, fuel delivery, flat tires, and key fob problems.",
    },
    {
      question: "What location should I give on I-Drive?",
      answer:
        "Give the garage and level, the hotel, attraction, restaurant, parking row, road, or nearest cross street. Universal's garage is at 6000 Universal Boulevard and Epic Universe parking at 1001 Epic Boulevard.",
    },
    {
      question: "Do I need a roadside membership?",
      answer:
        "No. RoadZone Plus is direct call-first roadside help with no membership required.",
    },
  ],
};
