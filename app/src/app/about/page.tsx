import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutStatsSection from "../../components/about/AboutStatsSection";
import MissionVisionSection from "../../components/about/MissionVisionSection";
import OurValuesSection from "../../components/about/OurValuesSection";
import OurJourneySection from "../../components/about/OurJourneySection";
import WhyChooseGCISection from "../../components/about/WhyChooseGCISection";
import LeadershipSection from "../../components/about/LeadershipSection";
import CertificationsSection from "../../components/about/CertificationsSection";
import AboutCTASection from "../../components/about/AboutCTASection";

export const metadata: Metadata = {
  title: "About GC Ingredients | 25+ Years of Food Science Excellence",
  description:
    "Learn about GC Ingredients — a B2B food ingredient manufacturer with 25+ years of expertise, 2,500+ formulations developed, and a 120,000 sq ft state-of-the-art facility in Irving, TX.",
  keywords:
    "GC Ingredients about, food ingredient manufacturer, food science company, Srikanth Gundavarapu, functional food ingredients, B2B food ingredients",
  openGraph: {
    title: "About GC Ingredients | From Ingredient Supplier to Innovation Partner",
    description:
      "25+ years of food science expertise powering food manufacturers worldwide with scientifically advanced, reliable ingredient systems.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
        <AboutStatsSection />
        <MissionVisionSection />
        <OurValuesSection />
        <OurJourneySection />
        <WhyChooseGCISection />
        <LeadershipSection />
        <CertificationsSection />
        <AboutCTASection />
      </main>
      <Footer />
    </>
  );
}
