import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { techStack } from '../../data/navigation';
import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora absolute left-[-14%] top-[-12%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,_rgba(70,103,199,0.22),_rgba(28,48,122,0.12)_38%,_rgba(92,31,42,0.08)_55%,_transparent_72%)] blur-[140px]" />
        <div className="blob-a absolute right-[6%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(65,100,210,0.16),_rgba(31,57,140,0.08)_48%,_transparent_70%)] blur-[180px]" />
        <div className="blob-b absolute bottom-[-10%] left-[8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(31,57,140,0.16),_rgba(92,31,42,0.1)_53%,_transparent_72%)] blur-[170px]" />
        <div className="blob-c absolute bottom-[10%] right-[12%] h-[17rem] w-[17rem] rounded-full bg-[radial-gradient(circle,_rgba(92,31,42,0.14),_rgba(67,23,32,0.08)_55%,_transparent_74%)] blur-[140px]" />
        <div className="blob-d absolute left-[24%] top-[38%] h-[13rem] w-[13rem] rounded-full bg-[radial-gradient(circle,_rgba(107,125,223,0.12),_transparent_80%)] blur-[120px]" />

        {Array.from({ length: 35 }).map((_, index) => {
          const duration = 12 + (index % 7) * 2 + 4;
          const delay = (index % 9) * 0.35;
          const offsetX = (index % 5) * 8;
          const offsetY = (index % 4) * 6;

          return (
            <span
              key={index}
              className="particle absolute h-1.5 w-1.5 rounded-full bg-white/70"
              style={{
                left: `${(index * 17) % 100}%`,
                top: `${(index * 13) % 100}%`,
                animationName: 'particleDrift',
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
              }}
            />
          );
        })}
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-300 backdrop-blur-md">
            <Sparkles size={15} className="text-[#f0b2c8]" />
            Analytics with clarity, rigor, and business impact
          </div>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            DATA<br />
            <span className="text-slate-300">ANALYST</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            Building end-to-end analytics solutions that turn complex data into clear decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-slate-200 backdrop-blur-md"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold uppercase tracking-wide">
                  {tech.icon}
                </span>
                {tech.name}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" variant="primary" className="px-6 py-3">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" className="px-6 py-3">
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.35),_transparent_70%)] blur-3xl" />
            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-soft sm:h-[320px] sm:w-[320px]">
              <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_rgba(255,255,255,0.02)_60%,_transparent_100%)] text-center text-sm font-medium text-slate-300">
                Professional photo placeholder
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-slate-300">
        <span className="mb-2 text-[11px] uppercase tracking-[0.35em] text-slate-400">Scroll</span>
        <div className="rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-md">
          <ArrowDown size={16} className="animate-[floatDown_2.4s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
