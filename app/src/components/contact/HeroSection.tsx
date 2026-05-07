"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay } },
});

const quickContacts = [
  { icon: Phone, text: "+1 (XXX) XXX-XXXX" },
  { icon: Mail, text: "info@gcingredients.com" },
  { icon: Clock, text: "Mon–Fri: 8AM – 5PM CST" },
];

export default function ContactHeroSection() {
  return (
    <section className="relative bg-[#0d3a22] pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 50% 20%, rgba(26,92,56,0.6) 0%, transparent 70%), radial-gradient(ellipse at 90% 90%, rgba(232,101,10,0.15) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm" variants={fadeUp(0)} initial="hidden" animate="visible">
          Contact Us
        </motion.div>
        
        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.1] mb-6" variants={fadeUp(0.1)} initial="hidden" animate="visible">
          Let&apos;s Build Something <span className="text-[#e8650a]">Great Together</span>
        </motion.h1>
        
        <motion.p className="text-lg text-green-200 leading-relaxed mx-auto mb-10 max-w-2xl" variants={fadeUp(0.2)} initial="hidden" animate="visible">
          Whether you need a custom formulation, technical consultation, or just want to explore what&apos;s possible — our food science team is ready to help.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {quickContacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(0.3 + i * 0.1)}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/30 text-white bg-white/5 backdrop-blur-sm shadow-md"
              >
                <Icon className="w-4 h-4 text-[#e8650a]" />
                <span className="text-sm font-medium">{contact.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
