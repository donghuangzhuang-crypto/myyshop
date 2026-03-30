import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const contentCreationSteps = [
  { title: 'Find Products You Love', desc: 'Browse trending products and brand campaigns that match your niche and interests.' },
  { title: 'Apply for Collaboration', desc: 'One-click apply for brand deals. Get approved and receive free sample products.' },
  { title: 'Publish Your Content', desc: 'Create and publish authentic reviews, unboxings, or promotional content on your social channels.' },
  { title: 'Collect Your Earnings', desc: 'Get paid for every completed collaboration. Withdraw anytime once you reach $50.' },
];

const showcaseSteps = [
  { title: 'Find Products You Love', desc: 'Discover trending and high-quality products across thousands of categories.' },
  { title: 'Add to Your Storefront', desc: 'Curate your personal product page with items you genuinely recommend to your audience.' },
  { title: 'Audience Browses Products', desc: 'Your followers discover and browse products on your storefront, generating impressions.' },
  { title: 'Earn from Exposure', desc: 'Get rewarded for every product view and engagement — no content creation needed.' },
];

function StepsList({ steps, variant }: { steps: typeof contentCreationSteps; variant: 'teal' | 'blue' }) {
  const numBg = variant === 'teal' ? 'bg-primary' : 'bg-secondary';
  const connectorBg = variant === 'teal' ? 'bg-[#CFE8E6]' : 'bg-[#D4DDFF]';

  return (
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={step.title}>
          <div className="flex gap-4 items-start">
            <span className={`w-8 h-8 rounded-full ${numBg} text-white text-sm font-bold flex items-center justify-center shrink-0`}>
              {i + 1}
            </span>
            <div>
              <h4 className="text-[15px] font-semibold mb-1 text-dark">{step.title}</h4>
              <p className="text-[13px] text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-0.5 h-5 ${connectorBg} ml-[15px]`} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function HowToEarn() {
  return (
    <section className="py-20 lg:pb-25">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          title="Two Ways to Earn on MyyShop"
          subtitle="Choose the earning method that fits your style — or do both to maximize your income"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-15">
          {/* Content Creation */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-8 lg:p-9 hover:border-[#CFE8E6] hover:shadow-[0_12px_40px_rgba(58,163,159,0.1)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="14" fill="#E8F7F6" />
                <path d="M16 18h16M16 24h10" stroke="#3AA39F" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 22l4 4-4 4" stroke="#3AA39F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="12" y="13" width="24" height="22" rx="3" stroke="#3AA39F" strokeWidth="2" />
              </svg>
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary-bg text-primary uppercase tracking-wider">
                Content Creation
              </span>
            </div>
            <h3 className="text-[22px] font-bold mb-2 text-dark">Create Content &amp; Get Paid</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-7">
              Apply for brand collaborations, create authentic content, and earn guaranteed payments for every completed campaign.
            </p>
            <StepsList steps={contentCreationSteps} variant="teal" />
          </div>

          {/* Showcase & Earn */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-8 lg:p-9 hover:border-[#CFE8E6] hover:shadow-[0_12px_40px_rgba(58,163,159,0.1)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-5">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="14" fill="#EEF3FF" />
                <rect x="14" y="12" width="20" height="24" rx="3" stroke="#4059D8" strokeWidth="2" />
                <circle cx="24" cy="20" r="4" stroke="#4059D8" strokeWidth="2" />
                <path d="M18 30h12M20 26h8" stroke="#4059D8" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#EEF3FF] text-secondary uppercase tracking-wider">
                Showcase &amp; Earn
              </span>
            </div>
            <h3 className="text-[22px] font-bold mb-2 text-dark">Share Products &amp; Earn Passively</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-7">
              Add products to your personal storefront. Earn income whenever your audience browses and engages with your curated collections.
            </p>
            <StepsList steps={showcaseSteps} variant="blue" />
          </div>
        </div>

        <div className="text-center mt-15">
          <Button href="#" variant="cta" arrow>Start Earning</Button>
        </div>
      </div>
    </section>
  );
}
