import { certifications } from '../../data/certifications';
import { SectionContainer } from '../shared/SectionContainer';

export function CertificationsSection() {
  return (
    <SectionContainer id="certifications" title="Certifications">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((item) => (
          <article key={item.name} className="rounded-[1.5rem] border border-white/10 bg-slate-950/20 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold uppercase text-slate-200">
                {item.provider.slice(0, 2)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-slate-400">{item.provider}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
              <span>Issued {item.issued}</span>
              <a href={item.link} className="font-medium text-slate-200 transition-colors duration-300 hover:text-white">
                {item.credential}
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
