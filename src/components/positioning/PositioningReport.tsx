'use client';

export interface ReportData {
  meta: {
    version: string;
    mode: string;
    fields_collected: number;
    fields_p1_collected: number;
    '熔断触发': boolean;
    '信息不足': boolean;
  };
  '画像信息': {
    age_range: string | null;
    language: string | null;
    career_status: string | null;
    personality_tags: string[] | null;
    creation_motivation: string | null;
    interest_track: string[] | null;
    unique_value: string | null;
    target_audience: string | null;
    persona_summary: string | null;
    persona_suggestion: string | null;
  };
  '创作信息': {
    content_style: string | null;
    expression_style: string | null;
    on_camera: string | null;
    update_frequency: string | null;
    content_summary: string | null;
    content_suggestion: string | null;
  };
  '商业信息': {
    preferred_categories: string[] | null;
    rejected_categories: string[] | null;
    commerce_experience: string | null;
    collaboration_willingness: string | null;
    business_summary: string | null;
    sales_suggestion: string | null;
  };
}

export type Report = ReportData;

function TagList({ tags, color }: { tags: string[]; color: string }) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
  };
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`text-sm font-medium px-3 py-1 rounded-full border ${colorMap[color] || colorMap.blue}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function InfoCapsule({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
      <span className="text-white/70">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </span>
  );
}

function Section({
  number,
  title,
  color,
  tags,
  summary,
  suggestion,
}: {
  number: string;
  title: string;
  color: 'blue' | 'green' | 'orange';
  tags: string[];
  summary: string;
  suggestion: string;
}) {
  const borderColors: Record<string, string> = {
    blue: 'border-l-blue-500',
    green: 'border-l-emerald-500',
    orange: 'border-l-orange-500',
  };
  const numColors: Record<string, string> = {
    blue: 'text-blue-500',
    green: 'text-emerald-500',
    orange: 'text-orange-500',
  };

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 border-l-4 ${borderColors[color]}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs font-bold tracking-wider uppercase ${numColors[color]}`}>
          {number}
        </span>
        <h3 className="text-lg font-semibold text-dark">{title}</h3>
      </div>
      {tags.length > 0 && (
        <div className="mb-4">
          <TagList tags={tags} color={color} />
        </div>
      )}
      {summary && (
        <p className="text-[15px] text-gray-700 leading-relaxed mb-3">{summary}</p>
      )}
      {suggestion && (
        <div className="bg-gray-50 rounded-xl px-4 py-3">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">建议：</span>
            {suggestion}
          </p>
        </div>
      )}
    </div>
  );
}

export default function PositioningReport({
  report,
  avatarImage,
  avatarLoading,
}: {
  report: Report;
  avatarImage?: string | null;
  avatarLoading?: boolean;
}) {
  const profile = report['画像信息'];
  const creation = report['创作信息'];
  const commerce = report['商业信息'];

  // Use persona_summary as headline
  const headline = profile.persona_summary || '你的网红定位';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Hero Card */}
        <div className="bg-gradient-to-br from-primary-darker to-primary rounded-3xl p-8 text-white relative overflow-hidden">
          {/* Layer 1: radial highlight (original) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          {/* Layer 2: AI-generated image */}
          {avatarImage && (
            <div
              className="absolute inset-0 bg-cover bg-center animate-[fadeIn_0.6s_ease-in-out]"
              style={{ backgroundImage: `url(${avatarImage})` }}
            />
          )}
          {/* Layer 3: dark overlay for text readability */}
          {avatarImage && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          )}
          {/* Layer 4: shimmer + hint while loading */}
          {avatarLoading && !avatarImage && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.5s_infinite]" />
              <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[11px] text-white/50">
                <svg className="animate-spin w-3 h-3" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeLinecap="round" /></svg>
                AI 配图生成中，约需 20 秒...
              </div>
            </>
          )}
          {/* Layer 5: text content */}
          <div className="relative">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-2">Your Positioning</p>
            <h1 className="text-2xl font-bold leading-snug mb-4">{headline}</h1>
            <div className="flex flex-wrap gap-2">
              {profile.age_range && <InfoCapsule label="年龄" value={profile.age_range} />}
              {profile.career_status && <InfoCapsule label="状态" value={profile.career_status} />}
              {creation.on_camera && <InfoCapsule label="出镜" value={creation.on_camera} />}
              {profile.creation_motivation && <InfoCapsule label="初心" value={profile.creation_motivation} />}
            </div>
          </div>
        </div>

        {/* Module 01 - 人设定位 (Blue) */}
        <Section
          number="Module 01"
          title="人设定位"
          color="blue"
          tags={profile.personality_tags || []}
          summary={profile.persona_summary || ''}
          suggestion={profile.persona_suggestion || ''}
        />

        {/* Module 02 - 内容定位 (Green) */}
        <Section
          number="Module 02"
          title="内容定位"
          color="green"
          tags={[
            ...(profile.interest_track || []),
            creation.content_style,
            creation.expression_style,
          ].filter(Boolean) as string[]}
          summary={creation.content_summary || ''}
          suggestion={creation.content_suggestion || ''}
        />

        {/* Module 03 - 商业定位 (Orange) */}
        <Section
          number="Module 03"
          title="商业定位"
          color="orange"
          tags={commerce.preferred_categories || []}
          summary={commerce.business_summary || ''}
          suggestion={commerce.sales_suggestion || ''}
        />

        {/* CTA */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          <h3 className="text-lg font-semibold text-dark mb-2">准备好开启你的创作之旅了吗？</h3>
          <p className="text-sm text-gray-500 mb-5">
            注册 MyyShop，获取专属选品推荐和品牌合作机会
          </p>
          <a
            href="https://www.myyshop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
          >
            立即注册 MyyShop
          </a>
        </div>
      </div>
    </div>
  );
}
