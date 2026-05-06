import React from "react";
import Navbar from "@/components/directory/Navbar";
import HeroSection from "@/components/directory/HeroSection";
import FeaturedSection from "@/components/directory/FeaturedSection";
import AllAppsSection from "@/components/directory/AllAppsSection";
import AboutSection from "@/components/directory/AboutSection";
import Footer from "@/components/directory/Footer";
import BackToTop from "@/components/directory/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <AllAppsSection />
      <AboutSection />
      <Footer />
      <BackToTop />
    </div>
  );
}