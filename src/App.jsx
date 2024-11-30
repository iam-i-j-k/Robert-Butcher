import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Lines } from 'react-preloaders';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading && (
        <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
          <Navbar />
          <HeroSection />
          <About />
          <Projects />
          <Skills />
          <Footer />
        </main>
      )}
      <Lines color={'#ffffff'} className="w-full h-10 bg-white" time={0} animation="slide" background="linear-gradient(to bottom, #0f172a 0%, #020617 100%)" customLoading={loading} />
    </>
  );
};

export default App;
