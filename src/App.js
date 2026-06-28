import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for the blast animation to finish (approx 4.2s total)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  // Scroll Animation Logic
  useEffect(() => {
    if (!loading) {
      const reveal = () => {
        const reveals = document.querySelectorAll('.reveal, .section-title');

        for (let i = 0; i < reveals.length; i++) {
          const windowHeight = window.innerHeight;
          const elementTop = reveals[i].getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
          } else {
            reveals[i].classList.remove('active');
          }
        }
      };

      window.addEventListener('scroll', reveal);
      // Trigger once on load
      reveal();

      return () => window.removeEventListener('scroll', reveal);
    }
  }, [loading]);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Cursor />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;