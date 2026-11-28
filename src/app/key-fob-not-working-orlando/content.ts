// Copy for /key-fob-not-working-orlando (upgrade in place, 2026-11-28).
// Page-only data: the shared focusedPages.ts entry stays unchanged because protected pages use that file.
// Every maker step below is taken from the maker's own manual or support page, read 2026-11-28
// (MIT job seo-workflows/data/roadzone-plus/key-fob-upgrade-2026-11-28/sources/).

export const keyFobPage = {
  href: "/key-fob-not-working-orlando",
  title: "Key Fob Not Working or Key Not Detected? Orlando Guide",
  description:
    "Key fob dead or 'key not detected'? The backup start Toyota, Honda, Nissan, Hyundai, Ford and Chevrolet give in their own manuals, and who to call in Orlando.",
  eyebrow: "Key fob help",
  heading: "Key fob not working? Start the car first, then call.",
  answer:
    "Each of the six makers below gives a way to start a push-button car with a weak or dead fob. If the doors will not unlock, open the driver's door with the mechanical key (Toyota's and Hyundai's manuals name it), then follow your maker's backup start: on Toyota, Honda and Nissan you touch the start button with the fob, and on Hyundai you press it with the smart key; on Ford and Chevrolet you put the fob in a backup slot or pocket, then start the engine. The steps for each maker are below, as their manuals and support pages give them. If the fob is locked inside, lost or broken, or the car still says the key is not detected, call RoadZone Plus at (407) 222-2739, 24 hours a day.",
  serviceType: "Smart key and key fob roadside assistance",
  areaServed: "Orlando, FL",
  readOn: "November 28, 2026",
} as const;

export type SourceKey =
  | "toyota"
  | "honda"
  | "nissan"
  | "hyundaiSmartKey"
  | "hyundaiSlot"
  | "ford"
  | "chevroletTrax"
  | "chevroletMalibu"
  | "energizer"
  | "flhsmv";

export type MakerStep = {
  maker: string;
  where: string;
  steps: string[];
  note: string;
  sourceKeys: SourceKey[];
};

export const makerSteps: MakerStep[] = [
  {
    maker: "Toyota",
    where: "Touch the key to the engine switch",
    steps: [
      "Make sure the shift lever is in P and press the brake pedal.",
      "Touch the electronic key to the engine switch. A buzzer sounds and the switch turns to ON.",
      "Press the brake pedal firmly, then press the engine switch shortly and firmly.",
    ],
    note: "Toyota calls this a temporary measure and recommends replacing the key battery right away. If the engine still will not start, Toyota says to contact a Toyota dealer.",
    sourceKeys: ["toyota"],
  },
  {
    maker: "Honda",
    where: "Touch the start button with the H logo",
    steps: [
      "Press the ENGINE START/STOP button. It flashes for about 30 seconds.",
      "While it flashes, touch the center of the button with the H logo on the remote, buttons facing you.",
      "The button then stays on for about 10 seconds. While it is on, press the brake pedal and press ENGINE START/STOP.",
    ],
    note: "Honda's manual gives these steps when the screen says \"To start, touch start button with emblem side of remote\". If you do not press the brake pedal, the mode changes to ACCESSORY.",
    sourceKeys: ["honda"],
  },
  {
    maker: "Nissan",
    where: "Touch the ignition switch with the Intelligent Key",
    steps: [
      "Put the transmission in P (Park) and firmly press the brake.",
      "Touch the ignition switch with the Intelligent Key. A chime sounds.",
      "Within 10 seconds of the chime, push the ignition switch with the brake pressed.",
    ],
    note: "Nissan gives the same steps when environmental conditions, not the battery, interfere with the key. A key warning may still show after the engine starts; Nissan says that is not a malfunction.",
    sourceKeys: ["nissan"],
  },
  {
    maker: "Hyundai",
    where: "Press the start button with the smart key",
    steps: [
      "Press the Engine Start/Stop button directly with the smart key.",
      "On at least one 2026 model the manual names a smart key slot instead: place the key in the slot, then press the Engine Start/Stop button.",
    ],
    note: "If the smart key does not work correctly, Hyundai's manual says to open and close the door with the mechanical key.",
    sourceKeys: ["hyundaiSmartKey", "hyundaiSlot"],
  },
  {
    maker: "Ford",
    where: "Put the key in the backup slot",
    steps: [
      "Find the backup slot: Ford says it is in the console storage compartment, the cup holder or another place, depending on year and model.",
      "Place the key in the backup slot and start the engine.",
    ],
    note: "Ford says that if the key has no charge or its frequencies are jammed, you cannot start the vehicle until the key is in the backup slot. The Starting and Stopping section of the owner's manual names your slot.",
    sourceKeys: ["ford"],
  },
  {
    maker: "Chevrolet",
    where: "Put the remote in the transmitter pocket",
    steps: [
      "Place the remote in the transmitter pocket. On the 2025 Trax the buttons face the front of the vehicle; on the 2020 Malibu the pocket is in the center console and the buttons face the rear.",
      "With the vehicle in P (Park) or N (Neutral), press the brake pedal and press ENGINE START/STOP.",
    ],
    note: "The Trax manual adds that its remote has a motion sensor: if the remote sat still for a while, move it slightly and try again. Both manuals say to replace the remote battery as soon as possible.",
    sourceKeys: ["chevroletTrax", "chevroletMalibu"],
  },
];

export const detectionCauses = [
  {
    heading: "First, the fob battery signs",
    text: "RoadZone Plus checks the simplest fix first: a shorter remote range, weak button response or a low key battery message point to the fob battery. The manuals name these dash messages: Honda shows \"To start, touch start button with emblem side of remote\", Nissan shows [Key Battery Low], and the 2025 Chevrolet Trax shows NO REMOTE DETECTED, REPLACE BATTERY IN KEY.",
  },
  {
    heading: "Radio noise near an airport",
    text: "Hyundai's manual lists a radio transmitter \"such as radio station or airport\" among the things that can stop a smart key working. If your fob fails at an Orlando International Airport lot, use the backup start before you assume the fob is dead.",
  },
  {
    heading: "Your phone or other electronics",
    text: "The same list names a mobile phone or two-way radio near the key, electronic devices or credit cards next to it, and a device plugged into the car's power outlet beside the key. Keep the fob apart from your phone when you press START.",
  },
  {
    heading: "Another car's key close by",
    text: "Hyundai also lists another vehicle's smart key being used close to your car. In a busy theme park or hotel lot, wait until the drivers parked beside you have finished with their keys, then try again.",
  },
  {
    heading: "Metallic window tint",
    text: "Tinted windows, especially metallic tint, can reduce the smart key's range, according to the same Hyundai list.",
  },
  {
    heading: "A setting, not a fault",
    text: "Toyota's manual says to check that the smart key system has not been switched off in the settings and that the key's battery-saving mode is not on.",
  },
  {
    heading: "The car battery itself",
    text: "Hyundai's list also includes a discharged vehicle battery. If the dash lights are dim or nothing comes on, the problem may be the car battery, not the fob.",
  },
] as const;

export const heatNote = {
  heading: "Orlando heat and the spare fob in the glove box",
  text: "If your fob takes a CR2032, a 3-volt lithium coin cell (the size is printed on the cell), Energizer's datasheet gives that cell an operating temperature of -30 to 60 °C (-22 to 140 °F). The Florida Department of Highway Safety and Motor Vehicles says Florida temperatures rise rapidly in a parked car, even in the shade or with a window cracked, and that the inside of a vehicle can heat up by 20 degrees in just 10 minutes. Chevrolet's 2020 Malibu manual also warns not to touch the remote's metal surfaces after extreme heat: they can be hot to the touch above 59 °C (138 °F). A spare fob is safer in your bag or room than in a parked car.",
};

export const whenToCall = [
  {
    situation: "The backup start worked",
    action: "Drive, then replace the fob battery",
    detail:
      "Toyota and Chevrolet tell you to replace the key battery soon after a backup start, and Nissan says the same when the car shows a low key battery warning. No roadside call is needed.",
  },
  {
    situation: "The fob is locked inside the car",
    action: "Call RoadZone Plus for a lockout",
    detail:
      "That is a lockout, not a key problem. RoadZone Plus handles auto lockouts 24 hours a day so you can get the fob back.",
  },
  {
    situation: "The car still says key not detected",
    action: "Call with the dashboard message",
    detail:
      "Read the exact message, and give the year, make, model and key type. RoadZone Plus supports smart key and key fob programming for compatible vehicles and will tell you on the call whether it can help or a dealer or locksmith is the better route.",
  },
  {
    situation: "The fob is lost or broken",
    action: "Call before you tow the car",
    detail:
      "Smart key programming depends on the make, model, model year, immobilizer system and key type. RoadZone Plus confirms on the call what it can do, and says so when a dealer or specialized locksmith is the better route.",
  },
  {
    situation: "It is a rental car",
    action: "Call the rental company, then RoadZone Plus",
    detail:
      "Rental companies usually control replacement keys for their own fleet. RoadZone Plus can still help with a lockout and with fob troubleshooting.",
  },
  {
    situation: "Nothing lights up at all",
    action: "Treat it as a dead car battery",
    detail:
      "Dim or dark dash lights point to the car battery. RoadZone Plus brings jump start service to the car, 24 hours a day.",
  },
] as const;

export const relatedLinks = [
  {
    href: "/services/smart-key-programming",
    title: "Smart Key Programming",
    text: "Key fob and smart key programming support for compatible vehicles, with the vehicle details checked on the call.",
  },
  {
    href: "/services/auto-lockout",
    title: "Auto Lockout Service",
    text: "Help getting back in when the key or fob is locked inside the car.",
  },
  {
    href: "/locked-keys-in-rental-car-orlando",
    title: "Rental Car Lockout",
    text: "What rental companies at Orlando's airport say to do when the key is locked in.",
  },
  {
    href: "/dead-battery-car-wont-start-orlando",
    title: "Dead Battery, Car Won't Start",
    text: "When the dash is dark or the engine only clicks, the car battery is the first suspect.",
  },
  {
    href: "/car-key-replacement-cost-orlando",
    title: "Car Key Replacement Cost",
    text: "What a lost fob or smart key costs to replace, by key type.",
  },
  {
    href: "/services/jumpstart",
    title: "Jump Start Service",
    text: "Jump start service for a dead car battery, 24 hours a day.",
  },
] as const;

export const faqs = [
  {
    question: "Why does my car say key not detected?",
    answer:
      "The car is not reading the fob. Hyundai's manual lists the causes: a radio transmitter such as a radio station or airport, a phone or two-way radio near the key, another car's smart key used close by, metallic window tint and a discharged car battery. Toyota also says to check that the smart key system is switched on and that the key's battery-saving mode is off.",
  },
  {
    question: "How do I start my car with a dead key fob?",
    answer:
      "Use your maker's backup start. Toyota, Honda and Nissan: touch the start button or ignition switch with the fob (on Honda, press the button first), then press the brake pedal and the button. Hyundai: press the Engine Start/Stop button directly with the smart key, or, on at least one 2026 model, place it in the smart key slot first. Ford: put the key in the backup slot. Chevrolet: put the remote in the transmitter pocket, then press the brake pedal and ENGINE START/STOP. The exact steps from each manual are on this page.",
  },
  {
    question: "Will a dead key fob battery stop the car from starting?",
    answer:
      "It can stop the normal start. Ford says that if the key has no charge, you cannot start the vehicle until the key is in the backup slot. Toyota, Honda, Nissan, Hyundai and Chevrolet each give a backup start for a weak or dead fob, listed on this page. If the dash lights are dim or dark as well, the car battery may be the problem instead.",
  },
  {
    question: "How do I get into the car if the fob is dead?",
    answer:
      "Use the mechanical key. Toyota's and Hyundai's manuals both say to use the mechanical key to open the door when the electronic key does not work. If the key blade is locked inside or missing, call RoadZone Plus for a lockout.",
  },
  {
    question: "Is it safe to leave a spare key fob in the car in Orlando?",
    answer:
      "It is better not to. If the fob takes a CR2032 cell, Energizer's datasheet gives that cell an operating temperature up to 60 °C (140 °F), and the Florida Department of Highway Safety and Motor Vehicles says the inside of a vehicle can heat up by 20 degrees in 10 minutes. A spare in the car is also locked in with the car.",
  },
  {
    question: "What if the backup start does not work?",
    answer:
      "Toyota says to contact a Toyota dealer if the engine still will not start. Before that, check whether the car battery is the problem: dim or dark dash lights point there. Then call RoadZone Plus at (407) 222-2739 with the year, make, model, key type and the message on the dash.",
  },
  {
    question: "Can RoadZone Plus program a new key fob?",
    answer:
      "For compatible vehicles, yes: RoadZone Plus supports smart key and key fob programming. Compatibility depends on the make, model, year, immobilizer system and key type, so the team confirms what is possible on the call before heading out, and says so when a dealer or locksmith is the better route.",
  },
  {
    question: "My rental car's fob stopped working. Who do I call?",
    answer:
      "Rental companies usually control replacement keys for their own fleet, so call the rental company for a lost or broken rental key. Try the backup start for the car's maker first. RoadZone Plus can still help with a lockout and with fob troubleshooting.",
  },
] as const;

export const sources: Record<SourceKey, { name: string; href: string; note: string }> = {
  toyota: {
    name: "Toyota owner's manual, \"If the electronic key does not operate properly\"",
    href: "https://www.toyota.com/content/dam/toyotaowners/digital-owners-manual-v2/en/om02688u/chapter/ch07se020409.html",
    note: "touch the key to the engine switch; mechanical key for the doors; settings to check; contact a Toyota dealer",
  },
  honda: {
    name: "Honda 2025 Accord owner's manual, \"If the Keyless Remote Battery is Weak\"",
    href: "https://techinfo.honda.com/rjanisis/pubs/OM/AH/A30A2525IOM/enu/details/131244047-32434.html",
    note: "touch the start button with the H logo; 30 and 10 second windows",
  },
  nissan: {
    name: "Nissan owner's manual (2024 Qashqai, Nissan UK edition), \"Intelligent Key battery discharge\"",
    href: "https://www.nissan.co.uk/owners/car-repair/car-owner-manual/manuals/iom/qashqai/0j12/e1/2024/intelligent-key-battery-discharge-1.shtml",
    note: "touch the ignition switch with the Intelligent Key; push within 10 seconds of the chime",
  },
  hyundaiSmartKey: {
    name: "Hyundai owner's manual, \"Smart key\" (2024 model page)",
    href: "https://ownersmanual.hyundai.com/full_webhelp/DN8HEV/2024/en_US/idf748f1217ae.html",
    note: "press the start button directly with the smart key; mechanical key; what can stop a smart key working",
  },
  hyundaiSlot: {
    name: "Hyundai owner's manual, \"Engine Start/Stop Button\" (2026 model page)",
    href: "https://ownersmanual.hyundai.com/full_webhelp/LX3/2026/en_US/topic_gzr_w5w_ycc.html",
    note: "smart key slot for emergency starting on this model",
  },
  ford: {
    name: "Ford support, \"How do I find the Intelligent Access Key backup slot in my Ford?\"",
    href: "https://www.ford.com/support/how-tos/keys-and-locks/replace-and-reprogram-keys/how-do-i-find-the-intelligent-key-backup-slot",
    note: "backup slot in the console storage compartment, cup holder or another location",
  },
  chevroletTrax: {
    name: "Chevrolet 2025 Trax owner's manual (PDF)",
    href: "https://contentdelivery.ext.gm.com/content/dam/cope/en_us/public/pdf_assets/active/owners_manuals_browse/2025/chevrolet/trax/25_CHEV_Trax_OM_en_US_U_85602524C_2025NOV20_3P.pdf",
    note: "transmitter pocket, buttons facing the front; motion sensor",
  },
  chevroletMalibu: {
    name: "Chevrolet 2020 Malibu owner's manual (PDF)",
    href: "https://contentdelivery.ext.gm.com/bypass/gma-content-api/resources/sites/GMA/content/staging/MANUALS/4000/MA4883/en_US/3.0/20_CHEV_Malibu_OM_en_US_U_84313268C_2020JAN21_3P.pdf",
    note: "transmitter pocket in the center console, buttons facing the rear; metal surfaces hot to the touch above 59 °C (138 °F)",
  },
  energizer: {
    name: "Energizer CR2032 product datasheet (PDF)",
    href: "https://energizer.com/wp-content/uploads/2025/01/cr2032.pdf",
    note: "3.0 volts; operating temperature -30 to 60 °C",
  },
  flhsmv: {
    name: "Florida Department of Highway Safety and Motor Vehicles, Car and Driveway Safety",
    href: "https://www.flhsmv.gov/safety-center/child-safety/car-driveway-safety/",
    note: "a vehicle's inside can heat up by 20 degrees in just 10 minutes",
  },
};

export const sourceOrder: SourceKey[] = [
  "toyota",
  "honda",
  "nissan",
  "hyundaiSmartKey",
  "hyundaiSlot",
  "ford",
  "chevroletTrax",
  "chevroletMalibu",
  "energizer",
  "flhsmv",
];
