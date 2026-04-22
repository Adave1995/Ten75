import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ten75.ai"),
  title: {
    default: "Ten75.ai — AI Built for Propane Companies",
    template: "%s | Ten75.ai",
  },
  description:
    "Ten75.ai is the fractional Chief AI Officer for propane distributors and fuel companies. We implement practical AI across dispatch, customer service, quoting, and operations — delivering measurable results without the buzzwords.",
  keywords: [
    "AI for propane companies",
    "propane AI implementation",
    "propane operations automation",
    "propane dispatch automation",
    "propane customer service AI",
    "fuel distributor AI",
    "fractional chief AI officer",
    "propane technology",
    "AI for fuel distributors",
    "propane business software",
  ],
  authors: [{ name: "Ten75.ai" }],
  creator: "Ten75.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ten75.ai",
    siteName: "Ten75.ai",
    title: "Ten75.ai — AI Built for Propane Companies",
    description:
      "Practical AI implementation for propane distributors and fuel companies. Dispatch, customer service, quoting, and operations — without the buzzwords.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ten75.ai — AI Built for Propane Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ten75.ai — AI Built for Propane Companies",
    description:
      "Practical AI implementation for propane distributors and fuel companies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
