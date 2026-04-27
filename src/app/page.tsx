import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
              Welcome
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--gray-900)]">
              Explore Our <span className="text-[var(--primary)]">Business</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--gray-600)] leading-relaxed">
              Our website now guides you through dedicated pages for company
              background, partner brands, product categories, and contact
              details, making it easier to find exactly what you need.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "About Us",
                  href: "/about",
                  description:
                    "Learn about our history, values, and five decades of industrial electrical expertise.",
                },
                {
                  title: "Brands",
                  href: "/brands",
                  description:
                    "See the leading manufacturers whose products we supply and support.",
                },
                {
                  title: "Products",
                  href: "/products",
                  description:
                    "Browse the product range across switchgear, automation, motors, meters, and more.",
                },
                {
                  title: "Contact Us",
                  href: "/contact",
                  description:
                    "Reach our Kolkata office for pricing, product availability, and technical assistance.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6 transition-all duration-200 hover:border-[var(--primary)]/25 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-[var(--gray-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                    Visit page
                    <svg
                      className="h-4 w-4"
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
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[var(--gray-50)] p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-[var(--gray-900)]">
              Why businesses work with us
            </h3>
            <div className="mt-8 space-y-6">
              {[
                "Authorized channel partnerships with major electrical brands",
                "Strong availability across industrial switchgear and automation products",
                "Longstanding service presence in Kolkata since 1977",
                "Fast support for quotations, sourcing, and technical guidance",
              ].map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--gray-700)]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[var(--primary)] p-6 text-white">
              <p className="text-sm uppercase tracking-wider text-white/70">
                Direct Assistance
              </p>
              <p className="mt-2 text-2xl font-bold">033 2237-1073</p>
              <p className="mt-2 text-sm text-white/80">
                Bengal Machinery Corporation LLP / Bengal Electricals
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
