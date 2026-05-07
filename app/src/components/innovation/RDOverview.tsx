"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const highlights = [
  { title: "In-house laboratory with advanced testing equipment", sub: "" },
  { title: "500+ formulation trials conducted annually", sub: "" },
  { title: "Cross-category application research", sub: "" },
  { title: "Continuous ingredient technology investment", sub: "" },
];

export default function RDOverview() {
  return (
    <section id="rd-overview" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="section-tag mb-5">R&amp;D Overview</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.15] mb-6">
              Research &amp; Development at the{" "}
              <span className="text-[#1a5c38]">Core of Everything</span>
            </h2>
            {[
              "Our in-house R&D team conducts over 500 formulation trials annually — testing, refining, and validating ingredient systems across every food category we serve. This relentless focus on research is what allows us to deliver solutions that actually work in your production environment.",
              "From fundamental ingredient research to applied food science, our team bridges the gap between laboratory innovation and real-world manufacturing performance.",
            ].map((p, i) => (
              <motion.p key={i} className="text-[#6b7280] leading-relaxed mb-5 text-[17px]" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}>
                {p}
              </motion.p>
            ))}
            <div className="space-y-4 mt-6 mb-8">
              {highlights.map((h, i) => (
                <motion.div key={h.title} className="flex items-center gap-3" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}>
                  <CheckCircle className="w-5 h-5 text-[#1a5c38] shrink-0" />
                  <span className="text-[#374151] font-medium text-sm">{h.title}</span>
                </motion.div>
              ))}
            </div>
            <a href="/company/leadership" className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md">
              Meet Our Food Science Team <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right */}
          <motion.div className="relative" initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.18), 0 24px 64px rgba(0,0,0,0.12)" }}>
              <Image src="/images/hero-leavening.png" alt="GC Ingredients R&D laboratory conducting formulation trials" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/35 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 bg-[#e8650a] text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              500+ Annual Trials
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
