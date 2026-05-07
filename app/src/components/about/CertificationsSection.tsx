"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Food Safety Certified",
    description: "Full FSSC 22000 certification across all manufacturing operations.",
    badge: "FSSC",
    badgeColor: "#1a5c38",
  },
  {
    title: "Quality Standards Compliant",
    description: "Adherence to FDA, USDA, and international food safety regulations.",
    badge: "FDA",
    badgeColor: "#2563eb",
  },
  {
    title: "Consistent Supply Chain",
    description: "Dual-sourced raw materials and safety stock programs for supply reliability.",
    badge: "SCS",
    badgeColor: "#7c3aed",
  },
  {
    title: "Rigorous QC Testing",
    description: "Lot-level traceability and comprehensive quality testing on every batch.",
    badge: "QC",
    badgeColor: "#e8650a",
  },
];

export default function CertificationsSection() {
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
          <div className="section-tag mx-auto mb-4">Quality &amp; Safety</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Built on{" "}
            <span className="text-gradient-green">Verified Standards</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Every ingredient we produce and ship is backed by industry-leading certifications and testing protocols.
          </p>
        </motion.div>

        {/* Certification cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] card-hover border border-gray-100 text-center group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 shadow-md"
                style={{ background: cert.badgeColor }}
              >
                {cert.badge}
              </div>

              {/* Check icon */}
              <div className="flex justify-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#1a5c38]" />
              </div>

              <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] text-base mb-2">
                {cert.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust statement */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-[#6b7280] bg-[#f8f5ef] rounded-full px-5 py-2.5 border border-[#e8e3d9]">
            <CheckCircle2 className="w-4 h-4 text-[#1a5c38]" />
            All certifications are current and regularly audited by third-party bodies
          </div>
        </motion.div>
      </div>
    </section>
  );
}
