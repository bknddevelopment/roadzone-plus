import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Schema } from "@/components/Schema";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | 24/7 Roadside Assistance in Orlando, FL`,
    template: `%s | ${site.name}`,
  },
  description:
    "RoadZone Plus provides 24/7 roadside assistance in Orlando and Central Florida, including jumpstarts, tire changes, fuel delivery, auto lockouts, wheel lock removal, battery replacement, and smart key programming.",
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} | 24/7 Roadside Assistance in Orlando, FL`,
    description:
      "Fast roadside help for jumpstarts, tire changes, fuel delivery, lockouts, wheel lock removal, battery replacement, and smart keys.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/brand/roadzone-plus-logo.png",
        width: 1575,
        height: 430,
        alt: `${site.name} logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        <Schema />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
