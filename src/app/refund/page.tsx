import Link from "next/link";

export default function Refund() {
  const lastUpdated = "July 28, 2026";

  const sections = [
    { id: "nature", title: "1. Nature of Custom Software" },
    { id: "deposit", title: "2. Advance Deposit Policies" },
    { id: "milestones", title: "3. Milestone Refund Ledger" },
    { id: "exclusions", title: "4. Explicit Fee Exclusions" },
    { id: "process", title: "5. Refund Request Process" },
    { id: "timelines", title: "6. Processing Timelines" }
  ];

  return (
    <div className="w-full min-h-screen bg-obsidian text-platinum py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Block */}
        <div className="border-b border-zinc-border pb-6 space-y-2">
          <span className="font-mono text-xs text-gold-accent tracking-widest uppercase block">// TRANSACTION_REVERSAL_PROTOCOL</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">Refund Policy</h1>
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
            <section id="nature" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 1. Nature of Custom Software</h2>
              <p>
                Because Kolitech delivers custom software development, systems integration, and database tuning services, our work products are delivered in stages and are tailored specifically to Client infrastructure. **Therefore, completed milestones are not returnable, and delivered code repositories are non-refundable.**
              </p>
            </section>

            {/* Section 2 */}
            <section id="deposit" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 2. Advance Deposit Policies</h2>
              <p>
                An advance deposit is required to initialize coding assets and allocate developer hours. If Client cancels the project in writing prior to any research, schema modeling, or repository creation, we will return the full deposit minus a 5% gateway processing fee. Once project scoping meetings occur or initial directories are initialized, the advance deposit becomes fully non-refundable.
              </p>
            </section>

            {/* Section 3 */}
            <section id="milestones" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 3. Milestone Refund Ledger</h2>
              <p>
                Project deliverables are divided into milestones. If a project is cancelled mid-development by either party, settlement is determined as follows:
              </p>
              <table className="w-full text-left border-collapse border border-zinc-border mt-2 font-mono text-[10px]">
                <thead>
                  <tr className="bg-graphite text-white border-b border-zinc-border">
                    <th className="p-2 border-r border-zinc-border">PROJECT STATUS</th>
                    <th className="p-2 border-r border-zinc-border">REFUND ELIGIBILITY</th>
                    <th className="p-2">TREATMENT OF CODE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">Cancelled before coding starts</td>
                    <td className="p-2 border-r border-zinc-border/40">100% minus 5% processing fee</td>
                    <td className="p-2">No repository transfer</td>
                  </tr>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">Cancelled mid-milestone</td>
                    <td className="p-2 border-r border-zinc-border/40">Pro-rata refund on incomplete hours</td>
                    <td className="p-2">Transfer of draft assets on cleared hours</td>
                  </tr>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">Completed milestones</td>
                    <td className="p-2 border-r border-zinc-border/40">0% (Non-refundable)</td>
                    <td className="p-2">Full repository ownership transferred</td>
                  </tr>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">Company-initiated cancellation</td>
                    <td className="p-2 border-r border-zinc-border/40">100% refund of undelivered milestones</td>
                    <td className="p-2">Transfer of all incomplete drafts</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Section 4 */}
            <section id="exclusions" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 4. Explicit Fee Exclusions</h2>
              <p>
                The following costs are paid to third-party vendors and are **never** refundable under any circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cloud database costs and server hosting subscriptions (e.g. AWS, Vercel)</li>
                <li>Purchased domains or SSL certificates</li>
                <li>Third-party API key consumption or software license fees</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="process" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 5. Refund Request Process</h2>
              <p>
                To request a project cancellation and balance audit, email: <a href="mailto:support@kolitech.in" className="text-gold-accent hover:underline">support@kolitech.in</a>. You must include your Project Code, Name of Legal Entity, date of the last active milestone invoice, and a detailed reason for cancellation.
              </p>
            </section>

            {/* Section 6 */}
            <section id="timelines" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 6. Processing Timelines</h2>
              <p>
                We review refund requests and compile our work log reports within seven business days of receipt. Once a refund amount is approved in writing by both parties, funds will be returned to the original payment source (Razorpay, bank wire, or credit card) within 10 to 15 business days, subject to payment processor schedules.
              </p>
            </section>

            {/* Action Flags */}
            <div className="border border-zinc-border bg-[#0E0E10] p-6 space-y-4 font-mono text-[10px]">
              <div className="text-gold-accent font-bold">// ACTION REQUIRED BY CLIENT LEGAL COUNSEL:</div>
              <ul className="space-y-2 text-zinc-400">
                <li>1. [ACTION NEEDED: Ensure this refund policy link is configured in Razorpay or Cashfree merchant panels during onboarding.]</li>
                <li>2. [ACTION NEEDED: Align milestone definitions exactly with the project contract definitions prior to client signature.]</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
