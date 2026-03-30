'use client';

import { useState } from 'react';
import Link from 'next/link';

const filters = ['All', 'Creator Marketing', 'AI & Innovation', 'Platform Tips', 'Case Studies', 'Industry Trends'];

const articles = [
  { slug: 'small-creators-600k-views', title: 'How Small Creators Get 600K Views with Authentic Content', category: 'Creator Marketing', date: 'Feb 24, 2026', readTime: '8 min', excerpt: 'Learn how micro-influencers are achieving massive organic reach through authentic storytelling.' },
  { slug: '', title: 'The Rise of AI-Powered Creator Matching', category: 'AI & Innovation', date: 'Feb 18, 2026', readTime: '6 min', excerpt: 'How artificial intelligence is revolutionizing the way brands find and collaborate with creators.' },
  { slug: '', title: '5 Platform Tips to Boost Your MyyShop Earnings', category: 'Platform Tips', date: 'Feb 12, 2026', readTime: '5 min', excerpt: 'Proven strategies to maximize your revenue on the MyyShop platform.' },
  { slug: '', title: 'Beauty Creator Earns $68K GMV in 3 Months', category: 'Case Studies', date: 'Feb 5, 2026', readTime: '7 min', excerpt: 'A detailed case study of how one beauty creator scaled their MyyShop earnings.' },
  { slug: '', title: 'Social Commerce Trends to Watch in 2026', category: 'Industry Trends', date: 'Jan 28, 2026', readTime: '10 min', excerpt: 'Key trends shaping the future of social commerce and the creator economy.' },
  { slug: '', title: 'Cross-Border Content Strategy for Global Brands', category: 'Creator Marketing', date: 'Jan 20, 2026', readTime: '6 min', excerpt: 'How to create content that resonates across different markets and cultures.' },
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? articles : articles.filter((a) => a.category === activeFilter);

  return (
    <>
      <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full bg-primary-bg text-primary uppercase tracking-wider mb-4">Insights &amp; Resources</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">MyyShop Insights</h1>
          <p className="text-base text-gray-600">Expert tips, data-driven strategies and real case studies for creators</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link
                key={article.title}
                href={article.slug ? `/resources/insights/${article.slug}` : '#'}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary-bg text-primary mb-3">{article.category}</span>
                <h2 className="text-base font-bold mb-2 line-clamp-2">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
