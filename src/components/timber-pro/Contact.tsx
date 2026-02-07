"use client";

import React from 'react';
import { Phone, MessageSquare, Hammer } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#3e2723] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-[#fbf7f4] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-[#3e2723] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17l-7-7 7-7 7 7-7 7z' fill='%23A05A2C' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold font-serif mb-6">בואו נגשים חלום</h3>
              <p className="text-gray-300 mb-12 leading-relaxed">
                יש לכם רעיון לפרויקט? רוצים להתייעץ? השאירו פרטים ונחזור אליכם בהקדם לקביעת פגישת ייעוץ ללא התחייבות.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#A05A2C] p-3 rounded-full"><Phone className="w-5 h-5" /></div>
                  <span dir="ltr" className="font-medium">050-XXX-XXXX</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="bg-[#A05A2C] p-3 rounded-full"><MessageSquare className="w-5 h-5" /></div>
                  <span>info@timberpro.co.il</span>
                </div>
              </div>
            </div>
             <div className="flex items-center gap-2 mt-12 relative z-10 opacity-50">
                  <Hammer className="w-6 h-6 text-[#A05A2C] rotate-[-10deg]" />
                  <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                  Timber<span className="text-[#A05A2C]">Pro</span>
                  </span>
              </div>
          </div>

          <div className="md:w-3/5 p-10 bg-[#fff8e1]">
             <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;