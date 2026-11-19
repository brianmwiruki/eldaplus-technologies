"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface ClosingCTAProps {
  onOpenContact: () => void;
}

export default function ClosingCTA({ onOpenContact }: ClosingCTAProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2997FF]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Subtle pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#2997FF]" />
          <span className="text-xs font-medium text-white/80 tracking-wide">
            Partner With ELDAPLUS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          Let’s Build{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-[#2997FF]">
            What’s Next.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg md:text-xl text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed">
          Have a business challenge or an idea worth bringing to life? Let’s explore how technology can help.
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="apple-btn-pill inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#2997FF] hover:bg-[#1f87f0] text-white text-base font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all shadow-xl shadow-[#2997FF]/20"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40 font-mono">
          <span>Software Solutions</span>
          <span>•</span>
          <span>Web Applications</span>
          <span>•</span>
          <span>Business Automation</span>
          <span>•</span>
          <span>Technology Consultancy</span>
        </div>
      </div>
    </section>
  );
}
