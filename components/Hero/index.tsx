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
          <div className="rounded-3xl bg-gradient-to-br from-[#E0F2FF] via-white to-[#F5E9FF] px-6 py-10 shadow-solid-8 dark:bg-gradient-to-br dark:from-blacksection dark:via-[#111827] dark:to-blackho md:px-10 lg:flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                The Acumen Technologies
              </h4> */}
              <h1 className="mb-5 pr-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Cloud-Based{" "}
                <span className="relative me-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  POS
                </span>
                for modern businesses
              </h1>
              <p className="mb-8">
                From in-store operations and online ordering to delivery workflows,
                loyalty, and analytics—Acumen Technologies delivers an all-in-one,
                cloud-based platform that scales from single locations to multi-branch
                operations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
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
            <div className="mt-10 animate_right z-1 md:w-1/2 lg:mt-0 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* Desktop monitor frame */}
                <div className="relative mx-auto w-full max-w-[520px]">
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
      </section>
    </>
  );
};

export default Hero;
