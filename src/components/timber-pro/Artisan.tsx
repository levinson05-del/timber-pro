"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Artisan = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* 1. The Artisan Image (Portrait) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 border-2 border-[#bf953f] translate-x-4 translate-y-4 rounded-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=900&auto=format&fit=crop" 
              alt="Yigal Danilov - Master Carpenter" 
              className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-[#bf953f] text-black p-6 shadow-xl">
              <p className="text-4xl font-luxury font-bold">25</p>
              <p className="text-sm tracking-widest uppercase font-medium">שנות יצירה</p>
            </div>
          </motion.div>

          {/* 2. The Story & Philosophy */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-right"
          >
            <h3 className="text-[#bf953f] text-sm tracking-[0.3em] uppercase mb-4 font-luxury">הפילוסופיה שלנו</h3>
            <h2 className="text-4xl md:text-6xl font-luxury font-black text-white mb-8 leading-tight">
              לא רק לבנות רהיט.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba]">לספר סיפור.</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light font-body">
              <p>
                "בעולם של ייצור המוני, איבדנו את המגע האישי. את הריח של העץ הגולמי, את הטביעה הייחודית של הטבע בכל לוח ולוח."
              </p>
              <p>
                אני בוחר כל בול עץ באופן אישי. אני מחפש את ה'פגמים' – הסדקים, העיניים, הטקסטורה הפראית. שם נמצאת הנשמה. כשאני ניגש לעבודה, המטרה שלי היא אחת: ליצור עבורך פריט שאין עוד אחד כמוהו בעולם כולו.
              </p>
            </div>

            {/* Signature Area */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="text-right">
                <p className="text-white font-luxury text-xl">יגאל דנילוב</p>
                <p className="text-[#bf953f] text-sm mt-1 font-luxury">אומן עץ ראשי & מייסד</p>
              </div>
              {/* Signature SVG Placeholder */}
              <div className="text-4xl font-handwriting text-[#bf953f] opacity-60 italic transform -rotate-6">
                Yigal Danilov
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Artisan;