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
      "Help restarting after refuel",
      "24/7 roadside response",
    ],
    signs: [
      "Fuel gauge is empty",
      "Vehicle stalls after low-fuel warning",
      "You are stranded away from a gas station",
      "Tourist or commuter route changed and fuel ran out",
    ],
    faqs: [
      {
        question: "How much fuel do you bring?",
        answer:
          "RoadZone Plus brings enough fuel to help get you moving again and reach a nearby gas station safely.",
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
    ],
  },
];

export type Area = {
  slug: string;
  name: string;
  county: string;
  emphasis: string;
};

export const areas: Area[] = [
  {
    slug: "orlando",
    name: "Orlando",
    county: "Orange County",
    emphasis: "home base response for drivers across the city",
  },
  {
    slug: "ocoee",
    name: "Ocoee",
    county: "Orange County",
    emphasis: "west-side roadside assistance near homes, schools, and shopping centers",
  },
  {
    slug: "pine-hills",
    name: "Pine Hills",
    county: "Orange County",
    emphasis: "local help around residential roads and commuter routes",
  },
  {
    slug: "apopka",
    name: "Apopka",
    county: "Orange County",
    emphasis: "24/7 help for north Orange County drivers",
  },
  {
    slug: "altamonte-springs",
    name: "Altamonte Springs",
    county: "Seminole County",
    emphasis: "roadside support near I-4, shopping areas, and neighborhoods",
  },
  {
    slug: "university",
    name: "University",
    county: "Orange County",
    emphasis: "help for students, commuters, and nearby apartment communities",
  },
  {
    slug: "kissimmee",
    name: "Kissimmee",
    county: "Osceola County",
    emphasis: "fast service for residents, tourists, and resort-area drivers",
  },
  {
    slug: "celebration",
    name: "Celebration",
    county: "Osceola County",
    emphasis: "roadside assistance near resort corridors and local neighborhoods",
  },
  {
    slug: "lake-buena-vista",
    name: "Lake Buena Vista",
    county: "Orange County",
    emphasis: "tourist-area roadside support near hotels and attractions",
  },
  {
    slug: "clermont",
    name: "Clermont",
    county: "Lake County",
    emphasis: "west Central Florida roadside help for local and commuter drivers",
  },
  {
    slug: "winter-garden",
    name: "Winter Garden",
    county: "Orange County",
    emphasis: "roadside service across growing west Orange communities",
  },
  {
    slug: "oviedo",
    name: "Oviedo",
    county: "Seminole County",
    emphasis: "help for drivers around neighborhoods, campuses, and local roads",
  },
  {
    slug: "sanford",
    name: "Sanford",
    county: "Seminole County",
    emphasis: "north metro roadside assistance near major commuter routes",
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
