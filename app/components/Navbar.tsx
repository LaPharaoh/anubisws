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
          ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm border-b border-[#e4cfc4]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
          style={{ color: scrolled ? "#694A38" : "#ffffff" }}
        >
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ backgroundColor: "#694A38" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 13H2L8 1Z" fill="#B4654A" />
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
              className="text-sm transition-colors duration-200 cursor-pointer"
              style={{ color: scrolled ? "#759AAB" : "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? "#694A38" : "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "#759AAB"
                  : "rgba(255,255,255,0.7)")
              }
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-full text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(44,73,127,0.35)] cursor-pointer"
            style={{ backgroundColor: "#2C497F" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#B4654A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2C497F")
            }
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
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: scrolled ? "#694A38" : "#ffffff",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: scrolled ? "#694A38" : "#ffffff",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: scrolled ? "#694A38" : "#ffffff",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-[#e4cfc4] ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
        style={{ backgroundColor: "#faf8f5" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left text-sm transition-colors cursor-pointer"
              style={{ color: "#759AAB" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#694A38")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#759AAB")}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 px-4 py-2.5 text-sm font-semibold rounded-full text-white text-center cursor-pointer"
            style={{ backgroundColor: "#2C497F" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
