"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HistoryCTASection() {
  return (
    <section className="py-24 bg-[#e8650a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.15] mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Be Part of Our Next Chapter
        </motion.h2>

        <motion.p
          className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Partner with GC Ingredients and experience 25 years of food science excellence
          working for your brand.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0d3a22] font-semibold px-8 py-4 rounded-xl hover:bg-[#f8f5ef] transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#e8650a] transition-all hover:-translate-y-0.5"
          >
            Explore Our Solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
