const logos = [
  { name: "Grupo Bimbo", abbr: "GB", color: "#1a5c38" },
  { name: "Grupo Maseca", abbr: "GM", color: "#c97b2b" },
  { name: "Flowers Foods", abbr: "FF", color: "#2563eb" },
  { name: "Dr. Oetker", abbr: "DO", color: "#7c3aed" },
  { name: "Arla Foods", abbr: "AF", color: "#0891b2" },
  { name: "Sigma Alimentos", abbr: "SA", color: "#e8650a" },
  { name: "La Costeña", abbr: "LC", color: "#991b1b" },
  { name: "Lala Group", abbr: "LG", color: "#1a5c38" },
  { name: "Grupo Herdez", abbr: "GH", color: "#c97b2b" },
  { name: "Rich Products", abbr: "RP", color: "#2563eb" },
  // duplicate for infinite scroll
  { name: "Grupo Bimbo", abbr: "GB", color: "#1a5c38" },
  { name: "Grupo Maseca", abbr: "GM", color: "#c97b2b" },
  { name: "Flowers Foods", abbr: "FF", color: "#2563eb" },
  { name: "Dr. Oetker", abbr: "DO", color: "#7c3aed" },
  { name: "Arla Foods", abbr: "AF", color: "#0891b2" },
  { name: "Sigma Alimentos", abbr: "SA", color: "#e8650a" },
  { name: "La Costeña", abbr: "LC", color: "#991b1b" },
  { name: "Lala Group", abbr: "LG", color: "#1a5c38" },
  { name: "Grupo Herdez", abbr: "GH", color: "#c97b2b" },
  { name: "Rich Products", abbr: "RP", color: "#2563eb" },
];

export default function LogosSection() {
  return (
    <section className="py-16 bg-[#f8f5ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">
          Trusted by leading food manufacturers worldwide
        </p>
      </div>

      <div className="flex w-max marquee-track">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mx-6 flex-shrink-0 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
              style={{ background: logo.color }}
            >
              {logo.abbr}
            </div>
            <span className="text-gray-700 font-semibold text-sm whitespace-nowrap">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
