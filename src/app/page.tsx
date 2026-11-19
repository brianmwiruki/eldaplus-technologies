"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredentialsBar from "@/components/CredentialsBar";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyEldaPlusSection from "@/components/WhyEldaPlusSection";
import ArchitectureShowcase from "@/components/ArchitectureShowcase";
import ClosingCTA from "@/components/ClosingCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Software Development");

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsContactModalOpen(true);
  };

  return (
    <>
      <StructuredData />
      <Navbar onOpenContact={handleOpenContact} />
      
      <main className="relative flex flex-col w-full">
        {/* Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Corporate Credentials Verification Bar */}
        <CredentialsBar />

        {/* About Us (Apple light surface) */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* Solutions & Capabilities (Apple dark surface with interactive cards) */}
        <SolutionsSection onSelectService={handleSelectService} />

        {/* Why ELDAPLUS (Apple light bento surface) */}
        <WhyEldaPlusSection />

        {/* Engineering Rigor & Architecture Showcase */}
        <ArchitectureShowcase />

        {/* Closing CTA (Apple keynote dark) */}
        <ClosingCTA onOpenContact={handleOpenContact} />

        {/* Direct In-page Contact Section & Form */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Launch Consultation Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialService={selectedService}
      />
    </>
  );
}
