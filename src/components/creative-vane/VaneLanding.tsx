'use client';

export default function VaneLanding({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center py-16 pb-24">
      <h1 className="text-[4rem] font-extrabold mb-6 leading-[1.1] tracking-tight max-md:text-[2.5rem]">
        电商视频素材<br />
        <span className="text-[#6366f1]">确定性生成引擎</span>
      </h1>
      <p className="text-xl text-[#94a3b8] max-w-[680px] mx-auto mb-10 font-normal">
        Gemini 深度理解商品 · Nano Banana 可控分镜 · Sora 2 影视级渲染<br />
        可视化决策前置，零成本纠错。
      </p>
      <button
        onClick={onStart}
        className="bg-[#6366f1] text-white border-none px-12 py-4 rounded-lg font-semibold cursor-pointer text-xl inline-flex items-center justify-center gap-2 shadow-[0_4px_6px_-1px_rgba(99,102,241,0.2)] transition-all hover:bg-[#4f46e5] hover:-translate-y-0.5 hover:shadow-[0_6px_12px_-1px_rgba(99,102,241,0.3)] active:translate-y-0"
      >
        开始创作
      </button>
    </div>
  );
}
