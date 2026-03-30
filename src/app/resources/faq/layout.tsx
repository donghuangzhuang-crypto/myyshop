import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyyShop FAQ | Frequently Asked Questions for Creators',
  description: 'Find answers to common questions about MyyShop creator platform — registration, earnings, payouts, campaigns, and more.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
