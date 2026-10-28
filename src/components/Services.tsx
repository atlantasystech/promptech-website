"use client";

import React, { useState } from "react";
import { 
  Code, 
  TrendingUp, 
  Users, 
  Check, 
  Server, 
  Database, 
  Settings, 
  Search, 
  Target, 
  BarChart3, 
  GitBranch, 
  Terminal, 
  Clock, 
  ShieldCheck,
  ArrowRight,
  Layers
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: "open-source",
      title: "Open Source Software Customization",
      tagline: "Deploy, tailor, and maintain proven open-source platforms without vendor lock-in.",
      icon: Code,
      badgeColor: "sky",
      badgeText: "Self-Hosted & Flexible",
      overview:
        "Open-source software gives your business total control over your workflows and data without recurring per-seat subscription fees. We handle the technical installation, custom workflow rules, form customization, database setup, and regular maintenance so your software runs smoothly on your own cloud or VPS.",
      keyFeatures: [
        {
          title: "ERP & CRM Deployment",
          desc: "Installation and configuration of platforms like ERPNext and Odoo Community to match your invoicing, inventory, or pipeline flows.",
          icon: Layers,
        },
        {
          title: "Custom Modules & Scripts",
          desc: "Writing custom Python/PHP/JavaScript hooks, plugins, and custom fields to bridge gaps in standard features.",
          icon: Settings,
        },
        {
          title: "Data Migration & Imports",
          desc: "Cleaning and transferring data safely from spreadsheets or legacy software into structured relational databases.",
          icon: Database,
        },
        {
          title: "Linux & Docker Hosting Setup",
          desc: "Setting up hardened, self-hosted environments on providers like Hetzner, AWS, or DigitalOcean with automated backups.",
          icon: Server,
        },
      ],
      safeCommitments: [
        "Full administrative root and database access handed directly to you.",
        "Zero vendor license lock-in; you run open-source code on your own infrastructure.",
        "Clear documentation for every customized hook or module we develop.",
        "Transparent initial estimate based on actual configuration requirements.",
      ],
      techChips: ["ERPNext", "Odoo Community", "WordPress / WooCommerce", "Strapi", "Directus", "Docker", "PostgreSQL", "Linux"],
      ctaText: "Discuss Open Source Setup",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Services",
      tagline: "Pragmatic, data-informed campaigns focused on genuine business inquiries.",
      icon: TrendingUp,
      badgeColor: "indigo",
      badgeText: "Accountable & Transparent",
      overview:
        "We help small and mid-sized companies get discovered by relevant prospects without wasting budget on speculative tactics or vanity impressions. Our approach is grounded in technical search engine optimization (SEO), strictly capped search advertising, and accurate analytics tracking.",
      keyFeatures: [
        {
          title: "Technical & On-Page SEO",
          desc: "Fixing crawl errors, improving page load speed, optimizing meta tags, and structuring content for organic search indexing.",
          icon: Search,
        },
        {
          title: "Google Search & Social Ads",
          desc: "Setting up disciplined pay-per-click (PPC) campaigns with negative keyword filtering to prevent wasted ad budget.",
          icon: Target,
        },
        {
          title: "Conversion Tracking & GA4",
          desc: "Configuring Google Tag Manager, GA4 event tracking, and straightforward monthly dashboards so you know where leads come from.",
          icon: BarChart3,
        },
        {
          title: "Local Search Optimization",
          desc: "Optimizing Google Business profiles and local citations to help regional clients find your services easily.",
          icon: ShieldCheck,
        },
      ],
      safeCommitments: [
        "We do not promise unrealistic '#1 on Google' rankings because search algorithms are third-party; we focus on proven technical best practices.",
        "All advertising accounts (Google Ads, Meta) are created directly under your ownership and billing.",
        "Monthly reporting with clear metrics: spend, clicks, conversion rate, and tangible inquiries.",
        "Flexible month-to-month arrangements without long-term binding lock-ins.",
      ],
      techChips: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Search Console", "Local SEO", "Meta Business Suite"],
      ctaText: "Discuss Marketing Goals",
    },
    {
      id: "offshore-development",
      title: "Offshore Development",
      tagline: "Reliable remote developers who collaborate directly with your team at sensible rates.",
      icon: Users,
      badgeColor: "emerald",
      badgeText: "Dedicated & Scalable",
      overview:
        "When your internal team needs extra hands or you want to build a web application without local agency markups, our offshore developers integrate seamlessly into your workflow. We emphasize transparent communication in fluent English, consistent Git commits, and overlapping business hours.",
      keyFeatures: [
        {
          title: "Full-Stack Web Engineering",
          desc: "Modern web development using Next.js, React, Node.js, Python, and PHP for responsive, performant user interfaces and APIs.",
          icon: Terminal,
        },
        {
          title: "API Development & Integrations",
          desc: "Building clean REST APIs, database schemas, webhook listeners, and third-party software connections.",
          icon: GitBranch,
        },
        {
          title: "Maintenance & Bug Fixes",
          desc: "Tackling technical debt, maintaining legacy codebases, and implementing automated testing routines.",
          icon: Clock,
        },
        {
          title: "Flexible Engagement Models",
          desc: "Hire a dedicated full-time engineer (160h/mo), part-time fractional support (80h/mo), or task-based sprint hours.",
          icon: Users,
        },
      ],
      safeCommitments: [
        "Direct communication with your developer via Slack, Teams, or email—no gatekeepers.",
        "All code pushed daily to your private GitHub or GitLab repository.",
        "Overlapping daily work hours aligned to US, European, or APAC schedules for real-time check-ins.",
        "Straightforward timesheet tracking and milestone deliverables.",
      ],
      techChips: ["Next.js", "React", "TypeScript", "Node.js", "Python", "PHP / Laravel", "PostgreSQL", "Git"],
      ctaText: "Inquire About Developers",
    },
  ];

  const currentService = services[activeTab] || services[0];

  return (
    <section id="services" className="py-24 relative z-10 border-t border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Core Capabilities</span>
          <h2 className="section-heading">
            Focused IT Services Built for Practical Needs
          </h2>
          <p className="section-desc mx-auto">
            We intentionally focus on three areas where small and mid-sized businesses get maximum value: reliable open-source customization, honest digital marketing, and dependable remote developers.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-slate-900/80 rounded-2xl border border-white/10 max-w-3xl mx-auto backdrop-blur-md">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex-1 justify-center min-w-[200px] ${
                  isActive
                    ? "bg-sky-500/15 text-sky-400 border border-sky-500/30 shadow-lg shadow-sky-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-sky-400" : "text-slate-400"}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="glass-panel p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
                {currentService.badgeText}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {currentService.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {currentService.tagline}
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="btn-primary whitespace-nowrap text-xs sm:text-sm !py-3 !px-5"
              >
                <span>{currentService.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Overview text */}
          <div className="mb-10 text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/40 p-5 rounded-xl border border-white/5">
            {currentService.overview}
          </div>

          {/* 4 Feature Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {currentService.keyFeatures.map((feat, i) => {
              const FeatIcon = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900/50 p-5 rounded-xl border border-white/5 hover:border-sky-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 transition-transform">
                    <FeatIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Safe Commitments & Tech Stack Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Our Safe & Transparent Commitments</span>
              </h4>
              <ul className="space-y-3 m-0 p-0 list-none">
                {currentService.safeCommitments.map((commitment, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>Commonly Used Platforms & Stacks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentService.techChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-200 border border-white/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Need a specific framework or tool? We adapt to your existing infrastructure whenever technically feasible.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
