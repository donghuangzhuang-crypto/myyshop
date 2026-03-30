import Link from 'next/link';

type ButtonVariant = 'cta' | 'cta-outline' | 'dark' | 'outline-dark';

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  arrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  cta: 'relative inline-flex items-center gap-2.5 px-12 py-4 bg-dark text-white text-lg font-semibold rounded-full border-2 border-transparent hover:scale-[1.03] transition-transform before:content-[""] before:absolute before:inset-[-3px] before:rounded-[62px] before:bg-gradient-to-br before:from-primary before:via-[#5ED4D0] before:to-primary before:-z-10',
  'cta-outline': 'inline-flex items-center gap-2.5 px-10 py-3.5 bg-transparent text-primary text-base font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white hover:scale-[1.03] transition-all',
  dark: 'inline-flex items-center justify-center px-5 py-2 bg-dark text-white text-sm font-medium rounded-lg border border-dark hover:bg-[#1a1c1e] transition-colors',
  'outline-dark': 'inline-flex items-center justify-center px-5 py-2 bg-transparent text-dark text-sm font-medium rounded-lg border border-dark hover:bg-gray-100 transition-colors',
};

export default function Button({ href, variant = 'cta', children, className = '', onClick, arrow }: ButtonProps) {
  const classes = `${variantStyles[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow && <span className="text-xl">&rarr;</span>}
    </>
  );

  if (href) {
    return <Link href={href} className={classes}>{content}</Link>;
  }
  return <button className={classes} onClick={onClick}>{content}</button>;
}
