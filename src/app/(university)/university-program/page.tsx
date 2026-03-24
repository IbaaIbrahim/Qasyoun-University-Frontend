import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";
import UndergraduateArea from "@/components/undergraduate/undergraduate-area";
import PlanArea from "@/components/plan/plan-area";

export const metadata: Metadata = {
  title: "University Program - Acadia",
};

export default function UniversityProgramPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Academic Programs"
        subtitle="Academic Programs"
      />
      {/* breadcrumb area end */}

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90"/>
      {/* about area end */}

      {/* undergraduate area start */}
      <UndergraduateArea/>
      {/* undergraduate area end */}

      {/* plan area start */}
      <PlanArea/>
      {/* plan area end */}

    </main>
  );
}
