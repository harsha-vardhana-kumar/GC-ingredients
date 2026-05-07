"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { GCIcon, type IconName } from "../ui/GCIcon";

interface AppOverviewProps {
  sectionTag?: string;
  h2: string;
  para1: string;
  para2: string;
  highlights: string[];
  buttonText: string;
  buttonHref?: string;
  Icon: IconName;
}

const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 },
  },
};

export default function AppOverview({
  sectionTag = "Application Overview",
  h2,
  para1,
  para2,
  highlights,
  buttonText,
  buttonHref = "#solutions",
  Icon,
}: AppOverviewProps) {
  return (
    <section className="py-20 bg-white" aria-label="Application Overview">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a5c38]/8 border border-[#1a5c38]/15 text-[#1a5c38] text-xs font-bold tracking-widest uppercase mb-5">
              {sectionTag}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.2] mb-5">
              {h2}
            </h2>

            <p className="text-[#6b7280] text-base leading-relaxed mb-4">{para1}</p>
            <p className="text-[#6b7280] text-base leading-relaxed mb-8">{para2}</p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8" aria-label="Key highlights">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1a5c38] shrink-0 mt-0.5" />
                  <span className="text-[#111827] text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={buttonHref}
              className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1a5c38]/20 text-sm"
            >
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right decorative image */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(26,92,56,0.15), 0 4px 20px rgba(0,0,0,0.08)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #eaf5ee 0%, #f5f3ee 50%, #fdf8f0 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="w-24 h-24 rounded-2xl bg-[#1a5c38]/10 border border-[#1a5c38]/15 flex items-center justify-center">
                  <GCIcon name={Icon} className="w-12 h-12 text-[#1a5c38]" />
                </div>
                <div className="text-center px-6">
                  <div className="text-[#1a5c38] font-semibold text-base font-[family-name:var(--font-plus-jakarta)]">
                    Purpose-Built Solutions
                  </div>
                  <div className="text-[#6b7280] text-sm mt-1">GC Ingredients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
