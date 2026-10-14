
import Link from "next/link";

export default function Privacy() {
  const lastUpdated = "October 14, 2026";

  const sections = [
    { id: "cookies", title: "1. Cookies and Tracking Technologies" },
    { id: "children", title: "2. Children's Privacy" },
    { id: "legal", title: "3. Legal Requirements" },
    { id: "protection", title: "4. Information Protection" },
    { id: "thirdparty", title: "5. Third-Party Websites" },
    { id: "updates", title: "6. Updates to This Privacy Policy" },
    { id: "contact", title: "7. Contact Us" },
  ];

  return (
    <div className="w-full min-h-screen bg-alabaster text-charcoal py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header Block */}
        <div className="border-b border-sand-border pb-6 space-y-2">
  <span className="font-mono text-xs text-amber-accent tracking-widest uppercase block">
    Privacy Protocol
  </span>

  <h1 className="font-serif text-3xl md:text-4xl font-normal text-charcoal">
    Privacy Policy
  </h1>
        </div>

        {/* Sidebar + Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Jump-To Navigation (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 border border-sand-border bg-sandstone p-6 rounded-xl">
            <div className="font-mono text-xs text-amber-accent uppercase tracking-wider border-b border-sand-border/60 pb-2 mb-4">
              Section Index
            </div>

            <ul className="space-y-3 font-mono text-[10px] text-muted-slate">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <Link
                    href={`#${sec.id}`}
                    className="hover:text-amber-accent transition-colors"
                  >
                    {sec.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Legal Content */}
          <article className="lg:col-span-8 space-y-10 font-sans text-xs text-muted-slate leading-relaxed">

            {/* Introduction */}
            <div className="space-y-3">
              <p>
                At KOLI TECH, we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we handle information when you visit our website.
              </p>
            </div>

            {/* Section 1 */}
            <section id="cookies" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                1. Cookies and Tracking Technologies
              </h2>

              <p>
                We use cookies and similar technologies to enhance your
                browsing experience. Cookies help us:
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>Remember user preferences.</li>
                <li>Analyze website traffic.</li>
                <li>Improve website functionality and performance.</li>
              </ul>

              <p>
                You can disable cookies at any time through your browser
                settings. Please note that disabling cookies may affect
                certain website features.
              </p>
            </section>

            {/* Section 2 */}
            <section id="children" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                2. Children's Privacy
              </h2>

              <p>
                Our website is not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children under 18. If such information is identified, we will
                take appropriate steps to delete it promptly, subject to
                applicable legal requirements.
              </p>
            </section>

            {/* Section 3 */}
            <section id="legal" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                3. Legal Requirements
              </h2>

              <p>
                We may disclose information when required by law or when
                reasonably necessary to protect our legal rights, comply with
                legal obligations, and prevent or investigate fraud or
                unauthorized activities.
              </p>
            </section>

            {/* Section 4 */}
            <section id="protection" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                4. Information Protection
              </h2>

              <p>
                KOLI TECH takes reasonable measures to protect information
                against unauthorized access, misuse, alteration, or disclosure.
                However, no method of online transmission or electronic storage
                can guarantee complete security.
              </p>
            </section>

            {/* Section 5 */}
            <section id="thirdparty" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                5. Third-Party Websites
              </h2>

              <p>
                Our website may contain links to third-party websites for
                additional information or convenience. KOLI TECH is not
                responsible for the privacy practices or content of external
                websites. We encourage users to review the privacy policies
                of those websites before sharing personal information.
              </p>
            </section>

            {/* Section 6 */}
            <section id="updates" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                6. Updates to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our website practices or applicable legal
                requirements. Any changes will be published on this page with
                an updated revision date.
              </p>

              <p>
                We encourage visitors to review this page periodically.
              </p>
            </section>

            {/* Section 7 */}
            <section id="contact" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                7. Contact Us
              </h2>

              <p>
                If you have any questions about this Privacy Policy, please
                contact us through our official website.
              </p>

              <div className="bg-sandstone border border-sand-border p-4 font-mono text-[10px] space-y-2 text-charcoal rounded-xl">
                <div className="text-amber-accent uppercase tracking-wider">
                  Privacy Inquiries
                </div>

                <div>
                  COMPANY: KOLI TECH
                </div>

                <div>
                  WEBSITE:{" "}
                  <a
                    href="https://kolitech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-accent hover:underline"
                  >
                    kolitech.in
                  </a>
                </div>
              </div>
              <p>
               We value your privacy and appreciate your trust in KOLI TECH.
              </p>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
