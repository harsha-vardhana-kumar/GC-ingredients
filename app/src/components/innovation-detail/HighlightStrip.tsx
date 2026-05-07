"use client";
import { motion } from "framer-motion";
import { GCIcon, type IconName } from "../ui/GCIcon";

interface Highlight {
  Icon: IconName;
  label: string;
  description: string;
}

interface HighlightStripProps {
  highlights: Highlight[];
}

export default function HighlightStrip({ highlights }: HighlightStripProps) {
  return (
    <section
      className="py-10"
      style={{ background: "#e8650a" }}
      aria-label="Highlight Strip"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="flex items-center gap-4 px-6 py-5 first:pl-0 last:pr-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center shrink-0">
                <GCIcon name={h.Icon} className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm font-[family-name:var(--font-plus-jakarta)]">
                  {h.label}
                </div>
                <div className="text-white/75 text-xs mt-0.5 leading-relaxed">{h.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
