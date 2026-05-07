"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-[#ede8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Our Leadership</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            The Team Behind{" "}
            <span className="text-gradient-green">GC Ingredients</span>
          </h2>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="grid md:grid-cols-[auto_1fr] gap-0">
              {/* Photo column */}
              <div className="relative bg-gradient-to-br from-[#1a5c38] to-[#0d3a22] p-8 md:p-10 flex flex-col items-center justify-center min-w-[240px]">
                {/* Circle photo */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mb-6">
                  <Image
                    src="/images/rd_overview_lab.png"
                    alt="Srikanth Gundavarapu, Founder & CEO of GC Ingredients"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Name & title */}
                <h3 className="text-white font-bold font-[family-name:var(--font-plus-jakarta)] text-xl text-center mb-1">
                  Srikanth Gundavarapu
                </h3>
                <p className="text-green-300 text-sm text-center font-medium">Founder &amp; CEO</p>

                {/* Founding year badge */}
                <div className="mt-5 bg-[#e8650a] text-white text-xs font-bold px-4 py-2 rounded-full">
                  Founded GCI · 1998
                </div>
              </div>

              {/* Bio column */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[#1a5c38]/15 mb-4" />

                <p className="text-[#374151] text-lg leading-relaxed mb-6">
                  With decades of R&amp;D experience in food science, Srikanth founded GC Ingredients in 1998 with a
                  vision to bring innovative ingredient solutions to food manufacturers across North America.
                </p>
                <p className="text-[#6b7280] leading-relaxed">
                  Under his leadership, GCI has grown from a small startup to a 120,000 sq ft ingredient
                  innovation powerhouse — developing over 2,500 formulations and partnering with hundreds of
                  food manufacturers. Srikanth&apos;s hands-on approach to food science and customer partnership
                  remains the cornerstone of GCI&apos;s culture.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-gray-100">
                  {[
                    { value: "25+", label: "Years Leading GCI" },
                    { value: "2,500+", label: "Formulations Under His Direction" },
                    { value: "$100M+", label: "Customer Products Supported" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#1a5c38]">
                        {s.value}
                      </div>
                      <div className="text-xs text-[#6b7280] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
