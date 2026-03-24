import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import LeadershipArea from "./_components/leadership-area";

export const metadata: Metadata = {
  title: "University Leadership - Acadia",
};

export default function UniversityLeaderShipPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Our Leadership"
        subtitle="Our Leadership"
      />
      {/* breadcrumb area end */}

      {/* leadership area start */}
      <LeadershipArea/>
      {/* leadership area end */}
    </main>
  );
}
