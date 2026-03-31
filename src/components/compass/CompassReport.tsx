'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { CompassReport as CompassReportType } from '@/content/compass-reports';

export default function CompassReport({ report }: { report: CompassReportType }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [sourcesCollapsed, setSourcesCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState(report.sections[0]?.id || '');

  return (
    <div data-theme={theme} className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>
      <style>{`
        [data-theme="dark"] { --bg:#0A0A0F; --surface:#14151b; --card:#14151b; --text-primary:#F8FAFC; --text-secondary:#CBD5E1; --text-muted:#9CA3AF; --border:rgba(116,114,254,0.3); --accent-primary:#7472FE; --accent-secondary:#A2B1FB; --gradient-start:#7472FE; --gradient-end:#A2B1FB; --chip:rgba(15,15,25,0.8); --glow:rgba(116,114,254,0.4); --shadow:0 20px 40px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.1),0 0 0 1px rgba(116,114,254,0.1); --line:rgba(116,114,254,0.3); --radius:16px; }
        [data-theme="light"] { --bg:#fafafa; --surface:#ffffff; --card:#ffffff; --text-primary:#111111; --text-secondary:#6b7280; --text-muted:#9ca3af; --border:#e5e7eb; --accent-primary:#111111; --accent-secondary:#6b7280; --gradient-start:#111111; --gradient-end:#6b7280; --chip:#f3f4f6; --glow:rgba(0,0,0,0.1); --shadow:0 1px 1px rgba(17,17,17,.04),0 6px 24px rgba(17,17,17,.06); --line:#e5e7eb; --radius:16px; }
      `}</style>

      {/* Background decorations */}
      {theme === 'dark' && (
        <div className="fixed -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_50%,rgba(116,114,254,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(232,121,249,0.06)_0%,transparent_50%)]" />
      )}

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center py-4 px-12 border-b transition-colors" style={{ borderColor: 'var(--border)', background: 'var(--surface)', backdropFilter: 'blur(10px)' }}>
        <Link href="/brand/compass" className="text-2xl font-bold tracking-tight no-underline" style={{ color: 'var(--text-primary)' }}>出海罗盘</Link>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl border" style={{ background: 'var(--chip)', borderColor: 'var(--border)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-end))` }}>Z</div>
            <span className="text-sm font-semibold max-md:hidden" style={{ color: 'var(--text-primary)' }}>Zhuang</span>
          </div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-10 h-10 rounded-[10px] border flex items-center justify-center cursor-pointer transition-all" style={{ background: 'transparent', borderColor: 'var(--border)' }}>
            {theme === 'dark' ? (
              <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            ) : (
              <svg className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* 3-column layout */}
      <div className="max-w-[1680px] mx-auto pt-[94px] px-6 pb-6 grid grid-cols-[240px_1fr_320px] gap-6 relative max-lg:grid-cols-1 max-lg:pt-20">

        {/* Left Sidebar - Navigation */}
        <aside className="sticky top-[94px] h-fit max-h-[calc(100vh-118px)] self-start max-lg:static max-lg:max-h-none">
          <div className="rounded-2xl p-4 border overflow-y-auto" style={{ background: 'var(--surface)', borderColor: 'var(--line)', boxShadow: 'var(--shadow)' }}>
            <h3 className="text-sm font-bold mb-3 tracking-wider" style={{ color: 'var(--text-primary)' }}>报告导航</h3>
            {report.sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setActiveSection(sec.id)}
                className="flex gap-3 py-2.5 items-center no-underline transition-all rounded-lg px-2 hover:bg-white/5"
                style={{ color: 'inherit' }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 border transition-all"
                  style={{
                    background: activeSection === sec.id ? 'var(--accent-primary)' : 'var(--chip)',
                    borderColor: activeSection === sec.id ? 'var(--accent-primary)' : 'var(--line)',
                    boxShadow: activeSection === sec.id && theme === 'dark' ? '0 0 12px rgba(116,114,254,0.6)' : 'none',
                  }}
                />
                <div>
                  <h4 className="text-sm font-semibold mb-0.5">{sec.title}</h4>
                  {sec.subtitle && <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{sec.subtitle}</p>}
                </div>
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col gap-4 min-w-0">
          {/* Header */}
          <div className="rounded-2xl p-4 border flex justify-between items-center" style={{ background: 'var(--surface)', borderColor: 'var(--line)', boxShadow: 'var(--shadow)' }}>
            <div>
              <h1 className="text-[22px] font-extrabold mb-1.5 tracking-tight">{report.title}</h1>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                <Link href="/brand/compass" className="no-underline" style={{ color: 'var(--text-secondary)' }}>我的报告</Link> / {report.product}
              </p>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full font-semibold bg-[rgba(16,185,129,0.15)] text-[#10b981]">已完成</span>
          </div>

          {/* Sections */}
          {report.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="rounded-2xl p-6 border" style={{ background: theme === 'dark' ? 'linear-gradient(145deg, rgba(30,30,60,0.6), rgba(20,20,40,0.7))' : 'var(--card)', borderColor: 'var(--line)', boxShadow: 'var(--shadow)' }}>
              <div className="flex items-center gap-2 mb-1">
                {sec.subtitle && <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--accent-primary)' }}>{sec.subtitle}</span>}
              </div>
              <h2 className="text-xl font-bold mb-4">{sec.title}</h2>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{sec.content}</p>

              {/* Metrics */}
              {sec.metrics && (
                <div className="grid grid-cols-4 gap-4 mt-4 max-md:grid-cols-2">
                  {sec.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl p-4 border text-center" style={{ background: 'var(--chip)', borderColor: 'var(--line)' }}>
                      <div className="text-2xl font-extrabold mb-1" style={{ color: 'var(--accent-primary)' }}>{m.value}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{m.label}</div>
                      {m.change && <div className="text-xs font-semibold text-[#10b981] mt-1">{m.change}</div>}
                    </div>
                  ))}
                </div>
              )}

              {/* Personas */}
              {sec.personas && (
                <div className="grid grid-cols-3 gap-4 mt-4 max-md:grid-cols-1">
                  {sec.personas.map((p) => (
                    <div key={p.name} className="rounded-xl p-5 border" style={{ background: 'var(--chip)', borderColor: 'var(--line)' }}>
                      <h4 className="text-sm font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>{p.name}</h4>
                      <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: 'var(--line)', color: 'var(--text-muted)' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </main>

        {/* Right Sidebar - Sources */}
        <aside className={`sticky top-[94px] w-[320px] h-fit self-start rounded-xl border overflow-hidden transition-all max-lg:static max-lg:w-full ${sourcesCollapsed ? 'max-h-[60px] h-[60px]' : 'max-h-[calc(100vh-118px)]'}`} style={{ background: theme === 'dark' ? 'linear-gradient(145deg, rgba(30,30,60,0.95), rgba(20,20,40,0.98))' : 'var(--surface)', borderColor: 'var(--line)', boxShadow: 'var(--shadow)', backdropFilter: theme === 'dark' ? 'blur(20px)' : undefined }}>
          <div className="px-5 py-4 border-b flex items-center gap-2 sticky top-0 z-[1]" style={{ borderColor: 'var(--line)', background: theme === 'dark' ? 'linear-gradient(145deg, rgba(30,30,60,0.95), rgba(20,20,40,0.98))' : 'var(--surface)' }}>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <span className="text-sm font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                引用来源
                <span className="text-[11px] px-2 py-0.5 rounded font-semibold" style={{ color: 'var(--text-secondary)', background: 'var(--chip)' }}>{report.sources.length}</span>
              </span>
            </div>
            <button onClick={() => setSourcesCollapsed(!sourcesCollapsed)} className="w-6 h-6 flex items-center justify-center cursor-pointer rounded transition-all border-none bg-transparent p-0 shrink-0 ml-auto" style={{ color: 'var(--text-secondary)' }}>
              <svg className="w-4 h-4 transition-transform" style={{ transform: sourcesCollapsed ? 'rotate(-90deg)' : 'rotate(90deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
          <div className={`p-3 overflow-y-auto transition-all ${sourcesCollapsed ? 'opacity-0 max-h-0 p-0 overflow-hidden' : 'opacity-100 max-h-[calc(100vh-178px)]'}`}>
            {report.sources.map((src, idx) => (
              <div key={idx} className="flex gap-2 p-2 rounded-md transition-all hover:bg-white/5 mb-1 cursor-pointer border border-transparent hover:border-white/10">
                <svg className="w-4 h-4 shrink-0 mt-0.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono mb-0.5" style={{ color: 'var(--text-secondary)' }}>{src.domain}</div>
                  <div className="text-[11px] leading-snug line-clamp-2" style={{ color: 'var(--text-primary)' }}>{src.title}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Fixed Toolbar */}
      <div className="fixed bottom-10 right-10 flex gap-3 z-[100]">
        {['share', 'download', 'top'].map((action) => (
          <button
            key={action}
            onClick={() => action === 'top' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-[52px] h-[52px] rounded-full border flex items-center justify-center cursor-pointer transition-all hover:-translate-y-0.5"
            style={{ background: theme === 'dark' ? 'linear-gradient(145deg, rgba(30,30,60,0.9), rgba(20,20,40,0.95))' : '#ffffff', borderColor: theme === 'dark' ? 'rgba(116,114,254,0.4)' : '#e5e7eb', boxShadow: theme === 'dark' ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)' }}
          >
            <svg className="w-[22px] h-[22px]" style={{ color: theme === 'dark' ? '#CBD5E1' : '#374151' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {action === 'share' && <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>}
              {action === 'download' && <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></>}
              {action === 'top' && <><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></>}
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
