import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Pricing - Acumen Technologies",
  description: "Cloud-based POS pricing plans from Acumen Technologies.",
};

export default function PricingPage() {
  return (
    <div className="pb-20 pt-40">
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}

