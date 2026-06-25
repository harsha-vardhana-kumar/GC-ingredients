import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";


const products = [
  {
    name: "HydroFlex™ XG",
    category: "Hydrocolloids",
    categoryColor: "#2563eb",
    description:
      "Ultra-pure xanthan gum with consistent viscosity for dairy, dressings, and beverage applications. Cold-dispersible grade available.",
    specs: ["Viscosity: 1200–1600 cP", "Mesh: 200", "Grade: Food / Pharma"],
    badge: "Best Seller",
    image: "/images/hydrocolloids.jpg",
  },
  {
    name: "LeavenMax™ Pro",
    category: "Leavening Systems",
    categoryColor: "#c97b2b",
    description:
      "Optimized double-acting baking powder blend for consistent oven spring, fine crumb structure, and reduced metallic off-notes.",
    specs: ["CO₂ release: 14%", "Fast/slow ratio: 60/40", "Aluminum-free"],
    badge: "Clean Label",
    image: "/images/leavening.jpg",
  },
  {
    name: "PreservePlus™ NI",
    category: "Preservatives",
    categoryColor: "#991b1b",
    description:
      "Natural inhibitor blend combining cultured dextrose and buffered vinegar for extended mold-free shelf life without synthetic preservatives.",
    specs: ["pH range: 4.5–7.0", "Mold inhibition: 60+ days", "Non-GMO verified"],
    badge: "Natural",
    image: "/images/preservatives.jpg",
  },
  {
    name: "StarchMod™ TF",
    category: "Modified Starches",
    categoryColor: "#1a5c38",
    description:
      "Cross-linked and stabilized tapioca starch for freeze-thaw stability, high-temperature processing, and clean-label texture delivery.",
    specs: ["Gelatinization: 62–66°C", "Freeze-thaw stable: 5 cycles", "Clarity: high"],
    badge: "Freeze-Thaw",
    image: "/images/starches.jpg",
  },
];

export default function FeaturedProductsSection() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-tag mb-4">Featured Products</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] max-w-xl">
              Our most trusted{" "}
              <span className="text-gradient-green">ingredient systems</span>
            </h2>
          </div>
          <a href="#" className="btn-secondary flex-shrink-0">
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover shadow-sm"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name} title={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-white text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: product.categoryColor }}
                  >
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: product.categoryColor }}
                >
                  {product.category}
                </div>
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-plus-jakarta)] text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>

                {/* Specs */}
                <div className="space-y-1.5 mb-5">
                  {product.specs.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs text-gray-600">
                      <Star className="w-3 h-3 text-[#e8650a]" />
                      {s}
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="flex items-center gap-1 text-sm font-semibold text-[#1a5c38] hover:gap-2 transition-all"
                >
                  Request Sample <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
