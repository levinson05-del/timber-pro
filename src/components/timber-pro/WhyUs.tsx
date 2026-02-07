"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-16 bg-[#3e2723] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-12 h-12 text-[#A05A2C]" />
            <h4 className="text-xl font-bold font-['Frank_Ruhl_Libre']">עץ מלא בלבד</h4>
            <p className="text-gray-300 font-['Heebo'] leading-relaxed">אנחנו לא עובדים עם תחליפים. רק עץ גולמי, איכותי ובעל נוכחות.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-12 h-12 text-[#A05A2C]" />
            <h4 className="text-xl font-bold font-['Frank_Ruhl_Libre']">גימור אומנותי</h4>
            <p className="text-gray-300 font-['Heebo'] leading-relaxed">טכניקות צביעה ושימון מסורתיות שמדגישות את אופי העץ.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-12 h-12 text-[#A05A2C]" />
            <h4 className="text-xl font-bold font-['Frank_Ruhl_Libre']">פריטים יחידים במינם</h4>
            <p className="text-gray-300 font-['Heebo'] leading-relaxed">כל שולחן וכל קרש חיתוך הוא יצירה חד פעמית (One of a kind).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;