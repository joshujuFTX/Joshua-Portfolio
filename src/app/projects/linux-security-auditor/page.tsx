import Link from "next/link";

export default function LinuxSecurityAuditorPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-sm font-semibold tracking-widest">
            JOSHUA UJU
          </Link>

          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            04 / Cybersecurity
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Linux Security Auditor
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
            A Python-based Linux security auditing tool designed to inspect
            system configuration, permissions, services, users, and common
            security risks.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
                Overview
              </p>

              <h2 className="text-3xl font-semibold">
                Automated Linux security analysis
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400">
              <p>
                The Linux Security Auditor is built to automate common
                security checks that would otherwise require manually
                inspecting a Linux system.
              </p>

              <p>
                The tool evaluates system configuration and produces
                structured findings that can help identify potential
                vulnerabilities, misconfigurations, and areas requiring
                additional investigation.
              </p>

              <p>
                The project combines Python automation, Linux administration,
                shell commands, file permissions, process inspection, and
                security fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
            Architecture
          </p>

          <h2 className="text-3xl font-semibold">
            Security auditing workflow
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="mb-6 text-sm text-zinc-500">01</p>
            <h3 className="text-xl font-semibold">System Collection</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Collects information about the operating system, users,
              processes, services, network configuration, and filesystem.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="mb-6 text-sm text-zinc-500">02</p>
            <h3 className="text-xl font-semibold">Security Checks</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Evaluates permissions, exposed services, account configuration,
              system settings, and other common security conditions.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
            <p className="mb-6 text-sm text-zinc-500">03</p>
            <h3 className="text-xl font-semibold">Findings & Reporting</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Organizes detected issues into readable findings that can be
              reviewed and investigated by the system administrator.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
              Key Features
            </p>

            <h2 className="text-3xl font-semibold">
              What the auditor examines
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "User & Account Auditing",
                description:
                  "Reviews local users, privileged accounts, and account configuration.",
              },
              {
                title: "File Permissions",
                description:
                  "Checks sensitive files and directories for potentially unsafe permissions.",
              },
              {
                title: "Service Inspection",
                description:
                  "Identifies active services and helps surface unnecessary exposure.",
              },
              {
                title: "Process Analysis",
                description:
                  "Inspects running processes and system activity for additional context.",
              },
              {
                title: "Network Configuration",
                description:
                  "Examines interfaces, listening services, and network-related configuration.",
              },
              {
                title: "Security Reporting",
                description:
                  "Produces structured security findings for easier review and remediation.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-800 p-6"
              >
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
              Engineering
            </p>

            <h2 className="text-3xl font-semibold">
              Automation meets security fundamentals
            </h2>
          </div>

          <div className="space-y-5 text-zinc-400">
            <p>
              The project focuses on using Python to automate repeatable Linux
              administration and security tasks.
            </p>

            <p>
              It demonstrates practical understanding of Linux internals,
              command-line tooling, permissions, processes, services, and
              security-oriented system analysis.
            </p>

            <p>
              The architecture is intentionally modular so additional security
              checks can be added without rewriting the entire auditing engine.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-8 text-sm uppercase tracking-widest text-zinc-500">
            Technology Stack
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "Linux",
              "Bash",
              "System Administration",
              "File Permissions",
              "Process Management",
              "Networking",
              "Cybersecurity",
              "Automation",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12">
          <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
            Project
          </p>

          <h2 className="text-3xl font-semibold">
            Linux Security Auditor
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            A practical cybersecurity automation project demonstrating Python,
            Linux, system administration, and security analysis.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              GitHub Repository
            </a>

            <Link
              href="/"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-500"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
          © 2026 Joshua Uju. Built with Next.js, TypeScript, and Tailwind CSS.
        </div>
      </footer>
    </main>
  );
}
