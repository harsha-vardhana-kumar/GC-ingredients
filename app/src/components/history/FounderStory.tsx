"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Founder image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
              style={{ boxShadow: "0 0 0 4px rgba(26,92,56,0.15), 0 24px 64px rgba(0,0,0,0.15)" }}
            >
              <Image
                src="/images/hero-bakery.png"
                alt="Srikanth Gundavarapu, Founder of GC Ingredients"
                fill
                className="object-cover"
              />
              {/* Green overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/40 via-transparent to-transparent" />
            </div>

            {/* Founded badge */}
            <div className="absolute bottom-5 left-5 bg-[#e8650a] text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg">
              Founded 1998
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-[#1a5c38]/10 -z-10" />
            <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-xl bg-[#e8650a]/10 -z-10" />
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
              The Beginning
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              One Man&apos;s Vision, Built on{" "}
              <span className="text-[#1a5c38]">Food Science</span>
            </motion.h2>

            <motion.p
              className="text-[#6b7280] leading-relaxed mb-5 text-[17px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              In 1998, Srikanth Gundavarapu — armed with years of hands-on R&amp;D
              experience in the food ingredient industry — took a bold step. He founded GC
              Ingredients with a single mission: to bring purposefully-made, scientifically
              advanced ingredient solutions to food manufacturers.
            </motion.p>

            <motion.p
              className="text-[#6b7280] leading-relaxed mb-8 text-[17px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              What started as a small ingredient supply operation quickly evolved.
              Srikanth&apos;s deep technical knowledge and commitment to customer success set
              GC Ingredients apart from day one.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              className="border-l-4 border-[#1a5c38] pl-5 mb-8 italic text-[#111827] text-[17px] leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &ldquo;Every formulation we create is backed by science and built around our
              customer&apos;s success.&rdquo;
              <footer className="mt-2 text-sm not-italic text-[#6b7280] font-medium">
                — Srikanth Gundavarapu, Founder &amp; CEO
              </footer>
            </motion.blockquote>

            <motion.a
              href="/about#leadership"
              className="inline-flex items-center gap-2 text-[#1a5c38] hover:text-[#e8650a] font-semibold transition-colors group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Read Full Leadership Profile{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
