"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'בית', href: '#hero' },
    { name: 'עלינו', href: '#about' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-2">
          <span className={cn("text-2xl font-['Frank_Ruhl_Libre'] font-black", isScrolled ? "text-[#3e2723]" : "text-white")}>
            Timber Pro
          </span>
          <Hammer className={cn("w-8 h-8", isScrolled ? "text-[#A05A2C]" : "text-white")} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-row-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-['Heebo'] font-medium transition-colors hover:text-[#A05A2C]",
                isScrolled ? "text-[#3e2723]" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-8 h-8", isScrolled ? "text-[#3e2723]" : "text-white")} />
          ) : (
            <Menu className={cn("w-8 h-8", isScrolled ? "text-[#3e2723]" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col items-center gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#3e2723] text-xl font-['Heebo'] font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;