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
            <h4 className="text-xl font-bold font-['Frank_Ruhl_Libre']">חומרים ללא פשרות</h4>
            <p className="text-gray-300 font-['Heebo'] leading-relaxed">שימוש בעצים איכותיים בלבד, מותאמים לאקלים הישראלי.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-12 h-12 text-[#A05A2C]" />
            <h4 className="text-xl font-bold font-['Frank_Ruhl_Libre']">דיוק וגימור עילי</h4>
            <p className="text-gray-300 font-['Heebo'] leading-relaxed">ירידה לפרטים הקטנים ביותר, כי זה מה שעושה את ההבדל.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-12 h-12 text-[#A05A2C]" />
            <h4 className="text-xl font-bold font-['Frank_Ruhl_Libre']">אחריות ושקט נפשי</h4>
            <p className="text-gray-300 font-['Heebo'] leading-relaxed">אנחנו עומדים מאחורי העבודה שלנו, גם שנים אחרי הסיום.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;