"use client";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    id: "vision",
    icon: Eye,
    iconColor: "#e8650a",
    iconBg: "#fdf3ec",
    label: "Our Vision",
    title: "Preferred Partner",
    body: "Our vision is to be a world class manufacturer and a preferred partner for providing specialized high quality food ingredients and innovative solutions to the global food and nutritional industry.",
    accentColor: "#e8650a",
  },
  {
    id: "mission",
    icon: Target,
    iconColor: "#1a5c38",
    iconBg: "#f0f7f3",
    label: "Our Mission",
    title: "Empowering Food Manufacturers",
    body: "Our mission is to help manufacturers around the world improve the quality of their food by bringing safe, affordable and effective functional food ingredients to the market, and ensure growth in the markets where we compete.",
    accentColor: "#1a5c38",
  },
  {
    id: "purpose",
    icon: Target, // Or another icon
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    label: "Our Purpose",
    title: "Enabling Healthy Eating",
    body: "Our purpose as a company is to enhance lives of everyone we interact by enabling healthy eating.",
    accentColor: "#2563eb",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="py-24 bg-[#ede8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Our Purpose</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Why We Do{" "}
            <span className="text-gradient-green">What We Do</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Driven by science, shaped by partnership, and powered by a passion for food innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] card-hover relative overflow-hidden"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: card.accentColor }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: card.iconBg }}
                >
                  <Icon className="w-7 h-7" style={{ color: card.iconColor }} />
                </div>

                {/* Label badge */}
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{
                    background: card.accentColor + "15",
                    color: card.accentColor,
                    border: `1px solid ${card.accentColor}30`,
                  }}
                >
                  {card.label}
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
                  {card.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed text-lg">{card.body}</p>

                {/* Decorative corner */}
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-5"
                  style={{ background: card.accentColor }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
