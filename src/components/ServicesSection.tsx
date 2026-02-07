"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Sofa, Sparkles, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Hammer,
    title: "בניית פרגולות ודקים",
    description: "עיצוב והקמה של פרגולות ודקים מעץ איכותי, עמידים ומרשימים.",
  },
  {
    icon: Sofa,
    title: "ריהוט פנים וחוץ",
    description: "יצירת רהיטים בהתאמה אישית לבית ולגינה, בסגנון ובגימור מושלם.",
  },
  {
    icon: Sparkles,
    title: "עבודות עץ מיוחדות",
    description: "פתרונות יצירתיים וייחודיים לכל צורך, מעיצוב ועד ביצוע.",
  },
  {
    icon: RefreshCw,
    title: "חידוש דקים",
    description: "החזרת הברק והחיים לדקים קיימים באמצעות טיפול מקצועי.",
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="services"
      className="py-20 px-6 md:px-12 bg-secondary text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">השירותים שלנו</h2>
        <p className="text-lg text-muted-foreground">
          מגוון רחב של פתרונות עץ מקצועיים ואיכותיים לבית ולעסק.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="flex flex-col items-center p-6 text-center bg-card shadow-lg rounded-xl border-border hover:shadow-xl transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-2 text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;