"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What industries do you serve?", a: "We serve bakery, tortilla, dairy, meat & poultry, snack foods, and prepared foods manufacturers across North America." },
  { q: "Can you develop a custom ingredient blend for our product?", a: "Yes — custom formulation is at the core of what we do. Our R&D team develops blends specifically around your product specs, process, and cost targets." },
  { q: "What is your minimum order quantity?", a: "MOQ varies by product category. Contact our sales team for specific MOQ information for your required ingredient system." },
  { q: "Do you offer technical support after purchase?", a: "Absolutely. Every GCI client has access to dedicated technical support throughout their product lifecycle — not just at the point of purchase." },
  { q: "How long does product development take?", a: "Timeline depends on complexity — typically 2–6 weeks from initial consultation to validated sample delivery." },
  { q: "Are your ingredients certified and food safety compliant?", a: "Yes. All GCI ingredient systems are manufactured under rigorous food safety standards with full certification and CoA documentation provided." },
  { q: "Do you ship outside North America?", a: "Currently our primary market is North America. Contact us to discuss specific international requirements." },
  { q: "Can I visit your manufacturing facility?", a: "Yes — we welcome facility visits from prospective and existing partners. Contact us to schedule a tour." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Common Questions</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Frequently <span className="text-[#1a5c38]">Asked Questions</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Can&apos;t find your answer here? Use the contact form above and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="border-t border-[#f3f4f6]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                className="border-b border-[#f3f4f6]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button 
                  onClick={() => toggleItem(i)}
                  className="relative w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                >
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#1a5c38] origin-top"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className={`text-[17px] font-bold font-[family-name:var(--font-plus-jakarta)] pl-4 pr-6 transition-colors ${isOpen ? 'text-[#1a5c38]' : 'text-[#111827] group-hover:text-[#1a5c38]'}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#1a5c38]' : 'text-[#9ca3af] group-hover:text-[#1a5c38]'}`} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-4 pr-10 text-[#6b7280] font-[family-name:var(--font-inter)] text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
