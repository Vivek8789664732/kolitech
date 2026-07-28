"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-border bg-obsidian py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Studio Column */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-between border border-gold-accent px-1 font-mono text-xs font-bold text-gold-accent">
                <span>K</span>
                <span>_</span>
              </div>
              <span className="font-display text-sm font-bold tracking-widest text-platinum">
                KOLITECH
              </span>
            </div>
            <p className="font-sans text-xs text-steel max-w-sm leading-relaxed">
              We engineer custom software systems, scalable backends, and performance-tuned APIs. We write dedicated, clean code tailored strictly to your operations.
            </p>
            <div className="font-mono text-[10px] text-steel">
              REGISTERED // SURAT, GUJARAT, IN // FOUNDED 2022
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold text-platinum tracking-wider uppercase">
              // SITE_MAP
            </div>
            <ul className="space-y-2 font-mono text-xs text-steel">
              <li>
                <Link href="/" className="hover:text-gold-accent transition-colors duration-150">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-gold-accent transition-colors duration-150">
                  CASE STUDIES
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-accent transition-colors duration-150">
                  SERVICES & PRICING
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-accent transition-colors duration-150">
                  ABOUT STUDIO
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-accent transition-colors duration-150">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold text-platinum tracking-wider uppercase">
              // COMPLIANCE
            </div>
            <ul className="space-y-2 font-mono text-xs text-steel">
              <li>
                <Link href="/terms" className="hover:text-gold-accent transition-colors duration-150">
                  TERMS OF SERVICE
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold-accent transition-colors duration-150">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-gold-accent transition-colors duration-150">
                  REFUND POLICY
                </Link>
              </li>
              <li className="pt-2 text-[10px] uppercase text-zinc-600 font-sans">
                GSTIN: 24AABCK1234F1Z5
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-border/40 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="font-mono text-[10px] text-zinc-500">
            COPYRIGHT &copy; {currentYear} KOLITECH. DEDICATED CODE BASES ONLY. NO TEMPLATES.
          </div>
          
          <div className="font-mono text-[10px] text-steel flex space-x-6">
            <span>
              CALL: <a href="tel:+919265739137" className="hover:text-gold-accent transition-colors">+91 92657 39137</a>
            </span>
            <span>
              WRITE: <a href="mailto:support@kolitech.in" className="hover:text-gold-accent transition-colors">support@kolitech.in</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
