"use client";
import { motion } from "framer-motion";
import {
  Microscope,
  Factory,
  ShieldCheck,
  TrendingUp,
  FlaskConical,
  Truck,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Placeholder Name",
    role: "Head of R&D",
    department: "Research & Development",
    icon: Microscope,
  },
  {
    name: "Placeholder Name",
    role: "VP of Operations",
    department: "Manufacturing & Supply",
    icon: Factory,
  },
  {
    name: "Placeholder Name",
    role: "Head of Quality Control",
    department: "QC & Compliance",
    icon: ShieldCheck,
  },
  {
    name: "Placeholder Name",
    role: "Sales Director",
    department: "Business Development",
    icon: TrendingUp,
  },
  {
    name: "Placeholder Name",
    role: "Food Science Lead",
    department: "Product Development",
    icon: FlaskConical,
  },
  {
    name: "Placeholder Name",
    role: "Supply Chain Manager",
    department: "Logistics & Sourcing",
    icon: Truck,
  },
];

export default function TeamGrid() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Our Team</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Experts Across{" "}
            <span className="text-[#1a5c38]">Every Discipline</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Our leadership team brings together decades of expertise in food science,
            manufacturing, supply chain, and customer success.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Avatar */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-[#1a5c38]/30 ring-offset-2">
                  <Image
                    src="/images/hero-texture.png"
                    alt={`${member.role} at GC Ingredients`} title={`${member.role} at GC Ingredients`}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Name */}
                <h3 className="text-center font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] text-lg mb-0.5">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-center text-[#1a5c38] font-medium text-sm mb-3">
                  {member.role}
                </p>

                {/* Department badge */}
                <div className="flex items-center justify-center gap-1.5 mb-4">
                  <Icon className="w-4 h-4 text-[#1a5c38]" />
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8650a]/10 text-[#e8650a]">
                    {member.department}
                  </span>
                </div>

                {/* LinkedIn */}
                <div className="flex justify-center border-t border-gray-100 pt-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#1a5c38] text-sm transition-colors"
                    aria-label={`${member.role} LinkedIn profile`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
