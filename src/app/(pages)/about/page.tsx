import { Metadata } from "next";
import AboutBanner from "@/components/about/banner/about-banner";
import TutorArea from "@/components/tutor/tutor-area";
import CounterSix from "@/components/counter/counter-six";
import MissionArea from "@/components/mission/mission-area";
import TeamArea from "@/components/team/team-area";
import BrandArea from "@/components/brand/brand-area";

export const metadata: Metadata = {
    title: "About - Acadia",
  };

export default function AboutPage() {
  return (
    <main>

      {/* about banner area start */}
      <AboutBanner />
      {/* about banner area end */}

      {/* tutor area start */}
      <TutorArea/>
      {/* tutor area end */}

      {/* counter area start */}
      <CounterSix/>
      {/* counter area end */}

      {/* mission area start */}
      <MissionArea top_cls="pt-120 pb-120"/>
      {/* mission area end */}

      {/* team area start */}
      <TeamArea/>
      {/* team area end */}

      {/* brand area start */}
      <BrandArea/>
      {/* brand area end */}

    </main>
  );
}
