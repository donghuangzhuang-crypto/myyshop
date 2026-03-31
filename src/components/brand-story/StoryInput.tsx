'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const regions = ['美国', '欧洲', '东南亚', '日本', '中东', '其他'];

export default function StoryInput() {
  const router = useRouter();
  const [brandName, setBrandName] = useState('Zhong Zhixin');
  const [targetRegion, setTargetRegion] = useState('美国');
  const [brandDesc, setBrandDesc] = useState(
    '我们为那些在都市节奏之外，渴望一席自然沉稳空间的生活者而生。几位设计师怀揣对东方木作工艺的热爱，在工业化板材家具泛滥的时代，决定把榫卯、实木、手作细节重新带入现代家居。我们的家具拥有温润木纹、深浅交错的触感，视觉上呈现柔光。我们坚持使用实木框架，无贴皮，保留原木细节，让实木呼吸东方，让生活回归自在。'
  );
  const [previewSrc, setPreviewSrc] = useState('/images/brand-story/sofa_product.png');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPreviewSrc(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !targetRegion || !brandDesc || !previewSrc) {
      alert('请填写完整信息');
      return;
    }

    setLoading(true);
    const brandData = {
      name: brandName,
      region: targetRegion,
      description: brandDesc,
      image: previewSrc,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('generatedBrandData', JSON.stringify(brandData));

    setTimeout(() => {
      router.push('/brand/story/result');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E5E0] flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#1A1612] border-b border-[#2A2520] py-5 px-8 flex items-center">
        <Link href="/brand/story" className="text-xl font-bold text-[#E8E5E0] flex items-center gap-2 tracking-tight no-underline">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          出海故事
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-[#1A1612] p-12 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#2A2520] w-full max-w-[640px]">
          <div className="mb-10 text-center">
            <h1 className="text-[1.75rem] font-bold mb-3 tracking-tight text-[#E8E5E0]">开启品牌焕新</h1>
            <p className="text-[#8B8578] text-base">输入基础信息，AI 将为您提炼品牌基因与视觉系统</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Brand Name */}
            <div className="mb-8">
              <label className="block font-semibold text-sm mb-3 text-[#A78C6D]" htmlFor="brandName">
                企业/品牌名称
              </label>
              <input
                type="text"
                id="brandName"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full py-3.5 px-4 border border-[#2A2520] bg-[#0A0A0A] rounded-xl text-base text-[#E8E5E0] transition-all focus:outline-none focus:border-[#A78C6D] focus:bg-[rgba(167,140,109,0.05)] focus:shadow-[0_0_0_2px_rgba(167,140,109,0.1)]"
                placeholder="例如：Zhong Zhixin"
                required
              />
            </div>

            {/* Target Region */}
            <div className="mb-8">
              <label className="block font-semibold text-sm mb-3 text-[#A78C6D]" htmlFor="targetRegion">
                目标国家/地区
              </label>
              <select
                id="targetRegion"
                value={targetRegion}
                onChange={(e) => setTargetRegion(e.target.value)}
                className="w-full py-3.5 px-4 border border-[#2A2520] bg-[#0A0A0A] rounded-xl text-base text-[#E8E5E0] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B8578%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem] cursor-pointer transition-all focus:outline-none focus:border-[#A78C6D]"
                required
              >
                {regions.map((r) => (
                  <option key={r} value={r} className="bg-[#1A1612] text-[#E8E5E0]">
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Description */}
            <div className="mb-8">
              <label className="block font-semibold text-sm mb-3 text-[#A78C6D]" htmlFor="brandDesc">
                品牌/产品背景描述
              </label>
              <textarea
                id="brandDesc"
                value={brandDesc}
                onChange={(e) => setBrandDesc(e.target.value)}
                className="w-full py-3.5 px-4 border border-[#2A2520] bg-[#0A0A0A] rounded-xl text-base text-[#E8E5E0] min-h-[140px] resize-y leading-relaxed transition-all focus:outline-none focus:border-[#A78C6D] focus:bg-[rgba(167,140,109,0.05)] focus:shadow-[0_0_0_2px_rgba(167,140,109,0.1)]"
                placeholder="请简述您的创始初心、主营产品特点、目标用户群体以及您希望传递的品牌感受..."
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-8">
              <label className="block font-semibold text-sm mb-3 text-[#A78C6D]">核心产品视觉</label>
              <div
                className="border border-dashed border-[#2A2520] bg-[#0A0A0A] rounded-xl p-4 text-center cursor-pointer transition-all hover:border-[#A78C6D] hover:bg-[rgba(167,140,109,0.05)] relative flex flex-col items-center justify-center overflow-hidden"
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {previewSrc ? (
                  <img
                    src={previewSrc}
                    alt="预览"
                    className="max-w-full max-h-60 rounded-lg object-contain border border-[#2A2520]"
                  />
                ) : (
                  <>
                    <svg className="w-10 h-10 text-[#8B8578] mb-4 bg-[#1A1612] p-2 rounded-full border border-[#2A2520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[#8B8578] text-sm">点击或拖拽图片至此处上传</p>
                  </>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#A78C6D] text-[#1A1612] border border-[#A78C6D] rounded-xl text-base font-semibold cursor-pointer transition-all mt-4 flex justify-center items-center gap-3 hover:bg-[#bfa382] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(167,140,109,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading && (
                <div className="border-2 border-[rgba(26,22,18,0.3)] border-t-[#1A1612] rounded-full w-[18px] h-[18px] animate-spin" />
              )}
              <span>{loading ? 'AI 正在提炼品牌基因...' : '生成品牌全案'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
