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
  title: "Food Science Team | GC Ingredients Innovation",
  description:
    "Our food science team brings together decades of expertise across ingredient chemistry, food technology, and manufacturing process engineering.",
  openGraph: {
    title: "Food Science Team | GC Ingredients",
    description: "100+ technical experts working for your product's success.",
    type: "website",
  },
};

export default function FoodScienceTeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          pageName="Food Science Team"
          tag="Food Science Team"
          h1="The Scientists Behind Every Solution"
          subtext="Our food science team brings together decades of expertise across ingredient chemistry, food technology, and manufacturing process engineering — all working for your product's success."
          stats={[
            { value: "100+", label: "Technical Experts" },
            { value: "25+", label: "Years Expertise" },
            { value: "500+", label: "Annual Trials" },
          ]}
          Icon="Microscope"
          primaryBtn="Talk to Our Scientists"
          secondaryBtn="Explore Our Capabilities"
          primaryHref="/contact"
          secondaryHref="/innovation/rd-overview"
        />

        <HighlightStrip
          highlights={[
            { Icon: "Microscope", label: "Food Scientists", description: "Deep ingredient chemistry and application expertise" },
            { Icon: "FlaskConical", label: "R&D Specialists", description: "Bench to production scale-up capability" },
            { Icon: "ShieldCheck", label: "QC Engineers", description: "Rigorous quality validation at every stage" },
          ]}
        />

        <MainContent
          sectionTag="Our Team"
          h2="Deep Expertise Across Every Food Science Discipline"
          para1="Our food science team is the engine behind every GCI ingredient solution. Combining academic food science with hands-on manufacturing experience, our scientists understand both the laboratory and the production floor."
          para2="From ingredient chemistry specialists to food technology experts and QC engineers — our team covers every discipline needed to develop, validate, and deliver world-class ingredient systems."
          highlights={[
            "Category-specific application knowledge",
            "Ingredient interaction and chemistry expertise",
            "Regulatory and compliance awareness",
            "Dedicated client-facing technical support",
          ]}
          buttonText="Meet Our Team"
          Icon="Microscope"
        />

        <DetailCards
          sectionTag="Our Disciplines"
          h2="The Experts on Your Side"
          subtext="Every GCI project draws on cross-disciplinary expertise to deliver the right solution."
          cards={[
            {
              Icon: "Microscope",
              iconColor: "green",
              title: "Food Scientists",
              description: "Deep expertise in ingredient chemistry, functionality, and application performance across all food categories.",
            },
            {
              Icon: "FlaskConical",
              iconColor: "orange",
              title: "R&D Specialists",
              description: "Hands-on formulation development with bench-to-production scale-up expertise across all food applications.",
            },
            {
              Icon: "ShieldCheck",
              iconColor: "green",
              title: "QC Engineers",
              description: "Rigorous quality validation ensuring every formula meets production and regulatory standards before delivery.",
            },
            {
              Icon: "Headphones",
              iconColor: "orange",
              title: "Technical Account Specialists",
              description: "Client-facing experts providing ongoing technical support throughout your product lifecycle.",
            },
          ]}
        />

        <ProcessSteps
          sectionTag="How We Work With You"
          h2="Our Collaborative Development Approach"
          steps={[
            { number: "01", Icon: "MessageSquare", title: "Initial Consultation", description: "Your dedicated specialist learns about your product, process, and technical challenges" },
            { number: "02", Icon: "Users", title: "Team Assignment", description: "Right experts assigned based on your application and formulation needs" },
            { number: "03", Icon: "FlaskConical", title: "Collaborative Development", description: "Our scientists work alongside your team through the full development process" },
            { number: "04", Icon: "Headphones", title: "Ongoing Support", description: "Continued technical support after delivery throughout your product lifecycle" },
          ]}
        />

        <StatsBand
          stats={[
            { value: "100+", numericValue: 100, suffix: "+", label: "Technical Experts" },
            { value: "500+", numericValue: 500, suffix: "+", label: "Annual R&D Trials" },
            { value: "2,500+", numericValue: 2500, suffix: "+", label: "Formulations Developed" },
            { value: "25+", numericValue: 25, suffix: "+", label: "Years Combined Expertise" },
          ]}
        />

        <RelatedPages
          pages={[
            { name: "R&D Overview", href: "/innovation/rd-overview", Icon: "FlaskConical", description: "500+ annual trials — the rigorous R&D engine behind every GCI solution." },
            { name: "Custom Blends", href: "/innovation/custom-blends", Icon: "Settings2", description: "Every ingredient system built specifically around your product and process." },
            { name: "Product Development", href: "/innovation/product-development", Icon: "Rocket", description: "End-to-end product development from concept to production-ready delivery." },
          ]}
        />

        <CTASection
          h2="Ready to Work With Our Food Science Team?"
          primaryBtn="Talk to a Food Scientist"
          secondaryBtn="Download Team Overview"
        />
      </main>
      <Footer />
    </>
  );
}
