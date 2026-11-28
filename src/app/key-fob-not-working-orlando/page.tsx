import type { Metadata } from "next";
import { KeyFobGuidePage } from "./KeyFobGuidePage";
import { keyFobPage } from "./content";

export const metadata: Metadata = {
  title: keyFobPage.title,
  description: keyFobPage.description,
  alternates: {
    canonical: keyFobPage.href,
  },
  openGraph: {
    title: keyFobPage.title,
    description: keyFobPage.description,
    url: keyFobPage.href,
  },
  twitter: {
    title: keyFobPage.title,
    description: keyFobPage.description,
  },
};

export default function KeyFobNotWorkingPage() {
  return <KeyFobGuidePage />;
}
