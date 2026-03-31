import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FindYourLane — A Deep Dive for Inner Explorers | MyyShop',
  description: 'Discover your unique creator identity through an AI-guided conversation. Uncover your strengths, style, and the lane where you truly belong.',
};

export default function PositioningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 top-16 flex flex-col overflow-hidden bg-white z-10">
      {children}
    </div>
  );
}
