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
  title: "Custom Software Development - Acumen Technologies",
  description: "Custom Software Development - Acumen Technologies",
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
                Custom {"   "}
                <span className="relative me-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Software
                </span>
                Development
              </h1>
              <p>
                We offer custom software development
                services designed to address the unique challenges and goals of
                your business. Our team works closely with you to understand
                your requirements and deliver tailored solutions that drive
                efficiency, scalability, and innovation. Leveraging cutting-edge
                technologies such as .NET, C#, C++, Next.js, React, TypeScript,
                Node.js, PHP, AWS, and more, we ensure that your software is
                robust, secure, and future-ready. Partner with us to transform
                your ideas into powerful, custom-built applications that give
                your business a competitive edge.
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
