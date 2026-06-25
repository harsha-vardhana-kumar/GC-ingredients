"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Using emoji-as-icon approach since some Lucide icons (Croissant, Beef, Cookie) may not be available
const apps = [
  { emoji: "🥐", color: "#1a5c38", bg: "rgba(26,92,56,0.08)", industry: "Bakery", desc: "Bread, rolls, pastries, muffins, cookies", href: "/solutions/applications/bakery" },
  { emoji: "🫓", color: "#e8650a", bg: "rgba(232,101,10,0.08)", industry: "Tortilla", desc: "Flour and corn tortillas, wraps, flatbreads", href: "/solutions/applications/tortilla" },
  { emoji: "🥛", color: "#1a5c38", bg: "rgba(26,92,56,0.08)", industry: "Dairy", desc: "Cheese, yogurt, dairy beverages, ice cream", href: "/solutions/applications/dairy" },
  { emoji: "🥩", color: "#e8650a", bg: "rgba(232,101,10,0.08)", industry: "Meat & Poultry", desc: "Processed meats, marinades, cured products", href: "/solutions/applications/meat-poultry" },
  { emoji: "🍿", color: "#1a5c38", bg: "rgba(26,92,56,0.08)", industry: "Snack Foods", desc: "Chips, crackers, extruded snacks, popcorn", href: "/solutions/applications/snack-foods" },
  { emoji: "🍱", color: "#e8650a", bg: "rgba(232,101,10,0.08)", industry: "Prepared Foods", desc: "Ready meals, frozen foods, meal kits", href: "/solutions/applications/prepared-foods" },
];

export default function ApplicationsGrid() {
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
          <div className="section-tag mx-auto mb-4">Industries We Serve</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Ingredient Solutions Across{" "}
            <span className="text-[#1a5c38]">Every Food Category</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Our formulations are trusted by food manufacturers across six major industry segments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={app.industry}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] transition-all duration-300"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: app.bg }}
              >
                {app.emoji}
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">
                {app.industry}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-5">{app.desc}</p>
              <a
                href={app.href}
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors group"
                style={{ color: app.color }}
              >
                Explore Applications{" "}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
