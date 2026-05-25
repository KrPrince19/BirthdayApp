import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Happy Birthday! 🎂 | A Special Celebration',
  description: 'A premium birthday celebration website filled with joy, memories, and magical moments. Wishing you the most special day!',
  keywords: ['birthday', 'celebration', 'special day', 'memories', 'joy'],
  openGraph: {
    title: 'Happy Birthday! 🎂',
    description: 'A premium birthday celebration website filled with joy and magical moments.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">

      <body>{children}</body>
    </html>
  );
}
