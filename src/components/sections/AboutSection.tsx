import { aboutContent } from '../../data/about';
import { Badge } from '../shared/Badge';
import { SectionContainer } from '../shared/SectionContainer';

export function AboutSection() {
  return (
    <SectionContainer id="about" title={aboutContent.heading}>
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-950/20 p-8 backdrop-blur-xl lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile</p>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            {aboutContent.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {aboutContent.highlights.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
