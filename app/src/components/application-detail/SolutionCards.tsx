"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GCIcon, type IconName } from "../ui/GCIcon";

export interface SolutionCard {
  Icon: IconName;
  name: string;
  description: string;
  applications: string[];
}

interface SolutionCardsProps {
  sectionTag?: string;
  h2: string;
  subtext?: string;
  cards: SolutionCard[];
}

export default function SolutionCards({
  sectionTag = "GCI Ingredient Solutions",
  h2,
  subtext,
  cards,
}: SolutionCardsProps) {
  return (
    <section
      id="solutions"
      className="py-20"
      style={{ background: "#f8f5ef" }}
      aria-label="Ingredient Solutions"
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

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.article
              key={card.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 group"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/8 border border-[#1a5c38]/10 flex items-center justify-center group-hover:bg-[#1a5c38] transition-colors duration-300">
                <GCIcon name={card.Icon} className="w-6 h-6 text-[#1a5c38] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Name + description */}
              <div>
                <h3 className="font-bold text-[#111827] text-base font-[family-name:var(--font-plus-jakarta)] mb-1">
                  {card.name}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{card.description}</p>
              </div>

              {/* Applications */}
              <div>
                <div className="text-[10px] font-bold text-[#1a5c38] uppercase tracking-widest mb-2">
                  Used In
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {card.applications.map((app) => (
                    <span
                      key={app}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-[#1a5c38]/6 border border-[#1a5c38]/10 text-[#1a5c38] font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href="/contact"
                className="mt-auto inline-flex items-center gap-1.5 text-[#e8650a] font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Request This Product <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
