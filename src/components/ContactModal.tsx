"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialService = "Software Development",
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [customService, setCustomService] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentService = customService ?? initialService;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleModalClose = () => {
    setSubmitted(false);
    setCustomService(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#161617] border border-white/15 p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleModalClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Inquiry Received</h3>
            <p className="text-sm text-[#86868B] max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name || "for reaching out"}. An ELDAPLUS technology consultant will review
              your brief and reach out within 24 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleModalClose}
                className="apple-btn-pill px-6 py-2.5 rounded-full bg-[#2997FF] text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#2997FF] font-medium mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ELDAPLUS Advisory Desk</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Let’s Start a Conversation</h3>
              <p className="text-xs text-[#86868B] mt-1">
                Tell us about your organization and how we can support your technology goals.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="text-xs font-medium text-white/70 block mb-1.5">
                  Your Name <span className="text-[#2997FF]">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. David Kimani"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF]"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="text-xs font-medium text-white/70 block mb-1.5">
                  Work Email <span className="text-[#2997FF]">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="d.kimani@organization.co.ke"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-company" className="text-xs font-medium text-white/70 block mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF]"
                  />
                </div>

                <div>
                  <label htmlFor="modal-service" className="text-xs font-medium text-white/70 block mb-1.5">
                    Service Area
                  </label>
                  <select
                    id="modal-service"
                    value={currentService}
                    onChange={(e) => setCustomService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111111] border border-white/10 text-white text-sm focus:outline-none focus:border-[#2997FF]"
                  >
                    <option value="Software Development">Software Development</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Technology Consultancy">Technology Consultancy</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="text-xs font-medium text-white/70 block mb-1.5">
                  Project Brief or Business Need <span className="text-[#2997FF]">*</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can ELDAPLUS assist your organization?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#2997FF] resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-white/40 font-mono">
                {COMPANY_INFO.registrationNumber} • {COMPANY_INFO.country}
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="apple-btn-pill inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#2997FF] text-white text-xs font-medium hover:bg-[#1f87f0] disabled:opacity-50"
              >
                <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
