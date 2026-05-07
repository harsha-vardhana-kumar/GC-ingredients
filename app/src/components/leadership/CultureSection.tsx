"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const culturePoints = [
  {
    title: "Continuous Learning",
    subtext: "Ongoing training and R&D investment for every team member.",
  },
  {
    title: "Technical Excellence",
    subtext: "Highest standards in food science applied to every formulation.",
  },
  {
    title: "Customer Obsession",
    subtext: "Your challenges become our challenges until they're solved.",
  },
  {
    title: "Team Collaboration",
    subtext: "Cross-functional problem solving across every department.",
  },
];

const images = [
  { alt: "GC Ingredients team at work", position: "object-center" },
  { alt: "GC Ingredients R&D laboratory", position: "object-top" },
  { alt: "GC Ingredients manufacturing facility", position: "object-center" },
  { alt: "GC Ingredients team meeting", position: "object-bottom" },
];

export default function CultureSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-5">Our Culture</div>

            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.15] mb-6">
              A Team Built on Science,{" "}
              <span className="text-[#1a5c38]">Driven by Purpose</span>
            </h2>

            <p className="text-[#6b7280] leading-relaxed mb-10 text-[17px]">
              At GC Ingredients, our culture is rooted in scientific curiosity,
              customer obsession, and a genuine commitment to making food manufacturing
              better. Every team member — from our food scientists to our supply chain
              experts — shares the same north star: your success.
            </p>

            <div className="space-y-5">
              {culturePoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-[#1a5c38] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111827]">{point.title}</span>
                    <span className="text-[#6b7280]"> — {point.subtext}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 2x2 image grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="relative rounded-xl overflow-hidden aspect-square"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Image
                  src="/images/hero-preservatives.png"
                  alt={img.alt}
                  fill
                  className={`object-cover ${img.position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a5c38]/10 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
