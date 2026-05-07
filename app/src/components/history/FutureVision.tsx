"use client";
import { motion } from "framer-motion";
import { Telescope } from "lucide-react";

const visionCards = [
  {
    emoji: "🔬",
    title: "Expand R&D",
    description:
      "Investing in next-generation ingredient technologies and food science capabilities.",
  },
  {
    emoji: "🌍",
    title: "Global Reach",
    description:
      "Extending our supply chain and partnerships to serve manufacturers worldwide.",
  },
  {
    emoji: "♻️",
    title: "Sustainable Future",
    description:
      "Committing to environmentally responsible sourcing and production practices.",
  },
];

export default function FutureVision() {
  return (
    <section className="py-24 bg-[#0d3a22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#e8650a]/20 flex items-center justify-center">
            <Telescope className="w-8 h-8 text-[#e8650a]" />
          </div>
        </motion.div>

        {/* Tag */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Looking Ahead
        </motion.div>

        {/* H2 */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.15] mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The Next Chapter of{" "}
          <span className="text-[#e8650a]">GC Ingredients</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-14 text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          We are not done growing. With continuous R&amp;D investment, expanding
          manufacturing capabilities, and a relentless focus on customer success, GC
          Ingredients is building the future of food ingredient innovation — one formulation
          at a time.
        </motion.p>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {visionCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="text-left rounded-2xl p-6 border-l-4 border-[#1a5c38]"
              style={{ background: "rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-3xl mb-4">{card.emoji}</div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-plus-jakarta)] text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
