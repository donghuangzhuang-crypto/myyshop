import Hero from '@/components/home/Hero';
import BrandMarquee from '@/components/home/BrandMarquee';
import WhyJoin from '@/components/home/WhyJoin';
import HowToEarn from '@/components/home/HowToEarn';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "MyyShop",
        url: "https://www.myyshop.com",
        description: "AI-driven global creator marketing platform connecting creators with brand collaborations.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.myyshop.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      })}} />
      <Hero />
      <BrandMarquee />
      <WhyJoin />
      <HowToEarn />
      <Testimonials />
    </>
  );
}
