"use client";
import { motion } from "framer-motion";
import { GCIcon, type IconName } from "../ui/GCIcon";

export interface DetailCard {
  Icon: IconName;
  iconColor?: "green" | "orange";
  title: string;
  description: string;
}

interface DetailCardsProps {
  sectionTag?: string;
  h2: string;
  subtext?: string;
  cards: DetailCard[];
}

export default function DetailCards({
  sectionTag = "What We Do",
  h2,
  subtext,
  cards,
}: DetailCardsProps) {
  return (
    <section
      className="py-20"
      style={{ background: "#f8f5ef" }}
      aria-label="Detail Cards"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a5c38]/8 border border-[#1a5c38]/15 text-[#1a5c38] text-xs font-bold tracking-widest uppercase mb-4">
            {sectionTag}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] max-w-2xl mx-auto">
            {h2}
          </h2>
          {subtext && (
            <p className="text-[#6b7280] text-base mt-4 max-w-xl mx-auto">{subtext}</p>
          )}
        </motion.div>

        {/* Cards 2x2 */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const isOrange = card.iconColor === "orange";
            return (
              <motion.article
                key={card.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 group hover:border-[#1a5c38]/20 transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              >
                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: isOrange ? "rgba(232,101,10,0.08)" : "rgba(26,92,56,0.08)",
                    border: isOrange ? "1px solid rgba(232,101,10,0.15)" : "1px solid rgba(26,92,56,0.12)",
                  }}
                >
                  <card.Icon
                    className="w-6 h-6"
                    style={{ color: isOrange ? "#e8650a" : "#1a5c38" }}
                  />
                </div>
                <h3 className="font-bold text-[#111827] text-lg font-[family-name:var(--font-plus-jakarta)] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
