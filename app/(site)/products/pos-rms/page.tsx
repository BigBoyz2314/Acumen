import { Metadata } from "next";
import PosLanding from "@/components/Products/PosLanding";

export const metadata: Metadata = {
  title: "Modern POS - Acumen Technologies",
  description:
    "The all-in-one cloud POS: manage everything, everywhere. Multi-channel orders, staff tools, and advanced analytics.",
};

export default function PosRmsPage() {
  return (
    <div>
      <PosLanding />
    </div>
  );
}
