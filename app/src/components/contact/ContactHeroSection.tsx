"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export default function ContactHeroSection() {
  return (
    <section className="relative bg-[#0d3a22] pt-36 pb-24 overflow-hidden">
      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 50%, rgba(232,101,10,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 30%, rgba(45,122,79,0.25) 0%, transparent 55%)",
        }}
      />

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section tag */}
        <motion.div
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-white/20 text-green-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Contact Us
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.08] mb-6 max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Let&apos;s Build Something{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #e8650a 0%, #f5a623 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Great Together
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Whether you need a custom formulation, technical consultation, or just want to explore
          what&apos;s possible — our food science team is ready.
        </motion.p>

        {/* Decorative bottom wave separator into next section */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="w-full h-12 text-[#f8f5ef] fill-current"
          >
            <path d="M0,48 L1440,48 L1440,0 Q720,48 0,0 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
