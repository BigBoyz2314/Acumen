import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Integration from "@/components/Integration";
import FeaturesTab from "@/components/FeaturesTab";
import Feature from "@/components/Features";
import Image from "next/image";
import FunFact from "@/components/FunFact";

export const metadata: Metadata = {
  title: "Support & Mantainance - Acumen Technologies",
  description: "Support & Mantainance - Acumen Technologies",
  // other metadata
};

const CustomSoftDev = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-35">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                      The Acumen Technologies
                    </h4> */}
              <h1 className="mb-5 pr-5 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Support &{"   "}
                <span className="relative me-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                Mantainance
                </span>
              </h1>
                <p>
                We provide comprehensive Software Support
                and Maintenance services to ensure your applications run smoothly
                and efficiently. Our dedicated team specializes in troubleshooting,
                performance optimization, and regular updates to keep your software
                secure and up-to-date. Whether it's bug fixes, feature enhancements,
                or system monitoring, we are committed to delivering reliable and
                proactive support. Partner with us to maintain the integrity of your
                software and achieve long-term success in a rapidly evolving
                technological landscape.
                </p>
            </div>
            <div className="animate_right z-1 md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute left-30 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-12 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute bottom-0 right-5 z-1"
                />
                <div className="relative z-0 aspect-[700/444] w-full">
                  <Image
                    className=" object-contain dark:hidden"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden  object-contain dark:block"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FunFact />
      <Feature />
      <FeaturesTab />
      <Integration />
      <FAQ />
      <Contact />
    </>
  );
};

export default CustomSoftDev;
