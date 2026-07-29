import { projects } from '../../data/projects';
import { Badge } from '../shared/Badge';
import { SectionContainer } from '../shared/SectionContainer';

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.name} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/20 backdrop-blur-xl transition-all duration-250 ease-out hover:-translate-y-2 hover:border-white/20 hover:bg-slate-950/25 hover:shadow-[0_18px_48px_rgba(7,15,34,0.24)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="h-56 overflow-hidden lg:h-full">
              <img src={project.image} alt={project.name} className="h-full w-full object-cover transition-transform duration-250 ease-out group-hover:scale-[1.03]" />
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-lg font-medium text-slate-200">{project.summary}</p>
                <p className="mt-3 max-w-2xl text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github ? (
                  <a href={project.github} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-250 ease-out hover:border-white/20 hover:bg-white/20 hover:-translate-y-0.5">
                    GitHub
                  </a>
                ) : null}
                {project.demo ? (
                  <a href={project.demo} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-250 ease-out hover:border-white/20 hover:bg-white/20 hover:-translate-y-0.5">
                    Live Demo
                  </a>
                ) : null}
                {project.caseStudy ? (
                  <a href={project.caseStudy} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-250 ease-out hover:border-white/20 hover:bg-white/20 hover:-translate-y-0.5">
                    Case Study
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
