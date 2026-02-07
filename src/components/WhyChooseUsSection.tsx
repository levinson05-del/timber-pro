"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Clock, Gem, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const reasons = [
  {
    icon: Clock,
    title: "עמידה בלוחות זמנים",
    description: "אנו מתחייבים לעמוד בלוחות הזמנים שנקבעו, ללא פשרות.",
  },
  {
    icon: Gem,
    title: "חומרים איכותיים בלבד",
    description: "שימוש בעץ ובחומרים הטובים ביותר, לעמידות ויופי לאורך שנים.",
  },
  {
    icon: ShieldCheck,
    title: "אחריות מלאה",
    description: "אנו עומדים מאחורי כל עבודה ומספקים אחריות מלאה לשקט נפשי.",
  },
];

const WhyChooseUsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <motion.section
      id="why-choose-us"
      className="py-20 px-6 md:px-12 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">למה לבחור בנו?</h2>
        <p className="text-lg text-muted-foreground">
          המחויבות שלנו לאיכות, מקצועיות ושירות ללא פשרות.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="flex flex-col items-center p-6 text-center bg-card shadow-lg rounded-xl border-border hover:shadow-xl transition-all duration-300">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <reason.icon className="h-8 w-8 text-accent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-2 text-primary">{reason.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{reason.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;