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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
