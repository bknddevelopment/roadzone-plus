export const serviceDiscoveryLastModified = "2026-07-27T00:00:00.000Z";

export const serviceDiscoveryTargets = [
  "jumpstart",
  "tire-change",
  "fuel-delivery",
  "battery-replacement",
] as const;

export const serviceDiscoveryTargetSlugs = new Set<string>(
  serviceDiscoveryTargets,
);

export const serviceCallPrepBySlug: Record<
  (typeof serviceDiscoveryTargets)[number],
  string[]
> = {
  jumpstart: [
    "Your exact location, including the nearest entrance, level, row, or landmark",
    "The vehicle year, make, and model",
    "Whether the car clicks, cranks slowly, shows weak lights, or does not respond",
  ],
  "tire-change": [
    "Your exact location and whether the vehicle is safely away from traffic",
    "Whether the vehicle has a usable spare tire",
    "Whether a wheel lock or missing wheel-lock key is blocking the tire change",
  ],
  "fuel-delivery": [
    "Your exact location, nearest entrance, cross street, exit, or landmark",
    "The vehicle year, make, and model",
    "The fuel type shown for the vehicle",
  ],
  "battery-replacement": [
    "Your exact location and the vehicle year, make, and model",
    "Whether the vehicle starts after a jump and then dies again",
    "Any visible swelling, leaking, or corrosion around the battery",
  ],
};
