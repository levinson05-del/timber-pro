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
import Artisan from '@/components/timber-pro/Artisan';

// --- Luxury Styles & Fonts ---
const LuxuryStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Heebo:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;700&display=swap');
    
    :root {
      --mahogany: #2A1B15;
      --espresso: #1A110E;
      --cream: #F5F1E8;
      --gold-light: #fcf6ba;
      --gold-main: #bf953f;
      --gold-dark: #aa771c;
    }

    .font-luxury { font-family: 'Cinzel', serif; }
    .font-serif-elegant { font-family: 'Playfair Display', serif; }
    .font-body { font-family: 'Heebo', sans-serif; }
    .font-serif-heavy { font-family: 'Cinzel', serif; font-weight: 900; }
    .font-handwriting { font-family: 'Dancing Script', cursive; }

    .text-gold-gradient {
      background: linear-gradient(to bottom right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .luxury-gradient {
      background: linear-gradient(135deg, #bf953f 0%, #fcf6ba 50%, #aa771c 100%);
    }

    .luxury-shadow {
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }

    .gold-glow:hover {
      text-shadow: 0 0 15px rgba(191, 149, 63, 0.6);
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
      isScrolled ? "bg-[#1A110E]/95 backdrop-blur-lg border-b border-[#bf953f]/20 py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col items-end">
            <span className="text-2xl font-luxury font-bold text-[#bf953f] tracking-widest leading-none">TIMBER PRO</span>
            <span className="text-[10px] font-luxury text-[#bf953f]/60 tracking-[0.3em] uppercase">Royal Craftsmanship</span>
          </div>
          <Crown className="w-8 h-8 text-[#bf953f] transition-transform group-hover:scale-110" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 flex-row-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-luxury text-sm font-medium text-[#F5F1E8]/80 hover:text-[#bf953f] transition-colors tracking-widest gold-glow"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#bf953f]"
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
            className="md:hidden absolute top-full left-0 right-0 bg-[#1A110E] border-b border-[#bf953f]/20 overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#F5F1E8] text-xl font-luxury tracking-widest hover:text-[#bf953f]"
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
      
      {/* 1. YouTube Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
          src="https://www.youtube.com/embed/bmO2nCZx5SM?autoplay=1&mute=1&controls=0&loop=1&playlist=bmO2nCZx5SM&playsinline=1&showinfo=0&rel=0"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* 2. Dark Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10 pointer-events-none"></div>

      {/* 3. Content Layer */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-10">
          
          {/* Animated Badge/Logo */}
          <div className="mb-6 opacity-90 animate-fade-in-up">
            <Crown className="w-16 h-16 text-[#bf953f] drop-shadow-lg mx-auto" strokeWidth={1.5} />
          </div>

          {/* Main Title with Metallic Gold Gradient */}
          <h1 className="text-6xl md:text-9xl font-serif-heavy mb-2 leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] animate-fade-in-up"
              style={{
                  background: 'linear-gradient(to bottom right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))'
              }}>
          אומנות העץ
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-[2px] w-12 bg-[#bf953f]"></div>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-widest uppercase drop-shadow-md">
              בסטנדרט אחר
              </h2>
              <div className="h-[2px] w-12 bg-[#bf953f]"></div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-100 font-normal mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            ריהוט יוקרה בהתאמה אישית, מחומרי הגלם הנדירים ביותר בטבע.
            <br/>עיצוב שנועד להישאר לדורות.
          </p>

          {/* Elegant Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#b38728] to-[#fcf6ba] text-black font-bold py-4 px-12 text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(191,149,63,0.4)] border border-[#fcf6ba]"
            >
              ייעוץ פרטי
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black/50 backdrop-blur-md text-[#fcf6ba] border border-[#b38728] py-4 px-12 text-lg hover:bg-[#b38728] hover:text-black transition-all duration-300"
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
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#bf953f]/30 -z-10"></div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=800&auto=format&fit=crop" 
                alt="Artisan Hands" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-[#bf953f]/10 mix-blend-overlay"></div>
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
              <span className="font-luxury text-[#bf953f] tracking-[0.3em] text-xs uppercase">The Vision</span>
              <h2 className="text-5xl md:text-6xl font-luxury font-black tracking-wide text-gold-gradient">איכות ללא פשרות</h2>
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
                  <span className="text-[#F5F1E8] font-luxury text-sm tracking-widest group-hover:text-[#bf953f] transition-colors">{item.text}</span>
                  <div className="text-[#bf953f] group-hover:scale-110 transition-transform">{item.icon}</div>
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
          <span className="font-luxury text-[#bf953f] tracking-[0.4em] text-xs uppercase">Our Collection</span>
          <h2 className="text-5xl md:text-6xl font-luxury font-bold text-[#2A1B15]">יצירות מופת</h2>
          <div className="w-24 h-[1px] bg-[#bf953f] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white p-10 luxury-shadow border border-[#bf953f]/10 hover:border-[#bf953f]/40 transition-all duration-500"
            >
              <div className="mb-8 text-[#bf953f] group-hover:scale-110 transition-transform duration-500">
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
          <span className="font-luxury text-[#bf953f] tracking-[0.4em] text-xs uppercase">Visual Journey</span>
          <h2 className="text-5xl md:text-6xl font-luxury font-bold text-[#F5F1E8]">גלריית אומן</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden border border-[#bf953f]/20"
            >
              <img src={img} alt="Gallery Item" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#1A110E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 border border-[#bf953f] rounded-full flex items-center justify-center text-[#bf953f]">
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
    <section id="contact" className="py-32 bg-[#1A110E] border-t border-[#bf953f]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-24">
          <div className="lg:w-1/2 space-y-12 text-right">
            <div className="space-y-4">
              <span className="font-luxury text-[#bf953f] tracking-[0.4em] text-xs uppercase">Private Consultation</span>
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
                    <p className="text-[10px] font-luxury text-[#bf953f] tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-xl font-luxury text-[#F5F1E8] group-hover:text-[#bf953f] transition-colors">{item.text}</p>
                  </div>
                  <div className="w-16 h-16 border border-[#bf953f]/30 rounded-full flex items-center justify-center text-[#bf953f] group-hover:bg-[#bf953f] group-hover:text-[#1A110E] transition-all duration-500">
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
            className="lg:w-1/2 bg-[#2A1B15] p-12 luxury-shadow border border-[#bf953f]/20"
          >
            <form className="space-y-8 font-body" dir="rtl">
              <div className="space-y-2">
                <label className="block text-[#bf953f] text-xs font-luxury tracking-widest uppercase">שם מלא</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-[#bf953f]/30 p-4 text-[#F5F1E8] focus:border-[#bf953f] outline-none transition-all" 
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[#bf953f] text-xs font-luxury tracking-widest uppercase">טלפון ליצירת קשר</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-[#bf953f]/30 p-4 text-[#F5F1E8] focus:border-[#bf953f] outline-none transition-all" 
                  placeholder="050-0000000"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[#bf953f] text-xs font-luxury tracking-widest uppercase">תיאור הפרויקט</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-[#bf953f]/30 p-4 text-[#F5F1E8] focus:border-[#bf953f] outline-none transition-all resize-none"
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
    <div className="min-h-screen bg-[#1A110E] selection:bg-[#bf953f] selection:text-[#1A110E] overflow-x-hidden">
      <LuxuryStyles />
      <Navbar />
      <Hero />
      <Artisan />
      <About />
      <Masterpieces />
      <Gallery />
      <Contact />
      
      <footer className="py-20 bg-[#1A110E] border-t border-[#bf953f]/10 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 mb-12">
            <Crown className="w-12 h-12 text-[#bf953f]" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-luxury font-bold text-[#bf953f] tracking-[0.3em]">TIMBER PRO</span>
              <span className="text-xs font-luxury text-[#bf953f]/60 tracking-[0.5em] uppercase mt-2">Royal Craftsmanship</span>
            </div>
          </div>
          <div className="w-24 h-[1px] bg-[#bf953f]/30 mx-auto mb-12"></div>
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