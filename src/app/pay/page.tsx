"use client";

import { useEffect, useRef, useState } from "react";

export default function PayPage() {
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!formContainerRef.current) return;

    setIsLoading(true);
    // Clear the previous form content to prevent duplicates or residues
    formContainerRef.current.innerHTML = "";

    // Create form element
    const form = document.createElement("form");

    // Create script element
    const script = document.createElement("script");
    script.src = "https://oneclick.payglocal.in/simple.js";
    script.async = true;

    // Set corresponding PayGlocal ID
    const pbId = currency === "USD" ? "pb_iVT3KwZ362el" : "pb_eFDtACpHwF5S";
    script.setAttribute("data-pb-id", pbId);

    // Track loading state
    script.onload = () => {
      setIsLoading(false);
    };

    script.onerror = () => {
      setIsLoading(false);
    };

    // Append script inside form and insert form into ref container
    form.appendChild(script);
    formContainerRef.current.appendChild(form);
  }, [currency]);

  return (
    <div className="w-full min-h-screen bg-alabaster text-charcoal py-12 px-6">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Title */}
        <div className="border-b border-sand-border pb-8 text-center sm:text-left">
          <span className="font-mono text-xs text-amber-accent tracking-widest uppercase block">
            Direct Settlement Gate
          </span>
          <h1 className="font-serif text-4xl font-normal text-charcoal mt-2">
            Secure Invoice Payment
          </h1>
          <p className="font-sans text-xs text-muted-slate mt-2 max-w-lg">
            Initialize direct transactions for milestones and custom code delivery. Choose your currency preference below to run the payment gateway.
          </p>
        </div>

        {/* Card Body */}
        <div className="border border-sand-border bg-sandstone p-8 rounded-2xl shadow-sm space-y-8 max-w-2xl mx-auto">
          {/* Currency Toggle */}
          <div className="space-y-3">
            <label className="font-mono text-[10px] text-muted-slate block font-bold uppercase tracking-wider text-center">
              Select Settlement Currency
            </label>
            <div className="flex justify-center">
              <div className="inline-flex rounded-xl bg-alabaster p-1 border border-sand-border">
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-6 py-2.5 rounded-lg font-mono text-xs font-bold transition-all ${
                    currency === "USD"
                      ? "bg-charcoal text-alabaster shadow-sm"
                      : "text-muted-slate hover:text-charcoal"
                  }`}
                >
                  USD (United States Dollar)
                </button>
                <button
                  onClick={() => setCurrency("EUR")}
                  className={`px-6 py-2.5 rounded-lg font-mono text-xs font-bold transition-all ${
                    currency === "EUR"
                      ? "bg-charcoal text-alabaster shadow-sm"
                      : "text-muted-slate hover:text-charcoal"
                  }`}
                >
                  EUR (Euro)
                </button>
              </div>
            </div>
          </div>

          {/* Payment Terminal Output */}
          <div className="border border-sand-border bg-alabaster p-8 rounded-xl flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 bg-alabaster/90 flex flex-col items-center justify-center space-y-3 z-10">
                <div className="h-6 w-6 border-2 border-amber-accent border-t-transparent rounded-full animate-spin"></div>
                <span className="font-mono text-[9px] text-muted-slate tracking-widest uppercase">
                  INITIALIZING TERMINAL...
                </span>
              </div>
            )}

            {/* Target Node for PayGlocal Form */}
            <div className="w-full flex justify-center py-4">
              <div ref={formContainerRef} className="w-full max-w-md flex justify-center [&>form]:w-full" />
            </div>

            {/* Gateway Info */}
            <div className="mt-4 font-mono text-[8px] text-muted-slate text-center uppercase tracking-wider">
              Secure Checkout Node powered by PayGlocal • PCI-DSS Compliant
            </div>
          </div>
        </div>

        {/* Help Note */}
        <div className="max-w-2xl mx-auto text-center font-sans text-xs text-muted-slate leading-relaxed">
          Need a custom payment structure, or experiencing checkout limitations? Contact our support line directly at{" "}
          <a href="mailto:support@kolitech.in" className="text-amber-accent hover:underline font-semibold">
            support@kolitech.in
          </a>
          .
        </div>
      </div>
    </div>
  );
}
