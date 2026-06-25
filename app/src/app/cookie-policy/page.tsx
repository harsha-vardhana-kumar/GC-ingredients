import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | GC Ingredients",
  description:
    "Learn how GC Ingredients uses cookies on our website and how you can manage your cookie preferences.",
};

const sections = [
  {
    title: "1. What Are Cookies?",
    content: [
      "Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to the website owners.",
      "Cookies cannot execute programs or deliver viruses to your computer. They are uniquely assigned to your browser and can only be read by a web server in the domain that issued the cookie to you.",
    ],
  },
  {
    title: "2. How GC Ingredients Uses Cookies",
    content: [
      "GC Ingredients uses cookies to enhance your experience on our website. Specifically, we use cookies to: understand how visitors navigate and interact with our site, remember your preferences for future visits, analyze traffic and usage patterns to improve our content and services, and ensure the website functions properly across different browsers.",
    ],
  },
  {
    title: "3. Types of Cookies We Use",
    content: [
      "Essential Cookies: These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies.",
      "Analytics Cookies: We use analytics tools (such as Google Analytics) to collect anonymous information about how visitors use our site. This helps us understand traffic patterns, popular pages, and how we can improve your experience. These cookies collect aggregate, non-identifiable information.",
      "Preference Cookies: These cookies allow the website to remember choices you have made (such as language preferences) and provide enhanced, more personalized features.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      "We may use third-party services on our website, such as embedded maps (Google Maps on our Contact page) and analytics tools. These third parties may place their own cookies on your device. We do not control these cookies and recommend reviewing the respective privacy and cookie policies of these third-party providers.",
      "Google Analytics: We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. Information gathered is used to create reports about the use of our website. Please visit Google's privacy policy for more information.",
    ],
  },
  {
    title: "5. Managing and Disabling Cookies",
    content: [
      "You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Please note that disabling cookies may prevent you from taking full advantage of the website.",
      "To manage cookies in your browser: Chrome — Settings > Privacy and Security > Cookies. Firefox — Options > Privacy & Security > Cookies and Site Data. Safari — Preferences > Privacy > Cookies. Edge — Settings > Cookies and Site Permissions.",
    ],
  },
  {
    title: "6. Do Not Track",
    content: [
      "Some browsers have a 'Do Not Track' feature that signals to websites that you do not want to have your online activity tracked. We currently do not respond to Do Not Track signals, but we respect your privacy preferences. You can manage your preferences through your browser cookie settings as described above.",
    ],
  },
  {
    title: "7. Cookie Retention",
    content: [
      "Session Cookies: These cookies are temporary and are deleted from your device when you close your browser.",
      "Persistent Cookies: These remain on your device for a set period or until you delete them manually. We use persistent cookies to remember your preferences across sessions. The retention period varies depending on the type of cookie.",
    ],
  },
  {
    title: "8. Updates to This Cookie Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of any significant changes by updating the effective date at the top of this page. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have any questions about our use of cookies or this Cookie Policy, please contact us:",
      "GC Ingredients | 3450 Atlanta Industrial Parkway NW, Atlanta, GA 30331 | Phone: (678) 974-0600 | Email: info@gcingredients.com",
    ],
  },
];

export default function CookiePolicyPage() {
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
              Cookie Policy
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
              This Cookie Policy explains how GC Ingredients uses cookies and similar tracking
              technologies when you visit our website. By continuing to use our website, you consent
              to our use of cookies as described in this policy.
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

            {/* Cookie types visual table */}
            <div className="mt-12 overflow-x-auto">
              <h2 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-6">
                Summary of Cookies Used
              </h2>
              <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#1a5c38] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Cookie Type</th>
                    <th className="text-left px-5 py-4 font-semibold">Purpose</th>
                    <th className="text-left px-5 py-4 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Essential", purpose: "Website functionality & navigation", duration: "Session" },
                    { type: "Analytics", purpose: "Traffic analysis & performance tracking (Google Analytics)", duration: "Up to 2 years" },
                    { type: "Preference", purpose: "Remembering user settings and preferences", duration: "Up to 1 year" },
                    { type: "Third-Party", purpose: "Embedded maps, external services", duration: "Varies" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f5ef]"}>
                      <td className="px-5 py-4 font-medium text-[#111827]">{row.type}</td>
                      <td className="px-5 py-4 text-[#6b7280]">{row.purpose}</td>
                      <td className="px-5 py-4 text-[#6b7280]">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-[#f8f5ef] rounded-2xl text-center">
              <h3 className="text-xl font-bold font-[family-name:var(--font-plus-jakarta)] text-[#111827] mb-3">
                Questions about cookies?
              </h3>
              <p className="text-[#6b7280] mb-6">
                We are happy to explain how we use cookies and help you manage your preferences.
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
