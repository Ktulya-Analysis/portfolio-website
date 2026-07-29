import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/hero/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
