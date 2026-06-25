"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Lock, MapPin, Phone, Mail, HeadphonesIcon, CheckCircle } from "lucide-react";

const infoCards = [
  { icon: MapPin, title: "Delivery & Pickup Address", detailItem: "3450 Atlanta Industrial Pkwy NW, Atlanta, GA 30331", linkText: "Get Directions", linkHref: "https://maps.google.com/?q=3450+Atlanta+Industrial+Parkway+NW+Atlanta+GA+30331", color: "#e8650a" },
  { icon: Phone, title: "Main Phone", detailItem: "(678) 974-0600", subText: "For Delivery & Pickup enquiries", color: "#1a5c38" },
  { icon: Mail, title: "Email Us Directly", detailItem: "info@gcingredients.com", linkText: "Send Email", linkHref: "mailto:info@gcingredients.com", color: "#e8650a" },
  { icon: HeadphonesIcon, title: "Customer Service (Appointments)", detailItem: "(770) 695-1333  ·  custservice@gcingredients.com", highlightText: "First come, first serve · 7AM – 3PM", color: "#1a5c38" },
];

export default function ContactFormInfo() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    subject: "",
    message: "",
    hearAboutUs: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industries = ["Bakery", "Tortilla", "Dairy", "Meat & Poultry", "Snack Foods", "Prepared Foods", "Other"];
  const referralSources = ["Google Search", "Trade Show", "Referral", "LinkedIn", "Industry Publication", "Other"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.companyName) newErrors.companyName = "Company Name is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid Email is required";
    if (!formData.industry) newErrors.industry = "Industry selection is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Success
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-[#f8f5ef]" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Form Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 lg:p-10"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {isSubmitted ? (
               <motion.div 
                 className="flex flex-col items-center justify-center py-20 text-center"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
               >
                 <div className="w-20 h-20 bg-[#1a5c38]/10 rounded-full flex items-center justify-center mb-6">
                   <CheckCircle className="w-10 h-10 text-[#1a5c38]" />
                 </div>
                 <h3 className="text-3xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">Message Sent Successfully</h3>
                 <p className="text-[#6b7280] max-w-sm mb-8 text-lg">Thank you for reaching out to GC Ingredients. Our technical team will get back to you within 24 business hours.</p>
                 <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: "", companyName: "", email: "", phone: "", industry: "", subject: "", message: "", hearAboutUs: "" });
                  }}
                  className="px-6 py-2.5 bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#374151] rounded-xl font-medium transition-colors"
                 >
                   Send Another Message
                 </button>
               </motion.div>
            ) : (
              <>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1a5c38]/10 text-[#1a5c38] text-sm font-semibold mb-6">
                  Send Us a Message
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-8">
                  Tell Us About <span className="text-[#e8650a]">Your Project</span>
                </h2>

                <div className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
                      <label className="block text-sm font-medium text-[#111827] mb-1.5">Full Name *</label>
                      <input 
                        type="text" 
                        value={formData.fullName} 
                        onChange={e => handleInputChange('fullName', e.target.value)}
                        placeholder="John Doe"
                        className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-[#e5e7eb]'} rounded-xl px-4 py-3 text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] transition-all bg-white`}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName}</p>}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                      <label className="block text-sm font-medium text-[#111827] mb-1.5">Company Name *</label>
                      <input 
                        type="text" 
                        value={formData.companyName} 
                        onChange={e => handleInputChange('companyName', e.target.value)}
                        placeholder="Acme Foods Inc."
                        className={`w-full border ${errors.companyName ? 'border-red-500' : 'border-[#e5e7eb]'} rounded-xl px-4 py-3 text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] transition-all bg-white`}
                      />
                      {errors.companyName && <p className="text-red-500 text-xs mt-1.5">{errors.companyName}</p>}
                    </motion.div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
                      <label className="block text-sm font-medium text-[#111827] mb-1.5">Email Address *</label>
                      <input 
                        type="email" 
                        value={formData.email} 
                        onChange={e => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#e5e7eb]'} rounded-xl px-4 py-3 text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] transition-all bg-white`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}>
                      <label className="block text-sm font-medium text-[#111827] mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.phone} 
                        onChange={e => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] transition-all bg-white"
                      />
                    </motion.div>
                  </div>

                  {/* Row 3 */}
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.30 }}>
                    <label className="block text-sm font-medium text-[#111827] mb-1.5">Industry *</label>
                    <select 
                      value={formData.industry} 
                      onChange={e => handleInputChange('industry', e.target.value)}
                      className={`w-full border ${errors.industry ? 'border-red-500' : 'border-[#e5e7eb]'} rounded-xl px-4 py-3 text-[16px] text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] bg-white transition-all`}
                    >
                      <option value="">Select your industry</option>
                      {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                    {errors.industry && <p className="text-red-500 text-xs mt-1.5">{errors.industry}</p>}
                  </motion.div>

                  {/* Row 4 */}
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.36 }}>
                    <label className="block text-sm font-medium text-[#111827] mb-1.5">Area of Interest</label>
                    <select 
                      value={formData.subject} 
                      onChange={e => handleInputChange('subject', e.target.value)}
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[16px] text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] bg-white transition-all"
                    >
                      <option value="">Select an area of interest</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Plant Visit">Plant Visit</option>
                      <option value="Pricing / Quote">Pricing / Quote</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>

                  {/* Row 5 */}
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.42 }}>
                    <label className="block text-sm font-medium text-[#111827] mb-1.5">How can we help? *</label>
                    <textarea 
                      rows={5}
                      value={formData.message} 
                      onChange={e => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your project, current challenges, or specific ingredient requirements..."
                      className={`w-full border ${errors.message ? 'border-red-500' : 'border-[#e5e7eb]'} rounded-xl px-4 py-3 text-[16px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] transition-all bg-white resize-y`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                  </motion.div>

                  {/* Row 6 */}
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.48 }}>
                    <label className="block text-sm font-medium text-[#111827] mb-1.5">How did you hear about us?</label>
                    <select 
                      value={formData.hearAboutUs} 
                      onChange={e => handleInputChange('hearAboutUs', e.target.value)}
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 text-[16px] text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1a5c38] bg-white transition-all"
                    >
                      <option value="">Select an option</option>
                      {referralSources.map(source => <option key={source} value={source}>{source}</option>)}
                    </select>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.54 }}>
                    <button 
                      onClick={handleSubmit}
                      className="w-full bg-[#e8650a] hover:bg-[#c95808] text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2"
                    >
                      Send Message <Send className="w-5 h-5" />
                    </button>
                    <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-[#6b7280]">
                      <Lock className="w-3.5 h-3.5" /> Your information is safe with us. We never share your data.
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>

          {/* Right: Contact Info List */}
          <div className="lg:pt-6">
            <motion.h3 
              className="text-2xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#1a5c38] mb-2"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            >
              Other Ways to Reach Us
            </motion.h3>
            <motion.p 
              className="text-[#6b7280] mb-8"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our technical team typically responds within 24 business hours.
            </motion.p>
            
            <div className="space-y-4 mb-10">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div 
                    key={card.title} 
                    className="bg-white p-5 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: card.color + '15' }}>
                      <Icon className="w-6 h-6" style={{ color: card.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] text-[15px] mb-1">{card.title}</h4>
                      <p className="text-[#6b7280] text-sm mb-1.5">{card.detailItem}</p>
                      {card.linkText && <a href={card.linkHref} className="text-[#1a5c38] font-semibold text-xs hover:text-[#e8650a] transition-colors">{card.linkText} &rarr;</a>}
                      {card.subText && <p className="text-[#9ca3af] text-xs">{card.subText}</p>}
                      {card.highlightText && <p className="text-[#e8650a] font-medium text-xs">{card.highlightText}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 items-center"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            >
              <span className="text-sm font-semibold text-[#111827] mr-2">Follow Us:</span>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6b7280] hover:text-[#1a5c38] hover:bg-[#1a5c38]/5 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6b7280] hover:text-[#1a5c38] hover:bg-[#1a5c38]/5 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6b7280] hover:text-[#1a5c38] hover:bg-[#1a5c38]/5 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
