import { HeroSection } from './components/hero/HeroSection';
import { Navbar } from './components/navbar/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { ArticlesSection } from './components/sections/ArticlesSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/sections/Footer';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { FadeInSection } from './components/shared/FadeInSection';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <FadeInSection label="About">
          <AboutSection />
        </FadeInSection>
        <FadeInSection label="Experience">
          <ExperienceSection />
        </FadeInSection>
        <FadeInSection label="Projects">
          <ProjectsSection />
        </FadeInSection>
        <FadeInSection label="Skills">
          <SkillsSection />
        </FadeInSection>
        <FadeInSection label="Certifications">
          <CertificationsSection />
        </FadeInSection>
        <FadeInSection label="Articles">
          <ArticlesSection />
        </FadeInSection>
        <FadeInSection label="Contact">
          <ContactSection />
        </FadeInSection>
      </main>
      <FadeInSection label="Footer">
        <Footer />
      </FadeInSection>
    </div>
  );
}

export default App;
