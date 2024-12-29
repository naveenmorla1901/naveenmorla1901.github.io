import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naveen Morla - Portfolio',
  description: 'Software Engineer & Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}