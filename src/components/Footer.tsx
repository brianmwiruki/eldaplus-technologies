"use client";

import React from "react";
import { ArrowUp, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why ELDAPLUS", href: "#why-us" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#86868B] text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_INFO.wordmark}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF]" />
            </div>

            <p className="text-sm font-semibold text-white/90">
              {COMPANY_INFO.name}
            </p>

            <p className="text-xs text-[#86868B] max-w-sm leading-relaxed">
              A registered Kenyan technology company delivering purpose-built software solutions,
              enterprise web systems, business automation, and strategic technical consultancy.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-white/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Reg: {COMPANY_INFO.registrationNumber} • Active Status</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Corporate Contacts
            </p>
            <div className="space-y-2.5 text-xs text-[#86868B]">
              <div className="flex items-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#2997FF] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">{COMPANY_INFO.contact.email}</p>
                  <p className="text-[10px] text-white/40">Inquiries Desk</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#2997FF] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">{COMPANY_INFO.contact.phone}</p>
                  <p className="text-[10px] text-white/40">Business Inquiries Desk (Placeholder)</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#2997FF] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">Nairobi, Kenya</p>
                  <p className="text-[10px] text-white/40">Physical address upon engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Due Diligence Disclosure (Apple-style small text) */}
        <div className="py-8 space-y-2 text-[11px] leading-relaxed text-[#86868B] border-b border-white/5">
          <p>
            <strong>Statutory Corporate Notice:</strong> ELDAPLUS TECHNOLOGIES LIMITED is a private
            limited liability company incorporated under the Companies Act of the Republic of Kenya
            (Registration No. PVT-6Y1R5335, active). Licensed to provide software solutions, web
            development, intelligent systems integration, and technology consultancy services.
          </p>
          <p>
            This website serves as the official corporate proof-of-business portal. Contact details
            provided above are verified corporate channels. For formal verification, due diligence, or
            tendering documentation, formal inquiries can be addressed to the corporate secretary.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>
            Copyright © {COMPANY_INFO.establishedYear} {COMPANY_INFO.name}. All Rights Reserved. Location: {COMPANY_INFO.country}.
          </p>

          <div className="flex items-center space-x-6">
            <span className="text-white/40 font-mono">PVT-6Y1R5335</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 text-white/70 hover:text-white transition-colors py-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
