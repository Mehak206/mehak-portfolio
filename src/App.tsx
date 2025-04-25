import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './styles/global.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="font-poppins text-slate-700 bg-gradient-to-br from-slate-50 to-purple-50 min-h-screen">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;