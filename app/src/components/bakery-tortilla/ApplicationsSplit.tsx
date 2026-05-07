"use client";
import { motion } from "framer-motion";

const bakeryApps = [
  { emoji: "🍞", label: "Bread & Rolls" },
  { emoji: "🥐", label: "Pastries & Croissants" },
  { emoji: "🧁", label: "Muffins & Cupcakes" },
  { emoji: "🍪", label: "Cookies & Crackers" },
  { emoji: "🎂", label: "Cakes & Desserts" },
  { emoji: "🥖", label: "Artisan Breads" },
];

const tortillaApps = [
  { emoji: "🌮", label: "Flour Tortillas" },
  { emoji: "🌽", label: "Corn Tortillas" },
  { emoji: "🫓", label: "Flatbreads" },
  { emoji: "🌯", label: "Wraps & Burritos" },
  { emoji: "🥙", label: "Pita Bread" },
  { emoji: "🫔", label: "Specialty Tortillas" },
];

function AppCard({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-[#f8f5ef] rounded-xl px-3 py-2.5 text-sm font-medium text-[#374151]">
      <span className="text-base">{emoji}</span>
      <span>{label}</span>
    </div>
  );
}

export default function ApplicationsSplit() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Applications</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            From Bakery Lines to Tortilla Plants —{" "}
            <span className="text-[#1a5c38]">We Cover It All</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bakery */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-t-4 border-[#1a5c38]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/10 flex items-center justify-center text-2xl">🥐</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">Bakery Applications</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {bakeryApps.map((app, i) => (
                <motion.div key={app.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                  <AppCard emoji={app.emoji} label={app.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tortilla */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-t-4 border-[#e8650a]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#e8650a]/10 flex items-center justify-center text-2xl">🌮</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">Tortilla Applications</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tortillaApps.map((app, i) => (
                <motion.div key={app.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                  <AppCard emoji={app.emoji} label={app.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
