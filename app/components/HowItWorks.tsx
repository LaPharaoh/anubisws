const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    duration: "1–2 weeks",
    description:
      "We start with a detailed discovery call to understand your business, goals, and audience. We research your industry, competitors, and opportunities.",
  },
  {
    number: "02",
    title: "Design & Planning",
    duration: "2–3 weeks",
    description:
      "We create wireframes, design mockups, and a detailed project plan. You approve the vision before development begins.",
  },
  {
    number: "03",
    title: "Development & Build",
    duration: "4–8 weeks",
    description:
      "Our team builds your website or application using modern, best-practice technology. We prioritize performance, security, and scalability.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    duration: "1–2 weeks",
    description:
      "Comprehensive testing across devices and browsers. SEO setup, analytics implementation, and security hardening before launch.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    duration: "Ongoing",
    description:
      "Continuous maintenance, monitoring, and optimization. Monthly reports, updates, and strategy adjustments to keep you ahead.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#C9A961] uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0E27] mb-4">
            How It Works
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto">
            A proven process that delivers results — every time.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#E0E0E0] -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step content */}
                <div className="flex-1 md:text-right">
                  {i % 2 === 0 ? (
                    <div className="p-6 rounded-xl border border-[#E0E0E0] hover:border-[#C9A961] transition-colors duration-300 bg-white">
                      <div className="flex items-center gap-3 mb-3 md:justify-end">
                        <span className="text-xs font-medium text-[#C9A961] uppercase tracking-wider">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#0A0E27] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Center badge */}
                <div className="hidden md:flex items-start justify-center pt-6 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0A0E27] text-[#C9A961] font-bold text-sm flex items-center justify-center z-10 border-4 border-white shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Right side */}
                <div className="flex-1">
                  {i % 2 !== 0 ? (
                    <div className="p-6 rounded-xl border border-[#E0E0E0] hover:border-[#C9A961] transition-colors duration-300 bg-white">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-[#C9A961] uppercase tracking-wider">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#0A0E27] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Mobile only */}
                <div className="md:hidden flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0A0E27] text-[#C9A961] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
                    {step.number}
                  </div>
                  <div className="p-5 rounded-xl border border-[#E0E0E0] flex-1">
                    <span className="text-xs font-medium text-[#C9A961] uppercase tracking-wider block mb-2">
                      {step.duration}
                    </span>
                    <h3 className="text-base font-semibold text-[#0A0E27] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
