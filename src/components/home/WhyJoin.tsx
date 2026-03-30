import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const features = [
  {
    title: 'Campaign Opportunities',
    desc: 'Massive global campaigns yearly; creators of all sizes can apply for content creation tasks.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#E8F7F6" />
        <path d="M16 20h16M16 26h10M14 14h20a2 2 0 012 2v16a2 2 0 01-2 2H14a2 2 0 01-2-2V16a2 2 0 012-2z" stroke="#3AA39F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Growth Support',
    desc: 'AI tools + expert guidance to enhance content quality and campaign execution.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#E8F7F6" />
        <path d="M24 16v16M18 22l6-6 6 6M16 34h16" stroke="#3AA39F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Transparent Earnings',
    desc: 'Real-time analytics dashboard; no platform withdrawal fees.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#E8F7F6" />
        <path d="M24 16v4M24 28v4M18 24h-4M34 24h-4M20 20l-2-2M30 30l-2-2M28 20l2-2M18 30l2-2" stroke="#3AA39F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" stroke="#3AA39F" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function WhyJoin() {
  return (
    <section className="py-20 lg:pb-25">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading title={<>Why Join MyyShop &#10024;</>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((f) => (
            <div key={f.title} className="text-center px-6 py-8">
              <div className="mb-5 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-base text-[#464A4E] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/products#feature-comparison" variant="cta-outline" arrow>Learn More</Button>
        </div>
      </div>
    </section>
  );
}
