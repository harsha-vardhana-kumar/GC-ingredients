import type { Metadata } from "next";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import HeroSection from "../../../components/csr/HeroSection";
import OurCommitment from "../../../components/csr/OurCommitment";
import ImpactMetrics from "../../../components/csr/ImpactMetrics";
import CSRPrograms from "../../../components/csr/CSRPrograms";
import SustainabilityGoals from "../../../components/csr/SustainabilityGoals";
import EnvironmentPractices from "../../../components/csr/EnvironmentPractices";
import CommunityStories from "../../../components/csr/CommunityStories";
import Certifications from "../../../components/csr/Certifications";
import CTASection from "../../../components/csr/CTASection";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility | GC Ingredients",
  description:
    "GC Ingredients is committed to responsible business practices — from sustainable sourcing and waste reduction to community investment and employee wellbeing. Learn about our CSR programs.",
  keywords:
    "GC Ingredients CSR, corporate social responsibility, sustainable food manufacturing, responsible sourcing, community impact, food industry sustainability",
  openGraph: {
    title: "CSR | GC Ingredients — Doing Good While Doing Business",
    description:
      "At GC Ingredients, we believe that building a better food industry means taking responsibility — for our environment, our communities, and the people behind every product we make.",
    type: "website",
  },
};

export default function CSRPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OurCommitment />
        <ImpactMetrics />
        <CSRPrograms />
        <SustainabilityGoals />
        <EnvironmentPractices />
        <CommunityStories />
        <Certifications />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
