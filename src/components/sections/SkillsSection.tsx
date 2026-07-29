import { skills } from '../../data/skills';
import { SectionContainer } from '../shared/SectionContainer';

export function SkillsSection() {
  return (
    <SectionContainer id="skills" title="Skills">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <article key={skill.name} className="group rounded-[1.5rem] border border-white/10 bg-slate-950/20 p-5 backdrop-blur-xl transition-all duration-250 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_34px_rgba(7,15,34,0.2)]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold uppercase text-slate-200 transition-transform duration-250 ease-out group-hover:scale-[1.05]">
                {skill.logo}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <p className="text-sm text-slate-400">{skill.category}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
