"use client";

import { useState } from "react";

const projectTypes = [
  "Website Design & Development",
  "Web Application",
  "SEO Optimization",
  "Maintenance & Support",
  "Other",
];

const budgetRanges = [
  "Under $5K",
  "$5K - $10K",
  "$10K - $25K",
  "$25K+",
  "Not Sure",
];

const inputClass =
  "w-full px-3.5 py-2.5 rounded-xl border text-sm placeholder:text-[#b0a09a] focus:outline-none transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div data-reveal>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#B4654A" }}>
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2C1810" }}>
              Let&apos;s Work Together
            </h2>
            <p className="mb-10 leading-relaxed" style={{ color: "#759AAB" }}>
              Have a project in mind? Get in touch for a free consultation.
              We&apos;ll respond within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@anubisweb.com",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.6 16z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+1 (XXX) XXX-XXXX",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#F9DEC9", color: "#694A38" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "#759AAB" }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold" style={{ color: "#2C1810" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div
              className="mt-12 p-6 rounded-2xl border"
              style={{ backgroundColor: "#F9DEC9", borderColor: "#e4cfc4" }}
            >
              <div className="text-sm font-semibold mb-4" style={{ color: "#2C1810" }}>
                Why work with us?
              </div>
              <ul className="space-y-2.5">
                {[
                  "Free initial consultation — no obligation",
                  "Transparent, fixed-price proposals",
                  "Dedicated point of contact throughout",
                  "Results-driven with measurable KPIs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#4a3c36" }}>
                    <svg
                      className="flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ color: "#B4654A" }}
                    >
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl border p-8 shadow-sm"
            data-reveal
            data-delay="200"
            style={{ backgroundColor: "white", borderColor: "#e4cfc4" }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#F9DEC9" }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ color: "#B4654A" }}>
                    <path
                      d="M6 16l7 7 13-13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#2C1810" }}>
                  Inquiry Received!
                </h3>
                <p className="text-sm" style={{ color: "#759AAB" }}>
                  We&apos;ll be in touch within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#2C1810" }}>
                      Full Name <span style={{ color: "#B4654A" }}>*</span>
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                      style={{ borderColor: "#e4cfc4", color: "#2C1810" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#B4654A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e4cfc4")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#2C1810" }}>
                      Company Name
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputClass}
                      style={{ borderColor: "#e4cfc4", color: "#2C1810" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#B4654A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e4cfc4")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#2C1810" }}>
                      Email <span style={{ color: "#B4654A" }}>*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                      style={{ borderColor: "#e4cfc4", color: "#2C1810" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#B4654A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e4cfc4")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#2C1810" }}>
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                      style={{ borderColor: "#e4cfc4", color: "#2C1810" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#B4654A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e4cfc4")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#2C1810" }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ borderColor: "#e4cfc4", color: "#2C1810", backgroundColor: "white" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#B4654A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e4cfc4")}
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#2C1810" }}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ borderColor: "#e4cfc4", color: "#2C1810", backgroundColor: "white" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#B4654A")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e4cfc4")}
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "#2C1810" }}>
                    Project Description <span style={{ color: "#B4654A" }}>*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`${inputClass} resize-none`}
                    style={{ borderColor: "#e4cfc4", color: "#2C1810" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#B4654A")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e4cfc4")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(44,73,127,0.3)] cursor-pointer"
                  style={{ backgroundColor: "#2C497F" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B4654A")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2C497F")}
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
