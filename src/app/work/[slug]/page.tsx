import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the technical database of our case studies
const CASE_STUDIES: Record<
  string,
  {
    code: string;
    title: string;
    client: string;
    location: string;
    duration: string;
    metric: string;
    stack: string[];
    image: string;
    legacy: string;
    solution: string;
    whatWentWrong: string;
    flowChart: string;
    sections: { heading: string; body: string }[];
  }
> = {
  "finflow-core": {
    code: "KT-01",
    title: "Trade Finance Core Engine Migration",
    client: "Trade Finance Brokerage",
    location: "Mumbai, India",
    duration: "12 Weeks",
    metric: "Latency: 14.2m -> 3.8s // Capacity: 50 -> 8,000 req/sec",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Docker"],
    image: "/images/case_study_finflow.jpg",
    legacy: "Legacy PHP 7.4 setup running single-thread SQL commands that locked core tables during transaction peaks, causing compliance report requests to timeout or hang for 14+ minutes.",
    solution: "A decoupled architecture separating user dashboard views from back-end transaction operations. We deployed a NestJS gateway and tuned PostgreSQL index mappings for high concurrent read operations.",
    whatWentWrong: "During load tests in Week 9, the Redis cache cluster locked up due to an aggressive session token TTL policy, dropping active user sessions. We halted features for 48 hours to rewrite the session validation layer with secure database fallbacks and strict circuit breakers.",
    flowChart: `
[ Client Dashboard (Next.js) ]
            |
            |  (Rest API / HTTPS)
            v
[ NestJS Core Gateway Node ]
            |
            +------------+------------+
            | (Read Fallback)         | (Cache Lock Verification)
            v                         v
[ PostgreSQL Database ]     [ Redis Cache Store ]
  (Tuned Index Tables)        (Automatic TTL Pruning)
    `,
    sections: [
      {
        heading: "01 // THE SYSTEM BLOCK",
        body: "The client ran transaction reconciliations using cron jobs. When trade volume surged, the database encountered locks on the ledger tables. Compliance officers sat idle waiting for 14-minute exports which frequently crashed."
      },
      {
        heading: "02 // STRUCTURAL REBUILD",
        body: "We rewrote the transaction scheduler into a decoupled query pipeline. By separating operational transaction records from compliance reporting schemas, we eliminated DB table contention."
      },
      {
        heading: "03 // METRIC VALIDATION",
        body: "Production logs show report latency now averages 3.8 seconds, even during peak trading windows. Concurrent transaction handling capacity grew 160x without database CPU throttling."
      }
    ]
  },
  "edustack-lms": {
    code: "KT-02",
    title: "Attendance & Ledger Platform Integration",
    client: "Edustack Holdings",
    location: "Singapore",
    duration: "11 Weeks",
    metric: "Manual Invoice Work: 240h -> 0h // Zero Error Rates",
    stack: ["React", "Node.js", "AWS Lambda", "PostgreSQL", "Serverless"],
    image: "/images/case_study_edustack.jpg",
    legacy: "Manual paper attendance logging with monthly spreadsheet reconciliation across 40 learning centres. This took approximately six hours per centre, amounting to 240 total hours of staff latency every month.",
    solution: "A centralized Serverless application connecting automated attendance check-ins directly with account ledgers. Invoices are generated automatically at the end of each session.",
    whatWentWrong: "The cashout approval flow failed its initial audit because of edge-case transitions when users requested refunds while wallets were undergoing reconciliation. We had to rewrite the wallet state machine three times to enforce double-entry audit rules.",
    flowChart: `
[ 40x Learning Center Terminals ]
            |
            |  (Direct Lambda Triggers)
            v
[ AWS API Gateway Service ]
            |
            v
[ AWS Lambda Functions ]
            |
    +-------+-------+
    |               |
    v               v
[ Postgres DB ]   [ Ledger State Machine ]
  (Scan Logs)       (3x Rewrite Audit Gate)
    `,
    sections: [
      {
        heading: "01 // MANUAL INEFFICIENCY",
        body: "Center operations relied on printouts to track attendance. Lost sheets caused invoice errors, leading to parent complaints and manual calculation reviews."
      },
      {
        heading: "02 // DOUBLE-ENTRY INTEGRITY",
        body: "The new module maps every scan directly to ledger entries. A parent wallet cannot execute balance transfers without ledger approval, guaranteeing audit compliance."
      },
      {
        heading: "03 // OPERATIONAL EFFICIENCY",
        body: "Finance staff went from executing 240 hours of manual reconciliation monthly to zero hours. Invoices compile automatically in the background at midnight on the 28th."
      }
    ]
  },
  "logitrack-api": {
    code: "KT-03",
    title: "High-Throughput Route Tracking APIs",
    client: "LogiTrack Logistics",
    location: "Ahmedabad, India",
    duration: "9 Weeks",
    metric: "API Failure Rate: 35% -> 0.02% // Latency: 4.2s -> 120ms",
    stack: ["Go", "FastAPI", "PostgreSQL", "TimescaleDB", "Timescale Cloud"],
    image: "/images/case_study_logitrack.jpg",
    legacy: "Real-time truck coordinates API endpoints were failing at a 35% rate during transit peaks because the DB query architecture fetched coordinates in nested loops, choking connection pools.",
    solution: "Migrated coordinates telemetry logging to a TimescaleDB time-series database. Deployed a lightweight tracking microservice in Go to process coordinates packets asynchronously.",
    whatWentWrong: "In Week 6, TimescaleDB partitions filled the primary storage disk during stress testing. We paused feature work to implement automated chunk compression policies and partition cleaning schedules.",
    flowChart: `
[ GPS Telemetry Hardware ]
            |
            |  (Coordinates Packets)
            v
[ Go Tracking Microservice ]
            |
            |  (Bulk Insert Query)
            v
[ TimescaleDB Partition Tables ]
            |
    +-------+-------+
    | (Compression) | (Partition Pruning)
    v               v
[ Compressed Disk ] [ Historical Clean Logs ]
    `,
    sections: [
      {
        heading: "01 // Telemetry Bottleneck",
        body: "Logistics hardware sent position coordinates every 10 seconds. The relational DB couldn't handle bulk inserts while generating routes, collapsing the service during peak transit hours."
      },
      {
        heading: "02 // Time-Series Migration",
        body: "We replaced the coordinates table with TimescaleDB partition tables. This allowed position records to be written sequentially in time blocks without global indexing latency."
      },
      {
        heading: "03 // Infrastructure Stability",
        body: "P99 API response latencies dropped from 4.2 seconds to 120ms. The system has run stably at 0.02% error rate since deployment, processing 14 million telemetry points daily."
      }
    ]
  }
};

type Params = Promise<{ slug: string }>;

export default async function WorkDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-obsidian text-platinum py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Navigation Back */}
        <div>
          <Link href="/work" className="font-mono text-xs text-steel hover:text-gold-accent flex items-center gap-2 cursor-pointer">
            &larr; BACK_TO_DIRECTORY_
          </Link>
        </div>

        {/* Hero image and title block */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-border pb-4 text-xs font-mono text-steel">
            <span>PROJECT: {project.code}</span>
            <span>STATUS: STABLE_RELEASE</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <div className="relative aspect-[21/9] w-full overflow-hidden border border-zinc-border bg-graphite">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Spec Sheet */}
          <div className="lg:col-span-4 border border-zinc-border bg-graphite p-6 space-y-6">
            <div className="font-mono text-xs text-gold-accent tracking-widest uppercase pb-2 border-b border-zinc-border">
              // SPECIFICATION_LEDGER
            </div>

            <div className="space-y-4 font-sans text-xs">
              <div>
                <span className="font-mono text-[9px] text-zinc-500 block">CLIENT</span>
                <span className="text-white font-bold">{project.client}</span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-zinc-500 block">LOCATION</span>
                <span className="text-white">{project.location}</span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-zinc-500 block">TIMELINE</span>
                <span className="text-white">{project.duration}</span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-zinc-500 block">PRIMARY STACK</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-[9px] bg-obsidian px-1.5 py-0.5 border border-zinc-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-zinc-border/40 pt-4">
                <span className="font-mono text-[9px] text-emerald-500 block">VERIFIED METRIC OUTCOME</span>
                <span className="text-emerald-400 font-mono font-bold leading-relaxed">{project.metric}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Diagrams */}
          <div className="lg:col-span-8 space-y-10">
            {/* Legacy vs Rebuild */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase">// LEGACY_BLOCK</h3>
                <p className="font-sans text-xs text-steel leading-relaxed">{project.legacy}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-white uppercase">// REBUILT_STATE</h3>
                <p className="font-sans text-xs text-steel leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* ASCII Flow Chart */}
            <div className="border border-zinc-border bg-obsidian p-6 space-y-4">
              <span className="font-mono text-[10px] text-zinc-500 block">// ENGINE_FLOW_DIAGRAM</span>
              <pre className="font-mono text-[10px] text-zinc-400 overflow-x-auto leading-relaxed select-none">
                {project.flowChart}
              </pre>
            </div>

            {/* Narrative sections */}
            <div className="space-y-8">
              {project.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-white">{section.heading}</h3>
                  <p className="font-sans text-xs text-steel leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            {/* Post Mortem Warning block */}
            <div className="border-l-2 border-gold-accent pl-6 py-4 bg-[#E2B875]/5 space-y-2">
              <h3 className="font-mono text-xs font-bold text-gold-accent uppercase tracking-wider">
                // SYSTEM_FAIL_REPORT (WEEK 6-9 ANALYSIS)
              </h3>
              <p className="font-sans text-xs text-steel leading-relaxed">
                {project.whatWentWrong}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="border-t border-zinc-border pt-12 flex justify-between items-center">
          <Link href="/work" className="font-mono text-xs text-steel hover:text-white cursor-pointer">
            &larr; BACK_TO_DIRECTORY_
          </Link>
          <Link href="/contact" className="border border-gold-accent bg-gold-accent text-obsidian px-6 py-2.5 font-mono text-xs font-bold hover:bg-transparent hover:text-gold-accent transition-colors cursor-pointer">
            ESTIMATE_SIMILAR_PROJECT_ &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
