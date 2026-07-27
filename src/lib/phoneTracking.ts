export type PhoneClickPayload = {
  event_category: "diagnostic";
  event_label: "phone-cta-click";
  cta_context: string;
  page_path: string;
  measurement_scope: "click-only";
  transport_type: "beacon";
};

type BuildPhoneClickPayloadArgs = {
  href: string;
  ctaContext?: string;
  pagePath: string;
};

type EmitPhoneClickArgs = {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
  payload: PhoneClickPayload;
};

function isPhoneHref(href: string) {
  return /^tel:\+?\d+$/.test(href.replace(/[\s()-]/g, ""));
}

function safeCtaContext(value?: string) {
  return value && /^[a-z0-9-]{1,64}$/.test(value)
    ? value
    : "unlabeled-phone-cta";
}

export function buildPhoneClickPayload({
  href,
  ctaContext,
  pagePath,
}: BuildPhoneClickPayloadArgs): PhoneClickPayload | null {
  if (!isPhoneHref(href)) return null;

  return {
    event_category: "diagnostic",
    event_label: "phone-cta-click",
    cta_context: safeCtaContext(ctaContext),
    page_path: pagePath.startsWith("/") ? pagePath : "/",
    measurement_scope: "click-only",
    transport_type: "beacon",
  };
}

export function emitPhoneClick({
  dataLayer,
  gtag,
  payload,
}: EmitPhoneClickArgs) {
  if (gtag) {
    gtag("event", "phone_call_click", payload);
    return;
  }

  dataLayer.push({
    event: "phone_call_click",
    ...payload,
  });
}
