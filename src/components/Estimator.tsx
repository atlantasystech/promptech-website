"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Clock, Shield, Sparkles, Send } from "lucide-react";

interface ScopeOption {
  id: string;
  name: string;
  duration: string;
  deliverables: string[];
  recommendedFor: string;
  typicalHours: string;
}

const scopesData: Record<string, { label: string; options: ScopeOption[] }> = {
  "open-source": {
    label: "Open Source Customization",
    options: [
      {
        id: "os-starter",
        name: "Standard Installation & Hardening",
        duration: "5 - 8 Business Days",
        typicalHours: "20 - 35 Hours",
        recommendedFor: "Teams needing a clean, self-hosted deployment of ERPNext, Odoo, WordPress, or Strapi.",
        deliverables: [
          "Linux VPS provisioning (Docker/Ubuntu)",
          "SSL certificates, domain setup & firewall hardening",
          "Initial software installation and user roles setup",
          "Standard email gateway & automated database backup cron",
          "Handover document with root admin credentials",
        ],
      },
      {
        id: "os-custom",
        name: "Workflow Tailoring & Custom Modules",
        duration: "2 - 3 Weeks",
        typicalHours: "40 - 75 Hours",
        recommendedFor: "Businesses requiring custom fields, tailored PDF invoice formats, or specific role permissions.",
        deliverables: [
          "Everything in standard setup",
          "Custom form fields and automated notification rules",
          "Custom PDF templates (invoices, purchase orders, quotes)",
          "1 third-party webhook or REST API integration",
          "1 hour virtual walkthrough and Q&A session",
        ],
      },
      {
        id: "os-enterprise",
        name: "Full Migration & Multi-Module Setup",
        duration: "3 - 5 Weeks",
        typicalHours: "80 - 140 Hours",
        recommendedFor: "Organizations migrating off proprietary SaaS or legacy spreadsheets into an integrated self-hosted ERP/CRM.",
        deliverables: [
          "Comprehensive multi-module deployment (Accounting, Inventory, Sales)",
          "Legacy data sanitization and database import mapping",
          "Custom business logic hooks and automated workflows",
          "Staging and production environment separation",
          "30 days post-launch technical bug-fix warranty",
        ],
      },
    ],
  },
  "digital-marketing": {
    label: "Digital Marketing Services",
    options: [
      {
        id: "mkt-seo-audit",
        name: "Technical SEO Audit & Immediate Fixes",
        duration: "1 - 2 Weeks",
        typicalHours: "25 - 40 Hours",
        recommendedFor: "Websites struggling with crawling, indexing, slow mobile speed, or missing metadata.",
        deliverables: [
          "Full technical crawl inspection for broken links & redirect loops",
          "Core Web Vitals and page speed bottleneck fixes",
          "On-page meta tags, OpenGraph, and JSON-LD schema integration",
          "Google Search Console & Bing Webmaster verification",
          "Clear audit report outlining what was resolved",
        ],
      },
      {
        id: "mkt-ads-launch",
        name: "Targeted Search Ads & Tracking Setup",
        duration: "Ongoing (Monthly)",
        typicalHours: "20 - 30 Hours / month",
        recommendedFor: "Companies seeking qualified search traffic without wasting ad spend on irrelevant clicks.",
        deliverables: [
          "Google Ads account setup with tightly grouped search campaigns",
          "Strict negative keyword list to eliminate junk queries",
          "Google Tag Manager & GA4 custom conversion event tracking",
          "Ad copy variations and landing page alignment",
          "Transparent monthly performance report (no hidden agency fees)",
        ],
      },
      {
        id: "mkt-comprehensive",
        name: "Organic Search + Paid Acquisition Sprint",
        duration: "Ongoing (Monthly)",
        typicalHours: "45 - 60 Hours / month",
        recommendedFor: "Businesses wanting steady search engine visibility and active lead generation concurrently.",
        deliverables: [
          "Continuous on-page content optimization & technical upkeep",
          "Active Google Ads & Meta/LinkedIn campaign management",
          "Local SEO & Google Business Profile citation updates",
          "Bi-weekly performance reviews and conversion rate adjustments",
          "Full data transparency: you own all ad accounts and analytics",
        ],
      },
    ],
  },
  "offshore-dev": {
    label: "Offshore Development",
    options: [
      {
        id: "dev-sprint",
        name: "Focused Sprint Support",
        duration: "1 - 2 Weeks",
        typicalHours: "40 Hours Block",
        recommendedFor: "Teams needing temporary technical backup to clear backlog issues, build a feature, or fix bugs.",
        deliverables: [
          "Dedicated developer hours allocated exclusively to your tasks",
          "Daily Git commits directly to your repository",
          "Direct Slack or Teams communication in fluent English",
          "Task tracking on your Jira, Trello, or Linear board",
          "Pull request reviews and verified staging deployments",
        ],
      },
      {
        id: "dev-half",
        name: "Part-Time Fractional Engineer",
        duration: "Monthly Engagement",
        typicalHours: "80 Hours / month",
        recommendedFor: "Small startups or agencies requiring steady development velocity without full-time overhead.",
        deliverables: [
          "Dedicated senior or mid-level developer working 4h/day",
          "Overlapping business hours for standups and syncs",
          "Full-stack capabilities (React, Next.js, Node.js, Python, or PHP)",
          "Transparent timesheet logs with clear task notes",
          "Flexible month-to-month commitment (cancel anytime with 14 days notice)",
        ],
      },
      {
        id: "dev-full",
        name: "Dedicated Full-Time Engineer",
        duration: "Monthly Engagement",
        typicalHours: "160 Hours / month",
        recommendedFor: "Companies scaling product development who need a seamless remote team member.",
        deliverables: [
          "Dedicated engineer working full-time (8h/day, 40h/week)",
          "Deep integration into your engineering sprints and agile workflows",
          "Code commits, automated tests, and technical documentation",
          "Continuous availability during your preferred working hours",
          "Direct line of communication with zero intermediary managers",
        ],
      },
    ],
  },
};

export default function Estimator({
  onSelectScope,
}: {
  onSelectScope?: (details: { service: string; tier: string; notes: string }) => void;
}) {
  const [selectedService, setSelectedService] = useState<string>("open-source");
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(0);
  const activeCategory = scopesData[selectedService] || scopesData["open-source"];
  const activeScope = activeCategory?.options[selectedTierIndex] || activeCategory?.options[0] || {
    id: "default",
    name: "Standard Scope",
    duration: "1 - 2 Weeks",
    typicalHours: "20 - 40 Hours",
    recommendedFor: "General IT inquiry",
    deliverables: ["Initial consultation & specification", "Technical execution & deployment"],
  };

  const handleApplyToContact = () => {
    if (!activeCategory || !activeScope) return;
    const details = {
      service: activeCategory.label,
      tier: activeScope.name,
      notes: `Interested in: ${activeCategory.label} - ${activeScope.name} (${activeScope.typicalHours}, ${activeScope.duration})`,
    };
    if (onSelectScope) {
      onSelectScope(details);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-24 relative z-10 border-t border-white/5 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Transparent Scoping</span>
          <h2 className="section-heading">
            Interactive Project Scope Estimator
          </h2>
          <p className="section-desc mx-auto">
            Review typical timeframes and standard deliverables before starting a conversation. No inflated sales promises—just sensible technical planning.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(scopesData).map(([key, item]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedService(key);
                setSelectedTierIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                selectedService === key
                  ? "bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/20"
                  : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Tier Selector & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tiers Selection */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Scope Level:
            </div>
            {activeCategory.options.map((opt, idx) => (
              <div
                key={opt.id}
                onClick={() => setSelectedTierIndex(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  selectedTierIndex === idx
                    ? "bg-slate-800/90 border-sky-400/50 shadow-md shadow-sky-500/10"
                    : "bg-slate-900/50 border-white/5 hover:border-white/15 hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-sm font-bold ${selectedTierIndex === idx ? "text-sky-300" : "text-white"}`}>
                    {opt.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
                    {opt.duration}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-normal m-0 line-clamp-2">
                  {opt.recommendedFor}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 mt-4 text-xs text-slate-300 flex items-start gap-3">
              <Shield className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Direct & Honest Policy:</span> If an off-the-shelf open-source setting already handles what you need, we configure it directly rather than over-engineering custom code.
              </div>
            </div>
          </div>

          {/* Right Column: Active Scope Specification */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 border border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-sky-400">
                  {activeCategory.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeScope.name}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Typical Scope</div>
                <div className="text-sm sm:text-base font-bold text-sky-300 font-mono">
                  {activeScope.typicalHours}
                </div>
              </div>
            </div>

            {/* Recommended For */}
            <div className="mb-6 bg-slate-900/50 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-semibold text-slate-300 mb-1">Recommended Best For:</div>
              <p className="text-xs sm:text-sm text-slate-300 m-0">
                {activeScope.recommendedFor}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Expected Concrete Deliverables:
              </div>
              <div className="space-y-2.5">
                {activeScope.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeframe & Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Typical Turnaround: <strong className="text-white">{activeScope.duration}</strong></span>
              </div>
              <button
                type="button"
                onClick={handleApplyToContact}
                className="btn-primary text-xs sm:text-sm !py-2.5 !px-5"
              >
                <span>Use This Scope in Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
