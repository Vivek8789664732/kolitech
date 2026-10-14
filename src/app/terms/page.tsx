
import Link from "next/link";

export default function Terms() {
  const sections = [
    { id: "intellectual-property", title: "1. Intellectual Property" },
    { id: "pricing", title: "2. Pricing" },
    { id: "payments", title: "3. Payment Methods" },
    { id: "refunds", title: "4. Refunds and Cancellations" },
    { id: "website-use", title: "5. Use of Website" },
    { id: "liability", title: "6. Limitation of Liability" },
    { id: "governing-law", title: "7. Governing Law and Jurisdiction" },
    { id: "changes", title: "8. Changes to These Terms" },
    { id: "contact", title: "9. Contact Information" },
  ];

  return (
    <div className="w-full min-h-screen bg-alabaster text-charcoal py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header Block */}
        <div className="border-b border-sand-border pb-6 space-y-2">
          <span className="font-mono text-xs text-amber-accent tracking-widest uppercase block">
            Contractual Parameters
          </span>

          <h1 className="font-serif text-3xl md:text-4xl font-normal text-charcoal">
            Terms and Conditions
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
                Welcome to KOLI TECH. By accessing or using our website, you
                agree to comply with these Terms and Conditions. Please read
                them carefully before using our website or services.
              </p>
            </div>

            {/* Section 1 */}
            <section
              id="intellectual-property"
              className="space-y-3 scroll-mt-28"
            >
              <h2 className="font-serif text-lg text-charcoal font-medium">
                1. Intellectual Property
              </h2>

              <p>
                All content available on the KOLI TECH website, including but
                not limited to:
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>Logos and branding</li>
                <li>Images and visual materials</li>
                <li>Product and website designs</li>
                <li>Text, graphics, and other website content</li>
              </ul>

              <p>
                is owned by KOLI TECH or used with appropriate authorization
                and is protected under applicable intellectual property and
                copyright laws.
              </p>

              <p>
                You may not copy, reproduce, distribute, modify, or use our
                website content for commercial purposes without prior written
                permission, except where permitted by applicable law.
              </p>
            </section>

            {/* Section 2 */}
            <section id="pricing" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                2. Pricing
              </h2>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  All prices are listed in Indian Rupees (INR), unless
                  otherwise specified.
                </li>
                <li>
                  Prices are inclusive of applicable taxes unless stated
                  otherwise.
                </li>
                <li>
                  We reserve the right to change pricing, discounts,
                  promotional offers, or service charges at any time without
                  prior notice.
                </li>
                <li>
                  The price agreed upon for a specific project or service will
                  be subject to the terms confirmed with the client.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="payments" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                3. Payment Methods
              </h2>

              <p>
                KOLI TECH accepts multiple payment methods, which may include:
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>Credit Cards and Debit Cards</li>
                <li>UPI</li>
                <li>Net Banking</li>
              </ul>

              <p>
                Available payment methods may vary depending on the service,
                payment provider, and customer location.
              </p>

              <p>
                Customers must ensure that their payment details are accurate
                and that they are authorized to use the selected payment
                method.
              </p>
            </section>

            {/* Section 4 */}
            <section id="refunds" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                4. Refunds and Cancellations
              </h2>

              <p>
                Refund eligibility, cancellation conditions, processing
                procedures, and applicable timelines are explained in our
                separate Refund Policy.
              </p>

              <p>
                Please review our Refund Policy before purchasing or engaging
                our services.
              </p>

              <p>
                Any refund request will be handled in accordance with the
                applicable Refund Policy and relevant laws.
              </p>
            </section>

            {/* Section 5 */}
            <section id="website-use" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                5. Use of Website
              </h2>

              <p>
                By using our website, you agree not to misuse the website or
                engage in any unlawful activity.
              </p>

              <p>Prohibited activities include:</p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Attempting to hack or gain unauthorized access to our
                  website, servers, or systems.
                </li>
                <li>
                  Uploading or distributing malware, viruses, or other
                  harmful software.
                </li>
                <li>
                  Engaging in spamming, fraudulent activities, or deceptive
                  practices.
                </li>
                <li>
                  Interfering with website functionality, security, or other
                  users&apos; access.
                </li>
                <li>
                  Using our website for activities that violate applicable
                  laws.
                </li>
              </ul>

              <p>
                Violation of these terms may result in suspension or
                termination of access and may lead to legal action where
                appropriate.
              </p>
            </section>

            {/* Section 6 */}
            <section id="liability" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                6. Limitation of Liability
              </h2>

              <p>
                To the extent permitted by applicable law, KOLI TECH shall not
                be liable for:
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Direct, indirect, incidental, or consequential damages
                  arising from the use of our website or services.
                </li>
                <li>
                  Loss of data, profits, business opportunities, or revenue.
                </li>
                <li>
                  Temporary website interruptions, technical errors, or
                  inability to access our website.
                </li>
                <li>
                  Issues arising from third-party websites, services, or
                  payment providers.
                </li>
              </ul>

              <p>
                We make reasonable efforts to maintain website functionality
                and reliability but do not guarantee uninterrupted or
                error-free access.
              </p>

              <p>
                Nothing in these Terms and Conditions excludes or limits
                liability where such exclusion or limitation is prohibited by
                applicable law.
              </p>
            </section>

            {/* Section 7 */}
            <section id="governing-law" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                7. Governing Law and Jurisdiction
              </h2>

              <p>
                These Terms and Conditions shall be governed by the laws of
                India.
              </p>

              <p>
                Any disputes arising from the use of our website or services
                shall be subject to the jurisdiction of the competent courts
                in Gujarat, India, subject to applicable law.
              </p>
            </section>

            {/* Section 8 */}
            <section id="changes" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                8. Changes to These Terms
              </h2>

              <p>
                KOLI TECH reserves the right to update or modify these Terms
                and Conditions at any time.
              </p>

              <p>
                Changes will be published on this page with an updated
                revision date. We encourage users to review this page
                periodically.
              </p>
            </section>

            {/* Section 9 */}
            <section id="contact" className="space-y-3 scroll-mt-28">
              <h2 className="font-serif text-lg text-charcoal font-medium">
                9. Contact Information
              </h2>

              <p>
                If you have any questions regarding these Terms and
                Conditions, please contact us through our official website.
              </p>

              <div className="bg-sandstone border border-sand-border p-4 font-mono text-[10px] space-y-2 text-charcoal rounded-xl">
                <div className="text-amber-accent uppercase tracking-wider">
                  Contact Details
                </div>

                <div>BUSINESS NAME: KOLI TECH</div>

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
                By accessing or using our website, you acknowledge that you
                have read and understood these Terms and Conditions.
              </p>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
