import type { Metadata } from "next";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import HeroSection from "../../../components/innovation-detail/HeroSection";
import HighlightStrip from "../../../components/innovation-detail/HighlightStrip";
import MainContent from "../../../components/innovation-detail/MainContent";
import DetailCards from "../../../components/innovation-detail/DetailCards";
import ProcessSteps from "../../../components/innovation-detail/ProcessSteps";
import StatsBand from "../../../components/innovation-detail/StatsBand";
import RelatedPages from "../../../components/innovation-detail/RelatedPages";
import CTASection from "../../../components/innovation-detail/CTASection";
export const metadata: Metadata = {
  title: "R&D Overview | GC Ingredients Innovation",
  description:
    "Our in-house R&D team conducts 500+ formulation trials annually — testing, refining, and validating ingredient systems across every food category we serve.",
  keywords:
    "food ingredient R&D, formulation research, food science research, ingredient testing, GC Ingredients R&D",
  openGraph: {
    title: "R&D Overview | GC Ingredients",
    description:
      "500+ annual R&D trials. From fundamental research to applied food science — rigorous testing at every stage.",
    type: "website",
  },
};

export default function RDOverviewPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          pageName="R&D Overview"
          tag="Research & Development"
          h1="Rigorous R&D at the Heart of Every Solution"
          subtext="Our in-house R&D team conducts over 500 formulation trials annually — testing, refining, and validating ingredient systems across every food category we serve."
          stats={[
            { value: "500+", label: "Annual Trials" },
            { value: "2,500+", label: "Formulations" },
            { value: "25+", label: "Years R&D" },
          ]}
          Icon="FlaskConical"
          primaryBtn="Start an R&D Project"
          secondaryBtn="Meet Our Scientists"
          primaryHref="/contact"
          secondaryHref="/innovation/food-science-team"
        />

        <HighlightStrip
          highlights={[
            {
              Icon: "FlaskConical",
              label: "500+ Annual Trials",
              description: "Rigorous testing every year across all categories",
            },
            {
              Icon: "Microscope",
              label: "In-House Lab",
              description: "Advanced testing equipment and analytics",
            },
            {
              Icon: "BookOpen",
              label: "25+ Years",
              description: "Deep accumulated R&D expertise",
            },
          ]}
        />

        <MainContent
          sectionTag="Our R&D Capability"
          h2="From Fundamental Research to Applied Food Science"
          para1="Our R&D team bridges the gap between laboratory innovation and real-world manufacturing performance. Every ingredient system we develop goes through a rigorous multi-stage research and testing process before it reaches your production line."
          para2="From fundamental ingredient chemistry research to applied food science and production-scale validation — our R&D capability covers the full spectrum of formulation development."
          highlights={[
            "In-house laboratory with advanced testing equipment",
            "500+ formulation trials conducted annually",
            "Cross-category application research capability",
            "Production-scale validation before delivery",
          ]}
          buttonText="Explore Our R&D Capabilities"
          Icon="FlaskConical"
        />

        <DetailCards
          sectionTag="R&D Capabilities"
          h2="What Our R&D Team Does"
          subtext="A rigorous, multi-stage research and testing process that underpins every solution we develop."
          cards={[
            {
              Icon: "FlaskConical",
              iconColor: "green",
              title: "Formulation Research",
              description:
                "Systematic ingredient research and formulation development across all food categories we serve.",
            },
            {
              Icon: "TestTube",
              iconColor: "orange",
              title: "Bench Testing",
              description:
                "Rigorous bench-scale testing to evaluate ingredient performance and interactions under real conditions.",
            },
            {
              Icon: "Microscope",
              iconColor: "green",
              title: "Analytical Testing",
              description:
                "Advanced analytical equipment to validate ingredient composition, purity, and functional performance.",
            },
            {
              Icon: "Factory",
              iconColor: "orange",
              title: "Scale-Up Validation",
              description:
                "Production-environment simulation to validate performance before full-scale manufacturing delivery.",
            },
          ]}
        />

        <ProcessSteps
          sectionTag="R&D Process"
          h2="Our Rigorous 4-Stage R&D Process"
          steps={[
            {
              number: "01",
              Icon: "Search",
              title: "Literature Review",
              description:
                "Deep research into ingredient chemistry and existing formulation approaches",
            },
            {
              number: "02",
              Icon: "FlaskConical",
              title: "Bench Development",
              description:
                "Bench-scale formulation development and initial performance testing",
            },
            {
              number: "03",
              Icon: "TestTube",
              title: "Analytical Testing",
              description:
                "Comprehensive analytical and application testing against specification",
            },
            {
              number: "04",
              Icon: "Factory",
              title: "Scale-Up",
              description:
                "Production-scale validation to ensure real-world performance matches laboratory results",
            },
          ]}
        />

        <StatsBand
          stats={[
            { value: "500+", numericValue: 500, suffix: "+", label: "Annual R&D Trials" },
            { value: "2,500+", numericValue: 2500, suffix: "+", label: "Formulations Developed" },
            { value: "25+", numericValue: 25, suffix: "+", label: "Years R&D Experience" },
            { value: "100+", numericValue: 100, suffix: "+", label: "Technical Experts" },
          ]}
        />

        <RelatedPages
          pages={[
            {
              name: "Custom Blends",
              href: "/innovation/custom-blends",
              Icon: "Settings2",
              description:
                "Every ingredient system built specifically around your product and process.",
            },
            {
              name: "Food Science Team",
              href: "/innovation/food-science-team",
              Icon: "Users",
              description:
                "Meet the scientists and specialists behind every GCI solution.",
            },
            {
              name: "Product Development",
              href: "/innovation/product-development",
              Icon: "Rocket",
              description:
                "End-to-end product development from concept to production-ready delivery.",
            },
          ]}
        />

        <CTASection
          h2="Ready to Put Our R&D to Work for You?"
          primaryBtn="Start an R&D Project"
          secondaryBtn="Download R&D Overview"
        />
      </main>
      <Footer />
    </>
  );
}
