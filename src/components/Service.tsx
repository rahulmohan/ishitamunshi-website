const journals = [
  "Computers in Human Behavior: Artificial Humans",
  "Marriage and Family Review",
  "Journal of Adolescence",
  "Psychology of Violence",
  "American Journal of Sexuality Education",
];

const serviceRoles = [
  {
    title: "Graduate Faculty Meeting Representative",
    institution: "Wayne State University",
    period: "2026–2027",
  },
  {
    title: "Facilitator",
    institution: "Merrill Palmer Skillman Institute Giant Step for Teen Conference",
    period: "2025",
  },
];

export default function Service() {
  return (
    <section id="service" aria-labelledby="service-heading" className="py-20 bg-white relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent] block mb-4">
            Academic & Community
          </span>
          <h2 id="service-heading" className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-medium gradient-text">
            Service
          </h2>
        </div>

        <div className="grid gap-6">
          <article className="group p-6 sm:p-8 border border-[--border] hover:border-[--accent] transition-all duration-300 hover:shadow-lg">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium mb-4 group-hover:text-[--accent] transition-colors">
              Post-hoc Review Service to Scientific Journals
            </h3>
            <ul className="list-disc pl-5 space-y-2 font-[family-name:var(--font-inter)] text-sm text-[--muted] leading-relaxed">
              {journals.map((journal) => (
                <li key={journal}>{journal}</li>
              ))}
            </ul>
          </article>

          {serviceRoles.map((role) => (
            <article key={role.title} className="group p-6 sm:p-8 border border-[--border] hover:border-[--accent] transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium group-hover:text-[--accent] transition-colors">
                  {role.title}
                </h3>
                <span className="font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent] shrink-0">
                  {role.period}
                </span>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] leading-relaxed">
                {role.institution}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
