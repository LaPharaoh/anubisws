"use client";

const testimonials = [
  {
    quote:
      "Anubis transformed our outdated site into a modern platform that actually converts. Within 3 months of launch, we saw a 45% increase in qualified leads. Their SEO work speaks for itself.",
    name: "Sarah Mitchell",
    company: "Digital Marketing Agency",
    location: "Austin, TX",
  },
  {
    quote:
      "We needed a custom web app to streamline our operations. The team built exactly what we needed in half the time we expected. Responsive, fast, secure, and they still support us.",
    name: "Marcus Chen",
    company: "Manufacturing Services",
    location: "San Francisco, CA",
  },
  {
    quote:
      "The difference in our website's performance is night and day. Our site went from unknown to the first page of Google for our target keywords. Their monthly maintenance keeps us ahead.",
    name: "Jennifer Lopez",
    company: "E-commerce Retail",
    location: "Miami, FL",
  },
  {
    quote:
      "We've worked with several dev agencies before. Anubis stands out for their professionalism, communication, and actual results. They treat our business like it's their own.",
    name: "Robert Thompson",
    company: "Financial Services",
    location: "New York, NY",
  },
  {
    quote:
      "Our website is the face of our business online. Anubis designed something clean, professional, and effective. Every element has a purpose. It's an investment that paid off immediately.",
    name: "Lisa Anderson",
    company: "Consulting Firm",
    location: "Seattle, WA",
  },
  {
    quote:
      "The team's expertise in both design and SEO is exceptional. They didn't just build us a pretty website — they built a growth engine. Our organic traffic is up 120% year-over-year.",
    name: "David Patel",
    company: "SaaS Startup",
    location: "Denver, CO",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#B4654A">
          <path d="M7 1l1.5 4H13l-3.5 2.5 1.3 4.2L7 9.5l-3.8 2.2 1.3-4.2L1 5h4.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24" style={{ backgroundColor: "#F9DEC9" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#B4654A" }}>
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2C1810" }}>
            Trusted by Businesses Across Industries
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#759AAB" }}>
            Our clients see measurable growth. Here&apos;s what they say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-delay={String((i % 3) * 150)}
              className="rounded-2xl p-6 border flex flex-col transition-all duration-300"
              style={{ backgroundColor: "white", borderColor: "#e4cfc4" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#B4654A";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(105,74,56,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e4cfc4";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Stars />
              <blockquote className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#4a3c36" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#e4cfc4" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#694A38", color: "#F9DEC9" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#2C1810" }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#759AAB" }}>
                    {t.company} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
