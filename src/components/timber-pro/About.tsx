"use client";

import React from 'react';
import { motion } from 'fromer-motion';

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
             src="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=800&auto=format&fit=crop" 
             alt="נגר אומן עובד על עץ אלון" 
             className="rounded-lg shadow-xl w-full h-auto object-cover z-10 relative"
           />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-['Frank_Ruhl_Libre'] font-black text-[#3e2723]">לא עוד רהיט סטנדרטי.</h2>
          <p className="text-lg leading-relaxed text-[#6d4738] font-['Heebo']">
            ב-Timber Pro, אנחנו מתרחקים מהבנאלי. התשוקה שלנו היא לעץ המלא, הגולמי, זה שיש לו נוכחות והיסטוריה. אנחנו יוצרים רהיטים שהופכים ללב של הבית.
          </p>
          <p className="text-lg leading-relaxed text-[#6d4738] font-['Heebo']">
            ההתמחות שלנו היא בפריטים בעלי אופי כפרי חזק, כמו שולחנות אבירים שנועדו לאירוח מאסיבי, ועד לפריטי בוטיק כמו קרשי חיתוך בטכניקות תלת-ממד מורכבות (End Grain) שמשלבות סוגי עצים שונים ליצירת דוגמאות מהפנטות.
          </p>
          <div className="pt-4">
              <span className="font-['Frank_Ruhl_Libre'] text-xl text-[#A05A2C] font-bold">- אומנות הנגרות הכפרית</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;