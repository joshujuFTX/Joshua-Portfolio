export default function FoodEventBookingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 px-6 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold tracking-[0.2em] text-white"
          >
            JOSHUA UJU
          </a>

          <a
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to Portfolio
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            03 / Full-Stack Development
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Food & Event Booking Platform
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
            A full-stack marketplace connecting customers with food vendors
            and event services through discovery, booking, and digital
            workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "PostgreSQL",
              "REST APIs",
              "Authentication",
              "Payments",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Connecting customers with food and event services.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              This platform is designed to make it easier for customers to
              discover food vendors, explore services, and book vendors for
              events.
            </p>

            <p>
              The application brings together customer-facing discovery,
              vendor profiles, booking workflows, and structured data into a
              single full-stack experience.
            </p>

            <p>
              The project demonstrates how a modern web application can
              combine frontend interfaces, backend APIs, authentication,
              database operations, and payment workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Full-stack marketplace architecture.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Client Application
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Next.js and React provide responsive interfaces for customers
                and vendors to discover services and manage bookings.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Application API
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                REST-based application logic handles users, vendors,
                listings, bookings, availability, and platform workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Data & Payments
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                PostgreSQL provides persistent application data while
                payment workflows support transactions between customers and
                vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Key Features
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            What I built.
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {[
              [
                "Vendor Discovery",
                "Customers can browse food vendors and event services through a structured discovery experience.",
              ],
              [
                "Vendor Profiles",
                "Vendor-facing information can include services, menus, pricing, availability, photos, and business details.",
              ],
              [
                "Booking Workflow",
                "Designed a structured flow for customers to select vendors, submit event details, and manage booking requests.",
              ],
              [
                "Authentication",
                "User authentication provides a foundation for customer and vendor accounts and protected application functionality.",
              ],
              [
                "Database Architecture",
                "PostgreSQL provides persistent storage for users, vendors, listings, bookings, and related application data.",
              ],
              [
                "Payment Integration",
                "Designed payment workflows to support transactions associated with vendor bookings.",
              ],
            ].map(([title, description]) => (
              <div key={title}>
                <h3 className="text-lg font-medium">{title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Engineering
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Building a real marketplace workflow.
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              The project goes beyond a simple restaurant directory by
              modeling the relationships between customers, vendors,
              services, availability, bookings, and payments.
            </p>

            <p>
              The application architecture is designed around reusable
              components and API-driven workflows so that customer and vendor
              experiences can evolve independently.
            </p>

            <p>
              The system also provides a foundation for additional features
              such as notifications, reviews, vendor analytics, scheduling,
              and automated booking workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Technology Stack
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Frontend", "Next.js, React, TypeScript"],
              ["Backend", "REST APIs"],
              ["Database", "PostgreSQL"],
              ["Authentication", "User Authentication"],
              ["Payments", "Payment Integration"],
              ["Architecture", "Full-Stack Web Application"],
            ].map(([title, technologies]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-800 p-6"
              >
                <p className="text-sm text-zinc-500">{title}</p>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {technologies}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-xl border border-zinc-700 px-6 py-4 text-center text-sm font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              GitHub Repository →
            </a>

            <a
              href="/"
              className="rounded-xl border border-zinc-800 px-6 py-4 text-center text-sm font-medium text-zinc-400 transition hover:border-zinc-700 hover:text-white"
            >
              Back to Portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-zinc-500">
          <span>JOSHUA UJU</span>
          <span>Software Engineer • Cloud • AI • Cybersecurity</span>
        </div>
      </footer>
    </main>
  );
}
