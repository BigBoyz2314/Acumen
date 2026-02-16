import { Metadata } from "next";
import ProductPageShell from "@/components/Products/ProductPageShell";

export const metadata: Metadata = {
  title: "Online Ordering - Acumen Technologies",
  description: "Website ordering with menu sync and operational workflows connected to your POS.",
};

export default function OnlineOrderingPage() {
  return (
    <div className="pb-20 pt-40">
      <ProductPageShell
        badge="PRODUCT"
        title="Online Ordering System"
        description="Offer customers a seamless ordering experience with website ordering that stays connected to your POS and operations."
        imageHint="Show a branded ordering experience with a website on a laptop and a matching mobile app on a phone."
        bullets={[
          "Real-time menu and availability sync",
          "Pickup and delivery ordering flows",
          "Promo and offer support (plan dependent)",
          "Order status updates for customers",
          "Operational reporting across channels",
        ]}
        featureSection={{
          title: "Use Cases for Online Ordering",
          body: "Move more orders through your own channels with a branded ordering experience that connects directly to your operations and reporting.",
          items: [
            "Website ordering for pickup and delivery",
            "Automatic sync with in-store menus and prices",
            "Promo codes and limited-time offers",
            "Order status notifications to customers",
          ],
        }}
        idealForSection={{
          title: "Perfect For",
          items: [
            "Restaurants wanting to own the customer relationship",
            "Brands reducing dependency on third-party aggregators",
            "Concepts with strong delivery and pickup demand",
          ],
        }}
      />
    </div>
  );
}

