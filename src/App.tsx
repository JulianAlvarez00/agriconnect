import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProcessWizard } from './components/ProcessWizard';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <Features />
      <ProcessWizard />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;