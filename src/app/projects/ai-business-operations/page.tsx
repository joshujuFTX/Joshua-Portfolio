export default function AIBusinessOperationsPage() {
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
            02 / Artificial Intelligence
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
            AI Business Operations Platform
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
            An AI-powered platform designed to automate business workflows,
            analyze operational information, and turn business data into
            actionable insights.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Python",
              "FastAPI",
              "React",
              "PostgreSQL",
              "LLM APIs",
              "RAG",
              "Docker",
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
              Turning business information into useful actions.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              This platform combines a modern web application with large
              language models and retrieval-based workflows to help businesses
              work with operational information more efficiently.
            </p>

            <p>
              The system is designed around the idea that business users
              should be able to provide information in natural language and
              receive structured answers, summaries, recommendations, and
              workflow assistance.
            </p>

            <p>
              The backend is built with Python and FastAPI, while the
              frontend provides an interactive interface for working with
              business data and AI-powered functionality.
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
            AI application architecture.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Frontend
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                A React interface provides dashboards, AI interactions,
                business workflows, and structured views of operational
                information.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                API & Intelligence
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                FastAPI provides the backend API layer and connects
                application workflows with LLM-powered processing.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <p className="text-sm font-medium text-white">
                Data & Retrieval
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                PostgreSQL stores application data while retrieval workflows
                provide relevant business context to AI requests.
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
                "AI Business Assistant",
                "An AI interface designed to help users analyze business information and perform operational tasks through natural language.",
              ],
              [
                "Retrieval-Augmented Generation",
                "Uses retrieved business context to provide AI responses grounded in relevant application data.",
              ],
              [
                "Business Data Processing",
                "Transforms operational information into structured data that can be analyzed by the application and AI layer.",
              ],
              [
                "Workflow Automation",
                "Designed AI-powered workflows that can reduce repetitive operational tasks and assist with business processes.",
              ],
              [
                "REST API",
                "FastAPI exposes backend functionality through structured API endpoints connecting the frontend and AI services.",
              ],
              [
                "Containerized Deployment",
                "Docker provides a consistent environment for running the application and its backend services.",
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
            Building AI as a software system.
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              The project treats AI as one component of a larger software
              architecture rather than simply connecting a chatbot to an
              interface.
            </p>

            <p>
              The application combines APIs, databases, retrieval, frontend
              interfaces, backend services, and AI models into a single
              workflow.
            </p>

            <p>
              This architecture provides a foundation for expanding the
              system with additional business workflows, integrations,
              analytics, authentication, and automated agents.
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
              ["Backend", "Python, FastAPI"],
              ["Frontend", "React"],
              ["Database", "PostgreSQL"],
              ["AI", "LLM APIs, RAG"],
              ["Infrastructure", "Docker"],
              ["Architecture", "REST APIs"],
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
