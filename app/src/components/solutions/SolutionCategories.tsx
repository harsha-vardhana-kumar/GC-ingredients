"use client";
import { motion } from "framer-motion";
import { Wheat, Apple, CheckCircle, ArrowRight } from "lucide-react";

const bakeryTags = [
  "Food Preservative Blends",
  "Tortilla Batch Packs",
  "Leavening Agents",
  "Gums & Stabilizers",
  "Starches",
  "Wheat Protein",
];

export default function SolutionCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Solution Categories</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Two Powerful <span className="text-[#1a5c38]">Ingredient Platforms</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Everything your food manufacturing operation needs, delivered through two specialized solution platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1 — Bakery & Tortilla */}
          <motion.div
            className="bg-[#f8f5ef] rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-t-4 hover:border-[#1a5c38] transition-all duration-300 border border-transparent"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#1a5c38]/10 flex items-center justify-center mb-5">
              <Wheat className="w-8 h-8 text-[#1a5c38]" />
            </div>
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#1a5c38]/10 text-[#1a5c38] mb-4">In-House</span>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">
              Bakery &amp; Tortilla Solutions
            </h3>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              Comprehensive ingredient systems for bakery and tortilla manufacturers — from preservative blends to custom leavening agents, gums, starches, and wheat proteins.
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {bakeryTags.map((tag) => (
                <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1a5c38]/10 text-[#1a5c38] border border-[#1a5c38]/20">
                  {tag}
                </span>
              ))}
            </div>
            <a href="/solutions/bakery-tortilla" className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md">
              Explore Bakery &amp; Tortilla <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Card 2 — Nutrition Solutions */}
          <motion.div
            className="bg-[#0d3a22] rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(232,101,10,0.15)" }}>
              <Apple className="w-8 h-8 text-[#e8650a]" />
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#e8650a]/20 text-[#e8650a] mb-4">
              Primaria Nutrition ↗
            </span>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white mb-3">
              Nutrition Solutions
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Advanced nutrition ingredient systems and formulations available through our specialized Primaria Nutrition platform — purpose-built for nutrition-focused food manufacturers.
            </p>
            <div className="space-y-3 mb-7">
              {["Specialized nutrition formulations", "Science-backed ingredient systems", "Dedicated nutrition expertise"].map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#1a5c38] shrink-0" />
                  <span className="text-white/80 text-sm">{pt}</span>
                </div>
              ))}
            </div>
            <a
              href="https://primarianutrition.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md shadow-[#e8650a]/30"
            >
              Visit Primaria Nutrition ↗
            </a>
            <p className="text-white/40 text-xs italic mt-3">Opens in a new tab — separate platform</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
