"use client";

import Image from "next/image";
import Link from "next/link";
import ProductMonitorFrame from "./ProductMonitorFrame";

export type ProductSection = {
  title: string;
  body?: string;
  items: string[];
};

export type ProductPageProps = {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
  featureSection?: ProductSection;
  idealForSection?: ProductSection;
};

function TickIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6L9 17L4 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductPageShell({
  badge,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imageHint,
  featureSection,
  idealForSection,
}: ProductPageProps) {
  return (
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      {/* Hero - Blink style */}
      <section className="pb-16 pt-8 lg:pb-20 lg:pt-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          <div className="lg:w-1/2">
            <span className="mb-4 inline-block rounded-full bg-zumthor px-4 py-1.5 text-sm font-medium text-primary dark:bg-btndark dark:text-primary">
              {badge}
            </span>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl xl:text-hero">
              {title}
            </h1>
            <p className="mb-8 text-lg text-waterloo dark:text-manatee">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?intent=demo"
                className="rounded-full bg-primary px-7 py-3 font-medium text-white transition hover:bg-primaryho"
              >
                Book a demo
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-stroke px-7 py-3 font-medium text-black transition hover:border-primary dark:border-strokedark dark:text-white dark:hover:border-primary"
              >
                View pricing
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            {imageSrc ? (
              <ProductMonitorFrame
                src={imageSrc}
                alt={imageAlt ?? title}
                size="lg"
              />
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-stroke bg-zumthor/50 dark:border-strokedark dark:bg-btndark/30 flex items-center justify-center">
                <span className="px-6 text-center text-sm text-waterloo dark:text-manatee">
                  {imageHint ?? `Add a hero visual for “${title}”`}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What you get - Feature block */}
      <section className="rounded-3xl border border-stroke bg-white p-8 shadow-solid-8 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 lg:p-12">
        <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
          What you get
        </h2>
        <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-meta/15 text-meta">
                <TickIcon />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Alternating content blocks - Blink style */}
      {featureSection && (
        <section className="mt-16 lg:mt-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                {featureSection.title}
              </h2>
              {featureSection.body && (
                <p className="mb-6 text-waterloo dark:text-manatee">{featureSection.body}</p>
              )}
              <ul className="space-y-3">
                {featureSection.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zumthor text-primary dark:bg-btndark">
                      <TickIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl border border-stroke bg-zumthor/30 p-8 dark:border-strokedark dark:bg-btndark/20">
                <p className="text-center text-sm text-waterloo dark:text-manatee">
                  Add a supporting visual or screenshot here
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {idealForSection && (
        <section className="mt-16 lg:mt-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <div className="rounded-2xl border border-stroke bg-zumthor/30 p-8 dark:border-strokedark dark:bg-btndark/20">
                <p className="text-center text-sm text-waterloo dark:text-manatee">
                  Add a supporting visual here
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/2">
              <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                {idealForSection.title}
              </h2>
              <ul className="space-y-3">
                {idealForSection.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <TickIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA block - Blink style */}
      <section className="mt-16 lg:mt-24">
        <div className="rounded-3xl bg-gradient-to-br from-[#E0F2FF] via-white to-[#F5E9FF] p-8 text-center shadow-solid-8 dark:from-blacksection dark:via-[#111827] dark:to-blackho lg:p-12">
          <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
            Ready to get started?
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-waterloo dark:text-manatee">
            See how {title} can streamline your operations. Book a demo and we&apos;ll show you the
            right setup for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?intent=demo"
              className="rounded-full bg-primary px-7 py-3 font-medium text-white transition hover:bg-primaryho"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-stroke bg-white px-7 py-3 font-medium text-black transition hover:border-primary dark:border-strokedark dark:bg-blacksection dark:text-white"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
