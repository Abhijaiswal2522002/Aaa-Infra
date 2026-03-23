import type { Metadata } from "next";
import Script from "next/script";

import { Playfair_Display, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AAA Infra | Industrial Roofing, Dewatering & Fabrication Experts",
  description: "AAA Infra provides premium industrial services: Metal Roofing Sheet Manufacturing, Diesel Dewatering Pump Rental, Fabrication, and Sandblasting. Trusted by NTPC & NSPCL.",
  keywords: "roofing sheet manufacturer, dewatering pump rental, sandblasting services, industrial contractor India, AAA Infra, metal roofing India, utility services NTPC",
  icons: {
    icon: "/logo.png",
  },
};


import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyCTA />
      </body>

    </html>
  );
}
