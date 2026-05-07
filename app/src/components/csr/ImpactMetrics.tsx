"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const inc = target / steps;
          let cur = 0;
          const t = setInterval(() => {
            cur += inc;
            if (cur >= target) { setCount(target); clearInterval(t); }
            else setCount(Math.floor(cur));
          }, 2000 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Community Members Impacted" },
  { value: 30, suffix: "%", label: "Waste Reduction Goal" },
  { value: 100, suffix: "%", label: "Responsible Sourcing Target" },
  { value: 25, suffix: "+", label: "Years of Ethical Business" },
];

export default function ImpactMetrics() {
  return (
    <motion.section
      className="bg-[#e8650a] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="px-6 lg:px-10 py-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <CountUp target={s.value} suffix={s.suffix} />
              <div className="text-white/80 text-sm mt-2 leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
