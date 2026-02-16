import { Metadata } from "next";
import ProductPageShell from "@/components/Products/ProductPageShell";

export const metadata: Metadata = {
  title: "Modern POS - Acumen Technologies",
  description: "Cloud-based POS built for modern operations.",
};

export default function PosRmsPage() {
  return (
    <div className="pb-20 pt-40">
      <ProductPageShell
        badge="PRODUCT"
        title="Modern POS"
        description="A fast, cloud-based POS to manage in-store operations, staff permissions, and reporting from one place."
        imageSrc="/images/Pos-Image.png"
        imageAlt="Cloud POS - Product search and shopping cart"
        bullets={[
          "Cloud-based POS with real-time sync",
          "Role-based access and staff management",
          "Menu, items, modifiers, and pricing control",
          "Sales reporting and operational visibility",
          "Designed to scale from one store to many",
        ]}
        featureSection={{
          title: "Where Modern POS Helps You Win",
          body: "Use Modern POS for daily in-store operations, fast checkout, and clear visibility into what is selling. Staff get a simple interface, while managers get the control and reporting they need.",
          items: [
            "Front-counter and table-side order taking",
            "Branch-wise item and price configuration",
            "Shift closing and cash-up visibility",
            "Centralized reporting across locations",
          ],
        }}
        idealForSection={{
          title: "Ideal For",
          items: [
            "Restaurants and cafés",
            "Retail stores and chains",
            "Franchises with multi-branch operations",
          ],
        }}
      />
    </div>
  );
}

