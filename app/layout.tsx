import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blogr | Home',
  description:
    'Blogr - A blog website built with Next.js, React, TypeScript, Tailwind, Prisma, NextAuth, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
