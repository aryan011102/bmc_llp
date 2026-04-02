export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--gray-900)]">
            Get in{" "}
            <span className="text-[var(--primary)]">Touch</span>
          </h2>
          <p className="mt-4 text-[var(--gray-600)] leading-relaxed">
            Whether you need a single component or a complete system solution,
            we&apos;re here to help with timely delivery, competitive pricing,
            and technical guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[var(--gray-200)] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--primary)]"
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
                </div>
                <div>
                  <h3 className="font-bold text-[var(--gray-900)]">
                    Our Office
                  </h3>
                  <p className="text-[var(--gray-600)] text-sm mt-1">
                    8 Ganesh Chandra Avenue
                    <br />
                    Kolkata - 700013
                    <br />
                    West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--gray-200)] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--primary)]"
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
                </div>
                <div>
                  <h3 className="font-bold text-[var(--gray-900)]">Email</h3>
                  <a
                    href="mailto:bengalelectricals@gmail.com"
                    className="text-[var(--primary)] text-sm mt-1 hover:underline"
                  >
                    bengalelectricals@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--gray-200)] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--gray-900)]">
                    Business Hours
                  </h3>
                  <p className="text-[var(--gray-600)] text-sm mt-1">
                    Monday - Saturday: 10:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[var(--gray-200)] shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4!2d88.35!3d22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b0b0b0b0b%3A0x0!2s8%20Ganesh%20Chandra%20Avenue%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              className="min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BMC LLP Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
