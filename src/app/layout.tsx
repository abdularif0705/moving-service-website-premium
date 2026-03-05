import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Premium Windsor Moving Services | SwiftMove",
  description: "Experience a seamless, stress-free move in Windsor, Ontario and surrounding regions. Get a free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col overflow-x-hidden text-primary bg-[#FAFAF9]`}>
        {children}
      </body>
    </html>
  );
}
