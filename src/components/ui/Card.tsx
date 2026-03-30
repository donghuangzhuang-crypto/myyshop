interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-[20px] p-8 transition-all duration-300 ${hover ? 'hover:border-[#CFE8E6] hover:shadow-[0_12px_40px_rgba(58,163,159,0.1)]' : ''} ${className}`}>
      {children}
    </div>
  );
}
