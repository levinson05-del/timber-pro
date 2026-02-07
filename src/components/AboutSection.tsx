"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const AboutSection = () => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-6 md:px-12 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">מי אנחנו?</h2>
        <p className="text-lg leading-relaxed">
          ב"טימבר פרו" אנו מביאים לידי ביטוי אהבה עמוקה לעץ וכישרון יוצא דופן באומנות הנגרות.
          אנו מתמחים בתכנון, עיצוב וביצוע פרויקטים מותאמים אישית, החל מפרגולות ודקים יוקרתיים,
          דרך ריהוט פנים וחוץ ייחודי, ועד עבודות עץ מורכבות. כל פרויקט הוא יצירת אומנות בפני עצמה,
          המבוצעות בדייקנות, תשומת לב לפרטים הקטנים ובשימוש בחומרים האיכותיים ביותר,
          כדי להבטיח תוצאה מושלמת שתשמח אתכם לאורך שנים.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;