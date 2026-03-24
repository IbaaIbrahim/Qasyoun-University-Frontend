import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";
import CounterFour from "@/components/counter/counter-four";
import MissionArea from "@/components/mission/mission-area";
import AboutThree from "@/components/about/about-three";
import AboutCampus from "@/components/about/about-campus";
import TeamAreaThree from "@/components/team/team-area-three";

export const metadata: Metadata = {
  title: "University About - Acadia",
};

export default function UniversityAboutPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="About Us"
        subtitle="About Us"
      />
      {/* breadcrumb area end */}

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90"/>
      {/* about area end */}

      {/* counter area start */}
      <CounterFour/>
      {/* counter area end */}

      {/* mission area start */}
      <MissionArea/>
      {/* mission area end */}

      {/* about area start */}
      <AboutThree/>
      {/* about area end */}

      {/* team area start */}
      <TeamAreaThree/>
      {/* team area end */}

      {/* about campus area start */}
      <AboutCampus/>
      {/* about campus area end */}
    </main>
  );
}
