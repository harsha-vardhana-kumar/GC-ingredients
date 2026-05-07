"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { Rocket, Factory, Building2, FlaskConical, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const milestones = [
  {
    year: "1998",
    icon: Rocket,
    iconColor: "#e8650a",
    title: "GC Ingredients Founded",
    description:
      "Srikanth Gundavarapu launches GC Ingredients after years of R&D experience, beginning ingredient supply operations with a focus on quality and technical service.",
    tag: "The Foundation",
    side: "right",
  },
  {
    year: "2005",
    icon: Factory,
    iconColor: "#1a5c38",
    title: "Custom Blend Manufacturing Begins",
    description:
      "GCI launches its first in-house custom blending operation, moving into a 20,000 sq ft facility and introducing powder and liquid formulation capabilities.",
    tag: "First Major Leap",
    side: "left",
  },
  {
    year: "2016",
    icon: Building2,
    iconColor: "#e8650a",
    title: "50,000 Sq Ft Facility Acquired",
    description:
      "Rapid growth demands more space. GCI purchases a 50,000 sq ft production facility, significantly expanding manufacturing capacity and operational efficiency.",
    tag: "Scaling Up",
    side: "right",
  },
  {
    year: "2021",
    icon: FlaskConical,
    iconColor: "#1a5c38",
    title: "70,000 Sq Ft Expansion + R&D Lab",
    description:
      "GCI expands to 70,000 sq ft and establishes a dedicated R&D laboratory and state-of-the-art QC lab, marking the transition from supplier to full innovation partner.",
    tag: "Innovation Hub",
    side: "left",
  },
  {
    year: "2022",
    icon: Sparkles,
    iconColor: "#e8650a",
    title: "GCI 2.0 — Value-Added Products Launch",
    description:
      "GCI enters a new era with the launch of value-added product lines and next-generation ingredient systems, cementing its position as an innovation leader in the food industry.",
    tag: "GCI 2.0",
    side: "right",
  },
];

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const Icon = milestone.icon;
  const isLeft = milestone.side === "left";

  return (
    <div className="relative grid lg:grid-cols-[1fr_80px_1fr] gap-0 items-center mb-16 last:mb-0">
      {/* LEFT CARD */}
      <div className={isLeft ? "lg:block" : "lg:block lg:opacity-0 lg:pointer-events-none"}>
        {isLeft && (
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 lg:mr-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <CardContent milestone={milestone} Icon={Icon} />
          </motion.div>
        )}
      </div>

      {/* CENTER: year dot */}
      <div className="hidden lg:flex flex-col items-center justify-center relative z-10">
        <motion.div
          className="w-4 h-4 rounded-full bg-[#e8650a] shadow-[0_0_0_4px_rgba(232,101,10,0.2)] relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: index * 0.15, type: "spring", stiffness: 300 }}
        >
          <span className="absolute inset-0 rounded-full bg-[#e8650a] animate-ping opacity-40" />
        </motion.div>
        <div className="mt-3 bg-[#e8650a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          {milestone.year}
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className={!isLeft ? "lg:block" : "lg:block lg:opacity-0 lg:pointer-events-none"}>
        {!isLeft && (
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 lg:ml-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <CardContent milestone={milestone} Icon={Icon} />
          </motion.div>
        )}
      </div>

      {/* MOBILE: single column card */}
      <div className="lg:hidden col-span-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-4 h-4 rounded-full bg-[#e8650a] mt-1 shrink-0 shadow-[0_0_0_4px_rgba(232,101,10,0.2)]" />
          <span className="bg-[#e8650a] text-white text-xs font-bold px-3 py-1 rounded-full">
            {milestone.year}
          </span>
        </div>
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ml-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: index * 0.05 }}
        >
          <CardContent milestone={milestone} Icon={Icon} />
        </motion.div>
      </div>
    </div>
  );
}

function CardContent({
  milestone,
  Icon,
}: {
  milestone: (typeof milestones)[0];
  Icon: React.ElementType;
}) {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: milestone.iconColor + "15" }}
        >
          <Icon className="w-5 h-5" style={{ color: milestone.iconColor }} />
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: milestone.iconColor + "15",
            color: milestone.iconColor,
          }}
        >
          {milestone.tag}
        </span>
      </div>
      <h3 className="text-lg font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">
        {milestone.title}
      </h3>
      <p className="text-sm text-[#6b7280] leading-relaxed">{milestone.description}</p>
    </>
  );
}

function TimelineLine() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start({ scaleY: 1 });
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#f0f0f0]"
    >
      <motion.div
        className="w-full bg-[#1a5c38] origin-top h-full"
        initial={{ scaleY: 0 }}
        animate={controls}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function MilestoneTimeline() {
  return (
    <section id="milestones" className="py-24 bg-[#f8f5ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Company Milestones</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Every Step Forward,{" "}
            <span className="text-[#1a5c38]">A New Standard Set</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Five defining moments that shaped who GC Ingredients is today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <TimelineLine />
          {/* Mobile left line */}
          <div className="lg:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-[#1a5c38]/20" />

          {milestones.map((milestone, index) => (
            <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
