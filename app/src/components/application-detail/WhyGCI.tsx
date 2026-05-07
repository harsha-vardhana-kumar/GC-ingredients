"use client";
import { motion } from "framer-motion";
import { GCIcon, type IconName } from "../ui/GCIcon";

export interface WhyCard {
  Icon: IconName;
  title: string;
  description: string;
}

interface WhyGCIProps {
  sectionTag?: string;
  h2?: string;
  subtext?: string;
  cards: WhyCard[];
}

export default function WhyGCI({
  sectionTag = "Why GCI",
  h2 = "Why Food Manufacturers Choose GCI",
  subtext = "Purpose-built expertise, custom formulations, and unmatched application support.",
  cards,
}: WhyGCIProps) {
  return (
    <section className="py-20 bg-white" aria-label="Why GCI">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8650a]/8 border border-[#e8650a]/20 text-[#e8650a] text-xs font-bold tracking-widest uppercase mb-4">
            {sectionTag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] max-w-2xl mx-auto">
            {h2}
          </h2>
          <p className="text-[#6b7280] text-base mt-4 max-w-xl mx-auto">{subtext}</p>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-[#f8f5ef]/60 group hover:border-[#1a5c38]/20 hover:bg-white transition-all duration-300"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a5c38] flex items-center justify-center shrink-0 group-hover:bg-[#e8650a] transition-colors duration-300">
                <GCIcon name={card.Icon} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827] text-base font-[family-name:var(--font-plus-jakarta)] mb-1">
                  {card.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
