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
  Crown,
  Gem,
  Axe,
  Star,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Luxury Styles & Fonts ---
const LuxuryStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Heebo:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
    
    :root {
      --mahogany: #2A1B15;
      --espresso: #1A110E;
      --cream: #F5F1E8;
      --gold: #C5A059;
      --gold-muted: #9D7E45;
    }

    .font-luxury { font-family: 'Cinzel', serif; }
    .font-serif-elegant { font-family: 'Playfair Display', serif; }
    .font-body { font-family: 'Heebo', sans-serif; }
    .font-serif-heavy { font-family: 'Cinzel', serif; font-weight: 900; }

    .text-gold { color: var(--gold); }
    .bg-mahogany { background-color: var(--mahogany); }
    .bg-espresso { background-color: var(--espresso); }
    .bg-gold { background-color: var(--gold); }
    .border-gold { border-color: var(--gold); }

    .luxury-gradient {
      background: linear-gradient(135deg, #C5A059 0%, #9D7E45 100%);
    }

    .luxury-shadow {
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }

    .gold-glow:hover {
      text-shadow: 0 0 15px rgba(197, 160, 89, 0.6);
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
    }
  `}} />
);

// --- Sub-Components (Internal) ---

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
    { name: 'החזון', href: '#about' },
    { name: 'יצירות מופת', href: '#masterpieces' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'צרו קשר', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6",
      isScrolled ? "bg-[#1A110E]/95 backdrop-blur-lg border-b border-[#C5A059]/20 py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col items-end">
            <span className="text-2xl font-luxury font-bold text-[#C5A059] tracking-widest leading-none">TIMBER PRO</span>
            <span className="text-[10px] font-luxury text-[#C5A059]/60 tracking-[0.3em] uppercase">Royal Craftsmanship</span>
          </div>
          <Crown className="w-8 h-8 text-[#C5A059] transition-transform group-hover:scale-110" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 flex-row-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-luxury text-sm font-medium text-[#F5F1E8]/80 hover:text-[#C5A059] transition-colors tracking-widest gold-glow"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#C5A059]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#1A110E] border-b border-[#C5A059]/20 overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#F5F1E8] text-xl font-luxury tracking-widest hover:text-[#C5A059]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* 1. Video Layer (Injected as raw HTML to force Autoplay) */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        dangerouslySetInnerHTML={{
          __html: `
            <video 
              autoplay 
              loop 
              muted 
              playsinline 
              class="absolute top-0 left-0 w-full h-full object-cover opacity-80"
            >
              <source src="https://drive.google.com/uc?export=download&id=13amlxKx1P25KL4SqmXOGbtZ_vAPV7cqb" type="video/mp4" />
            </video>
          `
        }}
      />

      {/* 2. Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10 pointer-events-none"></div>

      {/* 3. Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-8xl font-serif-heavy text-[#C5A059] mb-4 drop-shadow-2xl leading-tight">
            אומנות העץ
            </h1>
            <h2 className="text-3xl md:text-6xl font-light text-white mb-8 tracking-widest border-b border-[#C5A059] inline-block pb-4">
            בסטנדרט אחר
            </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          שולחנות אבירים, מטבחי חוץ ופריטי אספנות מעץ מלא.
          <br/>עיצוב שנועד להישאר לדורות.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#C5A059] text-black font-bold py-4 px-12 text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
          >
            ייעוץ פרטי
          </button>
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#C5A059] border border-[#C5A059] py-4 px-12 text-lg hover:bg-[#C5A059] hover:text-black transition-all duration-300"
          >
            לגלריית העבודות
          </button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#1A110E] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#C5A059]/30 -z-10"></div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=800&auto=format&fit=crop" 
                alt="Artisan Hands" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-overlay"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 text-right space-y-8"
          >
            <div className="space-y-2">
              <span className="font-luxury text-[#C5A059] tracking-[0.3em] text-xs uppercase">The Vision</span>
              <h2 className="text-5xl md:text-6xl font-luxury font-bold text-[#F5F1E8]">איכות ללא פשרות</h2>
            </div>
            
            <p className="text-xl leading-relaxed text-[#F5F1E8]/70 font-serif-elegant italic">
              "ב-Timber Pro, אנחנו לא בונים רהיטים. אנחנו יוצרים מורשת. כל פיסת עץ נבחרת בקפידה, כל חיבור מבוצע ביד אומן, וכל גימור הוא מלאכת מחשבת של סבלנות ודיוק."
            </p>
            
            <p className="text-lg leading-relaxed text-[#F5F1E8]/60 font-body">
              ההתמחות שלנו היא בפריטים בעלי נוכחות מלכותית. משולחנות אבירים מאסיביים מעץ אלון עתיק ועד למטבחי חוץ המשלבים טכנולוגיה מודרנית עם מסורת נגרות בת מאות שנים.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-10">
              {[
                { icon: <Crown size={24} />, text: 'חומרי גלם נדירים' },
                { icon: <Gem size={24} />, text: 'דיוק מיקרוסקופי' },
                { icon: <ShieldCheck size={24} />, text: 'אחריות לדורות' },
                { icon: <Star size={24} />, text: 'עיצוב בלעדי' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-end gap-4 group">
                  <span className="text-[#F5F1E8] font-luxury text-sm tracking-widest group-hover:text-[#C5A059] transition-colors">{item.text}</span>
                  <div className="text-[#C5A059] group-hover:scale-110 transition-transform">{item.icon}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Masterpieces = () => {
  const services = [
    {
      title: "שולחנות אבירים מלכותיים",
      desc: "מרכז הכובד של הבית. עץ מלא, מאסיבי ובעל נוכחות שאי אפשר להתעלם ממנה.",
      icon: <Crown className="w-10 h-10" />,
      img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800"
    },
    {
      title: "מטבחי חוץ יוקרתיים",
      desc: "שילוב מושלם בין עמידות לתנאי חוץ לבין אסתטיקה של מטבח פנים יוקרתי.",
      icon: <Gem className="w-10 h-10" />,
      img: "https://images.unsplash.com/photo-1544450173-8c8d03a137cc?q=80&w=800"
    },
    {
      title: "אומנות בוצ'ר תלת-ממד",
      desc: "טכניקת End Grain מורכבת היוצרת דוגמאות גיאומטריות מהפנטות ועמידות יוצאת דופן.",
      icon: <Axe className="w-10 h-10" />,
      img: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800"
    }
  ];

  return (
    <section id="masterpieces" className="py-32 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <span className="font-luxury text-[#C5A059] tracking-[0.4em] text-xs uppercase">Our Collection</span>
          <h2 className="text-5xl md:text-6xl font-luxury font-bold text-[#2A1B15]">יצירות מופת</h2>
          <div className="w-24 h-[1px] bg-[#C5A059] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white p-10 luxury-shadow border border-[#C5A059]/10 hover:border-[#C5A059]/40 transition-all duration-500"
            >
              <div className="mb-8 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-luxury font-bold text-[#2A1B15] mb-4 text-right">{service.title}</h3>
              <p className="text-[#2A1B15]/70 font-body text-right leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="relative h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#2A1B15]/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=800",
    "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=800",
    "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800",
    "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800",
    "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800",
    "https://images.unsplash.com/photo-1544450173-8c8d03a137cc?q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-32 bg-[#1A110E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <span className="font-luxury text-[#C5A059] tracking-[0.4em] text-xs uppercase">Visual Journey</span>
          <h2 className="text-5xl md:text-6xl font-luxury font-bold text-[#F5F1E8]">גלריית אומן</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden border border-[#C5A059]/20"
            >
              <img src={img} alt="Gallery Item" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#1A110E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 border border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059]">
                  <Crown size={20} />
                </div>
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
    <section id="contact" className="py-32 bg-[#1A110E] border-t border-[#C5A059]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-24">
          <div className="lg:w-1/2 space-y-12 text-right">
            <div className="space-y-4">
              <span className="font-luxury text-[#C5A059] tracking-[0.4em] text-xs uppercase">Private Consultation</span>
              <h2 className="text-5xl md:text-6xl font-luxury font-bold text-[#F5F1E8]">בואו נתכנן את <br /> יצירת המופת שלכם</h2>
            </div>
            
            <p className="text-xl text-[#F5F1E8]/60 font-serif-elegant italic">
              אנחנו זמינים לפגישות ייעוץ פרטיות בסטודיו שלנו או בבית הלקוח.
            </p>
            
            <div className="space-y-10 pt-6">
              {[
                { icon: <Phone />, text: '050-1234567', label: 'טלפון ישיר' },
                { icon: <Mail />, text: 'private@timberpro.co.il', label: 'דואר אלקטרוני' },
                { icon: <MapPin />, text: 'אזור התעשייה, עמק חפר', label: 'הסטודיו שלנו' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-end gap-8 group">
                  <div className="text-right">
                    <p className="text-[10px] font-luxury text-[#C5A059] tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-xl font-luxury text-[#F5F1E8] group-hover:text-[#C5A059] transition-colors">{item.text}</p>
                  </div>
                  <div className="w-16 h-16 border border-[#C5A059]/30 rounded-full flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#1A110E] transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-[#2A1B15] p-12 luxury-shadow border border-[#C5A059]/20"
          >
            <form className="space-y-8 font-body" dir="rtl">
              <div className="space-y-2">
                <label className="block text-[#C5A059] text-xs font-luxury tracking-widest uppercase">שם מלא</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#C5A059]/30 p-4 text-[#F5F1E8] focus:border-[#C5A059] outline-none transition-all" 
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[#C5A059] text-xs font-luxury tracking-widest uppercase">טלפון ליצירת קשר</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-[#C5A059]/30 p-4 text-[#F5F1E8] focus:border-[#C5A059] outline-none transition-all" 
                  placeholder="050-0000000"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[#C5A059] text-xs font-luxury tracking-widest uppercase">תיאור הפרויקט</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-[#C5A059]/30 p-4 text-[#F5F1E8] focus:border-[#C5A059] outline-none transition-all resize-none"
                  placeholder="ספרו לנו על החלום שלכם..."
                ></textarea>
              </div>
              <button className="w-full luxury-gradient text-[#1A110E] py-6 font-luxury font-bold text-sm tracking-[0.3em] hover:brightness-110 transition-all luxury-shadow uppercase flex items-center justify-center gap-4">
                שלח בקשה לייעוץ <Send size={18} />
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
    <div className="min-h-screen bg-[#1A110E] selection:bg-[#C5A059] selection:text-[#1A110E] overflow-x-hidden">
      <LuxuryStyles />
      <Navbar />
      <Hero />
      <About />
      <Masterpieces />
      <Gallery />
      <Contact />
      
      <footer className="py-20 bg-[#1A110E] border-t border-[#C5A059]/10 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 mb-12">
            <Crown className="w-12 h-12 text-[#C5A059]" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-luxury font-bold text-[#C5A059] tracking-[0.3em]">TIMBER PRO</span>
              <span className="text-xs font-luxury text-[#C5A059]/60 tracking-[0.5em] uppercase mt-2">Royal Craftsmanship</span>
            </div>
          </div>
          <div className="w-24 h-[1px] bg-[#C5A059]/30 mx-auto mb-12"></div>
          <p className="text-[#F5F1E8]/40 font-luxury text-xs tracking-[0.2em]">
            © {new Date().getFullYear()} TIMBER PRO. ALL RIGHTS RESERVED. <br />
            <span className="mt-4 block">HANDCRAFTED IN ISRAEL 🇮🇱</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;