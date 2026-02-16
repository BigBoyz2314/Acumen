import { Metadata } from "next";
import ProductPageShell from "@/components/Products/ProductPageShell";

export const metadata: Metadata = {
  title: "Employee Tracking System - Acumen Technologies",
  description:
    "Track employees in the field for order taking, client meetings, and location-based tasks.",
};

export default function FleetManagementPage() {
  return (
    <div className="pb-20 pt-40">
      <ProductPageShell
        badge="PRODUCT"
        title="Employee Tracking System"
        description="Track field employees as they visit customers for order taking, sales visits, and meetings—with clear visibility into where work is happening."
        imageHint="City map with live location pins and a side panel listing field reps, visit status, and next stops."
        bullets={[
          "Real-time location visibility for field employees",
          "Visit logging for order taking and client meetings",
          "Location-based tasks and check-ins",
          "Reporting on visit frequency and coverage",
          "Supports multi-region and multi-branch teams",
        ]}
        featureSection={{
          title: "How Teams Use Employee Tracking",
          body: "Give your operations and sales leaders a clear picture of who is in the field, which customers they visited, and what was accomplished.",
          items: [
            "Daily route planning for order-taking staff",
            "Meeting check-ins and outcomes logged on location",
            "Geo-tagged tasks and visit history",
            "Coverage reports by region, territory, or segment",
          ],
        }}
        idealForSection={{
          title: "Great For",
          items: [
            "Field sales and order-taking teams",
            "Account managers and B2B relationship teams",
            "Any business with on-site visits and tasks",
          ],
        }}
      />
    </div>
  );
}

