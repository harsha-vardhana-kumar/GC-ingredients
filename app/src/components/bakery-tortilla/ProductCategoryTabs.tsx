"use client";
import { useState, useEffect, useRef } from "react";
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
    headline: "Leading Manufacturer of Food Preservative Blends",
    description: "GC Ingredients is a leading manufacturer of food preservative blends in liquid and dry form. We make anti-microbials for tortillas, cakes, breads, and meats based on the required shelf life and manufacturing processes.",
    benefits: [
      "GC Max — Liquid blend for corn flour tortillas",
      "GC Strong — Liquid blend for corn flour tortillas",
      "GC Protect — Liquid blend for corn flour tortillas",
      "GC Concentrate — Liquid blend for corn flour tortillas",
      "GC Microstat-A & GC Microstat-B — Liquid blends for meat & poultry",
      "GCI Kake & GCI Glaze — Liquid blends for cakes",
      "Liquid Citrates, Sorbates, Benzoates & Phosphates",
    ],
    applications: ["Bread", "Corn Flour Tortillas", "Cakes", "Meats", "Wraps"],
  },
  {
    id: "tortilla-batch-packs",
    label: "Tortilla Batch Packs",
    badge: "Tortilla Batch Packs",
    headline: "Complete Tortilla Systems in One Pack",
    description: "Tortilla is a thin round of unleavened cornmeal or wheat flour bread usually eaten hot with a topping or filling. We at GC Ingredients blend all the essential, functional ingredients into one mix, streamlining the process for customers.",
    benefits: [
      "Burrito / Food Service / California Style",
      "Gordita / Casera",
      "Homestyle",
      "Keto Friendly / Low Carb Tortilla",
      "Flavored Tortillas",
      "Clean Label Tortilla Batch Packs",
    ],
    applications: ["Flour Tortillas", "Corn Tortillas", "Wraps", "Flatbreads"],
  },
  {
    id: "leavening-agents",
    label: "Leavening Agents",
    badge: "Leavening Agents",
    headline: "Precise Leavening for Perfect Rise Every Time",
    description: "We provide a variety of leavening agents to suit your application needs. Leavening acids are typically used in conjunction with an alkaline source such as baking soda to take the place of yeast in baked goods. Acid/base leavening systems produce carbon dioxide in the presence of heat and water.",
    benefits: [
      "Sodium Bicarbonate",
      "Sodium Aluminum Phosphate (SALP)",
      "Sodium Acid Pyrophosphate (SAPP)",
      "Monocalcium Phosphate (MCP)",
      "Sodium Aluminum Sulfate (SAS)",
      "Single and Double Acting Baking Powder",
    ],
    applications: ["Bread", "Rolls", "Muffins", "Tortillas", "Biscuits", "Cakes"],
  },
  {
    id: "gums-stabilizers",
    label: "Gums & Stabilizers",
    badge: "Gums & Stabilizers",
    headline: "Superior Texture and Stability Control",
    description: "GCI offers various gums. Based on the application — whether it is bakery, dairy or any other application — we are able to offer the best combination of gum or gum blends to you. Please feel free to reach out to discuss your needs.",
    benefits: [
      "Guar Gum",
      "Xanthan Gum",
      "CMC Gum (Sodium Carboxymethylcellulose)",
      "LBG Gum (Locust Bean Gum)",
      "Custom Stabilizer Blends",
    ],
    applications: ["Tortillas", "Bread", "Sauces", "Dairy", "Dressings"],
  },
  {
    id: "starches",
    label: "Starches",
    badge: "Starches",
    headline: "Native & Modified Starches from Corn, Tapioca and Potato",
    description: "We offer native and modified starches from corn, tapioca, and potato. We know starches are very complex, so we're here for you. We can recommend the right starch for your specific needs — based on processing conditions such as time, temperature, pH, moisture, and more.",
    benefits: [
      "Native and Modified Corn & Waxy Maize Starches",
      "Native and Modified Tapioca Starches",
      "Native and Modified Potato Starches",
      "Resistant Starches",
    ],
    applications: ["Tortillas", "Breads", "Batters", "Coatings", "Sauces"],
  },
  {
    id: "wheat-protein",
    label: "Wheat Protein",
    badge: "Wheat Protein",
    headline: "Strengthen Dough Structure and Improve Performance",
    description: "Wheat Proteins consist of gliadin and glutenin — the two insoluble protein groups. They create a well-balanced elastic and extensible texture to achieve high level of dough strength, which is very crucial for tortilla, bread and noodle making. Our wheat protein products create texture and effects that are highly desirable for baked goods.",
    benefits: [
      "Vital Wheat Gluten",
      "Wheat Protein Isolate",
      "Improved dough strength and elasticity",
      "Enhanced water absorption for machinability",
    ],
    applications: ["Bread", "Tortillas", "Pasta", "Noodles", "Meat Analogs"],
  },
];

export default function ProductCategoryTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const lastHashRef = useRef("");

  useEffect(() => {
    // ── Step 1: Initial load — read hash once ──
    const initialHash = window.location.hash;
    lastHashRef.current = initialHash;
    const cleanInitial = initialHash.replace("#", "");
    
    if (cleanInitial && tabs.some(t => t.id === cleanInitial)) {
      setActiveTab(cleanInitial);
      // Wait a bit for page to render then scroll
      setTimeout(() => {
        const el = document.getElementById("products");
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 350);
    }

    // ── Step 2: Next.js hashchange polling (since Next.js Link intercepts hashchange) ──
    const interval = setInterval(() => {
      const currentHash = window.location.hash;
      
      // If the URL hash changed, switch tabs and scroll to section exactly ONCE
      if (currentHash !== lastHashRef.current) {
        lastHashRef.current = currentHash;
        const cleanHash = currentHash.replace("#", "");
        
        if (cleanHash && tabs.some(t => t.id === cleanHash)) {
          setActiveTab(cleanHash);
          
          const el = document.getElementById("products");
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Update URL hash without scrolling so navbar links can be clicked again
    window.history.replaceState(null, "", `#${tabId}`);
    lastHashRef.current = `#${tabId}`;
  };

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
            onChange={(e) => handleTabClick(e.target.value)}
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
              onClick={() => handleTabClick(tab.id)}
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
                  alt={`GC Ingredients ${activeData.badge}`} title={`GC Ingredients ${activeData.badge}`}
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
