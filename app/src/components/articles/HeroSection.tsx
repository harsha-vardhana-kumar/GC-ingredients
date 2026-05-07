"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay } },
});

interface ArticlesHeroProps {
  searchQuery: string;
  onSearch: (q: string) => void;
}

export default function ArticlesHeroSection({ searchQuery, onSearch }: ArticlesHeroProps) {
  return (
    <section className="relative bg-[#0d3a22] pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 60% 0%, rgba(26,92,56,0.55) 0%, transparent 60%), radial-gradient(ellipse at 10% 100%, rgba(232,101,10,0.1) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm" variants={fadeUp(0)} initial="hidden" animate="visible">
          Articles &amp; Resources
        </motion.div>
        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.1] mb-6" variants={fadeUp(0.1)} initial="hidden" animate="visible">
          Insights, Innovation &{" "}
          <span className="text-[#e8650a]">Industry Knowledge</span>
        </motion.h1>
        <motion.p className="text-lg text-green-200 leading-relaxed max-w-2xl mx-auto mb-8" variants={fadeUp(0.2)} initial="hidden" animate="visible">
          Stay ahead of food industry trends with expert insights, technical deep-dives, case studies, and event updates from the GC Ingredients food science team.
        </motion.p>
        <motion.div className="relative max-w-2xl mx-auto" variants={fadeUp(0.3)} initial="hidden" animate="visible">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b7280]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search articles, case studies, events..."
            className="w-full bg-white h-14 rounded-full pl-14 pr-6 text-[#111827] placeholder:text-[#9ca3af] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1a5c38] text-base"
          />
        </motion.div>
      </div>
    </section>
  );
}
