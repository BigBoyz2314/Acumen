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
  title: "UI/UX Design - Acumen Technologies",
  description: "UI/UX Design Services - Acumen Technologies",
};

const UIUXDesign = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-35">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h1 className="mb-5 pr-5 text-3xl font-bold text-black dark:text-white xl:text-hero">
                UI/UX{"   "}
                <span className="relative me-2 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Design
                </span>
              </h1>
              <p>
                We specialize in creating exceptional user experiences through
                innovative UI/UX design. Our expert team combines creativity
                with user-centered design principles to craft intuitive,
                engaging, and accessible digital interfaces. From wireframing
                and prototyping to user research and interaction design, we
                ensure your digital products not only look stunning but also
                deliver seamless user experiences that drive engagement and
                satisfaction.
              </p>
            </div>
            <div className="animate_right z-1 md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  className="object-contain dark:hidden"
                  src="/images/hero/UiUx.png"
                  alt="UI/UX Design"
                  width={400}
                  height={400}
                />
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

export default UIUXDesign;
