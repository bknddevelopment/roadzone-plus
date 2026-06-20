import type { Metadata } from "next";
import { FocusedRoadsidePage } from "@/components/FocusedRoadsidePage";
import { focusedPages } from "@/data/focusedPages";

const page = focusedPages.mco;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.href,
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.href,
  },
  twitter: {
    title: page.title,
    description: page.description,
  },
};

export default function OrlandoAirportRoadsidePage() {
  return <FocusedRoadsidePage page={page} />;
}
