"use client";

import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import PillsNav from "@/components/PillsNav";
import CallActionBanner from "@/components/CallActionBanner";
import ContentSections from "@/components/ContentSections";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogsSection from "@/components/BlogsSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#0284c7] selection:text-white">
      
      {/* Header Navbar */}
      <Header />

      {/* Main Hero Box */}
      <HeroBanner />

      {/* 6 Category Pills Navigation Grid */}
      <PillsNav />

      {/* Big Blue Call Action Banner */}
      <CallActionBanner />

      {/* Detailed Content Sections (Kitchens, ACs, Furniture, Bedrooms, Haraj, Banner Boxes) */}
      <ContentSections />

      {/* Customer Testimonials Section */}
      <TestimonialsSection />

      {/* Blog & Articles Updates */}
      <BlogsSection />

      {/* Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp & Phone Call Buttons */}
      <FloatingActions />

    </main>
  );
}
