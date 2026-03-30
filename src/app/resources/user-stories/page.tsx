import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'MyyShop Creator Stories | Real Influencer Success Cases',
  description: 'Discover how MyyShop creators are turning influence into income. Real stories, real results from creators across the globe.',
};

const stats = [
  { value: '150K+', label: 'Active Creators' },
  { value: '500K+', label: 'Products Listed' },
  { value: '12K+', label: 'Campaigns Completed' },
  { value: '50+', label: 'Countries' },
];

const caseStudies = [
  {
    name: 'Jessica Chen', platform: 'TikTok', followers: '2.3M', niche: 'Beauty & Skincare',
    gmv: '$68K', roi: '340%', period: '3 months',
    story: 'Jessica started using MyyShop\'s AI-powered trend radar to identify viral beauty products before they peaked. By combining authentic unboxing reviews with MyyShop\'s campaign matching, she scaled her creator earnings from $2K to $68K GMV in just 3 months.',
    highlights: ['Used MyyFind to discover trending K-beauty products', 'Created 45 authentic review videos', 'Maintained 8.2% engagement rate throughout'],
  },
  {
    name: 'Marcus Johnson', platform: 'TikTok', followers: '890K', niche: 'Tech & Gadgets',
    gmv: '$42K', roi: '280%', period: '4 months',
    story: 'As a tech reviewer with a growing audience, Marcus leveraged MyyShop\'s Opportunity hub to secure brand deals with emerging tech brands. His honest, detailed reviews resonated with his audience and drove impressive conversion rates.',
    highlights: ['Completed 28 brand campaigns', 'Average $1,500 per campaign', 'Built long-term partnerships with 5 brands'],
  },
  {
    name: 'Sofia Martinez', platform: 'Instagram', followers: '1.5M', niche: 'Fashion & Lifestyle',
    gmv: '$95K', roi: '410%', period: '6 months',
    story: 'Sofia combined MyyShop\'s content creation campaigns with the Showcase & Earn model to build multiple revenue streams. Her curated fashion storefront became a go-to destination for her audience, generating passive income alongside active campaign earnings.',
    highlights: ['Curated 200+ products on storefront', 'Generated $30K from passive MyyFinds views', 'Featured in 3 MyyShop partner brand campaigns'],
  },
];

const testimonials = [
  { name: 'Aisha Williams', quote: 'MyyShop made it possible for me to earn from day one. No follower minimum was a game-changer.', niche: 'Lifestyle' },
  { name: 'Ryan Park', quote: 'The AI matching saved me hours of searching for brand deals. Now the right campaigns come to me.', niche: 'Fitness' },
  { name: 'Emma Rodriguez', quote: 'I love that I can earn passively through MyyFinds while focusing on creating content I love.', niche: 'Food & Cooking' },
  { name: 'David Kim', quote: 'The transparent payout system is refreshing. I always know exactly what I\'m earning and when.', niche: 'Gaming' },
  { name: 'Lisa Chen', quote: 'MyyShop\'s value analysis helped me understand my worth and negotiate better deals.', niche: 'Beauty' },
  { name: 'Jake Thompson', quote: 'From 0 followers to earning consistently — MyyShop believed in me when others didn\'t.', niche: 'Travel' },
];

export default function UserStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Real Creators. <span className="bg-gradient-to-r from-primary via-[#5ED4D0] to-primary-dark bg-clip-text text-transparent">Real Results.</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover how MyyShop creators are turning influence into income across the globe.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 bg-white border border-gray-200 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
          {caseStudies.map((cs, i) => (
            <article key={cs.name} className={`bg-white border border-gray-200 rounded-2xl overflow-hidden ${i % 2 === 0 ? '' : ''}`}>
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                <div className="bg-gradient-to-br from-primary-bg to-white p-8 md:p-10 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mb-4">
                    {cs.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h2 className="text-xl font-bold mb-1">{cs.name}</h2>
                  <div className="text-sm text-gray-500 mb-4">{cs.platform} &middot; {cs.followers} followers &middot; {cs.niche}</div>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">{cs.gmv}</div>
                      <div className="text-xs text-gray-500">GMV</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{cs.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{cs.period}</div>
                      <div className="text-xs text-gray-500">Period</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">{cs.story}</p>
                  <h3 className="text-sm font-semibold mb-3">Key Highlights:</h3>
                  <ul className="flex flex-col gap-2">
                    {cs.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What Creators Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="text-primary text-2xl font-bold mb-2">&ldquo;</div>
                <p className="text-sm font-medium text-dark leading-relaxed mb-4">{t.quote}</p>
                <div className="text-sm text-gray-500">{t.name} &middot; {t.niche}</div>
                <div className="text-gold text-sm mt-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-primary-darker to-[#1EB4AA] rounded-2xl p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Creator Journey</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">Join thousands of creators earning with MyyShop</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#" variant="cta" arrow>Join as Creator</Button>
              <a href="mailto:support@myyshop.com" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white/80 hover:text-white transition-colors">Contact Us &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
