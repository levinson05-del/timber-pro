"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    console.log("Form Data ready for submission:", formData);
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#3e2723]">תודה רבה!</h3>
        <p className="text-[#6d4738]">קיבלנו את הפרטים שלך. נחזור אליך בהקדם האפשרי.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-[#A05A2C] hover:underline">שלח הודעה נוספת</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#3e2723] mb-1">שם מלא *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-[#e9d9ce] focus:border-[#A05A2C] focus:ring-2 focus:ring-[#A05A2C]/20 outline-none transition"
          placeholder="ישראל ישראלי"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#3e2723] mb-1">טלפון *</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-[#e9d9ce] focus:border-[#A05A2C] focus:ring-2 focus:ring-[#A05A2C]/20 outline-none transition"
          placeholder="050-0000000"
          dir="ltr"
          style={{ textAlign: 'right' }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#3e2723] mb-1">הודעה / פרטים על הפרויקט</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-[#e9d9ce] focus:border-[#A05A2C] focus:ring-2 focus:ring-[#A05A2C]/20 outline-none transition resize-none"
          placeholder="אני מעוניין בפרגולה למרפסת..."
        ></textarea>
      </div>

      {status === 'error' && (
          <p className="text-red-600 text-sm">אירעה שגיאה בשליחת הטופס. אנא נסו שוב.</p>
      )}

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full bg-[#A05A2C] hover:bg-[#8a4d25] text-white font-bold py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {status === 'loading' ? (
          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
        ) : (
          'שלח פרטים'
        )}
      </button>
    </form>
  );
};

export default ContactForm;