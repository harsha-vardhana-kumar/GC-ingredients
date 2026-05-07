"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MessageSquare, FlaskConical, TestTube, Truck } from "lucide-react";

const steps = [
  { num: "01", icon: MessageSquare, title: "Share Your Needs", desc: "Tell us your product specs, production requirements, and challenges" },
  { num: "02", icon: FlaskConical, title: "We Formulate", desc: "Our food scientists develop a custom ingredient system for your application" },
  { num: "03", icon: TestTube, title: "Test & Validate", desc: "Rigorous in-house testing and QC validation before you receive samples" },
  { num: "04", icon: Truck, title: "Supply & Support", desc: "Reliable delivery + ongoing technical support throughout production" },
];

function ArrowConnector({ index }: { index: number }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (inView) controls.start({ scaleX: 1, transition: { duration: 0.55, delay: index * 0.2 + 0.35, ease: "easeOut" } });
  }, [inView, controls, index]);
  return (
    <div ref={ref} className="hidden lg:flex items-center flex-1 px-2">
      <motion.div className="w-full h-0.5 bg-[#1a5c38] origin-left" initial={{ scaleX: 0 }} animate={controls} />
    </div>
  );
}

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">How It Works</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Getting Your Custom Ingredient System —{" "}
            <span className="text-[#1a5c38]">Simple &amp; Fast</span>
          </h2>
        </motion.div>

        {/* Desktop */}
        <div className="lg:flex items-start hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex items-start flex-1">
                <motion.div
                  className="flex flex-col items-center text-center px-4"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative mb-5">
                    <span className="absolute -top-3 -left-3 text-6xl font-black font-[family-name:var(--font-plus-jakarta)] text-[#e8650a] select-none leading-none" style={{ opacity: 0.12 }}>{step.num}</span>
                    <div className="relative w-16 h-16 rounded-2xl bg-[#1a5c38]/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#1a5c38]" />
                    </div>
                  </div>
                  <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2 text-lg">{step.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed max-w-[180px]">{step.desc}</p>
                </motion.div>
                {i < steps.length - 1 && <ArrowConnector index={i} />}
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.num} className="flex items-start gap-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="relative shrink-0">
                  <span className="absolute -top-2 -left-2 text-4xl font-black font-[family-name:var(--font-plus-jakarta)] text-[#e8650a] select-none leading-none" style={{ opacity: 0.15 }}>{step.num}</span>
                  <div className="relative w-14 h-14 rounded-xl bg-[#1a5c38]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#1a5c38]" />
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-1">{step.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
