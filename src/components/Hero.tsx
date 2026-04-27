import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-light) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              Trusted Since 1977
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200">
            Your Trusted Partner in{" "}
            <span className="text-[var(--accent)]">Industrial Electrical</span>{" "}
            Solutions
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
            Authorized channel partner for India&apos;s leading electrical
            brands. Delivering world-class switchgear, control gear, and
            automation solutions from Kolkata to industries across the region.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
            <Link
              href="/products"
              className="bg-[var(--accent)] text-[var(--gray-900)] px-8 py-3.5 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/30 text-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-in-up animation-delay-600">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">50+</p>
              <p className="text-white/60 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">7+</p>
              <p className="text-white/60 text-sm mt-1">Brand Partners</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">1000+</p>
              <p className="text-white/60 text-sm mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
