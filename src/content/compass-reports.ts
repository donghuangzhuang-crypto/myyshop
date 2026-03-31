export interface CompassReport {
  slug: string;
  title: string;
  product: string;
  category: string;
  region: string;
  status: 'completed' | 'generating' | 'draft';
  date: string;
  sections: ReportSection[];
  sources: ReportSource[];
}

export interface ReportSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  metrics?: { label: string; value: string; change?: string }[];
  personas?: { name: string; desc: string; tags: string[] }[];
}

export interface ReportSource {
  domain: string;
  title: string;
  url?: string;
}

export const demoReports: CompassReport[] = [
  {
    slug: 'wooden-sofa',
    title: '中式实木沙发海外网红营销推广方案',
    product: '中式实木沙发',
    category: '家居家具',
    region: '北美市场',
    status: 'completed',
    date: '2025-03-28',
    sections: [
      {
        id: 'overview',
        title: '项目概览',
        subtitle: 'Project Overview',
        content: '本报告针对中式实木沙发在北美市场的网红营销推广策略进行深度分析，涵盖市场机会识别、目标人群画像、KOL 选择策略、内容创意方向及投放节奏规划。',
        metrics: [
          { label: '目标市场规模', value: '$4.2B', change: '+12.3%' },
          { label: '预估 ROI', value: '3.8x' },
          { label: '推荐 KOL 数量', value: '24 位' },
          { label: '预估触达人群', value: '8.5M' },
        ],
      },
      {
        id: 'market',
        title: '市场机会分析',
        subtitle: 'Market Opportunity',
        content: '北美实木家具市场近年呈现"去工业化"趋势，消费者越来越倾向于手工制作、有文化故事的家具产品。中式榫卯工艺在 Pinterest 和 Instagram 上的搜索量年增长 45%，"Japanese/Chinese woodworking" 成为 YouTube 热门内容品类。',
      },
      {
        id: 'audience',
        title: '目标人群画像',
        subtitle: 'Target Audience',
        content: '核心目标人群为 28-45 岁的北美中高收入家庭，对东方美学有认知和兴趣，注重家居品质和可持续消费。',
        personas: [
          { name: 'Design Enthusiast Dana', desc: '35岁，室内设计师，Instagram 活跃用户，热衷分享家居改造', tags: ['设计敏感', '高影响力', '品质导向'] },
          { name: 'Mindful Mike', desc: '42岁，科技公司高管，追求 Zen 风格生活方式', tags: ['高消费力', '极简主义', '文化好奇'] },
          { name: 'Eco Emma', desc: '30岁，环保倡导者，偏好可持续和天然材料的家具', tags: ['环保意识', '愿付溢价', '社区活跃'] },
        ],
      },
      {
        id: 'kol',
        title: 'KOL 策略',
        subtitle: 'Influencer Strategy',
        content: '建议采用"金字塔"KOL 组合策略：1-2 位头部家居 KOL 做品牌背书，5-8 位腰部 KOL 做深度内容种草，15-20 位尾部 KOL/KOC 做真实体验分享。重点平台为 Instagram、YouTube 和 TikTok。',
      },
      {
        id: 'content',
        title: '内容创意方向',
        subtitle: 'Content Strategy',
        content: '围绕三条内容主线：1）工艺故事线 — 展示榫卯制作过程，强调"无一颗螺丝"的工艺哲学；2）生活方式线 — 中式实木家具融入北美现代家居的场景展示；3）对比测评线 — 与同价位工业家具的品质对比，突出材质和耐久优势。',
      },
      {
        id: 'timeline',
        title: '投放节奏',
        subtitle: 'Campaign Timeline',
        content: '分三阶段执行：Phase 1（预热期 2 周）— 头部 KOL 发布工艺纪录短片；Phase 2（爆发期 4 周）— 腰部 KOL 集中发布开箱/场景内容；Phase 3（长尾期 8 周）— KOC 持续分享使用体验，配合用户 UGC 活动。',
      },
    ],
    sources: [
      { domain: 'statista.com', title: 'U.S. Furniture Market Revenue 2024-2029' },
      { domain: 'ibisworld.com', title: 'Furniture Manufacturing in the US - Market Research Report' },
      { domain: 'pinterest.com', title: 'Pinterest Trends: Japanese Woodworking 2025' },
      { domain: 'instagram.com', title: 'Top Home Decor Influencers Analysis 2025' },
      { domain: 'tiktok.com', title: 'TikTok Creative Center - Home & Living Category' },
      { domain: 'grandviewresearch.com', title: 'Wood Furniture Market Size, Share & Trends' },
      { domain: 'mckinsey.com', title: 'The State of Consumer Spending: Home Furnishings' },
      { domain: 'hubspot.com', title: 'Influencer Marketing Strategy Guide 2025' },
    ],
  },
  {
    slug: 'thermal-cup',
    title: '保温杯海外市场网红推广分析',
    product: '智能保温杯',
    category: '日用百货',
    region: '欧洲市场',
    status: 'completed',
    date: '2025-03-25',
    sections: [
      {
        id: 'overview',
        title: '项目概览',
        subtitle: 'Project Overview',
        content: '本报告聚焦智能保温杯在欧洲市场的网红营销策略，分析目标消费群体、竞品格局及最优推广路径。',
        metrics: [
          { label: '目标市场规模', value: '€1.8B', change: '+8.7%' },
          { label: '预估 ROI', value: '4.2x' },
          { label: '推荐 KOL 数量', value: '18 位' },
          { label: '预估触达人群', value: '5.2M' },
        ],
      },
      {
        id: 'market',
        title: '市场机会分析',
        subtitle: 'Market Opportunity',
        content: '欧洲可持续生活方式趋势推动环保杯具需求增长，智能温控功能成为差异化卖点。',
      },
    ],
    sources: [
      { domain: 'euromonitor.com', title: 'Drinkware Market in Europe 2025' },
      { domain: 'statista.com', title: 'Thermal Bottle Revenue Worldwide' },
    ],
  },
  {
    slug: 'yoga-pants',
    title: '瑜伽服北美市场推广策略',
    product: '高端瑜伽裤',
    category: '运动服饰',
    region: '北美市场',
    status: 'completed',
    date: '2025-03-20',
    sections: [
      {
        id: 'overview',
        title: '项目概览',
        subtitle: 'Project Overview',
        content: '本报告分析高端瑜伽裤在北美市场的竞争格局与网红营销机会。',
        metrics: [
          { label: '目标市场规模', value: '$6.1B', change: '+15.2%' },
          { label: '预估 ROI', value: '5.1x' },
          { label: '推荐 KOL 数量', value: '32 位' },
          { label: '预估触达人群', value: '12M' },
        ],
      },
    ],
    sources: [
      { domain: 'npr.org', title: 'The Athleisure Boom Continues' },
    ],
  },
  {
    slug: 'boots',
    title: '时尚靴子东南亚市场拓展方案',
    product: '切尔西靴',
    category: '鞋履',
    region: '东南亚市场',
    status: 'completed',
    date: '2025-03-15',
    sections: [
      {
        id: 'overview',
        title: '项目概览',
        subtitle: 'Project Overview',
        content: '本报告评估切尔西靴在东南亚市场的推广可行性与渠道策略。',
        metrics: [
          { label: '目标市场规模', value: '$2.3B', change: '+18.5%' },
          { label: '预估 ROI', value: '3.2x' },
          { label: '推荐 KOL 数量', value: '15 位' },
          { label: '预估触达人群', value: '6.8M' },
        ],
      },
    ],
    sources: [
      { domain: 'shopee.com', title: 'Southeast Asia Footwear Trends 2025' },
    ],
  },
];

export const filterOptions = ['全部', '家居家具', '日用百货', '运动服饰', '鞋履'];
