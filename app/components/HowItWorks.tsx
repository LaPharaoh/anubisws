"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    duration: "1–2 weeks",
    description:
      "We start with a detailed discovery call to understand your business, goals, and audience. We research your industry, competitors, and opportunities.",
    detail:
      "This phase sets the foundation for everything. We conduct structured interviews with your team, audit existing assets, and map out competitive landscapes. You leave with a clear brief and strategic direction before a single pixel is designed.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="21" r="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M30 30L40 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M17 21h8M21 17v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    bullets: ["Business & audience audit", "Competitor research", "Goal alignment workshop", "Project brief sign-off"],
  },
  {
    number: "02",
    title: "Design & Planning",
    duration: "2–3 weeks",
    description:
      "We create wireframes, design mockups, and a detailed project plan. You approve the vision before development begins.",
    detail:
      "Designs are built in Figma with your brand guidelines at the core. We prototype key flows so you can experience the product before it's built. Nothing moves to development until you've signed off on every screen.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="33" cy="33" r="7" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M29 33h8M33 29v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bullets: ["Wireframes & user flows", "High-fidelity Figma mockups", "Interactive prototypes", "Client approval gate"],
  },
  {
    number: "03",
    title: "Development & Build",
    duration: "4–8 weeks",
    description:
      "Our team builds your website or application using modern, best-practice technology. We prioritize performance, security, and scalability.",
    detail:
      "We use proven stacks — Next.js, React, Tailwind — built on a component-driven architecture. Weekly demos keep you in the loop. Every pull request goes through code review before it touches production.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18L8 24L16 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 18L40 24L32 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 12L20 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    bullets: ["Component-driven architecture", "Weekly progress demos", "Peer-reviewed pull requests", "Staging environment access"],
  },
  {
    number: "04",
    title: "Testing & Launch",
    duration: "1–2 weeks",
    description:
      "Comprehensive testing across devices and browsers. SEO setup, analytics implementation, and security hardening before launch.",
    detail:
      "Every release passes a 40-point QA checklist — cross-browser, cross-device, accessibility, performance, and security. We handle DNS, CDN config, and go-live monitoring so launch day is a non-event.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L28.5 15.5L39 17L31.5 24.5L33 35L24 30L15 35L16.5 24.5L9 17L19.5 15.5L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: ["40-point QA checklist", "Accessibility audit", "SEO & analytics setup", "Go-live monitoring"],
  },
  {
    number: "05",
    title: "Ongoing Support",
    duration: "Ongoing",
    description:
      "Continuous maintenance, monitoring, and optimization. Monthly reports, updates, and strategy adjustments to keep you ahead.",
    detail:
      "After launch we don't disappear. Monthly performance reports, proactive security patches, and a dedicated Slack channel mean you always have a technical partner — not just a vendor.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 8l8 0 0 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 8L28 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 24l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bullets: ["Monthly performance reports", "Proactive security patches", "Dedicated Slack channel", "Strategy reviews"],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section className="py-24" style={{ backgroundColor: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#B4654A" }}
          >
            How We Work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#2C1810" }}
          >
            Our Process
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#759AAB" }}>
            A proven process that delivers results — every time.
          </p>
        </div>

        {/* Two-panel layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-0 rounded-3xl overflow-hidden border" style={{ borderColor: "#e4cfc4" }}>
          {/* Left: step list */}
          <div className="col-span-2 border-r" style={{ borderColor: "#e4cfc4", backgroundColor: "#fff" }}>
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActive(i)}
                className="w-full text-left px-7 py-6 flex items-center gap-5 transition-all duration-200 relative group"
                style={{
                  backgroundColor: active === i ? "#faf8f5" : "#fff",
                  borderBottom: i < steps.length - 1 ? "1px solid #e4cfc4" : "none",
                }}
              >
                {/* Active indicator bar */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r transition-all duration-300"
                  style={{
                    backgroundColor: active === i ? "#B4654A" : "transparent",
                  }}
                />
                {/* Number badge */}
                <span
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold transition-all duration-200"
                  style={{
                    backgroundColor: active === i ? "#2C497F" : "#f0ebe5",
                    color: active === i ? "#F9DEC9" : "#759AAB",
                  }}
                >
                  {s.number}
                </span>
                <div className="flex-1 min-w-0">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider block mb-0.5 transition-colors duration-200"
                    style={{ color: active === i ? "#B4654A" : "#b0a99e" }}
                  >
                    {s.duration}
                  </span>
                  <span
                    className="font-semibold text-sm block transition-colors duration-200"
                    style={{ color: active === i ? "#2C1810" : "#5a4f47" }}
                  >
                    {s.title}
                  </span>
                </div>
                {/* Chevron */}
                <svg
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: active === i ? "#B4654A" : "#d4cac3",
                    transform: active === i ? "translateX(2px)" : "translateX(0)",
                  }}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div
            className="col-span-3 p-10 flex flex-col justify-between"
            style={{ backgroundColor: "#faf8f5" }}
          >
            <div>
              {/* Icon */}
              <div
                className="w-16 h-16 mb-8 transition-all duration-300"
                style={{ color: "#2C497F" }}
                key={step.number}
              >
                {step.icon}
              </div>

              {/* Duration pill */}
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "#e8f0f5", color: "#2C497F" }}
              >
                {step.duration}
              </span>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#2C1810" }}
              >
                {step.title}
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#5a4f47" }}>
                {step.description}
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#759AAB" }}>
                {step.detail}
              </p>

              {/* Bullets */}
              <ul className="space-y-3">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm" style={{ color: "#2C1810" }}>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#2C497F" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#F9DEC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step progress dots */}
            <div className="flex items-center gap-2 mt-10">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: active === i ? "24px" : "8px",
                    height: "8px",
                    backgroundColor: active === i ? "#B4654A" : "#d4cac3",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-3">
          {steps.map((s, i) => {
            const open = active === i;
            return (
              <div
                key={s.number}
                className="rounded-2xl border overflow-hidden bg-white transition-all duration-200"
                style={{ borderColor: open ? "#B4654A" : "#e4cfc4" }}
              >
                <button
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  onClick={() => setActive(open ? -1 : i)}
                >
                  <span
                    className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: open ? "#2C497F" : "#f0ebe5",
                      color: open ? "#F9DEC9" : "#759AAB",
                    }}
                  >
                    {s.number}
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider block" style={{ color: "#759AAB" }}>
                      {s.duration}
                    </span>
                    <span className="font-semibold text-sm" style={{ color: "#2C1810" }}>
                      {s.title}
                    </span>
                  </div>
                  <svg
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0)", color: "#B4654A" }}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {open && (
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#5a4f47" }}>{s.description}</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#759AAB" }}>{s.detail}</p>
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm" style={{ color: "#2C1810" }}>
                          <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#2C497F" }}>
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5L8 3" stroke="#F9DEC9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
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
