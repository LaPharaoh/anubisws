"use client";

const tiers = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    bestFor: "Small businesses, landing pages, portfolios",
    features: [
      "Website design & development",
      "5-page custom website",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Monthly updates & maintenance",
      "Email support",
      "Basic analytics setup",
    ],
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "/month",
    bestFor: "Growing businesses, e-commerce, service providers",
    features: [
      "Everything in Starter",
      "Unlimited pages",
      "Advanced SEO maintenance",
      "Web application development",
      "CMS integration",
      "Monthly performance reports",
      "Priority support",
    ],
    cta: "Choose Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: " quote",
    bestFor: "Large organizations, complex applications",
    features: [
      "Everything in Professional",
      "Full-stack web app development",
      "API & third-party integrations",
      "Advanced security implementations",
      "CRM, ERP, marketing tool integrations",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    cta: "Get a Quote",
    featured: false,
  },
];

const addons = [
  { name: "Paid advertising setup & management", price: "+$1,500/mo" },
  { name: "Content creation (4 blog posts)", price: "+$800/mo" },
  { name: "Email marketing automation", price: "+$600/mo" },
  { name: "Advanced analytics & conversion optimization", price: "+$500/mo" },
];

export default function Pricing() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: "#F9DEC9" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#B4654A" }}>
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2C1810" }}>
            Transparent Pricing
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#759AAB" }}>
            Choose a plan that fits your business needs. All plans include ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-delay={String(i * 150)}
              className="relative rounded-2xl p-8 flex flex-col transition-all duration-300"
              style={
                t.featured
                  ? {
                      background: "linear-gradient(155deg, #2C497F 0%, #3a5a9a 100%)",
                      color: "white",
                      boxShadow: "0 20px 60px rgba(44,73,127,0.3)",
                      transform: "scale(1.04)",
                    }
                  : {
                      backgroundColor: "white",
                      border: "1px solid #e4cfc4",
                    }
              }
            >
              {t.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#B4654A", color: "white" }}
                >
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: t.featured ? "white" : "#2C1810" }}
                >
                  {t.name}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: t.featured ? "rgba(249,222,201,0.6)" : "#759AAB" }}
                >
                  {t.bestFor}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: t.featured ? "white" : "#2C1810" }}
                  >
                    {t.price}
                  </span>
                  <span
                    className="text-sm mb-1.5"
                    style={{ color: t.featured ? "rgba(249,222,201,0.6)" : "#759AAB" }}
                  >
                    {t.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ color: "#B4654A" }}
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: t.featured ? "rgba(249,222,201,0.85)" : "#4a3c36" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                style={
                  t.featured
                    ? { backgroundColor: "#B4654A", color: "white" }
                    : { backgroundColor: "#694A38", color: "white" }
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = t.featured ? "#c97355" : "#B4654A";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(180,101,74,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = t.featured ? "#B4654A" : "#694A38";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div
          className="rounded-2xl border p-8"
          data-reveal
          style={{ backgroundColor: "white", borderColor: "#e4cfc4" }}
        >
          <h3 className="text-lg font-semibold mb-6" style={{ color: "#2C1810" }}>
            Add-Ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between py-3 px-4 rounded-xl"
                style={{ backgroundColor: "#faf8f5", border: "1px solid #e4cfc4" }}
              >
                <span className="text-sm" style={{ color: "#4a3c36" }}>{a.name}</span>
                <span className="text-sm font-semibold whitespace-nowrap ml-4" style={{ color: "#B4654A" }}>
                  {a.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
