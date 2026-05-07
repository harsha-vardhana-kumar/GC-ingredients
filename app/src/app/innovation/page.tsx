import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/innovation/HeroSection";
import InnovationStrip from "../../components/innovation/InnovationStrip";
import RDOverview from "../../components/innovation/RDOverview";
import RDStats from "../../components/innovation/RDStats";
import InnovationCapabilities from "../../components/innovation/InnovationCapabilities";
import LabFacility from "../../components/innovation/LabFacility";
import InnovationProcess from "../../components/innovation/InnovationProcess";
import CustomBlends from "../../components/innovation/CustomBlends";
import FoodScienceTeam from "../../components/innovation/FoodScienceTeam";
import CTASection from "../../components/innovation/CTASection";

export const metadata: Metadata = {
  title: "Innovation | GC Ingredients — Where Food Science Meets Innovation",
  description:
    "GC Ingredients conducts 500+ R&D trials annually, developing 2,500+ custom ingredient formulations. Our dedicated food science team delivers science-backed solutions for every food manufacturing challenge.",
  keywords:
    "food ingredient innovation, custom blend development, food science R&D, ingredient formulation, GC Ingredients innovation, food science laboratory, custom ingredient systems",
  openGraph: {
    title: "Innovation | GC Ingredients — Where Food Science Meets Innovation",
    description:
      "500+ annual R&D trials, 2,500+ formulations developed, 25+ years food science expertise. Our team solves your toughest ingredient challenges.",
    type: "website",
  },
};

export default function InnovationPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <InnovationStrip />
        <RDOverview />
        <RDStats />
        <InnovationCapabilities />
        <LabFacility />
        <InnovationProcess />
        <CustomBlends />
        <FoodScienceTeam />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
