export default function DeveloperPortfolioPage() {
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
            05 / Web Development
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Developer Portfolio
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
            A responsive developer portfolio built from scratch to showcase
            software engineering, cloud, AI, and cybersecurity work.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "Vercel",
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
              Built to represent the work behind the résumé.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              This portfolio was designed and developed as a real software
              project rather than a static résumé page. It provides a
              structured way to present technical projects, engineering
              experience, skills, and professional background.
            </p>

            <p>
              The application uses a modern React-based architecture with
              Next.js and TypeScript, responsive styling with Tailwind CSS,
              and Git-based version control through GitHub.
            </p>

            <p>
              The project also demonstrates an AI-assisted development
              workflow, using AI to accelerate implementation while reviewing,
              testing, debugging, and integrating the resulting code directly
              into the application.
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
            How the application is structured.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Application Layer
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Next.js and React provide the application structure,
                routing, reusable components, and page architecture.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Styling System
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Tailwind CSS provides responsive layouts, typography,
                spacing, borders, and the visual design system.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Development Workflow
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                Git and GitHub provide source control, while the application
                is developed and tested through a modern local development
                workflow.
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
                "Responsive Interface",
                "Designed the interface to adapt across desktop, tablet, and mobile screen sizes.",
              ],
              [
                "Project Architecture",
                "Created dedicated project routes so each technical project can have its own detailed case study.",
              ],
              [
                "Reusable UI",
                "Used consistent components, typography, spacing, borders, and layout patterns throughout the site.",
              ],
              [
                "Git Workflow",
                "Used Git and GitHub to track changes, create commits, and maintain the application source code.",
              ],
              [
                "AI-Assisted Development",
                "Used AI as a development assistant while directly reviewing and implementing the generated code.",
              ],
              [
                "Deployment Ready",
                "Structured the project for deployment through a modern Next.js hosting workflow.",
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
            More than a résumé website.
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              The portfolio is intentionally treated as a software project.
              It uses a real application framework, source control, routing,
              reusable UI patterns, and a structured development workflow.
            </p>

            <p>
              Each project page is designed to communicate not only what was
              built, but also the architecture, technologies, engineering
              decisions, and practical skills demonstrated by the project.
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
              ["Frontend", "React, Next.js, TypeScript"],
              ["Styling", "Tailwind CSS"],
              ["Version Control", "Git, GitHub"],
              ["Hosting", "Vercel"],
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
              href="https://github.com/joshujuFTX/Joshua-Portfolio"
              target="_blank"
              rel="noreferrer"
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
