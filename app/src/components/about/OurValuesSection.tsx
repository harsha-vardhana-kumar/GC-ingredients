"use client";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety",
    description: "Safety is our top priority in everything we do.",
    color: "#1a5c38", bg: "#f0f7f3",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Consistent product quality and rigorous testing.",
    color: "#e8650a", bg: "#fdf8f0",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuous R&D investment in next-generation ingredient technologies.",
    color: "#2563eb", bg: "#eff6ff",
  },
  {
    icon: HeartHandshake,
    title: "Respect",
    description: "We treat our partners, customers, and team with utmost respect.",
    color: "#7c3aed", bg: "#f5f3ff",
  },
];

export default function OurValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">What We Stand For</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            The Principles Behind{" "}
            <span className="text-gradient-green">Every Solution</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Our values aren&apos;t just words — they define how we work, what we build, and who we partner with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                className={`bg-[#f8f5ef] rounded-2xl p-8 card-hover border border-[#e8e3d9] group relative overflow-hidden`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: val.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: val.color }} />
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">
                  {val.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{val.description}</p>

                {/* hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a5c38] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
