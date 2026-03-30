import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import WorkflowTabs from './WorkflowTabs';

export const metadata: Metadata = {
  title: 'MyyShop Product Features | AI-Powered Creator Commerce Platform',
  description: "Discover MyyShop's AI-powered creator tools: MyyFind trend radar, Opportunity campaigns, Competitor Analysis, MyyBot matching assistant, sharing rewards, positioning guidance, and value analytics.",
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="#3AA39F" strokeWidth="1.5" />
      <path d="M5 8l2 2 4-4" stroke="#3AA39F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features = [
  {
    id: 'myyfind',
    name: 'MyyFind', cn: '趋势雷达', tagline: 'AI-Powered Trend Radar',
    desc: 'Real-time monitoring of TikTok, Instagram, YouTube, and global e-commerce platforms to identify viral products before they peak. Get heat scores, GMV estimates, and sourcing recommendations.',
    highlights: ['Viral signal detection across platforms', 'GMV forecasting & supplier matching', '24-hour trend alerts'],
    iconBg: '#E8F7F6', iconStroke: '#20837F',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#E8F7F6"/><circle cx="16" cy="16" r="6.5" stroke="#20837F" strokeWidth="1.5" strokeDasharray="2 3"/><path d="M16 10.5v5.2l3.6 3.6" stroke="#20837F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: 'opportunity',
    name: 'Opportunity', cn: '协作任务', tagline: 'Brand Campaign Hub',
    desc: 'Your gateway to global brand collaborations. Browse and apply to hundreds of active campaigns from verified brands. Auto-matching based on your profile, rates, and content style.',
    highlights: ['100% paid collaborations', 'Free sample products', 'One-click application'],
    iconBg: '#EEF3FF', iconStroke: '#4059D8',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#EEF3FF"/><path d="M10 14h12M10 18h7" stroke="#4059D8" strokeWidth="1.6" strokeLinecap="round"/><path d="M22 11v10M20 21l2 2 2-2" stroke="#4059D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    id: 'competitor-analysis',
    name: 'Competitor Analysis', cn: '竞争力分析', tagline: 'Market Intelligence',
    desc: 'Benchmark your performance against similar creators in your niche. Analyze content strategies, engagement patterns, collaboration frequency, and estimated earnings to identify growth opportunities.',
    highlights: ['Niche benchmarking reports', 'Content gap analysis', 'Pricing optimization insights'],
    iconBg: '#F3E8FF', iconStroke: '#7C3AED',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#F3E8FF"/><path d="M8 22V14M13 22V10M18 22v-5M23 22V8" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
  {
    id: 'myybot',
    name: 'MyyBot', cn: '商单匹配助手', tagline: 'AI Collaboration Assistant',
    desc: 'Your intelligent assistant for finding and managing brand deals. MyyBot learns your preferences and automatically recommends the best-matching campaigns, negotiates terms, and tracks deliverables.',
    highlights: ['Smart campaign recommendations', 'Automated negotiation support', 'Deadline & deliverable tracking'],
    iconBg: '#FFF2E9', iconStroke: '#FF8A38',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#FFF2E9"/><circle cx="12" cy="14" r="3" stroke="#FF8A38" strokeWidth="1.5"/><circle cx="20" cy="14" r="3" stroke="#FF8A38" strokeWidth="1.5"/><path d="M8 22c2-2 6-3 8-3s6 1 8 3" stroke="#FF8A38" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    id: 'sharing-rewards',
    name: 'Sharing Rewards', cn: '分享赚取收益', tagline: 'Earn While You Share',
    desc: 'Turn your product recommendations into passive income. Share curated product collections with your audience and earn commissions on every sale—no content creation required.',
    highlights: ['Commission on every sale', 'One-click product collections', 'Real-time earnings tracking'],
    iconBg: '#FCE8F3', iconStroke: '#E84393',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#FCE8F3"/><path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#E84393" strokeWidth="1.6" strokeLinecap="round"/><path d="M10 16H8M22 12l2-2M22 20l2 2" stroke="#E84393" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
  {
    id: 'positioning',
    name: 'Positioning Guidance', cn: '定位引导', tagline: 'Find Your Niche',
    desc: 'A step-by-step positioning wizard that helps you define your unique value proposition. Answer guided questions about your audience, content style, and goals to get personalized niche recommendations.',
    highlights: ['Audience persona builder', 'Content theme suggestions', 'Monetization roadmap'],
    iconBg: '#E8F7F6', iconStroke: '#20837F',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#E8F7F6"/><path d="M16 9v14M9 16h14" stroke="#20837F" strokeWidth="1.6" strokeLinecap="round"/><circle cx="16" cy="16" r="4" stroke="#20837F" strokeWidth="1.5"/></svg>,
  },
  {
    id: 'value-analysis',
    name: 'Value Analysis', cn: '价值分析', tagline: 'Content Value Assessment',
    desc: "AI-powered analytics that quantify your content's commercial potential. Track GMV attribution, conversion rates, and audience purchasing behavior to understand and prove your true value to brands.",
    highlights: ['GMV attribution tracking', 'Conversion funnel analysis', 'Negotiation-ready reports'],
    iconBg: '#FFF2E9', iconStroke: '#FF8A38',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="10" fill="#FFF2E9"/><path d="M11 21l3-5 2 3 5-8" stroke="#FF8A38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 23h14" stroke="#FF8A38" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
];

const comparisonRows = [
  { feature: 'AI Trend Discovery', cn: 'AI趋势发现', myyshop: '✓', other: '—' },
  { feature: '100% Paid Collaborations', cn: '100%付费合作', myyshop: '✓', other: 'Partial' },
  { feature: 'Free Sample Products', cn: '免费样品', myyshop: '✓', other: 'Varies' },
  { feature: 'AI Campaign Matching', cn: 'AI商单匹配', myyshop: '✓', other: '—' },
  { feature: 'Competitor Analysis', cn: '竞争分析', myyshop: '✓', other: '—' },
  { feature: 'Value Analytics Reports', cn: '价值分析报告', myyshop: '✓', other: 'Limited' },
  { feature: 'No Platform Fees', cn: '无平台费用', myyshop: '✓', other: '10-30%' },
  { feature: '0-Follower Entry', cn: '零粉丝门槛', myyshop: '✓', other: 'Minimum 1K-10K' },
];

export default function ProductFeaturesPage() {
  return (
    <>
      {/* Schema.org */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "MyyShop Creator Platform",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1660000" },
      })}} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white text-center py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <Badge>Creator Suite</Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-6 mb-4">
            7 AI-Powered Tools to<br />
            <span className="text-primary">Turn Influence</span> Into Income
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            From trend discovery to campaign matching, MyyShop&apos;s intelligent creator toolkit helps you
            find the right opportunities, create better content, and maximize your earnings—all in one platform.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
            {[
              { value: '1.66M+', label: 'Active Creators' },
              { value: '200+', label: 'Brand Partners' },
              { value: '$50M+', label: 'Creator Earnings' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
          <Button href="#features-overview" variant="cta">
            Explore All Features <span>&darr;</span>
          </Button>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features-overview" className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Your Complete Creator Toolkit</h2>
          <p className="text-lg text-gray-600 text-center max-w-[780px] mx-auto mb-15">
            Everything you need to research, create, collaborate, and monetize—all powered by AI
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((f) => (
              <article key={f.id} id={f.id} className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#CFE8E6] hover:shadow-[0_12px_40px_rgba(58,163,159,0.1)] transition-all">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-1">
                  {f.name} <span className="text-gray-400 font-normal text-sm">{f.cn}</span>
                </h3>
                <p className="text-sm font-medium text-primary mb-3">{f.tagline}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{f.desc}</p>
                <ul className="flex flex-col gap-2">
                  {f.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckIcon /> {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">How MyyShop Works</h2>
          <p className="text-lg text-gray-600 text-center max-w-[780px] mx-auto mb-12">
            Two proven ways to turn your influence into income
          </p>
          <WorkflowTabs />
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="feature-comparison" className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Why Creators Choose MyyShop</h2>
          <p className="text-lg text-gray-600 text-center max-w-[780px] mx-auto mb-12">
            See how we compare to traditional influencer platforms
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600 w-1/2">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary" /> MyyShop
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-500">Traditional Platforms</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="font-medium text-sm">{row.feature}</span>
                      <span className="block text-xs text-gray-400">{row.cn}</span>
                    </td>
                    <td className="text-center py-4 px-4 text-primary font-bold">{row.myyshop}</td>
                    <td className="text-center py-4 px-4 text-gray-400 text-sm">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-primary-darker to-[#1EB4AA] rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Creator Business?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join 1.66M+ creators using MyyShop&apos;s AI-powered tools to find opportunities, create better content, and maximize earnings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#" variant="cta" arrow>Start Earning Free</Button>
              <Button href="/about" variant="cta-outline" className="!border-white !text-white hover:!bg-white/20">Learn More</Button>
            </div>
            <p className="text-sm text-white/70 mt-6">*Free to join &middot; No platform fees &middot; Withdraw from $50</p>
          </div>
        </div>
      </section>
    </>
  );
}
