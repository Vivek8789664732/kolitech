"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "01. WORK", href: "/work" },
    { name: "02. SERVICES", href: "/services" },
    { name: "03. PRICING", href: "/pricing" },
    { name: "04. ABOUT", href: "/about" },
    { name: "05. CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <nav className="flex items-center justify-between border border-sand-border bg-alabaster/90 px-6 py-4 backdrop-blur-md transition-all duration-300 rounded-xl glow-subtle">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-center border border-amber-accent font-mono text-sm font-bold text-amber-accent group-hover:bg-amber-accent group-hover:text-alabaster transition-colors duration-200 rounded">
            <span>K</span>
          </div>
          <span className="font-display text-sm font-bold tracking-widest text-charcoal transition-colors duration-200 group-hover:text-amber-accent">
            KOLITECH
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[10px] tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-amber-accent font-bold" : "text-muted-slate hover:text-charcoal"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/contact"
            className="border border-sand-border bg-charcoal text-alabaster px-4 py-2 font-mono text-[10px] tracking-wider hover:bg-transparent hover:text-charcoal hover:border-charcoal transition-colors duration-200 cursor-pointer rounded-lg"
          >
            ESTIMATE PROJECT
          </Link>
        </div>
      </nav>
    </header>
  );
}
