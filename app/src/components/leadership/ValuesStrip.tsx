"use client";
import { motion } from "framer-motion";
import { Brain, Handshake, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Science-Led Decisions",
    subtext: "Every product and process backed by rigorous food science.",
  },
  {
    icon: Handshake,
    title: "Customer-First Always",
    subtext: "Your challenges become our obsession until they're solved.",
  },
  {
    icon: TrendingUp,
    title: "Growth Through Innovation",
    subtext: "Continuous R&D investment to stay ahead of the industry.",
  },
];

export default function ValuesStrip() {
  return (
    <motion.section
      className="bg-[#e8650a] py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:divide-x divide-white/25">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                className="flex items-start gap-4 md:px-8 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-[family-name:var(--font-plus-jakarta)] text-lg mb-1">
                    {val.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{val.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
