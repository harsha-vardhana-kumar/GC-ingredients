"use client";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, Settings2, ShieldCheck, Headphones } from "lucide-react";

const cards = [
  { icon: Microscope, color: "#1a5c38", title: "Deep Application Knowledge", desc: "Category-specific expertise across all 6 food manufacturing segments." },
  { icon: Settings2, color: "#e8650a", title: "Custom Per Application", desc: "Formulations built specifically for your product and production process." },
  { icon: ShieldCheck, color: "#1a5c38", title: "QC Validated", desc: "Every batch tested against application-specific performance standards." },
  { icon: Headphones, color: "#e8650a", title: "Specialist Support", desc: "Dedicated application specialists for each food category." },
];

export default function WhyGCIApplications() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Why GCI</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Application Expertise <span className="text-[#1a5c38]">You Can Count On</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)] transition-all duration-300 flex items-start gap-4"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: c.color + "15" }}>
                  <Icon className="w-6 h-6" style={{ color: c.color }} />
                </div>
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-1">{c.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
