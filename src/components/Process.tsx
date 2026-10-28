"use client";

import React from "react";
import Image from "next/image";
import { Search, FileCode2, Terminal, CheckCircle2, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Feasibility",
      icon: Search,
      desc: "We review your requirements honestly. If an open-source tool already satisfies your needs or if something is technically impractical for your budget, we tell you up front before you spend anything.",
      deliverable: "Clear scope summary & recommendation",
    },
    {
      step: "02",
      title: "Transparent Milestones",
      icon: FileCode2,
      desc: "We agree on concrete milestones, expected turnaround times, and fixed deliverables. You receive a clear breakdown of tasks so there are never surprise billings or vague invoices.",
      deliverable: "Milestone schedule & repository setup",
    },
    {
      step: "03",
      title: "Direct Developer Sprints",
      icon: Terminal,
      desc: "Work happens in visible stages. Code is pushed to your Git repository, staging builds are previewed regularly, and you have direct communication with the engineer doing the work.",
      deliverable: "Staging demos & regular commit logs",
    },
    {
      step: "04",
      title: "Complete Handover & Support",
      icon: CheckCircle2,
      desc: "Upon milestone completion, all server credentials, source code, database dumps, and operational documentation are transferred 100% to your control, backed by a post-launch warranty.",
      deliverable: "Full IP ownership & handover guide",
    },
  ];

  return (
    <section id="process" className="py-24 relative z-10 border-t border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Straightforward Workflow</span>
          <h2 className="section-heading">
            How We Work With You
          </h2>
          <p className="section-desc mx-auto">
            A sensible, transparent 4-stage process designed to deliver working software and reliable results without endless meetings or bureaucratic agency overhead.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 border border-white/10 relative flex flex-col justify-between group hover:border-sky-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-sky-500/30 group-hover:text-sky-400/60 transition-colors">
                      {st.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                  <span className="text-sky-400">Output:</span>
                  <span>{st.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Showcase Image Banner */}
        <div className="glass-panel p-4 sm:p-6 border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-white/10" style={{ position: "relative" }}>
              <div className="aspect-[16/9] relative w-full" style={{ position: "relative", minHeight: "280px" }}>
                <Image
                  src="/images/workflow-illustration.jpg"
                  alt="Promptech Structured IT Development Workflow"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Transparent Execution
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                No Black Boxes. Total Visibility into Every Commit and Metric.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether customizing an open-source ERP system, running targeted Google ad campaigns, or contracting an offshore engineer, you have direct access to every platform, dashboard, and repository from day one.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-secondary text-xs sm:text-sm !py-2.5 !px-4"
                >
                  <span>Start with a Discovery Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
