const footerLinks = {
  Services: [
    "Website Design",
    "Web Applications",
    "SEO Optimization",
    "Maintenance",
  ],
  Company: ["About", "Blog", "Careers"],
  Resources: ["Case Studies", "FAQ", "Documentation"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0E27] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-md bg-[#C9A961] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 13H2L8 1Z" fill="#0A0E27" />
                </svg>
              </span>
              <span className="font-semibold text-white">Anubis Web Services</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium web solutions for modern businesses. We build digital
              platforms that drive measurable growth.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#C9A961] text-white/60 hover:text-[#0A0E27] flex items-center justify-center transition-colors duration-200 cursor-pointer"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold tracking-wider text-white/30 uppercase mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-[#C9A961] transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Anubis Web Services. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with precision. Designed to convert.
          </p>
        </div>
      </div>
    </footer>
  );
}
