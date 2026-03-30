export interface Comparison {
  slug: string;
  title: string;
  competitor: string;
  competitorPrice: string;
  myyshopPrice: string;
  categories: {
    name: string;
    features: { feature: string; cn: string; myyshop: string; competitor: string }[];
  }[];
  differences: { title: string; desc: string }[];
}

export const comparisons: Comparison[] = [
  {
    slug: 'myyshop-vs-aspire',
    title: 'MyyShop vs Aspire',
    competitor: 'Aspire',
    competitorPrice: '~$2,000/mo',
    myyshopPrice: '$0/mo',
    categories: [
      {
        name: 'Platform Type',
        features: [
          { feature: 'Target User', cn: '目标用户', myyshop: 'Creators (Creator-first)', competitor: 'Brands (Brand-first)' },
          { feature: 'Pricing', cn: '定价', myyshop: 'Free for creators', competitor: 'From $2,000/mo' },
        ],
      },
      {
        name: 'Discovery & Matching',
        features: [
          { feature: 'AI Trend Radar', cn: 'AI 趋势雷达', myyshop: '✓', competitor: '—' },
          { feature: 'AI Campaign Matching', cn: 'AI 商单匹配', myyshop: '✓', competitor: 'Manual search' },
        ],
      },
      {
        name: 'Collaboration',
        features: [
          { feature: 'Free Samples', cn: '免费样品', myyshop: '✓ (All campaigns)', competitor: 'Brand discretion' },
          { feature: '100% Paid Campaigns', cn: '100% 付费', myyshop: '✓', competitor: 'Mixed (some gifting-only)' },
        ],
      },
      {
        name: 'Analytics',
        features: [
          { feature: 'Value Analysis', cn: '价值分析', myyshop: '✓ (AI-powered)', competitor: 'Basic metrics' },
          { feature: 'Competitor Analysis', cn: '竞争分析', myyshop: '✓', competitor: '—' },
        ],
      },
      {
        name: 'Requirements',
        features: [
          { feature: 'Minimum Followers', cn: '最低粉丝要求', myyshop: '0 (No minimum)', competitor: '1,000+' },
          { feature: 'Platform Fees', cn: '平台费用', myyshop: '0%', competitor: 'Included in subscription' },
        ],
      },
    ],
    differences: [
      { title: 'Creator-First vs Brand-First', desc: 'MyyShop is built for creators with free tools and zero barriers. Aspire is designed for brands with subscription-based pricing.' },
      { title: 'Pricing Model', desc: 'MyyShop is 100% free for creators with no platform fees. Aspire charges brands from $2,000/month.' },
      { title: 'AI Matching vs Manual', desc: "MyyShop uses AI to automatically match creators with campaigns. Aspire requires manual search and outreach." },
      { title: 'Sample Fulfillment', desc: 'MyyShop provides free samples for all campaigns. Aspire leaves sample decisions to individual brands.' },
    ],
  },
];

export const comparisonList = [
  { slug: 'myyshop-vs-aspire', name: 'Aspire', desc: 'Full-featured influencer marketing platform for brands' },
  { slug: 'myyshop-vs-grin', name: 'Grin', desc: 'Creator management platform for DTC brands' },
  { slug: 'myyshop-vs-creatoriq', name: 'CreatorIQ', desc: 'Enterprise influencer marketing cloud' },
  { slug: 'myyshop-vs-shopify-collabs', name: 'Shopify Collabs', desc: 'Shopify\'s built-in creator marketplace' },
  { slug: 'myyshop-vs-upfluence', name: 'Upfluence', desc: 'Influencer marketing & affiliate management' },
  { slug: 'myyshop-vs-brandwatch', name: 'Brandwatch', desc: 'Social media intelligence & influencer marketing' },
];
