"use client";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Factory, Package } from "lucide-react";

const roles = [
  {
    emoji: "🔬",
    icon: FlaskConical,
    title: "Food Scientist",
    department: "R&D Department",
  },
  {
    emoji: "🏭",
    icon: Factory,
    title: "Production Supervisor",
    department: "Manufacturing",
  },
  {
    emoji: "📦",
    icon: Package,
    title: "Supply Chain Analyst",
    department: "Logistics",
  },
];

export default function JoinTeam() {
  return (
    <section id="join" className="py-24 bg-[#ede8df] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-tag mb-5">Careers</div>

            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] leading-[1.15] mb-6">
              Join the{" "}
              <span className="text-[#1a5c38]">GC Ingredients Team</span>
            </h2>

            <p className="text-[#6b7280] leading-relaxed mb-8 text-[17px]">
              We are always looking for passionate food scientists, engineers, and
              industry professionals who want to make a real impact in the food
              manufacturing world.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1a5c38]/20"
            >
              View Open Positions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Role cards */}
          <div className="flex flex-col gap-4">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  className="relative bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Open badge */}
                  <div className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 bg-[#e8650a]/10 text-[#e8650a] rounded-full">
                    Open
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#1a5c38]" />
                    </div>
                    <div>
                      <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] text-lg">
                        {role.title}
                      </h3>
                      <p className="text-[#6b7280] text-sm">{role.department}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
