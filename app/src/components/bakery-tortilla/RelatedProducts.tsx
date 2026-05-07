"use client";
import { motion } from "framer-motion";
import { ChefHat, FlaskConical, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: ChefHat,
    color: "#1a5c38",
    title: "See All Applications",
    desc: "Explore how GCI ingredient systems perform across bakery, tortilla, dairy, meat, snack foods, and prepared food applications.",
    cta: "View Applications",
    href: "/applications",
  },
  {
    icon: FlaskConical,
    color: "#e8650a",
    title: "Custom R&D & Innovation",
    desc: "Need something completely unique? Our R&D team develops fully custom ingredient systems from scratch around your exact product vision.",
    cta: "Explore Innovation",
    href: "/innovation",
  },
];

export default function RelatedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Related Solutions</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Explore More GCI <span className="text-[#1a5c38]">Ingredient Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="bg-[#f8f5ef] rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300"
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: card.color + "15" }}>
                  <Icon className="w-8 h-8" style={{ color: card.color }} />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">{card.title}</h3>
                <p className="text-[#6b7280] leading-relaxed mb-6 text-sm">{card.desc}</p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 border border-[#1a5c38] text-[#1a5c38] hover:bg-[#1a5c38] hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm group"
                >
                  {card.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
