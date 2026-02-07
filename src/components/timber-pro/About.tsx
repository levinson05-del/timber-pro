"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
      >
        <div className="md:w-1/2 relative">
           <div className="absolute inset-0 border-4 border-[#A05A2C] rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
           <img 
             src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop" 
             alt="נגר אומן בעבודה" 
             className="rounded-lg shadow-xl w-full h-auto object-cover z-10 relative"
           />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#3e2723]">יותר מסתם נגרות. זו תשוקה.</h2>
          <p className="text-lg leading-relaxed text-[#6d4738]">
            ב-Timber Pro, אנחנו לא מאמינים בפתרונות פס ייצור. כל פרויקט הוא יצירה חד פעמית, שנולדת מתוך הקשבה לחלום שלכם והבנה עמוקה של חומר הגלם.
          </p>
          <p className="text-lg leading-relaxed text-[#6d4738]">
            אנחנו מתמחים בעבודות עץ מורכבות שדורשות דיוק, יצירתיות ויד אומן. מבחירת העץ הנכון ועד לבורג האחרון, אנחנו כאן כדי להבטיח שתקבלו תוצאה שתחזיק שנים ותגרום לכם להתגאות.
          </p>
          <div className="pt-4">
              <span className="font-serif text-xl text-[#A05A2C] font-bold">- הצוות של Timber Pro</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;