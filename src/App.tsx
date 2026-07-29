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

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
