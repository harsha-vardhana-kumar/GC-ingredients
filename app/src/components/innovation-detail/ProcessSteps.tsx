"use client";
import { motion } from "framer-motion";
import { GCIcon, type IconName } from "../ui/GCIcon";

export interface ProcessStep {
  number: string;
  Icon: IconName;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  sectionTag?: string;
  h2: string;
  steps: ProcessStep[];
}

export default function ProcessSteps({
  sectionTag = "Our Process",
  h2,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-20 bg-white overflow-hidden" aria-label="Process Steps">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8650a]/8 border border-[#e8650a]/20 text-[#e8650a] text-xs font-bold tracking-widest uppercase mb-4">
            {sectionTag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] max-w-2xl mx-auto">
            {h2}
          </h2>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-1 min-w-0">
              {/* Step card */}
              <motion.div
                className="flex-1 min-w-0 flex flex-col items-center text-center px-3"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 }}
              >
                {/* Number + icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a5c38] flex items-center justify-center shadow-lg shadow-[#1a5c38]/20">
                    <GCIcon name={step.Icon} className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#e8650a] flex items-center justify-center text-white text-[10px] font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-bold text-[#111827] text-sm font-[family-name:var(--font-plus-jakarta)] mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-xs leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  className="flex items-start pt-7 shrink-0 px-1"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.2 + 0.3 }}
                  style={{ originX: 0 }}
                >
                  <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="text-[#1a5c38]/30">
                    <path d="M0 8H24M24 8L18 2M24 8L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-4"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="relative w-12 h-12 rounded-xl bg-[#1a5c38] flex items-center justify-center shrink-0 shadow-md shadow-[#1a5c38]/20">
                  <GCIcon name={step.Icon} className="w-6 h-6 text-white" />
                  <div className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-[#e8650a] flex items-center justify-center text-white text-[9px] font-bold">
                    {step.number}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-[#1a5c38]/15 mt-2" />
                )}
              </div>
              {/* Right: text */}
              <div className="pb-8">
                <h3 className="font-bold text-[#111827] text-sm font-[family-name:var(--font-plus-jakarta)] mb-1">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
