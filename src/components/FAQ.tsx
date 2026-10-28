"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who owns the code and intellectual property created during our project?",
      answer:
        "You own 100% of all code, server credentials, database assets, and digital marketing accounts. We push code directly to your private GitHub/GitLab repositories and deploy to your cloud or VPS. Promptech claims no proprietary ownership over your business assets.",
    },
    {
      question: "Why should we choose open-source software customization over proprietary SaaS?",
      answer:
        "Proprietary SaaS platforms often charge heavy per-user monthly subscription fees that escalate as your team grows. With open-source platforms like ERPNext, Odoo Community, WordPress, or Strapi, you pay once for setup and customization, run the system on your own cost-effective VPS, and maintain full control over your customer data without licensing lock-ins.",
    },
    {
      question: "Do you guarantee a #1 ranking on Google for digital marketing?",
      answer:
        "No, and any agency that promises guaranteed #1 search ranking is misleading you. Google explicitly states that no third party has priority access to their search ranking algorithm. What we DO guarantee is rigorous technical SEO hygiene: fixing crawl errors, improving Core Web Vitals speed, optimizing structured schema, targeting high-intent buyer keywords, and tracking verifiable conversions.",
    },
    {
      question: "How do your offshore developers handle communication and timezone differences?",
      answer:
        "Our developers speak fluent English and maintain overlapping working hours (typically 3 to 5 hours of direct workday overlap with US, European, or APAC timezones). We communicate daily via Slack, Teams, or email, participate in sprint standups, and provide transparent task notes on Jira, Trello, or Linear.",
    },
    {
      question: "What are your payment terms and milestone structures?",
      answer:
        "For defined projects (such as an open-source setup or SEO overhaul), we work on structured milestones (e.g., initial kickoff, functional staging demo, and final handover). For dedicated offshore developers, we operate on a clear monthly engagement with detailed timesheet logs and no long-term binding lock-ins.",
    },
    {
      question: "What happens if bugs or questions arise after deployment?",
      answer:
        "Every project milestone includes a 30-day post-launch warranty during which any bugs or configuration defects within the agreed scope are corrected promptly at no additional charge. We also provide handover documentation and optional monthly maintenance support.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10 border-t border-white/5 bg-[#0b0f19]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Honest Answers</span>
          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>
          <p className="section-desc mx-auto">
            Clear answers about ownership, process, communications, and expectations so you have complete peace of mind.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel border border-white/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`p-1 rounded-full bg-slate-800 text-slate-300 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-sky-400 bg-sky-500/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p className="mt-2 m-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
