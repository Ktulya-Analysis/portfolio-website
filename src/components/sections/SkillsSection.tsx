import type { CSSProperties } from 'react';
import { Box, Brush, ChartNoAxesCombined, Database, GitBranch, LineChart, Package, Star, Target } from 'lucide-react';
import { analyticsExpertise, technologies } from '../../data/skills';

const expertiseIcons = {
  ETL: GitBranch,
  'Data Modeling': Package,
  'Data Warehousing': Database,
  'Star Schema': Star,
  'Dashboard Development': ChartNoAxesCombined,
  'KPI Reporting': Target,
  'Exploratory Data Analysis (EDA)': LineChart,
  'Data Pipelines': GitBranch,
  'Data Cleaning': Brush,
};

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <div className="mx-auto mb-3 w-fit rounded-full border border-[#ff4d6d]/25 bg-[#ff4d6d]/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#ff4d6d]">
          Skills &amp; Expertise
        </div>
        <h2 id="skills-title" className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
          Tools I Use &amp; <span className="text-[#ff4d6d]">Expertise I Build</span>
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
          A combination of powerful tools and deep analytics expertise
          <br className="hidden sm:block" />
          to turn data into meaningful business impact.
        </p>
      </div>

      <div className="skills-panel mx-auto max-w-[1280px] rounded-[1.5rem] border border-white/10 bg-[rgba(20,30,60,0.45)] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-[20px] sm:p-7 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <div className="mb-6 flex items-start gap-3">
              <Box className="mt-0.5 h-7 w-7 text-[#4f8bff]" strokeWidth={1.8} />
              <div>
                <p className="text-base font-bold uppercase tracking-[0.14em] text-[#4f8bff]">Skills (Tools I Use)</p>
                <p className="mt-1 text-sm text-white/60">Technologies and platforms I work with</p>
              </div>
            </div>

            <div className="grid grid-cols-[minmax(0,150px)] justify-center gap-5 min-[480px]:grid-cols-[repeat(2,minmax(0,150px))] sm:grid-cols-[repeat(3,minmax(0,150px))]">
              {technologies.map((technology) => (
                <article
                  key={technology.name}
                  className="skill-card group flex h-[150px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[rgba(30,45,90,0.35)] p-4 text-center shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-[rgba(34,52,102,0.42)] hover:shadow-[0_18px_48px_rgba(7,15,34,0.3)] focus-visible:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0b2c8]"
                  style={{ '--skill-glow': technology.glow } as CSSProperties}
                  tabIndex={0}
                >
                  <div className="skill-logo-shell mb-3 flex h-16 w-16 shrink-0 items-center justify-center">
                    <img
                      src={technology.logo}
                      alt={`${technology.name} logo`}
                      className="skill-logo h-14 w-14 object-contain transition duration-300 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm font-semibold leading-tight text-white">{technology.name}</h3>
                  {'detail' in technology && technology.detail ? (
                    <p className="mt-1 text-xs font-semibold leading-tight text-white/75">{technology.detail}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="skills-divider h-px w-full lg:h-full lg:w-px" aria-hidden="true" />

          <div>
            <div className="mb-6 flex items-start gap-3">
              <Star className="mt-0.5 h-7 w-7 text-[#ff4d6d]" strokeWidth={1.8} />
              <div>
                <p className="text-base font-bold uppercase tracking-[0.14em] text-[#ff4d6d]">Analytics Expertise</p>
                <p className="mt-1 text-sm text-white/60">Core areas where I create value</p>
              </div>
            </div>

            <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-[repeat(2,minmax(0,260px))]">
              {analyticsExpertise.map((expertise, index) => {
                const Icon = expertiseIcons[expertise as keyof typeof expertiseIcons];

                return (
                  <article
                    key={expertise}
                    className={`expertise-card flex min-h-16 items-center gap-4 rounded-[0.875rem] border border-[#ff4d6d]/20 bg-[rgba(30,45,90,0.25)] px-4 py-4 shadow-[0_12px_36px_rgba(255,77,109,0.08)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-[#ff4d6d]/45 hover:bg-[rgba(42,50,94,0.34)] hover:shadow-[0_18px_46px_rgba(255,77,109,0.17),0_0_24px_rgba(255,77,109,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d6d] ${index === analyticsExpertise.length - 1 ? 'sm:col-span-2 sm:mx-auto sm:w-[260px]' : ''}`}
                    tabIndex={0}
                  >
                    <Icon className="h-7 w-7 shrink-0 text-[#ff4d6d]" strokeWidth={1.8} />
                    <h3 className="text-sm font-semibold leading-snug text-white">{expertise}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
