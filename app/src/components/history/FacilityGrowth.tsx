"use client";
import { motion } from "framer-motion";
import { Warehouse, FlaskConical, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a]">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

const statCards = [
  {
    icon: Warehouse,
    value: 120000,
    suffix: "",
    label: "Sq Ft Total Facility",
    subtext: "From 20,000 in 2005 to 120,000 today",
  },
  {
    icon: FlaskConical,
    value: 2500,
    suffix: "+",
    label: "Formulations Developed",
    subtext: "Custom blends across all categories",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Technical Experts",
    subtext: "Food scientists, QC specialists, supply chain",
  },
];

export default function FacilityGrowth() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Our Growth</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Built to Scale,{" "}
            <span className="text-[#1a5c38]">Designed for Quality</span>
          </h2>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {statCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-t-4 border-[#1a5c38] hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#1a5c38]" />
                </div>
                <CountUp target={card.value} suffix={card.suffix} />
                <div className="text-lg font-semibold text-[#111827] mt-1 mb-1">
                  {card.label}
                </div>
                <div className="text-sm text-[#6b7280]">{card.subtext}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Facility image */}
        <motion.div
          className="relative w-full h-[400px] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/app_snacks.png"
            alt="GC Ingredients 120,000 sq ft manufacturing facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg inline-flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-[#111827]">
                Irving, TX — 120,000 Sq Ft State-of-the-Art Facility
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
