"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2d1b18] text-gray-400 py-8 text-center border-t border-[#3e2723]">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Timber Pro - אומנות בעץ. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;