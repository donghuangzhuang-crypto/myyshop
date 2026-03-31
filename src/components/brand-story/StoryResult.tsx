'use client';

import { useState, useEffect } from 'react';

/* ── Color palette data ────────────────────────────────────────────── */
const colors = [
  { name: '暖木棕 Warm Walnut', value: '#6B4F33', hex: '#6B4F33' },
  { name: '柔沙金 Sand Gold', value: '#A78C6D', hex: '#A78C6D' },
  { name: '月白米 Ivory Mist', value: '#E5D9C3', hex: '#E5D9C3' },
  { name: '墨石灰 Charcoal Slate', value: '#3D3429', hex: '#3D3429' },
  { name: '浅亚麻 Light Linen', value: '#F5F3F1', hex: '#F5F3F1' },
];

const coreValues = [
  {
    title: 'BRAND DNA · 品牌基因',
    content: '将东方传统木作工艺与现代设计美学融合，为都市人打造一方兼具文化底蕴与功能舒适的居住空间。每一件家具都是对工匠精神的致敬。',
  },
  {
    title: 'TARGET AUDIENCE · 核心受众',
    content: '25-45岁追求品质生活的都市中产，热爱自然材质与东方美学，厌倦工业化千篇一律的家居风格，渴望在钢铁森林中拥有一片温润的实木天地。',
  },
  {
    title: 'MARKET POSITIONING · 市场定位',
    content: '介于顶奢定制家具与快消宜家之间的新中式精品家具品牌，以可触感的品质与合理的价格，填补海外市场"东方手作家具"的品类空白。',
  },
  {
    title: 'COMPETITIVE EDGE · 差异化优势',
    content: '全实木无贴皮的真实承诺、源自中国传统榫卯工艺的结构强度、现代极简线条下的东方含蓄美学，三者结合形成难以复制的品牌护城河。',
  },
];

const keywords = [
  'natural-wood', 'mortise-tenon', 'soft-glow', 'oriental-zen',
  'hand-crafted', 'sustainable', 'minimal-warmth', 'tactile-grain',
];

const slogans = [
  {
    text: '"Where Wood Breathes, Life Finds Its Calm."',
    reason: '以"呼吸"隐喻赋予木材生命力，与品牌核心主张"让实木呼吸东方"完美呼应，同时传递"回归自在"的精神追求。',
  },
  {
    text: '"Crafted by Nature, Curated for Home."',
    reason: '突出天然材质与精心设计的双重属性，暗示产品既尊重自然又经过深思熟虑的工艺打磨，适合强调品质的营销场景。',
  },
  {
    text: '"东方的温度，世界的家。"',
    reason: '中英双语策略的中文版主 slogan，以"温度"通感传递实木的触感温润与东方文化的情感暖意，跨越语言直达人心。',
  },
];

const toneBadges = ['沉稳自信', '温润含蓄', '知性优雅', '自然朴素'];

const fonts = [
  { label: 'English · Display', family: 'Playfair Display', cls: 'font-[Playfair_Display,serif] font-semibold', sample: 'Where Wood Breathes' },
  { label: 'English · Body', family: 'Inter', cls: 'font-[Inter,sans-serif] font-normal text-lg', sample: 'Handcrafted solid wood furniture that lets nature speak in your living space.' },
  { label: '中文 · 标题', family: 'Noto Sans SC', cls: 'font-[Noto_Sans_SC,sans-serif] font-semibold', sample: '让实木呼吸东方' },
  { label: '中文 · 正文', family: 'Noto Serif SC', cls: 'font-[Noto_Serif_SC,serif] font-normal text-lg', sample: '在都市节奏之外，给你一席自然沉稳的木质时光。' },
];

/* ── Floating Menu Items ───────────────────────────────────────────── */
const menuItems = [
  { label: '整体重新生成', icon: 'refresh' },
  { label: '分享报告', icon: 'share' },
  { label: '导出 PDF', icon: 'download' },
  { label: '图片素材', icon: 'image', dev: true },
  { label: '视频素材', icon: 'video', dev: true },
];

/* ── Modal State ──────────────────────────────────────────────────── */
function FloatingMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-10 right-10 z-[1000] flex flex-col-reverse items-end gap-4">
      <div className={`flex flex-col-reverse gap-3 items-end mb-2.5 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-5 pointer-events-none'}`}>
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="bg-[rgba(26,22,18,0.95)] border border-[#3D3429] rounded-xl px-5 py-3 flex items-center gap-3 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-[10px] min-w-[200px] transition-all hover:bg-[rgba(107,79,51,0.2)] hover:border-[#A78C6D] hover:-translate-x-1.5"
          >
            <svg className="w-5 h-5 stroke-[#A78C6D] shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {item.icon === 'refresh' && <><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></>}
              {item.icon === 'share' && <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>}
              {item.icon === 'download' && <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>}
              {item.icon === 'image' && <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></>}
              {item.icon === 'video' && <><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></>}
            </svg>
            <span className="text-[0.95rem] text-[#E8E5E0] whitespace-nowrap">{item.label}</span>
            {item.dev && <span className="text-[0.7rem] bg-white/10 px-1.5 py-0.5 rounded text-[#8B8578] ml-auto">开发中</span>}
          </div>
        ))}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-[220px] h-[70px] bg-gradient-to-br from-[rgba(107,79,51,0.9)] to-[rgba(26,22,18,1)] border border-[#A78C6D] rounded-[35px] cursor-pointer flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all z-[1002] overflow-hidden hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(107,79,51,0.4)] md:max-lg:w-[220px] max-md:w-[60px] max-md:h-[60px] max-md:rounded-[30px]`}
      >
        <svg className={`w-7 h-7 stroke-[#E5D9C3] transition-transform ${open ? 'rotate-45' : ''}`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <span className="font-sans text-lg font-medium text-[#E5D9C3] tracking-wider max-md:hidden">品牌工具箱</span>
      </button>
    </div>
  );
}

/* ── Modal Component ──────────────────────────────────────────────── */
function MediaModal({ open, onClose, media }: { open: boolean; onClose: () => void; media: { type: 'image' | 'video'; src: string } | null }) {
  if (!open || !media) return null;
  return (
    <div className="fixed inset-0 bg-[rgba(5,5,5,0.95)] z-[2000] flex items-center justify-center backdrop-blur-[10px] animate-[fadeIn_0.3s_ease]" onClick={onClose}>
      <div className="relative w-[95vw] max-w-[1400px] h-[90vh] bg-[rgba(26,22,18,0.98)] border border-[#3D3429] rounded shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-row overflow-hidden animate-[scaleIn_0.3s_ease] max-lg:flex-col" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 bg-[rgba(26,22,18,0.9)] border border-[#3D3429] rounded-full cursor-pointer flex items-center justify-center z-10 transition-all hover:bg-[rgba(107,79,51,0.3)] hover:border-[#A78C6D] hover:rotate-90">
          <svg className="w-5 h-5 stroke-[#E8E5E0] stroke-2" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <div className="flex-1 flex items-center justify-center bg-[rgba(5,5,5,0.5)] p-10 overflow-hidden">
          {media.type === 'image' ? (
            <img src={media.src} alt="" className="max-w-full max-h-full object-contain" />
          ) : (
            <video src={media.src} controls className="max-w-full max-h-full" />
          )}
        </div>
        <div className="w-[400px] bg-[rgba(26,22,18,0.95)] border-l border-[#3D3429] p-10 flex flex-col overflow-y-auto max-lg:w-full max-lg:max-h-[40vh] max-lg:border-l-0 max-lg:border-t max-lg:border-[#3D3429]">
          <h3 className="font-sans text-xl font-semibold text-[#E8E5E0] mb-6 pb-4 border-b border-[#3D3429]">视觉微调</h3>
          <p className="text-sm text-[#8B8578] uppercase tracking-wider mb-3">提示词 / PROMPT</p>
          <textarea className="w-full min-h-[200px] bg-[rgba(5,5,5,0.5)] border border-[#3D3429] rounded p-4 font-serif text-[0.95rem] text-[#E8E5E0] leading-relaxed resize-y transition-all focus:outline-none focus:border-[#A78C6D] focus:bg-[rgba(5,5,5,0.7)] mb-5" defaultValue="A solid walnut wood sofa in a minimalist living room with warm natural lighting, soft shadows, and an oriental zen aesthetic." />
          <button className="w-full h-[50px] bg-gradient-to-br from-[rgba(107,79,51,0.3)] to-[rgba(26,22,18,0.95)] border border-[#3D3429] rounded cursor-pointer flex items-center justify-center gap-2.5 font-sans text-base font-medium text-[#E8E5E0] mt-auto transition-all hover:from-[rgba(107,79,51,0.4)] hover:border-[#A78C6D] hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(107,79,51,0.3)]">
            <svg className="w-[18px] h-[18px] stroke-[#E8E5E0] stroke-2" viewBox="0 0 24 24" fill="none"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /></svg>
            重新生成
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────────────── */
export default function StoryResult() {
  const [brandData, setBrandData] = useState<{ name: string; description: string } | null>(null);
  const [modal, setModal] = useState<{ type: 'image' | 'video'; src: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('generatedBrandData');
    if (stored) {
      setBrandData(JSON.parse(stored));
    }
  }, []);

  const name = brandData?.name || 'Zhong Zhixin';

  return (
    <div className="bg-[#0A0A0A] text-[#E8E5E0] leading-relaxed overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-10 bg-[radial-gradient(ellipse_at_30%_50%,rgba(107,79,51,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_70%_30%,rgba(167,140,109,0.08)_0%,transparent_50%),linear-gradient(180deg,#050505_0%,#0A0A0A_100%)]">
        {/* Wood texture bg */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(107,79,51,0.03)_2px,rgba(107,79,51,0.03)_4px),repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(167,140,109,0.02)_1px,rgba(167,140,109,0.02)_2px)]" />
        <div className="relative z-[2] text-center max-w-[1000px]">
          <div className="font-[Inter,Noto_Sans_SC,sans-serif] text-[clamp(0.9rem,1.5vw,1.1rem)] font-light text-[#8B8578] mb-8 tracking-[0.3em] uppercase opacity-70">
            {name}
          </div>
          <h1 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.5rem,7vw,5.5rem)] font-semibold text-[#E8E5E0] mb-10 tracking-tight leading-[1.2] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <span className="block font-[Playfair_Display] text-[0.5em] tracking-wider text-[#A78C6D] mb-2">Let Wood Breathe, Let Life Return to Ease</span>
            <span>让实木呼吸东方<br />让生活回归自在</span>
          </h1>
          <div className="font-[Noto_Serif_SC,serif] text-[clamp(1.1rem,2vw,1.5rem)] text-[#E5D9C3] mb-12 leading-relaxed font-normal opacity-95">
            我们不做木头的搬运工，我们让木头开口讲故事。<br />
            每一道纹理，都是时光与自然的联合签名。
          </div>
          <div className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(1.3rem,2.5vw,2rem)] italic text-[#C4B8A8] leading-relaxed mt-16 py-12 px-10 border-t border-b border-[#3D3429] relative">
            "把客厅还给四季，把呼吸还给实木。<br />这是 {name} 写给每一个渴望归真之人的邀请函。"
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="max-w-[1600px] mx-auto px-[60px] py-[120px] max-lg:px-10 max-lg:py-20 max-md:px-6 max-md:py-16">

        {/* Section 1: Core Values */}
        <section className="mb-36 relative animate-[fadeInUp_1s_ease-out]">
          <div className="mb-16 relative">
            <p className="font-[Playfair_Display,serif] text-[0.95rem] text-[#A78C6D] tracking-[0.2em] mb-5 uppercase opacity-80">01 · Brand Core</p>
            <h2 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-[#E8E5E0] mb-6 tracking-tight leading-[1.2]">品牌核心</h2>
            <div className="w-[100px] h-0.5 bg-gradient-to-r from-[#A78C6D] to-transparent mt-6 opacity-60" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-9 mb-16 max-lg:grid-cols-1">
            {coreValues.map((item) => (
              <div key={item.title} className="group bg-gradient-to-br from-[rgba(107,79,51,0.05)] to-[rgba(26,22,18,0.8)] border border-[#3D3429] p-12 rounded-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[#A78C6D] hover:shadow-[0_20px_60px_rgba(107,79,51,0.2)] before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-[#A78C6D] before:to-transparent before:scale-y-0 before:transition-transform before:duration-500 hover:before:scale-y-100 max-md:p-9">
                <h3 className="font-sans text-base font-semibold text-[#E5D9C3] mb-6 tracking-wider uppercase">{item.title}</h3>
                <p className="font-[Noto_Serif_SC,serif] text-[1.05rem] leading-[2.2] text-[#E8E5E0] opacity-[0.92]">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Brand Proposition */}
          <div className="bg-gradient-to-br from-[rgba(107,79,51,0.12)] to-[rgba(167,140,109,0.06)] border border-[#3D3429] py-24 px-16 text-center my-16 relative overflow-hidden max-md:py-16 max-md:px-10">
            <p className="font-[Noto_Serif_SC,serif] text-[clamp(1.8rem,3.5vw,3rem)] font-medium text-[#E8E5E0] relative z-[1] leading-relaxed tracking-wider">
              我们不做木头的搬运工，<br />我们让木头开口讲故事。
            </p>
          </div>

          {/* Visual keywords */}
          <div className="flex flex-wrap gap-3 my-9">
            {keywords.map((kw) => (
              <span key={kw} className="bg-[rgba(107,79,51,0.15)] border border-[rgba(167,140,109,0.25)] text-[#E5D9C3] py-2.5 px-6 rounded-sm font-[Inter,sans-serif] text-sm font-normal tracking-wider lowercase transition-all hover:bg-[rgba(107,79,51,0.25)] hover:border-[#A78C6D] hover:-translate-y-0.5">
                {kw}
              </span>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3D3429] to-transparent my-24 opacity-50" />

        {/* Section 2: Color System */}
        <section className="mb-36 animate-[fadeInUp_1s_ease-out]">
          <div className="mb-16">
            <p className="font-[Playfair_Display,serif] text-[0.95rem] text-[#A78C6D] tracking-[0.2em] mb-5 uppercase opacity-80">02 · Color System</p>
            <h2 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-[#E8E5E0] mb-6 tracking-tight leading-[1.2]">色彩体系</h2>
            <div className="w-[100px] h-0.5 bg-gradient-to-r from-[#A78C6D] to-transparent mt-6 opacity-60" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mt-12">
            {colors.map((c) => (
              <div key={c.hex} className="bg-[rgba(26,22,18,0.6)] border border-[#3D3429] rounded-sm overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(107,79,51,0.25)] hover:border-[#A78C6D]">
                <div className="h-[140px] w-full" style={{ backgroundColor: c.value }} />
                <div className="p-7">
                  <div className="font-sans text-[0.95rem] font-medium text-[#E8E5E0] mb-2.5">{c.name}</div>
                  <div className="font-[Inter,monospace] text-sm text-[#8B8578] tracking-wider">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3D3429] to-transparent my-24 opacity-50" />

        {/* Section 3: Typography */}
        <section className="mb-36 animate-[fadeInUp_1s_ease-out]">
          <div className="mb-16">
            <p className="font-[Playfair_Display,serif] text-[0.95rem] text-[#A78C6D] tracking-[0.2em] mb-5 uppercase opacity-80">03 · Typography</p>
            <h2 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-[#E8E5E0] mb-6 tracking-tight leading-[1.2]">字体系统</h2>
            <div className="w-[100px] h-0.5 bg-gradient-to-r from-[#A78C6D] to-transparent mt-6 opacity-60" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-9 mt-12">
            {fonts.map((f) => (
              <div key={f.label} className="bg-[rgba(26,22,18,0.5)] border border-[#3D3429] p-11 rounded-sm transition-all hover:border-[#A78C6D] hover:bg-[rgba(26,22,18,0.7)]">
                <div className="font-[Inter,sans-serif] text-xs text-[#8B8578] uppercase tracking-[0.12em] mb-6 opacity-70">{f.label}</div>
                <div className={`text-[2.2rem] leading-snug text-[#E8E5E0] mb-4 ${f.cls}`}>{f.sample}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3D3429] to-transparent my-24 opacity-50" />

        {/* Section 4: Brand Story */}
        <section className="mb-36 animate-[fadeInUp_1s_ease-out]">
          <div className="mb-16">
            <p className="font-[Playfair_Display,serif] text-[0.95rem] text-[#A78C6D] tracking-[0.2em] mb-5 uppercase opacity-80">04 · Brand Story</p>
            <h2 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-[#E8E5E0] mb-6 tracking-tight leading-[1.2]">品牌故事</h2>
            <div className="w-[100px] h-0.5 bg-gradient-to-r from-[#A78C6D] to-transparent mt-6 opacity-60" />
          </div>

          <div className="bg-gradient-to-br from-[rgba(107,79,51,0.06)] to-[rgba(26,22,18,0.8)] border-l-[3px] border-l-[#A78C6D] py-16 px-16 my-16 relative max-md:px-9 max-md:py-9">
            <p className="font-[Noto_Serif_SC,serif] text-xl leading-[2.4] text-[#E8E5E0] opacity-95 max-w-[950px] relative z-[1]">
              在工业化板材泛滥的时代，几位对东方木作工艺怀有深沉热爱的设计师走到了一起。他们相信，一张桌子可以讲述一片森林的年轮，一把椅子能传递匠人指尖的温度。{name} 就这样诞生了——不是为了对抗工业效率，而是为了守护那些不应被遗忘的美好。
              <br /><br />
              我们选择全实木框架，坚持无贴皮。每一条榫卯的咬合、每一道手工打磨的弧线，都在对一个问题给出回答："生活，可不可以慢一点、真一点？"
              <br /><br />
              如今，{name} 想把这份东方的温润，带到世界各地的客厅、书房和窗前。让每一位推门而入的人都能感受到——空间有呼吸，木头有故事。
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3D3429] to-transparent my-24 opacity-50" />

        {/* Section 5: Slogans */}
        <section className="mb-36 animate-[fadeInUp_1s_ease-out]">
          <div className="mb-16">
            <p className="font-[Playfair_Display,serif] text-[0.95rem] text-[#A78C6D] tracking-[0.2em] mb-5 uppercase opacity-80">05 · Slogan Candidates</p>
            <h2 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-[#E8E5E0] mb-6 tracking-tight leading-[1.2]">品牌标语候选</h2>
            <div className="w-[100px] h-0.5 bg-gradient-to-r from-[#A78C6D] to-transparent mt-6 opacity-60" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 mt-12 max-lg:grid-cols-1">
            {slogans.map((s) => (
              <div key={s.text} className="bg-[rgba(26,22,18,0.6)] border border-[#3D3429] p-12 rounded-sm transition-all duration-400 relative hover:border-[#A78C6D] hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(107,79,51,0.25)] hover:bg-[rgba(26,22,18,0.8)]">
                <p className="font-[Playfair_Display,serif] text-[1.7rem] font-semibold text-[#E8E5E0] mb-6 italic leading-snug">{s.text}</p>
                <p className="font-[Noto_Serif_SC,serif] text-base text-[#8B8578] leading-[2] opacity-90">{s.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#3D3429] to-transparent my-24 opacity-50" />

        {/* Section 6: Tone & Philosophy */}
        <section className="mb-36 animate-[fadeInUp_1s_ease-out]">
          <div className="mb-16">
            <p className="font-[Playfair_Display,serif] text-[0.95rem] text-[#A78C6D] tracking-[0.2em] mb-5 uppercase opacity-80">06 · Voice & Philosophy</p>
            <h2 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-[#E8E5E0] mb-6 tracking-tight leading-[1.2]">品牌调性与理念</h2>
            <div className="w-[100px] h-0.5 bg-gradient-to-r from-[#A78C6D] to-transparent mt-6 opacity-60" />
          </div>

          {/* Tone badges */}
          <div className="flex flex-wrap gap-3 my-8">
            {toneBadges.map((b) => (
              <span key={b} className="bg-[rgba(167,140,109,0.12)] border border-[rgba(167,140,109,0.3)] text-[#E5D9C3] py-2.5 px-7 rounded-sm font-[Inter,sans-serif] text-[0.92rem] font-normal tracking-wider lowercase">
                {b}
              </span>
            ))}
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-[rgba(107,79,51,0.1)] to-[rgba(167,140,109,0.05)] border border-[#3D3429] py-24 px-16 text-center my-16 relative max-md:py-16 max-md:px-10">
            <p className="font-[Noto_Serif_SC,serif] text-[clamp(1.25rem,2.2vw,1.7rem)] leading-[2.2] text-[#E8E5E0] max-w-[1000px] mx-auto opacity-95 relative z-[1]">
              "我们相信，好的设计不需要喧哗——它只需要安静地站在那里，让你想要走近、触摸、停留。{name} 的每一件作品，都在回答同一个问题：如何让生活既有质感又不失温度？答案就藏在那一棵树的年轮里。"
            </p>
          </div>

          {/* Tone Details */}
          <div className="bg-gradient-to-br from-[rgba(107,79,51,0.05)] to-[rgba(26,22,18,0.8)] border border-[#3D3429] p-12 mt-10 rounded-sm">
            <div className="mb-8">
              <p className="font-sans text-[0.95rem] text-[#8B8578] mb-4">视觉语言</p>
              <p className="font-[Noto_Serif_SC,serif] text-[1.05rem] text-[#E5D9C3] leading-[2]">
                <span className="block font-[Inter,sans-serif] text-[0.9em] text-[#8B8578] mb-2 leading-snug font-normal">Warm wood tones, natural lighting, quiet composition. Textures over filters, grain over gloss.</span>
                <span>暖木调色彩，自然光影，安静的构图。以质感代替滤镜，以木纹代替光泽。</span>
              </p>
            </div>
            <div className="mb-8">
              <p className="font-sans text-[0.95rem] text-[#8B8578] mb-4">沟通语气</p>
              <p className="font-[Noto_Serif_SC,serif] text-[1.05rem] text-[#E5D9C3] leading-[2]">
                <span className="block font-[Inter,sans-serif] text-[0.9em] text-[#8B8578] mb-2 leading-snug font-normal">Confident yet gentle. We speak as a craftsman who knows the value of silence—every word must earn its place.</span>
                <span>自信而温和。我们以一个懂得沉默价值的手艺人的口吻发声——每个词都要值得被说出。</span>
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.95rem] text-[#8B8578] mb-4">品牌审美</p>
              <p className="font-[Noto_Serif_SC,serif] text-[1.05rem] text-[#E5D9C3] leading-[2]">
                <span className="block font-[Inter,sans-serif] text-[0.9em] text-[#8B8578] mb-2 leading-snug font-normal">Eastern minimalism meets Scandinavian functionality. Not ornamental, but essential. Every curve and joint is intentional.</span>
                <span>东方极简遇上北欧功能主义。不是装饰性的，而是本质性的。每一条曲线和每一个接合处都是有意为之。</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Media Gallery */}
        <section className="mb-36 animate-[fadeInUp_1s_ease-out]">
          <div className="mb-16">
            <p className="font-[Playfair_Display,serif] text-[0.95rem] text-[#A78C6D] tracking-[0.2em] mb-5 uppercase opacity-80">07 · Visual Assets</p>
            <h2 className="font-[Playfair_Display,Noto_Serif_SC,serif] text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-[#E8E5E0] mb-6 tracking-tight leading-[1.2]">视觉素材</h2>
            <div className="w-[100px] h-0.5 bg-gradient-to-r from-[#A78C6D] to-transparent mt-6 opacity-60" />
          </div>

          <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
            <div
              className="bg-[rgba(26,22,18,0.6)] border border-[#3D3429] rounded-sm overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-[#A78C6D] hover:shadow-[0_15px_40px_rgba(107,79,51,0.2)]"
              onClick={() => setModal({ type: 'image', src: '/images/brand-story/banner_sofa.png' })}
            >
              <img src="/images/brand-story/banner_sofa.png" alt="Brand visual" className="w-full h-[300px] object-cover" />
              <div className="p-6">
                <p className="font-sans text-sm text-[#8B8578]">品牌主视觉 · Banner</p>
              </div>
            </div>
            <div
              className="bg-[rgba(26,22,18,0.6)] border border-[#3D3429] rounded-sm overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-[#A78C6D] hover:shadow-[0_15px_40px_rgba(107,79,51,0.2)]"
              onClick={() => setModal({ type: 'video', src: '/videos/brand-story/sofa_demo.mp4' })}
            >
              <video src="/videos/brand-story/sofa_demo.mp4" className="w-full h-[300px] object-cover" muted playsInline />
              <div className="p-6">
                <p className="font-sans text-sm text-[#8B8578]">产品展示视频 · Demo</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FloatingMenu />
      <MediaModal open={!!modal} onClose={() => setModal(null)} media={modal} />
    </div>
  );
}
