'use client';

import { videoResults } from '@/content/creative-vane';

export default function VaneResults({ onAnalyze }: { onAnalyze: (idx: number) => void }) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">第三步：生成结果</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 mb-8">
        {videoResults.map((v, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] rounded-2xl overflow-hidden border border-white/5 transition-transform hover:-translate-y-0.5"
          >
            <video
              controls
              className="w-full h-[200px] object-cover bg-black block"
            >
              <source src={v.src} type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
            <div className="p-4">
              <h4 className="font-semibold">{v.title}</h4>
              <p className="text-sm text-[#94a3b8] mt-2">基于：{v.basis}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => onAnalyze(idx)}
                  className="flex-1 bg-transparent border border-[#334155] text-[#94a3b8] px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all hover:border-[#f8fafc] hover:text-[#f8fafc] hover:bg-white/5"
                >
                  爆款预测
                </button>
                <button className="bg-transparent border border-[#334155] text-[#94a3b8] px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all hover:border-[#f8fafc] hover:text-[#f8fafc] hover:bg-white/5">
                  下载
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
