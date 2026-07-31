import type { CSSProperties } from 'react';
import { Box, Brush, ChartNoAxesCombined, Database, GitBranch, LineChart, Package, Star, Target } from 'lucide-react';
import { analyticsExpertise, technologies } from '../../data/skills';
import {
  DbtLogo,
  ExcelLogo,
  GithubLogo,
  GitLogo,
  PostgresqlLogo,
  PowerBiLogo,
  PythonLogo,
  SqlLogo,
  TableauLogo,
} from './SkillLogos';

const logoComponents = {
  sql: SqlLogo,
  python: PythonLogo,
  postgresql: PostgresqlLogo,
  powerbi: PowerBiLogo,
  tableau: TableauLogo,
  excel: ExcelLogo,
  dbt: DbtLogo,
  git: GitLogo,
  github: GithubLogo,
};

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
    <section id="skills" aria-labelledby="skills-title" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="skills-panel mx-auto max-w-[1280px] rounded-[1.5rem] border border-white/10 bg-[rgba(20,30,60,0.45)] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-[20px] sm:p-7 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left Column: Skills (Tools I Use) */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Box className="h-6 w-6 text-[#4f8bff]" strokeWidth={2} />
              <h2 id="skills-title" className="text-base font-bold uppercase tracking-[0.14em] text-[#4f8bff]">
                SKILLS (TOOLS I USE)
              </h2>
            </div>

            <div className="grid grid-cols-[minmax(0,135px)] justify-center gap-3.5 min-[480px]:grid-cols-[repeat(2,minmax(0,135px))] sm:grid-cols-[repeat(3,minmax(0,135px))]">
              {technologies.map((technology) => {
                const LogoComponent = logoComponents[technology.iconKey];

                return (
                  <article
                    key={technology.name}
                    className="skill-card group flex h-[115px] flex-col items-center justify-center rounded-xl border border-white/10 bg-[rgba(30,45,90,0.35)] p-3 text-center shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-[rgba(34,52,102,0.42)] hover:shadow-[0_18px_48px_rgba(7,15,34,0.3)] focus-visible:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f8bff]"
                    style={{ '--skill-glow': technology.glow } as CSSProperties}
                    tabIndex={0}
                  >
                    <div className="skill-logo-shell mb-2 flex h-10 w-10 shrink-0 items-center justify-center">
                      <LogoComponent className="skill-logo h-8 w-8 object-contain transition duration-300 ease-out group-hover:scale-110" />
                    </div>
                    <h3 className="text-xs font-semibold leading-tight text-white">{technology.name}</h3>
                    {technology.detail ? (
                      <p className="mt-0.5 text-[10px] font-medium leading-none text-white/70">{technology.detail}</p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="skills-divider h-px w-full lg:h-full lg:w-px" aria-hidden="true" />

          {/* Right Column: Analytics Expertise */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Star className="h-6 w-6 text-[#C95874]" strokeWidth={2} />
              <h2 className="text-base font-bold uppercase tracking-[0.14em] text-[#C95874]">
                ANALYTICS EXPERTISE
              </h2>
            </div>

            <div className="grid grid-cols-1 justify-center gap-3.5 sm:grid-cols-[repeat(2,minmax(0,240px))]">
              {analyticsExpertise.map((expertise, index) => {
                const Icon = expertiseIcons[expertise as keyof typeof expertiseIcons];

                return (
                  <article
                    key={expertise}
                    className={`expertise-card flex min-h-[52px] items-center gap-3 rounded-xl border border-[#9E2B47]/30 bg-[rgba(40,25,50,0.3)] px-3.5 py-3 shadow-[0_10px_30px_rgba(158,43,71,0.1)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-[#C95874]/60 hover:bg-[rgba(55,30,65,0.4)] hover:shadow-[0_16px_40px_rgba(158,43,71,0.22),0_0_20px_rgba(201,88,116,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C95874] ${index === analyticsExpertise.length - 1 ? 'sm:col-span-2 sm:mx-auto sm:w-[240px]' : ''}`}
                    tabIndex={0}
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#C95874]" strokeWidth={1.8} />
                    <h3 className="text-xs font-semibold leading-snug text-white/95">{expertise}</h3>
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
