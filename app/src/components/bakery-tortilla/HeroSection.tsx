"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay } },
});

const stats = [
  { value: "6", label: "Product Categories" },
  { value: "2,500+", label: "Formulations" },
  { value: "25+", label: "Years Expertise" },
];

export default function BakeryHeroSection() {
  return (
    <section className="relative bg-[#0d3a22] pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 70% 20%, rgba(26,92,56,0.5) 0%, transparent 60%), radial-gradient(ellipse at 10% 90%, rgba(232,101,10,0.1) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm" variants={fadeUp(0)} initial="hidden" animate="visible">
              Bakery &amp; Tortilla Solutions
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.1] mb-6"
              variants={fadeUp(0.1)} initial="hidden" animate="visible"
            >
              Shaping the Future of{" "}
              <span className="text-[#e8650a]">Bakery &amp; Tortilla Manufacturing</span>
            </motion.h1>
            <motion.p className="text-green-200 leading-relaxed mb-8 text-[17px]" variants={fadeUp(0.2)} initial="hidden" animate="visible">
              From food preservative blends to custom leavening agents — GC Ingredients delivers scientifically advanced, reliable ingredient systems built specifically for bakery and tortilla manufacturers.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeUp(0.3)} initial="hidden" animate="visible">
              <a href="#products" className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30">
                Explore Our Products <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                Talk to Our Experts
              </a>
            </motion.div>
            <div className="flex flex-wrap gap-8 border-t border-white/15 pt-8">
              {stats.map((s, i) => (
                <motion.div key={s.label} variants={fadeUp(0.4 + i * 0.1)} initial="hidden" animate="visible">
                  <div className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a]">{s.value}</div>
                  <div className="text-sm text-green-200 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.3), 0 24px 64px rgba(0,0,0,0.25)" }}>
              <Image src="/images/hero-innovation.png" alt="GC Ingredients bakery and tortilla manufacturing ingredient systems" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d3a22]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 bg-[#e8650a] text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              Bakery &amp; Tortilla Specialists
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#1a5c38]/15 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-[#e8650a]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
