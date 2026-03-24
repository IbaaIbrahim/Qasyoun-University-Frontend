import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseAreaFour from "@/components/campus/campus-choose-area-4";
import HistoryArea from "./_components/history-area";

export const metadata: Metadata = {
  title: "University History - Acadia",
};

export default function UniversityHistoryPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="History" subtitle="History" />
      {/* breadcrumb area end */}

      {/* campus choose area start */}
      <CampusChooseAreaFour/>
      {/* campus choose area end */}

      {/* history area start */}
      <HistoryArea/>
      {/* history area end */}

    </main>
  );
}
