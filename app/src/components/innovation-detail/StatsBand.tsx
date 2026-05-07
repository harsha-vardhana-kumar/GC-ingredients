"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface StatItem {
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
}

interface StatsBandProps {
  stats: StatItem[];
}

function CountUp({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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
            if (cur >= target) {
              setCount(target);
              clearInterval(t);
            } else {
              setCount(Math.floor(cur));
            }
          }, 1800 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBand({ stats }: StatsBandProps) {
  return (
    <section
      className="py-16"
      style={{ background: "#0d3a22" }}
      aria-label="Statistics"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#e8650a] font-[family-name:var(--font-plus-jakarta)] mb-2">
                {s.numericValue !== undefined ? (
                  <CountUp target={s.numericValue} suffix={s.suffix || ""} />
                ) : (
                  s.value
                )}
              </div>
              <div className="text-green-200/70 text-sm leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
