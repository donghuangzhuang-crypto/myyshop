'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { creatorProducts, brandProducts, resourceLinks } from '@/content/navigation';

function LogoSvg() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#3AA39F" />
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Poppins">M</text>
    </svg>
  );
}

function DropdownArrow() {
  return (
    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductIcon({ product }: { product: typeof creatorProducts[0] }) {
  const icons: Record<string, React.ReactNode> = {
    myyfind: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="10" fill="#E8F7F6" />
        <circle cx="16" cy="16" r="6.5" stroke="#20837F" strokeWidth="1.5" strokeDasharray="2 3" />
        <path d="M16 10.5v5.2l3.6 3.6" stroke="#20837F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    opportunity: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="10" fill="#EEF3FF" />
        <path d="M10 14h12M10 18h7" stroke="#4059D8" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M22 11v10M20 21l2 2 2-2" stroke="#4059D8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="10" fill="#FFF2E9" />
        <path d="M11 21l3-5 2 3 5-8" stroke="#FF8A38" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 23h14" stroke="#FF8A38" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    guidance: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="10" fill="#E8F7F6" />
        <path d="M16 9v14M9 16h14" stroke="#20837F" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16" cy="16" r="4" stroke="#20837F" strokeWidth="1.5" />
      </svg>
    ),
  };
  return <>{icons[product.id]}</>;
}

function BrandProductIcon({ product }: { product: typeof brandProducts[0] }) {
  const icons: Record<string, React.ReactNode> = {
    'brand-story': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="10" fill="#F3EEFF" />
        <path d="M11 10h10a1 1 0 011 1v10a1 1 0 01-1 1H11a1 1 0 01-1-1V11a1 1 0 011-1z" stroke="#7C5CFC" strokeWidth="1.5" />
        <path d="M13 14h6M13 17h4" stroke="#7C5CFC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    'global-compass': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="10" fill="#E8F0FE" />
        <circle cx="16" cy="16" r="7" stroke="#3B7DD8" strokeWidth="1.5" />
        <path d="M16 9v2M16 21v2M9 16h2M21 16h2" stroke="#3B7DD8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14l5 2-2 3-5-2z" fill="#3B7DD8" opacity="0.6" />
      </svg>
    ),
    'creative-vane': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="10" fill="#FFF4E6" />
        <path d="M12 22l2-5 4 2-2 5z" stroke="#E8890C" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 17l3-8 5 2-3 8" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18.5" cy="10.5" r="1.5" fill="#E8890C" />
      </svg>
    ),
  };
  return <>{icons[product.id]}</>;
}

function ResourceIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="#3AA39F" strokeWidth="1.5"/><path d="M6 7h8M6 10h5" stroke="#3AA39F" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    <svg key={1} width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#3AA39F" strokeWidth="1.5"/><path d="M10 6v4l3 2" stroke="#3AA39F" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    <svg key={2} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 14l4-4 3 3 7-7" stroke="#3AA39F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key={3} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4h12v12H4z" stroke="#3AA39F" strokeWidth="1.5" strokeLinejoin="round"/><path d="M4 8h12M8 8v8" stroke="#3AA39F" strokeWidth="1.5"/></svg>,
    <svg key={4} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h5v6H4zM11 4h5v12h-5z" stroke="#3AA39F" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    <svg key={5} width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="#3AA39F" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="#3AA39F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg key={6} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" stroke="#3AA39F" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    <svg key={7} width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#3AA39F" strokeWidth="1.5"/><path d="M8 8a2 2 0 114 0c0 1-1.5 1.5-2 2.5M10 14.5v.01" stroke="#3AA39F" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  ];
  return icons[index] || null;
}

export default function Header() {
  const [activeProduct, setActiveProduct] = useState(creatorProducts[0]);
  const [activeBrandProduct, setActiveBrandProduct] = useState(brandProducts[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-[10px] h-16 border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <LogoSvg />
            <span className="text-xl font-bold text-dark">myyshop</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {/* Creator Products - Mega Menu */}
            <div className="relative group">
              <button className="text-sm font-medium text-dark hover:text-primary hover:bg-primary-bg-light px-3.5 py-2 rounded-lg inline-flex items-center gap-1 transition-colors">
                Creator Products
                <DropdownArrow />
              </button>
              <div className="absolute top-full left-0 translate-y-4 w-[min(960px,calc(100vw-48px))] bg-white rounded-[20px] shadow-[0_24px_80px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.08)] p-7 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1.5 transition-all duration-250 z-[150]">
                <div className="grid grid-cols-[320px_1fr] gap-8">
                  {/* Left panel */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">Creator Suite</p>
                      <h4 className="text-xl font-semibold text-[#1B1D1F]">从灵感、选品到合作交付的一站式链路</h4>
                      <p className="text-sm text-[#5A6066] leading-relaxed">悬浮查看各模块亮点，快速判断它如何帮助你推进生意闭环。</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {creatorProducts.map((product) => {
                        const itemClass = `w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                          activeProduct.id === product.id
                            ? 'border-[#C4E8E5] bg-primary-bg-light shadow-[0_12px_32px_rgba(34,155,147,0.15)]'
                            : 'border-black/[0.06] bg-white hover:border-[#CFE8E6] hover:bg-[#F6FBFB]'
                        }`;
                        const inner = (
                          <>
                            <ProductIcon product={product} />
                            <span className="flex-1 flex flex-col gap-0.5">
                              <span className="text-sm font-semibold text-dark">{product.title}</span>
                              <span className="text-xs text-gray-500">{product.subtitle}</span>
                            </span>
                            <svg className={`w-3.5 h-3.5 text-[#A1A7AE] transition-all duration-200 ${activeProduct.id === product.id ? 'opacity-100 translate-x-0.5' : 'opacity-0'}`} viewBox="0 0 14 14" fill="none">
                              <path d="M3.5 4.5L7 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        );

                        if ('href' in product && product.href) {
                          return (
                            <Link
                              key={product.id}
                              href={product.href as string}
                              onMouseEnter={() => setActiveProduct(product)}
                              onFocus={() => setActiveProduct(product)}
                              className={itemClass}
                            >
                              {inner}
                            </Link>
                          );
                        }

                        return (
                          <button
                            key={product.id}
                            onMouseEnter={() => setActiveProduct(product)}
                            onFocus={() => setActiveProduct(product)}
                            className={itemClass}
                          >
                            {inner}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right panel - detail */}
                  <div className="flex items-stretch">
                    <div className="flex-1 flex gap-7 bg-gradient-to-br from-primary-darker to-[#1EB4AA] rounded-[20px] p-7 text-white relative overflow-hidden">
                      <div className="flex-1 flex flex-col gap-2.5">
                        <p className="text-xs tracking-[0.2em] uppercase text-white/75">{activeProduct.kicker}</p>
                        <h3 className="text-2xl font-semibold leading-tight">{activeProduct.title}</h3>
                        <p className="text-[15px] text-white/90">{activeProduct.intro}</p>
                        <p className="text-sm text-white/85">{activeProduct.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {activeProduct.tags.map((tag) => (
                            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.18] border border-white/[0.22]">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 w-60 rounded-2xl bg-white/[0.18] p-2 flex items-center justify-center">
                        <Image
                          src={activeProduct.image}
                          alt={activeProduct.imageAlt}
                          width={240}
                          height={320}
                          className="w-full rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Products - Mega Menu */}
            <div className="relative group">
              <button className="text-sm font-medium text-dark hover:text-primary hover:bg-primary-bg-light px-3.5 py-2 rounded-lg inline-flex items-center gap-1 transition-colors">
                Brand Products
                <DropdownArrow />
              </button>
              <div className="absolute top-full left-0 translate-y-4 w-[min(960px,calc(100vw-48px))] bg-white rounded-[20px] shadow-[0_24px_80px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.08)] p-7 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1.5 transition-all duration-250 z-[150]">
                <div className="grid grid-cols-[320px_1fr] gap-8">
                  {/* Left panel */}
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">Brand Suite</p>
                      <h4 className="text-xl font-semibold text-[#1B1D1F]">品牌出海的全链路智能工具箱</h4>
                      <p className="text-sm text-[#5A6066] leading-relaxed">悬浮查看各模块亮点，让品牌营销更高效、更精准。</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {brandProducts.map((product) => {
                        const itemClass = `w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                          activeBrandProduct.id === product.id
                            ? 'border-[#D4CCF9] bg-[#F9F7FF] shadow-[0_12px_32px_rgba(124,92,252,0.12)]'
                            : 'border-black/[0.06] bg-white hover:border-[#D4CCF9] hover:bg-[#FCFAFF]'
                        }`;
                        const inner = (
                          <>
                            <BrandProductIcon product={product} />
                            <span className="flex-1 flex flex-col gap-0.5">
                              <span className="text-sm font-semibold text-dark">{product.title}</span>
                              <span className="text-xs text-gray-500">{product.subtitle}</span>
                            </span>
                            <svg className={`w-3.5 h-3.5 text-[#A1A7AE] transition-all duration-200 ${activeBrandProduct.id === product.id ? 'opacity-100 translate-x-0.5' : 'opacity-0'}`} viewBox="0 0 14 14" fill="none">
                              <path d="M3.5 4.5L7 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </>
                        );

                        if ('href' in product && product.href) {
                          return (
                            <Link
                              key={product.id}
                              href={product.href as string}
                              onMouseEnter={() => setActiveBrandProduct(product)}
                              onFocus={() => setActiveBrandProduct(product)}
                              className={itemClass}
                            >
                              {inner}
                            </Link>
                          );
                        }

                        return (
                          <button
                            key={product.id}
                            onMouseEnter={() => setActiveBrandProduct(product)}
                            onFocus={() => setActiveBrandProduct(product)}
                            className={itemClass}
                          >
                            {inner}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right panel - detail */}
                  <div className="flex items-stretch">
                    <div className="flex-1 flex gap-7 bg-gradient-to-br from-[#5A3EC8] to-[#7C5CFC] rounded-[20px] p-7 text-white relative overflow-hidden">
                      <div className="flex-1 flex flex-col gap-2.5">
                        <p className="text-xs tracking-[0.2em] uppercase text-white/75">{activeBrandProduct.kicker}</p>
                        <h3 className="text-2xl font-semibold leading-tight">{activeBrandProduct.title}</h3>
                        <p className="text-[15px] text-white/90">{activeBrandProduct.intro}</p>
                        <p className="text-sm text-white/85">{activeBrandProduct.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {activeBrandProduct.tags.map((tag) => (
                            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.18] border border-white/[0.22]">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 w-60 rounded-2xl bg-white/[0.18] p-2 flex items-center justify-center">
                        <Image
                          src={activeBrandProduct.image}
                          alt={activeBrandProduct.imageAlt}
                          width={240}
                          height={320}
                          className="w-full rounded-xl shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-dark hover:text-primary hover:bg-primary-bg-light px-3.5 py-2 rounded-lg inline-flex items-center gap-1 transition-colors">
                Resources
                <DropdownArrow />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-6 min-w-[540px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-[100]">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-[11px] font-semibold uppercase tracking-[1px] text-gray-500 mb-3 pl-1">Learn</h5>
                    {resourceLinks.learn.map((item, i) => (
                      <Link key={item.href} href={item.href} className="flex items-start gap-3 px-3 py-2.5 rounded-[10px] hover:bg-primary-bg-light transition-colors">
                        <div className="shrink-0 mt-0.5"><ResourceIcon index={i} /></div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-semibold text-dark">{item.title}</span>
                          <span className="text-xs text-gray-500 leading-snug">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h5 className="text-[11px] font-semibold uppercase tracking-[1px] text-gray-500 mb-3 pl-1">Product</h5>
                    {resourceLinks.product.map((item, i) => (
                      <Link key={item.href} href={item.href} className="flex items-start gap-3 px-3 py-2.5 rounded-[10px] hover:bg-primary-bg-light transition-colors">
                        <div className="shrink-0 mt-0.5"><ResourceIcon index={i + 4} /></div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-semibold text-dark">{item.title}</span>
                          <span className="text-xs text-gray-500 leading-snug">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-3">
          <Link href="#" className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-medium border border-dark text-dark hover:bg-gray-100 transition-colors">
            Log in as Merchants
          </Link>
          <Link href="#" className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-medium bg-dark text-white border border-dark hover:bg-[#1a1c1e] transition-colors">
            Log in as Creators
          </Link>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-dark" />
            <span className="block w-5 h-0.5 bg-dark" />
            <span className="block w-5 h-0.5 bg-dark" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-2">
            <Link href="/products" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>Creator Products</Link>
            <Link href="/products/positioning" className="py-2 text-sm font-medium text-dark pl-4" onClick={() => setMobileMenuOpen(false)}>定位引导 Launchpad</Link>
            <span className="py-2 text-sm font-medium text-dark">Brand Products</span>
            <Link href="/brand/story" className="py-2 text-sm font-medium text-dark pl-4" onClick={() => setMobileMenuOpen(false)}>Brand Story 品牌故事</Link>
            <Link href="/brand/compass" className="py-2 text-sm font-medium text-dark pl-4" onClick={() => setMobileMenuOpen(false)}>出海罗盘 Global Compass</Link>
            <Link href="/brand/creative-vane" className="py-2 text-sm font-medium text-dark pl-4" onClick={() => setMobileMenuOpen(false)}>创意风标 Creative Vane</Link>
            <Link href="/about" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>About MyyShop</Link>
            <Link href="/resources/insights" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
            <Link href="/resources/reports" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>Reports</Link>
            <Link href="/resources/blog" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/comparison" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>Comparison</Link>
            <Link href="/resources/faq" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/resources/user-stories" className="py-2 text-sm font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>User Stories</Link>
          </div>
        </div>
      )}
    </header>
  );
}
