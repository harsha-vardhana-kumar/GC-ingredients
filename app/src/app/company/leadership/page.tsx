import type { Metadata } from "next";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import HeroSection from "../../../components/leadership/HeroSection";
import FounderFeature from "../../../components/leadership/FounderFeature";
import ValuesStrip from "../../../components/leadership/ValuesStrip";
import TeamGrid from "../../../components/leadership/TeamGrid";
import CultureSection from "../../../components/leadership/CultureSection";
import JoinTeam from "../../../components/leadership/JoinTeam";
import CTASection from "../../../components/leadership/CTASection";

export const metadata: Metadata = {
  title: "Leadership | GC Ingredients — Our Team of Food Science Experts",
  description:
    "Meet the experienced leadership team behind GC Ingredients — food scientists, operations experts, and industry veterans with 25+ years of expertise driving food ingredient innovation.",
  keywords:
    "GC Ingredients leadership, Srikanth Gundavarapu, food science team, GCI leadership, food ingredient experts, food manufacturing leadership",
  openGraph: {
    title: "Leadership | GC Ingredients — The People Driving Food Science Innovation",
    description:
      "Meet the experienced team behind GC Ingredients — food scientists, operations experts, and industry veterans dedicated to your success.",
    type: "website",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FounderFeature />
        <ValuesStrip />
        <TeamGrid />
        <CultureSection />
        <JoinTeam />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
