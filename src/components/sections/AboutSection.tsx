import { aboutContent } from '../../data/about';

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto w-full max-w-[780px]">
        {/* Subtle, understated maroon ambient glow behind the card */}
        <div
          className="pointer-events-none absolute -inset-4 rounded-[28px] blur-2xl opacity-75"
          style={{
            background:
              'radial-gradient(circle at center, rgba(142, 43, 58, 0.14) 0%, rgba(92, 31, 42, 0.04) 55%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        {/* Single glassmorphism card centered on the page */}
        <div className="relative rounded-[20px] border border-white/[0.08] bg-[#0B1528]/50 p-10 sm:p-12 backdrop-blur-xl shadow-2xl shadow-black/20">
          <h2 id="about-title" className="mb-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            {aboutContent.heading}
          </h2>
          <p className="max-w-[750px] text-[18px] font-normal leading-[1.8] text-slate-200/90 text-left">
            {aboutContent.description}
          </p>
        </div>
      </div>
    </section>
  );
}

