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
          <ul>
            <li>
              <span>1</span>
              about
            </li>
            <li>
              <span>2</span>
              resume
            </li>
            <li>
              <span>3</span>
              contact
            </li>
            <li>
              <span>4</span>
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
