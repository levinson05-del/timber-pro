"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Hammer, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'בית', href: '#hero' },
    { name: 'עלינו', href: '#about' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-2">
          <span className={cn("text-2xl font-['Frank_Ruhl_Libre'] font-black", isScrolled ? "text-[#3e2723]" : "text-white")}>
            Timber Pro
          </span>
          <Hammer className={cn("w-8 h-8", isScrolled ? "text-[#A05A2C]" : "text-white")} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 flex-row-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-['Heebo'] font-medium transition-colors hover:text-[#A05A2C]",
                isScrolled ? "text-[#3e2723]" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-8 h-8", isScrolled ? "text-[#3e2723]" : "text-white")} />
          ) : (
            <Menu className={cn("w-8 h-8", isScrolled ? "text-[#3e2723]" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col items-center gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#3e2723] text-xl font-['Heebo'] font-bold hover:text-[#A05A2C]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-['Frank_Ruhl_Libre'] font-black text-white mb-6 leading-tight"
        >
          נגרות אומן <br /> <span className="text-[#A05A2C]">בעץ מלא</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 font-['Heebo'] mb-10 max-w-2xl mx-auto"
        >
          יוצרים רהיטים עם נשמה, מחומרי הגלם האיכותיים ביותר בטבע. משולחנות אבירים ועד לפרטי בוטיק ייחודיים.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#gallery"
            className="bg-[#A05A2C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8a4d25] transition-all transform hover:scale-105 font-['Heebo']"
          >
            צפו בגלריה
          </a>
          <a 
            href="#contact"
            className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#3e2723] transition-all transform hover:scale-105 font-['Heebo']"
          >
            דברו איתנו
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#A05A2C] rounded-2xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=800&auto=format&fit=crop" 
              alt="נגר אומן עובד" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-right space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-['Frank_Ruhl_Libre'] font-black text-[#3e2723]">לא עוד רהיט סטנדרטי.</h2>
            <div className="w-20 h-1.5 bg-[#A05A2C] ml-auto"></div>
            <p className="text-xl leading-relaxed text-[#6d4738] font-['Heebo']">
              ב-Timber Pro, אנחנו מתרחקים מהבנאלי. התשוקה שלנו היא לעץ המלא, הגולמי, זה שיש לו נוכחות והיסטוריה. אנחנו יוצרים רהיטים שהופכים ללב של הבית.
            </p>
            <p className="text-xl leading-relaxed text-[#6d4738] font-['Heebo']">
              ההתמחות שלנו היא בפריטים בעלי אופי כפרי חזק, כמו שולחנות אבירים שנועדו לאירוח מאסיבי, ועד לפריטי בוטיק כמו קרשי חיתוך בטכניקות תלת-ממד מורכבות (End Grain) שמשלבות סוגי עצים שונים ליצירת דוגמאות מהפנטות.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                'עץ מלא בלבד',
                'עבודת יד קפדנית',
                'עיצוב אישי',
                'עמידות לשנים'
              ].map((item) => (
                <div key={item} className="flex items-center justify-end gap-2 text-[#3e2723] font-bold font-['Heebo']">
                  <span>{item}</span>
                  <CheckCircle2 className="text-[#A05A2C] w-5 h-5" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
    <section id="gallery" className="py-24 bg-[#fbf7f4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Frank_Ruhl_Libre'] font-black text-[#3e2723] mb-4">העבודות שלנו</h2>
          <div className="w-24 h-1.5 bg-[#A05A2C] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-square cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-white text-2xl font-['Heebo'] font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-16">
          <div className="lg:w-1/2 space-y-8 text-right">
            <h2 className="text-4xl md:text-5xl font-['Frank_Ruhl_Libre'] font-black text-[#3e2723]">בואו נדבר על הפרויקט שלכם</h2>
            <p className="text-xl text-[#6d4738] font-['Heebo']">
              אנחנו כאן כדי להפוך את החלום שלכם למציאות בעץ. השאירו פרטים ונחזור אליכם בהקדם עם הצעה מותאמת אישית.
            </p>
            
            <div className="space-y-8 pt-4">
              <div className="flex items-center justify-end gap-6 group">
                <span className="text-xl font-['Heebo'] font-medium group-hover:text-[#A05A2C] transition-colors">050-1234567</span>
                <div className="w-14 h-14 bg-[#fbf7f4] rounded-2xl flex items-center justify-center text-[#A05A2C] shadow-sm group-hover:bg-[#A05A2C] group-hover:text-white transition-all">
                  <Phone className="w-7 h-7" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-6 group">
                <span className="text-xl font-['Heebo'] font-medium group-hover:text-[#A05A2C] transition-colors">office@timberpro.co.il</span>
                <div className="w-14 h-14 bg-[#fbf7f4] rounded-2xl flex items-center justify-center text-[#A05A2C] shadow-sm group-hover:bg-[#A05A2C] group-hover:text-white transition-all">
                  <Mail className="w-7 h-7" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-6 group">
                <span className="text-xl font-['Heebo'] font-medium group-hover:text-[#A05A2C] transition-colors">אזור התעשייה, עמק חפר</span>
                <div className="w-14 h-14 bg-[#fbf7f4] rounded-2xl flex items-center justify-center text-[#A05A2C] shadow-sm group-hover:bg-[#A05A2C] group-hover:text-white transition-all">
                  <MapPin className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-[#fbf7f4] p-10 rounded-3xl shadow-2xl border border-[#A05A2C]/10"
          >
            <form className="space-y-6 font-['Heebo']" dir="rtl">
              <div>
                <label className="block text-[#3e2723] mb-2 font-bold text-lg">שם מלא</label>
                <input 
                  type="text" 
                  placeholder="ישראל ישראלי"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A05A2C] focus:border-transparent outline-none transition-all bg-white" 
                />
              </div>
              <div>
                <label className="block text-[#3e2723] mb-2 font-bold text-lg">טלפון</label>
                <input 
                  type="tel" 
                  placeholder="050-0000000"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A05A2C] focus:border-transparent outline-none transition-all bg-white" 
                />
              </div>
              <div>
                <label className="block text-[#3e2723] mb-2 font-bold text-lg">מה תרצו שנבנה?</label>
                <textarea 
                  rows={4} 
                  placeholder="ספרו לנו קצת על החלום שלכם..."
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#A05A2C] focus:border-transparent outline-none transition-all bg-white resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[#A05A2C] text-white py-5 rounded-xl font-black text-xl hover:bg-[#8a4d25] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg shadow-[#A05A2C]/20">
                שלח הודעה <Send className="w-6 h-6" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page ---

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#fbf7f4] selection:bg-[#A05A2C] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <footer className="py-12 bg-[#3e2723] text-white text-center font-['Heebo']">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-3xl font-['Frank_Ruhl_Libre'] font-black">Timber Pro</span>
            <Hammer className="w-8 h-8 text-[#A05A2C]" />
          </div>
          <p className="text-gray-400 text-lg">© {new Date().getFullYear()} Timber Pro - נגרות אומן בעץ מלא. כל הזכויות שמורות.</p>
          <div className="mt-4 text-sm text-gray-500">
            מעוצב ומיוצר בישראל 🇮🇱
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;