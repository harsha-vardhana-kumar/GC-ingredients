"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

type Application = {
  id: string;
  badge: string;
  emoji: string;
  accentColor: string;
  headline: string;
  description: string;
  tags: string[];
  products: { name: string; detail: string }[];
  cta: string;
  href: string;
  bg: string;
};

const applications: Application[] = [
  {
    id: "bakery",
    badge: "Bakery",
    emoji: "🥐",
    accentColor: "#1a5c38",
    headline: "Bakery Ingredient Solutions",
    description: "From artisan breads to high-volume commercial bakeries — our ingredient systems deliver consistent texture, extended shelf life, and reliable performance across every bakery application.",
    tags: ["Food Preservative Blends", "Leavening Agents", "Gums & Stabilizers", "Starches"],
    products: [
      { name: "Bread & Rolls", detail: "preservative blends + leavening systems" },
      { name: "Pastries & Croissants", detail: "custom fat replacers + stabilizers" },
      { name: "Muffins & Cakes", detail: "leavening + texture systems" },
      { name: "Cookies & Crackers", detail: "starch systems + protein blends" },
    ],
    cta: "Explore Bakery Solutions",
    href: "/solutions/bakery-tortilla",
    bg: "bg-white",
  },
  {
    id: "tortilla",
    badge: "Tortilla",
    emoji: "🌮",
    accentColor: "#e8650a",
    headline: "Tortilla Ingredient Solutions",
    description: "Purpose-built ingredient systems for flour and corn tortilla manufacturers — delivering softness, rollability, and shelf life performance your customers expect.",
    tags: ["Tortilla Batch Packs", "Food Preservative Blends", "Gums & Stabilizers", "Leavening Agents"],
    products: [
      { name: "Flour Tortillas", detail: "complete batch pack systems" },
      { name: "Corn Tortillas", detail: "masa stabilizers + shelf life systems" },
      { name: "Wraps & Flatbreads", detail: "texture + flexibility systems" },
      { name: "Specialty Tortillas", detail: "custom formulations available" },
    ],
    cta: "Explore Tortilla Solutions",
    href: "/solutions/bakery-tortilla",
    bg: "bg-[#f8f5ef]",
  },
  {
    id: "dairy",
    badge: "Dairy",
    emoji: "🥛",
    accentColor: "#1a5c38",
    headline: "Dairy Ingredient Solutions",
    description: "Advanced hydrocolloid and stabilizer systems for dairy manufacturers — delivering texture consistency, moisture control, and product stability across cheese, yogurt, and dairy beverage applications.",
    tags: ["Hydrocolloids", "Gums & Stabilizers", "Starches", "Custom Blends"],
    products: [
      { name: "Cheese", detail: "stabilizer + texture systems" },
      { name: "Yogurt", detail: "hydrocolloid + viscosity systems" },
      { name: "Dairy Beverages", detail: "emulsifier + suspension systems" },
      { name: "Ice Cream", detail: "stabilizer + overrun systems" },
    ],
    cta: "Talk to a Dairy Specialist",
    href: "/contact",
    bg: "bg-white",
  },
  {
    id: "meat-poultry",
    badge: "Meat & Poultry",
    emoji: "🥩",
    accentColor: "#e8650a",
    headline: "Meat & Poultry Ingredient Solutions",
    description: "Functional ingredient systems for processed meat and poultry manufacturers — delivering yield improvement, texture enhancement, and shelf life extension without compromising product quality.",
    tags: ["Food Preservative Blends", "Phosphates & Binders", "Starches", "Custom Blends"],
    products: [
      { name: "Processed Meats", detail: "binder + yield improvement systems" },
      { name: "Marinades", detail: "flavor + moisture retention systems" },
      { name: "Cured Products", detail: "preservative + color systems" },
      { name: "Poultry", detail: "injection + marination systems" },
    ],
    cta: "Talk to a Meat Specialist",
    href: "/contact",
    bg: "bg-[#f8f5ef]",
  },
  {
    id: "snack-foods",
    badge: "Snack Foods",
    emoji: "🍟",
    accentColor: "#1a5c38",
    headline: "Snack Food Ingredient Solutions",
    description: "Ingredient systems engineered for high-speed snack food production — delivering crispy texture, consistent flavor, and extended shelf life across chips, crackers, and extruded snack applications.",
    tags: ["Starches", "Leavening Agents", "Food Preservative Blends", "Custom Seasonings"],
    products: [
      { name: "Chips & Crisps", detail: "starch + texture systems" },
      { name: "Crackers", detail: "leavening + crunch systems" },
      { name: "Extruded Snacks", detail: "expansion + texture systems" },
      { name: "Popcorn & Puffed Snacks", detail: "coating + flavor systems" },
    ],
    cta: "Talk to a Snack Specialist",
    href: "/contact",
    bg: "bg-white",
  },
  {
    id: "prepared-foods",
    badge: "Prepared Foods",
    emoji: "🍱",
    accentColor: "#e8650a",
    headline: "Prepared Food Ingredient Solutions",
    description: "Functional ingredient systems for ready meal, frozen food, and meal kit manufacturers — delivering consistent quality, extended shelf life, and reliable performance at production scale.",
    tags: ["Hydrocolloids", "Starches", "Food Preservative Blends", "Custom Blends"],
    products: [
      { name: "Ready Meals", detail: "texture + stability systems" },
      { name: "Frozen Foods", detail: "freeze-thaw stabilizer systems" },
      { name: "Meal Kits", detail: "shelf life + freshness systems" },
      { name: "Sauces & Gravies", detail: "thickener + stabilizer systems" },
    ],
    cta: "Talk to a Specialist",
    href: "/contact",
    bg: "bg-[#f8f5ef]",
  },
];

export default function ApplicationsDive() {
  return (
    <section id="applications" className="overflow-hidden">
      {/* Section header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <div className="section-tag mx-auto mb-4">Industry Applications</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
              Built for Your Industry,{" "}
              <span className="text-[#1a5c38]">Engineered for Your Product</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Application sections */}
      {applications.map((app, idx) => {
        const isEven = idx % 2 === 1;
        return (
          <div key={app.id} id={app.id} className={`${app.bg} py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${isEven ? "lg:order-2" : ""}`}
                  style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.1)" }}
                  initial={{ opacity: 0, x: isEven ? 48 : -48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/images/lab_facility.png"
                    alt={`GC Ingredients ${app.headline}`} title={`GC Ingredients ${app.headline}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a22]/25 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl">{app.emoji}</div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className={isEven ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: isEven ? -48 : 48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4"
                    style={{ background: app.accentColor + "15", color: app.accentColor }}
                  >
                    {app.badge}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
                    {app.headline}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed mb-5 text-[17px]">{app.description}</p>

                  {/* Solution tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tags.map((tag, ti) => (
                      <motion.span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                        style={{ background: "#1a5c38" + "10", color: "#1a5c38", borderColor: "#1a5c38" + "20" }}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.1 + ti * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Products list */}
                  <div className="space-y-3 mb-7">
                    {app.products.map((p, pi) => (
                      <motion.div
                        key={p.name}
                        className="flex items-start gap-2.5"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.2 + pi * 0.08 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c38] shrink-0 mt-2" />
                        <span className="text-sm text-[#374151]">
                          <span className="font-semibold">{p.name}</span>
                          <span className="text-[#6b7280]"> — {p.detail}</span>
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href={app.href}
                    className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-md"
                  >
                    {app.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
