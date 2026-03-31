'use client';

import { useState } from 'react';

const options = [
  {
    title: '市场热点跟风',
    desc: '结合当前TikTok/抖音热门BGM与卡点节奏',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f8fafc]">
        <path d="M8.5 18.5C8.5 20.43 10.07 22 12 22s3.5-1.57 3.5-3.5c0-1.5-1-2.5-2.5-3.5-1.5-1-2.5-2-2.5-3.5 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5" />
        <path d="M10 12c0-1.5 1-2.5 2-3.5 1-1 1.5-2 1.5-3 0-1.38-1.12-2.5-2.5-2.5S10 4.12 10 5.5c0 1 0.5 2 1.5 3 1 1 2 2 2 3.5" />
        <path d="M14 12c0-1.5-1-2.5-2-3.5-1-1-1.5-2-1.5-3 0-1.38 1.12-2.5 2.5-2.5S14 4.12 14 5.5c0 1-0.5 2-1.5 3-1 1-2 2-2 3.5" />
      </svg>
    ),
  },
  {
    title: '同类爆款复刻',
    desc: '基于竞品高转化视频框架进行二创',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f8fafc]">
        <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
      </svg>
    ),
  },
  {
    title: '用户场景痛点',
    desc: '针对特定人群(如宝妈/户外)构建使用场景',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f8fafc]">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" />
      </svg>
    ),
  },
];

export default function VaneUpload({ onGenerate }: { onGenerate: () => void }) {
  const [selectedOptions, setSelectedOptions] = useState<Set<number>>(new Set());
  const [uploaded, setUploaded] = useState(true); // default demo image loaded

  const toggleOption = (idx: number) => {
    setSelectedOptions((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">第一步：上传商品与定义方向</h2>
      <div className="bg-[#1e293b] rounded-2xl p-8 border border-white/5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
        {/* Upload area */}
        <div className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all bg-[rgba(30,41,59,0.3)] mb-8 ${uploaded ? 'border-[#10b981]' : 'border-[#334155] hover:border-[#6366f1] hover:bg-[rgba(99,102,241,0.05)]'}`}>
          {uploaded ? (
            <div className="relative w-full flex flex-col items-center justify-center">
              <img
                src="/images/creative-vane/sofa_product.png"
                alt="已上传商品"
                className="max-h-[200px] max-w-full rounded-lg shadow-md"
              />
              <div className="mt-4 text-[#10b981] flex items-center gap-2">
                <strong>默认加载成功</strong>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setUploaded(false); }}
                className="absolute top-2.5 right-2.5 bg-[#1e293b] rounded px-2.5 py-1.5 cursor-pointer border border-[#334155] text-xs text-[#94a3b8] hover:border-[#6366f1]"
              >
                重新上传
              </button>
            </div>
          ) : (
            <>
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-lg font-semibold">点击或拖拽上传商品图</h3>
              <p className="text-[#94a3b8] mt-2 text-sm">支持 PNG, JPG, WEBP (Gemini 2.5 Pro 将自动解析商品特征)</p>
            </>
          )}
        </div>

        {/* Options */}
        <h3 className="mb-4 text-lg font-semibold">选择创意生成方向 (可多选)</h3>
        <div className="grid grid-cols-3 gap-6 mb-8 max-md:grid-cols-1">
          {options.map((opt, idx) => (
            <div
              key={opt.title}
              onClick={() => toggleOption(idx)}
              className={`bg-[#1e293b] p-6 rounded-xl cursor-pointer border-2 text-center transition-all hover:bg-[#2d3b4e] hover:-translate-y-0.5 ${
                selectedOptions.has(idx) ? 'border-[#6366f1] bg-[rgba(99,102,241,0.1)]' : 'border-transparent'
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">{opt.icon}</div>
              <strong>{opt.title}</strong>
              <p className="text-xs text-[#94a3b8] mt-1.5">{opt.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-right">
          <button
            onClick={onGenerate}
            className="bg-[#6366f1] text-white border-none px-6 py-3 rounded-lg font-semibold cursor-pointer text-[0.95rem] inline-flex items-center gap-2 shadow-[0_4px_6px_-1px_rgba(99,102,241,0.2)] transition-all hover:bg-[#4f46e5] hover:-translate-y-0.5"
          >
            生成可视化分镜提案
          </button>
        </div>
      </div>
    </div>
  );
}
