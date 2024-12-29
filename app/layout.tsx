import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naveen Morla - Full Stack Data Scientist',
  description: 'Portfolio of Naveen Morla - Data Scientist and Software Engineer specializing in machine learning, data engineering, and full-stack development.',
  keywords: 'Data Scientist, Software Engineer, Machine Learning, Full Stack Developer, Python, React, AWS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}