const clients = [
  {
    name: "Mani Group",
    logo: "/clients/mani.jpg",
  },
  {
    name: "Magadh Sugar & Energy Ltd.",
    logo: "/clients/magadh.jpg",
  },
  {
    name: "Avadh Sugar & Energy Ltd.",
    logo: "/clients/avadh.png",
  },
  {
    name: "Balrampur Chini Mills Limited",
    logo: "/clients/balrampur.jpg",
  },
  {
    name: "EP Group",
    logo: "/clients/ep.png",
  },
];

const marqueeClients = [...clients, ...clients];

export default function OurClients() {
  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--gray-900)]">
            Trusted by <span className="text-[var(--primary)]">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-[var(--gray-600)] leading-relaxed">
            We are proud to support leading businesses with dependable
            electrical solutions and long-term service relationships.
          </p>
        </div>

        <div className="clients-marquee-mask">
          <div className="clients-marquee-track">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="clients-marquee-card"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-base sm:text-lg font-medium text-[var(--gray-700)]">
          and many more
        </p>
      </div>
    </section>
  );
}
