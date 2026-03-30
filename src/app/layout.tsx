import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWidgets from '@/components/shared/FloatingWidgets';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MyyShop | Turn your social impact into a good business',
    template: '%s | MyyShop',
  },
  description: 'MyyShop is an AI-driven global creator marketing platform that connects creators like you with trusted, high-quality brand collaborations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer disclaimer="*Free Samples only applicable to promotion order - original contents." />
        <FloatingWidgets />
      </body>
    </html>
  );
}
