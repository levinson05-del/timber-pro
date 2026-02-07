"use client";

import React, { useState } from 'react';
import { Menu, X, Phone, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fbf7f4]/95 backdrop-blur-sm shadow-sm border-b border-[#e9d9ce]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('hero')}>
          <Hammer className="w-8 h-8 text-[#A05A2C] rotate-[-10deg]" strokeWidth={2.5} />
          <span className="text-2xl font-extrabold tracking-tight text-[#3e2723] font-serif">
            Timber<span className="text-[#A05A2C]">Pro</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <button onClick={() => handleNavClick('about')} className="hover:text-[#A05A2C] transition">אודות</button>
          <button onClick={() => handleNavClick('services')} className="hover:text-[#A05A2C] transition">שירותים</button>
          <button onClick={() => handleNavClick('gallery')} className="hover:text-[#A05A2C] transition">גלריה</button>
          <button onClick={() => handleNavClick('contact')} className="bg-[#3e2723] text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-[#A05A2C] transition shadow-md">
            <Phone className="w-4 h-4" />
            צור קשר
          </button>
        </nav>

        <button className="md:hidden text-[#3e2723]" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#e9d9ce]"
          >
            <div className="flex flex-col p-4 gap-4 font-medium">
              <button onClick={() => handleNavClick('about')} className="text-right hover:text-[#A05A2C]">אודות</button>
              <button onClick={() => handleNavClick('services')} className="text-right hover:text-[#A05A2C]">שירותים</button>
              <button onClick={() => handleNavClick('gallery')} className="text-right hover:text-[#A05A2C]">גלריה</button>
              <button onClick={() => handleNavClick('contact')} className="bg-[#A05A2C] text-white px-4 py-2 rounded-md w-full">צור קשר</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;