"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface ContactSectionProps {
  preselectedService?: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [userSelectedService, setUserSelectedService] = useState<string | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeService = userSelectedService ?? preselectedService ?? "Software Development";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#161617] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#2997FF] text-xs font-semibold tracking-wider uppercase">
                <span>Direct Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Connect With Our Team.
              </h2>
              <p className="text-base text-[#86868B] leading-relaxed">
                Whether you have an upcoming project, require technical advisory, or wish to explore a
                strategic engagement with ELDAPLUS, we welcome your inquiry.
              </p>
            </div>

            {/* Coordinates Cards with clear placeholders */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2997FF]/10 text-[#2997FF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase text-white/40">Inquiries Email</p>
                  <p className="text-sm font-medium text-white">{COMPANY_INFO.contact.email}</p>
                  <p className="text-[10px] text-white/30 italic">Primary business inquiries channel</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2997FF]/10 text-[#2997FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase text-white/40">Telephone Desk</p>
                  <p className="text-sm font-medium text-white">{COMPANY_INFO.contact.phone}</p>
                  <p className="text-[10px] text-white/30 italic">Corporate desk placeholder</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2997FF]/10 text-[#2997FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase text-white/40">Registered Jurisdiction</p>
                  <p className="text-sm font-medium text-white">Nairobi, Kenya</p>
                  <p className="text-[10px] text-white/30 italic">Physical meeting by appointment</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#2997FF]/10 text-[#2997FF] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase text-white/40">Operating Hours</p>
                  <p className="text-sm font-medium text-white">{COMPANY_INFO.contact.operatingHours}</p>
                  <p className="text-[10px] text-white/30 italic">East Africa Time (UTC +3)</p>
                </div>
              </div>
            </div>

            {/* Credential Note */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center space-x-3 text-xs text-white/60">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Registered Private Limited Company in Kenya • Reg No. {COMPANY_INFO.registrationNumber}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-sm text-[#86868B] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || "for contacting us"}. Your message has been routed to our
                    technical consulting team. We will respond promptly within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setUserSelectedService(null);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Consultation Request
                    </h3>
                    <p className="text-xs text-[#86868B] mt-1">
                      Share your requirements and we will schedule an introductory technical briefing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-medium text-white/70">
                        Full Name <span className="text-[#2997FF]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Mwangi"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium text-white/70">
                        Corporate Email <span className="text-[#2997FF]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. j.mwangi@company.co.ke"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-medium text-white/70">
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Enterprises Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs font-medium text-white/70">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        value={activeService}
                        onChange={(e) => setUserSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#161617] border border-white/10 text-white text-sm focus:outline-none focus:border-[#2997FF] transition-colors"
                      >
                        <option value="Software Development">Software Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Technology Consultancy">Technology Consultancy</option>
                        <option value="General Inquiry">General Strategic Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-white/70">
                      Project Scope or Business Challenge <span className="text-[#2997FF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize what you are looking to build or the business problem you need solved..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-white/40">
                      Strict client confidentiality observed.
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="apple-btn-pill inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#2997FF] text-white text-sm font-medium hover:bg-[#1f87f0] disabled:opacity-50 transition-all"
                    >
                      <span>{isSubmitting ? "Transmitting..." : "Send Inquiry"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
