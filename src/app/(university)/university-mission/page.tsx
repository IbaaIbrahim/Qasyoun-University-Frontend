import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseAreaThree from "@/components/campus/campus-choose-area-3";
import MissionFeatureArea from "@/components/mission/mission-feature-area";
import MissionAreaTwo from "@/components/mission/mission-area-2";

export const metadata: Metadata = {
  title: "University Mission - Acadia",
};

export default function UniversityMissionPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="Mission and values" subtitle="Mission and values" />
      {/* breadcrumb area end */}

      {/* campus area start */}
      <CampusChooseAreaThree/>
      {/* campus area end */}

      {/* mission feature area start */}
      <MissionFeatureArea/>
      {/* mission feature area end */}

      {/* mission area start */}
      <MissionAreaTwo/>
      {/* mission area end */}
    </main>
  );
}
