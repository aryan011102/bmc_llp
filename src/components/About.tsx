const features = [
  {
    title: "Authorized Partnerships",
    description:
      "Official channel partner for 7+ leading electrical brands including Schneider Electric, Lauritz Knudsen, and CG Power.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Technical Expertise",
    description:
      "Nearly five decades of hands-on experience in switchgear, control gear, and industrial automation solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Complete Solutions",
    description:
      "From a single component to a complete system solution — we provide end-to-end electrical and automation products.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Pan-Industry Reach",
    description:
      "Serving manufacturing units, contractors, panel builders, utilities, and OEMs with precision and care.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--gray-900)]">
            Nearly Five Decades of{" "}
            <span className="text-[var(--primary)]">Trust & Excellence</span>
          </h2>
          <p className="mt-4 text-[var(--gray-600)] leading-relaxed">
            Founded in 1977 in Kolkata, Bengal Machinery Corporation LLP has
            grown into one of the region&apos;s most trusted names in industrial
            switchgear and electrical equipment. We combine deep local presence
            with global product expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-[var(--gray-200)] hover:border-[var(--primary)]/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-bold text-[var(--gray-900)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--gray-600)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-20 bg-[var(--gray-50)] rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--gray-900)]">
                Building Enduring Relationships
              </h3>
              <p className="mt-4 text-[var(--gray-600)] leading-relaxed">
                At our core, we believe in building enduring
                relationships&mdash;supported by transparent service, high
                product availability, and a strong after-sales support network.
                For us, every interaction is an opportunity to add value and
                uphold the trust our customers have placed in us since 1977.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                  <span className="text-sm font-medium text-[var(--gray-700)]">
                    Transparent Service
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                  <span className="text-sm font-medium text-[var(--gray-700)]">
                    Competitive Pricing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                  <span className="text-sm font-medium text-[var(--gray-700)]">
                    Timely Delivery
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                  <span className="text-sm font-medium text-[var(--gray-700)]">
                    After-Sales Support
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-[var(--primary)]">1977</p>
                <p className="text-sm text-[var(--gray-600)] mt-1">
                  Year Founded
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-[var(--primary)]">
                  Kolkata
                </p>
                <p className="text-sm text-[var(--gray-600)] mt-1">
                  Headquarters
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-[var(--primary)]">7+</p>
                <p className="text-sm text-[var(--gray-600)] mt-1">
                  Brand Partners
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-3xl font-bold text-[var(--primary)]">50+</p>
                <p className="text-sm text-[var(--gray-600)] mt-1">
                  Years of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
