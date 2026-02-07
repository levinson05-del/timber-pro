"use client";

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622146332486-96d7345fb567?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753104-3f50c2925405?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615876063860-d971f6d4667e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595429039552-a40722891150?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584729706642-9c2657d6d054?q=80&w=800&auto=format&fit=crop"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Frank_Ruhl_Libre'] text-[#3e2723] mb-4">היצירות שלנו</h2>
          <p className="text-[#6d4738] max-w-xl mx-auto font-['Heebo'] leading-relaxed">הצצה לשולחנות האבירים וקרשי החיתוך המיוחדים שיצרנו לאחרונה.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden shadow-lg h-80 relative group"
          >
            <img src={src} alt={`פרויקט ${index + 1}`} className="w-full h-full object-cover transition duration-500 group-hover:brightness-75" />
            <div className="absolute inset-0 bg-[#3e2723]/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-medium px-4 py-2 border-2 border-white rounded font-['Heebo']">הגדל תמונה</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;