import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sandaru Suranjaya | Photography Portfolio",
    template: "%s | Sandaru Suranjaya",
  },
  description: "A visual journal of moments, places, and faces by Sandaru Suranjaya. Explore a curated collection of photography capturing the beauty of the world.",
  keywords: ["photography", "portfolio", "travel", "portrait", "sandaru suranjaya", "photographer"],
  authors: [{ name: "Sandaru Suranjaya", url: "https://sandaru.me" }],
  creator: "Sandaru Suranjaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sandaru.me",
    title: "Sandaru Suranjaya | Photography Portfolio",
    description: "Explore the visual journal of Sandaru Suranjaya. A serverless photography portfolio capturing moments in time.",
    siteName: "Sandaru Suranjaya Photography",
    images: [
      {
        url: "/og-image.jpg", // Ideally this would be a dynamic OG image or a static one we need to add, but for now we'll define the structure.
        width: 1200,
        height: 630,
        alt: "Sandaru Suranjaya Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandaru Suranjaya | Photography Portfolio",
    description: "A visual journal of moments, places, and faces by Sandaru Suranjaya.",
    images: ["/og-image.jpg"],
    creator: "@sandarusuranjaya", // Guessed from youtube handle, can be corrected
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
      <body className={`font-sans antialiased min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
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
