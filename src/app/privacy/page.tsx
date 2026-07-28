import Link from "next/link";

export default function Privacy() {
  const lastUpdated = "July 28, 2026";

  const sections = [
    { id: "dpdpa", title: "1. DPDP Act 2023 & GDPR Alignments" },
    { id: "collection", title: "2. Personal Data Collected" },
    { id: "processors", title: "3. Third-Party Data Processors" },
    { id: "retention", title: "4. Data Retention Limits" },
    { id: "rights", title: "5. User Rights & Data Erase" },
    { id: "cookies", title: "6. Cookies & Trackers Table" },
    { id: "grievance", title: "7. Grievance Redressal SLA" }
  ];

  return (
    <div className="w-full min-h-screen bg-obsidian text-platinum py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Block */}
        <div className="border-b border-zinc-border pb-6 space-y-2">
          <span className="font-mono text-xs text-gold-accent tracking-widest uppercase block">// PRIVACY_PROTOCOL</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
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
            <section id="dpdpa" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 1. DPDP Act 2023 & GDPR Alignments</h2>
              <p>
                Kolitech operates in accordance with India&apos;s Digital Personal Data Protection (DPDP) Act 2023. For visitors residing in the European Union (EU) or the United Kingdom (UK), our operations are designed to satisfy GDPR standards regarding legal bases for data collection and user rights.
              </p>
            </section>

            {/* Section 2 */}
            <section id="collection" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 2. Personal Data Collected</h2>
              <p>
                We only collect data that you input directly into our project form, send to us via email, or convey through our WhatsApp channels.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Founder/Client Name and Corporate identity parameters</li>
                <li>Email address and mobile contact numbers</li>
                <li>Legacy software specifications and project logs</li>
                <li>IP coordinates and browser user-agent tokens collected for server security logs</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="processors" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 3. Third-Party Data Processors</h2>
              <p>
                We route database components through secure third-party processors to maintain our services. We do not sell or trade user information.
              </p>
              <table className="w-full text-left border-collapse border border-zinc-border mt-2 font-mono text-[10px]">
                <thead>
                  <tr className="bg-graphite text-white border-b border-zinc-border">
                    <th className="p-2 border-r border-zinc-border">PROCESSOR</th>
                    <th className="p-2 border-r border-zinc-border">FUNCTION</th>
                    <th className="p-2">DATA SENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">Vercel Inc.</td>
                    <td className="p-2 border-r border-zinc-border/40">App Deployment Hosting</td>
                    <td className="p-2">Client network logs</td>
                  </tr>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">WhatsApp Ireland Ltd.</td>
                    <td className="p-2 border-r border-zinc-border/40">Client Communication API</td>
                    <td className="p-2">Mobile numbers, chat history</td>
                  </tr>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">Google Workspace</td>
                    <td className="p-2 border-r border-zinc-border/40">Corporate Email Management</td>
                    <td className="p-2">Emails, project scopes</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Section 4 */}
            <section id="retention" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 4. Data Retention Limits</h2>
              <p>
                We store project scoping logs and contract drafts for up to two years from the initial connection date. Inactive client databases are deleted after 180 days. Corporate financial data and GST billing ledgers are retained for seven years as required by Indian tax codes.
              </p>
            </section>

            {/* Section 5 */}
            <section id="rights" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 5. User Rights & Data Erase</h2>
              <p>
                You retain the right to query the personal details we hold, request modifications to inaccurate entries, or withdraw consent. To request complete erasure of your project records from our database arrays, write to <a href="mailto:support@kolitech.in" className="text-gold-accent hover:underline">support@kolitech.in</a>. We execute complete erasure workflows within 14 calendar days.
              </p>
            </section>

            {/* Section 6 */}
            <section id="cookies" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 6. Cookies & Trackers Table</h2>
              <p>
                We do not deploy marketing trackers or ad-targeting analytics on our domains. We use only essential cookies required to run basic interfaces.
              </p>
              <table className="w-full text-left border-collapse border border-zinc-border mt-2 font-mono text-[10px]">
                <thead>
                  <tr className="bg-graphite text-white border-b border-zinc-border">
                    <th className="p-2 border-r border-zinc-border">COOKIE NAME</th>
                    <th className="p-2 border-r border-zinc-border">PURPOSE</th>
                    <th className="p-2">LIFESPAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-border/40">
                    <td className="p-2 border-r border-zinc-border/40">__session</td>
                    <td className="p-2 border-r border-zinc-border/40">Navigation state memory</td>
                    <td className="p-2">Session duration</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Section 7 */}
            <section id="grievance" className="space-y-3 scroll-mt-28">
              <h2 className="font-display text-base font-bold text-white uppercase tracking-wide">// 7. Grievance Redressal SLA</h2>
              <p>
                Under DPDP guidelines, we maintain a dedicated Grievance Officer. For disputes regarding data usage, contact:
              </p>
              <div className="bg-[#18181B] border border-zinc-border p-4 font-mono text-[10px] space-y-1 text-white">
                <div>GRIEVANCE OFFICER: Vivek</div>
                <div>EMAIL: support@kolitech.in</div>
                <div>RESPONSE SLA: Under 72 Hours</div>
              </div>
            </section>

            {/* Action Flags */}
            <div className="border border-zinc-border bg-[#0E0E10] p-6 space-y-4 font-mono text-[10px]">
              <div className="text-gold-accent font-bold">// ACTION REQUIRED BY CLIENT LEGAL COUNSEL:</div>
              <ul className="space-y-2 text-zinc-400">
                <li>1. [ACTION NEEDED: Register Vivek as Grievance Officer with the local authorities once operations cross statutory limits.]</li>
                <li>2. [ACTION NEEDED: Deploy a standard cookie consent banner if any analytical tools like Google Analytics or Hotjar are added later.]</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
