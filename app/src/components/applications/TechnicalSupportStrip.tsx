"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "6", label: "Application Specialists" },
  { value: "24hr", label: "Response Time" },
  { value: "Free", label: "Consultation" },
];

export default function AppTechnicalSupportStrip() {
  return (
    <section className="py-20 bg-[#1a5c38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              Application Support
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.2] mb-5">
              Application Specialists <span className="text-[#e8650a]">Ready to Help</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 text-[17px]">
              Each food category has a dedicated GCI application specialist — an expert who understands your specific manufacturing challenges and knows exactly which ingredient systems will work.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30"
            >
              Find Your Application Specialist <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: stats */}
          <div className="grid grid-cols-3 divide-x divide-white/20 w-full">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center px-1 sm:px-4 py-5 sm:py-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a] mb-2">
                  {s.value}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
