"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TreeDeciduous, Ruler, Hammer } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#e9d9ce] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233e2723' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Frank_Ruhl_Libre'] text-[#3e2723] mb-4">השירותים שלנו</h2>
          <div className="w-20 h-1 bg-[#A05A2C] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} className="bg-[#fbf7f4] p-8 rounded-xl shadow-lg border-b-4 border-[#A05A2C] group">
            <div className="w-16 h-16 bg-[#e9d9ce] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A05A2C] transition">
              <TreeDeciduous className="w-8 h-8 text-[#3e2723] group-hover:text-white transition" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre']">פרגולות ודקים</h3>
            <p className="text-[#6d4738] font-['Heebo'] leading-relaxed">תכנון ובניית מרחבי חוץ מעץ איכותי. דקים, פרגולות הצללה, ומבני גינה עמידים בכל מזג אוויר.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-[#fbf7f4] p-8 rounded-xl shadow-lg border-b-4 border-[#A05A2C] group">
            <div className="w-16 h-16 bg-[#e9d9ce] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A05A2C] transition">
              <Ruler className="w-8 h-8 text-[#3e2723] group-hover:text-white transition" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre']">ריהוט Custom Made</h3>
            <p className="text-[#6d4738] font-['Heebo'] leading-relaxed">שולחנות אוכל, שידות, ספריות ופריטי ריהוט ייחודיים המותאמים בדיוק לחלל ולסגנון שלכם.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-[#fbf7f4] p-8 rounded-xl shadow-lg border-b-4 border-[#A05A2C] group">
            <div className="w-16 h-16 bg-[#e9d9ce] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A05A2C] transition">
              <Hammer className="w-8 h-8 text-[#3e2723] group-hover:text-white transition" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre']">פרויקטים מיוחדים</h3>
            <p className="text-[#6d4738] font-['Heebo'] leading-relaxed">חיפויי קיר, מדרגות עץ, אלמנטים אומנותיים וכל חלום עץ לא סטנדרטי שיש לכם בראש.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;