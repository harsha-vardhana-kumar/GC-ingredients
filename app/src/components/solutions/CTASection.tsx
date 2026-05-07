"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  },
});

export default function SolutionsCTASection() {
  return (
    <section className="py-24 bg-[#0d3a22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Get Started
        </motion.div>

        <motion.h2
          className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.15] mb-5 max-w-3xl mx-auto"
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Ready to Find Your{" "}
          <span className="text-[#e8650a]">Ingredient Solution?</span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Tell us about your product and our food scientists will recommend the right
          ingredient system for your needs.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30"
          >
            Request a Custom Quote <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#0d3a22] transition-all hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" /> Download Solutions Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
