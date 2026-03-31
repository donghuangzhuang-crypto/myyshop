export interface StoryboardItem {
  title: string;
  type: 'hot' | 'competitor' | 'scenario';
  desc: string;
}

export const storyboardData: StoryboardItem[] = [
  { title: '开箱惊艳瞬间', type: 'hot', desc: '特写镜头捕捉撕膜瞬间，配合ASMR音效' },
  { title: '街头随机挑战', type: 'scenario', desc: '路人视角真实测试，增强信任感' },
  { title: '竞品残酷对比', type: 'competitor', desc: '左右分屏直接展示效果差异' },
  { title: '办公室偷懒神器', type: 'scenario', desc: '职场白领共鸣场景，带入感强' },
  { title: '反转剧情短剧', type: 'hot', desc: '前3秒制造误会，后段神反转' },
  { title: '微距材质展示', type: 'competitor', desc: '展现高品质细节，对标大牌' },
  { title: '博主口播种草', type: 'hot', desc: '高颜值AI数字人真情实感推荐' },
  { title: '极限暴力测试', type: 'scenario', desc: '高空跌落/防水测试，证明耐用性' },
  { title: '送礼惊喜反应', type: 'scenario', desc: '记录收到礼物的真实情绪反馈' },
  { title: 'Before/After', type: 'competitor', desc: '使用前后的巨大反差视觉冲击' },
];

export const typeConfig = {
  hot: { label: '市场热点', className: 'bg-[rgba(244,63,94,0.15)] text-[#f43f5e]' },
  competitor: { label: '同行爆款', className: 'bg-[rgba(59,130,246,0.15)] text-[#3b82f6]' },
  scenario: { label: '用户场景', className: 'bg-[rgba(16,185,129,0.15)] text-[#10b981]' },
};

export const videoResults = [
  { title: '提案 A：晨间护肤沉浸式', basis: '用户场景痛点', src: '/videos/creative-vane/sofa_demo.mp4' },
  { title: '提案 B：卡点变装特效', basis: '市场热点跟风', src: '/videos/creative-vane/wooden_sofa.mp4' },
  { title: '提案 C：竞品对比实测', basis: '同类爆款复刻', src: '/videos/creative-vane/sofa_demo.mp4' },
];

export const dimensions = [
  { name: '黄金3秒 (Hook)', score: 5, max: 100, level: 'low' as const, desc: '开头平缓无悬念，流失率高。' },
  { name: '平台适配性', score: 10, max: 100, level: 'low' as const, desc: '横屏比例不适合移动端，节奏拖沓。' },
  { name: '产品价值', score: 60, max: 100, level: 'mid' as const, desc: '核心卖点展示尚可，但缺乏痛点直击。' },
  { name: '情绪价值', score: 85, max: 100, level: 'high' as const, desc: '氛围感强，能引发用户向往。' },
  { name: '引导转化', score: 0, max: 100, level: 'low' as const, desc: '缺失明确的行动号召，转化链路断裂。' },
  { name: '视听体验', score: 80, max: 100, level: 'high' as const, desc: '画面清晰精美，但音效配合一般。' },
];

export const defaultSuggestion = `1. 重塑"黄金3秒"钩子
痛点切入（旧沙发对比）、亮点前置（ASMR抚摸）或结果展示。

2. 彻底改造剪辑
改为9:16竖屏，加快节奏，增加"卖点可视化"镜头及文字贴片。

3. 强化转化引导
全程植入Logo，结尾明确CTA（点击小黄车），增加口播。

4. 优化音频
使用热门BGM提升流量，增加亲和力口播解说。`;
