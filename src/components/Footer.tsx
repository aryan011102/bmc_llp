export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/bmc-logo.jpeg"
                alt="BMC LLP"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <p className="font-bold text-sm leading-tight">
                  Bengal Machinery Corporation LLP
                </p>
              </div>
            </div>
            <p className="text-[var(--gray-300)] text-sm leading-relaxed">
              One of Kolkata&apos;s most trusted names in industrial switchgear
              and electrical equipment since 1977.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Brands", "Products", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[var(--gray-300)] hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-[var(--gray-300)]">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--primary-light)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>8 Ganesh Chandra Avenue, Kolkata - 700013</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[var(--primary-light)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>033 2237-1073 / 5111 / 5383</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-[var(--primary-light)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:bengalelectricals@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  bengalelectricals@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--gray-700)] mt-12 pt-8 text-center text-[var(--gray-300)] text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bengal Machinery Corporation LLP.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
