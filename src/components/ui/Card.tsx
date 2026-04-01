interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 ${hover ? 'hover:border-primary-border hover:shadow-card' : ''} ${className}`}>
      {children}
    </div>
  );
}
