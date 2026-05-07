import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/contact/HeroSection";
import ContactFormInfo from "../../components/contact/ContactFormInfo";
import WhyContactStrip from "../../components/contact/WhyContactStrip";
import DepartmentContacts from "../../components/contact/DepartmentContacts";
import Locations from "../../components/contact/Locations";
import FAQAccordion from "../../components/contact/FAQAccordion";
import ResponsePromise from "../../components/contact/ResponsePromise";
import CTASection from "../../components/contact/CTASection";

export const metadata: Metadata = {
  title: "Contact Us | GC Ingredients — Talk to Our Food Science Team",
  description:
    "Contact GC Ingredients to discuss custom formulation, ingredient technical support, pricing, or supply chain needs. We guarantee a response within 24 business hours.",
  keywords:
    "contact GC Ingredients, food ingredient supplier contact, custom formulation request, food science technical support",
  openGraph: {
    title: "Contact Us | GC Ingredients",
    description:
      "Looking for a custom ingredient solution? Our technical team is ready to help. Reach out for consultations, quotes, and sample requests.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ContactFormInfo />
        <WhyContactStrip />
        <DepartmentContacts />
        <Locations />
        <FAQAccordion />
        <ResponsePromise />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
