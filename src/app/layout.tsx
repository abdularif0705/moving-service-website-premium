import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Moving Services | Fast & Reliable",
  description: "Experience a seamless, stress-free move. Get a free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
