"use client";

import React from "react";
import {
  Lightbulb,
  ShieldCheck,
  BrainCircuit,
  Handshake,
  CheckCircle,
  TrendingUp,
  Lock,
  Zap,
} from "lucide-react";
import { PRINCIPLES } from "@/data/company";

export default function WhyEldaPlusSection() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#FBFBFD] text-[#1D1D1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 text-[#2997FF] text-xs font-semibold tracking-wider uppercase">
            <span>Why ELDAPLUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-[1.12]">
            More Than Technology. <br />
            <span className="text-[#86868B]">A Partner in Progress.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed">
            Technology projects succeed not merely through lines of code, but through deep
            contextual understanding, rock-solid engineering principles, and long-term
            partnership.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Innovation (Large - 7 cols) */}
          <div className="md:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#2997FF] flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-3">
                <span>Principle 01</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3">
                {PRINCIPLES[0].title}
              </h3>
              <p className="text-base text-[#1D1D1F] font-medium mb-3">
                {PRINCIPLES[0].tagline}
              </p>
              <p className="text-sm text-[#86868B] leading-relaxed mb-6">
                {PRINCIPLES[0].description}
              </p>
            </div>

            {/* Interactive feature preview inside Bento */}
            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-[#86868B]">
                <span>Modern Engineering Standards</span>
                <span className="text-[#2997FF] font-semibold">Continuous Delivery</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs text-[#1D1D1F]">
                <div className="flex items-center space-x-1.5 bg-white p-2 rounded-lg border border-black/[0.04]">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Cloud Native</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white p-2 rounded-lg border border-black/[0.04]">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  <span>High Velocity</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white p-2 rounded-lg border border-black/[0.04] col-span-2 sm:col-span-1">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                  <span>Strict Typing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Reliability (5 cols) */}
          <div className="md:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-3">
                <span>Principle 02</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3">
                {PRINCIPLES[1].title}
              </h3>
              <p className="text-base text-[#1D1D1F] font-medium mb-3">
                {PRINCIPLES[1].tagline}
              </p>
              <p className="text-sm text-[#86868B] leading-relaxed mb-6">
                {PRINCIPLES[1].description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-medium text-[#1D1D1F]">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Zero Compromise on Security</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Validated
              </span>
            </div>
          </div>

          {/* Card 3: Practical Thinking (5 cols) */}
          <div className="md:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-xs font-medium mb-3">
                <span>Principle 03</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3">
                {PRINCIPLES[2].title}
              </h3>
              <p className="text-base text-[#1D1D1F] font-medium mb-3">
                {PRINCIPLES[2].tagline}
              </p>
              <p className="text-sm text-[#86868B] leading-relaxed mb-6">
                {PRINCIPLES[2].description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04] space-y-1">
              <p className="text-xs font-semibold text-[#1D1D1F]">Measured Return on Investment</p>
              <p className="text-[11px] text-[#86868B]">
                Eliminating bloat so that every shilling invested drives clear operational efficiency.
              </p>
            </div>
          </div>

          {/* Card 4: Partnership (Large - 7 cols) */}
          <div className="md:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium mb-3">
                <span>Principle 04</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3">
                {PRINCIPLES[3].title}
              </h3>
              <p className="text-base text-[#1D1D1F] font-medium mb-3">
                {PRINCIPLES[3].tagline}
              </p>
              <p className="text-sm text-[#86868B] leading-relaxed mb-6">
                {PRINCIPLES[3].description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                <p className="text-xs font-semibold text-[#1D1D1F]">Local & Responsive</p>
                <p className="text-[11px] text-[#86868B] mt-0.5">
                  Operating directly from Kenya with seamless timezone alignment (EAT).
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.04]">
                <p className="text-xs font-semibold text-[#1D1D1F]">Post-Launch Stewardship</p>
                <p className="text-[11px] text-[#86868B] mt-0.5">
                  Ongoing maintenance, technical oversight, and proactive system upgrades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
