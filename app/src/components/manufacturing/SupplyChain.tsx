"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const supplyPoints = [
  "Verified raw material suppliers",
  "Strategic inventory management",
  "On-time delivery track record",
  "Full batch traceability end-to-end",
];

const supplyStats = [
  { value: 98, suffix: "%", label: "On-Time Delivery Rate" },
  { value: 100, suffix: "%", label: "Batch Traceable" },
  { value: 30, suffix: "+", label: "Verified Suppliers" },
];

function InlineStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
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
    <div ref={ref} className="text-center">
      <div className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a]">{count}{suffix}</div>
      <div className="text-xs text-[#6b7280] mt-0.5">{label}</div>
    </div>
  );
}

export default function SupplyChain() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: image */}
          <motion.div className="relative" initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.15), 0 24px 48px rgba(0,0,0,0.1)" }}>
              <Image src="/images/5_Baker_s_hands_stretching_a_smo.png" alt="GC Ingredients supply chain and logistics" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/25 to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 bg-[#e8650a] text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              North America Wide
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="section-tag mb-5">Supply Chain</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.15] mb-6">
              Reliable Supply Chain You Can{" "}
              <span className="text-[#1a5c38]">Build Your Business On</span>
            </h2>
            <motion.p className="text-[#6b7280] leading-relaxed mb-6 text-[17px]" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              Our supply chain is built for reliability — from responsible raw material sourcing to on-time delivery to your facility. We manage every link in the chain so you never have to worry about ingredient availability or consistency.
            </motion.p>
            <div className="space-y-3 mb-8">
              {supplyPoints.map((pt, i) => (
                <motion.div key={pt} className="flex items-center gap-3" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}>
                  <CheckCircle className="w-4 h-4 text-[#1a5c38] shrink-0" />
                  <span className="text-[#374151] text-sm font-medium">{pt}</span>
                </motion.div>
              ))}
            </div>
            {/* Inline stats */}
            <div className="flex gap-8 mb-8 bg-[#f8f5ef] rounded-2xl p-5 justify-around">
              {supplyStats.map((s) => (
                <InlineStat key={s.label} target={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md">
              Talk to Our Supply Team <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
