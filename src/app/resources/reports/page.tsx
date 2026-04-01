'use client';

import { useState } from 'react';

const dataSources = ['Goldman Sachs', 'Statista', 'eMarketer', 'McKinsey', 'CB Insights', 'HubSpot'];
const filters = ['All', 'Creator Economy', 'Social Commerce', 'Cross-Border', 'AI & Marketing', 'Supply Chain'];

const reports = [
  { title: 'Creator Economy Market Size & Growth Forecast 2024–2027', category: 'Creator Economy', pages: 18, desc: 'Comprehensive analysis of the creator economy market trajectory, revenue projections, and growth drivers.' },
  { title: 'Cross-Border Social Commerce Trends Q1 2026', category: 'Cross-Border', pages: 14, desc: 'Quarterly analysis of cross-border social commerce trends, consumer behavior, and emerging markets.' },
  { title: 'Social Commerce Platform Conversion Benchmarks 2026', category: 'Social Commerce', pages: 22, desc: 'Detailed conversion rate benchmarks across social commerce platforms with optimization strategies.' },
  { title: 'Creator Earnings & Monetization Benchmark Report 2026', category: 'Creator Economy', pages: 20, desc: 'Data-driven analysis of creator earnings across platforms, niches, and follower tiers.' },
  { title: 'AI-Powered Influencer Marketing: ROI Benchmarks 2026', category: 'AI & Marketing', pages: 16, desc: 'How AI is transforming influencer marketing ROI with detailed performance benchmarks.' },
  { title: 'Global Supply Chain for Social Sellers', category: 'Supply Chain', pages: 24, desc: 'Analysis of supply chain solutions for social commerce sellers and creator-driven e-commerce.' },
];

export default function ReportsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const filtered = activeFilter === 'All' ? reports : reports.filter((r) => r.category === activeFilter);

  return (
    <>
      {/* Data Sources */}
      <section className="border-b border-gray-200 py-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Data Sources:</span>
            {dataSources.map((s) => (
              <span key={s} className="text-sm font-medium text-gray-500">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Industry Reports</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Free creator economy and social commerce research reports
          </p>

          {/* Filters */}
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

          {/* Report List */}
          <div className="flex flex-col gap-4">
            {filtered.map((report) => (
              <div key={report.title} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-primary transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-bg text-primary">{report.category}</span>
                    <span className="text-xs text-gray-400">{report.pages} pages</span>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">Free</span>
                  </div>
                  <h2 className="text-base font-bold mb-1">{report.title}</h2>
                  <p className="text-sm text-gray-600">{report.desc}</p>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="shrink-0 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-black/50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Download Report</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-dark text-2xl">&times;</button>
            </div>
            <p className="text-sm text-gray-600 mb-6">Enter your email to receive the report download link.</p>
            <form onSubmit={(e) => { e.preventDefault(); window.open('https://www.myyshop.com/login', '_blank'); }}>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm mb-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors" required />
              <button type="submit" className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
                Get Download Link
              </button>
            </form>
            <div className="text-center mt-4">
              <button className="text-sm text-gray-500 hover:text-primary">Sign in with Google</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
