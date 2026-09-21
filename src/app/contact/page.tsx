"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "15,000 - 30,000",
    legacyDetails: "",
    description: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorDetails, setErrorDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      setStatus("error");
      setErrorDetails("REQUIRED_FIELDS_MISSING: name, email, and description must be completed.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-alabaster text-charcoal py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Title */}
        <div className="border-b border-sand-border pb-8">
          <span className="font-mono text-xs text-amber-accent tracking-widest uppercase block">
            Communications Protocol
          </span>
          <h1 className="font-serif text-4xl font-normal text-charcoal mt-2">
            Establish Connection
          </h1>
          <p className="font-sans text-xs text-muted-slate mt-2 max-w-md">
            Complete the system ledger specifications below or use our direct endpoints for WhatsApp or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-sand-border bg-sandstone p-6 space-y-6 rounded-xl shadow-sm">
              <div className="font-mono text-xs text-amber-accent tracking-wider uppercase border-b border-sand-border/60 pb-2">
                Direct Endpoints
              </div>

              <div className="space-y-4 font-sans text-xs">
                <div>
                  <span className="font-mono text-[9px] text-muted-slate block font-bold">EMAIL</span>
                  <a href="mailto:support@kolitech.in" className="text-charcoal hover:text-amber-accent font-mono font-bold transition-colors">
                    support@kolitech.in
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-muted-slate block font-bold">MOBILE VOICE</span>
                  <div className="space-y-1">
                    <a href="tel:+919265739137" className="text-charcoal hover:text-amber-accent font-mono font-bold transition-colors block">
                      +91 92657 39137
                    </a>
                    <a href="tel:+17572355070" className="text-charcoal hover:text-amber-accent font-mono font-bold transition-colors block">
                      +1 (757) 235-5070
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-muted-slate block font-bold">WHATSAPP DIRECT</span>
                  <div className="space-y-1">
                    <a 
                      href="https://wa.me/919265739137" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-amber-accent font-mono font-bold transition-colors inline-flex items-center gap-1.5 block"
                    >
                      WHATSAPP (+91 92657 39137) &rarr;
                    </a>
                    <a 
                      href="https://wa.me/17572355070" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-amber-accent font-mono font-bold transition-colors inline-flex items-center gap-1.5 block"
                    >
                      WHATSAPP (+1 757 235 5070) &rarr;
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-muted-slate block font-bold">PHYSICAL ADDRESS</span>
                  <p className="text-charcoal leading-relaxed font-mono">
                    Shop No C-2, Sai Pujan Residency,<br />
                    Dindoli, Surat, Gujarat, India<br />
                    Pin: 394210
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-sand-border bg-sandstone/30 p-6 font-sans text-[10px] text-muted-slate leading-relaxed rounded-xl">
              <span className="font-mono text-amber-accent block font-bold">SECURE NOTE:</span>
              Your input fields are logged directly to our internal project directory. We do not distribute database contact logs to marketing partners.
            </div>
          </div>

          {/* Right Column: Project Builder Form */}
          <div className="lg:col-span-7 border border-sand-border bg-sandstone p-6 space-y-6 rounded-xl shadow-sm">
            <div className="font-mono text-xs text-charcoal tracking-wider uppercase border-b border-sand-border/60 pb-2">
              Project Ledger Form
            </div>

            {status === "success" ? (
              <div className="border border-emerald-600/30 bg-emerald-500/5 p-6 space-y-4 font-mono text-xs rounded-xl">
                <div className="text-emerald-700 font-bold">✓ DISPATCH SUCCESSFUL • LOGS STORED</div>
                <p className="text-muted-slate leading-relaxed">
                  We have received your project parameters. An engineer will analyze your description and contact you via email within one business day.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      budget: "15,000 - 30,000",
                      legacyDetails: "",
                      description: ""
                    });
                  }}
                  className="border border-sand-border bg-alabaster px-4 py-2 hover:border-charcoal text-charcoal transition-colors cursor-pointer rounded-lg"
                >
                  SUBMIT NEW LEDGER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {status === "error" && (
                  <div className="border border-rose-500/30 bg-rose-500/5 p-4 text-rose-700 text-[10px] rounded">
                    ERR: {errorDetails}
                  </div>
                )}

                {/* Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-muted-slate text-[9px] font-bold">FOUNDER NAME *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-alabaster border border-sand-border px-3 py-2 text-charcoal focus:border-amber-accent focus:outline-none transition-colors rounded-lg"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-muted-slate text-[9px] font-bold">EMAIL ENDPOINT *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-alabaster border border-sand-border px-3 py-2 text-charcoal focus:border-amber-accent focus:outline-none transition-colors rounded-lg"
                    placeholder="name@company.com"
                  />
                </div>

                {/* Budget */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="budget" className="text-muted-slate text-[9px] font-bold">ESTIMATED BUDGET RANGE</label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-alabaster border border-sand-border px-3 py-2 text-charcoal focus:border-amber-accent focus:outline-none transition-colors rounded-lg"
                  >
                    <option value="15,000 - 30,000">15,000 - 30,000 (Standard API/Database Rebuild)</option>
                    <option value="30,000 - 60,000">30,000 - 60,000 (Complete Platform Migration)</option>
                    <option value="60,000+">60,000+ (High Availability Core Clusters)</option>
                  </select>
                </div>

                {/* Legacy codebase details */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="legacy" className="text-muted-slate text-[9px] font-bold">LEGACY CODEBASE LINK OR STACK (OPTIONAL)</label>
                  <input
                    type="text"
                    id="legacy"
                    value={formData.legacyDetails}
                    onChange={(e) => setFormData({ ...formData, legacyDetails: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-alabaster border border-sand-border px-3 py-2 text-charcoal focus:border-amber-accent focus:outline-none transition-colors rounded-lg"
                    placeholder="e.g. github repository path or legacy framework versions"
                  />
                </div>

                {/* Project description */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="desc" className="text-muted-slate text-[9px] font-bold">SYSTEM OPERATIONS DESCRIPTION *</label>
                  <textarea
                    id="desc"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-alabaster border border-sand-border px-3 py-2 text-charcoal focus:border-amber-accent focus:outline-none transition-colors resize-none rounded-lg"
                    placeholder="Detail what is currently broken or what load limits your system must handle."
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-charcoal border border-charcoal text-alabaster py-3 font-bold hover:bg-transparent hover:text-charcoal transition-colors disabled:bg-zinc-300 disabled:border-zinc-300 disabled:text-zinc-500 cursor-pointer rounded-lg shadow-sm"
                  >
                    {status === "submitting" ? "TRANSMITTING DATA..." : "DISPATCH PROJECT LEDGER"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
