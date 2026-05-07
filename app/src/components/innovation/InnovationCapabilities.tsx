"use client";
import { motion } from "framer-motion";
import { Settings2, Microscope, TestTube, Rocket, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Settings2,
    iconColor: "#1a5c38",
    badge: "Custom R&D",
    title: "Custom Blend Development",
    desc: "From a brief product spec to a fully validated ingredient system — our food scientists develop custom blends built precisely around your product, your process, and your cost targets.",
    points: ["Spec-to-formula development", "Iterative testing and refinement", "Production-scale validation"],
  },
  {
    icon: Microscope,
    iconColor: "#e8650a",
    badge: "Expertise",
    title: "Deep Food Science Knowledge",
    desc: "Our team combines academic food science with hands-on manufacturing experience — giving you access to expertise that understands both the laboratory and the production floor.",
    points: ["Category-specific application knowledge", "Ingredient interaction expertise", "Regulatory and compliance awareness"],
  },
  {
    icon: TestTube,
    iconColor: "#1a5c38",
    badge: "Quality",
    title: "Rigorous Testing & Validation",
    desc: "Every formulation goes through a rigorous multi-stage testing process — ensuring it performs consistently in your production environment before a single batch is delivered.",
    points: ["Bench-scale to pilot testing", "Production environment simulation", "Full QC validation before delivery"],
  },
  {
    icon: Rocket,
    iconColor: "#e8650a",
    badge: "Development",
    title: "End-to-End Product Development",
    desc: "From initial concept to full production launch — our team supports your product development journey at every stage, helping you get to market faster with confidence.",
    points: ["Concept to production support", "Speed-to-market focus", "Post-launch technical support"],
  },
];

export default function InnovationCapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Our Capabilities</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            What Our R&amp;D Team <span className="text-[#1a5c38]">Can Do For You</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: cap.iconColor + "12" }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                >
                  <Icon className="w-8 h-8" style={{ color: cap.iconColor }} />
                </motion.div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8650a]/10 text-[#e8650a] mb-4">{cap.badge}</span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">{cap.title}</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm mb-5">{cap.desc}</p>
                <ul className="space-y-2 mb-6">
                  {cap.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-[#6b7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c38] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="inline-flex items-center gap-1 text-[#1a5c38] hover:text-[#e8650a] font-semibold text-sm transition-colors group">
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
