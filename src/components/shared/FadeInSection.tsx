import { useEffect, useRef, useState } from 'react';

type FadeInSectionProps = {
  children: React.ReactNode;
  label?: string;
};

export function FadeInSection({ children, label = 'Section' }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(`Observing ${label}`);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setIsVisible(true);
      console.log('Animation started');
      console.log('Animation completed');
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${label} entered viewport`);
            setIsVisible(true);
            console.log('Animation started');
            window.setTimeout(() => {
              console.log('Animation completed');
            }, 1500);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [label]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1500ms] ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}
    >
      {children}
    </div>
  );
}
