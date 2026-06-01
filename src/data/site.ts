export const site = {
  name: "RoadZone Plus",
  shortName: "RZ+",
  tagline: "Keeping You Moving 24/7.",
  domain: "roadzoneplus.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://roadzoneplus.com",
  phoneDisplay: "(407) 222-2739",
  phoneE164: "+14072222739",
  phoneHref: "tel:+14072222739",
  description:
    "24/7 roadside assistance in Orlando and Central Florida for jumpstarts, tire changes, fuel delivery, auto lockouts, wheel lock removal, battery replacement, and smart key programming.",
  address: {
    street: "7337 Habbersham Dr",
    city: "Orlando",
    state: "FL",
    zip: "32818",
    country: "US",
  },
  hours: "Open 24 hours, 7 days a week",
  coordinates: {
    latitude: 28.5781,
    longitude: -81.4801,
  },
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  priority: boolean;
  headline: string;
  summary: string;
  cardText: string;
  emergencyFit: string;
  includes: string[];
  signs: string[];
  faqs: Array<{ question: string; answer: string }>;
  intro?: string;
  process?: Array<{ step: string; detail: string }>;
  details?: Array<{ heading: string; body: string }>;
  safetyTips?: string[];
};

export const services: Service[] = [
  {
    slug: "jumpstart",
    name: "Jumpstart Service",
    shortName: "Jumpstart",
    priority: true,
    headline: "Dead battery help wherever your car is parked.",
    summary:
      "RoadZone Plus provides 24/7 jumpstart service for drivers in Orlando and nearby Central Florida cities.",
    cardText:
      "Fast battery boost service at home, work, hotels, parking lots, and roadside locations.",
    emergencyFit: "Best when the lights come on but the engine will not start.",
    includes: [
      "Battery boost on-site",
      "Basic no-start check",
      "Safe cable connection",
      "Help deciding if replacement is needed",
    ],
    signs: [
      "Clicking sound when turning the key",
      "Dashboard lights are weak or flickering",
      "Vehicle sat unused for several days",
      "Battery died after lights or accessories were left on",
    ],
    intro:
      "A dead battery is the single most common reason drivers in Orlando end up stranded, and Central Florida's climate makes it worse. Heat is harder on a car battery than cold — it speeds up the wear inside, so a battery that started fine all winter can fail without warning on a hot summer morning. Add stop-and-go traffic, short trips, and cars that sit during long workdays or days at the parks, and dead-battery calls climb fast across the Orlando area. RoadZone Plus brings a jumpstart directly to wherever your car is parked — a driveway, a workplace, a hotel, a store parking lot, or the shoulder of the road — 24 hours a day, including nights, weekends, and holidays. One call gets a technician with jump equipment on the way, with no membership and no app required.",
    process: [
      {
        step: "Call and describe what happened",
        detail:
          "Call RoadZone Plus, share your exact location, and tell us what the car is doing: a clicking sound, dim lights, or no response at all.",
      },
      {
        step: "Stay safe while help is on the way",
        detail:
          "Park as safely as you can, switch off the lights and accessories, and keep your phone nearby so the technician can reach you.",
      },
      {
        step: "On-site battery boost",
        detail:
          "The technician connects the cables safely and boosts your battery so the engine can turn over again.",
      },
      {
        step: "Decide the next step",
        detail:
          "Once you are running, we help you understand whether a recharge from driving is enough or whether the battery may need replacing soon.",
      },
    ],
    details: [
      {
        heading: "Does this work on hybrids and electric vehicles?",
        body:
          "Yes, in most cases. Hybrids and EVs still use a regular 12-volt battery to power the electronics and wake the car up. When that 12-volt battery dies, the vehicle often will not start even if the main drive battery is charged, and a standard jumpstart is exactly what it needs. Mention your year, make, and model when you call so the technician arrives ready.",
      },
      {
        heading: "Why batteries die faster in Florida",
        body:
          "Heat is harder on a car battery than cold. Central Florida's long, hot season speeds up the wear inside the battery, so dead-battery calls climb in the summer months. If your car has been slow to start, do not wait for it to fail completely.",
      },
      {
        heading: "Jumpstart or battery replacement?",
        body:
          "If this is the first time the battery has died, a jumpstart usually gets you going. If it keeps happening, ask about battery replacement so you are not stuck again next week.",
      },
      {
        heading: "What to expect when you call",
        body:
          "When you call RoadZone Plus, share your location and what the car is doing. The dispatcher confirms your vehicle and sends a technician with jump equipment ready to go. There is no app to download and no membership to join, just a direct call and a real person on the way to get you started. Keep your phone reachable so the technician can confirm exactly where you are parked, especially in a large lot, a parking garage, or along a busy road where the right entrance matters.",
      },
      {
        heading: "Why dead batteries are so common in Orlando",
        body:
          "Stop-and-go traffic on I-4 and SR 408, short trips around town, and months of Central Florida heat all shorten battery life. Many drivers get a no-start after the car sits during a long workday, an airport trip, or a few days at the parks. If your engine has been cranking slowly, treat it as an early warning rather than waiting for the battery to quit completely.",
      },
      {
        heading: "Trucks, vans, and RVs",
        body:
          "Larger vehicles use bigger batteries that can need heavier-duty equipment to boost safely. If you drive a pickup, work van, or RV, mention it when you call so the technician arrives with the right gear for your vehicle instead of making a second trip.",
      },
      {
        heading: "Signs it is the battery and not something else",
        body:
          "A slow or clicking start, dim or flickering dashboard lights, and a car that died after sitting all point to the battery. If the engine cranks normally but will not catch, the cause may be fuel, the starter, or something else entirely. The technician can help you tell the difference on-site so you are not left guessing about what to fix next.",
      },
      {
        heading: "Keeping a battery alive in Florida heat",
        body:
          "If your battery is more than three years old, have it checked before the worst of summer. Avoid leaving lights or accessories on, drive long enough to recharge after short trips, and do not ignore a slow start — in Central Florida heat, a weak battery usually fails sooner than you expect, often at the least convenient time.",
      },
    ],
    safetyTips: [
      "Turn off the headlights, radio, and air conditioning before the technician arrives.",
      "In a parking lot, stay with the vehicle so the technician can find it quickly.",
      "On a roadway shoulder, stay buckled inside the car with hazard lights on.",
      "After a jump, drive for a while or let the engine run so the battery can recharge.",
    ],
    faqs: [
      {
        question: "Can RoadZone Plus jumpstart my car at home or work?",
        answer:
          "Yes. Call RoadZone Plus and share your exact location. The team can come to homes, offices, parking lots, hotels, and roadside locations.",
      },
      {
        question: "What if the car still does not start after the jump?",
        answer:
          "The technician can check the situation and help you understand if the issue looks like a battery, alternator, starter, or another no-start problem.",
      },
      {
        question: "Will a jumpstart work if my car has been sitting for weeks?",
        answer:
          "Often yes. A battery that drained slowly while the car sat unused can usually be boosted. If it will not hold a charge afterward, it may be time for a replacement.",
      },
      {
        question: "Do you jumpstart hybrids and electric vehicles?",
        answer:
          "Yes. Hybrids and EVs rely on a 12-volt battery for their electronics, and that battery can die like any other. A jumpstart is the normal fix. Share your year, make, and model when you call.",
      },
      {
        question: "How fast can you get to me for a jumpstart?",
        answer:
          "RoadZone Plus dispatches 24/7 as soon as you call. Share your exact location and the nearest cross street, exit, or landmark so the technician can reach you as directly as possible.",
      },
      {
        question: "Do you jumpstart trucks, vans, or RVs?",
        answer:
          "Yes. Larger vehicles can need heavier-duty equipment, so tell us the vehicle type when you call and the technician will arrive prepared for a bigger battery.",
      },
      {
        question: "My dashboard lights come on but the car will not start. Is that the battery?",
        answer:
          "Often, yes. A weak or clicking start with working dashboard lights usually points to the battery. Call RoadZone Plus and the technician can boost it and help you confirm whether the battery, alternator, or something else is the cause.",
      },
      {
        question: "Can a jumpstart hurt my car's electronics?",
        answer:
          "Done correctly, no. RoadZone Plus technicians connect the cables in the proper order and polarity to protect your vehicle's electronics. That is safer than a rushed jump with mismatched cables in a parking lot.",
      },
    ],
  },
  {
    slug: "tire-change",
    name: "Tire Change Service",
    shortName: "Tire Change",
    priority: true,
    headline: "Flat tire service without waiting for a tow.",
    summary:
      "RoadZone Plus helps Orlando drivers with spare tire installation and safe roadside tire changes 24/7.",
    cardText:
      "Spare tire installation for flats at home, work, parking lots, and on the road.",
    emergencyFit: "Best when you have a spare tire and need help installing it safely.",
    includes: [
      "Spare tire installation",
      "Lug nut removal and tightening",
      "Safe roadside positioning when possible",
      "Guidance on driving limits after the spare is installed",
    ],
    signs: [
      "Flat tire or low tire warning",
      "Visible puncture or sidewall damage",
      "Car pulling hard after tire pressure drops",
      "Need help removing tight lug nuts",
    ],
    intro:
      "A flat tire can stop your day in seconds, whether it is a curb, a nail, or a blowout on hot Central Florida pavement. If you have a usable spare, RoadZone Plus comes to you and installs it safely, so you are not kneeling on the shoulder of a busy Orlando road or waiting hours for a tow you do not need.",
    process: [
      {
        step: "Call with your location and tire situation",
        detail:
          "Tell us where you are and what happened: a slow leak, a blowout, or a flat in a parking lot.",
      },
      {
        step: "Get to a safe spot if you can",
        detail:
          "If it is safe, pull onto level ground away from traffic and turn on your hazard lights.",
      },
      {
        step: "Spare tire installed on-site",
        detail:
          "The technician loosens the lug nuts, swaps the flat for your spare, and tightens everything to get you moving.",
      },
      {
        step: "Know your limits on the spare",
        detail:
          "We explain how far and how fast you can safely drive on the spare so you can reach a tire shop without trouble.",
      },
    ],
    details: [
      {
        heading: "You need a usable spare",
        body:
          "A standard roadside tire change needs a spare in good condition, either full-size or a temporary donut. No spare? Call anyway and we will help you figure out the fastest next step.",
      },
      {
        heading: "Locked wheel? We can help with that too",
        body:
          "Some flats turn into a bigger problem when a locking lug nut blocks the wheel and the wheel lock key is missing. RoadZone Plus also offers wheel lock removal, so one call can cover both.",
      },
      {
        heading: "Summer blowouts in Central Florida",
        body:
          "Hot asphalt and underinflated tires are a bad combination, and Florida summers see more blowouts because of it. If your tire pressure light is on, do not ignore it.",
      },
    ],
    safetyTips: [
      "Pull as far off the road as you safely can before stopping.",
      "Turn on your hazard lights and set out reflective triangles if you have them.",
      "Stand away from traffic, never on the traffic side of the vehicle, while you wait.",
      "On a narrow shoulder or highway, stay inside the car with your seatbelt on.",
    ],
    faqs: [
      {
        question: "Do I need to have a spare tire?",
        answer:
          "For a standard tire change, yes. If you do not have a spare, call anyway so RoadZone Plus can help you decide the fastest next step.",
      },
      {
        question: "Can you help with a flat in a parking lot?",
        answer:
          "Yes. RoadZone Plus handles tire changes at stores, apartments, hotels, workplaces, and roadside locations.",
      },
      {
        question: "Can you change a tire on the highway?",
        answer:
          "We help wherever it is safe to work. On a busy highway shoulder, position and safety come first, so share the exact road and the nearest mile marker or exit when you call.",
      },
      {
        question: "What if I do not have a spare?",
        answer:
          "Call anyway. We will talk through your options, including wheel lock removal if a locking lug nut is the problem, and help you reach the fastest safe solution.",
      },
    ],
  },
  {
    slug: "fuel-delivery",
    name: "Fuel Delivery",
    shortName: "Fuel Delivery",
    priority: true,
    headline: "Ran out of gas? Get fuel brought to your location.",
    summary:
      "RoadZone Plus offers emergency fuel delivery across Orlando and surrounding service areas.",
    cardText:
      "Emergency fuel brought to you so you can get moving again without walking to a station.",
    emergencyFit: "Best when the car is safe but out of fuel or very low on fuel.",
    includes: [
      "Emergency fuel delivery",
      "Location confirmation before dispatch",
      "Fuel added directly to your tank",
      "Help restarting after refuel",
      "Guidance to the nearest gas station",
      "24/7 roadside response",
    ],
    signs: [
      "Fuel gauge is empty",
      "Vehicle stalls after low-fuel warning",
      "You are stranded away from a gas station",
      "Fuel dropped faster than expected in heavy traffic",
      "Tourist or commuter route changed and fuel ran out",
    ],
    intro:
      "Running out of fuel can happen to anyone: a longer commute than expected, a faulty gauge, heavy traffic, or an unfamiliar route with no station in sight. RoadZone Plus brings fuel directly to your vehicle so you can get back on the road and reach a gas station, instead of leaving your car on the shoulder or walking along a busy roadway.",
    process: [
      {
        step: "Call and confirm your location",
        detail:
          "Call RoadZone Plus and share your exact location and what you are driving so the team can prepare the right response.",
      },
      {
        step: "Stay safe while help is arranged",
        detail:
          "Keep your vehicle in a safe spot with hazard lights on. The dispatcher confirms the details before a technician heads your way.",
      },
      {
        step: "Fuel is delivered to your vehicle",
        detail:
          "A technician brings fuel to your location and adds it to your tank so the engine has what it needs to start.",
      },
      {
        step: "Get moving and fill up",
        detail:
          "Once the vehicle starts, you can drive to a nearby gas station and top off the tank completely.",
      },
    ],
    details: [
      {
        heading: "What we fuel",
        body:
          "RoadZone Plus focuses on gasoline-powered passenger vehicles. If you drive a diesel vehicle, mention it when you call so the team can confirm the right help before heading out.",
      },
      {
        heading: "Who uses fuel delivery",
        body:
          "Daily commuters, rideshare and delivery drivers, tourists exploring Central Florida, and anyone caught between stations can call when the tank runs dry.",
      },
    ],
    safetyTips: [
      "Pull as far off the road as safely possible and turn on your hazard lights.",
      "Stay buckled and remain inside the vehicle if you are stopped on a highway shoulder.",
      "Keep your phone reachable so the technician can confirm your location.",
      "Note nearby landmarks, exit numbers, or mile markers to share when you call.",
    ],
    faqs: [
      {
        question: "How much fuel do you bring?",
        answer:
          "RoadZone Plus brings enough fuel to help get you moving again and reach a nearby gas station safely.",
      },
      {
        question: "Do I need to be with my vehicle for fuel delivery?",
        answer:
          "Plan to be with or near your vehicle so the technician can confirm the right car, add fuel safely, and help you get started.",
      },
      {
        question: "What information should I have ready when I call?",
        answer:
          "Share your exact location, the year, make, model, and color of your vehicle, and whether it uses gasoline or diesel so RoadZone Plus can respond accurately.",
      },
      {
        question: "Can you deliver fuel late at night?",
        answer:
          "Yes. RoadZone Plus is available 24 hours a day, including nights, weekends, and holidays.",
      },
    ],
  },
  {
    slug: "auto-lockout",
    name: "Auto Lockout Assistance",
    shortName: "Auto Lockout",
    priority: true,
    headline: "Locked out of your car? Call for damage-conscious help.",
    summary:
      "RoadZone Plus provides auto lockout assistance for drivers locked out of their vehicles in Central Florida.",
    cardText:
      "Car lockout help for keys locked inside vehicles at homes, businesses, hotels, and roadside stops.",
    emergencyFit: "Best when keys are visible inside or the vehicle door is locked unexpectedly.",
    includes: [
      "Vehicle lockout assistance",
      "Damage-conscious entry approach",
      "Help for common passenger vehicles",
      "24/7 dispatch",
    ],
    signs: [
      "Keys locked inside the vehicle",
      "Key fob battery died",
      "Door closed before keys were removed",
      "Locked out at a hotel, store, or workplace",
    ],
    intro:
      "Keys locked in the car is one of the most stressful roadside moments, and it always seems to happen at the worst time: at a store, a hotel, a workplace, or a rest stop on the way to the parks. RoadZone Plus offers damage-conscious auto lockout help across Orlando and Central Florida so you can get back into your vehicle without waiting hours or paying for a tow.",
    process: [
      {
        step: "Call with your vehicle and location",
        detail:
          "Share the year, make, model, and exactly where you are so the technician arrives prepared.",
      },
      {
        step: "Stay with your vehicle",
        detail:
          "Wait somewhere safe and keep your phone handy so the technician can confirm the car and your location.",
      },
      {
        step: "Damage-conscious entry",
        detail:
          "The technician works to open the vehicle carefully, using an approach meant to avoid damage to the door and window.",
      },
      {
        step: "Back in and moving",
        detail:
          "Once you are in, you are on your way, with no tow and no long wait.",
      },
    ],
    details: [
      {
        heading: "Visiting Orlando in a rental car?",
        body:
          "Lockouts in rental cars are common for visitors near Disney, Universal, and the resort corridor. RoadZone Plus serves Lake Buena Vista, Kissimmee, and Celebration, so travelers stranded outside a rental can still get quick local help.",
      },
      {
        heading: "Child or pet locked inside?",
        body:
          "If a person or pet is locked in and in danger, especially in Florida heat, call 911 first. Heat inside a closed car rises dangerously fast. RoadZone Plus can still help, but emergency services should come first when safety is urgent.",
      },
      {
        heading: "What we can open",
        body:
          "Most common passenger vehicles can be helped. Call with the details and we will confirm the right response before heading out.",
      },
    ],
    safetyTips: [
      "In a parking lot or garage, wait in a well-lit, visible spot.",
      "Keep your phone charged and reachable so the technician can find you.",
      "Never leave a child or pet in a closed car in the heat; call 911 immediately.",
      "Have your ID ready, since the technician may confirm the vehicle is yours.",
    ],
    faqs: [
      {
        question: "Can you unlock every vehicle?",
        answer:
          "Most common passenger vehicles can be helped. Call with the year, make, model, and location so RoadZone Plus can confirm the right response.",
      },
      {
        question: "Should I call if a child or pet is locked inside?",
        answer:
          "If a person or pet is in danger, call 911 first. RoadZone Plus can still be contacted for roadside help, but emergency services should be first when safety is urgent.",
      },
      {
        question: "How is this different from calling a locksmith?",
        answer:
          "RoadZone Plus is a roadside service, so a lockout can be handled alongside other roadside needs in one call. For new keys cut or complex ignition work, a specialty locksmith may still be needed, and we will tell you honestly if that is the case.",
      },
      {
        question: "Can you help if I am locked out of a rental car?",
        answer:
          "Yes. We help visitors and locals alike. Have the year, make, model, and your exact location ready when you call.",
      },
    ],
  },
  {
    slug: "wheel-lock-removal",
    name: "Wheel Lock Removal",
    shortName: "Wheel Lock Removal",
    priority: true,
    headline: "Missing wheel lock key? Get help removing locked lug nuts.",
    summary:
      "RoadZone Plus helps drivers who cannot remove a wheel because the wheel lock key is missing or damaged.",
    cardText:
      "Wheel lock removal support when a flat tire turns into a stuck wheel problem.",
    emergencyFit: "Best when the tire needs service but a locking lug nut blocks removal.",
    includes: [
      "Wheel lock assessment",
      "Locked lug nut removal support",
      "Help moving forward with tire service",
      "Service for common passenger vehicles",
    ],
    signs: [
      "Wheel lock key is missing",
      "Locking lug nut is stripped",
      "Tire shop or roadside kit cannot remove the wheel",
      "Flat tire plus locked wheel hardware",
    ],
    intro:
      "Wheel locks are special locking lug nuts that protect your wheels from theft, and they work fine until the small key that removes them goes missing. Without it, you cannot take the wheel off, which turns a simple flat tire into a stuck vehicle. Many drivers do not even realize their car has wheel locks until they need them off. RoadZone Plus helps Orlando and Central Florida drivers remove wheel locks when the key is lost, stripped, or broken, so tire service can actually happen.",
    process: [
      {
        step: "Call and describe the wheel lock problem",
        detail:
          "Tell us the year, make, and model, and what is happening: a lost key, a stripped lock, or a flat you cannot reach because of the lock.",
      },
      {
        step: "Confirm the situation",
        detail:
          "We confirm the details so the technician arrives with the right approach for your vehicle.",
      },
      {
        step: "Wheel lock removed on-site",
        detail:
          "The technician works to remove the locking lug nut so the wheel can come off.",
      },
      {
        step: "Move on to the tire service",
        detail:
          "With the lock off, a spare can go on or the wheel can be serviced, getting you back on the road.",
      },
    ],
    details: [
      {
        heading: "Why a lost wheel lock key is such a problem",
        body:
          "A locking lug nut needs its matching key pattern to come off. A normal socket or roadside kit will not budge it, and many tire shops will turn you away until the lock is removed. That is the gap RoadZone Plus fills.",
      },
      {
        heading: "Flat tire plus a missing wheel lock key",
        body:
          "This is the worst-case combination: a flat you cannot fix because the wheel will not come off. One call to RoadZone Plus can cover both the wheel lock removal and the tire change.",
      },
      {
        heading: "How wheel locks go missing",
        body:
          "The little key often lives in a glovebox, trunk well, or center console, and it disappears after a tire rotation, a used-car purchase, or simply over the years. If you have never seen yours, check before you are stuck on the road.",
      },
    ],
    safetyTips: [
      "If you are stranded, pull to a safe, level spot and turn on your hazard lights.",
      "Check the glovebox, center console, and trunk for the wheel lock key before you call.",
      "Have your vehicle's year, make, and model ready when you call.",
      "Stay clear of traffic while the technician works.",
    ],
    faqs: [
      {
        question: "Can wheel lock removal be done roadside?",
        answer:
          "In many cases, yes. Call with the vehicle details and what happened so RoadZone Plus can confirm the right equipment.",
      },
      {
        question: "Is this different from a tire change?",
        answer:
          "Yes. Tire changes require the wheel to come off. Wheel lock removal is the extra help needed when a locking lug nut blocks that step.",
      },
      {
        question: "I lost my wheel lock key. Can you still get the wheel off?",
        answer:
          "In many cases, yes. Call with your year, make, and model so RoadZone Plus can confirm the right approach before heading out.",
      },
      {
        question: "Will removing the wheel lock damage my wheel?",
        answer:
          "The goal is careful removal focused on the locking lug nut. Share your vehicle details when you call so the technician arrives prepared for your specific setup.",
      },
    ],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    shortName: "Battery Replacement",
    priority: false,
    headline: "Battery replacement help when a jump is not enough.",
    summary:
      "RoadZone Plus can help with battery replacement needs when your vehicle battery is beyond a simple boost.",
    cardText:
      "Battery support for drivers dealing with repeated no-start problems or a failed battery.",
    emergencyFit: "Best when the battery keeps dying or will not hold a charge.",
    includes: [
      "Battery condition check",
      "Replacement guidance",
      "Installation support when available",
      "Dead-battery roadside help",
    ],
    signs: [
      "Car needs repeated jumps",
      "Battery warning light is on",
      "Battery is swollen, corroded, or old",
      "Vehicle starts then dies again later",
    ],
    intro:
      "When a battery is too far gone for a jumpstart to hold, replacement is the real fix. Central Florida heat is hard on batteries, so many drivers find theirs failing after just a few summers. RoadZone Plus helps drivers dealing with repeated no-starts and failing batteries, so a dead battery does not strand you again next week.",
    process: [
      {
        step: "Call and describe the battery problem",
        detail:
          "Tell us what is happening, such as repeated jumps, a warning light, or a battery that will not hold a charge, along with your year, make, and model.",
      },
      {
        step: "Battery condition check",
        detail:
          "The technician looks at the battery and the situation to confirm whether replacement is the right call.",
      },
      {
        step: "Replacement support on-site",
        detail:
          "Where it can be done on-site, the technician helps with installing a replacement battery so you can get moving.",
      },
      {
        step: "Back on the road",
        detail:
          "With a healthy battery in place, you are not facing another dead-battery morning.",
      },
    ],
    details: [
      {
        heading: "Why Florida heat kills batteries",
        body:
          "Heat speeds up the chemical wear inside a battery far more than cold does. In Central Florida's long hot season, batteries often last fewer years than the label suggests, and they tend to fail suddenly rather than warn you.",
      },
      {
        heading: "Hybrids and electric vehicles",
        body:
          "Hybrids and EVs use a 12-volt battery for their electronics, and it wears out like any other. If your hybrid or EV keeps failing to start, the 12-volt battery may need attention. Share your make and model when you call.",
      },
      {
        heading: "Jumpstart first, or replace?",
        body:
          "A first-time dead battery is usually a jumpstart. Repeated failures, a swollen or corroded battery, or a battery several years old in Florida heat point toward replacement.",
      },
    ],
    safetyTips: [
      "If the car keeps dying, avoid parking somewhere you could get stranded overnight.",
      "Note how old the battery is if you know; age plus heat is the usual culprit.",
      "Have your year, make, and model ready when you call.",
      "Turn off lights and accessories to avoid draining a weak battery further.",
    ],
    faqs: [
      {
        question: "Should I ask for a jumpstart or battery replacement?",
        answer:
          "If this is the first dead battery issue, start with jumpstart service. If the battery keeps failing, RoadZone Plus can help determine if replacement is the better move.",
      },
      {
        question: "Do you help at night?",
        answer:
          "Yes. RoadZone Plus is a 24/7 roadside assistance company.",
      },
      {
        question: "How long do car batteries last in Florida?",
        answer:
          "Heat shortens battery life, so many Central Florida drivers see batteries fail sooner than the typical three-to-five-year range. If yours is a few years old and struggling, do not wait for it to die completely.",
      },
      {
        question: "Do you help with hybrid and EV batteries?",
        answer:
          "RoadZone Plus helps with the 12-volt battery that hybrids and EVs use for their electronics and startup. Share your year, make, and model so the team can confirm the right help before heading out.",
      },
    ],
  },
  {
    slug: "smart-key-programming",
    name: "Smart Key Programming",
    shortName: "Smart Keys",
    priority: false,
    headline: "Smart key and key fob help for modern vehicles.",
    summary:
      "RoadZone Plus supports smart key programming needs for drivers dealing with key fob and access issues.",
    cardText:
      "Smart key programming support for compatible vehicles and key-related roadside problems.",
    emergencyFit: "Best when your key fob or smart key stops working and you need access or starting help.",
    includes: [
      "Smart key issue review",
      "Compatible key programming support",
      "Key fob troubleshooting",
      "Vehicle access guidance",
    ],
    signs: [
      "Smart key is not recognized",
      "Key fob stopped unlocking the car",
      "Push-to-start vehicle will not detect key",
      "New key needs programming",
    ],
    intro:
      "Modern cars rely on smart keys and key fobs to unlock and start, and when one stops working it can leave you stuck. RoadZone Plus supports smart key and key fob issues for compatible vehicles, helping drivers who cannot get in or get started because of a key problem.",
    process: [
      {
        step: "Call with your key situation and vehicle",
        detail:
          "Describe what the key is doing and share your year, make, and model so the team can confirm compatibility.",
      },
      {
        step: "Review the smart key issue",
        detail:
          "The technician checks whether the problem is a dead fob battery, a key that needs programming, or another access issue.",
      },
      {
        step: "Programming or troubleshooting support",
        detail:
          "For compatible vehicles and keys, the technician helps with programming or troubleshooting so the key works again.",
      },
      {
        step: "Back in and running",
        detail:
          "Once the key is sorted, you can unlock and start your vehicle and get on your way.",
      },
    ],
    details: [
      {
        heading: "Compatibility depends on the vehicle",
        body:
          "Smart key programming varies a lot between makes, models, and key types. Calling with your exact vehicle details lets RoadZone Plus confirm what is possible before heading out.",
      },
      {
        heading: "Sometimes it is just the fob battery",
        body:
          "A key fob that suddenly stops working often just needs a fresh battery. Mention this when you call so the simplest fix is checked first.",
      },
      {
        heading: "Lockout vs. key programming",
        body:
          "If you are simply locked out, auto lockout assistance may be faster. Key programming is for when the key itself is not recognized or needs to be set up.",
      },
    ],
    safetyTips: [
      "Keep any spare keys handy; a working spare can be the fastest solution.",
      "Have your year, make, and model ready when you call.",
      "If you are stranded somewhere unsafe, move to a secure, well-lit spot.",
      "Note whether the fob recently got wet or was dropped; it helps diagnose the issue.",
    ],
    faqs: [
      {
        question: "Can every smart key be programmed roadside?",
        answer:
          "Compatibility depends on the vehicle and key. Call with the year, make, model, and key situation so RoadZone Plus can confirm.",
      },
      {
        question: "Is smart key programming available 24/7?",
        answer:
          "Call RoadZone Plus anytime. Availability can depend on vehicle compatibility and the exact key issue.",
      },
      {
        question: "My key fob suddenly stopped working. What now?",
        answer:
          "Often the fob battery has died. Call with your vehicle details and we will help you check the simplest fixes first before anything more involved.",
      },
      {
        question: "Can you make a brand-new key if mine is lost?",
        answer:
          "It depends on the vehicle and key type. Cutting and programming a new key can require specialty equipment, and we will tell you honestly whether RoadZone Plus can help or a dealer or locksmith is the better route.",
      },
    ],
  },
];

export type Area = {
  slug: string;
  name: string;
  county: string;
  emphasis: string;
  intro: string;
  coverage: string[];
  /** Optional title override (used to differentiate the Orlando hub-city page from the homepage). */
  metaTitle?: string;
  /** Optional H1 override (defaults to "Roadside assistance in {name}, FL."). */
  heading?: string;
  /** Flags resort-corridor cities so they link to the theme-park guide. */
  nearParks?: boolean;
};

export const areas: Area[] = [
  {
    slug: "orlando",
    name: "Orlando",
    county: "Orange County",
    emphasis: "home base response for drivers across the city",
    metaTitle: "Orlando Roadside Assistance by Neighborhood, FL",
    heading: "Roadside assistance across Orlando's neighborhoods.",
    intro:
      "Orlando is home base for RoadZone Plus, so drivers in every part of the city can reach us — from downtown and College Park to Pine Hills, Conway, MetroWest, and the tourist districts. Whether it is a dead battery, a flat tire, a lockout, or an empty tank, help can be sent to your exact neighborhood, parking lot, or stretch of I-4 or SR 408.",
    coverage: [
      "Interstate 4 (I-4)",
      "SR 408 East-West Expressway",
      "Downtown Orlando",
      "International Drive area",
      "Orange Blossom Trail (US 17-92)",
    ],
  },
  {
    slug: "ocoee",
    name: "Ocoee",
    county: "Orange County",
    emphasis: "west-side roadside assistance near homes, schools, and shopping centers",
    intro:
      "Ocoee sits on Orlando's west side near SR 429 and Florida's Turnpike, where commuters and families are often caught out by a dead battery or flat on the way to work or school. RoadZone Plus brings roadside help to homes, shopping centers, and the roads around West Oaks.",
    coverage: [
      "SR 429 (Western Beltway)",
      "Florida's Turnpike",
      "West Colonial Drive (SR 50)",
      "Clarke Road",
      "West Oaks Mall area",
    ],
  },
  {
    slug: "pine-hills",
    name: "Pine Hills",
    county: "Orange County",
    emphasis: "local help around residential roads and commuter routes",
    intro:
      "Pine Hills is a busy residential community just west of downtown Orlando, with heavy daily traffic along Silver Star Road and Pine Hills Road. RoadZone Plus helps drivers stuck on these commuter routes and in the surrounding neighborhoods.",
    coverage: [
      "Silver Star Road",
      "Pine Hills Road",
      "West Colonial Drive (SR 50)",
      "Hiawassee Road",
      "Near SR 408",
    ],
  },
  {
    slug: "apopka",
    name: "Apopka",
    county: "Orange County",
    emphasis: "24/7 help for north Orange County drivers",
    intro:
      "Apopka anchors northwest Orange County along US 441 and the Wekiva Parkway (SR 429), in an area known as the Indoor Foliage Capital of the World. RoadZone Plus covers these spread-out routes where help can be hard to find when a battery dies or a tire goes flat.",
    coverage: [
      "US 441 (Orange Blossom Trail)",
      "SR 429 Wekiva Parkway",
      "SR 436",
      "Rock Springs Road",
      "Downtown Apopka",
    ],
  },
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    county: "Seminole County",
    emphasis: "roadside support near I-4, shopping areas, and neighborhoods",
    intro:
      "Altamonte Springs is a shopping and commuter hub in Seminole County wrapped around I-4 and SR 436. RoadZone Plus serves the busy roads near Altamonte Mall and Cranes Roost, plus the surrounding neighborhoods, day or night.",
    coverage: [
      "Interstate 4 (I-4)",
      "SR 436 (Semoran Boulevard)",
      "Altamonte Mall area",
      "Cranes Roost Park",
      "SR 434",
    ],
  },
  {
    slug: "university",
    name: "University",
    county: "Orange County",
    emphasis: "help for students, commuters, and nearby apartment communities",
    intro:
      "The University area centers on the University of Central Florida (UCF), with students, commuters, and apartment communities packed along Alafaya Trail and University Boulevard. RoadZone Plus is ready for the dead batteries and lockouts common around campus and Research Park.",
    coverage: [
      "University of Central Florida (UCF)",
      "Alafaya Trail (SR 434)",
      "University Boulevard",
      "Research Park",
      "East Colonial Drive (SR 50)",
    ],
  },
  {
    slug: "kissimmee",
    name: "Kissimmee",
    county: "Osceola County",
    emphasis: "fast service for residents, tourists, and resort-area drivers",
    nearParks: true,
    intro:
      "Kissimmee runs along the US 192 tourist corridor near Walt Disney World, mixing residents, resort visitors, and rideshare drivers. RoadZone Plus helps locals and travelers stranded along the highways, hotels, and routes around Lake Tohopekaliga.",
    coverage: [
      "US 192 (Irlo Bronson Memorial Hwy)",
      "Florida's Turnpike",
      "John Young Parkway",
      "Near Walt Disney World",
      "Downtown Kissimmee",
    ],
  },
  {
    slug: "celebration",
    name: "Celebration",
    county: "Osceola County",
    emphasis: "roadside assistance near resort corridors and local neighborhoods",
    nearParks: true,
    intro:
      "Celebration is a master-planned community next to Walt Disney World, just off US 192 and World Drive. RoadZone Plus serves residents and the many visitors staying nearby when a flat tire, lockout, or empty tank interrupts the trip.",
    coverage: [
      "US 192",
      "World Drive",
      "Celebration Avenue",
      "Near Walt Disney World",
      "I-4 access",
    ],
  },
  {
    slug: "lake-buena-vista",
    name: "Lake Buena Vista",
    county: "Orange County",
    emphasis: "tourist-area roadside support near hotels and attractions",
    nearParks: true,
    intro:
      "Lake Buena Vista is the heart of the Disney resort area, home to Disney Springs and dozens of hotels right off I-4. RoadZone Plus helps tourists in rental cars and locals alike when they are locked out, out of gas, or stuck with a dead battery near the parks.",
    coverage: [
      "Interstate 4 (I-4)",
      "Disney Springs",
      "Apopka-Vineland Road",
      "Hotel Plaza Boulevard",
      "Near the Disney parks",
    ],
  },
  {
    slug: "clermont",
    name: "Clermont",
    county: "Lake County",
    emphasis: "west Central Florida roadside help for local and commuter drivers",
    intro:
      "Clermont sits west of Orlando in Lake County along US 27 and near Florida's Turnpike, known for its rolling hills and the historic Citrus Tower. RoadZone Plus reaches commuters and local drivers across these longer routes where a breakdown can leave you far from help.",
    coverage: [
      "US 27",
      "Florida's Turnpike",
      "SR 50 (Colonial Drive)",
      "Citrus Tower area",
      "Downtown Clermont",
    ],
  },
  {
    slug: "winter-garden",
    name: "Winter Garden",
    county: "Orange County",
    emphasis: "roadside service across growing west Orange communities",
    intro:
      "Winter Garden blends a historic downtown on Plant Street with fast-growing communities near SR 429 and Winter Garden Village. RoadZone Plus serves the West Orange Trail area and the commuter roads where drivers get caught by flats and dead batteries.",
    coverage: [
      "SR 429 (Western Beltway)",
      "Plant Street / Historic Downtown",
      "West Orange Trail",
      "Winter Garden Village",
      "SR 50 (Colonial Drive)",
    ],
  },
  {
    slug: "oviedo",
    name: "Oviedo",
    county: "Seminole County",
    emphasis: "help for drivers around neighborhoods, campuses, and local roads",
    intro:
      "Oviedo is a Seminole County community near UCF, built around Oviedo on the Park and the roads along Red Bug Lake Road and SR 417. RoadZone Plus helps students, families, and commuters stranded on these neighborhood and campus routes.",
    coverage: [
      "SR 417 (Central Florida GreeneWay)",
      "Red Bug Lake Road",
      "Mitchell Hammock Road",
      "Oviedo on the Park",
      "Near UCF",
    ],
  },
  {
    slug: "sanford",
    name: "Sanford",
    county: "Seminole County",
    emphasis: "north metro roadside assistance near major commuter routes",
    intro:
      "Sanford sits on the shores of Lake Monroe in north Seminole County, anchored by a historic downtown and Orlando Sanford International Airport. RoadZone Plus covers the commuter routes along I-4 and SR 417 where north-metro drivers need roadside help.",
    coverage: [
      "Interstate 4 (I-4)",
      "SR 417 (GreeneWay)",
      "Orlando Sanford International Airport",
      "Lake Monroe / Downtown Sanford",
      "US 17-92",
    ],
  },
];

export const counties = ["Orange County", "Osceola County", "Seminole County", "Polk County"];

export const primaryKeywords = [
  "jumpstart Orlando FL",
  "auto lockout Orlando FL",
  "fuel delivery Orlando FL",
  "tire change Orlando FL",
  "wheel lock removal Orlando FL",
  "24 hour roadside assistance Orlando",
];

export const seoFocus = {
  primarySurface: "Organic local-service search",
  mapPackStatus: "Deferred until a Google Business Profile exists",
  launchFocus:
    "Indexable service pages, indexable service-area pages, accurate NAP, structured data, and click-to-call conversion.",
};

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
