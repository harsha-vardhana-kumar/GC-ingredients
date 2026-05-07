"use client";
import { motion } from "framer-motion";
import { Clock, UserCheck, MessageSquare } from "lucide-react";

const promises = [
  { icon: Clock, title: "24hr Response", desc: "Every enquiry receives a response within one business day — guaranteed", color: "#1a5c38" },
  { icon: UserCheck, title: "Right Person First Time", desc: "We route your enquiry directly to the most relevant specialist on our team", color: "#e8650a" },
  { icon: MessageSquare, title: "No Sales Pressure", desc: "Our first conversation is always about understanding your needs — nothing else", color: "#1a5c38" },
];

export default function ResponsePromise() {
  return (
    <section className="py-24 bg-[#ede8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1a5c38] text-white text-sm font-medium mb-6">
            Our Promise
          </div>
          <h2 className="text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            We Take Every Enquiry Seriously
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {promises.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: p.color + '15' }}>
                  <Icon className="w-8 h-8" style={{ color: p.color }} />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">{p.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
