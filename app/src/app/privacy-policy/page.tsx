import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | GC Ingredients",
  description:
    "Read the GC Ingredients Privacy Policy to understand how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "GC Ingredients collects information you provide directly to us, such as when you fill out our contact form, request a sample, or communicate with our team. This may include your name, email address, phone number, company name, and any message you send.",
      "We may also collect information automatically when you visit our website, including your IP address, browser type, operating system, pages visited, and the date and time of your visit through standard web analytics tools.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries, provide the products and services you request, send you relevant information about our ingredient solutions and technical updates, and improve our website and customer experience.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.",
    ],
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: [
      "Our website may use cookies — small text files stored on your device — to enhance your browsing experience and analyze how visitors interact with our site. You can control cookie settings through your browser at any time.",
      "We use analytics tools (such as Google Analytics) to understand traffic patterns. These tools may set their own cookies. Please refer to their respective privacy policies for more details.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "GC Ingredients takes the security of your personal information seriously. We implement industry-standard safeguards including encryption, access controls, and secure servers to protect your data from unauthorized access, disclosure, or misuse.",
      "While we strive to protect your personal information, no method of transmission over the Internet is 100% secure. We encourage you to use caution when sharing sensitive information online.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with our legal obligations, resolve disputes, and enforce our agreements.",
      "When personal data is no longer needed, we securely delete or anonymize it in accordance with applicable laws.",
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites, such as Primaria Nutrition. These sites have their own privacy policies and we are not responsible for their content or practices. We encourage you to review their privacy policies before submitting any personal information.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. To exercise these rights or ask questions about our data practices, please contact us at info@gcingredients.com.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Our website is not directed toward children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post any updates on this page with a revised effective date. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:",
      "GC Ingredients | 3450 Atlanta Industrial Parkway NW, Atlanta, GA 30331 | Phone: (678) 974-0600 | Email: info@gcingredients.com",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              GC Ingredients (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website or interact with our services. Please read this policy carefully.
            </p>

            <div className="space-y-10">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <h2 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#1a5c38] rounded-full inline-block" />
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
                Questions about our Privacy Policy?
              </h3>
              <p className="text-[#6b7280] mb-6">
                Our team is here to help. Reach out to us directly.
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
