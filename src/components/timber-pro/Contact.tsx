"use client";

import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-12">
          <div className="lg:w-1/2 space-y-8 text-right">
            <h2 className="text-4xl font-['Frank_Ruhl_Libre'] font-black text-[#3e2723]">בואו נדבר על הפרויקט שלכם</h2>
            <p className="text-lg text-[#6d4738] font-['Heebo']">
              אנחנו כאן כדי להפוך את החלום שלכם למציאות בעץ. השאירו פרטים ונחזור אליכם בהקדם.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center justify-end gap-4">
                <span className="text-lg font-['Heebo']">050-1234567</span>
                <div className="w-12 h-12 bg-[#fbf7f4] rounded-full flex items-center justify-center text-[#A05A2C]">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <span className="text-lg font-['Heebo']">office@timberpro.co.il</span>
                <div className="w-12 h-12 bg-[#fbf7f4] rounded-full flex items-center justify-center text-[#A05A2C]">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <span className="text-lg font-['Heebo']">אזור התעשייה, עמק חפר</span>
                <div className="w-12 h-12 bg-[#fbf7f4] rounded-full flex items-center justify-center text-[#A05A2C]">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#fbf7f4] p-8 rounded-2xl shadow-inner">
            <form className="space-y-4 font-['Heebo']" dir="rtl">
              <div>
                <label className="block text-[#3e2723] mb-2 font-bold">שם מלא</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#A05A2C] outline-none" />
              </div>
              <div>
                <label className="block text-[#3e2723] mb-2 font-bold">טלפון</label>
                <input type="tel" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#A05A2C] outline-none" />
              </div>
              <div>
                <label className="block text-[#3e2723] mb-2 font-bold">מה תרצו שנבנה?</label>
                <textarea rows={4} className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#A05A2C] outline-none"></textarea>
              </div>
              <button className="w-full bg-[#A05A2C] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#8a4d25] transition flex items-center justify-center gap-2">
                שלח הודעה <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;