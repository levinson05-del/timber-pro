"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "שם מלא חייב להכיל לפחות 2 תווים." }),
  phone: z.string().regex(/^(\+972|0)?[2-9]\d{7,8}$/, { message: "מספר טלפון לא תקין." }),
  message: z.string().min(10, { message: "ההודעה חייבת להכיל לפחות 10 תווים." }).max(500, { message: "ההודעה יכולה להכיל עד 500 תווים." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log("Form submitted:", values);
    showSuccess("הפרטים נשלחו בהצלחה! ניצור קשר בהקדם.");
    form.reset();
  };

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
      id="contact"
      className="py-20 px-6 md:px-12 bg-secondary text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">בואו נדבר על הפרויקט הבא שלכם</h2>
        <p className="text-lg text-muted-foreground">
          מלאו את הפרטים ונחזור אליכם בהקדם עם הצעת מחיר מותאמת אישית.
        </p>
      </div>
      <div className="max-w-xl mx-auto bg-card p-8 rounded-xl shadow-lg border border-border">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="fullName" className="block text-lg font-medium mb-2 text-right">שם מלא</Label>
            <Input
              id="fullName"
              {...form.register("fullName")}
              className="w-full p-3 rounded-md border border-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-right"
              placeholder="הכנס את שמך המלא"
            />
            {form.formState.errors.fullName && (
              <p className="text-destructive text-sm mt-1 text-right">{form.formState.errors.fullName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone" className="block text-lg font-medium mb-2 text-right">טלפון</Label>
            <Input
              id="phone"
              type="tel"
              {...form.register("phone")}
              className="w-full p-3 rounded-md border border-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-right"
              placeholder="הכנס את מספר הטלפון שלך"
            />
            {form.formState.errors.phone && (
              <p className="text-destructive text-sm mt-1 text-right">{form.formState.errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="message" className="block text-lg font-medium mb-2 text-right">הודעה</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              rows={5}
              className="w-full p-3 rounded-md border border-input focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-right"
              placeholder="ספר לנו על הפרויקט שלך..."
            />
            {form.formState.errors.message && (
              <p className="text-destructive text-sm mt-1 text-right">{form.formState.errors.message.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
          >
            שלח פרטים
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactFormSection;