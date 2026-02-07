"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactFormSection from "@/components/ContactFormSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div dir="rtl" className="font-sans text-right bg-background text-foreground">
      <Navbar />
      <main className="pt-[72px]"> {/* Adjust padding to account for fixed navbar height */}
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactFormSection />
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;