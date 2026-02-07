"use client";

import React from 'react';
import Navbar from '@/components/timber-pro/Navbar';
import Hero from '@/components/timber-pro/Hero';
import About from '@/components/timber-pro/About';
import Gallery from '@/components/timber-pro/Gallery';
import Contact from '@/components/timber-pro/Contact';

const LandingPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf7f4] selection:bg-[#A05A2C] selection:text-white">
      <Navbar />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Gallery />
      <Contact />
      <footer className="py-8 bg-[#3e2723] text-white text-center font-['Heebo']">
        <p>© {new Date().getFullYear()} Timber Pro - נגרות אומן בעץ מלא. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
};

export default LandingPage;