"use client";

import React from "react";
import { Building2, ShieldCheck, MapPin, Calendar, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function CredentialsBar() {
  return (
    <section id="credentials" className="py-12 bg-[#161617] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#2997FF] uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Corporate Credentials</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              Registered Entity Status
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#86868B] max-w-md">
            Operating under statutory registration in Kenya as a verified software solutions and technology consultancy provider.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
          {/* Card 1: Registration No */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
            <div className="flex items-center space-x-2 text-white/40 mb-2">
              <FileText className="w-4 h-4 text-[#2997FF]" />
              <span className="text-[11px] font-mono uppercase">Reg. Number</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white font-mono">
              {COMPANY_INFO.registrationNumber}
            </p>
          </div>

          {/* Card 2: Entity Type */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
            <div className="flex items-center space-x-2 text-white/40 mb-2">
              <Building2 className="w-4 h-4 text-[#2997FF]" />
              <span className="text-[11px] font-mono uppercase">Entity Type</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white">
              Private Limited
            </p>
          </div>

          {/* Card 3: Status */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
            <div className="flex items-center space-x-2 text-white/40 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase">Status</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm sm:text-base font-semibold text-emerald-400">
                {COMPANY_INFO.status}
              </p>
            </div>
          </div>

          {/* Card 4: Established */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
            <div className="flex items-center space-x-2 text-white/40 mb-2">
              <Calendar className="w-4 h-4 text-[#2997FF]" />
              <span className="text-[11px] font-mono uppercase">Established</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white">
              {COMPANY_INFO.establishedYear}
            </p>
          </div>

          {/* Card 5: Jurisdiction */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
            <div className="flex items-center space-x-2 text-white/40 mb-2">
              <MapPin className="w-4 h-4 text-[#2997FF]" />
              <span className="text-[11px] font-mono uppercase">Jurisdiction</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white">
              Kenya
            </p>
          </div>

          {/* Card 6: Business Scope */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all">
            <div className="flex items-center space-x-2 text-white/40 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#2997FF]" />
              <span className="text-[11px] font-mono uppercase">Licensing</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white truncate">
              Software & Advisory
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
