'use client';

export default function FloatingWidgets() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-[999]">
      <a
        href="mailto:support@myyshop.com"
        className="flex flex-col items-center gap-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark text-[11px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-shadow"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13 2 4" />
        </svg>
        <span>Email</span>
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex flex-col items-center gap-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark text-[11px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-shadow cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        <span>Top</span>
      </button>
    </div>
  );
}
