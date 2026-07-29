import { Github } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-white/10 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <p className="font-medium text-slate-200">Data Analyst Portfolio</p>
        <p>© {year} All rights reserved.</p>
      </div>
      <div className="flex items-center gap-3">
        <span>Built with React, TypeScript, and Tailwind CSS</span>
        <a href="https://github.com" className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition-colors duration-300 hover:bg-white/20">
          <Github size={16} />
        </a>
      </div>
    </footer>
  );
}
