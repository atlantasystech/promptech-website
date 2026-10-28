"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Estimator from "@/components/Estimator";
import TechStack from "@/components/TechStack";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedScope, setSelectedScope] = useState<{
    service: string;
    tier: string;
    notes: string;
  } | null>(null);

  const handleSelectScope = (details: {
    service: string;
    tier: string;
    notes: string;
  }) => {
    setSelectedScope(details);
  };

  return (
    <main className="min-h-screen bg-[#0b0f19] text-[#f8fafc] relative selection:bg-sky-500 selection:text-white">
      {/* Ambient background soft light accents */}
      <div className="ambient-glow">
        <div className="ambient-circle-1" />
        <div className="ambient-circle-2" />
        <div className="ambient-circle-3" />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 3 Core Services */}
      <Services />

      {/* 4-Step How We Work Process */}
      <Process />

      {/* Interactive Project Scope & Estimate Calculator */}
      <Estimator onSelectScope={handleSelectScope} />

      {/* Technologies & Open-Source Supported Stacks */}
      <TechStack />

      {/* Why Choose Promptech - Grounded Commitments */}
      <WhyUs />

      {/* Frequently Asked Questions Accordion */}
      <FAQ />

      {/* Contact & Technical Estimate Request Form */}
      <Contact initialData={selectedScope} />

      {/* Footer & Disclaimer */}
      <Footer />
    </main>
  );
}
