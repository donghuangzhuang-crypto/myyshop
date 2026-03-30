interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-[780px] mx-auto mb-15 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
