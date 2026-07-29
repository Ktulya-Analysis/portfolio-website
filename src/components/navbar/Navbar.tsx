import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigationItems } from '../../data/navigation';
import { Button } from '../ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100">
          DA
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm text-slate-300 transition-colors duration-250 ease-out hover:text-white"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-[-4px] left-0 h-px w-0 bg-white transition-all duration-250 ease-out group-hover:w-full" />
            </a>
          ))}
          <Button href="#contact" variant="primary" className="px-4 py-2">
            Resume
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Button href="#contact" variant="primary" className="px-4 py-2">
            Resume
          </Button>
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="rounded-full border border-white/15 bg-white/10 p-2 text-slate-100 transition-colors duration-300 hover:bg-white/20"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/80 px-4 py-4 backdrop-blur-2xl md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-sm text-slate-300 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
