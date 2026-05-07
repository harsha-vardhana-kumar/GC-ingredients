import { Factory, Thermometer, Microscope, Package, ArrowRight } from "lucide-react";

const capabilities = [
  { icon: Factory, label: "3 Production Facilities", desc: "Monterrey, CDMX, Guadalajara" },
  { icon: Thermometer, label: "Temperature-Controlled", desc: "Cold-chain compliant logistics" },
  { icon: Microscope, label: "In-House QC Lab", desc: "Full analytical instrumentation" },
  { icon: Package, label: "Custom Pack Sizes", desc: "25 kg bags to 1MT super-sacks" },
];

const certBadges = ["FSSC 22000", "ISO 9001", "Kosher", "Halal", "Non-GMO", "FDA Reg."];

export default function ManufacturingSection() {
  return (
    <section id="manufacturing" className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 shadow-md">
                  <img
                    src="/images/hero-lab.jpg"
                    alt="GC Ingredients manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                  <img
                    src="/images/preservatives.jpg"
                    alt="Quality control lab"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                  <img
                    src="/images/hydrocolloids.jpg"
                    alt="Hydrocolloid processing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 shadow-md">
                  <img
                    src="/images/leavening.jpg"
                    alt="Bakery application"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating cert strip */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 flex gap-3 flex-wrap justify-center border border-gray-100 w-[90%]">
              {certBadges.map((c) => (
                <span
                  key={c}
                  className="text-xs font-bold text-[#1a5c38] bg-green-50 px-3 py-1 rounded-full border border-green-100"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div className="pb-8">
            <div className="section-tag mb-5">Manufacturing & Supply</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-5">
              Built for scale. <span className="text-gradient-green">Guaranteed</span> for quality.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Three state-of-the-art production facilities with combined capacity exceeding 18,000 MT per year.
              Every batch is validated against your spec before it ships.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.label} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#1a5c38]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{cap.label}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{cap.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="btn-primary">
              Request a Plant Visit <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
