"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
  },
});

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
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
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 2500, suffix: "+", label: "Formulations Developed" },
  { value: 6, suffix: "", label: "Ingredient Categories" },
  { value: 25, suffix: "+", label: "Years Expertise" },
  { value: 100, suffix: "+", label: "Technical Experts" },
];

export default function SolutionsHeroSection() {
  return (
    <section className="relative bg-[#0d3a22] pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 65% 0%, rgba(26,92,56,0.55) 0%, transparent 60%), radial-gradient(ellipse at 10% 100%, rgba(232,101,10,0.12) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6 backdrop-blur-sm" variants={fadeUp(0)} initial="hidden" animate="visible">
          Our Solutions
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.1] mb-6 max-w-5xl mx-auto"
          variants={fadeUp(0.1)} initial="hidden" animate="visible"
        >
          A to Z Ingredient Solutions for{" "}
          <span className="text-[#e8650a]">Food Manufacturers</span>
        </motion.h1>

        <motion.p className="text-lg text-green-200 leading-relaxed max-w-2xl mx-auto mb-10" variants={fadeUp(0.2)} initial="hidden" animate="visible">
          From custom blend development to full-scale production supply — GC Ingredients delivers
          end-to-end ingredient systems designed around your product, your process, and your goals.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4 justify-center mb-16" variants={fadeUp(0.3)} initial="hidden" animate="visible">
          <a href="/solutions/bakery-tortilla" className="inline-flex items-center gap-2 bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#e8650a]/30">
            Explore Bakery &amp; Tortilla <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/contact" className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
            Talk to Our Experts
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center divide-x divide-white/15 border-t border-white/15 pt-10">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="px-6 sm:px-10 py-4 text-center" variants={fadeUp(0.4 + i * 0.1)} initial="hidden" animate="visible">
              <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a]">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-green-200 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
