import { Mail, MapPin, FileText } from 'lucide-react';
import { contactDetails, socials } from '../../data/socials';
import { SectionContainer } from '../shared/SectionContainer';

export function ContactSection() {
  return (
    <SectionContainer id="contact" title="Contact">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/20 p-8 backdrop-blur-xl sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-300">
              I’m interested in analytics partnerships, data product work, and opportunities to turn complex information into meaningful decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-250 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/20">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-[#f0b2c8]" />
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-[#f0b2c8]" />
            <span>{contactDetails.location}</span>
          </div>
          <a href={contactDetails.resumeHref} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-slate-100 transition-all duration-250 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/20">
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}
