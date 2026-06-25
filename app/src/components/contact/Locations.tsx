"use client";
import { motion } from "framer-motion";
import { Building2, Clock, Phone, Mail, ArrowRight, CalendarClock, Info } from "lucide-react";

export default function Locations() {
  return (
    <section className="py-24 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag mx-auto mb-4">Our Locations</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4">
            We Have <span className="text-[#1a5c38]">Two Manufacturing Plants</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto text-lg">
            Both facilities are located in Atlanta, GA — ready to serve you.
          </p>
        </motion.div>

        {/* Plant Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Plant 1 */}
          <motion.div
            className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#1a5c38]/10 flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7 text-[#1a5c38]" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#1a5c38] text-white text-xs font-bold rounded-full mb-2">Plant 1</span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">Manufacturing Facility — Plant 1</h3>
              </div>
            </div>
            <p className="text-[#374151] font-medium mb-6 leading-relaxed">
              3401 Atlanta Industrial Parkway NW<br />Atlanta, GA 30331
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium">
                <Clock className="w-4 h-4 text-[#1a5c38] shrink-0" />
                Loading & Unloading: Mon–Fri 7:00 AM – 3:00 PM
              </div>
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium">
                <Phone className="w-4 h-4 text-[#e8650a] shrink-0" />
                (678) 974-0600
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=3401+Atlanta+Industrial+Parkway+NW+Atlanta+GA+30331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 border-2 border-[#1a5c38] text-[#1a5c38] font-semibold px-6 py-3 rounded-xl hover:bg-[#1a5c38] hover:text-white transition-colors"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Plant 2 */}
          <motion.div
            className="bg-white rounded-[16px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#e8650a]/10 flex items-center justify-center shrink-0">
                <Building2 className="w-7 h-7 text-[#e8650a]" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-[#e8650a] text-white text-xs font-bold rounded-full mb-2">Plant 2</span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827]">Manufacturing Facility — Plant 2</h3>
              </div>
            </div>
            <p className="text-[#374151] font-medium mb-6 leading-relaxed">
              3450 Atlanta Industrial Parkway NW<br />Atlanta, GA 30331
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium">
                <Clock className="w-4 h-4 text-[#1a5c38] shrink-0" />
                Loading & Unloading: Mon–Fri 7:00 AM – 3:00 PM
              </div>
              <div className="flex items-center gap-3 text-sm text-[#111827] font-medium">
                <Phone className="w-4 h-4 text-[#e8650a] shrink-0" />
                (678) 974-0600
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=3450+Atlanta+Industrial+Parkway+NW+Atlanta+GA+30331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 border-2 border-[#e8650a] text-[#e8650a] font-semibold px-6 py-3 rounded-xl hover:bg-[#e8650a] hover:text-white transition-colors"
            >
              Get Directions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Appointment Info Banner */}
        <motion.div
          className="bg-white rounded-2xl p-6 mb-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-l-4 border-[#1a5c38]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#1a5c38]/10 flex items-center justify-center shrink-0">
              <CalendarClock className="w-6 h-6 text-[#1a5c38]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">
                Appointment Information
              </h4>
              <p className="text-[#374151] text-sm leading-relaxed mb-3">
                For appointments, please contact our customer service team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:7706951333" className="inline-flex items-center gap-2 text-[#1a5c38] font-semibold text-sm hover:text-[#e8650a] transition-colors">
                  <Phone className="w-4 h-4" /> (770) 695-1333
                </a>
                <a href="mailto:custservice@gcingredients.com" className="inline-flex items-center gap-2 text-[#1a5c38] font-semibold text-sm hover:text-[#e8650a] transition-colors">
                  <Mail className="w-4 h-4" /> custservice@gcingredients.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-[#ede8df] rounded-xl px-4 py-3 text-sm text-[#374151] sm:max-w-xs">
              <Info className="w-4 h-4 text-[#e8650a] shrink-0 mt-0.5" />
              <span>First come, first serve for loading &amp; unloading between <strong>7:00 AM – 3:00 PM</strong>. Appointments are recommended to avoid delays.</span>
            </div>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] h-[250px] sm:h-[380px] lg:h-[420px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="GC Ingredients Location — Atlanta, GA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.0!2d-84.5130!3d33.7574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50fae87c8e1a7%3A0x0!2s3450+Atlanta+Industrial+Pkwy+NW%2C+Atlanta%2C+GA+30331!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  );
}
