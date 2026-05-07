"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GCIcon, type IconName } from "../ui/GCIcon";

export interface RelatedApp {
  name: string;
  href: string;
  Icon: IconName;
  description: string;
}

interface RelatedAppsProps {
  apps: RelatedApp[];
}

export default function RelatedApps({ apps }: RelatedAppsProps) {
  return (
    <section
      className="py-20"
      style={{ background: "#f8f5ef" }}
      aria-label="Related Applications"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a5c38]/8 border border-[#1a5c38]/15 text-[#1a5c38] text-xs font-bold tracking-widest uppercase mb-4">
            Explore More Applications
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">
            Other Industries We Serve
          </h2>
        </motion.div>

        {/* App cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.a
              key={app.name}
              href={app.href}
              className="group bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 no-underline"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/8 border border-[#1a5c38]/10 flex items-center justify-center group-hover:bg-[#1a5c38] transition-colors duration-300">
                <GCIcon name={app.Icon} className="w-6 h-6 text-[#1a5c38] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827] text-base font-[family-name:var(--font-plus-jakarta)] mb-1 group-hover:text-[#1a5c38] transition-colors">
                  {app.name}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{app.description}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#e8650a] font-semibold text-sm group-hover:gap-2.5 transition-all mt-auto">
                View Application <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
