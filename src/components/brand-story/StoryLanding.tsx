'use client';

import Link from 'next/link';

const steps = [
  {
    number: 1,
    title: '挖掘品牌基因',
    desc: '输入您的企业与产品信息，AI 将深度洞察市场，为您提炼独一无二的品牌灵魂。',
    iconBg: 'bg-gradient-to-br from-[#8B9D8B] to-[#6B7F6B]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#1A1612] stroke-2">
        <path d="M2 15c6.667-6 13.333 0 20-6" />
        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
        <path d="M17 6l-2.5-2.5" />
        <path d="M14 8l-1-1" />
        <path d="M7 18l2.5 2.5" />
        <path d="M3.5 14.5l-1 1" />
        <path d="M20 9l2.5 2.5" />
        <path d="M14.5 16.5l1-1" />
        <path d="M10 5l2.5 2.5" />
      </svg>
    ),
  },
  {
    number: 2,
    title: '获取营销灵感',
    desc: '基于您的品牌 DNA，自动生成符合品牌调性的营销策划案与内容创意。',
    iconBg: 'bg-gradient-to-br from-[#C4B8A8] to-[#A78C6D]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#1A1612] stroke-2">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    number: 3,
    title: '生成视觉素材',
    desc: '一键产出高质量、风格统一的图片与视频素材，直接用于您的社交媒体发布。',
    iconBg: 'bg-gradient-to-br from-[#E5D9C3] to-[#C4B8A8]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#1A1612] stroke-2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
];

export default function StoryLanding() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E5E0] flex flex-col justify-center relative overflow-x-hidden">
      {/* Ambient light */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle,rgba(107,79,51,0.15)_0%,rgba(5,5,5,0)_70%)] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-8 py-16 text-center w-full relative z-10">
        {/* Header */}
        <div className="mb-20 animate-[fadeInDown_1s_ease-out]">
          <h1 className="font-[Playfair_Display,serif] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold italic text-[#E8E5E0] mb-4 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            欢迎来到出海故事
          </h1>
          <p className="text-lg text-[#8B8578] font-light max-w-[600px] mx-auto tracking-wider">
            轻松打造具有国际竞争力的品牌基因与全链路营销素材
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-16 perspective-[1000px]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-[rgba(26,22,18,0.6)] border border-[#3D3429] rounded-3xl py-14 px-8 flex flex-col items-center backdrop-blur-[10px] relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2.5 hover:bg-[rgba(36,30,24,0.8)] hover:border-[#A78C6D] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-[fadeInUp_0.8s_ease-out_backwards]"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              {/* Step number */}
              <div className="w-8 h-8 border border-[#8B8578] rounded-full flex items-center justify-center font-serif text-sm text-[#8B8578] mb-8 transition-all duration-400 group-hover:border-[#E5D9C3] group-hover:text-[#E5D9C3]">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl font-semibold italic text-[#E8E5E0] mb-10">
                {step.title}
              </h3>
              {/* Icon box */}
              <div className={`w-[120px] h-[120px] rounded-[35px] flex items-center justify-center mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] ${step.iconBg}`}>
                {step.icon}
              </div>
              <p className="text-[0.95rem] text-[#8B8578] leading-relaxed max-w-[260px] opacity-90">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 animate-[fadeInUp_1s_ease-out_0.5s_backwards]">
          <Link
            href="/brand/story/input"
            className="inline-flex items-center justify-center px-16 py-[18px] bg-[#E5D9C3] text-[#1A1612] font-semibold text-lg rounded-full transition-all duration-400 shadow-[0_0_20px_rgba(167,140,109,0.2)] hover:scale-105 hover:bg-[#F0E6D6] hover:shadow-[0_0_40px_rgba(229,217,195,0.4)]"
          >
            立即开始
          </Link>
        </div>
      </div>
    </div>
  );
}
