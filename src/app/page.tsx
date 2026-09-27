export default function Home() {
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

        <div className="hidden gap-8 text-sm text-zinc-400 sm:flex">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Software Engineer • Cloud • AI • Cybersecurity
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            Building software,
            <br />
            infrastructure & AI systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Marketing B.S. → Computer Science M.S.
            <br />
            Focused on software engineering, cloud infrastructure,
            artificial intelligence, and cybersecurity.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-7 py-3 text-center text-sm font-medium text-white transition hover:border-zinc-500"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            A collection of software, infrastructure, AI, and security
            projects built to solve practical problems and demonstrate
            full-stack technical capabilities.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-500">
                  01 / Cloud Infrastructure
                </p>

                <span className="text-xs text-zinc-600">
                  PYTHON
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Cloud Monitoring Platform
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                A cloud infrastructure monitoring platform designed to
                collect system metrics, track application health, detect
                failures, and provide visibility into deployed services.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "AWS",
                  "Docker",
                  "Terraform",
                  "PostgreSQL",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/projects/cloud-monitoring"
                  className="text-sm font-medium text-white transition group-hover:text-zinc-300"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-500">
                  02 / Artificial Intelligence
                </p>

                <span className="text-xs text-zinc-600">
                  AI
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                AI Business Operations Platform
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                An AI-powered business platform that combines automation,
                intelligent document processing, retrieval-augmented
                generation, and workflow tools to streamline operations.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "React",
                  "PostgreSQL",
                  "LLM APIs",
                  "RAG",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/projects/ai-business-operations"
                  className="text-sm font-medium text-white transition group-hover:text-zinc-300"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-500">
                  03 / Full Stack
                </p>

                <span className="text-xs text-zinc-600">
                  WEB
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Food & Event Booking Platform
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                A marketplace platform connecting food vendors with
                customers looking to discover, book, and manage food
                services for private events and gatherings.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "PostgreSQL",
                  "REST APIs",
                  "Authentication",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/projects/food-event-booking"
                  className="text-sm font-medium text-white transition group-hover:text-zinc-300"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Project 4 */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-500">
                  04 / Cybersecurity
                </p>

                <span className="text-xs text-zinc-600">
                  SECURITY
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Linux Security Auditor
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                A Linux security auditing tool that evaluates system
                configurations, permissions, services, authentication
                settings, and other security controls to identify potential
                vulnerabilities.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Linux",
                  "Bash",
                  "System Auditing",
                  "Security",
                  "CLI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/projects/linux-security-auditor"
                  className="text-sm font-medium text-white transition group-hover:text-zinc-300"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Developer Portfolio */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-700">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  05 / Web Development
                </p>

                <span className="text-xs text-zinc-600">
                  FULL-STACK
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Developer Portfolio
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                A responsive developer portfolio built from scratch with
                Next.js and TypeScript to showcase software engineering,
                cloud, AI, and cybersecurity projects.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/projects/developer-portfolio"
                  className="text-sm font-medium text-white transition group-hover:text-zinc-300"
                >
                  View Project →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Technical Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technologies I work with.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="font-semibold">Languages</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Python
                <br />
                JavaScript
                <br />
                TypeScript
                <br />
                SQL
                <br />
                Bash
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="font-semibold">Frameworks</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Next.js
                <br />
                React
                <br />
                FastAPI
                <br />
                REST APIs
                <br />
                Node.js
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="font-semibold">Cloud & DevOps</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                AWS
                <br />
                Docker
                <br />
                Terraform
                <br />
                GitHub Actions
                <br />
                Linux
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-6">
              <h3 className="font-semibold">AI & Security</h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                LLM APIs
                <br />
                RAG
                <br />
                AI Agents
                <br />
                IAM
                <br />
                Security Auditing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            About
          </p>

          <div className="mt-8 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Business background. Technical direction.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I started with a foundation in business and marketing, then
              shifted my focus toward computer science and software
              engineering. That combination gives me a different perspective
              on how technology is built, why it matters, and how it can solve
              real business problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I&apos;m currently developing my technical depth across
              software engineering, cloud infrastructure, artificial
              intelligence, and cybersecurity. I enjoy building systems from
              the ground up, understanding how they work underneath, and
              turning ideas into working products.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              My long-term goal is to work on technically challenging
              products and infrastructure where software, cloud systems, and
              intelligent technologies come together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-6 max-w-xl text-zinc-400">
            Interested in discussing technology, collaborating on a
            project, or exploring opportunities?
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Email Me
            </a>

            <a
              href="https://github.com/joshujuFTX"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-7 py-3 text-center text-sm font-medium transition hover:border-zinc-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-zinc-600 sm:flex-row">
          <span>© 2026 Joshua Uju</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}