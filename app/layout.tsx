import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BrandOps Apps — AI Tools for Personal Brands',
  description: 'A calm, product-first marketplace of AI tools for LinkedIn carousels, newsletters, and GEO/SEO audits.',
  openGraph: {
    title: 'BrandOps Apps — AI Tools for Personal Brands',
    description: 'Discover review-first AI tools for LinkedIn content, newsletters, and GEO/SEO visibility.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
