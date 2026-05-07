"use client";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const docs = [
  { type: "Technical Guide", title: "Tortilla Batch Pack Selection Guide", desc: "Complete guide to selecting the right batch pack system for flour and corn tortilla production.", size: "2.4 MB", href: "#" },
  { type: "White Paper", title: "Functional Starches in Bakery Applications", desc: "In-depth research paper on starch functionality and selection for bakery manufacturers.", size: "1.8 MB", href: "#" },
  { type: "Product Sheet", title: "GCI Leavening Agent Systems — Full Range", desc: "Complete product sheet covering all GCI leavening agent systems and applications.", size: "890 KB", href: "#" },
  { type: "White Paper", title: "Clean Label Preservation Strategies for Bakery", desc: "Research-backed strategies for transitioning to clean label preservative systems.", size: "1.2 MB", href: "#" },
];

export default function TechnicalDocuments() {
  return (
    <section className="py-24 bg-[#ede8df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Technical Resources</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Download Our <span className="text-[#1a5c38]">Technical Documents</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Access our library of technical guides, white papers, and product sheets — everything you need to evaluate GCI ingredient systems for your application.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {docs.map((doc, i) => (
            <motion.div
              key={doc.title}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] transition-all duration-300 flex items-start gap-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1a5c38]/10 flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7 text-[#1a5c38]" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-[#6b7280] font-medium uppercase tracking-wider mb-1">{doc.type}</div>
                <h3 className="font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-1 text-[15px] leading-snug">{doc.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{doc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#9ca3af]">{doc.size}</span>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#e8650a] hover:bg-[#f07a2a] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all group/dl"
                  >
                    <Download className="w-3.5 h-3.5 group-hover/dl:-translate-y-0.5 transition-transform" /> Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
