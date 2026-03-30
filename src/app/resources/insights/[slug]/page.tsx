import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export function generateStaticParams() {
  return [{ slug: 'small-creators-600k-views' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  await params;
  return {
    title: 'How Small Creators Get 600K Views with Authentic Content | MyyShop Insights',
    description: 'Learn how micro-influencers are achieving massive organic reach through authentic storytelling and strategic content creation.',
  };
}

const tocItems = [
  'The Authenticity Advantage',
  'Finding Your Unique Voice',
  'Content Strategy That Works',
  'Leveraging Platform Algorithms',
  'Monetizing Your Reach',
];

const relatedArticles = [
  { title: 'The Rise of AI-Powered Creator Matching', category: 'AI & Innovation' },
  { title: '5 Platform Tips to Boost Your MyyShop Earnings', category: 'Platform Tips' },
  { title: 'Social Commerce Trends to Watch in 2026', category: 'Industry Trends' },
];

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 text-sm text-gray-500">
        <Link href="/resources/insights" className="hover:text-primary">Insights</Link>
        <span className="mx-2">/</span>
        <span className="text-dark font-medium">Creator Marketing</span>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <div>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary-bg text-primary mb-4">Creator Marketing</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How Small Creators Get 600K Views with Authentic Content</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span>By Lisa Chen</span>
              <span>Feb 24, 2026</span>
              <span>8 min read</span>
            </div>

            <div className="prose max-w-none">
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                In the era of polished, produced content, something unexpected is happening: small creators with authentic, unfiltered content are outperforming major influencers. This article explores how micro-influencers are leveraging authenticity to achieve massive organic reach.
              </p>

              <h2 id="s1" className="text-2xl font-bold mt-10 mb-4">The Authenticity Advantage</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Audiences are increasingly drawn to genuine, relatable content over highly produced brand messaging. Studies show that micro-influencers generate 60% more engagement than macro-influencers, largely because their content feels more personal and trustworthy.
              </p>

              <h2 id="s2" className="text-2xl font-bold mt-10 mb-4">Finding Your Unique Voice</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                The most successful small creators don&apos;t try to imitate major influencers. Instead, they lean into what makes them unique — whether it&apos;s their personality, expertise, cultural background, or perspective. This distinctive voice is what attracts and retains a loyal audience.
              </p>

              <h2 id="s3" className="text-2xl font-bold mt-10 mb-4">Content Strategy That Works</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Successful micro-influencers focus on consistency, niche expertise, and audience engagement. They post regularly, respond to comments, and create content that addresses their audience&apos;s specific needs and interests. MyyShop&apos;s Positioning Guidance tool helps creators identify their optimal content strategy.
              </p>

              <h2 id="s4" className="text-2xl font-bold mt-10 mb-4">Leveraging Platform Algorithms</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Understanding how TikTok, Instagram, and YouTube algorithms work is crucial. These platforms increasingly favor content that generates genuine engagement — comments, shares, and saves — over content from accounts with large follower counts.
              </p>

              <h2 id="s5" className="text-2xl font-bold mt-10 mb-4">Monetizing Your Reach</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                With platforms like MyyShop, even creators with 0 followers can start monetizing. Through MyyFinds passive income and brand campaign opportunities, small creators can build sustainable revenue streams while staying true to their authentic voice.
              </p>
            </div>

            {/* Author */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center">LC</div>
                <div>
                  <div className="font-semibold">Lisa Chen</div>
                  <div className="text-sm text-gray-500">Co-founder &amp; Head of Creator Strategy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Table of Contents</h3>
              <ul className="flex flex-col gap-2 mb-8">
                {tocItems.map((item, i) => (
                  <li key={item}>
                    <a href={`#s${i + 1}`} className="text-sm text-gray-600 hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="flex flex-col gap-3">
                {relatedArticles.map((a) => (
                  <div key={a.title} className="text-sm">
                    <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary-bg text-primary mb-1">{a.category}</span>
                    <div className="font-medium text-dark">{a.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary-darker to-[#1EB4AA] rounded-2xl p-10 text-center text-white mt-16">
          <h2 className="text-2xl font-bold mb-3">Ready to Grow Your Creator Career?</h2>
          <p className="text-white/90 mb-6">Join MyyShop and start turning your influence into income today.</p>
          <Button href="#" variant="cta" arrow>Start Earning</Button>
        </div>
      </article>
    </>
  );
}
