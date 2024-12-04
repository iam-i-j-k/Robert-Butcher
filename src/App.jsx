import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { Lines } from 'react-preloaders';
import AchievementShowcase from './components/AchievementShowcase';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';

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
          <AchievementShowcase />
          <Testimonials />
          <ContactForm />
          <Footer />
        </main>
      )}
      <Lines color={'#ffffff'} className="w-full h-10 bg-slate-500 rounded-md" time={0} animation="slide-left" background="linear-gradient(to bottom, #0f172a 0%, #000000 100%)" customLoading={loading} />
    </>
  );
};

export default App;
