"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 25, suffix: "+", label: "Years in Business" },
  { value: 120000, suffix: "", label: "Sq Ft Facility" },
  { value: 2500, suffix: "+", label: "Formulations" },
];

export default function HistoryHeroSection() {
  return (
    <section className="relative bg-[#0d3a22] pt-36 pb-24 overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 0%, rgba(26,92,56,0.6) 0%, transparent 65%), radial-gradient(ellipse at 10% 100%, rgba(232,101,10,0.15) 0%, transparent 50%)",
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
        {/* Tag */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Our History
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.1] mb-6 max-w-4xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Our Journey From a Single Vision to an{" "}
          <span className="text-[#e8650a]">Industry Leader</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg text-green-200 leading-relaxed max-w-2xl mx-auto mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          What began as one man&apos;s passion for food science in 1998 has grown into a
          120,000 sq ft manufacturing powerhouse serving food manufacturers across North
          America.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <a
            href="#milestones"
            className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30"
          >
            See Our Milestones <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/about#leadership"
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
          >
            <Users className="w-4 h-4" /> Meet Our Team
          </a>
        </motion.div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center divide-x divide-white/15 border-t border-white/15 pt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="px-8 sm:px-12 py-4 text-center first:pl-0 last:pr-0"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4 + i * 0.1}
            >
              <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a]">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-green-200 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
