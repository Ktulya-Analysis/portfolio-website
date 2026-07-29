import { experienceItems } from '../../data/experience';
import { Badge } from '../shared/Badge';
import { SectionContainer } from '../shared/SectionContainer';

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" title="Experience">
      <div className="space-y-5">
        {experienceItems.map((item) => (
          <article key={item.company} className="group rounded-[1.75rem] border border-white/10 bg-slate-950/20 p-6 backdrop-blur-xl transition-all duration-250 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_16px_48px_rgba(7,15,34,0.22)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold uppercase text-slate-200">
                  {item.company.slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-slate-300">{item.company}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-300">
                {item.duration}
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f0b2c8]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
