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
  title: "Product Development | GC Ingredients Innovation",
  description:
    "GC Ingredients supports your product development journey from initial concept through to full production launch — helping you get to market faster with confidence.",
  openGraph: {
    title: "Product Development | GC Ingredients",
    description: "2,500+ products developed. From concept to production — end-to-end support.",
    type: "website",
  },
};

export default function ProductDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          pageName="Product Development"
          tag="Product Development"
          h1="From Concept to Production — End-to-End Product Development"
          subtext="GC Ingredients supports your product development journey from initial concept through to full production launch — helping you get to market faster with confidence."
          stats={[
            { value: "2,500+", label: "Products Developed" },
            { value: "2–6 Weeks", label: "Avg Timeline" },
            { value: "Free", label: "Initial Consultation" },
          ]}
          Icon="Rocket"
          primaryBtn="Start a Development Project"
          secondaryBtn="Talk to Our Team"
          primaryHref="/contact"
          secondaryHref="/innovation/food-science-team"
        />

        <HighlightStrip
          highlights={[
            { Icon: "Rocket", label: "Speed to Market", description: "Faster development timelines from brief to delivery" },
            { Icon: "FlaskConical", label: "Full Support", description: "Concept to production coverage end-to-end" },
            { Icon: "BadgeCheck", label: "Validated Results", description: "QC tested and validated before delivery" },
          ]}
        />

        <MainContent
          sectionTag="Our Approach"
          h2="Complete Product Development Support at Every Stage"
          para1="Getting a new food product from concept to market is complex. GC Ingredients simplifies the ingredient side of that journey — providing complete development support from initial brief through formulation, testing, validation, and production-ready delivery."
          para2="Our development process is designed to be fast, transparent, and collaborative — keeping you informed and in control at every stage while our food scientists handle the technical complexity."
          highlights={[
            "Concept to production-ready support",
            "Transparent development timeline",
            "Iterative testing and refinement",
            "Post-launch technical support included",
          ]}
          buttonText="Start Your Development Project"
          Icon="Rocket"
        />

        <DetailCards
          sectionTag="Development Stages"
          h2="What We Deliver at Every Stage"
          subtext="Structured, transparent, and collaborative — from your first brief to your production launch."
          cards={[
            {
              Icon: "Lightbulb",
              iconColor: "green",
              title: "Concept Development",
              description: "Technical feasibility assessment and initial formulation direction based on your product brief and target consumer.",
            },
            {
              Icon: "FlaskConical",
              iconColor: "orange",
              title: "Formulation Development",
              description: "Custom ingredient system development with iterative bench-scale testing and refinement cycles.",
            },
            {
              Icon: "TestTube",
              iconColor: "green",
              title: "Testing & Validation",
              description: "Comprehensive testing against specification including shelf life, texture, and production simulation.",
            },
            {
              Icon: "Truck",
              iconColor: "orange",
              title: "Launch Support",
              description: "Production-ready formula delivery with full technical documentation and post-launch support.",
            },
          ]}
        />

        <ProcessSteps
          sectionTag="Development Process"
          h2="Our 5-Stage Product Development Process"
          steps={[
            { number: "01", Icon: "MessageSquare", title: "Project Brief", description: "Share your concept, target consumer, application, and performance requirements" },
            { number: "02", Icon: "Lightbulb", title: "Feasibility", description: "Technical feasibility assessment and initial formulation strategy development" },
            { number: "03", Icon: "FlaskConical", title: "Development", description: "Iterative formulation development and bench-scale testing cycles" },
            { number: "04", Icon: "TestTube", title: "Validation", description: "Full production-scale validation and QC testing before delivery" },
            { number: "05", Icon: "Rocket", title: "Launch", description: "Production-ready formula delivered with documentation and ongoing launch support" },
          ]}
        />

        <StatsBand
          stats={[
            { value: "2,500+", numericValue: 2500, suffix: "+", label: "Products Developed" },
            { value: "2–6 Weeks", label: "Average Timeline" },
            { value: "100+", numericValue: 100, suffix: "+", label: "Technical Experts" },
            { value: "Free", label: "Initial Consultation" },
          ]}
        />

        <RelatedPages
          pages={[
            { name: "R&D Overview", href: "/innovation/rd-overview", Icon: "Microscope", description: "500+ annual trials — the R&D engine behind every GCI product." },
            { name: "Custom Blends", href: "/innovation/custom-blends", Icon: "Settings2", description: "Every ingredient system built specifically around your product and process." },
            { name: "Food Science Team", href: "/innovation/food-science-team", Icon: "Users", description: "Meet the scientists and specialists behind every GCI solution." },
          ]}
        />

        <CTASection
          h2="Ready to Bring Your Product to Life?"
          primaryBtn="Start Your Development Project"
          secondaryBtn="Download Development Guide"
        />
      </main>
      <Footer />
    </>
  );
}
