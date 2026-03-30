import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyyShop Insights | Creator Marketing Tips & Data-Driven Strategies',
  description: 'Expert tips, data-driven strategies, and real case studies for creators looking to grow their influence and earnings.',
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
