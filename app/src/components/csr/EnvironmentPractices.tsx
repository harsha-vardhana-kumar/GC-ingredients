"use client";
import { motion } from "framer-motion";
import { Recycle, Zap, Droplets, PackageCheck } from "lucide-react";

const practices = [
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Systematic reduction of manufacturing waste through lean production practices.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Ongoing investment in energy-efficient equipment and processes.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Responsible water usage and recycling in all production operations.",
  },
  {
    icon: PackageCheck,
    title: "Responsible Packaging",
    description: "Minimizing packaging waste with optimized, recyclable materials.",
  },
];

export default function EnvironmentPractices() {
  return (
    <section className="py-24 bg-[#ede8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Environmental Practices</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            How We Manufacture{" "}
            <span className="text-[#1a5c38]">Responsibly</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {practices.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1a5c38]" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">
                  {p.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
