import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://photography.sandaru.me'),
  title: {
    default: "Sandaru Suranjaya | Portfolio & Photography Singapore",
    template: "%s | Sandaru Suranjaya",
  },
  description: "Hobbyist photographer in Singapore sharing a curated gallery of street, urban, architecture, nature, landscape, and macro photography.",
  keywords: ["Photographer Singapore", "Sandaru Suranjaya", "Singapore Photography", "Street Photography", "Urban Photography", "Architecture Photography", "Nature Photography", "Landscape Photography", "Macro Photography"],
  authors: [{ name: "Sandaru Suranjaya", url: "https://photography.sandaru.me" }],
  creator: "Sandaru Suranjaya",
  openGraph: {
    title: 'Sandaru Suranjaya | Portfolio & Photography Singapore',
    description: 'Curated gallery of street, urban, architecture, nature, landscape, and macro photography by Sandaru Suranjaya in Singapore.',
    url: 'https://photography.sandaru.me',
    siteName: 'Sandaru Suranjaya Photography',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sandaru Suranjaya Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandaru Suranjaya | Portfolio & Photography Singapore",
    description: "Professional photography portfolio of Sandaru Suranjaya based in Singapore.",
    images: ["/og-image.jpg"],
    creator: "@sandarusuranjaya",
  },
  icons: {
    icon: "/icon.svg",
  },
};

import { GoogleAnalytics } from '@next/third-parties/google';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
        <Providers>
          <Header />
          <main className="flex-grow pt-48 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto w-full">
            {children}
          </main>
          <Footer />
        </Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
