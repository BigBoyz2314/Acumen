"use client";

import Link from "next/link";
import SectionHeader from "@/components/Common/SectionHeader";
import { productsData } from "./productsData";

const Products = () => {
  return (
    <section className="py-16 lg:py-16 bg-gradient-to-b from-[#F3F7FF] via-white to-[#F9F5FF] dark:bg-gradient-to-b dark:from-blacksection dark:via-[#050816] dark:to-blackho" id="products">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "PRODUCTS",
            subtitle: "Grow faster, manage smarter with our cloud platform",
            description: "",
          }}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productsData.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl border border-stroke bg-white/90 p-7 shadow-solid-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-primary hover:bg-white dark:border-strokedark dark:bg-blacksection/90 dark:shadow-solid-6"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zumthor text-primary dark:bg-btndark">
                <span
                  className="text-primary"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: p.icon }}
                />
              </div>
              <h3 className="mb-2 text-itemtitle2 font-semibold text-black dark:text-white">
                {p.title}
              </h3>
              <p className="mb-6">{p.description}</p>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition group-hover:bg-primaryho">
                Learn more
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
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-blackho dark:bg-white dark:text-black"
          >
            View pricing
          </Link>
          <Link
            href="/contact?intent=demo"
            className="rounded-full border border-stroke bg-white px-6 py-3 font-medium text-black hover:border-primary dark:border-strokedark dark:bg-blacksection dark:text-white"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;

