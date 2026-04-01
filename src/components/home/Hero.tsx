import Image from 'next/image';
import Button from '@/components/ui/Button';

const heroCards = [
  { src: 'https://www.myyshop.com/images/portal/creator_1.webp', followers: '50.9 K' },
  { src: 'https://www.myyshop.com/images/portal/creator_2.webp', followers: '8574' },
  { src: 'https://www.myyshop.com/images/portal/creator_3.webp', followers: '8 M' },
  { src: 'https://www.myyshop.com/images/portal/creator_4.webp', followers: '61.8 K' },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white text-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 pt-15">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.25] mb-4">
          <span className="block">
            <span className="text-primary">100%</span> Paid Collaborations
          </span>
          <span className="block">
            <span className="text-primary">100%</span> Free Samples
            <span className="text-[0.5em] align-super text-gray-600">*</span>{' '}
            <span className="text-primary">100%</span> Cash Payouts
          </span>
        </h1>
        <p className="text-base text-gray-600 mb-8">
          MyyShop is an AI-driven global creator marketing platform
        </p>
        <Button href="#" variant="cta" arrow>Start Earning</Button>

        <div className="flex gap-4 justify-center mt-12 pb-0 flex-wrap">
          {heroCards.map((card) => (
            <div key={card.followers} className="w-[280px] h-[380px] rounded-2xl overflow-hidden relative shrink-0 max-sm:w-full max-sm:h-[300px]">
              <Image src={card.src} alt="Creator" fill className="object-cover" sizes="(max-width: 640px) 100vw, 280px" />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 to-transparent flex items-center gap-2 text-white">
                <span className="text-base">&#128101;</span>
                <span className="text-xl font-bold flex-1">{card.followers}</span>
                <span className="text-sm bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">&#9654;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
