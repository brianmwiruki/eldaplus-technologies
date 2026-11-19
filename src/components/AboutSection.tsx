"use client";

import React from "react";
import { ShieldCheck, Target, Layers, Sparkles, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface AboutSectionProps {
  onOpenContact: () => void;
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  const pillars = [
    {
      icon: Target,
      title: "Real Business Value",
      description:
        "We prioritize tangible business outcomes over technical vanity. Every solution is purpose-built to solve measurable operational challenges.",
    },
    {
      icon: Layers,
      title: "Resilient Architecture",
      description:
        "Engineered with clean code, modular microservices, and reliable security paradigms that scale effortlessly with organizational growth.",
    },
    {
      icon: Sparkles,
      title: "Forward-Thinking Execution",
      description:
        "Bridging modern technological breakthroughs with pragmatic local business realities across Kenya and the broader East African ecosystem.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F5F5F7] text-[#1D1D1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 text-[#2997FF] text-xs font-semibold tracking-wider uppercase">
            <span>About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-[1.12]">
            Building Smarter Digital Experiences.
          </h2>
          <p className="text-lg sm:text-xl text-[#86868B] font-normal leading-relaxed pt-2">
            {COMPANY_INFO.name} is a Kenyan technology company focused on providing
            software solutions and consultancy. We believe technology should solve real
            problems, simplify operations, and create meaningful opportunities for businesses.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
              <h3 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">
                A Forward-Thinking Technology Partner
              </h3>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                As modern commerce becomes increasingly digital, businesses require partners who
                combine engineering rigor with clear commercial insight. At ELDAPLUS, we operate at
                this intersection: architecting bespoke software platforms, modernizing legacy
                workflows, and delivering strategic technical guidance.
              </p>
              <p className="text-base text-[#6E6E73] leading-relaxed">
                Whether helping a growing enterprise automate complex operations or partnering with
                organizations to develop new digital products, our focus remains unwavering:
                sustainable value, impeccable stability, and pragmatic innovation.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center space-x-2 text-[#2997FF] hover:text-[#0071e3] text-sm font-semibold transition-colors group"
                >
                  <span>Learn how we collaborate with enterprise clients</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-2xl bg-white border border-black/[0.04] shadow-sm space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2997FF]/10 text-[#2997FF] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-[#1D1D1F] tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Verified Credentials Element */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-8 rounded-3xl bg-white border border-black/[0.08] shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1D1D1F]">Company Credentials</h4>
                    <p className="text-[11px] text-[#86868B]">Official Corporate Profile</p>
                  </div>
                </div>
                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Active</span>
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between py-2 border-b border-black/[0.04]">
                  <span className="text-xs text-[#86868B]">Company Name</span>
                  <span className="text-xs font-semibold text-[#1D1D1F] text-right">
                    {COMPANY_INFO.name}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-black/[0.04]">
                  <span className="text-xs text-[#86868B]">Registration Number</span>
                  <span className="text-xs font-mono font-semibold text-[#1D1D1F] bg-[#F5F5F7] px-2 py-0.5 rounded">
                    {COMPANY_INFO.registrationNumber}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-black/[0.04]">
                  <span className="text-xs text-[#86868B]">Entity Type</span>
                  <span className="text-xs font-semibold text-[#1D1D1F]">
                    {COMPANY_INFO.entityType}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-black/[0.04]">
                  <span className="text-xs text-[#86868B]">Jurisdiction</span>
                  <span className="text-xs font-semibold text-[#1D1D1F]">
                    {COMPANY_INFO.country}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-black/[0.04]">
                  <span className="text-xs text-[#86868B]">Established</span>
                  <span className="text-xs font-semibold text-[#1D1D1F]">
                    {COMPANY_INFO.establishedYear}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-xs text-[#86868B]">Core Business</span>
                  <span className="text-xs font-semibold text-[#1D1D1F] text-right max-w-[200px]">
                    {COMPANY_INFO.natureOfBusiness}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] text-xs text-[#86868B] space-y-1">
                <p className="font-semibold text-[#1D1D1F]">Statutory Transparency Notice</p>
                <p>
                  ELDAPLUS TECHNOLOGIES LIMITED complies with all regulatory reporting requirements in
                  Kenya. Detailed corporate documents are available for formal due diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
