import { Metadata } from "next";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Products - Acumen Technologies",
  description: "Explore Acumen's cloud-based POS, ordering, fleet, loyalty, and analytics products.",
};

export default function ProductsPage() {
  return (
    <div className="pb-20 pt-40">
      <Products />
      <Contact />
    </div>
  );
}

