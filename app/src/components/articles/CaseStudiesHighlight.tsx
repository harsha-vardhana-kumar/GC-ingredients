"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    badge: "40% Shelf Life Increase",
    industry: "Tortilla",
    title: "Shelf Life Extension for Texas Tortilla Manufacturer",
    challenge: "Flour tortillas losing softness within 7 days of production",
    result: "Extended to 21-day shelf life with custom preservative blend",
    href: "/articles/tortilla-shelf-life-case-study",
  },
  {
    badge: "18% Cost Reduction",
    industry: "Bakery",
    title: "Leavening System Optimization for Regional Bakery Chain",
    challenge: "Inconsistent rise and high ingredient cost per unit",
    result: "Custom leavening system reduced costs by 18% with improved consistency",
    href: "/articles/leavening-cost-reduction-case-study",
  },
  {
    badge: "Clean Label Achieved",
    industry: "Snack Foods",
    title: "Clean Label Reformulation for National Snack Brand",
    challenge: "Consumer demand for clean label ingredients without performance loss",
    result: "Full clean label transition with zero impact on taste or texture",
    href: "/articles/clean-label-snack-case-study",
  },
];

export default function CaseStudiesHighlight() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Case Studies</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Real Results for <span className="text-[#1a5c38]">Real Manufacturers</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            See how GC Ingredients has helped food manufacturers solve complex ingredient challenges — with measurable results.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="inline-block bg-[#e8650a] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 self-start"
                initial={{ scale: 0.85 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
              >
                {cs.badge}
              </motion.div>
              <span className="inline-block bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start">{cs.industry}</span>
              <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3 text-base leading-snug">{cs.title}</h3>
              <p className="text-[#6b7280] text-sm italic mb-2">Challenge: {cs.challenge}</p>
              <p className="text-[#1a5c38] text-sm font-semibold mb-5">Result: {cs.result}</p>
              <a href={cs.href} className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a5c38] hover:text-[#e8650a] transition-colors group">
                Read Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
