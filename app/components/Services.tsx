const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Website Design & Development",
    description:
      "Custom-designed websites built with modern technology stacks. We create responsive, fast-loading sites that convert visitors into customers. From concept to launch, we handle every detail with precision.",
    features: [
      "Fully responsive design (mobile-first)",
      "Custom development (React, Next.js)",
      "SEO-friendly architecture",
      "Accessibility compliance (WCAG)",
      "Core Web Vitals optimization",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Web Application Development",
    description:
      "Powerful web applications built to scale. We develop full-stack solutions that integrate seamlessly with your existing tools and systems. Secure, maintainable, and ready for growth.",
    features: [
      "Custom web app architecture",
      "API-first design & integrations",
      "Real-time functionality & automation",
      "Cloud deployment (AWS, Vercel)",
      "Zero-trust security practices",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: "SEO Optimization & Maintenance",
    description:
      "Ongoing SEO strategy designed for long-term visibility and measurable growth. We handle the technical foundation, content optimization, and authority building to keep your site ranking competitively.",
    features: [
      "Technical SEO audits & implementation",
      "Keyword research & content optimization",
      "Monthly content refresh strategies",
      "Link building & authority development",
      "AI-safe content strategies",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Website Maintenance & Support",
    description:
      "Ongoing maintenance and security monitoring to keep your site fast, secure, and compliant. We handle updates, backups, performance optimization, and emergency support so you can focus on your business.",
    features: [
      "Security monitoring & SSL management",
      "Automatic backups & disaster recovery",
      "Plugin & software updates",
      "Malware scans & vulnerability assessments",
      "24/7 emergency support",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#C9A961] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0E27] mb-4">
            Comprehensive Web Services
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto">
            Designed for sustainable growth — from first impression to ongoing
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-xl border border-[#E0E0E0] hover:border-[#C9A961] hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] flex items-center justify-center text-[#0A0E27] group-hover:bg-[#0A0E27] group-hover:text-[#C9A961] transition-colors duration-300 mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">
                {s.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[#666666]"
                  >
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2 2 4-4"
                          stroke="#C9A961"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
