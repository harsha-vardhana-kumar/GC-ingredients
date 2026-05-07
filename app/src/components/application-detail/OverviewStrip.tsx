"use client";
import { motion } from "framer-motion";
import { GCIcon, type IconName } from "../ui/GCIcon";

interface Highlight {
  Icon: IconName;
  label: string;
  name: string;
}

interface OverviewStripProps {
  highlights: Highlight[];
}

export default function OverviewStrip({ highlights }: OverviewStripProps) {
  return (
    <section
      className="py-10"
      style={{ background: "#e8650a" }}
      aria-label="Application Overview Strip"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.name}
              className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <GCIcon name={h.Icon} className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white/70 text-xs font-medium tracking-wide uppercase">
                  {h.label}
                </div>
                <div className="text-white font-semibold text-sm mt-0.5">{h.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
