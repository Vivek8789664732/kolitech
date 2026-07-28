import Link from "next/link";

export default function Terms() {
  const lastUpdated = "July 28, 2026";

  const sections = [
    { id: "scope", title: "1. Scope of Services" },
    { id: "responsibility", title: "2. Client Responsibilities" },
    { id: "payments", title: "3. Milestone Payments & Invoicing" },
    { id: "ip-rights", title: "4. Intellectual Property Transfer" },
    { id: "portfolio", title: "5. Portfolio & Marketing Rights" },
    { id: "warranty", title: "6. Defect Warranty Period" },
    { id: "liability", title: "7. Exclusions & Liability Caps" },
    { id: "disputes", title: "8. Governing Law & Jurisdiction" }
  ];

  return (
    <div className="w-full min-h-screen bg-obsidian text-platinum py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Block */}
        <div className="border-b border-zinc-border pb-6 space-y-2">
          <span className="font-mono text-xs text-gold-accent tracking-widest uppercase block">// CONTRACTUAL_PARAMETERS</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
          <div className="font-mono text-[10px] text-zinc-500">LAST UPDATED: {lastUpdated} // DRAFT VERSION</div>
        </div>

        {/* Sidebar + Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Jump-To Navigation (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 border border-zinc-border bg-graphite p-6">
            <div className="font-mono text-xs text-gold-accent uppercase tracking-wider border-b border-zinc-border pb-2 mb-4">
              // SECTION_INDEX
            </div>
            <ul className="space-y-3 font-mono text-[11px] text-steel">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <Link href={`#${sec.id}`} className="hover:text-gold-accent transition-colors">
                    {sec.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Legal Content */}
          <article className="lg:col-span-8 space-y-10 font-sans text-xs text-steel leading-relaxed">
            
            {/* Section 1 */}
            <section id="scope" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 1. Scope of Services</h2>
              <p>
                Kolitech (&quot;Company&quot;) provides custom software engineering services. Every project requires a signed Project Proposal detailing features, deliverables, and estimated weeks. Any work outside the written Project Proposal constitutes a scope change and will be invoiced separately under a revised proposal.
              </p>
            </section>

            {/* Section 2 */}
            <section id="responsibility" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 2. Client Responsibilities</h2>
              <p>
                Client must supply timely feedback, repository access keys, database credential files, and assets required for integration. We budget up to five business days for Client reviews; review delays extending beyond this gate will extend delivery milestones by an equal amount of calendar time.
              </p>
            </section>

            {/* Section 3 */}
            <section id="payments" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 3. Milestone Payments & Invoicing</h2>
              <p>
                Projects are billed milestone-wise. Standard terms require an advance deposit before project initialization. Subsequent payments are due within seven business days of milestone completion. Late payments exceeding 15 calendar days will halt developer environments and pipeline runs until balances clear.
              </p>
            </section>

            {/* Section 4 */}
            <section id="ip-rights" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 4. Intellectual Property Transfer</h2>
              <p>
                All intellectual property, code repositories, schema files, and customized assets compiled for the Client transfer to the Client **only upon full settlement of all outstanding invoices**. Pre-existing code assets, reusable utilities, and script templates compiled by Kolitech prior to the project remain the property of the Company, but Client is granted a perpetual, royalty-free license to use them inside their custom system.
              </p>
            </section>

            {/* Section 5 */}
            <section id="portfolio" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 5. Portfolio & Marketing Rights</h2>
              <p>
                Unless Client opts out in writing, Company reserves the right to list Client&apos;s name, project metrics, and post-mortems publicly in the studio catalog and website case studies. We will respect all NDAs regarding proprietary data, but retain the right to showcase structural outcomes (e.g. latency metrics).
              </p>
            </section>

            {/* Section 6 */}
            <section id="warranty" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 6. Defect Warranty Period</h2>
              <p>
                We provide a 60-day defect warranty period starting from production launch. We will resolve system bugs and database execution failures that deviate from the initial Project Proposal specifications at no additional cost. This warranty excludes modifications made by third parties, outages of external cloud services, or defects originating from user-supplied assets.
              </p>
            </section>

            {/* Section 7 */}
            <section id="liability" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 7. Exclusions & Liability Caps</h2>
              <p>
                Kolitech is not responsible for host server outages, domain register lapses, or cloud API changes (e.g. AWS pricing shifts). **Our maximum liability for any defect, delay, or damage is capped at the total fee amount paid by the Client to Kolitech for the specific project.**
              </p>
            </section>

            {/* Section 8 */}
            <section id="disputes" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 8. Governing Law & Jurisdiction</h2>
              <p>
                These terms are governed by the laws of India. Any legal dispute or breach claim will be resolved under the exclusive jurisdiction of the courts of Surat, Gujarat, India.
              </p>
            </section>

            {/* Action Flags */}
            <div className="border border-zinc-border bg-[#0E0E10] p-6 space-y-4 font-mono text-[10px]">
              <div className="text-gold-accent font-bold">// ACTION REQUIRED BY CLIENT LEGAL COUNSEL:</div>
              <ul className="space-y-2 text-zinc-400">
                <li>1. [ACTION NEEDED: Verify that Surat, Gujarat is the correct legal venue for client dispute filings.]</li>
                <li>2. [ACTION NEEDED: Review milestone payment definitions and late payment fee parameters for local compliance.]</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
