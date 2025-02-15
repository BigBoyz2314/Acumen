"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import { motion } from "motion/react"; // Importing motion from motion/react
import SectionHeader from "../Common/SectionHeader";

const Brands = () => {
  return (
    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 text-center dark:border-y-strokedark dark:bg-black" id="clients">
      <SectionHeader
        headerInfo={{
          title: "CLIENTS",
          subtitle: "Our Clients",
          description: `At Acumen Technologies, we pride ourselves on our diverse and esteemed clientele. Our clients come from various industries, and we are committed to providing them with the best possible solutions to meet their unique needs.`,
        }}
      />
      <div className="mx-auto max-w-c-1390 overflow-hidden px-4 md:px-8 2xl:px-0">
        <div className="flex flex-wrap items-center justify-center">
          {brandData.map((brand, key) => (
            <div key={key} className="m-4 w-auto flex-shrink-0">
              <SingleBrand brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
