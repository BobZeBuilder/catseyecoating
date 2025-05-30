import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'cats eye coating',
  description: 'A simple app using Next.js and React',
  keywords: ['Next.js', 'React'],
  authors: [{ name: 'Catseye Coating' }],
  creator: 'Catseye Coating',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
