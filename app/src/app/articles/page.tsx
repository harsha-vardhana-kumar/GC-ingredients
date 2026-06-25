"use client";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/articles/HeroSection";
import FilterTabsAndGrid from "../../components/articles/FilterTabsAndGrid";
import FeaturedArticle from "../../components/articles/FeaturedArticle";
import CaseStudiesHighlight from "../../components/articles/CaseStudiesHighlight";
import EventsSection from "../../components/articles/EventsSection";
import TechnicalDocuments from "../../components/articles/TechnicalDocuments";
import NewsletterSignup from "../../components/articles/NewsletterSignup";
import CTASection from "../../components/articles/CTASection";

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "GC Ingredients Knowledge Base & Case Studies",
    "description": "Functional food ingredient research, applications, and formulation case studies.",
    "author": {
      "@type": "Organization",
      "name": "GC Ingredients"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GC Ingredients",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gcingredients.com/images/gcingredients_logo.webp"
      }
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroSection searchQuery={searchQuery} onSearch={setSearchQuery} />
        <FilterTabsAndGrid searchQuery={searchQuery} />
        <FeaturedArticle />
        <CaseStudiesHighlight />
        <EventsSection />
        <TechnicalDocuments />
        <NewsletterSignup />
        <CTASection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
