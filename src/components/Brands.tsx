const brands = [
  {
    name: "Schneider Electric",
    logo: "/brands/schneider.png",
    description: "Global leader in energy management and automation",
  },
  {
    name: "Lauritz Knudsen",
    logo: "/brands/lk.png",
    description: "Premium electrical & automation solutions by Schneider Electric",
  },
  {
    name: "CG Power",
    logo: "/brands/cg.png",
    description: "Industrial motors and power solutions",
  },
  {
    name: "Automatic Electric Ltd.",
    logo: "/brands/ae.png",
    description: "Precision measuring instruments and transformers",
  },
  {
    name: "Kaycee",
    logo: "/brands/kaycee.png",
    description: "Rotary, toggle and limit switches",
  },
  {
    name: "GIC",
    logo: "/brands/gic.webp",
    description: "Timers, relays and monitoring devices",
  },
  {
    name: "Salzer",
    logo: "/brands/salzer.png",
    description: "Rotary switches, relays and wiring solutions",
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--gray-900)]">
            Authorized Channel Partner for{" "}
            <span className="text-[var(--primary)]">Leading Brands</span>
          </h2>
          <p className="mt-4 text-[var(--gray-600)] leading-relaxed">
            Our long-standing partnerships reflect our consistent performance,
            professional integrity, and dedication to delivering genuine,
            high-standard electrical components.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-[var(--gray-200)] hover:border-[var(--primary)]/20"
            >
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-36 max-w-full object-contain grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="font-semibold text-[var(--gray-900)] text-sm">
                {brand.name}
              </h3>
              <p className="text-xs text-[var(--gray-600)] mt-1">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
