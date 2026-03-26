"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-35">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="rounded-3xl bg-white px-6 py-10 shadow-solid-8 dark:bg-gradient-to-br dark:from-blacksection dark:via-[#111827] dark:to-blackho md:px-10 lg:flex lg:items-center flex-col">
            <div className="w-3/4 text-center">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                The Acumen Technologies
              </h4> */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-[#1D4ED8] dark:text-[#60A5FA]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E]/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                </span>
                <span>Fully cloud-based POS</span>
              </div>
              <h1 className="mb-5 pr-5 text-5xl font-bold leading-tight text-[#0F3FD0] dark:text-[#60A5FA] md:text-5xl xl:text-hero">
                Cloud-Based{" "}
                <span className="relative me-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  POS
                </span>
                for modern businesses
              </h1>
              <p className="mb-8 w-3/4 mx-auto">
                From in-store operations and online ordering to delivery workflows,
                loyalty, and analytics—Acumen Technologies delivers an all-in-one,
                cloud-based platform that scales from single locations to multi-branch
                operations.
              </p>

              <div className="flex flex-row items-center mt-4 gap-4 align-center justify-center">
                <Link
                  href="/contact?intent=demo"
                  className="rounded-full bg-primary px-7.5 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Book a demo
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-full border border-stroke bg-white px-7.5 py-3 font-medium text-black duration-300 ease-in-out hover:border-primary dark:border-strokedark dark:bg-blacksection dark:text-white"
                >
                  View pricing
                </Link>
              </div>
            </div>
            <div className="mt-2 animate_right z-1 w-full lg:mt-0 lg:block">
              <div className="relative mt-8">
                {/* Laptop on the left, iMac on the right */}
                <div className="relative mx-auto flex w-full max-w-5xl items-end justify-between gap-6 lg:gap-12">
                  {/* Laptop mockup (left, slightly higher) */}
                  <div className="relative hidden -translate-y-3 sm:block w-[420px] md:w-[460px] lg:w-[480px]">
                    <Image
                      src="/images/laptop-mockup.png"
                      alt="Cloud POS running on laptop"
                      width={520}
                      height={346}
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  {/* Desktop monitor (right) */}
                  <div className="relative w-full max-w-[360px] md:max-w-[420px] lg:max-w-[520px]">
                    <div className="rounded-t-2xl border-4 border-stroke bg-[#1a1a1a] dark:border-strokedark">
                      <div className="flex items-center gap-2 border-b border-stroke/30 px-4 py-2 dark:border-strokedark/30">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <Image
                          src="/images/Pos-Image.png"
                          alt="Cloud POS - Product search and shopping cart"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div className="mx-auto h-4 w-16 rounded-b-md bg-[#2d2d2d]" />
                    <div className="mx-auto -mt-0.5 h-2 w-24 rounded-b-md bg-[#3d3d3d]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
