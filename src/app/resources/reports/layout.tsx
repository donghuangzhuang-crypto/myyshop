import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Reports | Free Creator Economy & Social Commerce Research',
  description: 'Download free research reports on the creator economy, social commerce trends, cross-border e-commerce, and AI-powered marketing.',
};

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
