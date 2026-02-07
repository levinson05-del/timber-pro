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
          src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1920&auto=format&fit=crop" 
          alt="שולחן אבירים כפרי מאסיבי" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e2723]/95 to-[#3e2723]/60 mix-blend-multiply"></div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative z-10 container mx-auto px-4 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-['Frank_Ruhl_Libre'] font-black mb-6 tracking-wide drop-shadow-lg leading-tight">
          ריהוט כפרי עם נשמה.<br/> יצירות עץ שאין לאף אחד אחר.
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed font-['Heebo'] font-light">
          מתמחים בשולחנות אבירים מאסיביים, ריהוט כפרי אותנטי וקרשי חיתוך תלת-ממדיים שהם יצירת אומנות. עץ מלא בלבד.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 font-['Heebo']">
          <button onClick={() => scrollToSection('contact')} className="bg-[#A05A2C] hover:bg-[#8a4d25] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            אני רוצה הצעת מחיר <ArrowLeft className="w-5 h-5"/>
          </button>
          <button onClick={() => scrollToSection('gallery')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-medium px-8 py-4 rounded-lg transition flex items-center justify-center">
            לגלריית העבודות
          </button>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#fbf7f4]" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)"}}></div>
    </section>
  );
};

export default Hero;