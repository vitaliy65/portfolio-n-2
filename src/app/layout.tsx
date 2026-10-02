import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "High-end portfolio showcasing frontend development expertise and design taste",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {/* Основной контент */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
