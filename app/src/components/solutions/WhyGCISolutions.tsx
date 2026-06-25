"use client";
import { motion } from "framer-motion";
import { Microscope, Settings2, BadgeCheck } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Microscope,
    color: "#1a5c38",
    title: "Science-Backed Formulations",
    desc: "Every ingredient system we develop is backed by rigorous R&D testing, ensuring performance consistency in your production environment.",
  },
  {
    icon: Settings2,
    color: "#e8650a",
    title: "Fully Customizable",
    desc: "No off-the-shelf solutions. Every formulation is built specifically around your product specs, process requirements, and budget.",
  },
  {
    icon: BadgeCheck,
    color: "#1a5c38",
    title: "Quality Guaranteed",
    desc: "In-house QC lab validates every batch before delivery. Consistent quality you can count on, every single order.",
  },
];

export default function WhyGCISolutions() {
  return (
    <section className="py-24 bg-[#ede8df] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Why Choose GCI</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            What Makes Our Solutions <span className="text-[#1a5c38]">Different</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left: stacked feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300 flex items-start gap-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: f.color + "15" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: f.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-1">{f.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[400px]"
            style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.15), 0 24px 48px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/6_Homemade_creamy_mayonnaise.png"
              alt="GC Ingredients food science laboratory and quality control" title="GC Ingredients food science laboratory and quality control"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-[#111827]">In-house QC validation on every batch</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
