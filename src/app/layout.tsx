import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins} from "next/font/google";
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
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Livelifesuccessfull",
  description: "Where life meets SYSTEM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

