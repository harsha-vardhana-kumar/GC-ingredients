"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  h2: string;
  subtext?: string;
  primaryBtn: string;
  secondaryBtn: string;
  primaryHref?: string;
  secondaryHref?: string;
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  },
});

export default function CTASection({
  h2,
  subtext = "Speak with our food science team — free consultation, no commitment required.",
  primaryBtn,
  secondaryBtn,
  primaryHref = "/contact",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 0%, #1a5c38 0%, #0d3a22 60%)",
      }}
      aria-label="Call to Action"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-200 text-xs font-bold tracking-widest uppercase mb-6"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Get Started
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.15] mb-5 max-w-3xl mx-auto"
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {h2}
        </motion.h2>

        <motion.p
          className="text-green-200/80 text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {subtext}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <a
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30 text-sm"
          >
            {primaryBtn} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryHref}
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm"
          >
            {secondaryBtn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
