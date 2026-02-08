"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Crown, 
  Send, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Shield,
  Zap,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Modern Styles ---
const ModernStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700;800;900&display=swap');
    
    :root {
      --accent: #bf953f;
      --bg-dark: #0a0a0a;
      --bg-card: #141414;
    }

    body { 
      font-family: 'Heebo', sans-serif;
      background-color: var(--bg-dark);
      color: white;
    }

    .text-accent { color: var(--accent); }
    .bg-accent { background-color: var(--accent); }
    .border-accent { border-color: var(--accent); }

    .glass {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .luxury-border {
      position: relative;
    }
    .luxury-border::after {
      content: '';
      position: absolute;
      bottom: -2px;
      right: 0;
      width: 40px;
      height: 2px;
      background: var(--accent);
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0a0a0a;
    }
    ::-webkit-scrollbar-thumb {
      background: #222;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent);
    }
  `}} />
);

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

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
    { name: 'האומן', href: '#about' },
    { name: 'קולקציה', href: '#masterpieces' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'קשר', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6",
      isScrolled ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="block text-xl font-black tracking-tighter leading-none">TIMBER PRO</span>
            <span className="text-[10px] font-light tracking-[0.4em] text-accent uppercase">Architectural Wood</span>
          </div>
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm">
            <Crown className="text-black w-6 h-6" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12 flex-row-reverse">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-accent transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-8"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold tracking-tight"
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
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-70"
          src="https://www.youtube.com/embed/bmO2nCZx5SM?autoplay=1&mute=1&controls=0&loop=1&playlist=bmO2nCZx5SM&playsinline=1&showinfo=0&rel=0"
          allow="autoplay; encrypted-media"
          title="Background"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.span variants={fadeInUp} className="inline-block text-accent font-bold tracking-[0.5em] uppercase text-xs mb-6">
            Est. 1998 — Master Craftsmanship
          </motion.span>
          
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
            אומנות <br /> <span className="text-accent">אדריכלית</span> בעץ
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            תכנון וביצוע רהיטי יוקרה בהתאמה אישית. שילוב של טכנולוגיה מתקדמת ומסורת נגרות עתיקה.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-accent text-black px-10 py-5 font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300">
              תיאום פגישת ייעוץ
            </a>
            <a href="#masterpieces" className="border border-white/20 px-10 py-5 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
              צפייה בקולקציה
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 blur-[120px] -z-10" />
            <div className="relative group">
              <div className="absolute inset-0 border border-accent/30 translate-x-6 translate-y-6 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=900&auto=format&fit=crop" 
                alt="Yigal Danilov - Master Carpenter" 
                className="w-full h-[650px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
              <div className="absolute bottom-8 left-8 glass p-8 border-l-4 border-accent">
                <span className="block text-4xl font-black leading-none mb-1">25</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent">שנות ניסיון</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:w-1/2 text-right"
          >
            <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4 block">The Artisan</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-tight">
              יגאל דנילוב. <br />
              <span className="text-white/40">חזון שהופך למציאות.</span>
            </h2>
            
            <div className="space-y-8 text-white/60 text-xl font-light leading-relaxed">
              <p>
                "עבורי, עץ הוא לא רק חומר גלם. הוא אורגניזם חי עם היסטוריה, טקסטורה ונשמה. התפקיד שלי הוא להקשיב לו ולחשוף את היופי החבוי בו."
              </p>
              <p>
                במשך למעלה משני עשורים, אני מקדיש את חיי ליצירת פריטים שהם הרבה מעבר לרהיטים. אלו הן יצירות אדריכליות שנועדו להגדיר את החלל ולהישאר רלוונטיות גם בעוד מאה שנה.
              </p>
            </div>

            <div className="mt-16 flex items-center justify-end gap-6">
              <div className="text-right">
                <p className="text-white font-bold text-lg">יגאל דנילוב</p>
                <p className="text-accent text-xs font-bold tracking-widest uppercase">מייסד ונגר ראשי</p>
              </div>
              <div className="w-12 h-[1px] bg-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Masterpieces = () => {
  const items = [
    {
      title: "שולחנות אבירים",
      category: "Dining",
      img: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "מטבחי חוץ",
      category: "Outdoor",
      img: "https://images.unsplash.com/photo-1544450173-8c8d03a137cc?q=80&w=800",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "אומנות בוצ'ר",
      category: "Artisan",
      img: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=800",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section id="masterpieces" className="py-32 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse justify-between items-end mb-24 gap-8">
          <div className="text-right">
            <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Our Collection</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">יצירות מופת</h2>
          </div>
          <p className="text-white/40 max-w-md text-right text-lg font-light">
            כל פריט בקולקציה שלנו הוא תוצאה של מאות שעות עבודה, דיוק מיקרוסקופי ובחירה קפדנית של חומרי הגלם הטובים בעולם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group relative overflow-hidden bg-bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-right">
                <div className="flex items-center justify-end gap-3 mb-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-accent uppercase">{item.category}</span>
                  <div className="w-8 h-[1px] bg-accent" />
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-6">{item.title}</h3>
                <button className="flex items-center justify-end gap-3 text-xs font-bold tracking-widest uppercase group/btn">
                  <span className="group-hover/btn:mr-2 transition-all">פרטים נוספים</span>
                  <ArrowRight size={16} className="text-accent" />
                </button>
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
    <section id="gallery" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Visual Archive</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">גלריית פרויקטים</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden border border-white/5"
            >
              <img src={img} alt="Gallery Item" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0f0f0f] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-24">
          <div className="lg:w-1/2 text-right">
            <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">בואו נבנה <br /> משהו נצחי.</h2>
            
            <div className="space-y-12">
              {[
                { icon: <Phone size={24} />, label: 'טלפון', value: '050-1234567' },
                { icon: <Mail size={24} />, label: 'אימייל', value: 'office@timberpro.co.il' },
                { icon: <MapPin size={24} />, label: 'סטודיו', value: 'אזור התעשייה, עמק חפר' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-end gap-8 group">
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-accent tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-2xl font-light group-hover:text-accent transition-colors">{item.value}</p>
                  </div>
                  <div className="w-14 h-14 glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:w-1/2 glass p-12 border-t-4 border-accent"
          >
            <form className="space-y-10" dir="rtl">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-accent tracking-widest uppercase">שם מלא</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:border-accent outline-none transition-all" 
                  placeholder="ישראל ישראלי"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-accent tracking-widest uppercase">טלפון</label>
                <input 
                  type="tel" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:border-accent outline-none transition-all" 
                  placeholder="050-0000000"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-accent tracking-widest uppercase">הפרויקט שלכם</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:border-accent outline-none transition-all resize-none"
                  placeholder="ספרו לנו מה אתם חולמים לבנות..."
                ></textarea>
              </div>
              <button className="w-full bg-accent text-black py-6 font-black text-sm tracking-[0.3em] uppercase hover:bg-white transition-all flex items-center justify-center gap-4">
                שלח הודעה <Send size={18} />
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
    <div className="min-h-screen selection:bg-accent selection:text-black overflow-x-hidden">
      <ModernStyles />
      <Navbar />
      <Hero />
      <About />
      <Masterpieces />
      <Gallery />
      <Contact />
      
      <footer className="py-20 bg-[#0a0a0a] border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="w-16 h-16 bg-accent flex items-center justify-center rounded-sm">
              <Crown className="text-black w-10 h-10" />
            </div>
            <div className="text-center">
              <span className="block text-4xl font-black tracking-tighter">TIMBER PRO</span>
              <span className="text-xs font-light tracking-[0.5em] text-accent uppercase mt-2">Architectural Wood Craft</span>
            </div>
          </div>
          <div className="w-20 h-[1px] bg-white/10 mx-auto mb-12" />
          <p className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} TIMBER PRO. ALL RIGHTS RESERVED. <br />
            <span className="mt-4 block">HANDCRAFTED IN ISRAEL 🇮🇱</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;