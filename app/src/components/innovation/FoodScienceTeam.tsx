"use client";
import { motion } from "framer-motion";
import { Microscope, FlaskConical, ShieldCheck } from "lucide-react";

const roles = [
  { icon: Microscope, title: "Food Scientists", desc: "Deep expertise in ingredient chemistry, functionality, and application performance." },
  { icon: FlaskConical, title: "R&D Specialists", desc: "Hands-on formulation development and bench-to-production scale-up expertise." },
  { icon: ShieldCheck, title: "QC Engineers", desc: "Rigorous quality validation ensuring every formula meets production standards." },
];

export default function FoodScienceTeam() {
  return (
    <section className="py-24 bg-[#ede8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Our People</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            The Scientists Behind <span className="text-[#1a5c38]">the Solutions</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Our food science team brings together decades of expertise across ingredient chemistry, food technology, and manufacturing process engineering.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1a5c38]/10 flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-[#1a5c38]" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">{role.title}</h3>
                <p className="text-[#6b7280] leading-relaxed text-sm mb-5">{role.desc}</p>
                <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-[#e8650a]/10 text-[#e8650a]">
                  Active Team
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
