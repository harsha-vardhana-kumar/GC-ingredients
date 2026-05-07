"use client";
import { motion } from "framer-motion";
import { Building2, FlaskConical, Clock, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Locations() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="section-tag mx-auto mb-4">Our Locations</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            Find Us Across <span className="text-[#1a5c38]">North America</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Facility */}
          <motion.div 
            className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#1a5c38]/10 flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7 text-[#1a5c38]" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#e8650a] text-white text-xs font-bold rounded-full mb-2">Manufacturing Facility</span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">Main Production Facility</h3>
              </div>
            </div>
            <p className="text-[#6b7280] mb-6 font-[family-name:var(--font-inter)] leading-relaxed">
              1234 Industrial Parkway<br/>Suite 100<br/>Chicago, IL 60601<br/>United States
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium"><Clock className="w-4 h-4 text-[#1a5c38]" /> Mon–Fri: 8AM – 5PM CST</div>
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium"><Phone className="w-4 h-4 text-[#e8650a]" /> +1 (800) 123-4567</div>
            </div>
            <a href="#" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 border-2 border-[#1a5c38] text-[#1a5c38] font-semibold px-6 py-3 rounded-xl hover:bg-[#1a5c38] hover:text-white transition-colors">
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* R&D Lab */}
          <motion.div 
            className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#e8650a]/10 flex items-center justify-center shrink-0">
                <FlaskConical className="w-7 h-7 text-[#e8650a]" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#e8650a] text-white text-xs font-bold rounded-full mb-2">R&amp;D Laboratory</span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">Research &amp; Development Lab</h3>
              </div>
            </div>
            <p className="text-[#6b7280] mb-6 font-[family-name:var(--font-inter)] leading-relaxed">
              5678 Innovation Drive<br/>Building B<br/>Dallas, TX 75201<br/>United States
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium"><Clock className="w-4 h-4 text-[#1a5c38]" /> Mon–Fri: 8AM – 5PM CST</div>
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium"><Phone className="w-4 h-4 text-[#e8650a]" /> +1 (800) 987-6543</div>
            </div>
            <a href="#contact-form" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 border-2 border-[#1a5c38] text-[#1a5c38] font-semibold px-6 py-3 rounded-xl hover:bg-[#1a5c38] hover:text-white transition-colors">
              Schedule a Lab Visit <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          className="w-full h-[400px] bg-[#ede8df] rounded-[16px] flex flex-col items-center justify-center border border-[#d1cxb9]/20"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MapPin className="w-12 h-12 text-[#1a5c38] mb-4 opacity-50" />
          <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2 opacity-70">Interactive map coming soon</h3>
          <p className="text-[#6b7280] opacity-80">Use Get Directions links above for navigation</p>
        </motion.div>
      </div>
    </section>
  );
}
