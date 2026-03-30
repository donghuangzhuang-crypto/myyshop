'use client';

export interface ReportData {
  meta: {
    version: string;
    mode: string;
    fields_collected: number;
    fields_required_collected: number;
    '熔断触发': boolean;
  };
  '画像信息': {
    age_range: string | null;
    career_status: string | null;
    work_mode: string | null;
    personality_tags: string[] | null;
    peer_review: string | null;
    core_strength: string | null;
    unique_value: string | null;
    interest_track: string[] | null;
    target_audience: string | null;
    content_value: string | null;
  };
  '创作信息': {
    expression_style: string | null;
    on_camera: string | null;
    content_style: string | null;
    update_frequency: string | null;
    creation_method: string | null;
    style_reference: string | null;
  };
  '商业信息': {
    preferred_categories: string[] | null;
    rejected_categories: string[] | null;
    commerce_experience: string | null;
    collaboration_willingness: string | null;
  };
}

export interface Report {
  aFace: string;
  data: ReportData;
}

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

export default function PositioningReport({ report }: { report: Report }) {
  const { aFace, data } = report;
  const profile = data['画像信息'];
  const creation = data['创作信息'];
  const commerce = data['商业信息'];

  // Parse A面 into lines
  const aFaceLines = aFace
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  // First line as headline, rest as description
  const headline = aFaceLines[0] || '你的网红定位';
  const description = aFaceLines.slice(1).join('\n');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Hero Card */}
        <div className="bg-gradient-to-br from-primary-darker to-primary rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative">
            <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-2">Your Positioning</p>
            <h1 className="text-2xl font-bold leading-snug mb-4">{headline}</h1>
            {description && (
              <p className="text-[15px] text-white/90 leading-relaxed whitespace-pre-line mb-5">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {profile.age_range && <InfoCapsule label="年龄" value={profile.age_range} />}
              {profile.career_status && <InfoCapsule label="状态" value={profile.career_status} />}
              {creation.on_camera && <InfoCapsule label="出镜" value={creation.on_camera} />}
            </div>
          </div>
        </div>

        {/* Module 01 - 网红人设定位 (Blue) */}
        <Section
          number="Module 01"
          title="网红人设定位"
          color="blue"
          tags={profile.personality_tags || []}
          summary={
            [profile.peer_review, profile.core_strength, profile.unique_value]
              .filter(Boolean)
              .join('；') || ''
          }
          suggestion={profile.content_value || ''}
        />

        {/* Module 02 - 创作风格偏好 (Green) */}
        <Section
          number="Module 02"
          title="创作风格偏好"
          color="green"
          tags={[
            ...(profile.interest_track || []),
            creation.content_style,
            creation.expression_style,
          ].filter(Boolean) as string[]}
          summary={
            [
              creation.creation_method && `创作方式：${creation.creation_method}`,
              creation.update_frequency && `更新频率：${creation.update_frequency}`,
              creation.style_reference && `风格参考：${creation.style_reference}`,
            ]
              .filter(Boolean)
              .join('；') || ''
          }
          suggestion={profile.target_audience ? `目标受众：${profile.target_audience}` : ''}
        />

        {/* Module 03 - 带货偏好 (Orange) */}
        <Section
          number="Module 03"
          title="带货偏好"
          color="orange"
          tags={commerce.preferred_categories || []}
          summary={
            [
              commerce.commerce_experience && `带货经验：${commerce.commerce_experience}`,
              commerce.collaboration_willingness && `接单意愿：${commerce.collaboration_willingness}`,
            ]
              .filter(Boolean)
              .join('；') || ''
          }
          suggestion={
            commerce.rejected_categories?.length
              ? `建议避开：${commerce.rejected_categories.join('、')}`
              : ''
          }
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
