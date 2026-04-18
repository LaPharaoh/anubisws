"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E0E0E0]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-[#0A0E27] text-lg tracking-tight"
        >
          <span className="w-7 h-7 rounded-md bg-[#0A0E27] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 13H2L8 1Z" fill="#C9A961" />
            </svg>
          </span>
          Anubis Web Services
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-sm text-[#666666] hover:text-[#0A0E27] transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="ml-2 px-4 py-2 text-sm font-medium rounded-md bg-[#0A0E27] text-white hover:bg-[#C9A961] transition-colors duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#0A0E27] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0A0E27] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#0A0E27] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#E0E0E0] ${menuOpen ? "max-h-80" : "max-h-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left text-sm text-[#666666] hover:text-[#0A0E27] transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 px-4 py-2.5 text-sm font-medium rounded-md bg-[#0A0E27] text-white text-center cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
