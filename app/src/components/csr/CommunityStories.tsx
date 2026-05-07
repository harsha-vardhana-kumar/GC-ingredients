"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    badge: "Education",
    title: "Supporting Local Schools",
    description:
      "GC Ingredients partners with local schools to fund STEM education programs, helping the next generation of food scientists discover their passion early.",
  },
  {
    badge: "Food Security",
    title: "Fighting Food Insecurity",
    description:
      "Through partnerships with local food banks and nutrition programs, GCI contributes ingredient donations and technical expertise to help communities access better nutrition.",
  },
  {
    badge: "Workforce",
    title: "Building Local Careers",
    description:
      "GCI actively recruits and trains local talent, creating meaningful career opportunities in food science, manufacturing, and supply chain management.",
  },
];

export default function CommunityStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Community Impact</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Stories From the Communities{" "}
            <span className="text-[#1a5c38]">We Serve</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-[#f8f5ef] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/app_bakery.png"
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8650a]/10 text-[#e8650a] mb-3">
                  {s.badge}
                </span>
                <h3 className="text-lg font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">
                  {s.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
