'use client';

import { useState } from 'react';
import { dimensions, defaultSuggestion } from '@/content/creative-vane';

const barColor = { low: 'bg-[#ef4444]', mid: 'bg-[#f59e0b]', high: 'bg-[#10b981]' };

export default function VaneAnalytics({ onBack }: { onBack: () => void }) {
  const [suggestion, setSuggestion] = useState(defaultSuggestion);
  const [remixState, setRemixState] = useState<'idle' | 'loading' | 'done'>('idle');

  const handleRemix = () => {
    if (!suggestion.trim()) {
      alert('请输入优化建议');
      return;
    }
    setRemixState('loading');
    setTimeout(() => {
      setRemixState('done');
      setTimeout(() => {
        alert('新视频已生成并添加到列表顶端！');
        onBack();
        setRemixState('idle');
      }, 1000);
    }, 2000);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="bg-none border-none text-[#94a3b8] cursor-pointer text-sm hover:text-white">
          ← 返回视频列表
        </button>
        <h3 className="text-xl font-semibold">
          提案 B：卡点变装特效{' '}
          <span className="bg-[rgba(244,63,94,0.15)] text-[#f43f5e] text-xs px-3 py-1 rounded-full font-semibold align-middle">
            市场热点
          </span>
        </h3>
      </div>

      <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/5 grid grid-cols-[65%_35%] gap-8 items-stretch max-lg:grid-cols-1">
        {/* Left: Video + Suggestions */}
        <div>
          <video
            controls
            className="w-full h-[400px] object-cover bg-black block rounded-lg mb-6 max-md:h-[250px]"
          >
            <source src="/videos/creative-vane/wooden_sofa.mp4" type="video/mp4" />
          </video>

          <div className="bg-[#0f172a] border border-[#334155] rounded-xl p-6 min-h-[300px]">
            <h4 className="text-[#94a3b8] mb-4 font-semibold">优化建议</h4>
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="w-full min-h-[250px] bg-transparent border-none text-[#f8fafc] text-[0.95rem] leading-relaxed font-mono resize-y focus:outline-none placeholder:text-[#475569]"
              placeholder="请输入优化建议..."
            />
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRemix}
              disabled={remixState !== 'idle'}
              className={`w-full py-4 px-8 rounded-lg font-semibold text-base cursor-pointer transition-all inline-flex items-center justify-center gap-2 ${
                remixState === 'done'
                  ? 'bg-[#10b981] text-white'
                  : 'bg-[#8b5cf6] text-white shadow-[0_4px_6px_-1px_rgba(139,92,246,0.2)] hover:bg-[#7c3aed] hover:-translate-y-0.5'
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {remixState === 'idle' && '一键优化'}
              {remixState === 'loading' && 'AI正在重新剪辑优化...'}
              {remixState === 'done' && '优化完成！已生成新版本'}
            </button>
          </div>
        </div>

        {/* Right: Score Dashboard */}
        <div>
          <div className="bg-gradient-to-b from-[rgba(30,41,59,0.5)] to-[rgba(15,23,42,0.5)] text-[#f8fafc] border border-[#334155] rounded-2xl p-8 h-full flex flex-col backdrop-blur-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            {/* Header + Gauge */}
            <div className="flex justify-between items-start mb-8 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-sm text-[#94a3b8] font-semibold uppercase tracking-wider mb-2">爆款概率预测</h3>
                <div className="text-4xl font-extrabold text-[#f87171] leading-none tracking-tight">偏低</div>
              </div>
              <div className="relative w-[140px] h-[70px] ml-auto">
                <svg viewBox="0 0 100 50" width="100%" height="100%">
                  <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
                  <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#6366f1" strokeWidth="10" strokeLinecap="round" strokeDasharray="126" strokeDashoffset="70" />
                </svg>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                  <div className="text-3xl font-extrabold text-[#6366f1] leading-none">45</div>
                  <div className="text-xs text-[#94a3b8] font-semibold">Score</div>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="flex-1 flex flex-col justify-around gap-4">
              {dimensions.map((d) => (
                <div key={d.name}>
                  <div className="flex justify-between mb-1 text-sm font-semibold text-[#f8fafc]">
                    <span>{d.name}</span>
                    <span>{d.score}/{d.max}</span>
                  </div>
                  <div className="h-1.5 bg-[#334155] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-[width] duration-1000 ease-out ${barColor[d.level]}`}
                      style={{ width: `${d.score}%` }}
                    />
                  </div>
                  <p className="text-xs text-[#94a3b8] mt-1 leading-snug">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
