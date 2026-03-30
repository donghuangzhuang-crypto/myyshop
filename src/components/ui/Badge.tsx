interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'blue' | 'default';
  className?: string;
}

const variantStyles = {
  teal: 'bg-primary-bg text-primary',
  blue: 'bg-[#EEF3FF] text-secondary',
  default: 'bg-gray-100 text-gray-600',
};

export default function Badge({ children, variant = 'teal', className = '' }: BadgeProps) {
  return (
    <span className={`inline-block text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
