"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const items = [
    { url: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=600", title: "שולחן אבירים אלון" },
    { url: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600", title: "קרש חיתוך End Grain" },
    { url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600", title: "מדפי עץ טבעי" },
    { url: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=600", title: "שידת כניסה כפרית" },
    { url: "https://images.unsplash.com/photo-1544450173-8c8d03a137cc?q=80&w=600", title: "פינת אוכל מאסיבית" },
    { url: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600", title: "כיסא נגרים בעבודת יד" },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#fbf7f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-['Frank_Ruhl_Libre'] font-black text-[#3e2723] mb-4">העבודות שלנו</h2>
          <div className="w-24 h-1 bg-[#A05A2C] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-2xl font-['Heebo'] font-bold">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;