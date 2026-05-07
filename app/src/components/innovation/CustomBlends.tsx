"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const tiers = [
  { dot: "bg-[#1a5c38]", title: "Single Ingredient Optimization", desc: "Improving the performance of one key ingredient in your formula" },
  { dot: "bg-[#e8650a]", title: "Multi-Component Blends", desc: "Custom multi-ingredient systems built for your specific application" },
  { dot: "bg-[#1a5c38]", title: "Complete Formula Development", desc: "Full product formula development from concept to production" },
];

export default function CustomBlends() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: image */}
          <motion.div className="relative" initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.15), 0 24px 48px rgba(0,0,0,0.1)" }}>
              <Image src="/images/hero-dairy.png" alt="GC Ingredients custom blend development laboratory" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/30 to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 bg-[#e8650a] text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              Fully Custom
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="section-tag mb-5">Custom Blends</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.15] mb-6">
              No Off-the-Shelf.{" "}
              <span className="text-[#1a5c38]">Everything Built for You.</span>
            </h2>
            {[
              "Every ingredient system we develop is custom — built specifically around your product specification, your production process, and your cost targets. We do not believe in one-size-fits-all solutions because your product is not one-size-fits-all.",
              "From single-ingredient optimization to complete multi-component blend systems, our custom development capability covers every level of formulation complexity.",
            ].map((p, i) => (
              <motion.p key={i} className="text-[#6b7280] leading-relaxed mb-5 text-[17px]" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}>
                {p}
              </motion.p>
            ))}
            <div className="space-y-4 mb-8">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.title}
                  className="flex items-start gap-4 bg-[#f8f5ef] border-l-4 border-[#1a5c38] rounded-xl p-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${tier.dot} shrink-0 mt-1.5`} />
                  <div>
                    <span className="font-bold text-[#111827] text-sm">{tier.title}</span>
                    <span className="text-[#6b7280] text-sm"> — {tier.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md">
              Start Your Custom Project <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
