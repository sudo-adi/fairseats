import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: 'Fair Seats',
  description: 'Book Tickets with Confidance',
}

const cdFont = localFont({
  src: [
    {
      path: '../../public/font/cd.ttf',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cdFont.className} >{children}</body>
    </html>
  )
}
