import { Metadata } from "next";
import ProductPageShell from "@/components/Products/ProductPageShell";

export const metadata: Metadata = {
  title: "Loyalty & Engagement - Acumen Technologies",
  description: "Customer loyalty, offers, and engagement tools connected to your POS and ordering channels.",
};

export default function LoyaltyPage() {
  return (
    <div className="pb-20 pt-40">
      <ProductPageShell
        badge="PRODUCT"
        title="Loyalty & Engagement"
        description="Build retention with loyalty, offers, and engagement features that connect to your in-store and online ordering workflows."
        imageHint="Customer rewards dashboard with points, tiers, and offer cards on a phone mockup."
        bullets={[
          "Customer profiles and engagement flows",
          "Offers and promotions (plan dependent)",
          "Connected POS + ordering data for targeting",
          "Measure repeat behavior and retention",
          "Designed to scale across branches",
        ]}
        featureSection={{
          title: "Turn First-Time Buyers into Regulars",
          body: "Use connected data from your POS and online ordering channels to reward loyal customers, win back inactive ones, and grow lifetime value.",
          items: [
            "Loyalty programs aligned to your brand",
            "Triggered offers based on visit or spend patterns",
            "Targeted campaigns for specific customer segments",
            "Retention metrics tied directly to revenue",
          ],
        }}
        idealForSection={{
          title: "Best For",
          items: [
            "Concepts with strong repeat behavior",
            "Brands building long-term customer communities",
            "Teams focused on lifetime value and retention",
          ],
        }}
      />
    </div>
  );
}

