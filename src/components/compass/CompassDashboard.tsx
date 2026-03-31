'use client';

import { useState } from 'react';
import Link from 'next/link';
import { demoReports, filterOptions } from '@/content/compass-reports';

export default function CompassDashboard() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeFilter, setActiveFilter] = useState('全部');
  const [productInput, setProductInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState('');
  const [modalRegion, setModalRegion] = useState('北美市场');
  const [modalCategory, setModalCategory] = useState('家居家具');

  const filtered = activeFilter === '全部' ? demoReports : demoReports.filter((r) => r.category === activeFilter);

  const handleGenerate = () => {
    if (!productInput.trim()) return;
    setModalProduct(productInput);
    setShowModal(true);
  };

  return (
    <div data-theme={theme} className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>
      {/* CSS Variables */}
      <style>{`
        [data-theme="dark"] { --bg:#0A0A0F; --surface:#14151b; --card:#14151b; --text-primary:#F8FAFC; --text-secondary:#CBD5E1; --text-muted:#9CA3AF; --border:rgba(116,114,254,0.3); --accent-primary:#7472FE; --accent-secondary:#A2B1FB; --gradient-start:#7472FE; --gradient-end:#A2B1FB; --chip:rgba(15,15,25,0.8); --glow:rgba(116,114,254,0.4); --shadow:0 4px 6px -1px rgba(0,0,0,0.3),0 2px 4px -1px rgba(0,0,0,0.2); --shadow-lg:0 20px 40px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.1),0 0 0 1px rgba(116,114,254,0.1); --radius:16px; --radius-lg:24px; }
        [data-theme="light"] { --bg:#fafafa; --surface:#ffffff; --card:#ffffff; --text-primary:#111111; --text-secondary:#6b7280; --text-muted:#9ca3af; --border:#e5e7eb; --accent-primary:#111111; --accent-secondary:#6b7280; --gradient-start:#111111; --gradient-end:#6b7280; --chip:#f3f4f6; --glow:rgba(0,0,0,0.1); --shadow:0 1px 2px rgba(0,0,0,0.05); --shadow-lg:0 1px 1px rgba(17,17,17,.04),0 6px 24px rgba(17,17,17,.06); --radius:16px; --radius-lg:24px; }
      `}</style>

      {/* Background decorations (dark mode only) */}
      {theme === 'dark' && (
        <>
          <div className="fixed -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_50%,rgba(116,114,254,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(232,121,249,0.06)_0%,transparent_50%)]" />
          <div className="fixed inset-0 pointer-events-none z-0 opacity-30 bg-[linear-gradient(rgba(116,114,254,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(116,114,254,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </>
      )}

      {/* Navbar */}
      <nav className="relative z-[100] flex justify-between items-center py-5 px-12 border-b transition-colors" style={{ borderColor: 'var(--border)', background: 'var(--surface)', backdropFilter: 'blur(10px)' }}>
        <span className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>出海罗盘</span>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl border" style={{ background: 'var(--chip)', borderColor: 'var(--border)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))` }}>Z</div>
            <span className="text-sm font-semibold max-md:hidden" style={{ color: 'var(--text-primary)' }}>Zhuang</span>
          </div>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-[10px] border flex items-center justify-center cursor-pointer transition-all hover:opacity-80"
            style={{ background: 'transparent', borderColor: 'var(--border)' }}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            ) : (
              <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-[1] max-w-[1200px] mx-auto py-12 px-6">
        {/* Welcome */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-8 gap-6 max-md:flex-col">
            <div>
              <h1 className="text-[42px] font-extrabold mb-3 tracking-tight max-md:text-[28px]" style={{ color: 'var(--text-primary)' }}>我的报告</h1>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>AI 驱动的全链路网红营销分析，助力品牌出海决策</p>
            </div>
          </div>

          {/* Quick Action Card */}
          <div className="rounded-3xl p-8 border transition-all" style={{ background: theme === 'dark' ? 'linear-gradient(145deg, rgba(30,30,60,0.8), rgba(20,20,40,0.9))' : 'var(--card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-lg)', backdropFilter: theme === 'dark' ? 'blur(20px)' : undefined }}>
            <div className="flex gap-5 items-end max-md:flex-col">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                  商品名称 / ASIN / URL
                  <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold rounded text-white bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] shadow-[0_2px_4px_rgba(255,107,107,0.3)]">HOT</span>
                </label>
                <input
                  type="text"
                  value={productInput}
                  onChange={(e) => setProductInput(e.target.value)}
                  placeholder="输入商品名称，如：中式实木沙发"
                  className="w-full rounded-xl py-3.5 px-4 text-[15px] border transition-all focus:outline-none"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--glow)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
              <button
                onClick={handleGenerate}
                className="px-8 py-3.5 rounded-xl text-[15px] font-bold cursor-pointer transition-all text-white whitespace-nowrap shrink-0 border-none hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`, boxShadow: '0 4px 12px var(--glow)' }}
              >
                生成报告
              </button>
            </div>

            {/* Example buttons */}
            <div className="flex items-center gap-3 mt-5 pt-5 border-t max-md:flex-col max-md:items-start" style={{ borderColor: 'var(--border)' }}>
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>快速体验：</span>
              <div className="flex gap-2 flex-wrap flex-1">
                {['中式实木沙发', '智能保温杯', '瑜伽裤', '切尔西靴'].map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setProductInput(ex)}
                    className="px-4 py-2 rounded-lg border text-sm font-medium cursor-pointer transition-all hover:-translate-y-0.5"
                    style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : '#f3f4f6', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6 max-md:flex-col max-md:items-start max-md:gap-4">
            <h2 className="text-[28px] font-bold" style={{ color: 'var(--text-primary)' }}>历史报告</h2>
            <div className="flex gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="text-[13px] px-4 py-2 rounded-full border font-medium cursor-pointer transition-all"
                  style={{
                    background: activeFilter === f ? `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))` : 'var(--chip)',
                    color: activeFilter === f ? 'white' : 'var(--text-secondary)',
                    borderColor: activeFilter === f ? 'transparent' : 'var(--border)',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6 max-md:grid-cols-1">
            {filtered.map((report) => (
              <div
                key={report.slug}
                className="rounded-2xl p-6 border cursor-pointer transition-all hover:-translate-y-1"
                style={{ background: theme === 'dark' ? 'linear-gradient(145deg, rgba(30,30,60,0.6), rgba(20,20,40,0.7))' : 'var(--card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow)' }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{report.product}</div>
                    <div className="text-[13px]" style={{ color: 'var(--text-muted)' }}>{report.date}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-[rgba(16,185,129,0.15)] text-[#10b981]">已完成</span>
                </div>

                <div className="flex flex-col gap-3 mb-5 pb-5 border-b" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--text-secondary)' }}>品类</span>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{report.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: 'var(--text-secondary)' }}>目标市场</span>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{report.region}</span>
                  </div>
                </div>

                <p className="text-[13px] mb-5 truncate" style={{ color: 'var(--text-secondary)' }}>{report.title}</p>

                <div className="flex gap-3">
                  <Link
                    href={`/brand/compass/report/${report.slug}`}
                    className="flex-1 py-2.5 px-4 rounded-[10px] text-sm font-semibold text-center text-white no-underline transition-all hover:scale-[1.02]"
                    style={{ background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))` }}
                  >
                    查看报告
                  </Link>
                  <button className="w-10 h-10 rounded-[10px] border flex items-center justify-center cursor-pointer transition-all hover:opacity-80" style={{ background: 'transparent', borderColor: 'var(--border)' }}>
                    <svg className="w-[18px] h-[18px]" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Report Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center" onClick={() => setShowModal(false)}>
          <div className="rounded-3xl p-8 max-w-[600px] w-[90%] max-h-[90vh] overflow-y-auto" style={{ background: theme === 'dark' ? 'linear-gradient(145deg, rgba(30,30,60,0.95), rgba(20,20,40,0.95))' : 'white', border: `1px solid var(--border)`, boxShadow: 'var(--shadow-lg)' }} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>确认商品信息</h2>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 rounded-lg border flex items-center justify-center cursor-pointer transition-all hover:opacity-80" style={{ background: 'transparent', borderColor: 'var(--border)' }}>
                <svg className="w-[18px] h-[18px]" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>

            <div className="mb-5">
              <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-secondary)' }}>商品名称 <span className="text-[#ef4444]">*</span></label>
              <input type="text" value={modalProduct} onChange={(e) => setModalProduct(e.target.value)} className="w-full rounded-[10px] py-3 px-4 text-[15px] border transition-all focus:outline-none" style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }} />
            </div>

            <div className="mb-5">
              <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-secondary)' }}>目标市场</label>
              <select value={modalRegion} onChange={(e) => setModalRegion(e.target.value)} className="w-full rounded-xl py-3 px-4 text-[15px] font-medium border cursor-pointer transition-all focus:outline-none" style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                <option>北美市场</option>
                <option>欧洲市场</option>
                <option>东南亚市场</option>
                <option>日本市场</option>
                <option>中东市场</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ color: 'var(--text-secondary)' }}>品类</label>
              <select value={modalCategory} onChange={(e) => setModalCategory(e.target.value)} className="w-full rounded-xl py-3 px-4 text-[15px] font-medium border cursor-pointer transition-all focus:outline-none" style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}>
                <option>家居家具</option>
                <option>日用百货</option>
                <option>运动服饰</option>
                <option>鞋履</option>
                <option>美妆个护</option>
                <option>3C 数码</option>
              </select>
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <button onClick={() => setShowModal(false)} className="flex-1 py-3.5 px-6 rounded-xl text-[15px] font-semibold cursor-pointer transition-all border" style={{ background: 'transparent', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>
                取消
              </button>
              <button onClick={() => { setShowModal(false); alert('报告生成中...（Demo）'); }} className="flex-1 py-3.5 px-6 rounded-xl text-[15px] font-bold cursor-pointer transition-all text-white border-none hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))`, boxShadow: '0 4px 12px var(--glow)' }}>
                开始生成
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
