import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: {
    default: "Rent-A-Hand | Premium Movers in Windsor, ON",
    template: "%s | Rent-A-Hand Moving",
  },
  description: "Experience a seamless, stress-free move in Windsor, Ontario and surrounding areas. Rent-A-Hand provides top-rated local moving services. Get a free quote today.",
  keywords: ["movers in Windsor", "moving companies Windsor Ontario", "Windsor movers", "Rent-A-Hand", "rent a hand moving", "local movers Windsor", "furniture moving Windsor", "movers Windsor ON", "best movers Windsor"],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Rent-A-Hand Moving Services",
    title: "Rent-A-Hand | Premium Movers in Windsor, ON",
    description: "Top-rated moving services in Windsor, Ontario. Experience a seamless move with Rent-A-Hand.",
  },
};

import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased min-h-screen flex flex-col overflow-x-hidden text-primary bg-[#FAFAF9]`}>
        <ScrollProgress />
        <FloatingCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "Rent-A-Hand",
              "alternateName": "Rent A Hand Moving",
              "description": "Premium moving services in Windsor, Ontario. Rent-A-Hand makes your local or long-distance move stress-free.",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Windsor",
                  "sameAs": "https://en.wikipedia.org/wiki/Windsor,_Ontario"
                },
                {
                  "@type": "City",
                  "name": "Essex County"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Windsor",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "priceRange": "$$"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
