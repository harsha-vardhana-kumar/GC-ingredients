"use client";
import { motion } from "framer-motion";
import { ArrowLeftRight, Layers, RefreshCw } from "lucide-react";

const cards = [
  {
    icon: ArrowLeftRight,
    title: "Multi-Category Systems",
    desc: "One ingredient system, multiple applications across your product range.",
  },
  {
    icon: Layers,
    title: "Scalable Formulations",
    desc: "From pilot batch to full-scale production — same consistent performance.",
  },
  {
    icon: RefreshCw,
    title: "Reformulation Support",
    desc: "Need to update an existing formula? Our team handles the transition.",
  },
];

export default function CrossAppCapabilities() {
  return (
    <section className="py-24 bg-[#0d3a22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Cross-Category Expertise
        </motion.div>

        <motion.h2
          className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.15] mb-5 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ingredients That Work Across{" "}
          <span className="text-[#e8650a]">Your Entire Portfolio</span>
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Many GCI ingredient systems are engineered to perform across multiple food categories — giving manufacturers with diverse product portfolios a single, trusted ingredient partner.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                className="p-6 rounded-2xl border-l-4 border-[#1a5c38]"
                style={{ background: "rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#e8650a]" />
                </div>
                <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-white mb-2">{c.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
