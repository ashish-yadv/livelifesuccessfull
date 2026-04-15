import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins, Crimson_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const BASE_URL = "https://livelifesuccessfull.vercel.app";

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),

  title: {
    /**
     * template: applied to all child pages e.g. "Blog – LiveLifeSuccessfull"
     * default:  used when a page doesn't set its own title
     */
    template: "%s – LiveLifeSuccessfull",
    default: "Stop Blaming Yourself For Quitting | LiveLifeSuccessfull",
  },

  description:
    "The problem was never willpower — it was the lack of a system. Build the habit system that makes showing up the path of least resistance. Used by 1,000+ people.",

  keywords: [
    "habit system",
    "discipline",
    "habit formation",
    "stop quitting habits",
    "build better habits",
    "habit tracker",
    "consistency system",
    "behavioral psychology",
    "habit blueprint",
    "motivation vs discipline",
  ],

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "LiveLifeSuccessfull",
    title: "Stop Blaming Yourself For Quitting | LiveLifeSuccessfull",
    description:
      "The problem was never willpower — it was the lack of a system. Build the habit system that makes showing up the path of least resistance.",
    images: [
      {
        url: "/og-image.webp",   // place a 1200×630px image at public/og-image.webp
        width: 1200,
        height: 630,
        alt: "LiveLifeSuccessfull — Habit & Discipline Systems",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Stop Blaming Yourself For Quitting | LiveLifeSuccessfull",
    description:
      "The problem was never willpower — it was the lack of a system. 1,000+ people transformed.",
    images: ["/og-image.webp"],
    creator: "@livelikesuccess",
    site: "@livelikesuccess",
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Pinterest domain verification ─────────────────────────────────────────
  other: {
    "p:domain_verify": "aa78553ecc06506d37187d2c9b4a35c5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.className} ${inter.className} ${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}