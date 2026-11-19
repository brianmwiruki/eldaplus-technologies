"use client";

import React, { useState } from "react";
import {
  Code2,
  Globe,
  Cpu,
  Compass,
  ArrowRight,
  Check,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/company";

interface SolutionsSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function SolutionsSection({ onSelectService }: SolutionsSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6" />;
      case "Globe":
        return <Globe className="w-6 h-6" />;
      case "Cpu":
        return <Cpu className="w-6 h-6" />;
      case "Compass":
        return <Compass className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-[#111111] text-white relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-[#2997FF]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#2997FF] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Solutions & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Technology Solutions.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-[#2997FF]">
                Real Business Impact.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#86868B] leading-relaxed">
              We design, build, and optimize high-leverage software solutions engineered around
              your specific operational challenges and commercial goals.
            </p>
          </div>

          <div className="text-xs text-white/50 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2997FF]" />
            <span>4 Specialized Service Domains</span>
          </div>
        </div>

        {/* 4 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 sm:p-10 rounded-3xl bg-[#161617] border border-white/10 hover:border-[#2997FF]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#2997FF]/5"
            >
              <div>
                {/* Header: Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 text-[#2997FF] flex items-center justify-center group-hover:bg-[#2997FF]/15 group-hover:scale-105 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#2997FF] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[#86868B] text-base leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-2 border-t border-white/5 mb-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                    Key Deliverables
                  </p>
                  {service.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center space-x-2 text-xs text-white/75">
                      <Check className="w-3.5 h-3.5 text-[#2997FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-medium text-white/60 hover:text-white flex items-center space-x-1 transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-[#2997FF] hover:text-white text-white/90 text-xs font-medium transition-all group-hover:bg-[#2997FF]"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#161617] border border-white/15 p-8 shadow-2xl space-y-6 text-white max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#2997FF]/20 text-[#2997FF] flex items-center justify-center">
                  {getIcon(selectedService.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{selectedService.title}</h3>
                  <p className="text-xs text-[#86868B]">{selectedService.metrics}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white/10 text-white/70 hover:text-white flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">
                Scope & Key Deliverables
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {selectedService.deliverables.map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-xs text-white/85">
                    <Check className="w-4 h-4 text-[#2997FF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50">
                Representative Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-xl text-xs text-white/60 hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectService(serviceName);
                }}
                className="apple-btn-pill px-5 py-2.5 rounded-full bg-[#2997FF] text-white text-xs font-medium flex items-center space-x-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
