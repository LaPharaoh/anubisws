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
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A961">
          <path d="M7 1l1.5 4H13l-3.5 2.5 1.3 4.2L7 9.5l-3.8 2.2 1.3-4.2L1 5h4.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#C9A961] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0E27] mb-4">
            Trusted by Businesses Across Industries
          </h2>
          <p className="text-[#666666] max-w-xl mx-auto">
            Our clients see measurable growth. Here&apos;s what they say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md hover:border-[#C9A961] transition-all duration-300 flex flex-col"
            >
              <Stars />
              <blockquote className="text-sm text-[#666666] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E0E0E0]">
                <div className="w-9 h-9 rounded-full bg-[#0A0E27] flex items-center justify-center text-[#C9A961] text-sm font-semibold flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0A0E27]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#666666]">
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
