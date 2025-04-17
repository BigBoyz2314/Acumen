import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "motion/react"

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight } = brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block m-2 sm:m-3 md:m-4 p-1 sm:p-2 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full"
      >
        <Image
          className="transition-all duration-300 hover:opacity-80 dark:hidden w-full h-auto object-contain"
          src={image}
          alt={name}
          fill
        />
        <Image
          className="hidden transition-all duration-300 hover:opacity-80 dark:block w-full h-auto object-contain"
          src={imageLight}
          alt={name}
          fill
        />
      </motion.div>
    </a>
  );
};

export default SingleBrand;
