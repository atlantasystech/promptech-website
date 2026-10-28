"use client";

import React, { useState } from "react";
import { Server, Code2, Database, BarChart2 } from "lucide-react";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const techCategories = [
    { id: "all", label: "All Platforms" },
    { id: "opensource", label: "Open-Source Systems" },
    { id: "development", label: "Development & APIs" },
    { id: "infrastructure", label: "Hosting & Databases" },
    { id: "marketing", label: "Marketing & Analytics" },
  ];

  const technologies = [
    // Open-Source
    { name: "ERPNext", category: "opensource", desc: "Open-source business ERP & inventory management", badge: "ERP & Accounting" },
    { name: "Odoo Community", category: "opensource", desc: "Modular open-source business apps & CRM", badge: "CRM & Sales" },
    { name: "WordPress & Woo", category: "opensource", desc: "CMS, e-commerce, custom plugins & themes", badge: "CMS & Store" },
    { name: "Strapi & Directus", category: "opensource", desc: "Headless CMS platforms with REST & GraphQL", badge: "Headless CMS" },
    { name: "Discourse", category: "opensource", desc: "Self-hosted community forums & knowledge base", badge: "Community" },
    { name: "Supabase", category: "opensource", desc: "Open-source Firebase alternative with PostgreSQL", badge: "Backend" },

    // Development
    { name: "Next.js & React", category: "development", desc: "Modern server-rendered & static web frontends", badge: "Frontend" },
    { name: "Node.js & Express", category: "development", desc: "Fast asynchronous backends & API services", badge: "Backend" },
    { name: "Python / FastAPI", category: "development", desc: "Backend scripts, automation & custom ERP hooks", badge: "Scripting" },
    { name: "TypeScript", category: "development", desc: "Type-safe robust web application codebases", badge: "Language" },
    { name: "PHP & Laravel", category: "development", desc: "Proven web backends & legacy app refactoring", badge: "Backend" },

    // Infrastructure
    { name: "Docker & Compose", category: "infrastructure", desc: "Containerized reproducible software environments", badge: "Containers" },
    { name: "Linux / Ubuntu", category: "infrastructure", desc: "Secure VPS operating systems & Nginx reverse proxy", badge: "OS & Server" },
    { name: "PostgreSQL", category: "infrastructure", desc: "High-integrity relational databases with backups", badge: "Database" },
    { name: "MySQL & MariaDB", category: "infrastructure", desc: "Standard SQL engines for web & ERP systems", badge: "Database" },
    { name: "Hetzner & AWS", category: "infrastructure", desc: "Cost-efficient cloud VPS & object storage", badge: "Cloud VPS" },

    // Marketing
    { name: "Google Ads", category: "marketing", desc: "Disciplined search & display campaigns with budget caps", badge: "Search PPC" },
    { name: "Google Analytics 4", category: "marketing", desc: "Accurate event and conversion tracking", badge: "Web Analytics" },
    { name: "Google Tag Manager", category: "marketing", desc: "Clean trigger setup without hardcoded page scripts", badge: "Tag Setup" },
    { name: "Google Search Console", category: "marketing", desc: "Sitemap indexing, crawl health & query monitoring", badge: "Organic SEO" },
    { name: "Meta Ads Manager", category: "marketing", desc: "Targeted lead generation for B2B & local audiences", badge: "Social PPC" },
  ];

  const filtered =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  return (
    <section id="platforms" className="py-24 relative z-10 border-t border-white/5 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Proven Ecosystem</span>
          <h2 className="section-heading">
            Technologies & Platforms We Support
          </h2>
          <p className="section-desc mx-auto">
            We work with reliable, widely supported open-source platforms and modern software frameworks. No proprietary locks, no speculative trends.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                selectedCategory === cat.id
                  ? "bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-md shadow-sky-500/10"
                  : "bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Technologies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-white/5 hover:border-sky-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-white/10">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Bottom Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/30 border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300 m-0">
            Have a different database, legacy repository, or self-hosted stack? We evaluate compatibility honestly during our initial consultation.
          </p>
        </div>

      </div>
    </section>
  );
}
