import type { Metadata } from "next";
import { internationalDrivePage } from "./content";
import { InternationalDriveGuidePage } from "./InternationalDriveGuidePage";

const page = internationalDrivePage;

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

export default function InternationalDriveRoadsidePage() {
  return <InternationalDriveGuidePage page={page} />;
}
