import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | GC Ingredients",
  description:
    "Review the Terms of Use for the GC Ingredients website. By using our site, you agree to the following terms and conditions.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using the GC Ingredients website (gcingredients.com), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      "GC Ingredients reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site following any changes constitutes your acceptance of the new terms.",
    ],
  },
  {
    title: "2. Use of Website",
    content: [
      "This website is intended for informational and business inquiry purposes related to food ingredient solutions offered by GC Ingredients. You may use this site only for lawful purposes and in a manner consistent with all applicable local, state, national, and international laws.",
      "You agree not to: reproduce, duplicate, copy, sell, or exploit any portion of the website without express written permission from GC Ingredients; use the site in any way that could damage, disable, or impair the website; attempt to gain unauthorized access to any part of the site or its related systems.",
    ],
  },
  {
    title: "3. Intellectual Property",
    content: [
      "All content on this website — including but not limited to text, graphics, logos, images, and software — is the property of GC Ingredients or its content suppliers and is protected by United States and international copyright laws.",
      "The GC Ingredients logo, brand name, and product names are trademarks of GC Ingredients. You may not use any trademarks displayed on this site without the prior written consent of GC Ingredients.",
    ],
  },
  {
    title: "4. Product Information",
    content: [
      "GC Ingredients makes every effort to provide accurate and up-to-date product information on this website. However, product formulations, availability, and specifications are subject to change without notice.",
      "Information presented on this website is for general reference only and does not constitute a warranty or guarantee of product performance. For specific technical requirements, please contact our team directly.",
    ],
  },
  {
    title: "5. Disclaimer of Warranties",
    content: [
      "This website is provided on an 'as is' and 'as available' basis without any warranties of any kind, either express or implied. GC Ingredients does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
      "To the fullest extent permitted by law, GC Ingredients disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "In no event shall GC Ingredients be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, this website or its content.",
      "GC Ingredients' total liability to you for any damages, losses, and causes of action shall not exceed the amount paid by you, if any, for accessing this website.",
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites (such as Primaria Nutrition). These links are provided for your convenience only. GC Ingredients has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.",
    ],
  },
  {
    title: "8. Contact Form & Communications",
    content: [
      "When you submit information through our contact forms or request samples, you consent to being contacted by GC Ingredients via email or phone regarding your inquiry. We will not use this information for unsolicited marketing communications.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms of Use are governed by and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in Georgia for resolution of any disputes.",
    ],
  },
  {
    title: "10. Contact Information",
    content: [
      "If you have any questions about these Terms of Use, please contact us:",
      "GC Ingredients | 3450 Atlanta Industrial Parkway NW, Atlanta, GA 30331 | Phone: (678) 974-0600 | Email: info@gcingredients.com",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0d3a22] pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-green-200 text-sm font-medium mb-6">
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-plus-jakarta)] text-white mb-4">
              Terms of Use
            </h1>
            <p className="text-white/70 text-lg">
              Effective Date: January 1, 2024 &nbsp;|&nbsp; Last Updated: June 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#6b7280] text-lg leading-relaxed mb-12 pb-8 border-b border-gray-100">
              Please read these Terms of Use carefully before using the GC Ingredients website. These
              terms govern your access to and use of our website and services. By using our website,
              you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>

            <div className="space-y-10">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <h2 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#e8650a] rounded-full inline-block" />
                    {sec.title}
                  </h2>
                  <div className="pl-5 space-y-3">
                    {sec.content.map((para, i) => (
                      <p key={i} className="text-[#6b7280] leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-[#f8f5ef] rounded-2xl text-center">
              <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">
                Need clarification on our Terms?
              </h3>
              <p className="text-[#6b7280] mb-6">
                Contact our team and we will be happy to assist you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1a5c38] hover:bg-[#2d7a4f] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
