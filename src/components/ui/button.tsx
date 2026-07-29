type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, variant = 'primary', href, ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

  const variants = {
    primary: 'bg-gradient-to-r from-[#7A1F46] via-[#6B1839] to-[#4B2E83] text-white shadow-soft hover:-translate-y-0.5',
    secondary: 'border border-white/15 bg-white/8 text-slate-100 backdrop-blur-sm hover:bg-white/12 hover:-translate-y-0.5',
    ghost: 'text-slate-300 hover:text-white',
  };

  const shared = `${baseClasses} ${variants[variant]} ${className ?? ''}`;

  if (href) {
    return (
      <a href={href} className={shared}>
        {children}
      </a>
    );
  }

  return (
    <button className={shared} {...props}>
      {children}
    </button>
  );
}
