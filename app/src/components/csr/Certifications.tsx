"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, ClipboardCheck, Globe } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "Food Safety Certified",
    sub: "Meeting the highest standards in food safety and quality assurance.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    sub: "Verified responsible sourcing across all ingredient categories.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Compliant",
    sub: "Rigorous quality management systems across all operations.",
  },
  {
    icon: Globe,
    title: "Ethical Supply Chain",
    sub: "Transparent, traceable, and ethical supplier relationships.",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Standards We Uphold</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Certified, Compliant,{" "}
            <span className="text-[#1a5c38]">and Accountable</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a5c38]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#1a5c38]" />
                </div>
                <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">
                  {c.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{c.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
