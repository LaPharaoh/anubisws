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
    <section id="pricing" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#C9A961] uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0E27] mb-4">
            Transparent Pricing
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto">
            Choose a plan that fits your business needs. All plans include
            ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-xl p-8 flex flex-col ${
                t.featured
                  ? "bg-[#0A0E27] text-white shadow-2xl scale-105"
                  : "bg-white border border-[#E0E0E0]"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#C9A961] text-[#0A0E27] text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-1 ${t.featured ? "text-white" : "text-[#0A0E27]"}`}
                >
                  {t.name}
                </h3>
                <p
                  className={`text-xs mb-4 ${t.featured ? "text-white/60" : "text-[#666666]"}`}
                >
                  {t.bestFor}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-bold ${t.featured ? "text-white" : "text-[#0A0E27]"}`}
                  >
                    {t.price}
                  </span>
                  <span
                    className={`text-sm mb-1.5 ${t.featured ? "text-white/60" : "text-[#666666]"}`}
                  >
                    {t.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`mt-0.5 flex-shrink-0 ${t.featured ? "text-[#C9A961]" : "text-[#C9A961]"}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={t.featured ? "text-white/80" : "text-[#666666]"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  t.featured
                    ? "bg-[#C9A961] text-[#0A0E27] hover:bg-white"
                    : "bg-[#0A0E27] text-white hover:bg-[#C9A961]"
                }`}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-xl border border-[#E0E0E0] p-8">
          <h3 className="text-lg font-semibold text-[#0A0E27] mb-6">
            Add-Ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#F8F9FA]"
              >
                <span className="text-sm text-[#666666]">{a.name}</span>
                <span className="text-sm font-medium text-[#C9A961] whitespace-nowrap ml-4">
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
