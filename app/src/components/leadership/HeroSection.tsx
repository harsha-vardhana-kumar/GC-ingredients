"use client";
import { motion } from "framer-motion";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  },
});

export default function LeadershipHeroSection() {
  return (
    <section className="relative bg-[#0d3a22] pt-36 pb-20 overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 0%, rgba(26,92,56,0.55) 0%, transparent 60%), radial-gradient(ellipse at 15% 100%, rgba(232,101,10,0.12) 0%, transparent 50%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm"
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
        >
          Our Leadership
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.1] mb-6 max-w-4xl mx-auto"
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
        >
          The People Driving{" "}
          <span className="text-[#e8650a]">Food Science Innovation</span>
        </motion.h1>

        <motion.p
          className="text-lg text-green-200 leading-relaxed max-w-2xl mx-auto"
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
        >
          Meet the experienced team behind GC Ingredients — food scientists,
          operations experts, and industry veterans dedicated to your success.
        </motion.p>
      </div>
    </section>
  );
}
