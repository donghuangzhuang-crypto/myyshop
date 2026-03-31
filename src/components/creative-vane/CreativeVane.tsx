'use client';

import { useState, useRef, useEffect } from 'react';
import VaneLanding from './VaneLanding';
import VaneUpload from './VaneUpload';
import VaneStoryboard from './VaneStoryboard';
import VaneResults from './VaneResults';
import VaneAnalytics from './VaneAnalytics';

const stepLabels = ['上传与设定', '可视化决策', '视频生成', '爆款预测与二创'];

export default function CreativeVane() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const goToStep = (step: number) => {
    // When going from storyboard (2) to results (3), show loading
    if (step === 3 && currentStep === 2) {
      setLoading(true);
      let width = 0;
      const interval = setInterval(() => {
        width += Math.random() * 10;
        if (width > 100) width = 100;
        if (progressRef.current) progressRef.current.style.width = `${width}%`;
        if (width >= 100) {
          clearInterval(interval);
          setLoading(false);
          setCurrentStep(3);
        }
      }, 200);
      return;
    }
    setCurrentStep(step);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc] font-[Inter,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,sans-serif] leading-relaxed antialiased">
      <div className="max-w-[1200px] mx-auto p-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center py-6 mb-12">
          <div className="text-2xl font-extrabold bg-gradient-to-br from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent tracking-tight flex items-center gap-2">
            ⚡ 创意风标 Creative Vane
          </div>
          <div className="text-[#94a3b8] text-sm">告别AI开盲盒，拥抱爆款确定性</div>
        </header>

        {/* Stepper (hidden on landing) */}
        {currentStep > 0 && !loading && (
          <div className="flex justify-between mb-16 relative px-8">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-[#1e293b] -translate-y-1/2 z-0" />
            {stepLabels.map((label, idx) => {
              const stepNum = idx + 1;
              const isActive = stepNum <= currentStep;
              return (
                <div
                  key={label}
                  className={`bg-[#0f172a] z-[1] px-4 text-sm flex items-center gap-2.5 transition-colors ${
                    isActive ? 'text-[#f8fafc] font-semibold' : 'text-[#94a3b8]'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border-4 border-[#0f172a] transition-all ${
                      isActive
                        ? 'bg-[#6366f1] text-white shadow-[0_0_0_2px_rgba(99,102,241,0.3)]'
                        : 'bg-[#1e293b] text-[#94a3b8]'
                    }`}
                  >
                    {stepNum}
                  </span>
                  <span className="max-md:hidden">{label}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Loading View */}
        {loading && (
          <div className="text-center pt-16 animate-[fadeIn_0.4s_ease]">
            <div className="border-[3px] border-white/10 w-[60px] h-[60px] rounded-full border-l-[#6366f1] animate-spin mx-auto mb-8" />
            <h2 className="text-2xl font-bold">Sora 2 渲染引擎启动中...</h2>
            <p className="text-[#94a3b8] mt-4">正在保持角色一致性 · 同步口型与音色 · 渲染物理光影</p>
            <div className="w-[300px] bg-[#334155] h-1.5 rounded-sm mx-auto mt-8 overflow-hidden">
              <div ref={progressRef} className="w-0 bg-[#6366f1] h-full transition-[width] duration-300" />
            </div>
          </div>
        )}

        {/* Views */}
        {!loading && (
          <div className="animate-[fadeIn_0.4s_cubic-bezier(0.4,0,0.2,1)]">
            {currentStep === 0 && <VaneLanding onStart={() => goToStep(1)} />}
            {currentStep === 1 && <VaneUpload onGenerate={() => goToStep(2)} />}
            {currentStep === 2 && <VaneStoryboard onConfirm={() => goToStep(3)} />}
            {currentStep === 3 && <VaneResults onAnalyze={() => goToStep(4)} />}
            {currentStep === 4 && <VaneAnalytics onBack={() => goToStep(3)} />}
          </div>
        )}
      </div>
    </div>
  );
}
