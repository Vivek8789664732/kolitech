"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-sand-border bg-sandstone py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Studio Column */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center border border-amber-accent font-mono text-xs font-bold text-amber-accent rounded">
                <span>K</span>
              </div>
              <span className="font-display text-sm font-bold tracking-widest text-charcoal">
                KOLITECH
              </span>
            </div>
            <p className="font-sans text-xs text-muted-slate max-w-sm leading-relaxed">
              We engineer custom software systems, scalable backends, and performance-tuned APIs. We write dedicated, clean code tailored strictly to your operations.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] font-bold text-charcoal tracking-wider uppercase">
              Site Map
            </div>
            <ul className="space-y-2 font-sans text-xs text-muted-slate">
              <li>
                <Link href="/" className="hover:text-amber-accent transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-amber-accent transition-colors duration-150">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-accent transition-colors duration-150">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-accent transition-colors duration-150">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-accent transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] font-bold text-charcoal tracking-wider uppercase">
              Compliance
            </div>
            <ul className="space-y-2 font-sans text-xs text-muted-slate">
              <li>
                <Link href="/terms" className="hover:text-amber-accent transition-colors duration-150">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-accent transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-amber-accent transition-colors duration-150">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/pay" className="hover:text-amber-accent transition-colors duration-150">
                  Direct Payment
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sand-border/60 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="font-mono text-[9px] text-zinc-500">
            &copy; {currentYear} Koli Tech by Monika Koli.
          </div>
          
          <div className="font-mono text-[9px] text-muted-slate flex space-x-6">
            <span>
              CALL: <a href="tel:+17572355070" className="hover:text-amber-accent transition-colors">+1 (757) 235-5070</a>
            </span>
            <span>
              WRITE: <a href="mailto:support@kolitech.in" className="hover:text-amber-accent transition-colors">support@kolitech.in</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
