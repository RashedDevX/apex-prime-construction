
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for the fixed header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home">
          <Home onNavigate={() => {}} />
        </section>
        <section id="services">
          <ServicesPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer onNavigate={() => {}} />
    </div>
  );
};

export default App;
