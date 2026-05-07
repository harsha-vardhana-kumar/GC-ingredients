"use client";
import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

const credentials = [
  { emoji: "🎓", label: "25+ Years Experience" },
  { emoji: "🔬", label: "Food Science Expert" },
  { emoji: "🏭", label: "Manufacturing Leader" },
];

export default function FounderFeature() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image + credentials */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            <div
              className="relative rounded-2xl overflow-hidden h-[440px] w-full"
              style={{
                boxShadow:
                  "0 0 0 3px rgba(26,92,56,0.2), 0 24px 64px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src="/images/hero-starches.png"
                alt="Srikanth Gundavarapu, Founder & CEO of GC Ingredients"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/50 via-transparent to-transparent" />
              {/* Founder badge */}
              <div className="absolute bottom-5 left-5 bg-[#e8650a] text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
                Founder &amp; CEO
              </div>
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mt-5">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-[#1a5c38]/30 text-[#1a5c38] rounded-full text-sm font-medium shadow-sm"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                >
                  <span>{c.emoji}</span>
                  <span>{c.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="section-tag mb-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Founder
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-tight mb-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Srikanth Gundavarapu
            </motion.h2>

            <motion.p
              className="text-[#1a5c38] font-semibold text-lg mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Founder &amp; Chief Executive Officer
            </motion.p>

            {[
              "Srikanth founded GC Ingredients in 1998 after years of hands-on R&D experience in the food ingredient industry. His deep technical knowledge and passion for customer success became the foundation on which GC Ingredients was built.",
              "Under his leadership, GCI has grown from a single-person ingredient supply operation to a 120,000 sq ft manufacturing powerhouse with over 100 technical experts serving food manufacturers across North America.",
              "Srikanth continues to lead the company's R&D vision, pushing the boundaries of ingredient innovation and guiding GCI's next chapter of global growth.",
            ].map((para, i) => (
              <motion.p
                key={i}
                className="text-[#6b7280] leading-relaxed mb-5 text-[17px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              >
                {para}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.blockquote
              className="border-l-4 border-[#1a5c38] pl-5 mb-8 italic text-[#111827] text-[17px] leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              &ldquo;Our success is measured by the success of every food
              manufacturer we partner with.&rdquo;
            </motion.blockquote>

            {/* Links */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#e8650a] hover:text-[#f07a2a] font-semibold transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                Connect on LinkedIn ↗
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[#1a5c38] hover:text-[#2d7a4f] font-semibold transition-colors group"
              >
                <Mail className="w-4 h-4" />
                Send a Message{" "}
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
