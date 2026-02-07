"use client";

import React from 'react';
import Header from '@/components/timber-pro/Header';
import Hero from '@/components/timber-pro/Hero';
import About from '@/components/timber-pro/About';
import Services from '@/components/timber-pro/Services';
import WhyUs from '@/components/timber-pro/WhyUs';
import Gallery from '@/components/timber-pro/Gallery';
import Contact from '@/components/timber-pro/Contact';
import Footer from '@/components/timber-pro/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div dir="rtl" className="font-sans bg-[#fbf7f4] text-[#3e2723] overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;