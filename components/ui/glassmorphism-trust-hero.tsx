"use client";

import React from "react";
import {
  ArrowRight,
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
      style={{
        background:
          "linear-gradient(155deg, #2a1a12 0%, #694A38 30%, #4a3a5a 60%, #2C497F 100%)",
      }}
    >
      {/* Floating ambient orbs */}
      <div
        className="absolute top-28 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none animate-pulse-glow"
        style={{ background: "rgba(180, 101, 74, 0.18)" }}
      />
      <div
        className="absolute bottom-16 right-1/4 w-96 h-96 rounded-full blur-[100px] pointer-events-none animate-pulse-glow animation-delay-2s"
        style={{ background: "rgba(44, 73, 127, 0.28)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[90px] pointer-events-none animate-pulse-glow animation-delay-4s"
        style={{ background: "rgba(117, 154, 171, 0.12)" }}
      />

      {/* Background image with gradient mask */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)",
          maskImage:
            "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
        }}
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
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
                  border: "1px solid rgba(180,101,74,0.4)",
                  background: "rgba(180,101,74,0.1)",
                }}
              >
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider flex items-center gap-2" style={{ color: "#F9DEC9" }}>
                  Award-Winning Design
                  <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#B4654A" }} />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="hero-fade-in hero-delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
            >
              Premium Web Solutions{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, #F9DEC9 50%, #B4654A 100%)",
                }}
              >
                for Modern
              </span>
              <br />
              Businesses
            </h1>

            {/* Description */}
            <p className="hero-fade-in hero-delay-300 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(249,222,201,0.7)" }}>
              Custom-built websites, powerful web applications, and data-driven
              SEO strategies. We design and maintain digital platforms that
              drive measurable growth.
            </p>

            {/* CTA Buttons */}
            <div className="hero-fade-in hero-delay-400 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_8px_32px_rgba(180,101,74,0.4)] cursor-pointer"
                style={{ backgroundColor: "#B4654A", color: "#2C1810" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c97355")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#B4654A")
                }
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("#services")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                style={{
                  borderColor: "rgba(249,222,201,0.2)",
                  background: "rgba(249,222,201,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(249,222,201,0.1)";
                  e.currentTarget.style.borderColor = "rgba(249,222,201,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(249,222,201,0.05)";
                  e.currentTarget.style.borderColor = "rgba(249,222,201,0.2)";
                }}
              >
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
                border: "1px solid rgba(180,101,74,0.2)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {/* Card glow */}
              <div
                className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(180,101,74,0.08)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(180,101,74,0.15)",
                      boxShadow: "0 0 0 1px rgba(180,101,74,0.3)",
                    }}
                  >
                    <Target className="h-6 w-6" style={{ color: "#B4654A" }} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">
                      50+
                    </div>
                    <div className="text-sm" style={{ color: "rgba(249,222,201,0.5)" }}>
                      Projects Delivered
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "rgba(249,222,201,0.5)" }}>Client Satisfaction</span>
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
                          "linear-gradient(to right, #B4654A, #759AAB)",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="h-px w-full mb-6"
                  style={{ background: "rgba(249,222,201,0.08)" }}
                />

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="3x" label="Avg Growth" />
                  <div className="w-px h-full mx-auto" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <StatItem value="24/7" label="Support" />
                  <div className="w-px h-full mx-auto" style={{ background: "rgba(255,255,255,0.1)" }} />
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
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium tracking-wide"
                    style={{
                      border: "1px solid rgba(180,101,74,0.35)",
                      background: "rgba(180,101,74,0.1)",
                      color: "#F9DEC9",
                    }}
                  >
                    <Crown className="w-3 h-3" style={{ color: "#B4654A" }} />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div
              className="hero-fade-in hero-delay-500 relative overflow-hidden rounded-3xl py-8 backdrop-blur-xl"
              style={{
                border: "1px solid rgba(180,101,74,0.15)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <h3 className="mb-6 px-8 text-sm font-medium" style={{ color: "rgba(249,222,201,0.4)" }}>
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
                      style={{ color: "#B4654A" }}
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
