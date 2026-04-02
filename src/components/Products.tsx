"use client";

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

export default function Products() {
  const [activeBrand, setActiveBrand] = useState(productData[0].brand);
  const activeData = productData.find((p) => p.brand === activeBrand)!;

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <a
            href="#contact"
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
          </a>
        </div>
      </div>
    </section>
  );
}
