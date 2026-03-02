"use client";
import React, { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "motion/react";

const Brands = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 text-center dark:border-y-strokedark dark:bg-black" id="clients">
      <SectionHeader
        headerInfo={{
          title: "TRUSTED BY",
          subtitle: "Trusted by teams building modern operations",
          description: "",
        }}
      />
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Single continuous row */}
        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex gap-4 md:gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: isMobile ? 30 : 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...brandData, ...brandData].map((brand, key) => (
              <div key={key} className="flex-shrink-0 w-[150px] md:w-[200px]">
                <SingleBrand brand={brand} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
