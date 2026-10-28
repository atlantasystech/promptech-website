"use client";

import React from "react";
import { Terminal, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070a11] text-slate-400 text-xs py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Promptech
              </span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                IT Services
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing dependable IT services for growing businesses: practical open-source customization, honest digital marketing, and dedicated offshore developers.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Client Ownership • Direct Developer Collaboration</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Navigation
            </div>
            <ul className="space-y-2 p-0 m-0 list-none">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-sky-400 transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-sky-400 transition-colors">
                  Scope & Estimate Calculator
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-sky-400 transition-colors">
                  Supported Technologies
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-400 transition-colors">
                  Why Promptech
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  FAQ & Clarifications
                </a>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Direct Service Areas
            </div>
            <ul className="space-y-2 p-0 m-0 list-none text-slate-400">
              <li>Open Source ERP & CRM Setup (ERPNext / Odoo)</li>
              <li>WordPress, WooCommerce & Headless CMS Tailoring</li>
              <li>Technical SEO Audits & Core Web Vitals Fixes</li>
              <li>Capped Google & Meta Search Ad Management</li>
              <li>Dedicated Offshore Full-Stack Developers</li>
              <li>Linux VPS, Docker & Database Maintenance</li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Safe Statements */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-3xl">
            <p className="text-[11px] text-slate-400 leading-normal m-0">
              <strong>Disclaimer:</strong> Promptech is an independent IT and software engineering services company. Third-party brand names, logos, and trademarks (such as ERPNext, Odoo, WordPress, Google, Meta, etc.) are the property of their respective trademark holders. Mentioning them does not imply affiliation or direct endorsement.
            </p>
            <p className="text-[11px] text-slate-400 m-0">
              © {new Date().getFullYear()} Promptech IT Services. All client code, data, and deliverables belong 100% to respective clients.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-sky-400/50 transition-all shrink-0 self-end md:self-auto"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
