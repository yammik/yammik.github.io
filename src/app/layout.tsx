import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "maykim.me",
  description: "maykim me a website"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="p-12">
        <nav>
          <div className="w-[6rem] h-[6rem] bg-lime-700 mb-4">
            image will go here
          </div>
          <ul className="flex flex-wrap w-[12rem] gap gap-x-2 text-lg font-mono">
            <li>
              <sup className="font-extralight text-xs mr-1">1</sup>
              about
            </li>
            <li>
              <sup className="font-extralight text-xs mr-1">2</sup>
              resume
            </li>
            <li>
              <sup className="font-extralight text-xs mr-1">3</sup>
              contact
            </li>
            <li>
              <sup className="font-extralight text-xs mr-1">4</sup>
              random
            </li>
          </ul>
        </nav>
      </header>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
