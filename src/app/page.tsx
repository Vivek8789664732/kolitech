import Link from "next/link";
import CodeWindow from "./components/CodeWindow";

export default function Home() {
  const caseStudies = [
    {
      code: "KT-01. FINFLOW",
      client: "Trade finance brokerage platform",
      challenge: "Legacy PHP system took 14 minutes to generate compliance reports; locked up under concurrent load.",
      stack: "Next.js 14, NestJS, PostgreSQL, Redis",
      metric: "Report generation reduced to 3.8 seconds. Peak capacity increased to 8,000 requests/sec.",
      constraint: "Redis cache lockup in week 9 required rebuilding the session layer with DB fallbacks.",
      slug: "finflow-core"
    },
    {
      code: "KT-02. EDUSTACK",
      client: "Edtech learning platform",
      challenge: "Paper attendance and manual invoice reconciliation across 40 learning centres took 240 hours/month.",
      stack: "React, Node.js, AWS Lambda, PostgreSQL",
      metric: "Manual reconciliation time reduced to zero. Student attendance tracked via secure scan logs.",
      constraint: "Wallet ledger cashout flow took three compliance rewrites to pass monetary audit.",
      slug: "edustack-lms"
    },
    {
      code: "KT-03. LOGITRACK",
      client: "Third-party logistics network",
      challenge: "Real-time tracker API had 35% error rate during peaks due to unoptimized query loops.",
      stack: "Go, FastAPI, PostgreSQL, TimescaleDB",
      metric: "API failure rate reduced to 0.02%. P99 query latency decreased to 120ms.",
      constraint: "Disk space limits forced a halt in week 6 to implement TimescaleDB automated compression.",
      slug: "logitrack-api"
    }
  ];

  return (
    <div className="w-full bg-alabaster text-charcoal min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-sand-border bg-sandstone/40 py-24 px-6 overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 technical-grid opacity-60 pointer-events-none"></div>

        <div className="mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left: Thesis */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs text-amber-accent tracking-widest uppercase">
              Studio Statement • ED-2026
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-charcoal leading-tight">
              We build custom software systems for operations that have outgrown templates.
            </h1>
            <p className="font-sans text-sm md:text-base text-muted-slate max-w-xl leading-relaxed">
              We do not use cookie-cutter builders. We write bespoke Next.js interfaces, optimized Go/NestJS backends, and precise TimescaleDB structures for companies requiring high reliability and performance.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="border border-amber-accent bg-amber-accent text-alabaster px-6 py-3 font-mono text-xs font-bold text-center hover:bg-transparent hover:text-charcoal hover:border-charcoal transition-colors duration-200 cursor-pointer rounded-lg shadow-sm"
              >
                BOOK A 30-MIN CALL
              </Link>
              <Link
                href="/work"
                className="border border-sand-border bg-alabaster text-charcoal px-6 py-3 font-mono text-xs text-center hover:border-charcoal transition-colors duration-200 cursor-pointer rounded-lg shadow-sm"
              >
                VIEW CASE STUDIES
              </Link>
            </div>
          </div>

          {/* Hero Right: CodeWindow */}
          <div className="lg:col-span-5">
            <CodeWindow />
          </div>
        </div>
      </section>

      {/* 2. CASE STUDIES SUMMARY */}
      <section className="py-24 px-6 border-b border-sand-border bg-alabaster">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-amber-accent tracking-widest uppercase">
                Completed Work
              </span>
              <h2 className="font-serif text-3xl font-normal text-charcoal mt-1">
                Engineered Systems & Real Metrics
              </h2>
            </div>
            <Link
              href="/work"
              className="font-mono text-xs text-muted-slate hover:text-amber-accent flex items-center gap-2 group transition-colors cursor-pointer"
            >
              BROWSE ALL CASE STUDIES
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Case Studies Datasheet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((project, idx) => (
              <div
                key={idx}
                className="border border-sand-border bg-sandstone/70 p-6 flex flex-col justify-between space-y-6 hover:border-amber-accent/50 transition-colors duration-300 rounded-xl glow-subtle"
              >
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-muted-slate">
                    <span>{project.code}</span>
                    <span className="text-amber-accent font-bold">RELEASED</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal font-medium">
                    {project.client}
                  </h3>
                  <div className="font-mono text-[9px] text-muted-slate bg-alabaster px-2 py-0.5 border border-sand-border/60 inline-block rounded">
                    STACK: {project.stack}
                  </div>
                </div>

                {/* Challenge & Outcome */}
                <div className="space-y-3 text-xs leading-relaxed">
                  <p className="text-muted-slate">
                    <span className="text-charcoal font-mono text-[9px] block font-bold">CHALLENGE:</span>
                    {project.challenge}
                  </p>
                  <p className="text-emerald-700">
                    <span className="text-charcoal font-mono text-[9px] block font-bold">OUTCOME:</span>
                    {project.metric}
                  </p>
                  <p className="text-amber-700 italic">
                    <span className="text-charcoal font-mono text-[9px] block font-bold">CONSTRAINT & RESOLUTION:</span>
                    {project.constraint}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-sand-border/60">
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-mono text-xs text-charcoal hover:text-amber-accent flex items-center justify-between cursor-pointer"
                  >
                    READ TECHNICAL LOG
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK (Operational Milestones) */}
      <section className="py-24 px-6 border-b border-sand-border bg-sandstone/20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div>
            <span className="font-mono text-xs text-amber-accent tracking-widest uppercase">
              Operations Protocol
            </span>
            <h2 className="font-serif text-3xl font-normal text-charcoal mt-1">
              Twelve-Week Development Ledger
            </h2>
            <p className="font-sans text-xs text-muted-slate max-w-lg mt-2">
              We do not estimate vaguely. Projects are managed through fixed timeline gates with verifiable technical outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="border border-sand-border p-6 bg-sandstone/60 space-y-4 rounded-xl">
              <div className="font-mono text-2xl font-bold text-amber-accent">W1-2</div>
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">Database Schema & Modeling</h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                We draw data flow maps and compile JSON schema structures. We map all entity relationships and verify query indexes before writing any codebase logic.
              </p>
            </div>

            <div className="border border-sand-border p-6 bg-sandstone/60 space-y-4 rounded-xl">
              <div className="font-mono text-2xl font-bold text-amber-accent">W3-7</div>
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">Engine Build & Core APIs</h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                We assemble the backend services, design endpoints, construct background task workers, and integrate central caching configurations.
              </p>
            </div>

            <div className="border border-sand-border p-6 bg-sandstone/60 space-y-4 rounded-xl">
              <div className="font-mono text-2xl font-bold text-amber-accent">W8-10</div>
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">Integrations & Edge Cases</h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                We hook up client UI layouts, execute third-party API mappings, handle authentication parameters, and resolve security protocols.
              </p>
            </div>

            <div className="border border-sand-border p-6 bg-sandstone/60 space-y-4 rounded-xl">
              <div className="font-mono text-2xl font-bold text-amber-accent">W11-12</div>
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">Rollout & Failover Tests</h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                We push to production staging environment, trigger database partition compression tests, enforce circuit breakers, and monitor real concurrent transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES (Grouped by deliverables) */}
      <section className="py-24 px-6 border-b border-sand-border bg-alabaster">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Title */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs text-amber-accent tracking-widest uppercase">
              What We Ship
            </span>
            <h2 className="font-serif text-3xl font-normal text-charcoal leading-snug">
              Specialized Engineering Outputs
            </h2>
            <p className="font-sans text-xs text-muted-slate leading-relaxed">
              We focus on performance metrics, clean database structures, and high load capacity. You own the code directly.
            </p>
          </div>

          {/* Right Capabilities Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-sand-border p-5 bg-sandstone/40 space-y-2 rounded-lg">
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">
                01. High-Throughput APIs
              </h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                Fast routers built using Go or Fastify. Native connection pooling, sub-150ms query responses, and client rate limiters standard.
              </p>
            </div>

            <div className="border border-sand-border p-5 bg-sandstone/40 space-y-2 rounded-lg">
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">
                02. Custom DB Layouts
              </h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                PostgreSQL index tuning, TimescaleDB partitions for telemetry/analytics, and Redis memory caches configured for sub-millisecond response rates.
              </p>
            </div>

            <div className="border border-sand-border p-5 bg-sandstone/40 space-y-2 rounded-lg">
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">
                03. Monorepo Web Apps
              </h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                Dedicated Next.js 14/15/16 App Router structures with optimized image loading, client-side caching, and rigid TypeScript verification.
              </p>
            </div>

            <div className="border border-sand-border p-5 bg-sandstone/40 space-y-2 rounded-lg">
              <h3 className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">
                04. Failover & CI/CD Logs
              </h3>
              <p className="font-sans text-xs text-muted-slate leading-relaxed">
                Automated GitHub workflows, build verifications, custom script runners, Docker setups, and cloud failovers to prevent outages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING POSTURE */}
      <section className="py-24 px-6 border-b border-sand-border bg-sandstone/10">
        <div className="mx-auto max-w-7xl">
          <div className="border border-sand-border bg-sandstone/80 p-8 md:p-12 relative overflow-hidden rounded-2xl glow-subtle">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs text-amber-accent tracking-widest uppercase block">
                  Estimation Criteria
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-normal text-charcoal tracking-tight">
                  Pricing ranges from 15k to 80k. We don&apos;t hide pricing.
                </h2>
                <p className="font-sans text-xs md:text-sm text-muted-slate leading-relaxed max-w-xl">
                  A custom transaction database with NestJS APIs takes about 11-12 weeks and lands near 25,000. Basic technical platforms start at 15,000. Comprehensive web integrations with high-volume SLAs scale to 80,000.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-[9px] text-muted-slate">
                  <div>
                    <span className="text-charcoal block font-bold">WHAT DRIVES COST UP:</span>
                    Number of external API integrations, legacy storage migrations, and high-availability backup clustering.
                  </div>
                  <div>
                    <span className="text-charcoal block font-bold">WHAT DRIVES COST DOWN:</span>
                    Clean existing databases, straightforward data structures, and predefined wireframes.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 border border-sand-border bg-alabaster p-6 space-y-4 flex flex-col justify-between rounded-xl">
                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-muted-slate uppercase">AVERAGE TIMELINE</div>
                  <div className="font-serif text-2xl font-bold text-charcoal">8 to 12 Weeks</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-muted-slate uppercase">CODEBASE DELIVERABLE</div>
                  <div className="font-serif text-lg font-bold text-amber-accent">100% Repository Transfer</div>
                </div>
                <Link
                  href="/contact"
                  className="w-full bg-charcoal text-alabaster border border-charcoal text-center py-2.5 font-mono text-[10px] tracking-wider hover:bg-transparent hover:text-charcoal transition-colors cursor-pointer rounded-lg"
                >
                  GET EXACT SHEET
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CONTACT CALL-TO-ACTION */}
      <section className="py-24 px-6 bg-alabaster text-center space-y-6">
        <span className="font-mono text-xs text-amber-accent tracking-widest uppercase block">
          Schedule Discovery
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-charcoal tracking-tight max-w-xl mx-auto leading-tight">
          Evaluate three vendors. Make sure we are one of them.
        </h2>
        <p className="font-sans text-xs md:text-sm text-muted-slate max-w-md mx-auto leading-relaxed">
          We will review your system layout and write a fixed-cost proposal. No sales funnels. Just engineers analyzing code parameters.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block bg-charcoal border border-charcoal text-alabaster px-8 py-4 font-mono text-xs font-bold hover:bg-transparent hover:text-charcoal transition-colors duration-200 cursor-pointer rounded-lg"
          >
            BOOK A 30-MIN CALL
          </Link>
        </div>
      </section>
    </div>
  );
}
