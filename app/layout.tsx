import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naveen Morla - Data Scientist & ML Engineer',
  description: 'Full Stack Data Scientist specializing in machine learning, AI, and software development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}