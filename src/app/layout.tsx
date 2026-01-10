import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandaru Suranjaya Photography",
  description: "A serverless photography portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-black`}>
        <Providers>
          <Header />
          <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto w-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

