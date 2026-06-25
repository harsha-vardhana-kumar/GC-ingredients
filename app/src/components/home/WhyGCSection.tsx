import { Microscope, HeartHandshake, Settings, PackageCheck, Headset, Award, Factory, Timer, TestTube, Box } from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "In-depth expertise",
    description: "In-depth expertise and experienced scientists",
    color: "#1a5c38", bg: "#f0f7f3",
  },
  {
    icon: HeartHandshake,
    title: "Customer-focused",
    description: "Team with a customer-focused mindset",
    color: "#e8650a", bg: "#fdf8f0",
  },
  {
    icon: Settings,
    title: "Tailor-made solutions",
    description: "Offer tailor-made solutions for each application",
    color: "#2563eb", bg: "#eff6ff",
  },
  {
    icon: PackageCheck,
    title: "One stop shop",
    description: "One stop shop for drum-to-hopper formula",
    color: "#7c3aed", bg: "#f5f3ff",
  },
  {
    icon: Headset,
    title: "Tech support",
    description: "Facilitate on-time tech support",
    color: "#c97b2b", bg: "#fdf8f0",
  },
  {
    icon: Award,
    title: "Stringent quality",
    description: "Follow the stringent quality program",
    color: "#16a34a", bg: "#f0fdf4",
  },
  {
    icon: Factory,
    title: "State-of-the-art",
    description: "State-of-the-art blending and processing capabilities",
    color: "#e8650a", bg: "#fdf8f0",
  },
  {
    icon: Timer,
    title: "Leading turn-around",
    description: "Industry leading turn-around time",
    color: "#1a5c38", bg: "#f0f7f3",
  },
  {
    icon: TestTube,
    title: "Robust testing",
    description: "Offer in-house and 3rd party testing",
    color: "#2563eb", bg: "#eff6ff",
  },
  {
    icon: Box,
    title: "Custom packaging",
    description: "Offer custom packaging",
    color: "#7c3aed", bg: "#f5f3ff",
  },
];

export default function WhyGCSection() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-tag mx-auto mb-4">Why GCI?</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            The partner food manufacturers{" "}
            <span className="text-gradient-green">trust most</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: reason.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: reason.color }} />
                </div>
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-plus-jakarta)] text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
