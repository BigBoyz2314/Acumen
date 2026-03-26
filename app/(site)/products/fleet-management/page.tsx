import { Metadata } from "next";
import AremLanding from "@/components/Products/AremLanding";

export const metadata: Metadata = {
  title: "AREM - Employee Tracking System | Acumen Technologies",
  description:
    "AREM helps track and manage field staff with attendance, tasks, mileage and location-based workflows.",
};

export default function FleetManagementPage() {
  return (
    <div className="pb-20">
      <AremLanding />
    </div>
  );
}

