import type { Metadata } from 'next';
import Link from 'next/link';
import { comparisonList } from '@/content/comparisons';

export const metadata: Metadata = {
  title: 'Product Comparison | MyyShop vs Competitors',
  description: 'Compare MyyShop with leading influencer marketing platforms. See how MyyShop stands out with free pricing, AI matching, and creator-first tools.',
};

export default function ComparisonPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How Does MyyShop Compare?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how MyyShop stacks up against leading influencer marketing and creator platforms.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonList.map((item) => {
              const hasDetail = item.slug === 'myyshop-vs-aspire';
              return (
                <Link
                  key={item.slug}
                  href={hasDetail ? `/comparison/${item.slug}` : '#'}
                  className={`bg-white border border-gray-200 rounded-2xl p-8 transition-all ${hasDetail ? 'hover:border-primary-border hover:shadow-card' : 'opacity-60'}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">M</div>
                    <span className="text-gray-400 font-medium">vs</span>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm">
                      {item.name[0]}
                    </div>
                  </div>
                  <h2 className="text-lg font-bold mb-2">MyyShop vs {item.name}</h2>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  {hasDetail && (
                    <div className="mt-4 text-sm font-semibold text-primary">View comparison &rarr;</div>
                  )}
                  {!hasDetail && (
                    <div className="mt-4 text-xs text-gray-400">Coming soon</div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
