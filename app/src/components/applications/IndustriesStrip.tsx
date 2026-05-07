"use client";
import { motion } from "framer-motion";

const industries = [
  { emoji: "🥐", label: "Bakery" },
  { emoji: "🌮", label: "Tortilla" },
  { emoji: "🥛", label: "Dairy" },
  { emoji: "🥩", label: "Meat & Poultry" },
  { emoji: "🍟", label: "Snack Foods" },
  { emoji: "🍱", label: "Prepared Foods" },
];

export default function IndustriesStrip() {
  return (
    <motion.section
      className="bg-[#e8650a] py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrollable pills row */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 justify-start md:justify-center">
          {industries.map((ind, i) => (
            <motion.a
              key={ind.label}
              href={`#${ind.label.toLowerCase().replace(/\s+/g, "-").replace("&", "")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/50 text-white text-sm font-semibold whitespace-nowrap hover:bg-white hover:text-[#e8650a] transition-all shrink-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span>{ind.emoji}</span>
              <span>{ind.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
