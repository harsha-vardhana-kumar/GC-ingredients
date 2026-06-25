"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

export default function FeaturedArticle() {
  return (
    <section className="py-16 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.09)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.14)] transition-all duration-300 group"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid lg:grid-cols-[3fr_2fr]">
            {/* Left: image */}
            <div className="relative min-h-[320px] lg:min-h-[420px] overflow-hidden">
              <motion.div className="absolute inset-0" whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
                <Image src="/images/custom_blends.png" alt="The Future of Functional Ingredients in Bakery Manufacturing" title="The Future of Functional Ingredients in Bakery Manufacturing" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d3a22]/10" />
              </motion.div>
            </div>
            {/* Right: content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-[#e8650a] text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured</span>
                <span className="bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-semibold px-3 py-1.5 rounded-full">Blog &amp; Insights</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.25] mb-4">
                The Future of Functional Ingredients in Bakery Manufacturing
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-6 text-sm lg:text-base">
                An in-depth look at how emerging functional ingredient technologies are reshaping bakery manufacturing — from clean label preservation to next-generation leavening systems.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#9ca3af] mb-7">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> April 2025</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 min read</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> GCI Food Science Team</span>
              </div>
              <a href="/articles/future-functional-ingredients" className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md self-start">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
