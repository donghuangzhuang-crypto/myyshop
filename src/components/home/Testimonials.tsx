import { testimonialsRow1, testimonialsRow2, type Testimonial } from '@/content/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-gradient-to-br from-primary-bg to-white/90 rounded-2xl px-8 py-7 min-w-[320px] max-w-[320px] shrink-0 max-sm:min-w-[260px] max-sm:max-w-[260px] max-sm:px-6 max-sm:py-5">
      <div className="text-primary text-[28px] font-bold leading-none mb-2">&ldquo; &rdquo;</div>
      <p className="text-[15px] font-semibold leading-relaxed mb-4 text-dark">{t.quote}</p>
      <p className="text-sm text-gray-600 mb-3">- {t.author}, {t.category}</p>
      <div className="text-gold text-lg tracking-[2px]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
    </div>
  );
}

function MarqueeRow({ testimonials, direction }: { testimonials: Testimonial[]; direction: 'left' | 'right' }) {
  const animClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';
  return (
    <div className="overflow-hidden mt-5 first:mt-10">
      <div className={`flex gap-5 w-max ${animClass}`}>
        {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
        {testimonials.map((t, i) => <TestimonialCard key={`dup-${i}`} t={t} />)}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:pb-25 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading title={<><span className="text-primary">200+</span> Brands Trust MyyShop &#129309;</>} />
      </div>
      <MarqueeRow testimonials={testimonialsRow1} direction="left" />
      <MarqueeRow testimonials={testimonialsRow2} direction="right" />
    </section>
  );
}
