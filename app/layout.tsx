import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://amplift.com").replace(/\/$/, "")

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amplift — Turn images into stunning social videos.",
  description: "Create seamless looping videos for LinkedIn, X, and Instagram in seconds.",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Amplift",
    title: "Turn images into stunning social videos. | Amplift",
    description: "Create seamless looping videos for LinkedIn, X, and Instagram in seconds.",
    type: "website",
    url: "/",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "Amplift — AI-powered video loops for social media",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn images into stunning social videos. | Amplift",
    description: "Create seamless looping videos for LinkedIn, X, and Instagram in seconds.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "Amplift — AI-powered video loops for social media",
      },
    ],
    site: "@amplift",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
