import { SectionContainer } from '../shared/SectionContainer';

export function AboutSection() {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(20,30,60,0.35)] p-8 shadow-[0_20px_50px_rgba(7,15,34,0.3)] backdrop-blur-xl sm:p-12 lg:p-[56px]">
        {/* Subtle, soft maroon ambient glow along the bottom-right corner and right edge */}
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full blur-3xl opacity-60"
          style={{
            background:
              'radial-gradient(circle at bottom right, rgba(142, 43, 71, 0.35) 0%, rgba(156, 88, 116, 0.18) 45%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-12 h-64 w-32 -translate-y-1/2 rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle at right, rgba(142, 43, 71, 0.25) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Clean, readable paragraph content with selective blue accents */}
        <div className="relative z-10 max-w-4xl space-y-6 text-left text-[18px] font-normal leading-[1.8] text-slate-200/90 sm:space-y-7">
          <p>
            I hold a <span className="font-medium text-[#6EA8FF]">Master's in Computer Applications</span> from PES University and a Bachelor's in Computer Applications.
          </p>
          <p>
            Ranked among the <span className="font-medium text-[#6EA8FF]">Top 5%</span> globally in the <span className="font-medium text-[#6EA8FF]">GCI World 2026</span> Machine Learning Competition (Matsuo-Iwasawa Lab, The University of Tokyo).
          </p>
          <p>
            I build end-to-end analytics projects focused on SQL, data modeling, ETL pipelines, and business intelligence.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}


