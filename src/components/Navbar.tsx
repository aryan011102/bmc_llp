"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/bmc-logo.jpeg"
              alt="Bengal Machinery Corporation LLP"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-cover"
            />
            <img
              src="/be-logo.jpeg"
              alt="Bengal Electricals"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-[var(--primary)] text-sm leading-tight">
                Bengal Machinery Corporation LLP
              </p>
              <p className="font-bold text-[var(--primary)] text-sm leading-tight">
                / Bengal Electricals
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--gray-700)] hover:text-[var(--primary)] font-medium transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:03322371073"
              className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors duration-200 text-sm"
            >
              Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--gray-100)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--gray-700)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--gray-200)]">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-[var(--gray-700)] hover:text-[var(--primary)] hover:bg-[var(--gray-50)] rounded-lg font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:03322371073"
                className="mx-4 mt-2 bg-[var(--primary)] text-white px-5 py-2.5 rounded-lg font-medium text-center hover:bg-[var(--primary-dark)] transition-colors duration-200"
              >
                Call Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
