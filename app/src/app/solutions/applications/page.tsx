import type { Metadata } from "next";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import HeroSection from "../../../components/applications/HeroSection";
import IndustriesStrip from "../../../components/applications/IndustriesStrip";
import ApplicationsDive from "../../../components/applications/ApplicationsDive";
import CrossAppCapabilities from "../../../components/applications/CrossAppCapabilities";
import WhyGCIApplications from "../../../components/applications/WhyGCIApplications";
import TechnicalSupportStrip from "../../../components/applications/TechnicalSupportStrip";
import CTASection from "../../../components/applications/CTASection";

export const metadata: Metadata = {
  title: "Applications | GC Ingredients — Ingredient Solutions for Every Food Category",
  description:
    "GC Ingredients delivers purpose-built ingredient systems for bakery, tortilla, dairy, meat & poultry, snack foods, and prepared food manufacturers. 25+ years of application expertise.",
  keywords:
    "food ingredient applications, bakery ingredients, tortilla ingredients, dairy ingredients, meat ingredients, snack food ingredients, prepared food ingredients, GC Ingredients applications",
  openGraph: {
    title: "Applications | GC Ingredients — Ingredient Solutions Across Every Food Category",
    description:
      "Purpose-built ingredient systems across six major food manufacturing segments — each backed by deep technical expertise and 25+ years of application knowledge.",
    type: "website",
  },
};

export default function ApplicationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IndustriesStrip />
        <ApplicationsDive />
        <CrossAppCapabilities />
        <WhyGCIApplications />
        <TechnicalSupportStrip />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
