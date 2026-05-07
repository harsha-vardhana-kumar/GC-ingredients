"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Calendar, Maximize2 } from "lucide-react";
import Image from "next/image";

const labHighlights = [
  "Advanced blending and mixing equipment",
  "Analytical testing instruments",
  "Pilot production simulation capability",
  "Dedicated QC validation lab",
];

export default function LabFacility() {
  return (
    <section className="py-24 bg-[#0d3a22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              Our Lab
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.15] mb-5">
              State-of-the-Art{" "}
              <span className="text-[#e8650a]">R&amp;D Laboratory</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 text-[17px]">
              Our dedicated R&amp;D laboratory — established in 2021 as part of our 70,000 sq ft expansion — is equipped with advanced testing, blending, and analytical equipment purpose-built for food ingredient innovation.
            </p>
            <div className="space-y-3 mb-8">
              {labHighlights.map((h, i) => (
                <motion.div key={h} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}>
                  <CheckCircle className="w-4 h-4 text-[#e8650a] shrink-0" />
                  <span className="text-white/80 text-sm">{h}</span>
                </motion.div>
              ))}
            </div>
            <a href="/manufacturing" className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30">
              Tour Our Facility <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: image with floating badges */}
          <motion.div className="relative" initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative rounded-2xl overflow-hidden h-[480px]" style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.3), 0 24px 64px rgba(0,0,0,0.3)" }}>
              <Image src="/images/hero-hydrocolloids.png" alt="GC Ingredients state-of-the-art R&D laboratory facility" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/30 to-transparent" />
            </div>
            {/* Top right badge — hidden on mobile */}
            <motion.div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2.5 shadow-lg items-center gap-2 hidden sm:flex" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.4 }}>
              <Calendar className="w-4 h-4 text-[#1a5c38]" />
              <span className="text-sm font-semibold text-[#111827]">Est. 2021</span>
            </motion.div>
            {/* Bottom left badge — hidden on mobile */}
            <motion.div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2.5 shadow-lg items-center gap-2 hidden sm:flex" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.5 }}>
              <Maximize2 className="w-4 h-4 text-[#e8650a]" />
              <span className="text-sm font-semibold text-[#111827]">70,000 Sq Ft</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
