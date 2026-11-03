import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BatteryCharging,
  CheckCircle2,
  ExternalLink,
  Info,
  MapPin,
  PhoneCall,
  Plane,
  ShieldCheck,
  Snowflake,
  ThermometerSun,
  Wrench,
  Zap,
} from "lucide-react";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, businessId } from "@/lib/seo";

const path = "/car-wont-start-in-cold-orlando";
const title = "Car Won't Start in the Cold? Orlando Guide";
const description =
  "An Orlando cold morning does not freeze your car, it exposes a battery summer wore down. AAA: 35% weaker at 32°F. What each sound means, and 24/7 jumpstart help.";
const updatedIso = "2026-11-03";
const updatedLabel = "November 3, 2026";
const heroImage = "/visuals/battery-cost/jumper-cable-clamps.webp";
const heroAlt =
  "Two pairs of red and black jumper cable clamps resting on an open engine";

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
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 800,
        alt: heroAlt,
      },
    ],
  },
  twitter: {
    title,
    description,
  },
};

// Every temperature, percentage and battery fact on this page is quoted from a
// page in `sources`, read on the date above: AAA for cold-weather battery loss
// and no-start symptoms, Interstate Batteries for heat damage, the National
// Weather Service F-6 climate reports and the NOAA Regional Climate Centers
// record for Orlando International Airport (MCO), the U.S. Department of
// Energy for hybrids and EVs, and a Toyota owner's manual for the hybrid 12-volt
// battery. RoadZone Plus facts are limited to what the live jumpstart and
// battery replacement service pages say: no prices, arrival times, certifications
// or years in business are claimed here, and nothing is reported as RoadZone's
// own field experience.
const sources = {
  aaaOregon: {
    name: "AAA Oregon/Idaho: Winter Battery Preparation (read November 3, 2026)",
    short: "AAA",
    href: "https://info.oregon.aaa.com/winter-battery-preparation/",
    note: "AAA Automotive Research Center reports that at 32°F a car's battery loses about 35 percent of its strength, and at 0°F about 60 percent; starting in cold weather may need up to twice the amount of current than normal.",
  },
  aaaNortheast: {
    name: "AAA Northeast: Arctic Outbreak to Bring Frigid Conditions That Can Wreak Havoc on Vehicles (January 20, 2026; read November 3, 2026)",
    short: "AAA Northeast",
    href: "https://magazine.northeast.aaa.com/daily/newsroom/arctic-outbreak-to-bring-frigid-conditions-that-can-wreak-havoc-on-vehicles/",
    note: "The cold slows the chemical reaction that creates an electrical charge, which makes starting a vehicle more difficult, especially with batteries that are three to five years old or those that previously went dead and needed a jump-start; tires lose about one PSI of pressure for every 10 degrees the air temperature drops, and about one PSI a month on their own.",
  },
  aaaReasons: {
    name: "AAA Automotive: 14 Reasons Why Your Car Won't Start (read November 3, 2026)",
    short: "AAA, 14 reasons",
    href: "https://www.aaa.com/autorepair/articles/14-reasons-why-your-car-wont-start",
    note: "The most common reason a car won't start is a bad alternator or battery; battery signs include dim dashboard lights, a corroded terminal, a battery over 3 to 5 years old, and a clicking noise or nothing at all when you turn the key; a slow crank, or a single click or silence while the dashboard lights still come on, points to the starter; a car that has power but still won't start may have a starter, ignition switch or fuel system problem; worn spark plugs show as the engine sputtering or stalling when you try to start it.",
  },
  aaaNewEngland: {
    name: "AAA Northern New England: Prepare Yourself and Your Vehicle for the Cold (December 15, 2016; read November 3, 2026)",
    short: "AAA Northern New England",
    href: "http://newsne-aaa.iprsoftware.com/news/prepare-yourself-and-your-vehicle-for-the-cold",
    note: "Hard starts, rough idling, stalling or diminished power could signal a problem that will be exacerbated by cold weather; with newer vehicles, warming up the car might not be a necessary requirement from a mechanical standpoint, but it helps clear ice and condensation from the windows.",
  },
  aaaBrochure: {
    name: "AAA: Make Sense of Car Care, Batteries (brochure, read November 3, 2026)",
    short: "AAA car care brochure",
    href: "https://exchange.aaa.com/wp-content/uploads/2012/09/AAA-Car-Care-Battery.pdf",
    note: "Warning signs of a weak battery: the starter cranks the engine slowly, the headlamps are dim at idle, the battery or charging lamp is on; when jump-starting, if the engine seems to be turning too slowly, stop cranking.",
  },
  interstateHeat: {
    name: "Interstate Batteries: Is your car's battery ready for the summer? (read November 3, 2026)",
    short: "Interstate Batteries",
    href: "https://www.interstatebatteries.com/en-lx/heat-kills-batteries",
    note: "Summer heat is brutal on a car battery; the warmer the weather, the faster a battery will corrode; heat shortens battery life and it typically becomes more apparent in cold weather when an engine struggles to start; a battery loses about 35 percent of its strength at 32°F while the engine requires nearly twice the power to start; the average battery lasts three to five years.",
  },
  interstateDied: {
    name: "Interstate Batteries: Why Your Car Battery Died (August 30, 2022; read November 3, 2026)",
    short: "Interstate, why batteries die",
    href: "https://www.interstatebatteries.com/blog/why-did-my-car-battery-die",
    note: "Batteries work best at 80°F; hotter than 90°F the chemistry degrades the components inside; a couple of intensely hot summers in a row can shrink a battery's capacity enough for one winter's cold snap to overwhelm it; a car battery often dies on cold mornings; short trips drain a battery the alternator never fully recharges; park in the shade.",
  },
  interstateTest: {
    name: "Interstate Batteries: When Your Car Battery is at Death's Door (March 31, 2023; read November 3, 2026)",
    short: "Interstate, battery test",
    href: "https://www.interstatebatteries.com/blog/get-a-battery-test",
    note: "Warm temperatures, a healthy engine and routine drives can mask a weak battery; if the temps drop, a light gets left on or you don't drive a few days, that's when the car won't start; a worn-out battery could die at 40°F and a severely weakened one at 60°F; a test reads Good, Weak or Replace now.",
  },
  consumerReports: {
    name: "Consumer Reports: How Hot Weather Affects Your Car Battery (September 16, 2022; read November 3, 2026)",
    short: "Consumer Reports, quoting AAA",
    href: "https://www.consumerreports.org/cars/car-batteries/how-hot-weather-affects-your-car-battery-what-to-do-about-it-a4527456418/",
    note: "Car batteries typically last three to five years according to AAA, from 58 months or longer in the farthest northern regions of the U.S. to less than 41 months in the most southern regions; AAA responds to nearly 2 million battery-related service calls each summer.",
  },
  nwsJan2026: {
    name: "National Weather Service Melbourne: Preliminary Local Climatological Data (F-6), Orlando International Airport, January 2026 (read November 3, 2026)",
    short: "NWS F-6, January 2026",
    href: "https://forecast.weather.gov/product.php?site=MLB&issuedby=MCO&product=CF6&format=TXT&version=11&glossary=0",
    note: "Lowest temperature 31°F on January 31 and 32°F on January 16; eight mornings at or below 40°F; thirteen at or below 45°F; average low for the month 48.2°F. Preliminary data; the version number in this link changes as new months are issued.",
  },
  nwsJan2025: {
    name: "National Weather Service Melbourne: Preliminary Local Climatological Data (F-6), Orlando International Airport, January 2025 (read November 3, 2026)",
    short: "NWS F-6, January 2025",
    href: "https://forecast.weather.gov/product.php?site=MLB&issuedby=MCO&product=CF6&format=TXT&version=23&glossary=0",
    note: "Lowest temperature 38°F (January 9, 10 and 25); no freeze; six mornings at or below 40°F; average low for the month 46.4°F. Preliminary data; the version number in this link changes as new months are issued.",
  },
  acis: {
    name: "NOAA Regional Climate Centers, ACIS daily record for Orlando Area (MCO threaded station), pulled November 3, 2026",
    short: "NOAA RCC climate record",
    href: "https://data.rcc-acis.org/StnData",
    note: "June through September 2026 at Orlando International: 102 days with a high of 90°F or more and 55 days at 95°F or more, peak 99°F; December 2025 lowest 37°F (December 31), one morning at or below 40°F; 1991-2020 normal January low about 49 to 50°F. Pulled by query, raw JSON saved in the MIT receipt folder.",
  },
  doeCold: {
    name: "U.S. Department of Energy, fueleconomy.gov: Fuel Economy in Cold Weather (read November 3, 2026)",
    short: "fueleconomy.gov",
    href: "https://www.fueleconomy.gov/feg/coldweather.shtml",
    note: "At 20°F a conventional gasoline car's city mileage is roughly 15 percent lower than at 77°F; hybrids drop about 30 to 34 percent; EV range can drop by 41 percent with the heater in use, about 12 percent without it; battery performance decreases in cold weather, making it harder for the alternator to keep the battery charged; tire pressure decreases in colder temperatures.",
  },
  toyota: {
    name: "Toyota Prius owner's manual: If the 12-volt battery is discharged (read November 3, 2026)",
    short: "Toyota owner's manual",
    href: "https://www.mytoyo.com/if_the_12_volt_battery_is_discharged-252.html",
    note: "The hybrid system cannot be started by push-starting; it is jump-started from an exclusive jump starting terminal under the hood using a second vehicle's 12-volt battery, and the READY indicator must come on; if the vehicle is left for a long time the 12-volt battery may discharge and the hybrid system may be unable to start; in some cases the smart key cannot unlock the doors when the 12-volt battery is discharged.",
  },
  nhtsa: {
    name: "NHTSA: Tires, TireWise (read November 3, 2026)",
    short: "NHTSA",
    href: "https://www.nhtsa.gov/vehicle-safety/tires",
    note: "Check the pressure of all tires, including the spare, at least once a month when the tires are cold, meaning the car has not been driven for at least three hours; tire pressure monitoring systems only warn when a tire is significantly underinflated.",
  },
};

type SourceKey = keyof typeof sources;

const sounds: Array<{
  hear: string;
  cause: string;
  doNow: string;
  cite: SourceKey[];
}> = [
  {
    hear: "Fast clicking, dim dash lights",
    cause:
      "A battery too weak for the cold. AAA lists a clicking noise and dim dashboard lights as battery signs, and says the battery is the first thing to check.",
    doNow:
      "Turn off lights, fan and radio. Do not keep trying. A jumpstart usually gets the car going; then get the battery tested the same day.",
    cite: ["aaaReasons", "aaaOregon"],
  },
  {
    hear: "Slow, dragging crank",
    cause:
      "The battery is low on cranking power, or the starter is tired. AAA's brochure calls a slow crank the first warning sign of a weak battery; its no-start guide also lists a low crank under the starter.",
    doNow:
      "AAA says to stop cranking when the engine turns too slowly. Call for a boost and a battery check rather than draining what is left.",
    cite: ["aaaBrochure", "aaaReasons"],
  },
  {
    hear: "One click or silence, dash lights on",
    cause:
      "AAA: a single click or nothing at all while the dashboard lights still come on points to the starter. A corroded or loose terminal can look the same.",
    doNow:
      "A jump may not help. Tell the technician exactly what you hear so the right next step is clear on arrival.",
    cite: ["aaaReasons"],
  },
  {
    hear: "Cranks normally, will not catch",
    cause:
      "The battery is doing its job. AAA says a car that has power but still won't start may have a starter, ignition switch or fuel system problem; sputtering on start can be worn spark plugs.",
    doNow:
      "Not a battery call. Stop cranking and arrange a shop. If the car is blocking a lane or a gate, call for help getting it somewhere safe.",
    cite: ["aaaReasons"],
  },
  {
    hear: "Nothing at all, no lights, fob does nothing",
    cause:
      "Either the 12-volt battery is completely flat or the key fob's own battery has died. Toyota's manual notes the smart key may not unlock the doors when the 12-volt battery is discharged.",
    doNow:
      "Try the mechanical key or the fob's backup method, then call. See our key fob guide if the car reacts to nothing.",
    cite: ["toyota"],
  },
];

const heatThenCold = [
  {
    title: "Summer does the damage",
    text: "Interstate Batteries: summer heat is brutal on a car battery, the warmer the weather the faster it corrodes, and batteries work best at 80°F. Above 90°F the chemistry inside starts to degrade the components that hold the charge.",
    cite: ["interstateHeat", "interstateDied"] as SourceKey[],
  },
  {
    title: "Orlando had 102 days at 90°F or more this summer",
    text: "June through September 2026 at Orlando International: 102 days with a high of at least 90°F and 55 days at 95°F or more, peaking at 99°F. That is the under-hood season your battery just lived through.",
    cite: ["acis"] as SourceKey[],
  },
  {
    title: "Batteries wear out faster in the South",
    text: "AAA's figure, as reported by Consumer Reports: batteries last 58 months or longer in the farthest northern regions and less than 41 months in the most southern. A three-year-old Orlando battery is already old.",
    cite: ["consumerReports"] as SourceKey[],
  },
  {
    title: "The cold morning is only the reveal",
    text: "Interstate: a couple of intensely hot summers in a row can shrink a battery's capacity enough for one winter's cold snap to overwhelm it, which is why a car battery often dies on cold mornings. Heat shortens life; it typically becomes more apparent in cold weather when an engine struggles to start.",
    cite: ["interstateDied", "interstateHeat"] as SourceKey[],
  },
];

const orlandoColdFacts = [
  {
    label: "January 2026",
    big: "31°F",
    text: "Lowest reading at Orlando International, on January 31; 32°F on January 16. Eight mornings at or below 40°F, thirteen at or below 45°F. Average low 48.2°F.",
    cite: ["nwsJan2026"] as SourceKey[],
  },
  {
    label: "January 2025",
    big: "38°F",
    text: "Lowest reading of the month, no freeze. Six mornings at or below 40°F. Average low 46.4°F.",
    cite: ["nwsJan2025"] as SourceKey[],
  },
  {
    label: "December 2025",
    big: "37°F",
    text: "Lowest reading, on December 31, and the only morning at or below 40°F. The cold-start season in Orlando usually starts late December and peaks in January.",
    cite: ["acis"] as SourceKey[],
  },
  {
    label: "Normal January low",
    big: "49 to 50°F",
    text: "The 1991-2020 normal low for the month at MCO. Most Orlando winter mornings never get near freezing, and a battery can still fail on them.",
    cite: ["acis", "interstateTest"] as SourceKey[],
  },
];

const sittingSteps = [
  {
    title: "A parked car drains its own battery",
    text: "Toyota's manual: the electricity in the 12-volt battery discharges gradually even when the vehicle is not in use, and if the vehicle is left for a long time the battery may discharge and the system may be unable to start.",
    cite: ["toyota"] as SourceKey[],
  },
  {
    title: "Cold plus sitting is the usual combination",
    text: "Interstate: warm temperatures, a healthy engine and routine drives can mask a weak battery; if the temps drop, a light gets left on or you don't drive a few days, that's when your car won't start. A week in an MCO garage over Christmas is all three at once.",
    cite: ["interstateTest"] as SourceKey[],
  },
  {
    title: "Note the garage, level and row before you call",
    text: "Economy lots, Terminal A and B garages and the off-airport lots are each a different stop. Tell us which one and where in it, then whether the car clicks, cranks slowly or does nothing. Our Orlando airport guide covers the lots.",
    cite: [] as SourceKey[],
  },
  {
    title: "Short trips afterwards will not fix it",
    text: "Interstate: short trips drain a battery, and if you never drive long enough for the alternator to recharge it the battery grows weaker with every start. fueleconomy.gov adds that cold weather makes it harder for the alternator to keep the battery charged. Get it tested instead of hoping.",
    cite: ["interstateDied", "doeCold"] as SourceKey[],
  },
];

const hybridEv = [
  {
    title: "Hybrids still have a 12-volt battery, and it is the one that fails",
    text: "Toyota's manual: the hybrid system cannot be started by push-starting. If the 12-volt battery is discharged, the car is jump-started from an exclusive jump starting terminal under the hood using another vehicle's battery, and the READY indicator must come on. The big drive battery is not what a jumpstart touches.",
    cite: ["toyota"] as SourceKey[],
  },
  {
    title: "EV range drops in the cold, more with the heater on",
    text: "The U.S. Department of Energy says EV range can drop by 41 percent at 20°F compared with 75°F when the cabin heater is used, and about 12 percent when it is not. Hybrids lose about 30 to 34 percent of their fuel economy in the same test. The DOE publishes the 20°F figure; it does not publish one for a 45°F Orlando morning.",
    cite: ["doeCold"] as SourceKey[],
  },
  {
    title: "Tell us it is a hybrid or EV when you call",
    text: "RoadZone Plus's battery replacement page lists 12-volt battery support for cars, SUVs, vans, hybrids and EVs. Say which you drive so the technician brings the right approach to the jump terminal.",
    cite: [] as SourceKey[],
  },
];

const paa = [
  {
    question: "Can cold weather cause a misfire?",
    answer:
      "Cold makes an existing weak spot show up. AAA Northern New England says hard starts, rough idling, stalling or diminished power could signal a problem that will be exacerbated by cold weather, and AAA's no-start guide lists the engine sputtering or stalling when you try to start it as a spark plug symptom. So a cold-morning sputter is usually a plug, coil or fuel problem that was already there, not something the cold created. A jumpstart will not cure it; a shop visit will.",
    cite: ["aaaNewEngland", "aaaReasons"] as SourceKey[],
  },
  {
    question: "Why is my car struggling to start but the battery is good?",
    answer:
      "Three common reasons. First, \"good\" may mean fully charged, not healthy: Interstate says a battery can be 100 percent charged and still be at death's door, and only a load test shows it. Second, the connection: AAA lists a corroded battery terminal among the battery signs, and a bad terminal starves a good battery. Third, the starter: AAA says a slow crank, or a single click while the dash lights stay on, points to the starter. Ask for a battery test before you buy anything.",
    cite: ["interstateTest", "aaaReasons"] as SourceKey[],
  },
  {
    question: "How do I warm up my car faster?",
    answer:
      "On a modern car you mostly do not need to. AAA Northern New England: with newer vehicles, warming up the car might not be a necessary requirement from a mechanical standpoint; what it does is clear ice and condensation from the windows. In Orlando, where the lowest January 2026 reading was 31°F, that means a minute for the glass, not ten for the engine. Driving gently warms everything faster than idling.",
    cite: ["aaaNewEngland", "nwsJan2026"] as SourceKey[],
  },
  {
    question: "What causes a hard start when the engine is cold?",
    answer:
      "The battery first: AAA Automotive Research Center says a battery loses about 35 percent of its strength at 32°F while a cold start may need up to twice the normal current. Then the parts that borrow from it: a starter drawing too much, corroded terminals, worn plugs. The thickened-oil and frozen-fuel-line causes in the national guides belong to 0°F mornings; Orlando International has not recorded a low under 31°F in the last two Januaries.",
    cite: ["aaaOregon", "aaaReasons", "nwsJan2026", "nwsJan2025"] as SourceKey[],
  },
];

const onTheCall = [
  {
    label: "Where the car is",
    detail:
      "Home driveway, hotel name and side of the building, parking garage with level and row, airport lot, or the road and nearest cross street.",
  },
  {
    label: "What you hear",
    detail:
      "Fast clicking, one click, a slow crank, a normal crank that will not catch, or nothing at all. It changes what the technician brings.",
  },
  {
    label: "The vehicle",
    detail:
      "Year, make, model and color, and whether it is gas, diesel, hybrid or electric.",
  },
  {
    label: "Battery history",
    detail:
      "How old the battery is, whether it has been jumped before, and how long the car sat before this morning.",
  },
];

const relatedLinks = [
  {
    href: "/dead-battery-car-wont-start-orlando",
    title: "Car Won't Start in Orlando",
    text: "The all-weather no-start guide: what to check, what to tell us, where we come.",
  },
  {
    href: "/services/jumpstart",
    title: "Jumpstart Service",
    text: "24 hour battery boost at homes, hotels, garages, lots and roadsides in Orlando.",
  },
  {
    href: "/services/battery-replacement",
    title: "Battery Replacement",
    text: "When a jump will not hold: condition check and 12-volt support for cars, hybrids and EVs.",
  },
  {
    href: "/orlando-airport-roadside-assistance",
    title: "Orlando Airport Roadside Help",
    text: "MCO garages, economy lots and off-airport parking, and how to tell us where you are.",
  },
  {
    href: "/car-battery-replacement-cost-orlando",
    title: "Battery Replacement Cost",
    text: "What a new battery runs in Orlando, with every price sourced.",
  },
  {
    href: "/key-fob-not-working-orlando",
    title: "Key Fob Not Working",
    text: "When the car reacts to nothing, the fob battery may be the problem, not the car's.",
  },
];

const faqs = [
  {
    question: "Why won't my car start in the cold in Orlando?",
    answer:
      "Almost always the battery. AAA Automotive Research Center reports a car battery loses about 35 percent of its strength at 32°F and may need up to twice the normal current to start the engine in the cold. In Orlando the battery usually arrived at that cold morning already weakened by summer: Interstate Batteries says heat shortens battery life and the damage typically becomes apparent in cold weather when the engine struggles to start. A jumpstart gets most of these cars going; a battery test says whether it will happen again tomorrow.",
  },
  {
    question: "Does cold weather drain a car battery?",
    answer:
      "Cold does not drain it so much as shrink what it can deliver. AAA puts the loss at about 35 percent of strength at 32°F and about 60 percent at 0°F, because, as AAA Northeast explains, the cold slows the chemical reaction that creates the charge. Interstate adds that cold also makes a battery harder to recharge, so short winter trips leave it weaker each day. A battery that was healthy in October is usually fine on an Orlando January morning; one that was tired is not.",
  },
  {
    question: "How cold does it have to be for a car battery to die?",
    answer:
      "Not freezing. Interstate Batteries says a worn-out battery could die at 40°F and a severely weakened one at 60°F. Orlando International recorded eight mornings at or below 40°F in January 2026 and six in January 2025, with lows of 31°F and 38°F. That is enough cold to catch a weak battery, and it is why Orlando no-start calls cluster in late December and January without a single snowflake.",
  },
  {
    question: "My car sat at Orlando airport for a week and now won't start. Is it the cold?",
    answer:
      "Partly. Toyota's owner's manual says the 12-volt battery discharges gradually even when the car is not in use, and a car left for a long time may not start. Interstate says the usual trigger is a drop in temperature, a light left on or not driving for a few days. A week in an MCO garage in January combines all of it. Note the garage, level and row, then call; our Orlando airport roadside guide explains the lots.",
  },
  {
    question: "Should I keep trying to start it?",
    answer:
      "No. AAA's battery brochure says that if the engine seems to be turning too slowly, stop cranking. Each attempt takes more out of a battery that is already short, and AAA Northeast notes that batteries that previously went dead and needed a jump-start are the ones most likely to fail again in the cold. Turn off the lights, fan and radio, and call.",
  },
  {
    question: "Will a jumpstart fix it for good?",
    answer:
      "Only if the battery was merely low, not worn. Interstate describes a battery test that reads Good, Weak or Replace now, and says warm weather and routine driving can mask a weak battery until the temperature drops. If the car needed a jump this morning, have it tested today; RoadZone Plus's jumpstart service includes help deciding if battery replacement is needed.",
  },
  {
    question: "Can you jumpstart a hybrid or an electric car in the cold?",
    answer:
      "A hybrid, yes, through its 12-volt system: Toyota's manual says the hybrid system cannot be push-started and is jump-started from an exclusive jump starting terminal under the hood using a second vehicle's 12-volt battery, with the READY indicator confirming the start. An EV's 12-volt battery can fail the same way. RoadZone Plus lists 12-volt battery support for cars, SUVs, vans, hybrids and EVs on its battery replacement page; say which you drive when you call.",
  },
  {
    question: "Why is my tire pressure light on this cold morning?",
    answer:
      "Air shrinks when it cools. AAA Northeast says tires lose about one PSI for every 10 degrees the air temperature drops, plus about one PSI a month on their own. NHTSA notes the warning system only comes on when a tire is significantly underinflated, and says to check pressure at least once a month when the tires are cold, meaning the car has not been driven for at least three hours. On a 40°F Orlando morning after a 90°F October, the light is usually telling the truth: add air to the number on the driver's door label.",
  },
  {
    question: "Do frozen fuel lines or thick oil stop cars in Orlando?",
    answer:
      "Not at Orlando temperatures. Those causes appear in national guides written for mornings near 0°F. The National Weather Service F-6 reports for Orlando International show a lowest reading of 31°F in January 2026 and 38°F in January 2025. If an Orlando car will not start on a cold morning, the battery, its connections or the starter are where the answer almost always is.",
  },
  {
    question: "How long do car batteries last in Florida?",
    answer:
      "Shorter than up north. Consumer Reports, citing AAA, puts battery life at 58 months or longer in the farthest northern regions of the U.S. and less than 41 months in the most southern. Interstate's general figure is three to five years, with heat the sneakiest killer. If your Orlando battery is past three years and the car cranked slowly this week, test it before the next cold front.",
  },
  {
    question: "What does RoadZone Plus do when my car won't start in the cold?",
    answer:
      "Call (407) 222-2739, any hour. RoadZone Plus provides 24/7 jump start service in Orlando at homes, hotels, apartments, garages, parking lots, workplaces and roadside locations: a basic no-start symptom check, a safe cable connection and boost attempt, and help deciding if battery replacement is needed. If the battery is beyond a boost, the battery replacement service covers a condition check and 12-volt support for cars, SUVs, vans, hybrids and EVs.",
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

export default function CarWontStartInColdPage() {
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    datePublished: updatedIso,
    dateModified: updatedIso,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(heroImage),
      width: 1200,
      height: 800,
    },
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@id": businessId,
    },
    mainEntityOfPage: absoluteUrl(path),
    about: [
      { "@type": "Thing", name: "Car battery in cold weather" },
      { "@type": "Thing", name: "Jump start" },
    ],
    citation: Object.values(sources).map((source) => source.href),
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Car Won't Start in the Cold", path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema, breadcrumbs]),
        }}
      />

      <section className="section border-b border-white/10 bg-road-black">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_0.65fr] lg:items-center">
          <div>
            <div className="eyebrow">
              <Snowflake aria-hidden="true" size={16} />
              Cold mornings in Orlando
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
              Car won&apos;t start in the cold?
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
              In Orlando a cold morning does not freeze anything in your car. It exposes a
              battery that summer already wore down. AAA Automotive Research Center says a
              battery loses about 35 percent of its strength at 32°F while a cold start
              can need twice the normal current. Most Orlando cold-morning no-starts end
              with a jumpstart and a battery test, not a repair bill.
            </p>
            <p className="mt-4 text-sm font-bold text-white/48">
              Updated <time dateTime={updatedIso}>{updatedLabel}</time> ·{" "}
              <a
                href="#sources"
                className="inline-flex min-h-11 items-center underline decoration-white/30 underline-offset-2 hover:text-white"
              >
                See every source
              </a>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/jumpstart" className="btn btn-secondary">
                Jumpstart Service
              </Link>
            </div>
          </div>

          <aside className="card overflow-hidden bg-panel">
            <Image
              src={heroImage}
              alt={heroAlt}
              width={1200}
              height={800}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="text-sm font-black uppercase text-safety-yellow">
                Stuck right now?
              </p>
              <p className="mt-3 text-xl font-black leading-7 text-white">
                24/7 jumpstart at your driveway, hotel, garage or lot anywhere in Orlando.
                Tell us what the car does when you turn the key.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 flex min-h-11 items-center gap-3 text-2xl font-black text-white"
              >
                <PhoneCall aria-hidden="true" size={22} />
                {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="what-you-hear" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              What the sound tells you
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Turn the key once more and listen. Then stop.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The noise the car makes on a cold morning narrows the cause before anyone
              opens the hood. AAA&apos;s no-start guide and battery brochure sort the sounds
              this way.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-white/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                What you hear when a car will not start in the cold, the likely cause and
                what to do now
              </caption>
              <thead className="hidden bg-black/40 md:table-header-group">
                <tr>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    What you hear
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    Likely cause
                  </th>
                  <th scope="col" className="p-5 text-xs font-black uppercase text-white/48">
                    What to do now
                  </th>
                </tr>
              </thead>
              <tbody>
                {sounds.map((row, index) => (
                  <tr
                    key={row.hear}
                    className={`block bg-black/20 p-5 md:table-row md:p-0 ${
                      index > 0 ? "border-t border-white/10" : ""
                    }`}
                  >
                    <th scope="row" className="block align-top md:table-cell md:w-[24%] md:p-5">
                      <span className="block text-lg font-black text-white">{row.hear}</span>
                    </th>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/72 md:mt-0 md:table-cell md:w-[40%] md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        Likely cause
                      </span>
                      {row.cause}
                    </td>
                    <td className="mt-3 block align-top text-sm leading-6 text-white/66 md:mt-0 md:table-cell md:p-5">
                      <span className="block text-xs font-black uppercase text-white/42 md:hidden">
                        What to do now
                      </span>
                      {row.doNow}
                      <SourceTags keys={row.cite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/60">
            If you smell fuel, see smoke, or the car is stopped in a live lane, treat the
            scene as unsafe and call 911 before roadside service. For the all-weather
            version of this check, see{" "}
            <Link
              href="/dead-battery-car-wont-start-orlando"
              className="font-black text-white underline decoration-road-red/60 underline-offset-2 hover:text-red-200"
            >
              car won&apos;t start in Orlando
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="heat-then-cold" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <ThermometerSun aria-hidden="true" size={16} />
              Why Florida batteries fail in winter
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Summer kills the battery. The first cold morning finds the body.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The national &ldquo;car won&apos;t start in cold&rdquo; guides blame the
              cold. In Orlando the cold is the messenger. The battery maker and AAA
              figures below explain why a car that started fine all October quits on the
              first 40°F morning.
            </p>
            <figure className="mt-8">
              <Image
                src="/visuals/battery-cost/battery-under-open-hood.webp"
                alt="A mechanic leaning over an open car hood next to a black car battery with a red positive terminal cover"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                The battery that struggles on a cold Orlando morning usually lost its
                margin under the hood in July and August.
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-4">
            {heatThenCold.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="orlando-cold" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Snowflake aria-hidden="true" size={16} />
              How cold Orlando actually gets
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Orlando&apos;s cold mornings, from the weather station at MCO.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              These are the National Weather Service&apos;s own readings for Orlando
              International Airport. They show two things: Orlando almost never freezes,
              and it does not need to. Interstate Batteries says a worn-out battery could
              die at 40°F and a severely weakened one at 60°F.
            </p>
            <SourceTags keys={["interstateTest"]} />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orlandoColdFacts.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{item.label}</p>
                <p className="mt-2 text-4xl font-black text-safety-yellow">{item.big}</p>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-white/60">
            Frozen fuel lines, block heaters and thickened engine oil fill the national
            guides because they are written for 0°F. Orlando International has not
            recorded a low under 31°F in the last two Januaries. On an Orlando cold morning
            the question is the battery, its terminals and the starter, in that order.
          </p>
          <SourceTags keys={["nwsJan2026", "nwsJan2025"]} />
        </div>
      </section>

      <section id="airport" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <Plane aria-hidden="true" size={16} />
              Back from the holidays
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              The car that sat at Orlando airport over Christmas.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The classic January no-start: a week or two in an MCO garage, a cold front
              on the day you land, and a car that clicks. Four things to know.
            </p>
            <figure className="mt-8">
              <Image
                src="/visuals/battery-cost/parking-garage-level.webp"
                alt="An empty level of a multistory parking garage with painted parking lines and low afternoon light"
                width={1200}
                height={800}
                loading="lazy"
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="h-auto w-full rounded-md border border-white/10"
              />
              <figcaption className="mt-3 text-sm leading-6 text-white/56">
                Garage level and row first, then the sound the car makes. Both shorten the
                call.
              </figcaption>
            </figure>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/orlando-airport-roadside-assistance" className="btn btn-secondary">
                Orlando Airport Roadside Help
              </Link>
            </div>
          </div>
          <ol className="grid gap-4">
            {sittingSteps.map((item, index) => (
              <li key={item.title} className="card-solid p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-road-red text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="hybrids-evs" className="section bg-asphalt">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <Zap aria-hidden="true" size={16} />
              Hybrids and EVs
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A hybrid that will not wake up has a small battery problem, not a big one.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hybridEv.map((item) => (
              <div key={item.title} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="questions" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              Four questions people ask Google
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Misfires, &ldquo;good&rdquo; batteries, warming up and hard starts.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              The four questions Google shows next to this search, answered from AAA,
              Interstate and the Orlando weather record rather than from a snow-belt
              checklist.
            </p>
          </div>
          <div className="grid gap-4">
            {paa.map((item) => (
              <div key={item.question} className="card-solid p-6">
                <h3 className="text-xl font-black text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.answer}</p>
                <SourceTags keys={item.cite} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jump-wont-fix-it" className="section bg-road-black">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <BatteryCharging aria-hidden="true" size={16} />
              When a jump is not the fix
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              It started with a boost. Will it start tomorrow?
            </h2>
          </div>
          <div className="grid gap-4 text-base leading-8 text-white/66">
            <p>
              Interstate Batteries describes the test that answers it: a technician sends a
              jolt into the battery and reads Good, Weak or Replace now in under a minute.
              Good means no worry for at least another six months. Weak or Replace now
              means cold temperatures, hard vibration or a few days of not driving could
              kill it again.
            </p>
            <p>
              AAA Northeast says the batteries most likely to fail in the cold are those
              three to five years old and those that previously went dead and needed a
              jump-start. If this morning was the second jump, the battery is telling you.
              RoadZone Plus&apos;s jumpstart service includes help deciding if battery
              replacement is needed, and the battery replacement service covers a condition
              check first and 12-volt support for cars, SUVs, vans, hybrids and EVs.
            </p>
            <SourceTags keys={["interstateTest", "aaaNortheast"]} />
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/battery-replacement" className="btn btn-primary">
                Battery Replacement
              </Link>
              <Link href="/car-battery-replacement-cost-orlando" className="btn btn-secondary">
                What a battery costs in Orlando
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow">
              <Wrench aria-hidden="true" size={16} />
              What RoadZone Plus does
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              A 24/7 jumpstart wherever the car is parked. Four things to have ready.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              RoadZone Plus is a 24/7 roadside assistance company in Orlando. On a
              cold-morning no-start the technician runs a basic symptom check, connects the
              cables safely and attempts the boost, then helps you decide whether the
              battery needs replacing. Homes, hotels, apartments, garages, parking lots,
              workplaces and roadside locations are all covered.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-primary">
                <PhoneCall aria-hidden="true" size={18} />
                Call {site.phoneDisplay}
              </a>
              <Link href="/services/jumpstart" className="btn btn-secondary">
                Jumpstart Service
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {onTheCall.map((item) => (
              <div key={item.label} className="card-solid p-6">
                <p className="text-xs font-black uppercase text-route-green">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="related" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin aria-hidden="true" size={16} />
              Related help
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              More on batteries and no-starts in Orlando.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-solid group p-5 transition hover:-translate-y-1 hover:border-road-red/70"
              >
                <h3 className="text-lg font-black text-white">{link.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{link.text}</p>
                <span className="mt-5 inline-flex min-h-11 items-center text-sm font-black text-white group-hover:text-red-200">
                  Open page
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section border-y border-white/10 bg-panel">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow">
              <Info aria-hidden="true" size={16} />
              FAQ
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Cold-morning no-start questions
            </h2>
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

      <section id="sources" className="section bg-road-black">
        <div className="container">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <ExternalLink aria-hidden="true" size={16} />
              Sources
            </div>
            <h2 className="mt-5 text-4xl font-black text-white">
              Where every temperature and percentage on this page comes from.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              Each page below was read on {updatedLabel}. Battery figures come from AAA and
              a battery maker, weather readings from the National Weather Service and NOAA,
              hybrid and EV figures from the U.S. Department of Energy and a Toyota
              owner&apos;s manual, not from us. Your own owner&apos;s manual comes first.
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
                <span className="flex items-center gap-2 font-black text-white group-hover:text-red-200">
                  {source.name}
                  <ExternalLink aria-hidden="true" size={15} />
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
            <p className="text-sm font-black uppercase text-white/72">
              Car won&apos;t start this morning?
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Call RoadZone Plus for a 24/7 jumpstart in Orlando.
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
