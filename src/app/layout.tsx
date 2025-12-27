import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Oriento | Find Your Direction',
  description: 'A Next.js app with Tailwind CSS and shadcn/ui',
  icons: {
    icon: '/icons/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}