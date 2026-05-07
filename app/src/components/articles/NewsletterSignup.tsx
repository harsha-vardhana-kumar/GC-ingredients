"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Monthly ingredient insights",
  "Technical guides and white papers",
  "Event invitations and updates",
];

const industries = [
  "Bakery", "Tortilla", "Dairy", "Meat & Poultry", "Snack Foods", "Prepared Foods",
];

export default function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#1a5c38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              Stay Updated
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white leading-[1.2] mb-5">
              Get the Latest Food Industry Insights{" "}
              <span className="text-[#e8650a]">Delivered to You</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 text-[17px]">
              Join 500+ food manufacturers receiving GCI&apos;s monthly ingredient insights, technical updates, and industry news.
            </p>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <motion.div key={b} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}>
                  <CheckCircle className="w-4 h-4 text-[#e8650a] shrink-0" />
                  <span className="text-white/80 text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form card */}
          <motion.div className="bg-white rounded-2xl p-8 shadow-xl" initial={{ opacity: 0, x: 48 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#1a5c38]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#1a5c38]" />
                </div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-2">You&apos;re in!</h3>
                <p className="text-[#6b7280] text-sm">Thank you for subscribing to GCI Insights. Check your inbox for a confirmation.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#0d3a22] mb-6">Subscribe to GCI Insights</h3>
                <div className="space-y-4">
                  {[
                    { label: "Full Name", value: name, setter: setName, placeholder: "Your name", type: "text" },
                    { label: "Email Address", value: email, setter: setEmail, placeholder: "you@company.com", type: "email" },
                    { label: "Company", value: company, setter: setCompany, placeholder: "Your company name", type: "text" },
                  ].map((field, i) => (
                    <motion.div key={field.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c38] focus:border-transparent transition-all"
                      />
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.24 }}>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">Industry</label>
                    <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] bg-white">
                      <option value="">Select your industry</option>
                      {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                  </motion.div>
                  <motion.button
                    onClick={handleSubmit}
                    className="w-full bg-[#e8650a] hover:bg-[#f07a2a] text-white font-semibold py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-md shadow-[#e8650a]/20"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.32 }}
                  >
                    Subscribe Now
                  </motion.button>
                </div>
                <p className="text-center text-xs text-[#9ca3af] mt-4">No spam. Unsubscribe anytime.</p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
