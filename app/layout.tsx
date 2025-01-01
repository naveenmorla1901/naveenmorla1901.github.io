import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Naveen Morla - Data Scientist & ML Engineer',
  description: 'Full Stack Data Scientist specializing in machine learning, AI, and software development.',
  keywords: 'Data Science, Machine Learning, AI, Deep Learning, Full Stack Development',
  metadataBase: new URL('https://naveenmorla1901.github.io/portfolio-new'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="stylesheet" 
          href={process.env.NODE_ENV === 'production' ? '/portfolio-new/_next/static/css/app/layout.css' : '/_next/static/css/app/layout.css'}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}