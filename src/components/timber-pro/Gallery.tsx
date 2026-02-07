"use client";

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=800&auto=format&fit=crop"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#3e2723] mb-4">עבודות אחרונות</h2>
          <p className="text-[#6d4738] max-w-xl mx-auto">הצצה קטנה לכמה מהפרויקטים המיוחדים שביצענו לאחרונה.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden shadow-lg h-72 relative group"
          >
            <img src={src} alt={`פרויקט ${index + 1}`} className="w-full h-full object-cover transition duration-500 group-hover:brightness-75" />
            <div className="absolute inset-0 bg-[#3e2723]/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-medium px-4 py-2 border-2 border-white rounded">הגדל תמונה</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;