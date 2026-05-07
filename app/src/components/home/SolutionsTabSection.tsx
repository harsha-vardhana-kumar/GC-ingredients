"use client";
import { useState } from "react";
import { CheckCircle2, ArrowRight, FlaskConical, Layers, Zap, Shield } from "lucide-react";

const tabs = [
  {
    id: "formulation",
    label: "Custom Formulation",
    icon: FlaskConical,
    headline: "Bespoke ingredient systems, built for your exact spec",
    description:
      "Our food scientists work alongside your R&D team to develop custom ingredient solutions that match your process parameters, target costs, and consumer expectations.",
    benefits: [
      "Prototype in 2–4 weeks",
      "Pilot-scale trials available",
      "Full regulatory support",
      "Cost-in-use optimization",
      "Shelf-life validation",
      "Scale-up guidance",
    ],
    image: "/images/preservatives.jpg",
    accent: "#1a5c38",
  },
  {
    id: "stackable",
    label: "Stackable Systems",
    icon: Layers,
    headline: "Modular ingredient blends that evolve with your line",
    description:
      "Start with a core system and layer on functionality — clean label, extended shelf life, texture optimization — as your product portfolio grows.",
    benefits: [
      "Clean-label swap-ins",
      "Allergen-controlled options",
      "Organic-certified variants",
      "Drop-in replacements",
      "Multi-format flexibility",
      "Consistent performance",
    ],
    image: "/images/hydrocolloids.jpg",
    accent: "#2d7a4f",
  },
  {
    id: "performance",
    label: "Performance Guarantee",
    icon: Zap,
    headline: "Guaranteed performance at every scale of production",
    description:
      "Every formulation comes with documented performance specifications and technical support from your first production run to high-volume manufacturing.",
    benefits: [
      "Written spec guarantees",
      "On-site technical visit",
      "Batch-to-batch consistency",
      "QC documentation package",
      "Production troubleshooting",
      "Annual formula reviews",
    ],
    image: "/images/leavening.jpg",
    accent: "#e8650a",
  },
  {
    id: "compliance",
    label: "Regulatory Compliance",
    icon: Shield,
    headline: "Navigate complex global food regulations with confidence",
    description:
      "Full regulatory dossiers, GRAS notices, and market-specific compliance documentation for USA, EU, LATAM, and Middle Eastern markets.",
    benefits: [
      "GRAS / EFSA documentation",
      "Halal & Kosher certification",
      "Country-specific permits",
      "Label claim support",
      "Audit-ready SDS sheets",
      "Origin traceability",
    ],
    image: "/images/hero-lab.jpg",
    accent: "#1a5c38",
  },
];

export default function SolutionsTabSection() {
  const [active, setActive] = useState("formulation");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="solutions" className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {/*<div className="section-tag mx-auto mb-4">How We Work</div>*/}
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Ingredient solutions that work{" "}
            <span className="text-gradient-green">the way you do</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From concept to commercialization, our approach adapts to your timeline, scale, and technical requirements.
          </p>
        </div>

        {/* Tab row */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active === tab.id
                    ? "bg-white shadow-md text-[#1a5c38] border-2 border-[#1a5c38]"
                    : "bg-white/60 text-gray-500 border-2 border-transparent hover:border-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          key={current.id}
          className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl bg-white animate-fade-up"
        >
          {/* Image */}
          <div className="lg:col-span-2 relative min-h-64">
            <img
              src={current.image}
              alt={current.headline}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `linear-gradient(135deg, ${current.accent}, transparent)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
              {current.headline}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">{current.description}</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {current.benefits.map((b) => (
                <div key={b} className="flex items-center gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: current.accent }}
                  />
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: current.accent }}
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
