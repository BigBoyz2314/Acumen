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
  title: "Mobile App Development - Acumen Technologies",
  description: "Mobile App Development - Acumen Technologies",
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
                Mobile {"   "}
                <span className="relative me-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                App
                </span>
                Development
              </h1>
                <p>
                At Acumen Technologies, we specialize in Mobile App Development
                services designed to meet the unique needs of your business. Our
                expert team utilizes cutting-edge technologies such as React Native,
                Flutter, and native development to create dynamic, responsive, and
                scalable mobile applications. Whether you need a sleek consumer app,
                an enterprise solution, or a custom mobile application, we ensure
                your app is robust, secure, and optimized for performance. Partner
                with us to bring your vision to life and stay ahead in the mobile-first
                digital landscape.
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
