import Link from "next/link";
import Image from "next/image";

export default function WorkIndex() {
  const projects = [
    {
      code: "KT-01",
      slug: "finflow-core",
      client: "Finflow Core Integration",
      industry: "Trade Finance // Mumbai",
      duration: "12 Weeks",
      outcome: "Report latency: 14m &rarr; 3.8s",
      stack: "Next.js 14, NestJS, Postgres, Redis",
      image: "/images/case_study_finflow.jpg",
      summary: "Migrated a legacy php report engine to next.js/nestjs web layers, solving query lockups and concurrency blocks."
    },
    {
      code: "KT-02",
      slug: "edustack-lms",
      client: "Edustack Learning Platform",
      industry: "Education Provider // Singapore",
      duration: "11 Weeks",
      outcome: "Manual invoice work: 240h &rarr; 0h",
      stack: "React, Node.js, AWS Lambda, Postgres",
      image: "/images/case_study_edustack.jpg",
      summary: "Integrated automatic student attendance scan logs and a wallet module with ledger tracking for 40 educational facilities."
    },
    {
      code: "KT-03",
      slug: "logitrack-api",
      client: "LogiTrack Tracker APIs",
      industry: "Third-Party Logistics // Ahmedabad",
      duration: "9 Weeks",
      outcome: "API failure rate: 35% &rarr; 0.02%",
      stack: "Go, FastAPI, PostgreSQL, TimescaleDB",
      image: "/images/case_study_logitrack.jpg",
      summary: "Optimized route tracking queries and deployed TimescaleDB partition tables to prevent data store partition crash."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-obsidian text-platinum py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Title */}
        <div className="border-b border-zinc-border pb-8">
          <span className="font-mono text-xs text-gold-accent tracking-widest uppercase block">
            // MASTER_DIRECTORY
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white mt-2">
            Completed Technical Systems
          </h1>
          <p className="font-sans text-xs text-steel mt-2 max-w-md">
            A chronological list of custom codebases delivered. We maintain no NDAs that block sharing performance outcomes and system post-mortems.
          </p>
        </div>

        {/* Technical Ledger Rows */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-zinc-border/50 pb-12 last:border-0"
            >
              {/* Image Column */}
              <div className="lg:col-span-4 relative aspect-[3/2] w-full overflow-hidden border border-zinc-border group-hover:border-gold-accent transition-colors duration-300 bg-graphite">
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Data Column */}
              <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  {/* Status Strip */}
                  <div className="flex flex-wrap items-center gap-4 font-mono text-[10px]">
                    <span className="bg-[#18181B] border border-zinc-border text-steel px-2 py-0.5">
                      CODE: {project.code}
                    </span>
                    <span className="text-gold-accent font-bold">
                      {project.industry}
                    </span>
                    <span className="text-zinc-500">
                      DURATION: {project.duration}
                    </span>
                  </div>

                  {/* Client title */}
                  <h2 className="font-display text-2xl font-bold text-white group-hover:text-gold-accent transition-colors duration-200">
                    {project.client}
                  </h2>

                  {/* Summary */}
                  <p className="font-sans text-xs text-steel max-w-xl leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Outcome block */}
                  <div className="border-l-2 border-emerald-500 pl-4 bg-emerald-500/5 py-2 inline-block">
                    <span className="font-mono text-[9px] text-zinc-500 block">MEASURABLE OUTCOME</span>
                    <span className="font-mono text-xs font-bold text-emerald-400" dangerouslySetInnerHTML={{ __html: project.outcome }}></span>
                  </div>
                </div>

                {/* Tech tag list & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-border/40">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(", ").map((tech) => (
                      <span key={tech} className="font-mono text-[9px] text-zinc-500 bg-[#18181B] px-2 py-0.5 border border-zinc-border/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-mono text-xs text-white hover:text-gold-accent flex items-center gap-2 group cursor-pointer"
                  >
                    INSPECT_CODEBASE_PARAMS_
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
