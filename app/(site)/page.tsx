import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About1 from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonial from "@/components/Testimonial";
export const metadata: Metadata = {
  title: "Acumen Technologies",
  description: "This is Home for Acumen Technologies",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Brands />
      <FunFact />
      <Feature />
      <About1 />
      <FeaturesTab />
      <Integration />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
  );
}
