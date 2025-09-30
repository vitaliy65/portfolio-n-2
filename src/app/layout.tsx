import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Providers from "@/components/Providers";
import HtmlTheme from "@/components/HtmlTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Posvistak Vitaliy - Frontend Developer Portfolio",
  description:
    "Showcasing cutting-edge web development skills with animations, interactions, and modern design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <HtmlTheme>
        <body
          className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </body>
      </HtmlTheme>
    </Providers>
  );
}
