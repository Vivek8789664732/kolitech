"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "01 // WORK", href: "/work" },
    { name: "02 // SERVICES", href: "/services" },
    { name: "03 // ABOUT", href: "/about" },
    { name: "04 // CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <nav className="flex items-center justify-between border border-zinc-border bg-graphite/90 px-6 py-4 backdrop-blur-md transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-8 w-8 items-center justify-between border border-gold-accent px-1.5 font-mono text-sm font-bold text-gold-accent group-hover:bg-gold-accent group-hover:text-obsidian transition-colors duration-200">
            <span>K</span>
            <span className="animate-blink">_</span>
          </div>
          <span className="font-display text-lg font-bold tracking-widest text-platinum transition-colors duration-200 group-hover:text-gold-accent">
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
                className={`font-mono text-xs tracking-wider transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-gold-accent font-bold" : "text-steel hover:text-platinum"
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
            className="border border-zinc-border px-4 py-2 font-mono text-xs text-platinum hover:border-gold-accent hover:text-gold-accent transition-colors duration-200 cursor-pointer"
          >
            ESTIMATE_PROJECT_
          </Link>
        </div>
      </nav>
    </header>
  );
}
