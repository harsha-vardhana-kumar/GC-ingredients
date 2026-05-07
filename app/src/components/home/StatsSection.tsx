"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years in Business", description: "Founded 2004, serving global food leaders" },
  { value: 18000, suffix: " MT", label: "Annual Capacity", description: "Across 3 manufacturing sites" },
  { value: 500, suffix: "+", label: "Application Trials / Year", description: "In our dedicated food science lab" },
  { value: 30, suffix: "+", label: "Countries Reached", description: "Americas, Europe, Middle East & Asia" },
  { value: 100, suffix: "+", label: "Manufacturer Partners", description: "From startups to Fortune 500 brands" },
  { value: 99.8, suffix: "%", label: "On-Time Delivery", description: "Over the last 36 months" },
];

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    let timer: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = target % 1 !== 0;
          const totalSteps = 60;
          let step = 0;
          
          timer = window.setInterval(() => {
            step++;
            const progress = step / totalSteps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = isDecimal
              ? parseFloat((target * eased).toFixed(1))
              : Math.round(target * eased);
            setCount(current);
            if (step >= totalSteps) clearInterval(timer);
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#0d3a22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            By the Numbers
          </p>
          <h2 className="text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white">
            Two decades of measurable impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#e8650a] mb-2">
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-green-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
