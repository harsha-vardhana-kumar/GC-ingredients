"use client";
import { motion } from "framer-motion";
import { FlaskConical, Package, ShieldCheck, Truck, Mail } from "lucide-react";

const departments = [
  { icon: FlaskConical, name: "R&D & Formulation", desc: "Custom blend development, reformulation, technical questions", email: "formulations@gcingredients.com" },
  { icon: Package, name: "Sales & Orders", desc: "New orders, pricing, product availability, account management", email: "sales@gcingredients.com" },
  { icon: ShieldCheck, name: "Quality & Compliance", desc: "QC queries, certificates of analysis, compliance documentation", email: "quality@gcingredients.com" },
  { icon: Truck, name: "Supply Chain & Logistics", desc: "Delivery, tracking, supply chain enquiries", email: "logistics@gcingredients.com" },
];

export default function DepartmentContacts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Find the Right Team</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Contact the Right <span className="text-[#1a5c38]">Department Directly</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Not sure who to contact? Here&apos;s a quick guide to help you reach the right team first time.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.name}
                className="bg-[#f8f5ef] rounded-[16px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#1a5c38]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-[#1a5c38]" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#e8650a]/10 text-[#e8650a] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {dept.name}
                    </span>
                    <p className="text-[#111827] font-semibold mb-4 leading-relaxed">{dept.desc}</p>
                    <a href={`mailto:${dept.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a5c38] hover:text-[#e8650a] transition-colors">
                      <Mail className="w-4 h-4" /> {dept.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
