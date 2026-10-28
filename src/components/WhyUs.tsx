"use client";

import React from "react";
import { Check, X, ShieldCheck, HeartHandshake, FileCheck, Users2 } from "lucide-react";

export default function WhyUs() {
  const comparisons = [
    {
      feature: "Project Scoping & Promises",
      agency: "Hyperbolic claims, guaranteed unrealistic rankings, buzzword heavy proposals",
      promptech: "Feasibility-first evaluations, realistic timelines, and practical expectations",
    },
    {
      feature: "Software & Data Ownership",
      agency: "Proprietary code locks or expensive recurring per-seat license markups",
      promptech: "100% open-source code & direct root access on your own infrastructure",
    },
    {
      feature: "Day-to-Day Communication",
      agency: "Layered account managers and sales representatives playing telephone",
      promptech: "Direct Slack or Teams collaboration with the engineer writing your code",
    },
    {
      feature: "Billing & Invoicing",
      agency: "Vague monthly retainer fees with ambiguous deliverables",
      promptech: "Transparent milestones, fixed task checklists, and daily Git commit visibility",
    },
    {
      feature: "Contractual Terms",
      agency: "Rigid 6 to 12 month lock-ins with hefty early exit penalties",
      promptech: "Flexible milestone phases or month-to-month offshore arrangements",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative z-10 border-t border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Safe & Grounded</span>
          <h2 className="section-heading">
            Why Choose Our Practical Approach?
          </h2>
          <p className="section-desc mx-auto">
            We don’t try to impress you with inflated industry buzzwords. We focus on dependable execution, complete client ownership, and sensible pricing.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="glass-panel p-6 border border-white/10 hover:border-sky-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">No Hidden Lock-ins</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every server, Git repository, Google Ads account, and database we set up belongs 100% to your organization from the start.
            </p>
          </div>

          <div className="glass-panel p-6 border border-white/10 hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Honest Feasibility</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              If an open-source tool isn&apos;t suitable or if a marketing channel has low probability for your niche, we advise you honestly before you invest.
            </p>
          </div>

          <div className="glass-panel p-6 border border-white/10 hover:border-indigo-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Direct Collaboration</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Work directly with technical professionals who understand your codebase. Less meeting overhead, faster sprint turnarounds.
            </p>
          </div>

          <div className="glass-panel p-6 border border-white/10 hover:border-amber-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Predictable Budgets</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Clearly defined deliverables, transparent milestones, and sensible hourly rates. No surprise invoices or unapproved hours.
            </p>
          </div>

        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="glass-panel p-6 sm:p-8 border border-white/10">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Comparing Industry Approaches
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Why our straightforward commitment provides safety and stability for your technical projects.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Aspect
                  </th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400 w-3/8">
                    Typical Agency Pattern
                  </th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-sky-400 w-3/8 bg-sky-500/5 rounded-t-lg">
                    Promptech Way
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{item.agency}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-200 bg-sky-500/5 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item.promptech}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
