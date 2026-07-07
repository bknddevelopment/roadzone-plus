export type FocusedRoadsidePage = {
  slug: string;
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  alertLabel: string;
  alertText: string;
  serviceType: string;
  areaServed: string;
  primaryServiceHref: string;
  primaryServiceLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  steps: Array<{ title: string; text: string }>;
  dispatchDetails: Array<{ label: string; detail: string }>;
  relatedLinks: Array<{ href: string; title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const focusedPages = {
  deadBattery: {
    slug: "dead-battery-car-wont-start-orlando",
    href: "/dead-battery-car-wont-start-orlando",
    title: "Car Won't Start Orlando? Dead Battery Help",
    description:
      "Car won't start in Orlando? RoadZone Plus provides 24/7 jumpstart and battery help at homes, hotels, parking lots, work, and roadsides. Call (407) 222-2739.",
    eyebrow: "Dead battery help",
    heading: "Car won't start in Orlando?",
    intro:
      "A no-start can be a dead battery, a weak key fob, a starter issue, or a vehicle that sat too long in Central Florida heat. RoadZone Plus helps Orlando drivers figure out the next move and dispatches 24/7 roadside help for jumpstarts and battery-related calls.",
    alertLabel: "Safety first",
    alertText:
      "If you smell fuel, see smoke, hear repeated grinding, or the vehicle is stopped in a live lane, treat the scene as unsafe and call 911 before roadside service.",
    serviceType: "Dead battery and no-start roadside assistance",
    areaServed: "Orlando, FL",
    primaryServiceHref: "/services/jumpstart",
    primaryServiceLabel: "Jumpstart Service",
    secondaryHref: "/services/battery-replacement",
    secondaryLabel: "Battery Replacement",
    steps: [
      {
        title: "Turn off accessories",
        text: "Switch off lights, radio, A/C, chargers, and anything else pulling power before another start attempt.",
      },
      {
        title: "Listen to what the car does",
        text: "Clicking, dim lights, and a slow crank usually point to the battery. A normal crank with no start can mean something else.",
      },
      {
        title: "Stay where help can find you",
        text: "If you are in a garage, hotel lot, apartment complex, or shoulder, note the entrance, level, row, or nearest cross street.",
      },
      {
        title: "Call with the symptoms",
        text: "Tell RoadZone Plus what happens when you turn the key or press the start button so the technician arrives prepared.",
      },
    ],
    dispatchDetails: [
      {
        label: "Exact location",
        detail:
          "Share the address, hotel, garage level, parking row, exit, or nearest landmark. 'Orlando' is not enough when the car will not move.",
      },
      {
        label: "No-start symptom",
        detail:
          "Say whether you hear clicking, a slow crank, silence, dash lights, or a normal crank that will not catch.",
      },
      {
        label: "Vehicle details",
        detail:
          "Have the year, make, model, color, and whether it is gas, diesel, hybrid, or EV ready when you call.",
      },
      {
        label: "Battery history",
        detail:
          "Mention if the battery is old, recently replaced, repeatedly dying, or if lights were left on.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/jumpstart",
        title: "Jumpstart Service",
        text: "Fast battery boost help when the vehicle has power symptoms but will not start.",
      },
      {
        href: "/services/battery-replacement",
        title: "Battery Replacement",
        text: "Help when the battery is failing and a simple boost may not last.",
      },
      {
        href: "/key-fob-not-working-orlando",
        title: "Key Fob Not Working",
        text: "Push-to-start and key fob issues can look like a dead battery.",
      },
    ],
    faqs: [
      {
        question: "Who should I call if my car won't start in Orlando?",
        answer:
          "Call RoadZone Plus at (407) 222-2739 for 24/7 roadside help. Describe the symptoms, your exact location, and the vehicle so the team can prepare for a jumpstart or battery-related service.",
      },
      {
        question: "Is it the battery if the dashboard lights come on?",
        answer:
          "Often, yes. A weak battery can still power dashboard lights while failing to crank the engine. Clicking or dim lights are common dead-battery signs.",
      },
      {
        question: "Can RoadZone Plus help at hotels, apartments, or work?",
        answer:
          "Yes. RoadZone Plus responds to homes, hotels, workplaces, garages, parking lots, and roadside locations around Orlando.",
      },
      {
        question: "What if a jumpstart does not work?",
        answer:
          "If a jumpstart does not solve it, the issue may be the battery, alternator, starter, key fob, or another no-start problem. RoadZone Plus can help you understand the likely next step.",
      },
    ],
  },
  flatTireI4: {
    slug: "flat-tire-on-i-4-orlando",
    href: "/flat-tire-on-i-4-orlando",
    title: "Flat Tire on I-4 Orlando? Tire Help",
    description:
      "Flat tire on I-4 in Orlando? Learn what to do first, how to stay safe, and when to call RoadZone Plus for 24/7 roadside tire change or wheel lock help.",
    eyebrow: "Flat tire on I-4",
    heading: "Flat tire on I-4 in Orlando?",
    intro:
      "A flat tire on I-4, SR 408, SR 528, or a resort corridor is not the place to guess with a jack. RoadZone Plus helps Orlando drivers with spare tire installation and related wheel-lock problems when the vehicle is stuck in a risky spot.",
    alertLabel: "Do not stand in traffic",
    alertText:
      "If you are on a narrow shoulder or busy ramp, stay buckled inside the vehicle when possible and call 911 first if the car is blocking traffic or you feel unsafe.",
    serviceType: "Emergency flat tire roadside assistance",
    areaServed: "I-4 and Orlando, FL",
    primaryServiceHref: "/services/tire-change",
    primaryServiceLabel: "Tire Change Service",
    secondaryHref: "/lost-wheel-lock-key-orlando",
    secondaryLabel: "Lost Wheel Lock Key",
    steps: [
      {
        title: "Get fully out of the lane",
        text: "If the vehicle can still roll, move to the right shoulder or a safer lot before stopping.",
      },
      {
        title: "Turn on hazard lights",
        text: "Give fast traffic as much warning as possible, especially on I-4, ramps, and toll roads.",
      },
      {
        title: "Check for a spare only if safe",
        text: "Do not dig through the trunk on the traffic side of the car. Wait if the shoulder is narrow.",
      },
      {
        title: "Call with tire and lock details",
        text: "Tell RoadZone Plus whether you have a spare and whether a wheel lock key is missing.",
      },
    ],
    dispatchDetails: [
      {
        label: "Road and direction",
        detail:
          "Say I-4 eastbound, I-4 westbound, SR 408, SR 528, or the exact road and direction before anything else.",
      },
      {
        label: "Spare tire status",
        detail:
          "Tell us whether you have a full-size spare, donut spare, no spare, or are not sure.",
      },
      {
        label: "Wheel lock key",
        detail:
          "Mention if one lug nut looks different or if the wheel lock key is missing, stripped, or stuck.",
      },
      {
        label: "Traffic risk",
        detail:
          "Say whether you are safely off the road, close to traffic, on a ramp, or partially blocking a lane.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/tire-change",
        title: "Tire Change Service",
        text: "Spare tire installation when you have a usable spare and need help safely.",
      },
      {
        href: "/lost-wheel-lock-key-orlando",
        title: "Lost Wheel Lock Key",
        text: "What to do when the wheel cannot come off because of a locking lug nut.",
      },
      {
        href: "/mobile-tire-repair-orlando",
        title: "Mobile Tire Repair in Orlando",
        text: "What mobile flat tire help can fix at your location and when a tire shop is the right call.",
      },
    ],
    faqs: [
      {
        question: "Can RoadZone Plus change a flat tire on I-4?",
        answer:
          "RoadZone Plus can help with roadside tire changes when the vehicle is in a safe enough location and you have a usable spare. If the location is unsafe, call 911 first.",
      },
      {
        question: "What if I do not have a spare tire?",
        answer:
          "Tell RoadZone Plus when you call. A standard tire change requires a usable spare, but the team can help you understand the fastest next step.",
      },
      {
        question: "What if the wheel lock key is missing?",
        answer:
          "A missing wheel lock key can block the tire change. RoadZone Plus also helps with wheel lock removal, so mention it before dispatch.",
      },
      {
        question: "Should I try to change the tire myself on the shoulder?",
        answer:
          "Not on a narrow or busy shoulder. Standing next to traffic is dangerous. Move to a safe location if possible and call for help.",
      },
    ],
  },
  keyFob: {
    slug: "key-fob-not-working-orlando",
    href: "/key-fob-not-working-orlando",
    title: "Key Fob Not Working Orlando? Smart Key Help",
    description:
      "Key fob not working in Orlando? RoadZone Plus helps with smart key, fob, and lockout issues for push-to-start vehicles and rentals. Call (407) 222-2739.",
    eyebrow: "Key fob help",
    heading: "Key fob not working in Orlando?",
    intro:
      "A dead key fob can leave a push-to-start vehicle acting like the battery died, refusing to unlock, or refusing to start. RoadZone Plus helps Orlando drivers work through smart key, lockout, and fob-related roadside problems.",
    alertLabel: "Do not force the door or ignition",
    alertText:
      "Forcing a modern key fob, door, or push-button start can damage expensive parts. Check the simple fixes first, then call with the vehicle details.",
    serviceType: "Smart key and key fob roadside assistance",
    areaServed: "Orlando, FL",
    primaryServiceHref: "/services/smart-key-programming",
    primaryServiceLabel: "Smart Key Programming",
    secondaryHref: "/services/auto-lockout",
    secondaryLabel: "Auto Lockout Service",
    steps: [
      {
        title: "Check the obvious battery signs",
        text: "If the remote range got shorter, buttons stopped working, or the dash says key not detected, the fob battery may be weak.",
      },
      {
        title: "Look for the backup method",
        text: "Many vehicles have a hidden mechanical key, a start-button touch point, or a fob slot. Check the owner's manual if it is available.",
      },
      {
        title: "Do not keep forcing it",
        text: "Repeated button presses and forced entry can make the problem worse, especially in rentals and newer push-to-start cars.",
      },
      {
        title: "Call with the key situation",
        text: "Tell RoadZone Plus if the fob is dead, locked inside, lost, damaged, or showing key-not-detected messages.",
      },
    ],
    dispatchDetails: [
      {
        label: "Vehicle and key type",
        detail:
          "Share the year, make, model, and whether it is push-to-start, remote keyless entry, or a traditional key.",
      },
      {
        label: "What the dashboard says",
        detail:
          "Read any message such as key not detected, low key battery, immobilizer, or security warning.",
      },
      {
        label: "Where the fob is",
        detail:
          "Say whether the fob is in your hand, locked in the car, lost, wet, damaged, or possibly dead.",
      },
      {
        label: "Rental or owned vehicle",
        detail:
          "Rental key replacement is controlled by the rental company, but lockout and fob troubleshooting can still be handled roadside.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/smart-key-programming",
        title: "Smart Key Programming",
        text: "Help for key fob, remote, and smart key problems when RoadZone can service the vehicle.",
      },
      {
        href: "/services/auto-lockout",
        title: "Auto Lockout Service",
        text: "Damage-conscious help when the key or fob is locked inside.",
      },
      {
        href: "/locked-keys-in-rental-car-orlando",
        title: "Rental Car Lockout",
        text: "Visitor-focused help when a rental key or fob is locked in the vehicle.",
      },
    ],
    faqs: [
      {
        question: "Who can help if my key fob is not working in Orlando?",
        answer:
          "Call RoadZone Plus at (407) 222-2739 and describe the vehicle, dashboard message, and whether the fob is dead, locked inside, damaged, or lost.",
      },
      {
        question: "Can a dead key fob make the car act like the battery died?",
        answer:
          "Yes. Push-to-start vehicles often show key-not-detected behavior when the fob battery is weak, even if the car battery still has power.",
      },
      {
        question: "Can RoadZone Plus replace every lost key?",
        answer:
          "No service should promise that for every vehicle. Some key replacements require dealer or specialized locksmith equipment. RoadZone Plus will tell you honestly what can be handled roadside.",
      },
      {
        question: "What if the fob is locked inside the car?",
        answer:
          "That is usually a lockout call. RoadZone Plus can help with damage-conscious entry so you can retrieve the fob.",
      },
    ],
  },
  carLockout: {
    slug: "car-lockout-service-orlando",
    href: "/car-lockout-service-orlando",
    title: "Car Lockout Service Orlando FL | Locked Keys Help",
    description:
      "Locked keys in car in Orlando? RoadZone Plus provides 24/7 car lockout service for homes, hotels, parking lots, work, and roadside stops.",
    eyebrow: "Car lockout service",
    heading: "Car lockout service in Orlando, FL.",
    intro:
      "A car lockout can happen at a store, hotel, apartment, workplace, attraction lot, or roadside stop. RoadZone Plus helps Orlando drivers who locked keys in the car, left a fob inside, or cannot get back into the vehicle, with damage-conscious roadside lockout help available 24/7.",
    alertLabel: "Child or pet inside?",
    alertText:
      "If a child, pet, or vulnerable person is locked in the vehicle, call 911 first. Florida heat turns a lockout into an emergency fast.",
    serviceType: "Car lockout and locked keys roadside assistance",
    areaServed: "Orlando, FL",
    primaryServiceHref: "/services/auto-lockout",
    primaryServiceLabel: "Auto Lockout Service",
    secondaryHref: "/locked-keys-in-rental-car-orlando",
    secondaryLabel: "Rental Car Lockout",
    steps: [
      {
        title: "Check for immediate danger",
        text: "If someone is inside the vehicle, the car is running in an unsafe spot, or you feel threatened, call 911 before roadside service.",
      },
      {
        title: "Confirm where the key or fob is",
        text: "Say whether the key is visible on the seat, in the trunk, in a bag, missing, broken, or inside a rental car.",
      },
      {
        title: "Use a precise location",
        text: "Share the hotel, store, garage level, apartment building, parking row, cross street, or roadside landmark so the technician can find you.",
      },
      {
        title: "Call before forcing the door",
        text: "Do not pry the door, force the window, or keep yanking handles. A damage-conscious lockout response is usually safer and cheaper than repair work.",
      },
    ],
    dispatchDetails: [
      {
        label: "Vehicle details",
        detail:
          "Have the year, make, model, color, and body style ready. Newer vehicles and luxury models can need a more careful approach.",
      },
      {
        label: "Key location",
        detail:
          "Tell dispatch if the key is locked on the seat, in the trunk, in a purse or bag, lost, damaged, or possibly in a different location.",
      },
      {
        label: "Property type",
        detail:
          "Say whether you are at a hotel, theme park lot, apartment complex, garage, workplace, gas station, or shoulder. Entrances and parking rows matter.",
      },
      {
        label: "Rental status",
        detail:
          "If it is a rental, share the rental company if you know it. RoadZone can help with lockout access, while replacement keys may still run through the rental company.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/auto-lockout",
        title: "Auto Lockout Service",
        text: "Main RoadZone lockout service page for keys locked inside common passenger vehicles.",
      },
      {
        href: "/locked-keys-in-rental-car-orlando",
        title: "Locked Keys in a Rental Car",
        text: "Visitor-focused lockout guidance for Orlando rental cars, hotels, parks, and airport trips.",
      },
      {
        href: "/key-fob-not-working-orlando",
        title: "Key Fob Not Working",
        text: "Push-to-start and fob problems can look like a lockout or no-start issue.",
      },
    ],
    faqs: [
      {
        question: "Who should I call for a car lockout in Orlando?",
        answer:
          "Call RoadZone Plus at (407) 222-2739 for 24/7 car lockout help in Orlando. Share your exact location, vehicle details, and whether the key or fob is locked inside, lost, or damaged.",
      },
      {
        question: "Can RoadZone Plus help if I locked my keys in the car?",
        answer:
          "Yes. RoadZone Plus provides damage-conscious auto lockout assistance for common passenger vehicles at homes, hotels, parking lots, workplaces, and roadside locations.",
      },
      {
        question: "What if my key is locked in the trunk?",
        answer:
          "Call and explain that the key is in the trunk before dispatch. Some vehicles require a different approach when the passenger cabin is open but trunk access is still locked.",
      },
      {
        question: "Should I call 911 for a car lockout?",
        answer:
          "Call 911 first if a child, pet, or vulnerable person is locked inside, if the vehicle is in traffic, or if there is any safety threat. For a standard lockout with no immediate danger, call RoadZone Plus for roadside help.",
      },
      {
        question: "How much does car lockout service cost in Orlando?",
        answer:
          "The cost depends on your location, time of day, vehicle, and lockout situation. RoadZone Plus confirms the price on the call before dispatching, with no membership required.",
      },
    ],
  },
  mco: {
    slug: "orlando-airport-roadside-assistance",
    href: "/orlando-airport-roadside-assistance",
    title: "Roadside Assistance Near Orlando Airport",
    description:
      "RoadZone Plus helps near Orlando Airport with jumpstarts, lockouts, fuel delivery, tire changes, and key fob issues near MCO, garages, and rentals.",
    eyebrow: "Orlando Airport / MCO",
    heading: "Roadside assistance near Orlando Airport.",
    intro:
      "Airport roadside calls need exact location details. RoadZone Plus helps drivers near Orlando International Airport, SR 528, Semoran Boulevard, airport hotels, parking garages, cell lots, and rental-car areas with 24/7 roadside assistance.",
    alertLabel: "Airport locations are specific",
    alertText:
      "Before calling, identify the terminal, garage, level, row, hotel, road, or rental area if you can. That saves more time than describing the airport generally.",
    serviceType: "Airport roadside assistance",
    areaServed: "Orlando International Airport (MCO)",
    primaryServiceHref: "/services",
    primaryServiceLabel: "All Roadside Services",
    secondaryHref: "/locked-keys-in-rental-car-orlando",
    secondaryLabel: "Rental Car Lockout",
    steps: [
      {
        title: "Find the closest airport marker",
        text: "Use terminal, garage, level, row, cell lot, hotel name, rental center, SR 528, or Semoran Boulevard.",
      },
      {
        title: "Move out of traffic",
        text: "Airport roads move quickly and split fast. Pull into a safe shoulder, lot, or pickup area only if it is safe.",
      },
      {
        title: "Name the exact problem",
        text: "Say jumpstart, flat tire, fuel, lockout, wheel lock, battery, or key fob problem.",
      },
      {
        title: "Keep your phone on",
        text: "Airport pickups can require a second confirmation call so the technician enters from the right side.",
      },
    ],
    dispatchDetails: [
      {
        label: "Terminal or garage",
        detail:
          "Say Terminal A, B, or C if you know it, plus garage, level, row, or nearby elevator/stair marker.",
      },
      {
        label: "Rental-car details",
        detail:
          "For rental vehicles, have the rental company, vehicle color, plate, and key/fob location ready.",
      },
      {
        label: "Airport road",
        detail:
          "If you are outside the garages, use SR 528, Semoran Boulevard, Jeff Fuqua Boulevard, hotel name, or the nearest sign.",
      },
      {
        label: "Vehicle status",
        detail:
          "Tell us if the vehicle starts, rolls, has a flat, is locked, or cannot leave the lane.",
      },
    ],
    relatedLinks: [
      {
        href: "/services/jumpstart",
        title: "Airport Jumpstarts",
        text: "Help when a car sat through a flight and will not start in the garage or hotel lot.",
      },
      {
        href: "/services/auto-lockout",
        title: "Airport Lockouts",
        text: "Damage-conscious lockout help for rental and personal vehicles near MCO.",
      },
      {
        href: "/services/fuel-delivery",
        title: "Fuel Delivery",
        text: "Fuel brought to drivers who run dry on airport routes or nearby roads.",
      },
    ],
    faqs: [
      {
        question: "Does RoadZone Plus help near Orlando Airport?",
        answer:
          "Yes. RoadZone Plus serves the MCO area, airport hotels, garages, rental-car areas, SR 528, Semoran Boulevard, and nearby Orlando roads.",
      },
      {
        question: "Can you help with rental cars near MCO?",
        answer:
          "Yes. RoadZone Plus can help with common rental-car roadside problems such as lockouts, dead batteries, flat tires, fuel delivery, and key fob issues.",
      },
      {
        question: "What should I say when I call from the airport?",
        answer:
          "Give the terminal, garage, level, row, hotel, rental company, road, or nearest sign. Airport calls go faster when the location is specific.",
      },
      {
        question: "Do you help late at night near the airport?",
        answer:
          "Yes. RoadZone Plus operates 24/7 for Orlando and Central Florida roadside calls.",
      },
    ],
  },
  internationalDrive: {
    slug: "international-drive-roadside-assistance",
    href: "/international-drive-roadside-assistance",
    title: "International Drive Roadside Assistance",
    description:
      "Stuck on International Drive or near Universal? RoadZone Plus brings 24/7 roadside help for hotel lots, garages, rental cars, I-4, and Kirkman Road.",
    eyebrow: "International Drive / Universal",
    heading: "Roadside assistance on International Drive.",
    intro:
      "International Drive, Universal Orlando, Kirkman Road, Major Boulevard, and the I-4 exits around the attractions create some of the busiest roadside calls in Orlando. RoadZone Plus helps visitors, rental-car drivers, workers, and locals with 24/7 roadside assistance in the I-Drive corridor.",
    alertLabel: "Use the hotel, garage, or attraction name",
    alertText:
      "I-Drive has many close entrances and lots. A hotel name, garage level, attraction, restaurant, or cross street is the fastest way to route help.",
    serviceType: "International Drive roadside assistance",
    areaServed: "International Drive and Universal Orlando",
    primaryServiceHref: "/theme-park-roadside-assistance",
    primaryServiceLabel: "Theme Park Help",
    secondaryHref: "/services",
    secondaryLabel: "All Services",
    steps: [
      {
        title: "Move away from traffic",
        text: "If you are near a hotel entrance, I-4 ramp, or attraction exit, get to a safe lot or shoulder if possible.",
      },
      {
        title: "Use a precise landmark",
        text: "Share the hotel, garage, attraction, restaurant, cross street, or parking section instead of only saying I-Drive.",
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
          "Use the garage, level, row, walkway, hotel, or pickup point if you are near Universal Orlando.",
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
        text: "Damage-conscious help when keys or a fob are locked in a rental car.",
      },
      {
        href: "/services/fuel-delivery",
        title: "Fuel Delivery",
        text: "Fuel brought to hotel lots, I-Drive roads, and nearby attraction corridors.",
      },
    ],
    faqs: [
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
          "Give the hotel, attraction, restaurant, garage, parking row, road, or nearest cross street. The more precise the location, the faster help can reach you.",
      },
      {
        question: "Do I need a roadside membership?",
        answer:
          "No. RoadZone Plus is direct call-first roadside help with no membership required.",
      },
    ],
  },
} satisfies Record<string, FocusedRoadsidePage>;

export const focusedPageList = Object.values(focusedPages);
