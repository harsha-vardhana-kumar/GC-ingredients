const items = [
  "Bakery Systems", "Hydrocolloids", "Tortilla Conditioners", "Leavening Agents",
  "Dairy Stabilizers", "Meat Binders", "Xanthan Gum", "Modified Starches",
  "Enzyme Systems", "Preservatives", "Emulsifiers", "Fiber Enrichment",
  "Bakery Systems", "Hydrocolloids", "Tortilla Conditioners", "Leavening Agents",
  "Dairy Stabilizers", "Meat Binders", "Xanthan Gum", "Modified Starches",
  "Enzyme Systems", "Preservatives", "Emulsifiers", "Fiber Enrichment",
];

export default function MarqueeStrip() {
  return (
    <div className="bg-[#1a5c38] py-3 min-h-[36px] flex items-center overflow-hidden border-b border-white/10">
      {/* Row 1 — products */}
      <div className="flex w-max marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 mr-8 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#e8650a]" />
            <span className="text-white/90 text-sm font-medium whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
