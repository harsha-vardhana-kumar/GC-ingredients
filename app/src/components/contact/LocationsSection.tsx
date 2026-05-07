"use client";
import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

const locations = [
  {
    name: "Irving Headquarters",
    city: "Irving, TX",
    type: "Manufacturing",
    typeColor: "#e8650a",
    detail: "Primary production & R&D facility — 120,000 sq ft state-of-the-art complex.",
  },
  {
    name: "Dallas Distribution Hub",
    city: "Dallas, TX",
    type: "R&D / Office",
    typeColor: "#1a5c38",
    detail: "Regional technical support, application labs, and sales operations.",
  },
  {
    name: "Chicago Satellite Office",
    city: "Chicago, IL",
    type: "Office",
    typeColor: "#2563eb",
    detail: "Midwest customer success and business development team.",
  },
];

export default function LocationsSection() {
  return (
    <section className="py-24 bg-[#ede8df] relative overflow-hidden">
      {/* Subtle accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(26,92,56,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Our Facilities</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Serving Manufacturers{" "}
            <span className="text-gradient-green">Across North America</span>
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-lg">
            Strategically located facilities ensure fast, reliable support wherever you operate.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              className="bg-white rounded-2xl p-7 shadow-md border border-white/80 card-hover group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#f0f7f3] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <Building2 className="w-6 h-6 text-[#1a5c38]" />
              </div>

              {/* Badge */}
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white mb-4"
                style={{ background: loc.typeColor }}
              >
                {loc.type}
              </span>

              <h3 className="text-lg font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-1">
                {loc.name}
              </h3>
              <p className="text-[#1a5c38] font-semibold text-sm mb-3">{loc.city}</p>
              <p className="text-[#6b7280] text-sm leading-relaxed">{loc.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder Map */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-[#d4cfc7] bg-[#e8e3d9] h-64 flex flex-col items-center justify-center gap-3 shadow-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
            <MapPin className="w-7 h-7 text-[#1a5c38]" />
          </div>
          <p className="text-[#6b7280] text-sm font-medium font-[family-name:var(--font-inter)]">
            Interactive map coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
