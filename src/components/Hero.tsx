"use client";

import React from "react";
import { ArrowRight, ArrowDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { COMPANY_INFO } from "@/data/company";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-black via-[#111111] to-[#111111]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2997FF]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-12 left-10 w-[300px] h-[300px] bg-white/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            {/* Corporate Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/80 tracking-wide">
                Registered in Kenya • Reg No. {COMPANY_INFO.registrationNumber}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-white leading-[1.08]">
              Technology That{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-[#2997FF]">
                Moves Businesses
              </span>{" "}
              Forward.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#86868B] max-w-2xl font-normal leading-relaxed">
              {COMPANY_INFO.name.replace(" LIMITED", "")} delivers innovative software solutions and
              technology consultancy that help businesses operate smarter, solve complex
              challenges, and embrace digital transformation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                type="button"
                onClick={() => handleScrollTo("solutions")}
                className="apple-btn-pill inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#2997FF] text-white text-sm font-medium hover:bg-[#1f87f0] focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 text-white text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-white/60">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#2997FF]" />
                <span>Enterprise Engineering</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Active Private Limited Company</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white/40 font-mono">EST. 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Apple-inspired Abstract 3D Visualizer */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 relative z-10">
        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/40">
          <span className="font-mono uppercase tracking-wider text-[11px]">
            {COMPANY_INFO.natureOfBusiness}
          </span>
          <button
            type="button"
            onClick={() => handleScrollTo("about")}
            className="flex items-center space-x-1.5 hover:text-white/80 transition-colors"
          >
            <span>Scroll to discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
