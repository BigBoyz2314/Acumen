"use client";
import React, { useEffect, useState } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";
import { motion, useAnimationControls } from "motion/react";

const Brands = () => {
  const [isMobile, setIsMobile] = useState(false);
  const firstRowControls = useAnimationControls();
  const secondRowControls = useAnimationControls();

  // Split brands into two arrays for two rows
  const firstRow = brandData.slice(0, Math.ceil(brandData.length / 2));
  const secondRow = brandData.slice(Math.ceil(brandData.length / 2));

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
          title: "CLIENTS",
          subtitle: "Our Clients",
          description: `At Acumen Technologies, we pride ourselves on our diverse and esteemed clientele. Our clients come from various industries, and we are committed to providing them with the best possible solutions to meet their unique needs.`,
        }}
      />
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* First Row */}
        <div className="relative flex overflow-hidden py-4">
          <motion.div 
            className="flex gap-4 md:gap-8"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: isMobile ? 15 : 25,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...firstRow, ...firstRow].map((brand, key) => (
              <div key={key} className="flex-shrink-0 w-[150px] md:w-[200px]">
                <SingleBrand brand={brand} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Reverse Direction */}
        <div className="relative flex overflow-hidden py-4">
          <motion.div 
            className="flex gap-4 md:gap-8"
            animate={{
              x: ["-50%", "0%"]
            }}
            transition={{
              duration: isMobile ? 15 : 25,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {[...secondRow, ...secondRow].map((brand, key) => (
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
