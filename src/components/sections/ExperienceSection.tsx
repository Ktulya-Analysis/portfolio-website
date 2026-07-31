import { Calendar, MapPin } from 'lucide-react';
import { experienceItems } from '../../data/experience';
import { SectionContainer } from '../shared/SectionContainer';
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

const techLogoMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SQL: SqlLogo,
  Python: PythonLogo,
  PostgreSQL: PostgresqlLogo,
  'Power BI': PowerBiLogo,
  Tableau: TableauLogo,
  'Microsoft Excel': ExcelLogo,
  dbt: DbtLogo,
  Git: GitLogo,
  GitHub: GithubLogo,
};

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" title="Experience">
      <div className="flex flex-col gap-6">
        {experienceItems.map((item) => (
          <article
            key={item.company}
            className="group rounded-[20px] border border-white/10 bg-[rgba(20,30,60,0.35)] p-6 shadow-[0_16px_48px_rgba(7,15,34,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_22px_56px_rgba(7,15,34,0.35)] sm:p-7"
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[130px_1fr_190px] lg:items-center">
              {/* LEFT COLUMN: Company Logo (~20%) */}
              <div className="flex justify-start lg:justify-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-slate-950/40 p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3),0_0_18px_rgba(58,138,255,0.15)] backdrop-blur-md transition duration-300 group-hover:scale-[1.03] group-hover:border-blue-400/30 group-hover:shadow-[0_8px_28px_rgba(0,0,0,0.4),0_0_24px_rgba(58,138,255,0.25)]">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="max-h-[75%] max-w-[75%] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* CENTER COLUMN: Internship Details (~55%) */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{item.role}</h3>
                <p className="mt-1 text-base font-semibold text-[#4f8bff]">{item.company}</p>

                <div className="mt-2.5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#4f8bff]" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#4f8bff]" />
                    {item.duration}
                  </span>
                </div>

                <div className="my-4 h-px w-full bg-gradient-to-r from-white/15 via-white/10 to-transparent" aria-hidden="true" />

                <ul className="space-y-2.5 text-sm leading-relaxed text-slate-200">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT COLUMN: Technology Stack (~25%) */}
              <div className="flex flex-col justify-center border-t border-white/10 pt-5 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-6 lg:pt-0">
                <div className="flex flex-col gap-2.5">
                  {item.technologies.map((techName) => {
                    const LogoComponent = techLogoMap[techName];

                    return (
                      <div
                        key={techName}
                        className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-md transition duration-200 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-[0_0_12px_rgba(79,139,255,0.25)]"
                      >
                        {LogoComponent ? (
                          <LogoComponent className="h-4 w-4 shrink-0 object-contain" />
                        ) : null}
                        <span>{techName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
