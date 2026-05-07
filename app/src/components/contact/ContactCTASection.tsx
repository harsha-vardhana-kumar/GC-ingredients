"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section className="py-24 bg-[#0d3a22] relative overflow-hidden">
      {/* Background radial glows */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(232,101,10,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(45,122,79,0.28) 0%, transparent 55%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zm40 0h1v40h-1zM0 0v1h40V0zm0 40v1h40v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tag */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border border-white/20 text-green-300">
            Ready to Get Started?
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white mb-6 leading-tight">
            Ready to Start Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e8650a 0%, #f5a623 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Next Project?
            </span>
          </h2>

          <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Talk to a GC Ingredients food scientist today — no commitment required.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-submit-btn"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-xl text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(232,101,10,0.4)]"
              style={{ background: "#e8650a" }}
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#brochure"
              className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-4 rounded-xl text-white border-2 border-white/30 transition-all duration-200 hover:bg-white hover:text-[#0d3a22] hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" /> Download Capability Deck
            </a>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/50 text-sm">
            <span>✓ No commitment required</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>✓ Response within 24 hours</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>✓ Free formulation consultation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
