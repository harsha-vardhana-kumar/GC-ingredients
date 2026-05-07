"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 23, suffix: "+", label: "Years in Business", description: "Founded 1998 in Irving, TX" },
  { value: 2500, suffix: "+", label: "Formulations Developed", description: "Across all food categories" },
  { value: 120000, suffix: "", label: "Sq Ft Facility", description: "State-of-the-art manufacturing" },
  { value: 100, suffix: "+", label: "Technical Experts", description: "Food scientists & engineers" },
];

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const totalSteps = 70;
    let step = 0;
    const timer = window.setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (step >= totalSteps) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0d3a22] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(232,101,10,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(45,122,79,0.4) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center px-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Stat number */}
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a] mb-2 tabular-nums">
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
              </div>
              {/* Divider */}
              <div className="w-10 h-0.5 bg-[#e8650a]/40 mx-auto mb-3" />
              {/* Label */}
              <div className="text-white font-semibold text-base lg:text-lg mb-1 font-[family-name:var(--font-plus-jakarta)]">
                {stat.label}
              </div>
              {/* Description */}
              <div className="text-green-300/70 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
