import { Metadata } from "next";
import ProductPageShell from "@/components/Products/ProductPageShell";

export const metadata: Metadata = {
  title: "Advanced Data & Analytics - Acumen Technologies",
  description: "Dashboards and reporting for sales trends, customer behavior, and operational performance.",
};

export default function AnalyticsPage() {
  return (
    <div className="pb-20 pt-40">
      <ProductPageShell
        badge="PRODUCT"
        title="Advanced Data & Analytics"
        description="Turn operational data into decisions with dashboards and reporting for sales trends, product performance, and customer behavior."
        imageHint="Analytics dashboard with charts, KPIs, and filters highlighting sales, retention, and performance metrics."
        bullets={[
          "Sales and channel performance reporting",
          "Peak-hour and top-item insights",
          "Multi-branch analytics views",
          "Export-ready reporting (plan dependent)",
          "Dashboards aligned to operational KPIs",
        ]}
        featureSection={{
          title: "From Raw Data to Clear Decisions",
          body: "Bring POS, ordering, and field activity data into one place to understand performance and decide what to fix, grow, or stop.",
          items: [
            "Sales performance by channel, store, and product",
            "Trend analysis for peak hours and seasonal shifts",
            "Customer behavior insights tied to loyalty and orders",
            "Exportable reports for finance and leadership teams",
          ],
        }}
        idealForSection={{
          title: "Helpful For",
          items: [
            "Operations and growth teams",
            "Finance and strategy stakeholders",
            "Founders who want a clear picture of performance",
          ],
        }}
      />
    </div>
  );
}

