"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function normalizePhoneHref(href: string) {
  return href.replace(/^tel:/, "").replace(/[^\d+]/g, "");
}

function trackPhoneClick(link: HTMLAnchorElement) {
  const phoneNumber = normalizePhoneHref(link.getAttribute("href") || "");
  const linkText = link.textContent?.replace(/\s+/g, " ").trim() || "Phone CTA";
  const eventPayload = {
    event_category: "lead",
    event_label: phoneNumber,
    phone_number: phoneNumber,
    link_text: linkText,
    page_location: window.location.href,
    page_path: window.location.pathname,
    transport_type: "beacon",
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "phone_call_click",
    ...eventPayload,
  });

  window.gtag?.("event", "phone_call_click", eventPayload);
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
