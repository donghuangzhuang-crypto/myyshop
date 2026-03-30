import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '定位引导 Launchpad | MyyShop',
  description: '通过 AI 对话找到最适合你的网红定位方向。',
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
