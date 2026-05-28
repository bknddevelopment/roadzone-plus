import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadTracking } from "@/components/LeadTracking";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Schema } from "@/components/Schema";
import { primaryKeywords, site } from "@/data/site";
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
    site.description,
  applicationName: site.name,
  keywords: primaryKeywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Roadside Assistance",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${site.name} | 24/7 Roadside Assistance in Orlando, FL`,
    description: site.description,
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
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | 24/7 Roadside Assistance in Orlando, FL`,
    description: site.description,
    images: ["/brand/roadzone-plus-logo.png"],
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
        <LeadTracking />
        <Schema />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
