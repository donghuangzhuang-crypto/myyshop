'use client';

import { useState } from 'react';
import { storyboardData, typeConfig } from '@/content/creative-vane';

export default function VaneStoryboard({ onConfirm }: { onConfirm: () => void }) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const cost = selected.size * 50;

  return (
    <div>
      <div className="flex justify-between items-center mb-6 max-md:flex-col max-md:items-start max-md:gap-2">
        <h2 className="text-2xl font-bold">第二步：确认分镜 (可视化决策)</h2>
        <div className="text-[#94a3b8] text-sm">已生成 10 个创意提案，请选择满意的方案进行渲染</div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mb-8">
        {storyboardData.map((item, idx) => {
          const cfg = typeConfig[item.type];
          const isSelected = selected.has(idx);
          return (
            <div
              key={idx}
              onClick={() => toggle(idx)}
              className={`bg-[#1e293b] rounded-xl overflow-hidden cursor-pointer relative border-2 transition-all shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_12px_20px_rgba(0,0,0,0.2)] ${
                isSelected ? 'border-[#6366f1]' : 'border-transparent'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2.5 right-2.5 bg-[#6366f1] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-10">
                  ✓
                </div>
              )}
              <img
                src="/images/creative-vane/storyboard_preview.png"
                alt="分镜预览"
                className="w-full h-auto block border-b border-white/5"
              />
              <div className="p-5">
                <span className={`text-xs px-3 py-1 rounded-full font-semibold inline-block mb-2 ${cfg.className}`}>
                  {cfg.label}
                </span>
                <h4 className="my-2 text-base font-semibold">{item.title}</h4>
                <p className="text-xs text-[#94a3b8]">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sticky bottom bar */}
      <div className="sticky bottom-8 bg-[rgba(15,23,42,0.9)] p-4 border border-[#334155] rounded-2xl flex justify-between items-center backdrop-blur-[10px]">
        <div>
          <span className="text-[#94a3b8]">预计渲染消耗：</span>
          <strong>{cost} 积分</strong>
        </div>
        <button
          onClick={() => {
            if (selected.size === 0) {
              alert('请至少选择一个分镜提案！');
              return;
            }
            onConfirm();
          }}
          className="bg-[#6366f1] text-white border-none px-6 py-3 rounded-lg font-semibold cursor-pointer text-[0.95rem] inline-flex items-center gap-2 shadow-[0_4px_6px_-1px_rgba(99,102,241,0.2)] transition-all hover:bg-[#4f46e5] hover:-translate-y-0.5"
        >
          确认并一键生成视频
        </button>
      </div>
    </div>
  );
}
