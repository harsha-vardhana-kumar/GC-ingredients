"use client";
import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Clock, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
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
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a]">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const rdStats = [
  { icon: FlaskConical, value: 500, suffix: "+", label: "R&D Trials Per Year", sub: "Across all food categories" },
  { icon: BookOpen, value: 2500, suffix: "+", label: "Formulations Developed", sub: "Custom and standard systems" },
  { icon: Clock, value: 25, suffix: "+", label: "Years Food Science", sub: "Deep accumulated expertise" },
  { icon: Users, value: 100, suffix: "+", label: "Technical Experts", sub: "Scientists, engineers, specialists" },
];

export default function RDStats() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">By The Numbers</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Our Innovation Impact, <span className="text-[#1a5c38]">Measured</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rdStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border-t-4 border-[#1a5c38] text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#1a5c38]" />
                </div>
                <CountUp target={s.value} suffix={s.suffix} />
                <div className="font-semibold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mt-2 mb-1">{s.label}</div>
                <div className="text-[#6b7280] text-sm">{s.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
