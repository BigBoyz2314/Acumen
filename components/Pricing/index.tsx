"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../Common/SectionHeader";
import { useState } from "react";

const STARTER_MONTHLY = 25;
const GROWTH_MONTHLY = 35;

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const isYearly = billingPeriod === "yearly";

  const starterPrice = isYearly ? STARTER_MONTHLY * 11 : STARTER_MONTHLY;
  const growthPrice = isYearly ? GROWTH_MONTHLY * 11 : GROWTH_MONTHLY;
  const priceSuffix = isYearly ? "/branch /year" : "/branch /month";

  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-transparent dark:bg-transparent">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto max-w-[1207px] rounded-3xl border border-stroke bg-white/90 p-6 text-center shadow-solid-8 backdrop-blur-sm dark:border-strokedark dark:bg-blacksection/90 lg:p-8">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple, scalable pricing for a cloud-based POS`,
                description: `Choose monthly or save with yearly billing. All plans are cloud-based, with secure access and ongoing updates.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="inline-flex rounded-full bg-white p-1 shadow-solid-8 border border-stroke dark:bg-blacksection dark:border-strokedark">
              <button
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-out transform ${
                  !isYearly
                    ? "bg-primary text-white shadow-sm scale-105"
                    : "text-waterloo dark:text-manatee"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod("yearly")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-out transform ${
                  isYearly
                    ? "bg-primary text-white shadow-sm scale-105"
                    : "text-waterloo dark:text-manatee"
                }`}
              >
                Yearly
              </button>
            </div>
            <span className="rounded-full bg-meta/10 px-2 py-0.5 text-xs font-medium text-meta">
              Save ~8%
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item: Starter --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/2 xl:p-12.5">
              <h3 className="mb-2 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Starter
              </h3>
              <p className="mb-4 text-waterloo dark:text-manatee">
                For single-location teams
              </p>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-black dark:text-white">
                  ${starterPrice}
                </span>
                <span className="text-regular text-waterloo dark:text-manatee">
                  {priceSuffix}
                </span>
              </div>

              <p>Core cloud POS features to keep everyday operations running smoothly.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  {[
                    "Cloud-based point of sale",
                    "Order and ticket management",
                    "Menu and item configuration",
                    "Basic inventory tracking",
                    "Daily revenue reconciliation",
                    "Core analytics & sales snapshots",
                    "24/7 support",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee"
                    >
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-meta/10 text-meta">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact?intent=pricing"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Talk to sales
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            {/* <!-- Pricing Item: Growth --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/2 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-2 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Growth
              </h3>
              <p className="mb-4 text-waterloo dark:text-manatee">
                For growing teams & multiple channels
              </p>
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-black dark:text-white">
                  ${growthPrice}
                </span>
                <span className="text-regular text-waterloo dark:text-manatee">
                  {priceSuffix}
                </span>
              </div>

              <p>Everything in Starter, plus online ordering, loyalty, and deeper analytics.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  {[
                    "POS with advanced user roles & permissions",
                    "Online ordering (website) connected to POS",
                    "Menu, pricing, and promo management across channels",
                    "Enhanced inventory and stock alerts",
                    "Loyalty programs & targeted promotions",
                    "Advanced analytics & multi-location reports",
                    "Priority support",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee"
                    >
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-meta/10 text-meta">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact?intent=demo"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Book a demo
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
