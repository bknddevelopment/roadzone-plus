"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  buildPhoneClickPayload,
  emitPhoneClick,
} from "@/lib/phoneTracking";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function trackPhoneClick(link: HTMLAnchorElement) {
  const eventPayload = buildPhoneClickPayload({
    href: link.getAttribute("href") || "",
    ctaContext: link.dataset.callCta,
    pagePath: window.location.pathname,
  });
  if (!eventPayload) return;

  // This is a click-only diagnostic. It does not prove a connected call,
  // qualified request, dispatch, completed job, or revenue.
  window.dataLayer = window.dataLayer || [];
  emitPhoneClick({
    dataLayer: window.dataLayer,
    gtag: window.gtag,
    payload: eventPayload,
  });
}

export function LeadTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;

      trackPhoneClick(link);
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  if (!gaMeasurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
