"use client";
import { motion } from "framer-motion";
import { Zap, Microscope, BadgeCheck } from "lucide-react";

const items = [
  { icon: Zap, title: "Fast Response", sub: "Technical team replies within 24 business hours" },
  { icon: Microscope, title: "Expert Consultation", sub: "Direct access to food scientists" },
  { icon: BadgeCheck, title: "No Obligation", sub: "Free initial consultation, always" },
];

export default function WhyContactStrip() {
  return (
    <motion.section 
      className="bg-[#e8650a] py-14" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:divide-x divide-white/25">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.title} 
                className="flex items-start gap-4 md:px-8 first:pl-0 last:pr-0" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-[family-name:var(--font-plus-jakarta)] text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
