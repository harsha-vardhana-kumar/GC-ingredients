"use client";
import { motion } from "framer-motion";
import { Building2, Factory, Beaker, Rocket, Star } from "lucide-react";

const milestones = [
  {
    year: "1998",
    icon: Star,
    title: "The Beginning",
    description:
      "Founded by Srikanth Gundavarapu following extensive R&D experience in the food industry. GC Ingredients was established with a vision to bring innovative ingredient solutions to North American food manufacturers.",
  },
  {
    year: "2005",
    icon: Factory,
    title: "First Major Expansion",
    description:
      "Launched custom blend manufacturing capabilities and moved into a dedicated 20,000 sq ft production facility, enabling larger-scale operations and greater customer service capacity.",
  },
  {
    year: "2016",
    icon: Building2,
    title: "Growing Footprint",
    description:
      "Expanded to a 50,000 sq ft facility to accommodate surging demand, adding new production lines and advanced blending equipment to serve an expanding global customer base.",
  },
  {
    year: "2021",
    icon: Beaker,
    title: "Innovation Hub",
    description:
      "70,000 sq ft expansion including a state-of-the-art R&D laboratory and dedicated QC lab, enabling in-house application trials, formulation development, and rigorous quality testing.",
  },
  {
    year: "2022",
    icon: Rocket,
    title: "GCI 2.0 Launched",
    description:
      "Launched GCI 2.0 — a new era of value-added product lines, proprietary ingredient systems, and expanded technical services for food manufacturers across North America and beyond.",
  },
];

export default function OurJourneySection() {
  return (
    <section className="py-24 bg-[#f8f5ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Company History</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            25 Years of{" "}
            <span className="text-gradient-green">Growth &amp; Innovation</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            From a founding vision to a 120,000 sq ft ingredient innovation powerhouse.
          </p>
        </motion.div>

        {/* Desktop: horizontal scroll timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1a5c38]/20 via-[#1a5c38]/50 to-[#1a5c38]/20" />
            <div className="grid grid-cols-5 gap-6">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Timeline dot */}
                    <div className="flex justify-center mb-6">
                      <div className="w-4 h-4 rounded-full bg-[#1a5c38] border-4 border-[#f8f5ef] shadow-md relative z-10" />
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] card-hover border border-gray-100 group">
                      {/* Year badge */}
                      <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-bold mb-4 bg-[#e8650a] text-white">
                        {m.year}
                      </div>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-[#f0f7f3] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 text-[#1a5c38]" />
                      </div>

                      <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] text-base mb-2">
                        {m.title}
                      </h3>
                      <p className="text-[#6b7280] text-xs leading-relaxed">{m.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden space-y-4">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.year}
                className="flex gap-5"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                {/* Left: year + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#e8650a] flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#1a5c38]/20 my-2" />
                  )}
                </div>

                {/* Right: card */}
                <div className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex-1 mb-4 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f0f7f3] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#1a5c38]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#e8650a] uppercase tracking-wider">{m.year}</div>
                      <div className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] text-sm">
                        {m.title}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
