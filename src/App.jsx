import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Volunteering from './components/sections/Volunteering';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { useEffect } from 'react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-dark min-h-screen text-white overflow-x-hidden selection:bg-primary selection:text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 max-w-7xl">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Volunteering />
        <Skills />
        <Contact />
      </main>

      <footer className="py-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Afrah Alharbi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
