import { notFound } from 'next/navigation';
import CompassReport from '@/components/compass/CompassReport';
import { demoReports } from '@/content/compass-reports';

export function generateStaticParams() {
  return demoReports.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = demoReports.find((r) => r.slug === slug);
  if (!report) return { title: '报告未找到' };
  return {
    title: `${report.title} - 出海罗盘`,
    description: report.sections[0]?.content || '',
  };
}

export default async function CompassReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = demoReports.find((r) => r.slug === slug);
  if (!report) notFound();
  return <CompassReport report={report} />;
}
