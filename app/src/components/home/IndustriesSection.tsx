"use client";
import { useState } from "react";
import { ArrowRight, ChefHat, Utensils, Milk } from "lucide-react";

const industries = [
  {
    id: "bakery",
    label: "Bakery",
    icon: ChefHat,
    color: "#c97b2b",
    bg: "#fdf8f0",
    headline: "Complete Bakery Ingredient Systems",
    description:
      "From artisan breads to high-volume tortilla production, our functional ingredient systems deliver consistent texture, extended shelf life, and superior moisture retention.",
    features: ["Volume & crumb improvers", "Dough conditioners", "Mold inhibitors", "Enzyme blends"],
    image: "/images/leavening.jpg",
  },
  {
    id: "tortilla",
    label: "Tortilla",
    icon: Utensils,
    color: "#1a5c38",
    bg: "#f0f7f3",
    headline: "Tortilla & Flatbread Solutions",
    description:
      "Specialized conditioner systems that ensure pliability, rollability, and extended freshness for flour tortillas, corn tortillas, and flatbreads in any production environment.",
    features: ["Pliability enhancers", "Anti-staling agents", "Texture modifiers", "Roll & fold performance"],
    image: "/images/hero-lab.jpg",
  },
  {
    id: "dairy",
    label: "Dairy",
    icon: Milk,
    color: "#2563eb",
    bg: "#eff6ff",
    headline: "Dairy Stabilizer & Texture Systems",
    description:
      "Precision hydrocolloid and protein blends for yogurt, cheese, ice cream, and processed dairy applications — delivering body, creaminess, and stability.",
    features: ["Yogurt stabilizers", "Cream cheese texturizers", "Ice cream blends", "Whey protein systems"],
    image: "/images/hydrocolloids.jpg",
  },
  {
    id: "meat",
    label: "Meat",
    icon: Utensils,
    color: "#991b1b",
    bg: "#fef2f2",
    headline: "Meat Processing Ingredient Systems",
    description:
      "High-performance binders, phosphates, and functional proteins that improve yield, texture, and water-holding capacity across cooked and processed meat applications.",
    features: ["Yield improvers", "Binder systems", "Phosphate replacers", "Coating & breading"],
    image: "/images/preservatives.jpg",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState("bakery");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {/*<div className="section-tag mx-auto mb-4">Industries We Serve</div>*/}
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-[#111827] mb-4">
            Ingredient systems for every <span className="text-gradient-green">food category</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Tailored functional solutions backed by food science expertise and decades of application knowledge.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active === ind.id
                    ? "bg-white shadow-md text-[#1a5c38] border-2 border-[#1a5c38]"
                    : "bg-white/60 text-gray-500 border-2 border-transparent hover:border-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div
          key={current.id}
          className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl p-8 lg:p-12 animate-fade-up"
          style={{ background: current.bg }}
        >
          <div>
            <h3
              className="text-3xl font-bold font-display mb-4"
              style={{ color: current.color }}
            >
              {current.headline}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">{current.description}</p>

            <ul className="grid grid-cols-2 gap-3 mb-8">
              {current.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: current.color + "20" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: current.color }}
                    />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#solutions"
              className="inline-flex items-center gap-2 font-semibold text-sm"
              style={{ color: current.color }}
            >
              Explore {current.label} Solutions <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 lg:h-96">
            <img
              src={current.image}
              alt={current.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
