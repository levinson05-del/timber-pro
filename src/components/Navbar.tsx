"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "אודות", href: "#about" },
  { name: "שירותים", href: "#services" },
  { name: "גלריה", href: "#gallery" },
  { name: "צור קשר", href: "#contact" },
];

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={variants}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm py-4 px-6 md:px-12 flex justify-between items-center border-b border-border"
    >
      <div className="text-2xl font-bold text-primary">
        Timber Pro
      </div>
      <div className="hidden md:flex space-x-8 space-x-reverse">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-foreground hover:text-primary transition-colors text-lg font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>
      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300">
        <a href="tel:+972501234567">חייג עכשיו</a>
      </Button>
    </motion.nav>
  );
};

export default Navbar;