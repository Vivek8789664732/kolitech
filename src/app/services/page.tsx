import Link from "next/link";

export default function Services() {
  const capabilities = [
    {
      id: "C-01",
      title: "Transaction Backends & Route APIs",
      deliverable: "High-concurrency API server with integrated request throttling, failovers, and client authorization headers.",
      stack: "Go (Golang), FastAPI, NestJS, PM2, Docker",
      deliveryTime: "6 to 8 Weeks",
      priceRange: "$15,000 - $30,000"
    },
    {
      id: "C-02",
      title: "Database Performance & Ledgers",
      deliverable: "Custom relational databases or telemetry clusters. Fully indexed tables, partition structures, and automatic compression scripts.",
      stack: "PostgreSQL, TimescaleDB, Redis, Timescale Cloud",
      deliveryTime: "4 to 6 Weeks",
      priceRange: "$12,000 - $25,000"
    },
    {
      id: "C-03",
      title: "Next.js Web Platforms & Portals",
      deliverable: "Dedicated web interfaces with secure layouts, server side fetching rules, TypeScript schema integrity, and fully responsive layouts.",
      stack: "Next.js 14/15/16, Tailwind CSS, TypeScript",
      deliveryTime: "6 to 10 Weeks",
      priceRange: "$18,000 - $40,000"
    },
    {
      id: "C-04",
      title: "Data Pipeline & Sync Systems",
      deliverable: "Automated cron workers or messaging queues that import legacy spreadsheets, sync inventory registers, or migrate relational assets.",
      stack: "RabbitMQ, BullMQ, Redis, Node.js scripts",
      deliveryTime: "3 to 5 Weeks",
      priceRange: "$10,000 - $20,000"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-obsidian text-platinum py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Title */}
        <div className="border-b border-zinc-border pb-8">
          <span className="font-mono text-xs text-gold-accent tracking-widest uppercase block">
            // SERVICE_LEDGER
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white mt-2">
            Engineering Capabilities & Pricing
          </h1>
          <p className="font-sans text-xs text-steel mt-2 max-w-md">
            We price strictly by work scope and delivery timeline. We maintain no retainer models or vague monthly billings.
          </p>
        </div>

        {/* Capabilities spec blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="border border-zinc-border bg-graphite p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-steel">
                  <span>CAPABILITY: {cap.id}</span>
                  <span className="text-gold-accent font-bold">ESTIMATED</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                  {cap.title}
                </h3>
                <p className="font-sans text-xs text-steel leading-relaxed">
                  <span className="font-mono text-[9px] text-zinc-500 block">// WHAT WE DELIVER:</span>
                  {cap.deliverable}
                </p>
                <div className="font-mono text-[10px] text-zinc-400">
                  <span className="text-zinc-500">// SUGGESTED STACK:</span> {cap.stack}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-border/40 grid grid-cols-2 gap-4 font-mono text-[10px]">
                <div>
                  <span className="text-zinc-500 block">DELIVERY SCHEDULE</span>
                  <span className="text-white font-bold">{cap.deliveryTime}</span>
                </div>
                <div>
                  <span className="text-gold-accent block font-bold">COST ESTIMATE</span>
                  <span className="text-white font-bold">{cap.priceRange}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Dynamics Explanation */}
        <div className="border border-zinc-border bg-[#0E0E10] p-8 space-y-6">
          <div className="font-mono text-xs text-gold-accent tracking-widest uppercase">
            // PRICING_POSTURE_BREAKDOWN
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-display text-base font-bold text-white">// 01_PROJECT_MINIMUMS</h4>
              <p className="font-sans text-xs text-steel leading-relaxed">
                Our minimum engagement value is $15,000. We do not take on simple website edits or quick layout modifications unless they are part of a broader codebase migration.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-display text-base font-bold text-white">// 02_VARIABLES_INFLATING_COST</h4>
              <p className="font-sans text-xs text-steel leading-relaxed">
                Integrating poorly documented third-party vendor APIs, legacy databases requiring complex manual cleanses, and high-availability clustered deployments.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-display text-base font-bold text-white">// 03_INCLUDED_IN_ALL_PROJECTS</h4>
              <p className="font-sans text-xs text-steel leading-relaxed">
                Full repository transfer, 60 days of post-release defect support, automated build verify scripts, and detailed system documentation charts.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border border-zinc-border bg-graphite p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1">
            <h3 className="font-display text-lg font-bold text-white">// PREPARE_A_FORMAL_PROJECT_ESTIMATE</h3>
            <p className="font-sans text-xs text-steel">
              We review API specs and databases before quoting. Zero upfront sales commitments.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-gold-accent border border-gold-accent text-obsidian px-6 py-3 font-mono text-xs font-bold hover:bg-transparent hover:text-gold-accent transition-colors duration-200 cursor-pointer"
          >
            REQUEST FIXED QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
}
