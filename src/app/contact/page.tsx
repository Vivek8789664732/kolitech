"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$15,000 - $30,000",
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

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-obsidian text-platinum py-12 px-6">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Title */}
        <div className="border-b border-zinc-border pb-8">
          <span className="font-mono text-xs text-gold-accent tracking-widest uppercase block">
            // COMMUNICATIONS_PROTOCOL
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white mt-2">
            Establish Connection
          </h1>
          <p className="font-sans text-xs text-steel mt-2 max-w-md">
            Complete the system ledger specifications below or use our direct endpoints for WhatsApp or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-zinc-border bg-graphite p-6 space-y-6">
              <div className="font-mono text-xs text-gold-accent tracking-wider uppercase border-b border-zinc-border pb-2">
                // DIRECT_ENDPOINTS
              </div>

              <div className="space-y-4 font-sans text-xs">
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 block">// EMAIL</span>
                  <a href="mailto:support@kolitech.in" className="text-white hover:text-gold-accent font-mono font-bold transition-colors">
                    support@kolitech.in
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-zinc-500 block">// MOBILE_VOICE</span>
                  <a href="tel:+919265739137" className="text-white hover:text-gold-accent font-mono font-bold transition-colors">
                    +91 92657 39137
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-zinc-500 block">// WHATSAPP_DIRECT</span>
                  <a 
                    href="https://wa.me/919265739137" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-gold-accent font-mono font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    SEND_SECURE_MESSAGE_ &rarr;
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-zinc-500 block">// PHYSICAL_ADDRESS</span>
                  <p className="text-white leading-relaxed font-mono">
                    402, Signature Plaza,<br />
                    Surat, Gujarat, India<br />
                    Pin: 395007
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-zinc-border bg-[#0E0E10] p-6 font-sans text-[10px] text-steel leading-relaxed">
              <span className="font-mono text-gold-accent block font-bold">// SECURE_NOTE:</span>
              Your input fields are logged directly to our internal project directory. We do not distribute database contact logs to marketing partners.
            </div>
          </div>

          {/* Right Column: Project Builder Form */}
          <div className="lg:col-span-7 border border-zinc-border bg-graphite p-6 space-y-6">
            <div className="font-mono text-xs text-platinum tracking-wider uppercase border-b border-zinc-border pb-2">
              // PROJECT_LEDGER_FORM
            </div>

            {status === "success" ? (
              <div className="border border-emerald-500/30 bg-emerald-500/5 p-6 space-y-4 font-mono text-xs">
                <div className="text-emerald-400 font-bold">✓ DISPATCH_SUCCESSFUL // LOGS_STORED</div>
                <p className="text-steel leading-relaxed">
                  We have received your project parameters. An engineer will analyze your description and contact you via email within one business day.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      budget: "$15,000 - $30,000",
                      legacyDetails: "",
                      description: ""
                    });
                  }}
                  className="border border-zinc-border px-4 py-2 hover:border-gold-accent text-white transition-colors cursor-pointer"
                >
                  SUBMIT_NEW_LEDGER_
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {status === "error" && (
                  <div className="border border-rose-500/30 bg-rose-500/5 p-4 text-rose-400 text-[10px]">
                    ERR: {errorDetails}
                  </div>
                )}

                {/* Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-zinc-500 text-[9px]">// FOUNDER_NAME *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-obsidian border border-zinc-border px-3 py-2 text-white focus:border-gold-accent focus:outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-zinc-500 text-[9px]">// EMAIL_ENDPOINT *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-obsidian border border-zinc-border px-3 py-2 text-white focus:border-gold-accent focus:outline-none transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                {/* Budget */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="budget" className="text-zinc-500 text-[9px]">// ESTIMATED_BUDGET_RANGE</label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-obsidian border border-zinc-border px-3 py-2 text-white focus:border-gold-accent focus:outline-none transition-colors"
                  >
                    <option value="$15,000 - $30,000">$15,000 - $30,000 (Standard API/Database Rebuild)</option>
                    <option value="$30,000 - $60,000">$30,000 - $60,000 (Complete Platform Migration)</option>
                    <option value="$60,000+">$60,000+ (High Availability Core Clusters)</option>
                  </select>
                </div>

                {/* Legacy codebase details */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="legacy" className="text-zinc-500 text-[9px]">// LEGACY_CODEBASE_LINK_OR_STACK (OPTIONAL)</label>
                  <input
                    type="text"
                    id="legacy"
                    value={formData.legacyDetails}
                    onChange={(e) => setFormData({ ...formData, legacyDetails: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-obsidian border border-zinc-border px-3 py-2 text-white focus:border-gold-accent focus:outline-none transition-colors"
                    placeholder="e.g. github repository path or legacy framework versions"
                  />
                </div>

                {/* Project description */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="desc" className="text-zinc-500 text-[9px]">// SYSTEM_OPERATIONS_DESCRIPTION *</label>
                  <textarea
                    id="desc"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    disabled={status === "submitting"}
                    className="bg-obsidian border border-zinc-border px-3 py-2 text-white focus:border-gold-accent focus:outline-none transition-colors resize-none"
                    placeholder="Detail what is currently broken or what load limits your system must handle."
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-gold-accent border border-gold-accent text-obsidian py-3 font-bold hover:bg-transparent hover:text-gold-accent transition-colors disabled:bg-zinc-700 disabled:border-zinc-700 disabled:text-zinc-500 cursor-pointer"
                  >
                    {status === "submitting" ? "TRANSMITTING_PAYLOAD..." : "DISPATCH_PROJECT_LEDGER_"}
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
