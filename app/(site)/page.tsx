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
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
export const metadata: Metadata = {
  title: "Acumen Technologies",
  description: "This is Home for Acumen Technologies",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Brands />
      <FunFact />
      <CTA />
      <About1 />
      <Feature />
      <FeaturesTab />
      <Integration />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
  );
}
