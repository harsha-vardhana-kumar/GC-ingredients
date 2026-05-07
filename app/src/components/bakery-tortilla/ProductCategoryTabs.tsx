"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

type Tab = {
  id: string;
  label: string;
  badge: string;
  headline: string;
  description: string;
  benefits: string[];
  applications: string[];
};

const tabs: Tab[] = [
  {
    id: "preservative-blends",
    label: "Food Preservative Blends",
    badge: "Food Preservative Blends",
    headline: "Extend Shelf Life Without Compromising Quality",
    description: "Our food preservative blends are scientifically formulated to extend the shelf life of bakery and tortilla products while maintaining taste, texture, and nutritional integrity.",
    benefits: [
      "Extended shelf life up to 30+ days",
      "Maintains freshness and texture",
      "Clean label compatible options",
      "Custom concentration levels available",
    ],
    applications: ["Bread", "Tortillas", "Rolls", "Flatbreads", "Wraps"],
  },
  {
    id: "tortilla-batch-packs",
    label: "Tortilla Batch Packs",
    badge: "Tortilla Batch Packs",
    headline: "Complete Tortilla Systems in One Pack",
    description: "Pre-measured, ready-to-use tortilla batch packs that simplify your production process, ensure consistency, and reduce preparation time on the manufacturing floor.",
    benefits: [
      "Pre-measured for production consistency",
      "Reduces prep time and labor",
      "Available for flour and corn tortillas",
      "Custom batch sizes available",
    ],
    applications: ["Flour Tortillas", "Corn Tortillas", "Wraps", "Flatbreads"],
  },
  {
    id: "leavening-agents",
    label: "Leavening Agents",
    badge: "Leavening Agents",
    headline: "Precise Leavening for Perfect Rise Every Time",
    description: "Our custom leavening agent systems are engineered to deliver consistent rise, texture, and crumb structure across all bakery and tortilla applications.",
    benefits: [
      "Consistent rise and texture",
      "Optimized for high-speed production",
      "Custom reaction rates available",
      "Single and double-acting systems",
    ],
    applications: ["Bread", "Rolls", "Muffins", "Tortillas", "Biscuits", "Cakes"],
  },
  {
    id: "gums-stabilizers",
    label: "Gums & Stabilizers",
    badge: "Gums & Stabilizers",
    headline: "Superior Texture and Stability Control",
    description: "Our gum and stabilizer systems improve texture, moisture retention, and product stability — delivering consistent results across every production run.",
    benefits: [
      "Improved texture and mouthfeel",
      "Enhanced moisture retention",
      "Reduced syneresis and separation",
      "Compatible with clean label requirements",
    ],
    applications: ["Tortillas", "Bread", "Sauces", "Dairy", "Dressings"],
  },
  {
    id: "starches",
    label: "Starches",
    badge: "Starches",
    headline: "Functional Starches for Every Application",
    description: "Our starch portfolio covers native and modified starches optimized for bakery and tortilla manufacturing — delivering the thickening, binding, and texturizing performance your products demand.",
    benefits: [
      "Native and modified starch options",
      "Superior binding and thickening",
      "Freeze-thaw stability",
      "Custom granulation available",
    ],
    applications: ["Tortillas", "Breads", "Batters", "Coatings", "Sauces"],
  },
  {
    id: "wheat-protein",
    label: "Wheat Protein",
    badge: "Wheat Protein",
    headline: "Strengthen Structure and Improve Performance",
    description: "Our wheat protein ingredients enhance dough strength, elasticity, and water absorption — improving the performance and consistency of your bakery and tortilla products.",
    benefits: [
      "Improved dough strength and elasticity",
      "Enhanced water absorption",
      "Better machinability on production lines",
      "Available in vital and hydrolyzed forms",
    ],
    applications: ["Bread", "Tortillas", "Pasta", "Noodles", "Meat Analogs"],
  },
];

export default function ProductCategoryTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Our Products</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Six Specialized <span className="text-[#1a5c38]">Ingredient Categories</span>
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-lg">
            Each category is backed by deep R&amp;D expertise and available as custom formulations tailored to your specific manufacturing needs.
          </p>
        </motion.div>

        {/* Mobile: select dropdown */}
        <div className="lg:hidden mb-8">
          <select
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111827] font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c38]"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {tabs.map((t) => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </div>

        {/* Desktop: tab pills */}
        <div className="hidden lg:flex flex-wrap gap-2 mb-10 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#1a5c38] text-white shadow-md"
                  : "text-[#6b7280] hover:text-[#1a5c38] bg-gray-50 hover:bg-[#1a5c38]/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: content */}
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-[#e8650a]/10 text-[#e8650a] mb-5">
                  {activeData.badge}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
                  {activeData.headline}
                </h3>
                <p className="text-[#6b7280] leading-relaxed mb-6 text-[17px]">{activeData.description}</p>

                <div className="space-y-3 mb-6">
                  {activeData.benefits.map((b, i) => (
                    <motion.div
                      key={b}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                    >
                      <CheckCircle className="w-4 h-4 text-[#1a5c38] shrink-0" />
                      <span className="text-[#374151] text-sm">{b}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs text-[#6b7280] font-medium self-center">Applications:</span>
                  {activeData.applications.map((a) => (
                    <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-[#6b7280]">{a}</span>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md"
                >
                  Request This Product <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right: image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.1)" }}>
                <Image
                  src="/images/bakery_hero.png"
                  alt={`GC Ingredients ${activeData.badge}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a5c38]/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
