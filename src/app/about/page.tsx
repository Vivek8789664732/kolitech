
export default function About() {
  const teamSplit = [
    { role: "Core Systems Developers", count: 7, focus: "Go APIs, NestJS nodes, PostgreSQL indexing, server configurations" },
    { role: "Quality Assurance Engineers", count: 2, focus: "Stress-testing concurrency limits, regression testing, API validation" },
    { role: "UI/UX Designer", count: 1, focus: "Data flow wireframes, layout blueprints, responsive designs" },
    { role: "Technical Product Manager", count: 1, focus: "Milestone management, client integration alignment" },
    { role: "Founder / Client Operations", count: 1, focus: "Initial scoping, project definitions, legal compliance" }
  ];

  return (
    <div className="w-full min-h-screen bg-alabaster text-charcoal py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Title */}
        <div className="border-b border-sand-border pb-8">
          <span className="font-mono text-xs text-amber-accent tracking-widest uppercase block">
            Studio Profile
          </span>
          <h1 className="font-serif text-4xl font-normal text-charcoal mt-2">
            The Kolitech Operating Studio
          </h1>
          <p className="font-sans text-xs text-muted-slate mt-2 max-w-md">
            We are an engineering-driven shop building custom software systems.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-6 font-sans text-xs text-muted-slate leading-relaxed">
            <h2 className="font-serif text-2xl text-charcoal font-medium tracking-wide uppercase">
              Custom Code vs Convergent Templates
            </h2>
            <p>
              We founded Kolitech because we noticed software development converging on identical template builders. Clients were paying bespoke fees for standard boilerplate templates that slowed down under real operational loads.
            </p>
            <p>
              Our studio operates under a simple guideline: we do not utilize drag-and-drop systems, we write native database queries, and we do not use third-party code templates. You own 100% of the repository we compile for you.
            </p>
            <p>
              Our engineering philosophy shapes our focus on data operations, database compression, and performance-first API codebases rather than marketing metrics.
            </p>

            <div className="border border-sand-border bg-sandstone/60 p-6 space-y-4 font-mono text-[10px] mt-8 rounded-xl">
              <span className="text-amber-accent block font-bold">OUR CORE PROTOCOLS:</span>
              <ul className="space-y-2 text-charcoal">
                <li>1. Every database index is checked manually before production deploy.</li>
                <li>2. System errors are displayed in clean technical terms—never vague placeholders.</li>
                <li>3. The engineers who write your code join the initial scoping calls directly.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar: Team Split */}
          <div className="lg:col-span-4 border border-sand-border bg-sandstone p-6 space-y-6 rounded-xl">
            <div>
              <span className="font-mono text-[10px] text-amber-accent tracking-wider uppercase block">
                Team Distribution
              </span>
              <div className="font-serif text-3xl font-medium text-charcoal mt-1">12 Personnel</div>
              <p className="font-sans text-[10px] text-muted-slate mt-1">
                A flat engineering structure with no bloated management tiers.
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs">
              {teamSplit.map((item, idx) => (
                <div key={idx} className="border-t border-sand-border/60 pt-3 first:border-0 first:pt-0">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-[10px] text-charcoal font-bold">{item.role}</span>
                    <span className="font-mono text-[10px] text-amber-accent font-bold">[{item.count}]</span>
                  </div>
                  <p className="text-[10px] text-muted-slate mt-1 leading-relaxed">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Studio parameters ledger */}
        <div className="border border-sand-border p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[9px] bg-sandstone/40 rounded-xl">
          <div>
            <span className="text-muted-slate block">DELIVERED SYSTEMS</span>
            <span className="text-charcoal font-bold">18 PRODUCTION UNITS</span>
          </div>
          <div>
            <span className="text-muted-slate block">AVERAGE P99 RESPONSE</span>
            <span className="text-charcoal font-bold">SUB-120MS</span>
          </div>
          <div>
            <span className="text-muted-slate block">RECONCILIATION SLA</span>
            <span className="text-amber-accent font-bold">SUB-200MS AVERAGE LATENCY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
