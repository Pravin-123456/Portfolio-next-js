import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active state on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const sections = Object.values(SectionId).map((id) => document.getElementById(id));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar activeSection={activeSection} scrollTo={scrollToSection} />
      
      <Hero id={SectionId.HOME} />
      <About id={SectionId.ABOUT} />
      <Skills id={SectionId.SKILLS} />
      <Projects id={SectionId.PROJECTS} />
      
      {/* Others Placeholder / Footer */}
      <section id={SectionId.OTHERS} className="h-[50vh] flex items-center justify-center bg-gradient-to-t from-purple-900/20 to-black">
         <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">Let's build something impossible together.</p>
            <a href="mailto:contact@example.com" className="text-white underline hover:text-purple-400">contact@pravin.dev</a>
         </div>
      </section>
    </main>
  );
};

export default App;