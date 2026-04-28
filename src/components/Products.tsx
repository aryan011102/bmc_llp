"use client";

import Link from "next/link";
import { useState } from "react";

const productData = [
  {
    brand: "Schneider Electric",
    categories: [
      "ACB, MCCB & SDF",
      "Contactor, Relay & MPCB",
      "MCB, RCCB, DB & Plug Socket",
      "VFD & Soft Starter",
      "Push Button & Pilot Light",
      "Meters and Capacitor",
    ],
  },
  {
    brand: "Lauritz Knudsen",
    categories: [
      "ACB & MCCB",
      "On-load Changeover Switch-Disconnectors & Switch Disconnector Fuse Unit",
      "Contactor, Relay & MPCB",
      "MCB, RCCB, DB & Plug Socket",
      "VFD & Soft Starter",
      "Three Phase & Single Phase Starters and Controllers",
      "Push Button & Pilot Light",
      "Meters and Capacitor",
    ],
  },
  {
    brand: "CG Power",
    categories: [
      "Three Phase Foot / Flange Mounted Motors (IE2, IE3, IE4)",
      "Single Phase Motor",
      "Flameproof Motors (IE2, IE3, IE4)",
      "DC Motors",
    ],
  },
  {
    brand: "Automatic Electric Ltd.",
    categories: [
      "Voltmeter",
      "Ammeter",
      "Current Transformers (CT)",
      "Potential Transformer (PT)",
    ],
  },
  {
    brand: "Kaycee",
    categories: ["Rotary Switch", "Toggle Switch", "Limit Switch"],
  },
  {
    brand: "GIC",
    categories: [
      "Timers & Time Switches",
      "Voltage Monitoring Relay",
      "Current Monitoring Relay",
      "Earth Leakage Relay",
    ],
  },
  {
    brand: "Salzer",
    categories: [
      "Rotary Switch",
      "Load Break Switch",
      "Limit Switch",
      "Plug in Relay",
      "Wires",
    ],
  },
];

const featuredShowcase = {
  badge: "Unified Product Catalog",
  title: "A consolidated view of our complete industrial electrical offering",
  image: "/products/complete-catalog.png",
  description:
    "This catalog board brings together the product categories handled across our partner brands, including switchgear, enclosures, protection devices, operator controls, metering solutions, and electric motors.",
  highlights: [
    "Switchgear & Enclosures",
    "Circuit Protection",
    "Operator Controls",
    "Metering",
    "Electric Motors",
  ],
};

export default function Products() {
  const [activeBrand, setActiveBrand] = useState(productData[0].brand);
  const activeData = productData.find((p) => p.brand === activeBrand)!;

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background illustrations */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        {/* Circuit board pattern - top right */}
        <svg className="absolute -top-10 -right-10 w-96 h-96 text-[var(--primary)]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="100" cy="100" r="8" />
          <circle cx="100" cy="100" r="30" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="90" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <line x1="36" y1="36" x2="164" y2="164" />
          <line x1="164" y1="36" x2="36" y2="164" />
          <circle cx="100" cy="10" r="4" fill="currentColor" />
          <circle cx="100" cy="190" r="4" fill="currentColor" />
          <circle cx="10" cy="100" r="4" fill="currentColor" />
          <circle cx="190" cy="100" r="4" fill="currentColor" />
          <circle cx="36" cy="36" r="3" fill="currentColor" />
          <circle cx="164" cy="36" r="3" fill="currentColor" />
          <circle cx="36" cy="164" r="3" fill="currentColor" />
          <circle cx="164" cy="164" r="3" fill="currentColor" />
        </svg>

        {/* Large gear - bottom left */}
        <svg className="absolute -bottom-20 -left-20 w-80 h-80 text-[var(--primary)]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 30a20 20 0 110 40 20 20 0 010-40zm0 8a12 12 0 100 24 12 12 0 000-24z"/>
          <rect x="47" y="5" width="6" height="15" rx="2"/>
          <rect x="47" y="80" width="6" height="15" rx="2"/>
          <rect x="5" y="47" width="15" height="6" rx="2"/>
          <rect x="80" y="47" width="15" height="6" rx="2"/>
          <rect x="17" y="14" width="6" height="15" rx="2" transform="rotate(45 20 21.5)"/>
          <rect x="77" y="71" width="6" height="15" rx="2" transform="rotate(45 80 78.5)"/>
          <rect x="14" y="77" width="15" height="6" rx="2" transform="rotate(45 21.5 80)"/>
          <rect x="71" y="17" width="15" height="6" rx="2" transform="rotate(45 78.5 20)"/>
        </svg>

        {/* Lightning bolt - left */}
        <svg className="absolute top-1/4 left-8 w-28 h-28 text-[var(--primary)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>

        {/* Second lightning bolt - bottom right */}
        <svg className="absolute bottom-32 right-1/4 w-20 h-20 text-[var(--primary)] rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>

        {/* Circuit nodes - top left */}
        <svg className="absolute top-16 left-1/4 w-48 h-48 text-[var(--primary)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="4" fill="currentColor"/>
          <circle cx="80" cy="20" r="4" fill="currentColor"/>
          <circle cx="50" cy="50" r="6" fill="currentColor"/>
          <circle cx="20" cy="80" r="4" fill="currentColor"/>
          <circle cx="80" cy="80" r="4" fill="currentColor"/>
          <line x1="20" y1="20" x2="50" y2="50"/>
          <line x1="80" y1="20" x2="50" y2="50"/>
          <line x1="20" y1="80" x2="50" y2="50"/>
          <line x1="80" y1="80" x2="50" y2="50"/>
          <line x1="20" y1="20" x2="80" y2="20"/>
          <line x1="20" y1="80" x2="80" y2="80"/>
        </svg>

        {/* Small gear - right middle */}
        <svg className="absolute top-1/2 right-12 w-40 h-40 text-[var(--primary)]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 35a15 15 0 110 30 15 15 0 010-30zm0 6a9 9 0 100 18 9 9 0 000-18z"/>
          <rect x="48" y="10" width="4" height="12" rx="2"/>
          <rect x="48" y="78" width="4" height="12" rx="2"/>
          <rect x="10" y="48" width="12" height="4" rx="2"/>
          <rect x="78" y="48" width="12" height="4" rx="2"/>
        </svg>

        {/* Power plug - top center-right */}
        <svg className="absolute top-10 right-1/3 w-24 h-24 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 2v4M15 2v4M5 6h14v4a7 7 0 01-7 7 7 7 0 01-7-7V6zM12 17v3M8 20h8"/>
        </svg>

        {/* Resistor / circuit element - left middle */}
        <svg className="absolute top-[45%] left-4 w-36 h-16 text-[var(--primary)]" viewBox="0 0 120 30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="0" y1="15" x2="20" y2="15"/>
          <polyline points="20,15 28,5 36,25 44,5 52,25 60,5 68,25 76,5 84,25 92,15"/>
          <line x1="92" y1="15" x2="120" y2="15"/>
          <circle cx="0" cy="15" r="2" fill="currentColor"/>
          <circle cx="120" cy="15" r="2" fill="currentColor"/>
        </svg>

        {/* Switch symbol - bottom center */}
        <svg className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-20 text-[var(--primary)]" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="20" cy="25" r="4" fill="currentColor"/>
          <circle cx="80" cy="25" r="4" fill="currentColor"/>
          <line x1="0" y1="25" x2="16" y2="25"/>
          <line x1="84" y1="25" x2="100" y2="25"/>
          <line x1="24" y1="25" x2="76" y2="10"/>
        </svg>

        {/* Small circuit board - bottom right */}
        <svg className="absolute -bottom-8 right-8 w-52 h-52 text-[var(--primary)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="10" y="10" width="80" height="80" rx="4"/>
          <line x1="30" y1="10" x2="30" y2="90"/>
          <line x1="50" y1="10" x2="50" y2="90"/>
          <line x1="70" y1="10" x2="70" y2="90"/>
          <line x1="10" y1="30" x2="90" y2="30"/>
          <line x1="10" y1="50" x2="90" y2="50"/>
          <line x1="10" y1="70" x2="90" y2="70"/>
          <circle cx="30" cy="30" r="3" fill="currentColor"/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
          <circle cx="70" cy="30" r="3" fill="currentColor"/>
          <circle cx="30" cy="70" r="3" fill="currentColor"/>
          <circle cx="70" cy="70" r="3" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
            Product Range
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--gray-900)]">
            Comprehensive{" "}
            <span className="text-[var(--primary)]">Product Portfolio</span>
          </h2>
          <p className="mt-4 text-[var(--gray-600)] leading-relaxed">
            We cater to a wide range of industries, providing tailored solutions
            in switchgear, control gear, automation components, protection
            devices, and other essential electrical equipment.
          </p>
        </div>

        <article className="mb-16 overflow-hidden rounded-[30px] border border-[var(--gray-200)] bg-white shadow-[0_22px_60px_rgba(17,24,39,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_38%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)] p-5 sm:p-7">
              <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(249,250,251,0.98)_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:min-h-[560px] sm:p-6">
                <img
                  src={featuredShowcase.image}
                  alt={featuredShowcase.title}
                  className="h-auto w-auto max-h-[380px] max-w-full object-contain object-center sm:max-h-[520px]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                {featuredShowcase.badge}
              </span>
              <h3 className="mt-4 text-2xl font-bold leading-snug text-[var(--gray-900)] sm:text-[2rem]">
                {featuredShowcase.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--gray-600)] sm:text-[15px]">
                {featuredShowcase.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredShowcase.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-[var(--gray-100)] px-3 py-1.5 text-[11px] font-medium text-[var(--gray-700)]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-5">
                <p className="text-sm font-semibold text-[var(--gray-900)]">
                  Brand-spanning product visibility
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">
                  The full catalog image is presented as a reference overview so
                  visitors can quickly understand the breadth of solutions
                  available across our electrical supply portfolio without
                  losing any product detail.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Brand tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {productData.map((item) => (
            <button
              key={item.brand}
              onClick={() => setActiveBrand(item.brand)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeBrand === item.brand
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "bg-[var(--gray-100)] text-[var(--gray-700)] hover:bg-[var(--gray-200)]"
              }`}
            >
              {item.brand}
            </button>
          ))}
        </div>

        {/* Product list */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--gray-50)] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[var(--primary)] mb-6 text-center">
              {activeData.brand}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeData.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--gray-200)]"
                >
                  <div className="w-8 h-8 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[var(--primary)] font-bold text-xs">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="text-sm text-[var(--gray-700)] font-medium leading-snug">
                    {cat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--gray-600)] mb-4">
            Need a specific product or a complete system solution?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-colors duration-200 text-sm"
          >
            Request a Quote
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
