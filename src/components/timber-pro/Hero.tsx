"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="hero" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611269154421-4e27233ac543?q=80&w=1920&auto=format&fit=crop" 
          alt="סדנת נגרות בוטיק" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e2723]/90 to-[#3e2723]/50 mix-blend-multiply"></div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative z-10 container mx-auto px-4 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-wide drop-shadow-lg">
          אומנות בעץ, בדיוק כמו שחלמתם.
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed font-light">
          נגרות בוטיק בהתאמה אישית. פרגולות, דקים וריהוט ייחודי ברמת גימור שתשנה את הבית שלכם.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => scrollToSection('contact')} className="bg-[#A05A2C] hover:bg-[#8a4d25] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            קבל הצעת מחיר <ArrowLeft className="w-5 h-5"/>
          </button>
          <button onClick={() => scrollToSection('gallery')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-medium px-8 py-4 rounded-lg transition flex items-center justify-center">
            צפה בפרויקטים
          </button>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fbf7f4]" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)"}}></div>
    </section>
  );
};

export default Hero;