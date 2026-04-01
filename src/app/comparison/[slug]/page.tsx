import type { Metadata } from 'next';
import Link from 'next/link';
import { comparisons } from '@/content/comparisons';
import Button from '@/components/ui/Button';

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  return {
    title: comp ? `${comp.title} — Product Comparison` : 'Comparison',
    description: comp ? `Detailed feature comparison between MyyShop and ${comp.competitor}.` : '',
  };
}

export default async function ComparisonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);

  if (!comp) {
    return <div className="py-40 text-center text-gray-500">Comparison not found.</div>;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 text-sm text-gray-500">
        <Link href="/comparison" className="hover:text-primary">Product Comparison</Link>
        <span className="mx-2">/</span>
        <span className="text-dark font-medium">{comp.title}</span>
      </div>

      {/* At a Glance */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">{comp.title}</h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-bg border-2 border-primary rounded-2xl p-8 text-center relative">
              <span className="absolute top-4 right-4 text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">Recommended</span>
              <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-3">M</div>
              <h2 className="text-xl font-bold mb-1">MyyShop</h2>
              <div className="text-2xl font-bold text-primary">{comp.myyshopPrice}</div>
              <p className="text-sm text-gray-600 mt-2">Free for creators</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 text-gray-600 text-xl font-bold flex items-center justify-center mx-auto mb-3 mt-6">{comp.competitor[0]}</div>
              <h2 className="text-xl font-bold mb-1">{comp.competitor}</h2>
              <div className="text-2xl font-bold text-gray-600">{comp.competitorPrice}</div>
              <p className="text-sm text-gray-500 mt-2">Brand subscription</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Table */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Feature-by-Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-500 w-1/3">Feature</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-primary">MyyShop</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-500">{comp.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {comp.categories.map((cat) => (
                  <tr key={cat.name} className="contents">
                    <td colSpan={3} className="bg-gray-50 py-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">{cat.name}</td>
                    {cat.features.map((f) => (
                      <tr key={f.feature} className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <span className="text-sm font-medium">{f.feature}</span>
                          <span className="block text-xs text-gray-400">{f.cn}</span>
                        </td>
                        <td className="text-center py-3 px-4 text-sm text-primary font-semibold">{f.myyshop}</td>
                        <td className="text-center py-3 px-4 text-sm text-gray-500">{f.competitor}</td>
                      </tr>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Main Differences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {comp.differences.map((d) => (
              <div key={d.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-base font-bold mb-2">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-primary-darker to-[#1EB4AA] rounded-2xl p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 mb-6">Join MyyShop for free and start earning today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#" variant="cta" arrow>Start Earning</Button>
              <Link href="/comparison" className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white">View all comparisons &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
