import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BNE Superfanz - Pro Card | The Ultimate Fan Experience',
  description: 'Collect exclusive Pro Cards, connect with your favorite athletes, and unlock premium fan experiences. Join the ultimate sports community.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&family=Instrument+Serif&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-instrument: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif;
            --font-instrument-serif: 'Instrument Serif', ui-serif, Georgia, serif;
            --font-jetbrains: 'JetBrains Mono', ui-monospace, 'Courier New', monospace;
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
