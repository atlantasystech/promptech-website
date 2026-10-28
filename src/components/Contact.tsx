"use client";

import React, { useState, useEffect } from "react";
import { 
  Send, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  FileText, 
  Calendar,
  RotateCcw
} from "lucide-react";

interface ContactProps {
  initialData?: {
    service: string;
    tier: string;
    notes: string;
  } | null;
}

export default function Contact({ initialData }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceCategory: "Open Source Customization",
    timeline: "Standard (3-4 weeks)",
    budgetRange: "$1,000 - $3,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: initialData.service || prev.serviceCategory,
        message: prev.message 
          ? `${prev.message}\n\n[Selected Scope]: ${initialData.notes}` 
          : `[Selected Scope]: ${initialData.notes}`,
      }));
    }
  }, [initialData]);

  const serviceOptions = [
    "Open Source Customization",
    "Digital Marketing Services",
    "Offshore Development",
    "General IT Advisory",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean realistic submission
    setTimeout(() => {
      const randomRef = "PRM-" + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(randomRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      serviceCategory: "Open Source Customization",
      timeline: "Standard (3-4 weeks)",
      budgetRange: "$1,000 - $3,000",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Start A Conversation</span>
          <h2 className="section-heading">
            Request an Estimate or Technical Review
          </h2>
          <p className="section-desc mx-auto">
            Tell us about your project or technical needs. We review specifications thoroughly and reply with an honest assessment within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Commitments */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <span>Direct Technical Review</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Your message is received directly by senior developers and technical project leads—not commission-driven salespeople.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Inquiries</div>
                    <a href="mailto:hello@promptech.services" className="text-sm font-semibold text-white hover:text-sky-400 transition-colors">
                      hello@promptech.services
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Response Turnaround</div>
                    <div className="text-sm font-semibold text-white">
                      Within 1 business day (Mon - Fri)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Mutual NDA Friendly</div>
                    <div className="text-sm font-semibold text-white">
                      Happy to sign your standard non-disclosure agreement
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 text-xs text-slate-300 space-y-2">
              <div className="font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Our Safe Engagement Guarantee:</span>
              </div>
              <p className="m-0 text-slate-400 leading-relaxed">
                We never cold-call, spam your inbox, or sell your contact information. You will receive a structured technical breakdown and transparent cost guidance.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 border border-white/10">
            
            {submitted ? (
              <div className="text-center py-8 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Inquiry Received Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-white">{formData.name || "friend"}</strong>. Your project specification has been logged.
                </p>

                <div className="bg-slate-900/60 p-5 rounded-xl border border-white/10 max-w-md mx-auto text-left text-xs mb-6 space-y-2 font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">Reference:</span>
                    <span className="text-sky-300 font-bold">{submissionRef}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">Service:</span>
                    <span className="text-slate-200">{formData.serviceCategory}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">Work Email:</span>
                    <span className="text-slate-200">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="text-slate-200">{formData.timeline}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="btn-secondary text-xs !py-2 !px-4 inline-flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Service Interest Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                    1. Primary Service of Interest:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, serviceCategory: opt })}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                          formData.serviceCategory === opt
                            ? "bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-sm"
                            : "bg-slate-900/60 text-slate-400 border-white/5 hover:border-white/15 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Company & Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Logistics"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="form-select"
                    >
                      <option value="Immediate (1-2 weeks)">Immediate (1 - 2 weeks)</option>
                      <option value="Standard (3-4 weeks)">Standard (3 - 4 weeks)</option>
                      <option value="Future Quarter (2-3 months)">Future Quarter (2 - 3 months)</option>
                      <option value="Flexible / Just Exploring">Flexible / Just Exploring</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Estimated Budget Range (USD)
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="form-select"
                  >
                    <option value="Under $1,000">Starter / Quick Task (Under $1,000)</option>
                    <option value="$1,000 - $3,000">Standard Project ($1,000 - $3,000)</option>
                    <option value="$3,000 - $7,500">Multi-Module / Sprint ($3,000 - $7,500)</option>
                    <option value="$7,500+">Dedicated Developer / Retainer ($7,500+)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Overview or Specific Questions *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you want to achieve (e.g. 'We need ERPNext configured with custom sales invoices', or 'Looking for a part-time React/Node.js developer for 3 months')..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full !py-3.5 flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Request for Technical Review</span>
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  Strict privacy: No spam, no sales agents calling, no data sharing.
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
