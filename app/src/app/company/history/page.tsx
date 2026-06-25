import type { Metadata } from "next";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import HeroSection from "../../../components/history/HeroSection";
import FounderStory from "../../../components/history/FounderStory";
import MilestoneTimeline from "../../../components/history/MilestoneTimeline";
import FacilityGrowth from "../../../components/history/FacilityGrowth";
import FutureVision from "../../../components/history/FutureVision";
import CTASection from "../../../components/history/CTASection";

export const metadata: Metadata = {
  title: "Our History | GC Ingredients — 25+ Years of Food Science",
  description:
    "Discover the history of GC Ingredients — from its founding in 2004 by Srikanth, MS, MBA to becoming a 120,000 sq ft food ingredient manufacturing powerhouse serving North America.",
  keywords:
    "GC Ingredients history, food ingredient manufacturer history, Srikanth, GCI milestones, food science company founded 2004",
  openGraph: {
    title: "Our History | GC Ingredients — From Vision to Industry Leader",
    description:
      "What began as one man's passion for food science in 2004 has grown into a 120,000 sq ft manufacturing powerhouse serving food manufacturers across North America.",
    type: "website",
  },
};

export default function OurHistoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FounderStory />
        <MilestoneTimeline />
        <FacilityGrowth />
        <FutureVision />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
