"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, FileCheck } from "lucide-react";
import Image from "next/image";

const qcSteps = [
  "Raw material intake testing and verification",
  "In-process quality checks during production",
  "Finished product analytical testing",
  "Performance validation against specification",
  "Certificate of Analysis issued before dispatch",
];

export default function QualityControl() {
  return (
    <section className="py-24 bg-[#0d3a22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              Quality Control
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.15] mb-5">
              Zero Compromise on Quality —{" "}
              <span className="text-[#e8650a]">Every Batch, Every Time</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 text-[17px]">
              Our in-house QC laboratory runs rigorous testing on every batch before it leaves our facility — ensuring the ingredient system you receive performs exactly as specified in your production environment.
            </p>
            <div className="space-y-4 mb-8">
              {qcSteps.map((step, i) => (
                <motion.div key={step} className="flex items-start gap-4" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 + i * 0.15 }}>
                  <span className="w-8 h-8 rounded-lg bg-[#e8650a] flex items-center justify-center text-white font-bold text-xs shrink-0 font-[family-name:var(--font-plus-jakarta)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/80 text-sm pt-1.5">{step}</span>
                </motion.div>
              ))}
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30">
              View Our QC Process <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right */}
          <motion.div className="relative" initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative rounded-2xl overflow-hidden h-[480px]" style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.3), 0 24px 64px rgba(0,0,0,0.3)" }}>
              <Image src="/images/2_Cross_section_of_a_perfectly.png" alt="GC Ingredients quality control laboratory" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/30 to-transparent" />
            </div>
            <motion.div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2.5 shadow-lg items-center gap-2 hidden sm:flex" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.4 }}>
              <ShieldCheck className="w-4 h-4 text-[#1a5c38]" />
              <span className="text-sm font-semibold text-[#111827]">100% Batch Tested</span>
            </motion.div>
            <motion.div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2.5 shadow-lg items-center gap-2 hidden sm:flex" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.5 }}>
              <FileCheck className="w-4 h-4 text-[#e8650a]" />
              <span className="text-sm font-semibold text-[#111827]">CoA Issued Every Order</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
