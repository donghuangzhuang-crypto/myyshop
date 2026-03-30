'use client';

import { useState } from 'react';

const contentCreationSteps = [
  { num: '01', title: 'Find Products', desc: 'Browse trending products and brand campaigns that match your niche and interests.' },
  { num: '02', title: 'Apply for Collaboration', desc: 'One-click apply for brand deals. Get approved and receive free sample products.' },
  { num: '03', title: 'Publish Content', desc: 'Create and publish authentic reviews, unboxings, or promotional content on your social channels.' },
  { num: '04', title: 'Collect Earnings', desc: 'Get paid for every completed collaboration. Withdraw anytime once you reach $50.' },
];

const showcaseSteps = [
  { num: '01', title: 'Find Products', desc: 'Discover trending and high-quality products across thousands of categories.' },
  { num: '02', title: 'Add to Storefront', desc: 'Curate your personal product page with items you genuinely recommend to your audience.' },
  { num: '03', title: 'Users Browse Products', desc: 'Your followers discover and browse products on your storefront, generating impressions and exposure.' },
  { num: '04', title: 'Earn from Exposure', desc: 'Get rewarded for every product view and engagement — no content creation needed.' },
];

function Arrow({ color }: { color: string }) {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 20h20M26 14l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function WorkflowTabs() {
  const [activeTab, setActiveTab] = useState<'content' | 'showcase'>('content');
  const isContent = activeTab === 'content';
  const steps = isContent ? contentCreationSteps : showcaseSteps;
  const numBg = isContent ? 'bg-primary' : 'bg-secondary';
  const arrowColor = isContent ? '#CFE8E6' : '#D4DDFF';

  return (
    <>
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${activeTab === 'content' ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary'}`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="16" height="14" rx="2" /><path d="M6 8h8M6 11h5" /></svg>
          Content Creation
        </button>
        <button
          onClick={() => setActiveTab('showcase')}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors ${activeTab === 'showcase' ? 'bg-secondary text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-secondary'}`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="2" width="14" height="16" rx="2" /><circle cx="10" cy="8" r="3" /><path d="M6 14h8" /></svg>
          Showcase &amp; Earn
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-start">
        {steps.map((step, i) => (
          <div key={step.num} className="contents">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <div className={`w-10 h-10 rounded-full ${numBg} text-white text-sm font-bold flex items-center justify-center mx-auto mb-3`}>
                {step.num}
              </div>
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
            {i < steps.length - 1 && <Arrow color={arrowColor} />}
          </div>
        ))}
      </div>
    </>
  );
}
