import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Premium Windsor Moving Services | Rent-A-Hand",
  description: "Experience a seamless, stress-free move in Windsor, Ontario and surrounding regions. Get a free quote today.",
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
        {children}
      </body>
    </html>
  );
}
