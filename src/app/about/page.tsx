import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About MyyShop — Empowering Creators to Monetize Their Influence',
  description: 'MyyShop is a social commerce SaaS platform founded in 2020 by DHgate Group, connecting 1.66 million global creators with 2 million+ Chinese suppliers, serving over 23 million buyers worldwide.',
};

const numbers = [
  { value: '1.66M+', label: 'Content Creators', desc: 'Global KOLs, KOCs and micro-influencers across TikTok, Instagram, and YouTube creating content and earning through MyyShop.' },
  { value: '2M+', label: 'Chinese Suppliers', desc: "Leveraging DHgate Group's two decades of supply chain expertise, connecting creators with quality Chinese manufacturers." },
  { value: '23M+', label: 'Buyers Served', desc: 'Over 23 million consumers worldwide have purchased products through MyyShop-powered creator storefronts.' },
  { value: '2020', label: 'Year Founded', desc: 'Launched by DHgate Group as a dedicated social commerce SaaS platform for the global creator economy.' },
];

const whatWeDo = [
  { title: 'AI-Powered Monetization', desc: 'Powered by AI trained on 33M+ SKUs and 1.66M creators, MyyShop intelligently matches you with the most relevant brand opportunities. Our tools like MyyFinds and Free Value Reports empower you to turn your influence into sustainable income.' },
  { title: 'Transparent Earnings', desc: "MyyShop tracks the value your content generates, ensuring transparent payouts with clear attribution. By turning your creative work and MyyFinds sharing into quantifiable rewards, MyyShop empowers creators to build sustainable income streams." },
  { title: 'Platform Support', desc: 'If any issues arise during the collaboration, please contact our support team. We review each case and provide fair, transparent, and efficient resolution. Our courses and case studies help creators enhance monetization skills.' },
];

const benefits = [
  { num: '01', title: 'No Registration Restrictions & No Platform Fees', desc: 'Creators can use MyyShop even with 0 fans. MyyShop takes no commission on the earnings you generate.' },
  { num: '02', title: '100% Paid Cooperation & Free Samples', desc: 'Quickly connect your accounts on TikTok, Instagram, or YouTube to begin monetizing.' },
  { num: '03', title: 'Multiple Earning Methods & Ultra-low Withdrawal Threshold', desc: 'Creators earn through brand deals, content creation, product promotion, affiliate promotion, and exposure-based tools like MyyFinds. Once your balance reaches $50, you can request a withdrawal.' },
  { num: '04', title: 'Free Insight Report & Copyright Protection', desc: 'We offer creators Free Value Reports to see the real potential of their account. Your work is strictly protected — no one can download them until your earnings have been credited.' },
];

const timeline = [
  { year: '2025', title: '1.66M creators connected; DHgate App ranks #1 in 98 countries', desc: 'MyyShop has connected 1.66 million global content creators with China\'s supply chain, while the platform serves over 23 million buyers worldwide.' },
  { year: '2024', title: 'Launch of "FeiTian" cross-border AI model', desc: 'MyyShop introduced "FeiTian" (飞天), a vertical AI large model for cross-border commerce that automatically generates multilingual product videos. Merchants reduced marketing costs by 62%.' },
  { year: '2023 Q2', title: 'Full-scale presence at VidCon USA', desc: "MyyShop participated with a major booth at VidCon in Los Angeles. A co-branded flash sale with top creators sold out on-site." },
  { year: '2023 Q1', title: 'Debut at SXSW creative industry expo', desc: "MyyShop exhibited at SXSW in Austin, Texas — completing the brand's first high-profile international creative industry appearance." },
  { year: '2022', title: 'Dual award recognition for social commerce innovation', desc: 'Received the "Global Social Commerce SaaS Platform" award from Global Brands Magazine and the "Cross-border SaaS Service Enterprise of the Year" at WISE 2022.' },
  { year: '2020', title: 'MyyShop founded by DHgate Group', desc: 'Launched as a decentralized social commerce SaaS platform, purpose-built for global content creators.' },
];

const events = [
  { date: 'June 2023', location: 'Los Angeles, CA', title: "VidCon 2023 — World's Largest Creator Conference", desc: "MyyShop's booth attracted continuous queues. A co-branded flash sale with top creators sold out on-site." },
  { date: 'March 2023', location: 'Austin, TX', title: 'SXSW 2023 — Creative Industry Expo', desc: "MyyShop exhibited at SXSW creative industry expo, completing the brand's first high-profile Western appearance." },
  { date: 'September 2023', location: 'Los Angeles, CA', title: 'MyyShop × piinkpilates — Creator Wellness Party', desc: 'Co-hosted a themed party exploring new offline monetization models at the intersection of wellness and e-commerce.' },
  { date: '2023', location: 'Los Angeles, CA', title: 'MyyShop Limo Tour — Exclusive Creator Experience', desc: 'During VidCon, MyyShop invited partner creators to an exclusive branded limo experience, deepening relationships.' },
];

const team = [
  { initials: 'DW', name: 'Diane Wang (王树彤)', role: 'Founder & Chairwoman', bio: "Founded one of China's earliest cross-border B2B e-commerce platforms. Led DHgate to become a major global trade platform. Now driving the integration of the creator economy with cross-border supply chains through MyyShop.", linkedin: 'https://www.linkedin.com/in/dianewang/' },
  { initials: 'VP', name: 'VP of Product', role: 'Product & AI Strategy', bio: 'Leads MyyShop\'s product roadmap and AI-powered features including the "FeiTian" model. 12+ years of experience in marketplace platform design.', linkedin: '#' },
  { initials: 'VB', name: 'VP of Business Development', role: 'Creator Partnerships', bio: "Oversees global creator acquisition and partnership strategy. Built MyyShop's creator network from the ground up.", linkedin: '#' },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Organization",
        name: "MyyShop", url: "https://myyshop.com", foundingDate: "2020",
        parentOrganization: { "@type": "Organization", name: "DHgate Group" },
        address: { "@type": "PostalAddress", streetAddress: "360 E 2nd St, Suite 350", addressLocality: "Los Angeles", addressRegion: "CA", postalCode: "90012", addressCountry: "US" },
        award: ["Global Social Commerce SaaS Platform Award — Global Brands Magazine (2022)", "Cross-border SaaS Service Enterprise of the Year — WISE 2022 (36Kr)"],
      })}} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-primary-bg text-primary uppercase tracking-wider mb-6">This is MyyShop</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Empowering creators to <span className="border-b-[3px] border-primary">monetize</span> their influence and grow their earnings with <span className="border-b-[3px] border-primary">AI-driven monetization</span> tools.
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              MyyShop is a social commerce SaaS platform for global content creators, founded in <strong>2020</strong> by <strong>DHgate Group</strong>. The platform enables influencers to build their own e-commerce storefronts in 5 minutes — no cross-border experience required. To date, MyyShop has connected <strong>1.66 million content creators</strong> worldwide with <strong>2 million+ Chinese suppliers</strong>, serving over <strong>23 million buyers</strong> globally.
            </p>
            <Button href="#" variant="cta" arrow>Start Monetizing</Button>
          </div>
          <div className="bg-primary-bg rounded-2xl h-80 flex items-center justify-center text-gray-400 text-lg">Hero Image</div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {numbers.map((n) => (
              <div key={n.label} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-primary-border hover:shadow-card transition-all">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{n.value}</div>
                <div className="text-sm font-semibold text-dark mb-2">{n.label}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDo.map((f) => (
              <article key={f.title} className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Creators Choose */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">Why Creators Choose MyyShop</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <article key={b.num} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-border hover:shadow-card transition-all">
                <div className="text-3xl font-bold text-primary/30 mb-3">{b.num}</div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Awards &amp; Recognition</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">MyyShop&apos;s model of connecting global content creators with China&apos;s supply chain has earned recognition from international industry bodies.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                <span className="text-sm font-semibold text-primary">2022</span>
              </div>
              <h3 className="text-lg font-bold mb-1">Global Social Commerce SaaS Platform Award</h3>
              <div className="text-sm text-gray-500 mb-3">Global Brands Magazine</div>
              <p className="text-sm text-gray-600 leading-relaxed">Recognizing MyyShop&apos;s innovative model and scale achievement in connecting global content creators with China&apos;s supply chain for creator-driven e-commerce.</p>
            </article>
            <article className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                <span className="text-sm font-semibold text-primary">2022</span>
              </div>
              <h3 className="text-lg font-bold mb-1">Cross-border SaaS Service Enterprise of the Year</h3>
              <div className="text-sm text-gray-500 mb-3">WISE 2022 New Economy Summit (36Kr)</div>
              <p className="text-sm text-gray-600 leading-relaxed">Spotlighting companies driving breakthrough innovation in cross-border e-commerce technology and services.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Journey</h2>
          <p className="text-center text-white/70 mb-12">Key milestones in MyyShop&apos;s growth from founding to today.</p>
          <div className="relative border-l-2 border-white/20 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 flex flex-col gap-10">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-dark" />
                <div className="text-sm font-bold text-primary mb-1">{t.year}</div>
                <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Offline Events &amp; Activations</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">MyyShop builds real-world connections with creators through conferences, branded events, and community activations.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <article key={e.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-primary-bg h-48 flex items-center justify-center text-gray-400">Photo</div>
                <div className="p-6">
                  <div className="flex gap-4 text-xs text-gray-500 mb-2">
                    <span>{e.date}</span><span>{e.location}</span>
                  </div>
                  <h3 className="text-base font-bold mb-2">{e.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Leadership Team</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Our leadership combines decades of cross-border e-commerce experience with deep expertise in creator economy platforms.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t) => (
              <article key={t.name} className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{t.initials}</div>
                <h3 className="text-lg font-bold mb-1">{t.name}</h3>
                <div className="text-sm text-primary font-medium mb-3">{t.role}</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{t.bio}</p>
                <a href={t.linkedin} className="text-sm text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn &rarr;</a>
              </article>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">Contact <a href="mailto:support@myyshop.com" className="text-primary">support@myyshop.com</a> for press inquiries.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-primary-darker to-[#1EB4AA] rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Join the Creator Revolution</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              The creator economy is evolving, and your creativity deserves to be rewarded. Join MyyShop to amplify your influence and turn your creativity into sustainable income.
            </p>
            <Button href="#" variant="cta" arrow>Start Monetizing</Button>
            <p className="text-xs text-white/35 mt-5">*Free Samples only applicable to promotion order - original contents.</p>
          </div>
        </div>
      </section>
    </>
  );
}
