import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "Rent-A-Hand | Premium Movers in Windsor, ON",
    template: "%s | Rent-A-Hand Moving",
  },
  description: "Experience a seamless, stress-free move in Windsor, Ontario and surrounding areas. Rent-A-Hand provides top-rated local moving services. Get a free quote today.",
  keywords: ["movers in Windsor", "moving companies Windsor Ontario", "Windsor movers", "Rent-A-Hand", "rent a hand moving", "local movers Windsor", "furniture moving Windsor", "movers Windsor ON", "best movers Windsor"],
  metadataBase: new URL('https://rentahandwindsor.ca'),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Rent-A-Hand Moving Services",
    title: "Rent-A-Hand | Premium Movers in Windsor, ON",
    description: "Top-rated moving services in Windsor, Ontario. Experience a seamless move with Rent-A-Hand.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rent-A-Hand Moving Services Logo",
      },
    ],
  },
};

import ScrollProgress from "@/components/ui/ScrollProgress";

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased min-h-screen flex flex-col text-primary bg-[#FAFAF9]`}>
        <ScrollProgress />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Prevent browser from automatically restoring scroll position on history navigation
                if (history.scrollRestoration) {
                  history.scrollRestoration = 'manual';
                }

                // Store the initial scroll position
                let lastScrollY = window.scrollY;
                
                // Update scroll position on scroll
                window.addEventListener('scroll', function() {
                  lastScrollY = window.scrollY;
                }, { passive: true });

                // When focus enters the document (e.g., after closing an iframe), 
                // restore the scroll position if we were scrolled down.
                window.addEventListener('focus', function() {
                   if (lastScrollY > 0 && window.scrollY === 0) {
                      window.scrollTo(0, lastScrollY);
                   }
                }, true); // Capture phase to catch it early

                // Also handle focusin for better coverage
                window.addEventListener('focusin', function() {
                   if (lastScrollY > 0 && window.scrollY === 0) {
                      window.scrollTo(0, lastScrollY);
                   }
                });
              })();
            `
          }}
        />
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
        <Script
          id="chatbase-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="8cVeuVwZnNYmd22RptSZz";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`
          }}
        />
        <main className="w-full flex-1 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
