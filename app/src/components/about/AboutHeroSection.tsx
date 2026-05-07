"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export default function AboutHeroSection() {
  return (
    <section className="relative bg-[#f8f5ef] pt-32 pb-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(26,92,56,0.08) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(232,101,10,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              className="section-tag mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              About GC Ingredients
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.1] mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              From Ingredient Supplier to{" "}
              <span className="text-gradient-green">Innovation Partner</span>
            </motion.h1>

            <motion.p
              className="text-lg text-[#6b7280] leading-relaxed mb-8 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              25+ years of food science expertise powering food manufacturers
              worldwide with scientifically advanced, reliable ingredient
              systems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <a href="/solutions" className="btn-primary">
                Explore Our Solutions <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                <Phone className="w-4 h-4" /> Contact Our Team
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#0d3a22]/10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              {[
                { value: "25+", label: "Years of Expertise" },
                { value: "2,500+", label: "Formulations" },
                { value: "100+", label: "Technical Experts" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#1a5c38]">
                    {item.value}
                  </div>
                  <div className="text-sm text-[#6b7280] mt-0.5">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/innovation_hero_lab.png"
                alt="GC Ingredients manufacturing facility and R&D laboratory"
                fill
                className="object-cover"
                priority
              />
              {/* Green overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a5c38]/30 via-transparent to-[#0d3a22]/20" />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1a5c38] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">GCI</span>
                    </div>
                    <div>
                      <div className="text-[#111827] font-semibold text-sm">
                        Founded 1998 • Irving, TX
                      </div>
                      <div className="text-[#6b7280] text-xs">
                        120,000 sq ft state-of-the-art facility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative green accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#1a5c38]/10 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-[#e8650a]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
