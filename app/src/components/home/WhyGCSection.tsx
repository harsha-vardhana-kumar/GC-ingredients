import { Microscope, HeartHandshake, Globe, Timer, Award, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Food Science at the Core",
    description:
      "Our in-house R&D lab runs 500+ application trials annually. Every recommendation is backed by technical data, not guesswork.",
    color: "#1a5c38",
    bg: "#f0f7f3",
  },
  {
    icon: HeartHandshake,
    title: "True Technical Partnership",
    description:
      "You get a dedicated food technologist — not a sales rep. From the first trial to the production floor, we stay with you.",
    color: "#e8650a",
    bg: "#fdf8f0",
  },
  {
    icon: Globe,
    title: "Global Supply Security",
    description:
      "Dual-sourced raw materials, safety stock programs, and logistics flexibility across Americas, Europe, and Middle East.",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: Timer,
    title: "Speed to Market",
    description:
      "Prototype in 2 weeks, pilot in 4, commercial in 8. Our streamlined project management keeps your launch on schedule.",
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: Award,
    title: "Best-in-Class Quality",
    description:
      "FSSC 22000 certified manufacturing, lot-level traceability, and zero-failure supply backed by our quality guarantee.",
    color: "#c97b2b",
    bg: "#fdf8f0",
  },
  {
    icon: Leaf,
    title: "Sustainability-First",
    description:
      "We help you reduce E-numbers, reformulate for clean labels, and source from verified sustainable origins — without compromising performance.",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
];

export default function WhyGCSection() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag mx-auto mb-4">Why GC Ingredients</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            The partner food manufacturers{" "}
            <span className="text-gradient-green">trust most</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We don't just sell ingredients — we co-develop solutions that help you win on shelf.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: reason.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: reason.color }} />
                </div>
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-plus-jakarta)] text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
