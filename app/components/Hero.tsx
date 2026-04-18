"use client";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-white to-white pointer-events-none" />

      {/* Decorative geometric accent */}
      <div className="absolute top-24 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="200" stroke="#0A0E27" strokeWidth="1" />
          <circle cx="250" cy="250" r="140" stroke="#C9A961" strokeWidth="1" />
          <circle cx="250" cy="250" r="80" stroke="#0A0E27" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E0E0E0] text-xs text-[#666666] mb-8 bg-white">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
          Premium Web Services
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A0E27] leading-tight tracking-tight mb-6">
          Premium Web Solutions{" "}
          <span className="text-[#C9A961]">for Modern</span> Businesses
        </h1>

        <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed mb-10">
          Custom-built websites, powerful web applications, and data-driven SEO
          strategies. We design and maintain digital platforms that drive
          measurable growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-md bg-[#0A0E27] text-white text-sm font-medium hover:bg-[#C9A961] transition-colors duration-300 cursor-pointer w-full sm:w-auto"
          >
            Start Your Project
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="px-8 py-3.5 rounded-md border border-[#E0E0E0] text-[#0A0E27] text-sm font-medium hover:border-[#0A0E27] transition-colors duration-300 cursor-pointer w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-[#E0E0E0] pt-10 max-w-2xl mx-auto">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "3x", label: "Average Traffic Growth" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#0A0E27]">
                {s.value}
              </div>
              <div className="text-xs text-[#666666] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
