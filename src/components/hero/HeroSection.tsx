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

        {Array.from({ length: 46 }).map((_, index) => {
          // Improved size distribution: Large 15%, Medium 45%, Small 35%, Tiny 5%
          let sizeTier;
          const distribution = index % 20;
          if (distribution < 3) {
            // Large: 15% (4–6px)
            sizeTier = 5.2 + (index % 3) * 0.4;
          } else if (distribution < 12) {
            // Medium: 45% (3–4px)
            sizeTier = 3.6 + (index % 4) * 0.24;
          } else if (distribution < 19) {
            // Small: 35% (2–3px)
            sizeTier = 2.4 + (index % 3) * 0.3;
          } else {
            // Very tiny: 5% (2–2.4px, no less)
            sizeTier = 2.0 + (index % 2) * 0.2;
          }
          const size = sizeTier;
          const duration = 8 + (index % 4) * 2 + (index % 3 === 0 ? 1 : 0);
          const delay = (index % 7) * 0.35;
          const travelX = (index % 2 === 0 ? 1 : -1) * (18 + (index % 6) * 8);
          const travelY = -(16 + (index % 4) * 8);
          const brightnessGroup = index % 10 === 0 ? 0.95 : index % 7 === 0 ? 0.8 : index % 4 === 0 ? 0.68 : index % 2 === 0 ? 0.58 : 0.5;
          const opacity = index % 10 === 0 ? 0.95 : index % 7 === 0 ? 0.82 : index % 4 === 0 ? 0.72 : index % 2 === 0 ? 0.6 : 0.48;
          const glowRadius = size * 1.8 + (index % 4 === 0 ? 1.4 : 0.8);
          const glowOpacity = index % 10 === 0 ? 0.3 : index % 7 === 0 ? 0.22 : index % 4 === 0 ? 0.16 : 0.12;
          const highlight = 0.96 + (index % 3) * 0.02;
          const tint = 0.76 + (index % 4) * 0.04;

          // Shape variation: circles 70%, diamonds 20%, sparkles 10%
          let shapeClass = 'rounded-full';
          let shapeStyle = {};
          const shapeType = index % 10;
          if (shapeType >= 7 && shapeType <= 8) {
            // Diamond: 20% (2 out of 10)
            shapeClass = '';
            shapeStyle = { borderRadius: '0%', transform: 'rotate(45deg)' };
          } else if (shapeType === 9) {
            // Sparkle: 10% (1 out of 10)
            shapeClass = 'particle-sparkle';
          }

          // Incandescent blink for ~11% of particles (5 out of 46)
          const shouldBlink = index % 9 === 0;
          const blinkDuration = shouldBlink ? 8 + (index % 5) * 1 : undefined;
          const blinkDelay = shouldBlink ? (index % 13) * 0.5 : undefined;
          const animationNames = shouldBlink ? 'particleDrift, particleIncandescent' : 'particleDrift';
          const animationDurations = shouldBlink ? `${duration}s, ${blinkDuration}s` : `${duration}s`;
          const animationDelays = shouldBlink ? `${delay}s, ${blinkDelay}s` : `${delay}s`;

          return (
            <span
              key={index}
              className={`particle absolute ${shapeClass}`}
              style={{
                left: `${(index * 17) % 100}%`,
                top: `${(index * 13) % 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                background: `radial-gradient(circle, rgba(255,255,255,${highlight}) 0%, rgba(219,228,255,${tint}) 58%, rgba(255,255,255,0.12) 100%)`,
                boxShadow: `0 0 ${glowRadius}px rgba(217, 229, 255, ${glowOpacity})`,
                animationName: animationNames,
                animationDuration: animationDurations,
                animationDelay: animationDelays,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                ['--travel-x' as string]: `${travelX}px`,
                ['--travel-y' as string]: `${travelY}px`,
                ['--opacity-low' as string]: `${Math.max(0.3, opacity - 0.16)}`,
                ['--opacity-mid' as string]: `${Math.min(0.88, opacity + 0.1)}`,
                ['--opacity-high' as string]: `${Math.min(0.96, opacity + 0.18)}`,
                filter: `brightness(${brightnessGroup})`,
                ...shapeStyle,
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
