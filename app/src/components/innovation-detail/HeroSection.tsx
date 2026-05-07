"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { GCIcon, type IconName } from "../ui/GCIcon";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  },
});

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
  },
};

interface Stat {
  value: string;
  label: string;
}

interface HeroProps {
  pageName: string;
  tag: string;
  h1: string;
  subtext: string;
  stats: Stat[];
  Icon: IconName;
  primaryBtn: string;
  secondaryBtn: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function HeroSection({
  pageName,
  tag,
  h1,
  subtext,
  stats,
  Icon,
  primaryBtn,
  secondaryBtn,
  primaryHref = "/contact",
  secondaryHref = "/contact",
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
      style={{
        background:
          "radial-gradient(ellipse at 70% 10%, #1a5c38 0%, #0d3a22 55%), radial-gradient(ellipse at 10% 90%, rgba(232,101,10,0.18) 0%, transparent 50%)",
      }}
      aria-label={`${pageName} Hero`}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Breadcrumb */}
            <motion.nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-white/50 text-xs mb-5 flex-wrap"
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
            >
              <a href="/innovation" className="hover:text-white/80 transition-colors">
                Innovation
              </a>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <span className="text-white/70">{pageName}</span>
            </motion.nav>

            {/* Tag pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-green-200 text-sm font-semibold tracking-wide mb-5"
              variants={fadeUp(0.08)}
              initial="hidden"
              animate="visible"
            >
              <GCIcon name={Icon} className="w-4 h-4 text-[#e8650a]" />
              {tag}
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.12] mb-5"
              variants={fadeUp(0.16)}
              initial="hidden"
              animate="visible"
            >
              {h1}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-green-200/90 text-base lg:text-lg leading-relaxed mb-8 max-w-xl"
              variants={fadeUp(0.24)}
              initial="hidden"
              animate="visible"
            >
              {subtext}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              variants={fadeUp(0.32)}
              initial="hidden"
              animate="visible"
            >
              <a
                href={primaryHref}
                className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30 text-sm"
              >
                {primaryBtn}
              </a>
              <a
                href={secondaryHref}
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
              >
                {secondaryBtn}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 border-t border-white/15 pt-8"
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-[#e8650a] font-[family-name:var(--font-plus-jakarta)]">
                    {s.value}
                  </div>
                  <div className="text-xs text-green-200/80 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT decorative panel */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
          >
            <div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(45,122,79,0.5), 0 0 60px rgba(45,122,79,0.25), 0 30px 80px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #1a5c38 0%, #0d3a22 40%, #112e1e 100%)",
                }}
              />
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-white/5 absolute" />
                <div className="w-36 h-36 rounded-full border border-white/8 absolute" />
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 absolute" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center z-10">
                  <GCIcon name={Icon} className="w-10 h-10 text-[#e8650a]" />
                </div>
                <div className="text-center z-10">
                  <div className="text-white font-semibold text-lg font-[family-name:var(--font-plus-jakarta)]">
                    {pageName}
                  </div>
                  <div className="text-green-300/70 text-sm mt-1">GC Ingredients</div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#e8650a] opacity-60" />
              <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-[#2d7a4f] opacity-40" />
              <div className="absolute top-1/3 left-6 w-1.5 h-1.5 rounded-full bg-white opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
