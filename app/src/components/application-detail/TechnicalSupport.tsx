"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface TechnicalSupportProps {
  h2: string;
  subtext?: string;
  stats: Stat[];
  primaryBtn?: string;
  primaryHref?: string;
  sectionTag?: string;
}

const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
  },
};

export default function TechnicalSupport({
  h2,
  subtext = "Our dedicated application specialists are available to support your product development, troubleshoot formulation challenges, and provide on-site assistance.",
  stats,
  primaryBtn = "Contact a Specialist",
  primaryHref = "/contact",
  sectionTag = "Technical Support",
}: TechnicalSupportProps) {
  return (
    <section
      className="py-20"
      style={{ background: "#1a5c38" }}
      aria-label="Technical Support"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-green-200 text-xs font-bold tracking-widest uppercase mb-5">
              {sectionTag}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.2] mb-5">
              {h2}
            </h2>
            <p className="text-green-200/80 text-base leading-relaxed mb-8">{subtext}</p>
            <a
              href={primaryHref}
              className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30 text-sm"
            >
              {primaryBtn} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-6 py-5"
              >
                <div>
                  <div className="text-3xl font-bold text-[#e8650a] font-[family-name:var(--font-plus-jakarta)]">
                    {s.value}
                  </div>
                  <div className="text-green-200/80 text-sm mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
