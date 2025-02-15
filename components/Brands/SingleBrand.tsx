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
      className="relative inline-block m-4 p-2 w-60 h-32"
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
