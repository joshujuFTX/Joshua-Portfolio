export default function CloudMonitoringPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          JOSHUA UJU
        </a>

        <a
          href="/"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to Portfolio
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Cloud Infrastructure
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Cloud Monitoring Platform
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
          A monitoring platform designed to provide visibility into
          infrastructure health, collect system metrics, detect failures,
          and surface operational issues through a centralized dashboard.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "AWS",
            "Terraform",
            "Linux",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Overview
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Monitoring infrastructure before problems become outages.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Modern applications depend on multiple services,
              infrastructure components, and external systems. Without
              centralized monitoring, identifying failures and performance
              problems can become difficult.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              This platform collects system and application metrics,
              processes health information, stores historical data, and
              exposes the information through an API and monitoring
              interface.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            System Architecture
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 p-6">
                <p className="text-sm text-zinc-500">01</p>

                <h3 className="mt-4 text-lg font-semibold">
                  Metrics Collection
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Collects CPU, memory, disk, network, and application
                  health information from monitored systems.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 p-6">
                <p className="text-sm text-zinc-500">02</p>

                <h3 className="mt-4 text-lg font-semibold">
                  API & Processing
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  FastAPI services process incoming metrics and expose
                  endpoints for monitoring, health checks, and alerts.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 p-6">
                <p className="text-sm text-zinc-500">03</p>

                <h3 className="mt-4 text-lg font-semibold">
                  Data & Dashboard
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  PostgreSQL stores monitoring data while the dashboard
                  provides centralized visibility into system health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Key Features
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "System Metrics",
                description:
                  "Tracks CPU, memory, disk, network, and system health metrics.",
              },
              {
                title: "Health Checks",
                description:
                  "Monitors service availability and identifies unhealthy systems.",
              },
              {
                title: "Alerting",
                description:
                  "Detects threshold violations and generates operational alerts.",
              },
              {
                title: "Historical Data",
                description:
                  "Stores metrics over time for analysis and troubleshooting.",
              },
              {
                title: "REST API",
                description:
                  "Provides programmatic access to monitoring data and system status.",
              },
              {
                title: "Containerized Deployment",
                description:
                  "Uses Docker to package application services consistently across environments.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-800 p-6"
              >
                <h3 className="font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Engineering
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Built around reliability.
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              The system is designed around separation of concerns,
              containerized services, API-driven communication, and
              persistent monitoring data.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "API-driven architecture",
              "Containerized application services",
              "Persistent monitoring data",
              "Infrastructure-as-code with Terraform",
              "Cloud deployment with AWS",
              "Linux-based system monitoring",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-zinc-800 pb-4 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Technology Stack
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Backend", "Python / FastAPI"],
              ["Database", "PostgreSQL"],
              ["Infrastructure", "AWS / Terraform"],
              ["Containers", "Docker"],
              ["Operating System", "Linux"],
              ["Version Control", "Git / GitHub"],
              ["CI/CD", "GitHub Actions"],
              ["Monitoring", "System Metrics / Health Checks"],
            ].map(([category, technology]) => (
              <div
                key={category}
                className="rounded-xl border border-zinc-800 p-5"
              >
                <p className="text-xs uppercase tracking-wider text-zinc-600">
                  {category}
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  {technology}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold">
            Explore the project
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Source code, technical documentation, and the deployed
            application will be available here.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              GitHub Repository
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-700 px-7 py-3 text-center text-sm font-medium transition hover:border-zinc-500"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-600 sm:flex-row">
          <span>© 2026 Joshua Uju</span>

          <a
            href="/"
            className="transition hover:text-zinc-400"
          >
            Back to Portfolio
          </a>
        </div>
      </footer>
    </main>
  );
}