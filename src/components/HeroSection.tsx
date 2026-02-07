"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg')" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
          variants={itemVariants}
        >
          אומנות בעץ - בדיוק כמו שחלמתם
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 font-light"
          variants={itemVariants}
        >
          פרגולות, דקים וריהוט בהתאמה אישית ברמת גימור עליונה
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
            קבל הצעת מחיר
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;