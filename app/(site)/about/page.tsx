import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Image from "next/image";
import { motion } from "motion/react";
import About1 from "@/components/About";
import SectionHeader from "@/components/Common/SectionHeader";
import HeroAbout from "@/components/HeroAbout";
import FunFact from "@/components/FunFact";

export const metadata: Metadata = {
  title: "About Us - Acumen Technologies",
  description: "Learn about Acumen Technologies - Your Digital Transformation Partner",
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroAbout />

      <FunFact />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "OUR MISSION & VISION",
              subtitle: "What Drives Us Forward",
              description: "Our mission and vision statements guide everything we do at Acumen Technologies, shaping our approach to innovation and client success.",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-15">
            <div className="p-8 rounded-lg bg-zumthor dark:bg-blacksection">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Our Mission</h2>
              <p className="text-body-color dark:text-body-color-dark">
                To empower businesses with cutting-edge technology solutions that drive growth, innovation, and success in the digital age.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-zumthor dark:bg-blacksection">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Our Vision</h2>
              <p className="text-body-color dark:text-body-color-dark">
                To be the leading digital transformation partner, helping businesses thrive in an ever-evolving technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "OUR VALUES",
              subtitle: "Our Core Values",
              description: "These principles guide everything we do at Acumen Technologies, ensuring we deliver excellence in every project.",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-15">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and embracing new technologies"
              },
              {
                title: "Excellence",
                description: "Committed to delivering the highest quality in every project"
              },
              {
                title: "Integrity",
                description: "Operating with honesty and transparency in all our dealings"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white dark:bg-blacksection shadow-solid-5 dark:shadow-solid-6"
              >
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{value.title}</h3>
                <p className="text-body-color dark:text-body-color-dark">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default About; 