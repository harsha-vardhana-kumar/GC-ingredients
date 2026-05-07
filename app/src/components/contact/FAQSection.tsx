"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "GC Ingredients serves a wide range of food manufacturing sectors including bakery, tortilla, dairy, meat & poultry, snack foods, and beverage. Our ingredient systems are engineered for commercial-scale production across each of these verticals.",
  },
  {
    question: "Can you develop a custom ingredient blend for our product?",
    answer:
      "Absolutely. Custom formulation is a core part of what we do. Our R&D team works directly with your food technologists to develop blends tailored to your specific formulation targets, processing conditions, and label requirements — from concept to commercialization.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities vary by ingredient and formulation complexity. We work with manufacturers at different production scales, and our team can discuss MOQs specific to your needs during an initial consultation. Sample quantities are available for evaluation purposes.",
  },
  {
    question: "Do you offer technical support after purchase?",
    answer:
      "Yes. Every GCI customer receives dedicated technical support from a food scientist throughout the product lifecycle — not just at the point of sale. This includes assistance with scale-up, troubleshooting, reformulation, and regulatory documentation.",
  },
  {
    question: "How long does product development take?",
    answer:
      "Our typical timeline runs from 2–8 weeks depending on project complexity. A standard prototype can be ready within 2 weeks, pilot-scale validation in 4, and commercial-ready formulation in approximately 8 weeks. We use a streamlined project management process to keep timelines on track.",
  },
  {
    question: "Are your ingredients certified and compliant with food safety standards?",
    answer:
      "Yes. GC Ingredients operates a FSSC 22000 certified manufacturing facility with full lot-level traceability. Our ingredients comply with FDA, USDA, and international food safety standards. We can provide full technical documentation, CoAs, and regulatory dossiers upon request.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`border-b border-gray-200 relative ${open ? "border-l-2 border-l-[#1a5c38]" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        id={`faq-btn-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 px-1 text-left group"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-[#111827] font-[family-name:var(--font-plus-jakarta)] text-base group-hover:text-[#1a5c38] transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 text-[#1a5c38]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed pb-5 px-1 font-[family-name:var(--font-inter)]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Common Questions</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="text-[#6b7280] text-lg">
            Quick answers to what food manufacturers ask us most.
          </p>
        </motion.div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.p
          className="text-center text-[#6b7280] text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Still have questions?{" "}
          <a href="#contact-submit-btn" className="text-[#1a5c38] font-semibold hover:underline">
            Send us a message →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
