"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const goals = [
  { label: "Waste Reduction", target: "30% by 2026", pct: 18, max: 30 },
  { label: "Responsible Sourcing", target: "100% by 2025", pct: 72, max: 100 },
  { label: "Energy Efficiency", target: "20% improvement by 2026", pct: 11, max: 20 },
  { label: "Employee Training Hours", target: "500hrs/year", pct: 68, max: 100 },
];

function ProgressBar({ pct }: { pct: number }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${pct}%`, transition: { duration: 1.5, ease: "easeOut" } });
    }
  }, [inView, pct, controls]);

  return (
    <div ref={ref} className="relative h-2 bg-[#f8f5ef] rounded-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full bg-[#1a5c38] rounded-full"
        initial={{ width: "0%" }}
        animate={controls}
      />
    </div>
  );
}

export default function SustainabilityGoals() {
  return (
    <section id="goals" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Sustainability Goals</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Our Commitments,{" "}
            <span className="text-[#1a5c38]">Measured and Tracked</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            We hold ourselves accountable with clear, measurable sustainability targets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Progress goals */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {goals.map((g) => {
              const displayPct = Math.round((g.pct / g.max) * 100);
              return (
                <div key={g.label}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-[#111827]">{g.label}</span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#e8650a]/10 text-[#e8650a]">
                        {g.target}
                      </span>
                    </div>
                    <span className="font-bold text-[#1a5c38] text-sm">{g.pct}{g.max === 100 ? "%" : "hrs"} achieved</span>
                  </div>
                  <ProgressBar pct={displayPct} />
                </div>
              );
            })}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-[420px]"
            style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.15), 0 24px 48px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/app_meat.png"
              alt="GC Ingredients sustainability and environmental practices"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a5c38]/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
