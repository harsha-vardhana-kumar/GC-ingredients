"use client";
import { motion } from "framer-motion";
import { Droplets, Package, Thermometer, ClipboardCheck, Truck, Layers } from "lucide-react";

const capabilities = [
  { icon: Layers, color: "#1a5c38", title: "Dry Blending", desc: "High-precision dry blending for powder ingredient systems." },
  { icon: Droplets, color: "#e8650a", title: "Liquid Blending", desc: "Advanced liquid blending for emulsions and liquid ingredient systems." },
  { icon: Package, color: "#1a5c38", title: "Custom Packaging", desc: "Flexible packaging options from drum to hopper format." },
  { icon: Thermometer, color: "#e8650a", title: "Temperature Control", desc: "Controlled storage and handling for sensitive ingredients." },
  { icon: ClipboardCheck, color: "#1a5c38", title: "Batch Tracking", desc: "Full batch traceability from raw material to finished product." },
  { icon: Truck, color: "#e8650a", title: "Logistics & Dispatch", desc: "Reliable on-time delivery across North America." },
];

export default function ProductionCapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Production Capabilities</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            End-to-End Production <span className="text-[#1a5c38]">Under One Roof</span>
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-lg">
            Every stage of ingredient production — from raw material intake to finished product dispatch — happens within our facility, giving us complete control over quality and consistency.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)] transition-all duration-300"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: cap.color + "15" }}>
                  <Icon className="w-6 h-6" style={{ color: cap.color }} />
                </div>
                <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">{cap.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
