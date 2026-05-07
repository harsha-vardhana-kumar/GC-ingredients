"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const commitments = [
  { title: "Responsible Sourcing", sub: "Ethical supply chain practices" },
  { title: "Waste Reduction", sub: "Continuous improvement in manufacturing" },
  { title: "Community Investment", sub: "Local programs and education support" },
  { title: "Employee Wellbeing", sub: "Safe, inclusive, growth-focused workplace" },
];

export default function OurCommitment() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-5">Our Commitment</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.15] mb-6">
              Responsibility is Built Into{" "}
              <span className="text-[#1a5c38]">Everything We Do</span>
            </h2>
            {[
              "GC Ingredients was built on the belief that great food science and responsible business practices go hand in hand. From how we source our raw materials to how we treat our employees and communities, every decision reflects our commitment to a better world.",
              "We are actively working toward measurable sustainability goals, community impact programs, and environmentally responsible manufacturing practices across our entire operation.",
            ].map((p, i) => (
              <motion.p
                key={i}
                className="text-[#6b7280] leading-relaxed mb-5 text-[17px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
            <div className="space-y-4 mt-6">
              {commitments.map((c, i) => (
                <motion.div
                  key={c.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-[#1a5c38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111827]">{c.title}</span>
                    <span className="text-[#6b7280]"> — {c.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
              style={{ boxShadow: "0 0 0 3px rgba(26,92,56,0.18), 0 24px 64px rgba(0,0,0,0.12)" }}
            >
              <Image src="/images/app_dairy.png" alt="GC Ingredients commitment to sustainability and responsibility" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 bg-[#e8650a] text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              People &amp; Planet First
            </div>
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl bg-[#1a5c38]/10 -z-10" />
            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-xl bg-[#e8650a]/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
