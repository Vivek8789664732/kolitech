
"use client";

import { useEffect, useRef, useState } from "react";


const plans = [
  {
    title: "Web and App Development",
    price: "500,000",
    billing: "starting price",
    description:
      "Custom websites and applications built to match your business needs.",
    features: [
      "Custom business websites and web applications",
      "Responsive design for mobile, tablet and desktop",
      "Custom UI/UX and interactive features",
      "Frontend and backend development",
      "Database design and API integration",
      "Authentication and user management",
      "Deployment and production setup",
      "Scalable and maintainable codebase",
    ],
    ideal:
      "Startups, small businesses and companies looking to build a website or application",
    support: "15 days of post-delivery bug fixes",
    revisions: "2 rounds of revisions",
  },
  {
    title: "CRM Base Service",
    price: "300,000",
    billing: "starting price",
    description:
      "A centralized CRM solution to manage customers, leads and business workflows.",
    features: [
      "Centralized customer and contact management",
      "Lead tracking and sales pipeline management",
      "Customer activity and interaction history",
      "Task, follow-up and reminder management",
      "Custom dashboards and data views",
      "Role-based access and user management",
      "Reports and business insights",
      "Workflow and third-party integrations",
    ],
    ideal:
      "Businesses that want to organize customer data, track leads and streamline daily operations",
    support: "30 days of post-delivery bug fixes",
    revisions: "2 rounds of revisions per milestone",
  },
  {
    title: "Web & App Maintenance & Support",
    price: "200,000",
    billing: "per month",
    description:
      "Ongoing maintenance to keep your website and applications secure, updated and reliable.",
    features: [
      "Website and application health monitoring",
      "Bug fixing and troubleshooting",
      "Regular software updates and maintenance",
      "Security patches and vulnerability fixes",
      "Database monitoring and basic optimization",
      "Backup monitoring and recovery assistance",
      "Minor content and UI changes",
      "Performance and uptime checks",
      "Technical support and monthly status report",
    ],
    ideal:
      "Businesses that already have a website or application and need ongoing technical support",
    support: "Ongoing support during the active subscription",
    revisions: "Minor updates within the agreed monthly scope",
  },
];


// Keep separate IDs so each plan can use its own Razorpay button.
const RAZORPAY_BUTTON_ID_1 = "pl_Tn0vL17Tzp6fNG";
const RAZORPAY_BUTTON_ID_2 = "pl_Tn0vL17Tzp6fNG";
const RAZORPAY_BUTTON_ID_3 = "pl_Tn0vL17Tzp6fNG";

const RAZORPAY_SCRIPT_URL =
  "https://checkout.razorpay.com/v1/payment-button.js";

// Script 1: Web and App Development
function loadScript1(form: HTMLFormElement) {
  const script1 = document.createElement("script");

  script1.src = RAZORPAY_SCRIPT_URL;
  script1.async = true;
  script1.setAttribute(
    "data-payment_button_id",
    RAZORPAY_BUTTON_ID_1
  );

  form.appendChild(script1);

  return script1;
}

// Script 2: CRM Base Service
function loadScript2(form: HTMLFormElement) {
  const script2 = document.createElement("script");

  script2.src = RAZORPAY_SCRIPT_URL;
  script2.async = true;
  script2.setAttribute(
    "data-payment_button_id",
    RAZORPAY_BUTTON_ID_2
  );

  form.appendChild(script2);

  return script2;
}

// Script 3: Maintenance & Support
function loadScript3(form: HTMLFormElement) {
  const script3 = document.createElement("script");

  script3.src = RAZORPAY_SCRIPT_URL;
  script3.async = true;
  script3.setAttribute(
    "data-payment_button_id",
    RAZORPAY_BUTTON_ID_3
  );

  form.appendChild(script3);

  return script3;
}

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<
    (typeof plans)[number] | null
  >(null);

  const paymentFormRef = useRef<HTMLFormElement>(null);

  // Load the corresponding Razorpay script for the selected plan.
  useEffect(() => {
    if (!selectedPlan || !paymentFormRef.current) return;

    const form = paymentFormRef.current;
    form.replaceChildren();

    let script: HTMLScriptElement;

    switch (selectedPlan.title) {
      case "Web and App Development":
        script = loadScript1(form);
        break;

      case "Web / Mobile App Development":
        script = loadScript2(form);
        break;

      case "Maintenance & Support":
        script = loadScript3(form);
        break;

      default:
        return;
    }

    return () => {
      script.remove();
      form.replaceChildren();
    };
  }, [selectedPlan]);

  // Handle Escape key and prevent background scrolling.
  useEffect(() => {
    if (!selectedPlan) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPlan(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  return (
    <main
      id="home"
      className="min-h-screen overflow-x-hidden bg-[rgb(250,248,245)] text-[#242720]"
    >
      {/* Pricing cards */}
      <section
        id="pricing"
        className="scroll-mt-24 px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex flex-col gap-2 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#008f79]">
                Our packages
              </p>

              <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                Choose what works for you
              </h2>
            </div>

            <p className="text-xs text-[#858178] sm:text-sm">
              Transparent pricing. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.title}
                className={`group flex min-w-0 flex-col rounded-2xl border bg-white p-5 shadow-[0_8px_35px_rgba(40,35,20,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(40,35,20,0.08)] sm:p-6 ${
                  index === 1
                    ? "border-[#8dd7c4] ring-1 ring-[#8dd7c4]/40"
                    : "border-[#e9e4dc] hover:border-[#9ad8c8]"
                }`}
              >
               
                <h3 className="text-base font-bold leading-6 text-[#282b24] sm:text-lg">
                  {plan.title}
                </h3>

                <p className="mt-2 min-h-10 text-xs leading-5 text-[#817e75] sm:text-sm">
                  {plan.description}
                </p>

                <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-3xl font-bold tracking-tight text-[#20251f] sm:text-[34px]">
                    ₹{plan.price}
                  </span>

                  <span className="text-xs font-medium text-[#89867d]">
                    {plan.billing}
                  </span>
                </div>

                <div className="my-5 border-t border-[#eeeae3]" />

                <ul className="flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] leading-[1.65] text-[#55584f] sm:text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#e1f5ed] text-[10px] font-bold text-[#008e75]"
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

             

                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan)}
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0caa8e] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#0caa8e]/10 transition hover:bg-[#078c75] focus:outline-none focus:ring-2 focus:ring-[#0caa8e] focus:ring-offset-2 active:scale-[0.99]"
                >
                  Pay now <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[#89867d] sm:text-sm">
            Custom projects are quoted individually.{" "}
            <a
              href="/contact"
              className="font-semibold text-[#008c75] underline-offset-4 hover:underline"
            >
              Contact us
            </a>
            .
          </p>
        </div>
      </section>

      {/* Razorpay payment dialog */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#20251f]/45 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-dialog-title"
            className="my-auto w-full max-w-md rounded-2xl border border-[#e9e4dc] bg-[rgb(250,248,245)] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#008f79]">
              Secure payment
            </p>

            <p className="mt-3 text-sm leading-6 text-[#77756d]">
              Continue using Razorpay to complete your payment.
            </p>

            <div className="mt-6 rounded-xl border border-[#e9e4dc] bg-white p-4">
              <form
                ref={paymentFormRef}
                className="flex min-h-12 items-center justify-center"
              />
            </div>

            <p className="mt-3 text-center text-xs leading-5 text-[#89867d]">
              Payment amount and details are determined by your Razorpay
              button configuration.
            </p>

            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="mt-5 w-full rounded-full border border-[#ded8ce] px-4 py-3 text-sm font-medium text-[#55584f] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#0caa8e]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
