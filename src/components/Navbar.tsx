"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why ELDAPLUS", href: "#why-us" },
    { label: "Credentials", href: "#credentials" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Wordmark Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2997FF] rounded-lg py-1"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-opacity group-hover:opacity-90">
                {COMPANY_INFO.wordmark}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] group-hover:scale-125 transition-transform" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[13px] tracking-normal font-normal text-white/75 hover:text-white transition-colors py-1 focus:outline-none focus-visible:text-white focus-visible:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Action: Let's Talk CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="apple-btn-pill inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#2997FF] text-white text-xs font-medium tracking-wide hover:bg-[#1f87f0] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                type="button"
                onClick={onOpenContact}
                className="px-3 py-1.5 rounded-full bg-[#2997FF] text-white text-xs font-medium"
              >
                Let’s Talk
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white/80 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2997FF]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#111111]/95 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="space-y-4">
            <p className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
              Navigation
            </p>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-medium text-white/90 hover:text-[#2997FF] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/30" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="space-y-1">
              <p className="text-xs text-white/50">{COMPANY_INFO.name}</p>
              <p className="text-[11px] text-white/40 font-mono">
                Reg: {COMPANY_INFO.registrationNumber} • {COMPANY_INFO.country}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-xl bg-[#2997FF] text-white font-medium text-sm text-center flex items-center justify-center space-x-2"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
