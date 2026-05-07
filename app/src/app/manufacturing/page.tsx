import type { Metadata } from "next";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/manufacturing/HeroSection";
import ManufacturingStrip from "../../components/manufacturing/ManufacturingStrip";
import FacilityOverview from "../../components/manufacturing/FacilityOverview";
import FacilityGrowthStats from "../../components/manufacturing/FacilityGrowthStats";
import ProductionCapabilities from "../../components/manufacturing/ProductionCapabilities";
import QualityControl from "../../components/manufacturing/QualityControl";
import Certifications from "../../components/manufacturing/Certifications";
import SupplyChain from "../../components/manufacturing/SupplyChain";
import ManufacturingProcess from "../../components/manufacturing/ManufacturingProcess";
import CTASection from "../../components/manufacturing/CTASection";

export const metadata: Metadata = {
  title: "Manufacturing | GC Ingredients — World-Class Food Ingredient Manufacturing",
  description:
    "GC Ingredients operates a 120,000 sq ft state-of-the-art food ingredient manufacturing facility with rigorous QC, full batch traceability, and reliable North America-wide supply chain.",
  keywords:
    "GC Ingredients manufacturing, food ingredient manufacturing facility, dry blending, liquid blending, QC validation, food ingredient supply chain, custom ingredient production",
  openGraph: {
    title: "Manufacturing | GC Ingredients — 120,000 Sq Ft Food Ingredient Facility",
    description:
      "From raw material intake to final delivery with CoA — every GC Ingredients batch is manufactured and QC-validated in our 120,000 sq ft facility.",
    type: "website",
  },
};

export default function ManufacturingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ManufacturingStrip />
        <FacilityOverview />
        <FacilityGrowthStats />
        <ProductionCapabilities />
        <QualityControl />
        <Certifications />
        <SupplyChain />
        <ManufacturingProcess />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
