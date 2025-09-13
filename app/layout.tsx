import type { Metadata } from 'next'
import LenisProviders from './lenisProviders'
import './globals.css'
import 'lenis/dist/lenis.css'

export const metadata: Metadata = {
  title: 'Portfolio ap',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="">
        <LenisProviders>{children}</LenisProviders>
      </body>
    </html>
  )
}
