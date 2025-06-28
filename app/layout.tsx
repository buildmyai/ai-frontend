import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "AI Solutions Platform",
  description: "Built by Sameer",
  viewport: "width=device-width, initial-scale=1.0",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-screen-xl mx-auto px-4 pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
