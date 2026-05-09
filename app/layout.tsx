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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
