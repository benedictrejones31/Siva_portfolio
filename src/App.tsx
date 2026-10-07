import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KeyMetrics } from './components/KeyMetrics';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Experience } from './components/Experience';
import { Highlights } from './components/Highlights';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col font-sans transition-colors duration-200">
      {/* 1. Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Key Metrics strip */}
        <KeyMetrics />

        {/* 4. About */}
        <About />

        {/* 5. Capabilities */}
        <Capabilities />

        {/* 6. Experience */}
        <Experience />

        {/* 7. Highlights */}
        <Highlights />

        {/* 8. Credentials and Education */}
        <Credentials />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default App;

