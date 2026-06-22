import { useEffect } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import TechStackSection from './sections/TechStackSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />
        <EducationSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
