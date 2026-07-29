type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-md ${className ?? ''}`}>
      {children}
    </span>
  );
}
