"use client";
import { motion } from "framer-motion";
import { Users, Leaf, Heart, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Users,
    badge: "Empowerment",
    title: "Women Empowerment & Education",
    description: "We are proud to support the education and empowerment of girl children, ensuring they have access to the resources they need to build a brighter future. Through our ongoing partnerships with various non-governmental organizations (NGOs), we actively contribute to initiatives that provide schooling, skill development, and equal opportunities for young girls.",
    bullets: [
      "Education and schooling support",
      "Skill development initiatives",
      "Equal opportunities for young girls",
    ],
  },
  {
    icon: Leaf,
    badge: "Environment",
    title: "Environmental Stewardship",
    description: "We are committed to reducing our environmental footprint. Our manufacturing facility in Irving, TX is designed with sustainability in mind, focusing on energy efficiency, waste reduction, and responsible sourcing. By continuously optimizing our operations, we aim to protect our planet for generations to come.",
    bullets: [
      "Energy efficient manufacturing",
      "Waste reduction",
      "Responsible sourcing",
    ],
  },
  {
    icon: Heart,
    badge: "Community",
    title: "Community Engagement",
    description: "We believe in the power of community. GC Ingredients regularly participates in local outreach programs, food drives, and charitable events. Our goal is to foster a culture of giving and support those in need, creating a positive impact where we live and work.",
    bullets: [
      "Local outreach programs",
      "Food drives",
      "Charitable events",
    ],
  },
];

export default function CSRPrograms() {
  return (
    <section id="programs" className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Our Programs</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Three Pillars of Our{" "}
            <span className="text-[#1a5c38]">CSR Strategy</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Our CSR efforts are focused on three core areas that matter most to our people,
            our planet, and our communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.title}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(26,92,56,0.08)" }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                >
                  <Icon className="w-8 h-8 text-[#1a5c38]" />
                </motion.div>

                {/* Badge */}
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8650a]/10 text-[#e8650a] mb-4">
                  {prog.badge}
                </span>

                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">
                  {prog.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed text-sm mb-5">
                  {prog.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {prog.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-[#6b7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c38] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[#1a5c38] hover:text-[#e8650a] font-semibold text-sm transition-colors group"
                >
                  Learn More{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
