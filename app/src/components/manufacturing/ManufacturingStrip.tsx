"use client";
import { motion } from "framer-motion";
import { Factory, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: Factory, title: "120,000 Sq Ft", sub: "State-of-the-art production facility" },
  { icon: ShieldCheck, title: "QC Validated", sub: "Every batch tested before delivery" },
  { icon: Truck, title: "On-Time Supply", sub: "Reliable delivery you can count on" },
];

export default function ManufacturingStrip() {
  return (
    <motion.section className="bg-[#e8650a] py-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:divide-x divide-white/25">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} className="flex items-start gap-4 md:px-8 first:pl-0 last:pr-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.55, delay: i * 0.1 }}>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-[family-name:var(--font-plus-jakarta)] text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
