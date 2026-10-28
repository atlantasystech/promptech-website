"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Code, TrendingUp, Users, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="glass-pill text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>Dependable IT Execution • No Inflated Jargon • 100% Code & Data Ownership</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Practical IT Services, Open-Source Setup &{" "}
            <span className="gradient-text">Dedicated Remote Developers</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Promptech helps growing teams deploy and customize open-source business software, execute focused digital marketing, and expand development velocity with reliable offshore engineers.
          </p>
        </div>

        {/* CTAs & Trust Signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#services"
            id="hero-explore-cta"
            className="btn-primary w-full sm:w-auto"
          >
            <span>Explore Our 3 Core Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            id="hero-contact-cta"
            className="btn-secondary w-full sm:w-auto"
          >
            <span>Discuss Your Requirements</span>
          </a>
        </div>

        {/* Safe, Grounded Commitments */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          <div className="glass-panel p-3.5 sm:p-4 text-center">
            <CheckCircle2 className="w-5 h-5 text-sky-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm font-semibold text-white">Full IP Ownership</div>
            <div className="text-[11px] text-slate-400 mt-0.5">You own 100% of code & keys</div>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 text-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm font-semibold text-white">Direct Communication</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Talk to the developer directly</div>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 text-center">
            <CheckCircle2 className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm font-semibold text-white">Predictable Scopes</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Clear deliverables & fixed rates</div>
          </div>
          <div className="glass-panel p-3.5 sm:p-4 text-center">
            <CheckCircle2 className="w-5 h-5 text-amber-400 mx-auto mb-2" />
            <div className="text-xs sm:text-sm font-semibold text-white">Zero Vendor Traps</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Self-hosted, standard tech</div>
          </div>
        </div>

        {/* Visual Hero Showcase with Generated Isometric Graphic & Interactive Overlays */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-sky-950/50 bg-slate-900/60" style={{ position: "relative" }}>
            <div className="aspect-[16/9] w-full relative" style={{ position: "relative", minHeight: "340px" }}>
              <Image
                src="/images/hero-illustration.jpg"
                alt="Promptech IT Services Architecture - Open Source, Digital Marketing, and Offshore Development"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
            </div>

            {/* Quick interactive floating badges embedded over the visual */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0f172a]/85 backdrop-blur-md border border-sky-500/20 rounded-xl p-3 flex items-start gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Open Source Setup</div>
                  <div className="text-[11px] text-slate-400">ERPNext, Odoo, WordPress & Linux VPS</div>
                </div>
              </div>

              <div className="bg-[#0f172a]/85 backdrop-blur-md border border-indigo-500/20 rounded-xl p-3 flex items-start gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Digital Marketing</div>
                  <div className="text-[11px] text-slate-400">Targeted SEO, Google Ads & GA4 tracking</div>
                </div>
              </div>

              <div className="bg-[#0f172a]/85 backdrop-blur-md border border-emerald-500/20 rounded-xl p-3 flex items-start gap-3 shadow-lg">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Offshore Development</div>
                  <div className="text-[11px] text-slate-400">Full-stack engineers with daily updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
