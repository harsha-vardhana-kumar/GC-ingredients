"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Warehouse, FlaskConical, ShieldCheck, Users } from "lucide-react";

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
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
    <div ref={ref} className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a]">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const statCards = [
  { icon: Warehouse, value: 120000, suffix: "", label: "Sq Ft Total", sub: "From 20,000 in 2005" },
  { icon: FlaskConical, value: 2021, suffix: "", label: "R&D Lab Est.", sub: "Dedicated innovation space" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "QC Validated", sub: "Every batch before delivery" },
  { icon: Users, value: 100, suffix: "+", label: "Production Staff", sub: "Experts across all functions" },
];

const milestones = [
  { year: "1998", label: "Founded" },
  { year: "2005", label: "20,000 sqft" },
  { year: "2016", label: "50,000 sqft" },
  { year: "2021", label: "70,000 sqft" },
  { year: "2022", label: "120,000 sqft" },
];

function GrowthTimeline() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (inView) controls.start({ scaleX: 1, transition: { duration: 1.5, ease: "easeOut" } });
  }, [inView, controls]);
  return (
    <div className="mt-12 hidden sm:block" ref={ref}>
      <div className="relative">
        {/* Track */}
        <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div className="h-full bg-[#1a5c38] origin-left" initial={{ scaleX: 0 }} animate={controls} />
        </div>
        {/* Milestones */}
        <div className="flex justify-between mt-0 relative">
          {milestones.map((m, i) => (
            <motion.div key={m.year} className="flex flex-col items-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}>
              <div className="w-3 h-3 rounded-full bg-[#e8650a] border-2 border-white shadow -mt-1.5" />
              <div className="text-xs font-bold text-[#1a5c38] mt-2">{m.year}</div>
              <div className="text-xs text-[#6b7280] text-center max-w-[64px] leading-tight">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FacilityGrowthStats() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Facility Growth</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            From 20,000 to 120,000 Sq Ft —{" "}
            <span className="text-[#1a5c38]">Built for Scale</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border-t-4 border-[#1a5c38] text-center" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
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
        <GrowthTimeline />
      </div>
    </section>
  );
}
