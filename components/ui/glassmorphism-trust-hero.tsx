"use client";

import React from "react";
import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Star,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu,
} from "lucide-react";

const CLIENTS = [
  { name: "Acme Corp", icon: Hexagon },
  { name: "Quantum", icon: Triangle },
  { name: "Command+Z", icon: Command },
  { name: "Phantom", icon: Ghost },
  { name: "Ruby", icon: Gem },
  { name: "Chipset", icon: Cpu },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium sm:text-xs">
      {label}
    </span>
  </div>
);

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="relative w-full text-white overflow-hidden font-sans"
      style={{ backgroundColor: "#0A0E27" }}
    >
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .hero-marquee {
          animation: marquee 40s linear infinite;
        }
        .hero-delay-100 { animation-delay: 0.1s; }
        .hero-delay-200 { animation-delay: 0.2s; }
        .hero-delay-300 { animation-delay: 0.3s; }
        .hero-delay-400 { animation-delay: 0.4s; }
        .hero-delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background image with gradient mask */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)",
          maskImage:
            "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(201,169,97,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">

            {/* Badge */}
            <div className="hero-fade-in hero-delay-100">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-md transition-colors cursor-default"
                style={{
                  border: "1px solid rgba(201,169,97,0.3)",
                  background: "rgba(201,169,97,0.08)",
                }}
              >
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#C9A961] flex items-center gap-2">
                  Award-Winning Design
                  <Star className="w-3.5 h-3.5 text-[#C9A961] fill-[#C9A961]" />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="hero-fade-in hero-delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              Premium Web Solutions{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #C9A961 100%)",
                }}
              >
                for Modern
              </span>
              <br />
              Businesses
            </h1>

            {/* Description */}
            <p className="hero-fade-in hero-delay-300 max-w-xl text-lg text-white/60 leading-relaxed">
              Custom-built websites, powerful web applications, and data-driven
              SEO strategies. We design and maintain digital platforms that
              drive measurable growth.
            </p>

            {/* CTA Buttons */}
            <div className="hero-fade-in hero-delay-400 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{ backgroundColor: "#C9A961", color: "#0A0E27" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#b8983e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C9A961")
                }
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("#services")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors cursor-pointer"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.15)";
                }}
              >
                <Play className="w-4 h-4 fill-current" />
                See Our Work
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">

            {/* Stats Card */}
            <div
              className="hero-fade-in hero-delay-500 relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
              style={{
                border: "1px solid rgba(201,169,97,0.15)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {/* Card glow */}
              <div
                className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(201,169,97,0.06)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1"
                    style={{
                      background: "rgba(201,169,97,0.15)",
                      ringColor: "rgba(201,169,97,0.3)",
                    }}
                  >
                    <Target className="h-6 w-6 text-[#C9A961]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">
                      50+
                    </div>
                    <div className="text-sm text-white/50">
                      Projects Delivered
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Client Satisfaction</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div
                    className="h-2 w-full overflow-hidden rounded-full"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="h-full w-[98%] rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, #C9A961, rgba(201,169,97,0.5))",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="h-px w-full mb-6"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="3x" label="Avg Growth" />
                  <div
                    className="w-px h-full mx-auto"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  />
                  <StatItem value="24/7" label="Support" />
                  <div
                    className="w-px h-full mx-auto"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  />
                  <StatItem value="100%" label="Quality" />
                </div>

                {/* Tag pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium tracking-wide text-white/70"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    ACTIVE
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium tracking-wide text-[#C9A961]"
                    style={{
                      border: "1px solid rgba(201,169,97,0.25)",
                      background: "rgba(201,169,97,0.08)",
                    }}
                  >
                    <Crown className="w-3 h-3 text-[#C9A961]" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div
              className="hero-fade-in hero-delay-500 relative overflow-hidden rounded-3xl py-8 backdrop-blur-xl"
              style={{
                border: "1px solid rgba(201,169,97,0.15)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <h3 className="mb-6 px-8 text-sm font-medium text-white/40">
                Trusted by Industry Leaders
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="hero-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-40 transition-all hover:opacity-100 hover:scale-105 cursor-default"
                      style={{ color: "#C9A961" }}
                    >
                      <client.icon className="h-5 w-5 fill-current" />
                      <span className="text-base font-bold text-white tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
