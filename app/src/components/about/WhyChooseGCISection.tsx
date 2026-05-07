"use client";
import { motion } from "framer-motion";
import { Microscope, Users, Puzzle, Package, Clock, Shield } from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "In-Depth Food Science Expertise",
    description:
      "Our in-house food scientists bring decades of applied R&D experience, ensuring every formulation is grounded in rigorous science.",
  },
  {
    icon: Users,
    title: "Customer-Focused Team",
    description:
      "A dedicated technical team that puts your success first — responsive, knowledgeable, and with you at every step.",
  },
  {
    icon: Puzzle,
    title: "Tailor-Made Solutions",
    description:
      "We don't sell off-the-shelf ingredients. Every system is custom-engineered for your specific application, equipment, and goals.",
  },
  {
    icon: Package,
    title: "One-Stop Drum-to-Hopper Supply",
    description:
      "From raw material sourcing to blended system delivery, we manage the entire ingredient supply chain for you.",
  },
  {
    icon: Clock,
    title: "On-Time Technical Support",
    description:
      "Rapid response from our technical team — prototype support, reformulation assistance, and production troubleshooting when you need it.",
  },
  {
    icon: Shield,
    title: "Consistent Quality Assurance",
    description:
      "Rigorous lot-level QC testing, FSSC 22000 certified manufacturing, and full traceability built into every batch we ship.",
  },
];

export default function WhyChooseGCISection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Why GC Ingredients</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Your End-to-End{" "}
            <span className="text-gradient-green">Ingredient Partner</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            We don&apos;t just supply ingredients — we co-develop solutions that help you win on shelf and scale in production.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="bg-[#f8f5ef] rounded-2xl p-7 card-hover border border-[#e8e3d9] group relative overflow-hidden"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#f0f7f3] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-[#1a5c38]" />
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#1a5c38]/05 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{reason.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a5c38] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
